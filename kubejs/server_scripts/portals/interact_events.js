/*
    Allow the player to right-click a portal and teleport to another dimension.
    This script implements the interaction event as well as the linking and generation
    logic
*/
BlockEvents.rightClicked('kubejs:depths_portal', event => {
    interactEvent(event, "depths")
    event.cancel()
})

BlockEvents.rightClicked('kubejs:dragon_portal', event => {
    interactEvent(event, "dragonrealm")
    event.cancel()
})

BlockEvents.rightClicked('kubejs:inbetween_portal', event => {
    interactEvent(event, "inbetween")
    event.cancel()
})

// Items which the player can hold in their off hand and still use the portal.
const allowedOffhandItems = ['minecraft:air', 'minecraft:shield', 'minecraft:totem_of_undying', 'minecraft:arrow', 'minecraft:spectral_arrow', 'minecraft:tipped_arrow',
    'forbidden_arcanus:obsidian_skull_shield', 'alexsmobs:shield_of_the_deep', 'alexscaves:resistor_shield', 'dreadsteel:dreadsteel_shield',
    'the_bumblezone:honey_crystal_shield', 'call_of_yucutan:hematite_shield', 'unusualend:enderblob_shield', 'twilightforest:knightmetal_shield',
    'wan_ancient_beasts:reinforced_shield', 'iceandfire:cyclops_eye', 'witherstormmod:amulet', 'witherstormmod:phasometer']

/*
    Handle the interaction event for all three portal types
*/
function interactEvent(event, portalType) {
    // Do not teleport player if they are shifting
    if (event.player.shiftKeyDown)
        event.cancel()

    if (event.player.mainHandItem.id.toString() == 'minecraft:air' &&
        allowedOffhandItems.indexOf(event.player.offHandItem.id.toString()) != -1) {

        var server = event.getServer()
        var data = server.getPersistentData()
        var level = event.getLevel()
        
        var blockPos = event.block.getPos()
        var x = blockPos.getX(); var y = blockPos.getY(); var z = blockPos.getZ()
        var playerId = event.player.uuid.toString()
        var dimensionId = level.dimension.toString()

        // Get the dimension the player will teleport to
        var targetDim = getTargetDim(portalType, dimensionId)
        // There is no valid target because the portal is being used in an incompatible dimension
        if (targetDim == 'noTarget') {
            let cmd = `execute as ${playerId} run title @s actionbar {"type":"translatable","translate":"actionbar.kubejs.${portalType}_portal_error"}`
            server.runCommandSilent(cmd)
            event.cancel()
        }

        // Check persistent data to find a portal to link to
        var destPortal = checkPersistentData(data, portalType, targetDim, dimensionId, x, y, z)
        var createPortal = false    // Will a portal block have to be generated?
        var destX = 0; var destY = 0; var destZ = 0
        
        // Determine to coordinates to teleport to
        if (destPortal == null) {
            let coords = scaleCoords(portalType, targetDim, x, z)
            createPortal = true

            destX = coords[0]
            destY = clampVertical(targetDim, y)
            destZ = coords[1]  
        } else {
            destX = destPortal["x"]
            destY = destPortal["y"] + 1     // Spawn on top of the portal
            destZ = destPortal["z"]
        }

        runCommands(server, data, portalType, targetDim, playerId, destX, destY, destZ, createPortal)
    }
}

/*
    Determines what the target dimension is based on the portal type and current dimension.
    Returns dimension id or 'noTarget' if none was found
*/
function getTargetDim(portalType, dimensionId) {
    let targetDim = 'noTarget'

    switch (portalType) {
        case "depths":
            if (dimensionId == 'minecraft:overworld')
                targetDim = 'kubejs:the_depths'
            else if (dimensionId == 'kubejs:the_depths')
                targetDim = 'minecraft:overworld'
            break;
        
        case "dragonrealm":
            if (dimensionId == 'minecraft:overworld')
                targetDim = 'kubejs:dragonrealm'
            else if (dimensionId == 'kubejs:dragonrealm')
                targetDim = 'minecraft:overworld'
            break;

        case "inbetween":
            if (dimensionId == 'minecraft:overworld')
                targetDim = 'kubejs:the_inbetween'
            else if (dimensionId == 'kubejs:the_inbetween')
                targetDim = 'minecraft:overworld'
            break;
    }
    return targetDim
}

