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
        let x = Math.round(pos.x()); let y = Math.round(pos.y()); let z = Math.round(pos.z())
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
        case 'dragon_skeleton':
            summonDeadDragon(server, dimension, x, y, z)
            break
        case 'creeper':
            summonCreeper(server, dimension, type, x, y, z)
            break
    }
}


/*
    Potion effect constants
    1 = minecraft:speed, 5 = minecraft:strength, 12 = minecraft:fire_resistance, 10 = minecraft:regeneration, 11 = minecraft:resistance, 248 = quark:resilience
    17 = minecraft:hunger, 2 = minecraft:slowness, 18 = minecraft:weakness, 19 = minecraft:poison, 166 = cataclysm:blazing_brand, 160 = relics:anti_heal
*/
const positive_effects = {0: 1, 1: 5, 2: 12, 3: 10, 4: 11, 5: 248}
const negative_effects = {0: 17, 1: 2, 2: 18, 3: 19, 4: 166, 5: 160}

// Gets a random negative potion effect. Used with creepers and skeleton arrows.
function randomNegativeEffect(difficulty) {
    let effectId = 0
    let level = 0

    if (difficulty == 'basic') {
        // Excludes poison, blazing brand, and anti-heal
        effectId = negative_effects[Math.round(Math.random() * 2)]
    } else {
        effectId = negative_effects[Math.round(Math.random() * 5)]
        level = Math.round(Math.random() * 2)
    }
    return `{Id:${effectId},Duration:144000,Amplifier:${level}}`
}
// Gets a random positive potion effect. Used with most enemies.
function randomPositiveEffect(difficulty) {
    let effectId = 0
    let level = 0

    if (difficulty == 'basic') {
        // Excludes resistance, and resilience on basic difficulty
        effectId = positive_effects[Math.round(Math.random() * 3)]
    } else {
        effectId = positive_effects[Math.round(Math.random() * 5)]
        level = Math.round(Math.random() * 2)
    }
    return `{Id:${effectId},Duration:-1,Amplifier:${level}}`
}


/*
    Armor constants
*/
const basic_armor = {}
const advanced_armor = {}
// Enchantments
const basic_armor_enchantments = {}
const advanced_armor_enchantments = {}
/*
    Weapon constants
*/
const basic_weapons = {}
const advanced_weapons = {}
// Enchantments
const basic_weapon_enchants = {}
const advanced_weapon_enchants = {}


/*
        Summons a creeper with buffed attributes.
        Has a negative potion effect to create effect cloud on explosion.
*/
function summonCreeper(server, dimension, difficulty, x, y, z) {
    var effect = randomNegativeEffect(difficulty)
    var hp = Math.round((Math.random() + 1) * 10)
    var cmd = ''
    
    switch (difficulty) {
        case 'basic':
            cmd = `execute in ${dimension} run summon minecraft:creeper ${x} ${y} ${z} ` +
                      `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
                      `Attributes:[{Name:"generic.armor",Base:6},{Name:"generic.max_health",Base:${hp}}]}`
            server.runCommandSilent(cmd)
            break

        case 'adv':
            cmd = `execute in ${dimension} run summon minecraft:creeper ${x} ${y} ${z} ` +
                      `{Health:${hp},PersistenceRequired:1,powered:1,ActiveEffects:[${effect}],` +
                      `Attributes:[{Name:"generic.armor",Base:6},{Name:"generic.max_health",Base:${hp}}]}`
            server.runCommandSilent(cmd)
            break
    }
}


/*
    Dragon constants
*/
const dragon_types = {0: 'fire', 1: 'ice', 2: 'lightning'}      // Only used when making skeletons
const dragon_ages = {0: 50*24000, 1: 75*24000, 2: 100*24000}    // Corresponds to stages 3, 4, and 5
const dragon_gender = {0: false, 1: true}                       // false = female, true = male

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
// Summons a dead dragon's skeleton
function summonDeadDragon(server, dimension, x, y, z) {
    var type = dragon_types[Math.round(Math.random() * 2)]
    var age = dragon_ages[Math.round(Math.random())]
    var gender = dragon_gender[Math.round(Math.random())]
    var rotation = Math.round(Math.random() * 3) * 90

    var cmd = `execute in ${dimension} run summon iceandfire:${type}_dragon ${x} ${y} ${z} ` +
              `{AgeTicks:${age},Gender:${gender},Rotation:[${rotation}f],` +
              `DeathStage:10,ModelDead:true,PersistenceRequired:true}`
    server.runCommandSilent(cmd)
}