// Handle all portal block right-click events
BlockEvents.rightClicked(event => {
    var server = event.getServer()
    var level = event.getLevel()
    

    var blockId = event.block.id.toString()
    var blockPos = event.block.pos
    var x = blockPos.getX(); var y = blockPos.getY(); var z = blockPos.getZ()
    var playerId = event.player.getDisplayName()
    var dimensionId = level.dimension.toString()

    // Make sure both hands are empty
    if (event.player.mainHandItem.id.toString() == 'minecraft:air' && event.player.offHandItem.id.toString() == 'minecraft:air') {
    
        // Teleport player to The Depths when right-clicking the portal
        if (blockId == 'kubejs:depths_portal') {
            let targetDim = getTargetDim('depths')
            if (targetDim == 'noTarget') {
                event.player.tell('No target dimension found')  // DEBUG
                event.cancel()
            }

            let cmd = `execute in ${targetDim} run tp ${playerId} ${x} ${y} ${z}`
            
            // Teleport player
            server.runCommandSilent(cmd)
            event.cancel()
        }

        // Teleport player to The Dragonrealm when right-clicking the portal
        else if (blockId == 'kubejs:dragon_portal') {
            let targetDim = getTargetDim('dragonrealm')
            if (targetDim == 'noTarget') {
                event.player.tell('No target dimension found')  // DEBUG
                event.cancel()
            }

            let cmd = `execute in ${targetDim} run tp ${playerId} ${x} ${y} ${z}`
            
            // Teleport Player
            server.runCommandSilent(cmd)
            event.cancel()
        }

        // Teleport player to The Inbetween when right-clicking the portal
        else if (blockId == 'kubejs:inbetween_portal') {
            let targetDim = getTargetDim('inbetween')
            if (targetDim == 'noTarget') {
                event.player.tell('No target dimension found')  // DEBUG
                event.cancel()
            }

            let cmd = `execute in ${targetDim} run tp ${playerId} ${x} ${y} ${z}`

            // Teleport Player
            server.runCommandSilent(cmd)
            event.cancel()
        }
    }

    // Checks the server's persistent data to find any already activated portals nearby
    // portalType = "depths", "dragonrealm", or "inbetween"
    function checkPersistentData(portalType) {
        let data = server.getPersistentData()
        let targetDim = getTargetDim(portalType)

        if (targetDim = 'noTarget') return

        // Initialize the portals field if not done so already
        if (data.portals == null) {
            portalsInit(data, portalType)
        }

        // Iterate through all portal objects of specified type
        data.portals[portalType].forEach(element => {
            let minDist = 60000000
            let closestPortal = null

            // Single out portals in the target dimension
            if (element["level"] == targetDim) {

                // Calculate the taxicab distance from current portal
                let dist = 0


            }
            
        });
    }

    // Initializes the portals field of data with one entry
    function portalsInit(data, portalType) {
        let pData = {"depths": [], "dragonrealm": [], "inbetween": []}
        let portalObj = {"x": x, "y": y, "z": z, "level": dimensionId}
        pData[portalType].push(portalObj)
        data.portals = pData
    }

    // Determines what the target dimension is based on the portal type and current dimension.
    // Returns dimension id or 'noTarget' if none was found
    function getTargetDim(portalType) {
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

    // Adds current portal to persistent data if it doesn't already exist
    function addPortal(portalType) {
        let data = server.getPersistentData()
        data[portalType].forEach(element => {
            if (element["x"] == x && element["y"] == y && element["z"] == z &&
                element["level"] == dimensionId)
                return
        })
        data[portalType].push({"x": x, "y": y, "z": z, "level": dimensionId})
    }
})