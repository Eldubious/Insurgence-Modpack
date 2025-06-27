/*
    Enemy constants
*/
const zombie_types = {0: 'minecraft:zombie', 1: 'minecraft:husk', 2: 'minecraft:drowned'}
const skeleton_types = {0: 'minecraft:skeleton', 1: 'minecraft:stray', 2: 'minecraft:wither_skeleton', 3: 'savage_and_ravage:skeleton_villager'}
const insect_types = {0: 'minecraft:spider', 1: 'minecraft:cave_spider', 2: 'twilightforest:hedge_spider', 3: 'tropicraft:tropi_spider',
    4: 'twilightforest:fire_beetle', 5: 'twilightforest:slime_beetle', 6: 'twilightforest:pinch_beetle', 7: 'minecraft:spider',
    8: 'minecraft:spider'}
const ranged_illager_types = {0: 'minecraft:pillager', 1: 'minecraft:illusioner', 2: 'illagerinvasion:alchemist', 3: 'illagerinvasion:archivist',
    4: 'minecraft:pillager', 5: 'minecraft:pillager', 6: 'illagerinvasion:provoker', 7: 'illagerinvasion:marauder'}
const melee_illager_types = {0: 'minecraft:vindicator', 1: 'illagerinvasion:inquisitor', 2: 'illagerinvasion:basher',
    3: 'illagerinvasion:basher', 4: 'savage_and_ravage:executioner', 5: 'minecraft:vindicator'}
const mage_types = {0: 'minecraft:evoker', 1: 'minecraft:witch', 2: 'irons_spellbooks:archevoker', 3: 'irons_spellbooks:pyromancer',
    4: 'irons_spellbooks:cryomancer', 5: 'illagerinvasion:alchemist', 6: 'illagerinvasion:archivist', 7: 'illagerinvasion:firecaller',
    8: 'illagerinvasion:sorcerer', 9: 'illagerinvasion:necromancer', 10: 'savage_and_ravage:trickster'}
const elemental_types = {0: 'minecraft:blaze', 1: 'call_of_yucutan:blowgun_huracan', 2: 'minecraft:blaze', 3: 'twilightforest:death_tome',
    4: 'aether:fire_minion'}
const slime_types = {0: 'minecraft:slime', 1: 'alexsmobs:mimicube', 2: 'twilightforest:maze_slime', 3: 'the_bumblezone:honey_slime',
    4: 'aether_redux:vanilla_swet', 5: 'aether:blue_swet', 6: 'aether:sentry', 7: 'minecraft:slime'}
const wilden_types = {0: 'ars_nouveau:wilden_guardian', 1: 'ars_nouveau:wilden_hunter', 2: 'ars_nouveau:wilden_stalker'}

/*
    Summons a zombie with buffed attributes and random equipment.
*/
function summonZombie(server, dimension, difficulty, x, y, z) {
    var zombieType = zombie_types[Math.round(Math.random() * 2)]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1.6) * 10)
    var handItems = randomHandItems('generic', difficulty)
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
    var skeletonType = skeleton_types[Math.round(Math.random() * 3)]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1.4) * 10)
    var armorItems = randomArmorItems('skeleton', difficulty)

    // Give either melee weapons or bows
    var handItems;
    if (skeletonType == 'minecraft:wither_skeleton')
        handItems = randomHandItems('generic', difficulty)
    else if (skeletonType == 'savage_and_ravage:skeleton_villager')
        handItems = randomHandItems('crossbow', difficulty)
    else
        handItems = randomHandItems('bow', difficulty)

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
    Summons a Ranged Illager with buffed attributes
