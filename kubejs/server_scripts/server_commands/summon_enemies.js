/*
    Enemy constants
*/
const zombie_types = {0: 'minecraft:zombie', 1: 'minecraft:husk', 2: 'minecraft:drowned'}
const skeleton_types = {0: 'minecraft:skeleton', 1: 'minecraft:stray', 2: 'minecraft:wither_skeleton'}
const insect_types = {0: 'minecraft:spider', 1: 'minecraft:cave_spider', 2: 'twilightforest:hedge_spider', 3: 'tropicraft:tropi_spider'}
const ranged_illager_types = {0: 'minecraft:pillager', 1: 'minecraft:evoker'}
const melee_illager_types = {}
const mage_types = {0: 'minecraft:evoker', 1: 'minecraft:witch'}
const elemental_types = {0: 'minecraft:blaze', 1: 'call_of_yucutan:blowgun_huracan'}
const slime_types = {0: 'minecraft:slime', 1: 'alexsmobs:mimicube'}
const wilden_types = {0: 'ars_nouveau:wilden_guardian', 1: 'ars_nouveau:wilden_hunter', 2: 'ars_nouveau:wilden_stalker'}

/*
    Summons a zombie with buffed attributes and random equipment.
*/
function summonZombie(server, dimension, difficulty, x, y, z) {
    var zombieType = zombie_types[Math.round(Math.random() * 2)]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1.6) * 10)
    var handItems = randomHandItems('zombie', difficulty)
    var armorItems = randomArmorItems('zombie', difficulty)
    
    var cmd = `execute in ${dimension} run summon ${zombieType} ${x} ${y} ${z} ` +
              `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
              `Attributes:[{Name:"generic.armor",Base:8},{Name:"generic.max_health",Base:${hp}}],` +
              `HandItems:[${handItems}],HandDropChances:[0f,0f],ArmorItems:[${armorItems}],ArmorDropChances:[0f,0f,0f,0f]}`
    server.runCommandSilent(cmd)
}

/*
    Summons a skeleton with buffed attributes and random equipment
*/
function summonSkeleton(server, dimension, difficulty, x, y, z) {
    var skeletonType = skeleton_types[Math.round(Math.random() * 2)]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1.4) * 10)
    var armorItems = randomArmorItems('skeleton', difficulty)

    // Give either melee weapons or bows
    var handItems;
    if (skeletonType == 'minecraft:wither_skeleton')
        handItems = randomHandItems('wither_skeleton', difficulty)
    else
        handItems = randomHandItems('skeleton', difficulty)

    var cmd = `execute in ${dimension} run summon ${skeletonType} ${x} ${y} ${z} ` +
              `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
              `Attributes:[{Name:"generic.armor",Base:8},{Name:"generic.max_health",Base:${hp}}],` +
              `HandItems:[${handItems}],HandDropChances:[0f,0f],ArmorItems:[${armorItems}],ArmorDropChances:[0f,0f,0f,0f]}`
    server.runCommandSilent(cmd)
}

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
    Summons an insect with buffed attributes.
*/
function summonInsect(server, dimension, difficulty, x, y, z) {
    var insectType = insect_types[Math.round(Math.random() * 3)]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1) * 10)

    var cmd = `execute in ${dimension} run summon ${insectType} ${x} ${y} ${z} ` +
              `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
              `Attributes:[{Name:"generic.armor",Base:6},{Name:"generic.max_health",Base:${hp}}]}`
    server.runCommandSilent(cmd)
}

/*
    Summons a Slime with buffed attributes.
*/
function summonSlime(server, dimension, difficulty, x, y, z) {
    var slimeType = slime_types[Math.round(Math.random())]
    var effect = randomPositiveEffect(difficulty)
    
    var cmd = `execute in ${dimension} run summon ${slimeType} ${x} ${y} ${z} ` +
              `{PersistenceRequired:1,ActiveEffects:[${effect}],Attributes:[{Name:"generic.armor",Base:8}]}`
    server.runCommandSilent(cmd)
}

/*
    Summons an elemental with buffed attributes.
*/
function summonElemental(server, dimension, difficulty, x, y, z) {
    var elementalType = elemental_types[Math.round(Math.random())]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1.5) * 10)

    var cmd = `execute in ${dimension} run summon ${elementalType} ${x} ${y} ${z} ` +
              `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
              `Attributes:[{Name:"generic.armor",Base:8},{Name:"generic.max_health",Base:${hp}}]}`
    server.runCommandSilent(cmd)
}

/*
    Summons a Wilden with buffed attributes.
*/
function summonWilden(server, dimension, difficulty, x, y, z) {
    var wildenType = wilden_types[Math.round(Math.random() * 2)]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1.5) * 10)

    var cmd = `execute in ${dimension} run summon ${wildenType} ${x} ${y} ${z} ` +
              `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
              `Attributes:[{Name:"generic.armor",Base:8},{Name:"generic.max_health",Base:${hp}}]}`
    server.runCommandSilent(cmd)
}