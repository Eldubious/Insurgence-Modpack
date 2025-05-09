/*
    Enemy constants
*/
const zombie_types = {0: 'minecraft:zombie', 1: 'minecraft:husk', 2: 'minecraft:drowned'}
const skeleton_types = {0: 'minecraft:skeleton', 1: 'minecraft:stray'}
const ranged_illager_types = {0: 'minecraft:pillager', 1: 'minecraft:evoker'}

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