/*
    Checks the server's persistent data to find any already placed portals nearby
    portalType = "depths", "dragonrealm", or "inbetween"
*/
function checkPersistentData(data, portalType, targetDim, dimensionId, x, y, z) {
    portalsInit(data)
    addPortal(data, portalType, dimensionId, x, y, z)
    
    
    var retVal = null
    var closestDist = Number.MAX_SAFE_INTEGER
    var minDist = 128   // The minimum distance portals can be to link together
    // Scale the minimum distance according to coordinate scale
    switch (portalType) {
        case 'depths':
            // Minimum distance is now 32 when going from overworld -> the depths
            if (targetDim == 'kubejs:the_depths') minDist = minDist / 4
            break
        case 'inbetween':
            // Minimum distance is now 4 when going from overworld -> inbetween
            if (targetDim == 'kubejs:the_inbetween') minDist = minDist / 32
            break
    }
    
    // Iterate through all portal objects of desired type
    data.get(portalType).forEach(element => {
        if (element["level"] == targetDim) {
                
            // Calculate the euclidean distance of the found portal
            let coords = scaleCoords(portalType, targetDim, x, z)
            let distance = Math.sqrt((Math.pow(Math.abs(element["x"] - coords[0]), 2)) + (Math.pow(Math.abs(element["z"] - coords[1]), 2)))
            
            // DEBUG
            //console.log(`curr coords (adjusted): ${coords[0]} ${coords[1]}    dest coords: ${element["x"]} ${element["z"]}`)
            //console.log('distance (relative): ' + distance)
    
            // The portal is less than 100 blocks away and closer than the last found portal
            if (distance <= 100 && distance < closestDist) {
                retVal = element
                closestDist = distance
            }  
        }
    })
    return retVal
}

/*
    Initialize the portals' fields.
    Will only do anything if the fields don't already exist
*/
function portalsInit(data) {
    if (!data.contains("depths"))
        data.put("depths", [])
    if (!data.contains("dragonrealm"))
        data.put("dragonrealm", [])
    if (!data.contains("inbetween"))
        data.put("inbetween", [])
}

/*
    Adds current portal to persistent data.
    Only will add portal if a matching element is not found
*/
function addPortal(data, portalType, dimensionId, x, y, z) {
    let containsPortal = false

    data.get(portalType).forEach(element => {
        if (element["level"] == dimensionId && element["x"] == x && element["y"] == y && element["z"] == z)
            containsPortal = true
    })
    
    if (!containsPortal)
        data.get(portalType).push({"x": x, "y": y, "z": z, "level": dimensionId})
}

/*
    Scales the horizontal coordinates according to which dimension the player is travelling to
    and which dimension they are travelling from
*/
function scaleCoords(portalType, targetDim, x, z) {
    switch (portalType) {
        // Player is using a Depths Portal
        // Coordinate scale is 1-4 with overworld
        case 'depths':
            switch (targetDim) {
                case 'minecraft:overworld':
                    return [Math.round(x*4), Math.round(z*4)]

                case 'kubejs:the_depths':
                    return [Math.round(x/4), Math.round(z/4)]
            }
            break

        // Player is using a Dragonrealm Portal
        // Coordinate scale is 1-1 with overworld
        case 'dragonrealm':
            return [x, z]
            
        // Player is using an Inbetween Portal
        // Coordinate scale is 1-32 with overworld
        case 'inbetween':
            switch (targetDim) {
                case 'minecraft:overworld':
                    return [Math.round(x*32), Math.round(z*32)]

                case 'kubejs:the_inbetween':
                    return [Math.round(x/32), Math.round(z/32)]
            }
            break
    }
}

/*
    Return a clamped y value based on the height of the destination dimension
*/
function clampVertical(targetDim, y) {
    let retVal = y

    switch (targetDim) {
        case 'kubejs:the_depths':
            if (y < 0) retVal = 0
            else if (y > 60) retVal = 60
            break
        
        case 'kubejs:dragonrealm':
            if (y < 60) retVal = 60
            else if (y > 150) retVal = 150
            break
        
        case 'kubejs:the_inbetween':
            if (y < 60) retVal = 60
            else if (y > 100) retVal = 100
            break
        
        case 'minecraft:overworld':
            if (y < 60) retVal = 60
            else if (y > 100) retVal = 100
            break
    }
    return retVal
}

