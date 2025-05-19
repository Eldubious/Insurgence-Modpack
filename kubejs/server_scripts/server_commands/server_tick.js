// Handle objectives every 40 server ticks
const dimensions = [['dimdungeons', 'dungeon_dimension'], ['kubejs', 'the_depths'], ['kubejs', 'dragonrealm']]
var tick = 0
ServerEvents.tick(event => {
    
    // Only iterate through entities once every 2 seconds and one dimension at a time
    tick = (tick + 1) % (dimensions.length * 40)
    if (tick % 40 == 0) {
        let i = tick / 40
        let level = event.server.getLevel(new ResourceLocation(dimensions[i][0], dimensions[i][1]))
        level.getAllEntities().forEach(entity => checkEntity(event.getServer(), entity))
    }
    
})

// Will check if an entity is a marker, and if true will run specific commands depending on its data
function checkEntity(server, entity) {
    let type = entity.getEntityType().toString()
    let dimension = entity.getLevel().getDimension().toString()

    if (type == 'entity.minecraft.marker') {
        // Get the entity's coordinates and data
        let pos = entity.getPos()
        let x = pos.x(); let y = pos.y(); let z = pos.z()
        let data = entity.getNbt().data

        // Summon an enemy
        if (data.type == 'summon')
            summon(server, dimension, data, x, y, z)
        // Place a block
        else if (data.type == 'block')
            block(server, dimension, data, Math.round(x)-1, Math.round(y), Math.round(z)-1)
        // Remove the marker entity
        entity.kill()
    }
}

// Will run the command setblock with the given parameters
function block(server, dimension, data, x, y, z) {
    var id = data.block

    // Place block
    var cmd = `execute in ${dimension} run setblock ${x} ${y} ${z} ${id}`
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
        case 'dragon_skeleton':
            summonDeadDragon(server, dimension, x, y, z)
            break
        case 'creeper':
            summonCreeper(server, dimension, type, x, y, z)
            break
        case 'zombie':
            summonZombie(server, dimension, type, x, y, z)
            break
        case 'skeleton':
            summonSkeleton(server, dimension, type, x, y, z)
            break
        case 'illager_ranged':
            summonRangedIllager(server, dimension, type, x, y, z)
            break
        case 'illager_melee':
            summonMeleeIllager(server, dimension, type, x, y, z)
            break
        case 'insect':
            summonInsect(server, dimension, type, x, y, z)
            break
        case 'wilden':
            summonWilden(server, dimension, type, x, y, z)
            break
        case 'slime':
            summonSlime(server, dimension, type, x, y, z)
            break
        case 'elemental':
            summonElemental(server, dimension, type, x, y, z)
            break
        case 'mage':
            summonMage(server, dimension, type, x, y, z)
            break
    }
}