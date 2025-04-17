// Some development tools

// Prints a list of all item ids in container to console only if player is holding a Debug Stick
BlockEvents.rightClicked('sophisticatedstorage:netherite_barrel', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var inventory = event.block.getInventory().getAllItems()
        var str = ''

        inventory.forEach(item => {
            let id = item.id.toString()
            str += "'" + id + "', "
        })

        console.log(str.trim())
        event.player.tell(`${inventory.length} item IDs extracted!`)
        event.cancel()
    }
})

// Prints a list of the number of items in the list global.qualityFoods
BlockEvents.rightClicked('minecraft:campfire', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        event.player.tell(`Number of quality food items: ${global.qualityFoodsLen}`)
        event.cancel()
    }
})

// Prints out all nearby marker entities and their stored nbt data
BlockEvents.rightClicked('minecraft:lodestone', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var str = 'All nearby marker entities:\n\n'
        var entities = event.getServer().getEntities()

        entities.forEach(entity => {
            if (entity.getType() == 'minecraft:marker') {
                let pos = entity.getPos()
                let x = pos.x(); let y = pos.y(); let z = pos.z()
                let data = entity.getNbt().data.toString()

                str += 'MARKER:\n'
                str += `Position:\nX: ${x}, Y: ${y}, Z: ${z}\n\n`
                str += `NBT data:\n${data}\n\n`
            }
        })
        event.server.tell(str)
        event.cancel()
    }
})

// Summon a marker entity in the location of the Ender Pearl Block with the nbt in the debug stick
BlockEvents.rightClicked('architects_palette:ender_pearl_block', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {

        var pos = event.block.getPos()
        var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
        var dimensionId = event.level.getDimension().toString()
        var data = event.player.mainHandItem.getNbt()

        if (data.type.toString() == 'block') {
            event.server.runCommand(`execute in ${dimensionId} run summon minecraft:marker ${x} ${y} ${z} {data: {type: ${data.type}, block: ${data.block}}}`)
            event.block.set('minecraft:air')
            event.player.tell(`Made marker entity at: ${x} ${y} ${z} with: {data: {type: ${data.type}, block: ${data.block}}}`)
        }
        else if (data.type.toString() == 'summon') {
            event.server.runCommand(`execute in ${dimensionId} run summon minecraft:marker ${x} ${y} ${z} {data: {type: ${data.type}, func: ${data.func}, enemy: ${data.enemy}}}`)
            event.block.set('minecraft:air')
            event.player.tell(`Made marker entity at: ${x} ${y} ${z} with: {data: {type: ${data.type}, func: ${data.func}, enemy: ${data.enemy}}}`)
        }
        event.cancel()
    } 
})

// Teleport player to the Dragonrealm
BlockEvents.rightClicked('minecraft:stone_bricks', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var playerId = event.player.name.toString()
        var pos = event.block.getPos()
        var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
        
        // Clamp y value
        y = Math.min(Math.max(y, 55), 105)

        event.player.tell(`execute in kubejs:dragonrealm run tp ${playerId} ${x} ${y} ${z}`)

        server.runCommand(`execute in kubejs:dragonrealm run tp ${playerId} ${x} ${y} ${z}`)
        server.runCommand(`execute in kubejs:dragonrealm run setblock minecraft:stone_bricks ${x} ${y-1} ${z}`)
        

        //event.player.setLevel(server.getLevel(new ResourceLocation('kubejs', 'dragonrealm')))
        


        //event.player.setY(event.player.getY() + 3)
        
    }
})


const types = {0: 'fire', 1: 'ice', 2: 'lightning'}
const stages = {0: 0, 1: 25*24000, 2: 50*24000, 3: 75*24000, 4: 100*24000}
const genders = {0: true, 1: false}

// Summon a randomized Dragon with no AI
BlockEvents.rightClicked('iceandfire:dragonscale_red', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var pos = event.block.getPos()
        var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
        var dimension = event.block.getDimension().toString()

        // Randomize attributes of the dragon
        var type = types[Math.round(Math.random() * 2)]
        var stage = Math.round(Math.random() * 4)
        var age = stages[stage]
        var color = Math.round(Math.random() * 3)
        var gender = genders[Math.round(Math.random())]

        // Run summon command
        server.runCommand(`execute in ${dimension} run summon iceandfire:${type}_dragon ${x} ${y} ${z} 
            {NoAI:true,AgingDisabled:true,Variant:${color},AgeTicks:${age},PersistenceRequired:true,Gender:${gender},
            Health:1000,HomeAreaX:${x},HomeAreaY:${y},HomeAreaZ:${z},HomeDimension:"${dimension}"}`)
            
        event.block.set('minecraft:air')
        event.cancel()
    }
})

// Print out all persistent data for each portal type
// Or clear them if sneaking
BlockEvents.rightClicked('kubejs:depths_portal', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var data = server.getPersistentData()

        if (event.player.isCrouching()) {
            data.put("depths", [])
            event.player.tell('cleared this portal data!')
            event.cancel()
        }

        event.player.tell('Depths Portals:\n' + data.get("depths"))
    }
})

BlockEvents.rightClicked('kubejs:dragon_portal', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var data = server.getPersistentData()

        if (event.player.isCrouching()) {
            data.put("dragonrealm", [])
            event.player.tell('cleared this portal data!')
            event.cancel()
        }

        event.player.tell('Dragonrealm Portals:\n' + data.get("dragonrealm"))
    }
})

BlockEvents.rightClicked('kubejs:inbetween_portal', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var data = server.getPersistentData()

        if (event.player.isCrouching()) {
            data.put("inbetween", [])
            event.player.tell('cleared this portal data!')
            event.cancel()
        }

        event.player.tell('Inbetween Portals:\n' + data.get("inbetween"))
    }
})

// Print out all of persistent data's keys for the server or increment a test value on the data
BlockEvents.rightClicked('architects_palette:unobtanium_block', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var data = server.getPersistentData()

        if (event.player.isCrouching()) {
            
            data.put("debug", {"foo": 69, "bar": 420})
            event.player.tell('incremented debug counter')
        }
        else event.player.tell("Server's Persistent Data:\n" + data.get("debug"))
    }
})

// Setblock command tests
BlockEvents.rightClicked('minecraft:jungle_wood', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var pos = event.block.getPos()
        var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
        var dimension = event.block.getDimension().toString()

        var cmd = `execute in ${dimension} run setblock ${x} ${y+1} ${z} minecraft:jungle_wood`
        server.runCommandSilent(cmd)
        cmd = `execute in ${dimension} run fill ${x-1} ${y+2} ${z-1} ${x+1} ${y+2} ${z+1} minecraft:jungle_leaves`
        server.runCommandSilent(cmd)
    }
})
