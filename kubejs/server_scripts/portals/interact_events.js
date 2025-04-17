// Handle all portal block right-click events
BlockEvents.rightClicked(event => {
    var server = event.getServer()
    let data = server.getPersistentData()
    var level = event.getLevel()

    var blockId = event.block.id.toString()
    var blockPos = event.block.pos
    var x = blockPos.getX(); var y = blockPos.getY(); var z = blockPos.getZ()
    var playerId = event.player.uuid.toString()
    var dimensionId = level.dimension.toString()

    // Make sure both hands are empty
    if (event.player.mainHandItem.id.toString() == 'minecraft:air' &&
        event.player.offHandItem.id.toString() == 'minecraft:air') {
    
        // Teleport player to The Depths when right-clicking the portal
        if (blockId == 'kubejs:depths_portal') {
            let targetDim = getTargetDim('depths')
            if (targetDim == 'noTarget') {
                event.player.tell('You can only use this portal in the Overworld and the Depths!')
                event.cancel()
            }

            // Check persistent data to find a portal to link to
            let destPortal = checkPersistentData('depths', targetDim)
            let createPortal = false    // Will a portal block be generated?
            let destX = 0; let destY = 0; let destZ = 0
            
            // Determine to coordinates to teleport to
            if (destPortal == null) {
                let coords = scaleCoords('depths', targetDim)
                createPortal = true

                destX = coords[0]
                destY = clampVertical(targetDim)
                destZ = coords[1]  
            } else {
                destX = destPortal["x"]
                destY = destPortal["y"] + 1     // Spawn on top of the portal
                destZ = destPortal["z"]
            }

            // Teleport the player
            var tpCmd = `execute in ${targetDim} run tp ${playerId} ${destX} ${destY} ${destZ}`
            server.runCommandSilent(tpCmd)

            // Create and run commands for generating a spawn area
            // (Must be done after teleporting so that the area loads)
            if (createPortal) {
                // Clear an area of blocks
                var clearCmd = `execute in ${targetDim} run fill ${destX-2} ${destY-2} ${destZ-2} ${destX+2} ${destY+1} ${destZ+2} minecraft:air`
                server.runCommandSilent(clearCmd)

                // Place a platform of blocks below the portal
                var platformCmd = `execute in ${targetDim} run fill ${destX-2} ${destY-2} ${destZ-2} ${destX+2} ${destY-2} ${destZ+2} minecraft:polished_deepslate`
                server.runCommandSilent(platformCmd)

                // Place light sources
                placeLamps('depths', targetDim, destX, destY, destZ)

                // Place the portal block
                var blockCmd = `execute in ${targetDim} run setblock ${destX} ${destY-1} ${destZ} kubejs:depths_portal`
                server.runCommandSilent(blockCmd)

                // Add newly made portal to data
                data.get('depths').push({"x": destX, "y": destY-1, "z": destZ, "level": targetDim})
            }
            // Command to clear smaller area on already made portal to prevent suffocation
            else {
                var airCmd = `execute in ${targetDim} run fill ${destX} ${destY} ${destZ} ${destX} ${destY+1} ${destZ} minecraft:air destroy`
                server.runCommandSilent(airCmd)
            }
            event.cancel()
        }

        // Teleport player to The Dragonrealm when right-clicking the portal
        else if (blockId == 'kubejs:dragon_portal') {
            let targetDim = getTargetDim('dragonrealm')
            if (targetDim == 'noTarget') {
                event.player.tell('You can only use this portal in the Overworld and the Dragonrealm!')
                event.cancel()
            }

            // Check persistent data to find a portal to link to
            let destPortal = checkPersistentData('dragonrealm', targetDim)
            let createPortal = false    // Will a portal block be generated?
            let destX = 0; let destY = 0; let destZ = 0
            
            // Determine to coordinates to teleport to
            if (destPortal == null) {
                let coords = scaleCoords('dragonrealm', targetDim)
                createPortal = true

                destX = coords[0]
                destY = clampVertical(targetDim)
                destZ = coords[1]  
            } else {
                destX = destPortal["x"]
                destY = destPortal["y"] + 1     // Spawn on top of the portal
                destZ = destPortal["z"]
            }

            // Teleport the player
            var tpCmd = `execute in ${targetDim} run tp ${playerId} ${destX} ${destY} ${destZ}`
            server.runCommandSilent(tpCmd)

            // Create and run commands for generating a spawn area
            // (Must be done after teleporting so that the area loads)
            if (createPortal) {
                // Clear an area of blocks
                var clearCmd = `execute in ${targetDim} run fill ${destX-2} ${destY-2} ${destZ-2} ${destX+2} ${destY+1} ${destZ+2} minecraft:air`
                server.runCommandSilent(clearCmd)

                // Place a platform of blocks below the portal
                var platformCmd = `execute in ${targetDim} run fill ${destX-2} ${destY-2} ${destZ-2} ${destX+2} ${destY-2} ${destZ+2} minecraft:stone_bricks`
                server.runCommandSilent(platformCmd)

                // Place light sources
                placeLamps('dragonrealm', targetDim, destX, destY, destZ)

                // Place the portal block
                var blockCmd = `execute in ${targetDim} run setblock ${destX} ${destY-1} ${destZ} kubejs:dragon_portal`
                server.runCommandSilent(blockCmd)

                // Add newly made portal to data
                data.get('dragonrealm').push({"x": destX, "y": destY-1, "z": destZ, "level": targetDim})
            }
            // Command to clear smaller area on already made portal to prevent suffocation
            else {
                var airCmd = `execute in ${targetDim} run fill ${destX} ${destY} ${destZ} ${destX} ${destY+1} ${destZ} minecraft:air destroy`
                server.runCommandSilent(airCmd)
            }
            event.cancel()
        }

        // Teleport player to The Inbetween when right-clicking the portal
        else if (blockId == 'kubejs:inbetween_portal') {
            let targetDim = getTargetDim('inbetween')
            if (targetDim == 'noTarget') {
                event.player.tell('You can only use this portal in the Overworld and the Inbetween!')
                event.cancel()
            }

            // Check persistent data to find a portal to link to
            let destPortal = checkPersistentData('inbetween', targetDim)
            let createPortal = false    // Will a portal block be generated?
            let destX = 0; let destY = 0; let destZ = 0
            
            // Determine to coordinates to teleport to
            if (destPortal == null) {
                let coords = scaleCoords('inbetween', targetDim)
                createPortal = true

                destX = coords[0]
                destY = clampVertical(targetDim)
                destZ = coords[1]  
            } else {
                destX = destPortal["x"]
                destY = destPortal["y"] + 1     // Spawn on top of the portal
                destZ = destPortal["z"]
            }
            
            // Teleport the player
            var tpCmd = `execute in ${targetDim} run tp ${playerId} ${destX} ${destY} ${destZ}`
            server.runCommandSilent(tpCmd)

            // Create and run commands for generating a spawn area
            // (Must be done after teleporting so that the area loads)
            if (createPortal) {
                // Clear an area of blocks
                var clearCmd = `execute in ${targetDim} run fill ${destX-2} ${destY-2} ${destZ-2} ${destX+2} ${destY+1} ${destZ+2} minecraft:air`
                server.runCommandSilent(clearCmd)

                // Place a platform of blocks below the portal
                var platformCmd = `execute in ${targetDim} run fill ${destX-2} ${destY-2} ${destZ-2} ${destX+2} ${destY-2} ${destZ+2} architects_palette:twisted_planks`
                server.runCommandSilent(platformCmd)

                // Place the portal block
                var blockCmd = `execute in ${targetDim} run setblock ${destX} ${destY-1} ${destZ} kubejs:inbetween_portal`
                server.runCommandSilent(blockCmd)

                // Add newly made portal to data
                data.get('inbetween').push({"x": destX, "y": destY-1, "z": destZ, "level": targetDim})
            }
            // Command to clear smaller area on already made portal to prevent suffocation
            else {
                var airCmd = `execute in ${targetDim} run fill ${destX} ${destY} ${destZ} ${destX} ${destY+1} ${destZ} minecraft:air destroy`
                server.runCommandSilent(airCmd)
            }
            event.cancel()
        }
    }

    /*
        Checks the server's persistent data to find any already placed portals nearby
        portalType = "depths", "dragonrealm", or "inbetween"
    */
    function checkPersistentData(portalType, targetDim) {
        // Initialize the portals' fields if not done so already
        if (!data.contains("depths")) {
            data.put("depths", [])
        }
        if (!data.contains("dragonrealm")) {
            data.put("dragonrealm", [])
        }
        if (!data.contains("inbetween")) {
            data.put("inbetween", [])
        }

        // Add current portal data if not present already
        addPortal(portalType)

        // Iterate through all portal objects of desired type
        let retVal = null
        let minDist = Number.MAX_SAFE_INTEGER
        data.get(portalType).forEach(element => {
            if (element["level"] == targetDim) {
                
                let coords = scaleCoords(portalType, targetDim)
                // Calculate the taxicab distance of the found portal
                let distance = Math.abs(element["x"] - coords[0]) + Math.abs(element["z"] - coords[1])

                //event.player.tell(`curr coords (adjusted): ${coords[0]} ${coords[1]}\ndest coords: ${element["x"]} ${element["z"]}`)
                //event.player.tell('distance (relative): ' + distance)

                // The portal is less than 100 blocks away and closer than the last found portal
                if (distance <= 100 && distance < minDist) {
                    retVal = element
                    minDist = distance
                }  
            }
        })
        return retVal
    }

    // Adds current portal to persistent data if not present already
    function addPortal(portalType) {
        let containsPortal = false
        data.get(portalType).forEach(element => {
            if (element["level"] == dimensionId && element["x"] == x && element["y"] == y && element["z"] == z)
                containsPortal = true
        })
        if (!containsPortal)
            data.get(portalType).push({"x": x, "y": y, "z": z, "level": dimensionId})
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

    // Return a clamped y value based on the height of the destination dimension
    function clampVertical(targetDim) {
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

    // Scales the horizontal coordinates according to which dimension the player is travelling to
    function scaleCoords(portalType, targetDim) {
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

    // This function runs 4 commands to place lamp blocks on all 4 sides of the spawn platform
    function placeLamps(portalType, targetDim, destX, destY, destZ) {
        let lampType = 'architects_palette:tuff_lamp'
        if (portalType == 'depths') lampType = 'supplementaries:deepslate_lamp'

        let cmd = `execute in ${targetDim} run setblock ${destX-2} ${destY-2} ${destZ} ${lampType}`
        server.runCommandSilent(cmd)

        cmd = `execute in ${targetDim} run setblock ${destX+2} ${destY-2} ${destZ} ${lampType}`
        server.runCommandSilent(cmd)

        cmd = `execute in ${targetDim} run setblock ${destX} ${destY-2} ${destZ-2} ${lampType}`
        server.runCommandSilent(cmd)

        cmd = `execute in ${targetDim} run setblock ${destX} ${destY-2} ${destZ+2} ${lampType}`
        server.runCommandSilent(cmd)
    }
})