*/
function summonRangedIllager(server, dimension, difficulty, x, y, z) {
    var illagerType = ranged_illager_types[Math.round(Math.random() * 7)]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1.4) * 10)
    var handItems

    switch (illagerType) {
        case 'minecraft:pillager':
            handItems = randomHandItems('crossbow', difficulty)
            break
        case 'minecraft:illusioner':
            handItems = randomHandItems('bow', difficulty)
            break
        case 'illagerinvasion:alchemist':
            handItems = randomHandItems('bow', difficulty)
            break
        case 'illagerinvasion:provoker':
            handItems = randomHandItems('bow', difficulty)
            break
        case 'illagerinvasion:marauder':
            handItems = randomHandItems('hatchet', difficulty)
            break
        default:
            handItems = '{id:"minecraft:air",Count:1}'
    }
    var cmd = `execute in ${dimension} run summon ${illagerType} ${x} ${y} ${z} ` +
              `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
              `HandItems:[${handItems}],HandDropChances:[0f,0f],` +
              `Attributes:[{Name:"generic.armor",Base:4},{Name:"generic.max_health",Base:${hp}}]}`
    server.runCommandSilent(cmd)
}

/*
    Summons a Melee Illager with buffed attributes
*/
function summonMeleeIllager(server, dimension, difficulty, x, y, z) {
    var illagerType = melee_illager_types[Math.round(Math.random() * 5)]
    var effect = randomPositiveEffect(difficulty)
    var hp; var handItems
    switch (difficulty) {
        case 'basic':
            hp = Math.round((Math.random() + 1.6) * 10)
            break
        case 'adv':
            hp = Math.round((Math.random() + 2) * 10)
            break
    }
    switch (illagerType) {
        case 'minecraft:vindicator':
            handItems = randomHandItems('axe', difficulty)
            break
        case 'illagerinvasion:basher':
            handItems = randomHandItems('shield', difficulty)
            break
        case 'savage_and_ravage:executioner':
            handItems = randomHandItems('cleaver', difficulty)
            break
        case 'illagerinvasion:inquisitor':
            handItems = randomHandItems('dual', difficulty)
            break
        default:
            handItems = randomHandItems('generic', difficulty)
            break
    }

    var cmd = `execute in ${dimension} run summon ${illagerType} ${x} ${y} ${z} ` +
              `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
              `HandItems:[${handItems}],HandDropChances:[0f,0f],` +
              `Attributes:[{Name:"generic.armor",Base:3},{Name:"generic.max_health",Base:${hp}}]}`
    server.runCommandSilent(cmd)
}

/*
    Summons a Mage with buffed attributes
*/
function summonMage(server, dimension, difficulty, x, y, z) {
    var mageType = mage_types[Math.round(Math.random() * 10)]
    var effect = randomPositiveEffect(difficulty)
    var hp = Math.round((Math.random() + 1.4) * 10)
    var armorItems; var armorAttribute = 4;
    switch (mageType) {
        case 'irons_spellbooks:archevoker':
            armorItems = '{id:"irons_spellbooks:archevoker_boots",Count:1},{id:"irons_spellbooks:archevoker_leggings",Count:1},' +
                         '{id:"irons_spellbooks:archevoker_chestplate",Count:1},{id:"irons_spellbooks:archevoker_helmet",Count:1}'
            armorAttribute = 2
            break
        case 'irons_spellbooks:pyromancer':
            armorItems = '{id:"irons_spellbooks:pyromancer_boots",Count:1},{id:"irons_spellbooks:pyromancer_leggings",Count:1},' +
                         '{id:"irons_spellbooks:pyromancer_chestplate",Count:1},{id:"irons_spellbooks:pyromancer_helmet",Count:1}'
            armorAttribute = 2
            break
        case 'irons_spellbooks:cryomancer':
            armorItems = '{id:"irons_spellbooks:cryomancer_boots",Count:1},{id:"irons_spellbooks:cryomancer_leggings",Count:1},' +
                         '{id:"irons_spellbooks:cryomancer_chestplate",Count:1},{id:"irons_spellbooks:cryomancer_helmet",Count:1}'
            armorAttribute = 2
            break
        default:
            armorItems = '{id:"minecraft:air"},{id:"minecraft:air"},{id:"minecraft:air"},{id:"minecraft:air"}'
    }

    var cmd = `execute in ${dimension} run summon ${mageType} ${x} ${y} ${z} ` +
              `{Health:${hp},PersistenceRequired:1,ActiveEffects:[${effect}],` +
              `ArmorItems:[${armorItems}],ArmorDropChances:[0f,0f,0f,0f],` +
              `Attributes:[{Name:"generic.armor",Base:${armorAttribute}},{Name:"generic.max_health",Base:${hp}}]}`
    server.runCommandSilent(cmd)
}

/*
    Summons an insect with buffed attributes.
*/
function summonInsect(server, dimension, difficulty, x, y, z) {
    var insectType = insect_types[Math.round(Math.random() * 8)]
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
    var slimeType = slime_types[Math.round(Math.random() * 7)]
    var effect = randomPositiveEffect(difficulty)
    
    var cmd = `execute in ${dimension} run summon ${slimeType} ${x} ${y} ${z} ` +
              `{PersistenceRequired:1,ActiveEffects:[${effect}],Attributes:[{Name:"generic.armor",Base:8}]}`
    server.runCommandSilent(cmd)
}

/*
    Summons an elemental with buffed attributes.
*/
function summonElemental(server, dimension, difficulty, x, y, z) {
    var elementalType = elemental_types[Math.round(Math.random() * 4)]
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