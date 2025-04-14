const dragon_ages = {0: 50*24000, 1: 75*24000, 2: 100*24000}    // Corresponds to stages 3, 4, and 5
const dragon_gender = {0: false, 1: true}                       // false = female, true = male



// Handle objectives every 40 server ticks
var tick = 1
ServerEvents.tick(event => {
    // Only iterate through entities once every 2 seconds
    if (tick == 40) {
        tick = 1
        var server = event.getServer()
        // Iterate through all entities on the server
        var entities = server.getEntities()
        entities.forEach(entity => checkEntity(server, entity))
    }
    tick++


    // Will check if an entity is both a marker and in the dungeon dimension,
    // and if true will run specific commands depending on its data
    function checkEntity(server, entity) {
        let type = entity.getEntityType().toString()
        let dimension = entity.getLevel().getDimension().toString()

        if (type == 'entity.minecraft.marker' &&
            (dimension == 'dimdungeons:dungeon_dimension' || dimension == 'kubejs:dragonrealm')) {
            // Get the entity's coordinates and data
            let pos = entity.getPos()
            let x = Math.round(pos.x())
            let y = Math.round(pos.y())
            let z = Math.round(pos.z())
            let data = entity.getNbt().data

            // Summon an enemy
            if (data.type == 'summon')
                summon(server, dimension, data, x, y, z)
            // Place a block
            else if (data.type == 'block')
                block(server, data, x, y, z)
            
            // Remove the marker entity
            entity.kill()
        }
    }

    // Will run the command setblock with the given parameters
    function block(server, data, x, y, z) {
        var id = data.block

        // Place block
        var cmd = `execute in dimdungeons:dungeon_dimension run setblock ${x} ${y} ${z} ${id}`
        server.runCommandSilent(cmd)
    }
    
    // Will run the function specified at the coordinates specified
    function summon(server, dimension, data, x, y, z) {
        var type = data.func
        var enemy = data.enemy
        
        // Handle each enemy type in separate function
        switch (enemy) {
            case 'dragon':
                summonDragon(server, dimension, type, x, y, z)
                break
            
        }
    }

    /*
        Summon a random dragon of the specified type at the marker's position.
        The dragon will have a random color and gender, and be either stage 3, 4, or 5.
        type = "fire", "ice", or "lightning"
    */
    function summonDragon(server, dimension, type, x, y, z) {
        var color = Math.round(Math.random() * 3)
        var age = dragon_ages[Math.round(Math.random() * 2)]
        var gender = dragon_gender[Math.round(Math.random())]

        var cmd = `execute in ${dimension} run summon iceandfire:${type}_dragon ${x} ${y} ${z} ` +
                  `{HomeAreaX:${x},HomeAreaY:${y},HomeAreaZ:${z},HomeDimension:"${dimension}",` +
                  `AgingDisabled:true,AgeTicks:${age},Variant:${color},Health:1000,` +
                  `PersistenceRequired:true,Gender:${gender}}`
        server.runCommandSilent(cmd)
    }
})