/*
    Organizes which commands need to be run.
    Will run the teleport command and commands to fill the portal area
*/
function runCommands(server, data, portalType, targetDim, playerId, destX, destY, destZ, createPortal) {

    // Teleport the player first so that the area is loaded
    let tpCmd = `execute in ${targetDim} run tp ${playerId} ${destX} ${destY} ${destZ}`
    server.runCommandSilent(tpCmd)

    if (createPortal) {
        // Create and run commands for generating a spawn area
        generatePortal(server, data, portalType, targetDim, destX, destY, destZ)
    }
    else {
        // Prevent suffocation traps on an already generated portal (obviously not fool-proof)
        var airCmd = `execute in ${targetDim} run fill ${destX} ${destY} ${destZ} ${destX} ${destY+1} ${destZ} minecraft:air destroy`
        server.runCommandSilent(airCmd)
    }
}

/*
    Runs the commands necessary to create the spawn platform area for the portal.
    Only is called if portal is being generated for the first time
*/
function generatePortal(server, data, portalType, targetDim, destX, destY, destZ) {
    // Get id of the blocks needed
    let portalId = 'minecraft:bedrock'
    let blockId = 'minecraft:stone'
    let lampId = 'minecraft:glowstone'
    switch (portalType) {
        case 'depths':
            portalId = 'kubejs:depths_portal'
            blockId = 'minecraft:deepslate_bricks'
            lampId = 'supplementaries:deepslate_lamp'
            break
        case 'dragonrealm':
            portalId = 'kubejs:dragon_portal'
            blockId = 'create:cut_limestone_bricks'
            lampId = 'architects_palette:runic_glowstone'
            break
        case 'inbetween':
            portalId = 'kubejs:inbetween_portal'
            blockId = 'rubinated_nether:altar_stone_bricks'
            lampId = 'supplementaries:blackstone_lamp[axis=y]'
            break
    }

    // Clear an area of blocks
    var clearCmd = `execute in ${targetDim} run fill ${destX-2} ${destY-2} ${destZ-2} ${destX+2} ${destY+1} ${destZ+2} minecraft:air`
    server.runCommandSilent(clearCmd)

    // Place a platform of blocks below the portal
    var platformCmd = `execute in ${targetDim} run fill ${destX-2} ${destY-2} ${destZ-2} ${destX+2} ${destY-2} ${destZ+2} ${blockId}`
    server.runCommandSilent(platformCmd)

    // Place light sources
    placeLamps(server, targetDim, destX, destY, destZ, lampId)

    // Place the portal block
    var blockCmd = `execute in ${targetDim} run setblock ${destX} ${destY-1} ${destZ} ${portalId}`
    server.runCommandSilent(blockCmd)

    // Add newly made portal to data
    data.get(portalType).push({"x": destX, "y": destY-1, "z": destZ, "level": targetDim})
}

/*
    This function runs 4 commands to place lamp blocks on all 4 sides of the spawn platform
*/
function placeLamps(server, targetDim, destX, destY, destZ, lampId) {
    let cmd = `execute in ${targetDim} run setblock ${destX-2} ${destY-2} ${destZ} ${lampId}`
    server.runCommandSilent(cmd)

    cmd = `execute in ${targetDim} run setblock ${destX+2} ${destY-2} ${destZ} ${lampId}`
    server.runCommandSilent(cmd)

    cmd = `execute in ${targetDim} run setblock ${destX} ${destY-2} ${destZ-2} ${lampId}`
    server.runCommandSilent(cmd)

    cmd = `execute in ${targetDim} run setblock ${destX} ${destY-2} ${destZ+2} ${lampId}`
    server.runCommandSilent(cmd)
}

/*
    Plays a teleport sound at the specified location.
    (Might not be audible for the player who is teleporting because of loading).
*/
function playSound(server, targetDim, destX, destY, destZ) {
    server.runCommandSilent(`execute in ${targetDim} run playSound minecraft:entity.enderman.teleport block @a ${destX} ${destY} ${destZ} 100`)
}