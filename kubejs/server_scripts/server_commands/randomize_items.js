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
    a list with ['namespace', 'armor type'] for armor and ['lvl', 'enchantment'] for enchantments
*/
const basic_armor = {0: ['minecraft', 'diamond'], 1: ['immersive_armors', 'warrior']}
const advanced_armor = {0: ['minecraft', 'diamond'], 1: ['minecraft', 'netherite']}
// Enchantments
const basic_armor_enchantments = {0: ['3', 'minecraft:protection'], 1: ['4', 'minecraft:fire_protection']}
const advanced_armor_enchantments = {0: ['4', 'minecraft:protection'], 1: ['5', 'minecraft:fire_protection']}
// Trims
const trim_materials = {0: 'minecraft:gold', 1: 'minecraft:copper', 2: 'minecraft:iron', 3: 'minecraft:netherite', 4: 'minecraft:emerald', 5: 'minecraft:redstone', 6: 'minecraft:diamond', 7: 'minecraft:lapis', 8: 'minecraft:quartz', 9: 'minecraft:ruby', 10: 'minecraft:amethyst'}
const trim_patterns = {0: 'minecraft:wayfinder', 1: 'minecraft:raiser', 2: 'minecraft:shaper', 3: 'minecraft:host', 4: 'minecraft:sentry', 5: 'minecraft:vex', 6: 'minecraft:wild', 7: 'minecraft:tide', 8: 'minecraft:dune', 9: 'minecraft:coast', 10: 'minecraft:eye', 11: 'minecraft:rib', 12: 'minecraft:ward', 13: 'minecraft:silence'}

function randomArmorEnchants(difficulty) {
    // The amount of enchantments to create
    // 1 enchantment on basic 2 on advanced
    var enchAmt = 1
    if (difficulty == 'adv') enchAmt += 1
    var enchantments = ''; var enchData = ''

    switch (difficulty) {
        case 'basic':
            enchData = basic_armor_enchantments[Math.round(Math.random())]
            enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"},`
            enchData = basic_armor_enchantments[Math.round(Math.random())]
            enchantments += `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
            break
        
        case 'adv':
            enchData = advanced_armor_enchantments[Math.round(Math.random())]
            enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"},`
            enchData = advanced_armor_enchantments[Math.round(Math.random())]
            enchantments += `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
            break
    }
    return enchantments
}

// Gets randomized armor sets with random trims and enchantments
function randomArmorItems(enemy, difficulty) {
    var trimMat = trim_materials[Math.round(Math.random() * 10)]
    var trimPat = trim_patterns[Math.round(Math.random() * 13)]
    var armorType = []; var enchantments = ''

    switch (enemy) {
        case 'pillager':
            break
        default:
            switch (difficulty) {
                case 'basic':
                    armorType = basic_armor[Math.round(Math.random())]
                    enchantments = randomArmorEnchants(difficulty)
                    break
                case 'adv':
                    armorType = advanced_armor[Math.round(Math.random())]
                    enchantments = randomArmorEnchants(difficulty)
                    break
            }
            break
    }
    var boots = `${armorType[0]}:${armorType[1]}_boots`
    var leggings = `${armorType[0]}:${armorType[1]}_leggings`
    var chestplate = `${armorType[0]}:${armorType[1]}_chestplate`
    var helmet = `${armorType[0]}:${armorType[1]}_helmet`

    return `{id:"${boots}",tag:{Trim:{material:"${trimMat}",pattern:"${trimPat}"},Enchantments:[${enchantments}]},Count:1},` +
           `{id:"${leggings}",tag:{Trim:{material:"${trimMat}",pattern:"${trimPat}"},Enchantments:[${enchantments}]},Count:1},` +
           `{id:"${chestplate}",tag:{Trim:{material:"${trimMat}",pattern:"${trimPat}"},Enchantments:[${enchantments}]},Count:1},` +
           `{id:"${helmet}",tag:{Trim:{material:"${trimMat}",pattern:"${trimPat}"},Enchantments:[${enchantments}]},Count:1}`
}

/*
    Weapon constants
*/
const basic_weapons = {0: 'minecraft:diamond_sword', 1: 'minecraft:diamond_axe'}
const advanced_weapons = {0: 'minecraft:netherite_sword', 1: 'minecraft:netherite_axe'}
// Enchantments
const basic_weapon_enchants = {0: ['5', 'minecraft:sharpness'], 1: ['1', 'minecraft:fire_aspect']}
const advanced_weapon_enchants = {0: ['6', 'minecraft:sharpness'], 1: ['1', 'minecraft:fire_aspect']}
const basic_bow_enchants = {0: ['4', 'minecraft:power'], 1: ['2', 'minecraft:punch']}
const advanced_bow_enchants = {0: ['5', 'minecraft:power'], 1: ['3', 'minecraft:punch'], 2: ['1', 'minecraft:flame']}

// Gets random enchantments for weapons. Has unique output for special weapons like bows
function randomWeaponEnchants(weaponType, difficulty) {
    // The amount of enchantments to create
    // 1 enchantment on basic 2 on advanced
    var enchAmt = 1
    if (difficulty == 'adv') enchAmt += 1
    var enchantments = ''; var enchData = []

    switch (weaponType) {
        case 'bow':
            switch (difficulty) {
                case 'basic':
                    enchData = basic_bow_enchants[Math.round(Math.random())]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
                case 'adv':
                    enchData = advanced_bow_enchants[Math.round(Math.random() * 2)]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    enchData = advanced_bow_enchants[Math.round(Math.random() * 2)]
                    enchantments += `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
            }
            break

        case 'crossbow':
            switch (difficulty) {
                case 'basic':
                    enchData = basic_crossbow_enchants[Math.round(Math.random())]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
                case 'adv':

                    break
            }
            break

        default:
            switch (difficulty) {
                case 'basic':
                    enchData = basic_weapon_enchants[Math.round(Math.random())]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
                case 'adv':
                    enchData = advanced_weapon_enchants[Math.round(Math.random())]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"},`
                    enchData = advanced_weapon_enchants[Math.round(Math.random())]
                    enchantments += `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
            }
            break
    }
    return enchantments
}

// Gets the random items for both hands. Has different ouput for certain unique enemies
function randomHandItems(enemy, difficulty) {
    var mainHandItem = ''; var offHandItem = ''; var enchantments = ''

    switch (enemy) {
        case 'skeleton':
            // Bows and arrows
            mainHandItem = 'minecraft:bow'
            offHandItem = 'minecraft:arrow'

            break

        case 'pillager':
            // Crossbows

            break

        default:
            // Generic melee items
            switch(difficulty) {
                case 'basic':
                    mainHandItem = basic_weapons[Math.round(Math.random())]
                    offHandItem = 'minecraft:air'
                    enchantments = randomWeaponEnchants('generic', difficulty)
                    break
                case 'adv':
                    mainHandItem = advanced_weapons[Math.round(Math.random())]
                    offHandItem = 'minecraft:air'
                    enchantments = randomWeaponEnchants('generic', difficulty)
                    break
            }
    }
    return `{id:"${mainHandItem}",tag:{Enchantments:[${enchantments}]},Count:1},` +
           `{id:"${offHandItem}",Count:1}`
}