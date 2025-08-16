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
    let level = 1

    if (difficulty == 'basic') {
        // Excludes resistance, and resilience on basic difficulty
        effectId = positive_effects[Math.round(Math.random() * 3)]
    } else {
        effectId = positive_effects[Math.round(Math.random() * 5)]
        level += Math.round(Math.random() * 2)
    }
    return `{Id:${effectId},Duration:-1,Amplifier:${level}}`
}

/*
    Armor constants
    a list with ['namespace', 'armor type', 'add trims'] for armor and ['lvl', 'enchantment'] for enchantments
*/
const basic_armor = {0: ['minecraft', 'diamond', true], 1: ['immersive_armors', 'warrior', false], 2: ['minecraft', 'iron', true],
    3: ['call_of_yucutan', 'jades', true], 4: ['twilightforest', 'knightmetal', true], 5: ['immersive_armors', 'heavy', false],
    6: ['aether', 'phoenix', true], 7: ['aether', 'obsidian', true], 8: ['aether', 'gravitite', true], 9: ['samurai_dynasty', 'white_samurai', false],
    10: ['samurai_dynasty', 'diamond_samurai', false], 11: ['samurai_dynasty', 'iron_samurai', false], 12: ['samurai_dynasty', 'steel', false],
    13: ['samurai_dynasty', 'red_samurai', false], 14: ['samurai_dynasty', 'blue_samurai', false], 15: ['samurai_dynasty', 'green_samurai', false],
    16: ['samurai_dynasty', 'gray_samurai', false], 17: ['iceandfire', 'frost_troll_leather', false], 18: ['iceandfire', 'mountain_troll_leather', false],
    19: ['iceandfire', 'forest_troll_leather', false], 20: ['iceandfire', 'armor_bronze', false], 21: ['iceandfire', 'armor_silver', false],
    22: ['iceandfire', 'armor_sapphire', false], 23: ['minecraft', 'diamond', true], 24: ['minecraft', 'diamond', true],
    25: ['minecraft', 'diamond', true], 26: ['minecraft', 'diamond', true], 27: ['minecraft', 'diamond', true],
    28: ['minecraft', 'iron', true], 29: ['minecraft', 'iron', true], 30: ['minecraft', 'iron', true]}
const advanced_armor = {0: ['minecraft', 'diamond', true], 1: ['minecraft', 'netherite', true], 2: ['forbidden_arcanus', 'tyr', false],
    3: ['call_of_yucutan', 'jades', true], 4: ['twilightforest', 'knightmetal', true], 5: ['forbidden_arcanus', 'draco_arcanus', false],
    6: ['aether', 'phoenix', true], 7: ['aether', 'obsidian', true], 8: ['aether', 'gravitite', true], 9: ['samurai_dynasty', 'netherite_samurai', false],
    10: ['samurai_dynasty', 'diamond_samurai', false], 11: ['samurai_dynasty', 'amethyst_samurai', false], 12: ['samurai_dynasty', 'quartz_samurai', false],
    13: ['samurai_dynasty', 'red_samurai', false], 14: ['samurai_dynasty', 'blue_samurai', false], 15: ['samurai_dynasty', 'green_samurai', false],
    16: ['samurai_dynasty', 'gray_samurai', false], 17: ['iceandfire', 'dragonsteel_ice', false], 18: ['iceandfire', 'dragonsteel_fire'],
    19: ['iceandfire', 'dragonsteel_lightning', false], 20: ['iceandfire', 'armor_red', false], 21: ['iceandfire', 'armor_amythest', false],
    22: ['iceandfire', 'armor_green', false], 23: ['minecraft', 'netherite', true], 24: ['minecraft', 'netherite', true], 25: ['minecraft', 'netherite', true],
    26: ['minecraft', 'netherite', true], 27: ['minecraft', 'netherite', true], 28: ['minecraft', 'diamond', true],
    29: ['minecraft', 'diamond', true], 30: ['minecraft', 'diamond', true]}
// Enchantments
const basic_armor_enchantments = {0: ['3', 'minecraft:protection'], 1: ['4', 'minecraft:fire_protection']}
const advanced_armor_enchantments = {0: ['4', 'minecraft:protection'], 1: ['5', 'minecraft:fire_protection']}
// Trims
const trim_materials = {0: 'minecraft:gold', 1: 'minecraft:copper', 2: 'minecraft:iron', 3: 'minecraft:netherite',
    4: 'minecraft:emerald', 5: 'minecraft:redstone', 6: 'minecraft:diamond', 7: 'minecraft:lapis', 8: 'minecraft:quartz',
    9: 'minecraft:ruby', 10: 'minecraft:amethyst'}
const trim_patterns = {0: 'minecraft:wayfinder', 1: 'minecraft:raiser', 2: 'minecraft:shaper', 3: 'minecraft:host',
    4: 'minecraft:sentry', 5: 'minecraft:vex', 6: 'minecraft:wild', 7: 'minecraft:tide', 8: 'minecraft:dune', 9: 'minecraft:coast',
    10: 'minecraft:eye', 11: 'minecraft:rib', 12: 'minecraft:ward', 13: 'minecraft:silence'}

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
    var armorType = []; var enchantments = ''

    switch (enemy) {
        case 'pillager':
            break
        default:
            switch (difficulty) {
                case 'basic':
                    armorType = basic_armor[Math.round(Math.random() * 30)]
                    enchantments = randomArmorEnchants(difficulty)
                    break
                case 'adv':
                    armorType = advanced_armor[Math.round(Math.random() * 30)]
                    enchantments = randomArmorEnchants(difficulty)
                    break
            }
            break
    }

    var doTrims = armorType[2]
    var boots = `${armorType[0]}:${armorType[1]}_boots`
    var leggings = `${armorType[0]}:${armorType[1]}_leggings`
    var chestplate = `${armorType[0]}:${armorType[1]}_chestplate`
    var helmet = `${armorType[0]}:${armorType[1]}_helmet`

    // Only apply armor trims to certain armor sets
    if (doTrims) {
        var trimMat = trim_materials[Math.round(Math.random() * 10)]
        var trimPat = trim_patterns[Math.round(Math.random() * 13)]

        return `{id:"${boots}",tag:{Trim:{material:"${trimMat}",pattern:"${trimPat}"},Enchantments:[${enchantments}]},Count:1},` +
               `{id:"${leggings}",tag:{Trim:{material:"${trimMat}",pattern:"${trimPat}"},Enchantments:[${enchantments}]},Count:1},` +
               `{id:"${chestplate}",tag:{Trim:{material:"${trimMat}",pattern:"${trimPat}"},Enchantments:[${enchantments}]},Count:1},` +
               `{id:"${helmet}",tag:{Trim:{material:"${trimMat}",pattern:"${trimPat}"},Enchantments:[${enchantments}]},Count:1}`
    } else {
        return `{id:"${boots}",tag:{Enchantments:[${enchantments}]},Count:1},` +
               `{id:"${leggings}",tag:{Enchantments:[${enchantments}]},Count:1},` +
               `{id:"${chestplate}",tag:{Enchantments:[${enchantments}]},Count:1},` +
               `{id:"${helmet}",tag:{Enchantments:[${enchantments}]},Count:1}`
    }
}

/*
    Weapon constants
*/
const basic_weapons = {0: 'minecraft:diamond_sword', 1: 'minecraft:diamond_axe', 2: 'twilightforest:knightmetal_sword',
    3: 'twilightforest:knightmetal_axe', 4: 'forbidden_arcanus:reinforced_deorum_sword', 5: 'forbidden_arcanus:reinforced_deorum_axe',
    6: 'iceandfire:silver_sword', 7: 'iceandfire:silver_axe', 8: 'cataclysm:black_steel_sword', 9: 'aether:zanite_sword',
    10: 'aether:zanite_axe', 11: 'aether:gravitite_sword', 12: 'aether:gravitite_axe'}
const advanced_weapons = {0: 'minecraft:netherite_sword', 1: 'minecraft:netherite_axe', 2: 'twilightforest:knightmetal_sword',
    3: 'twilightforest:knightmetal_axe', 4: 'forbidden_arcanus:reinforced_deorum_sword', 5: 'forbidden_arcanus:reinforced_deorum_axe',
    6: 'forbidden_arcanus:draco_arcanus_sword', 7: 'forbidden_arcanus:draco_arcanus_axe', 8: 'experienceobelisk:cognitive_sword',
    9: 'experienceobelisk:cognitive_axe', 10: 'aether:flaming_sword', 11: 'aether:holy_sword', 12: 'ancient_aether:ancient_sword'}
// Enchantments
const basic_weapon_enchants = {0: ['5', 'minecraft:sharpness'], 1: ['1', 'minecraft:fire_aspect']}
const advanced_weapon_enchants = {0: ['6', 'minecraft:sharpness'], 1: ['1', 'minecraft:fire_aspect'], 2: ['1', 'minecraft:knockback']}
const basic_bow_enchants = {0: ['4', 'minecraft:power'], 1: ['2', 'minecraft:punch'], 2: ['3', 'minecraft:unbreaking']}
const advanced_bow_enchants = {0: ['5', 'minecraft:power'], 1: ['3', 'minecraft:punch'], 2: ['1', 'minecraft:flame'], 3: ['3', 'minecraft:unbreaking']}
const basic_crossbow_enchants = {0: ['1', 'minecraft:quick_charge'], 1: ['2', 'minecraft:piercing'], 2: ['3', 'minecraft:unbreaking']}
const advanced_crossbow_enchants = {0: ['3', 'minecraft:quick_charge'], 1: ['4', 'minecraft:piercing'], 2: ['3', 'minecraft:unbreaking'],
    3: ['1', 'minecraft:multishot']}

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
                    enchData = basic_bow_enchants[Math.round(Math.random() * 2)]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
                case 'adv':
                    enchData = advanced_bow_enchants[Math.round(Math.random() * 3)]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"},`
                    enchData = advanced_bow_enchants[Math.round(Math.random() * 3)]
                    enchantments += `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
            }
            break

        case 'crossbow':
            switch (difficulty) {
                case 'basic':
                    enchData = basic_crossbow_enchants[Math.round(Math.random() * 2)]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
                case 'adv':
                    enchData = advanced_crossbow_enchants[Math.round(Math.random() * 3)]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"},`
                    enchData = advanced_crossbow_enchants[Math.round(Math.random() * 3)]
                    enchantments += `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
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
                    enchData = advanced_weapon_enchants[Math.round(Math.random() * 2)]
                    enchantments = `{lvl:${enchData[0]}s,id:"${enchData[1]}"},`
                    enchData = advanced_weapon_enchants[Math.round(Math.random() * 2)]
                    enchantments += `{lvl:${enchData[0]}s,id:"${enchData[1]}"}`
                    break
            }
            break
    }
    return enchantments
}

const tipped_arrow_effects = {0: "minecraft:poison", 1: "minecraft:weakness", 2: "minecraft:slowness", 3: "witherstormmod:wither",
    4: "the_bumblezone:neurotoxin", 5: "miners_delight:mining_fatigue", 6: "alexscaves:strong_hunger"}

// Gets the random items for both hands. Has different ouput for certain unique enemies
function randomHandItems(enemy, difficulty) {
    var mainHandItem = ''; var offHandItem = ''; var enchantments = ''; var potion = '';

    switch (enemy) {
        case 'bow':
            // Bows and arrows
            mainHandItem = 'minecraft:bow'
            offHandItem = 'minecraft:tipped_arrow'
            potion = `Potion:"${tipped_arrow_effects[Math.round(Math.random() * 6)]}"`
            enchantments = randomWeaponEnchants('bow', difficulty)
            break

        case 'crossbow':
            // Crossbows
            mainHandItem = 'minecraft:crossbow'
            offHandItem = 'minecraft:air'
            enchantments = randomWeaponEnchants('crossbow', difficulty)
            break

        case 'axe':
            // Always an iron or diamond axe
            switch(difficulty) {
                case 'basic':
                    mainHandItem = 'minecraft:iron_axe'
                    offHandItem = 'minecraft:air'
                    enchantments = 'none'
                    break
                case 'adv':
                    mainHandItem = 'minecraft:diamond_axe'
                    offHandItem = 'minecraft:air'
                    enchantments = 'none'
                    break
            }
            break

        case 'shield':
            // Always a vanilla shield
            mainHandItem = 'minecraft:shield'
            offHandItem = 'minecraft:air'
            enchantments = 'none'
            break

        case 'cleaver':
            // Savage & Ravage Cleaver of Beheading
            mainHandItem = 'savage_and_ravage:cleaver_of_beheading'
            offHandItem = 'minecraft:air'
            enchantments = randomWeaponEnchants('generic', difficulty)
            break

        case 'hatchet':
            // Platinum Hatchet
            mainHandItem = 'illagerinvasion:platinum_infused_hatchet'
            offHandItem = 'minecraft:air'
            enchantments = 'none'
            break

        case 'dual':
            // Generic melee items but with a shield
            switch(difficulty) {
                case 'basic':
                    mainHandItem = basic_weapons[Math.round(Math.random() * 12)]
                    offHandItem = 'minecraft:shield'
                    enchantments = randomWeaponEnchants('generic', difficulty)
                    break
                case 'adv':
                    mainHandItem = advanced_weapons[Math.round(Math.random() * 12)]
                    offHandItem = 'minecraft:shield'
                    enchantments = randomWeaponEnchants('generic', difficulty)
                    break
            }
            break

        default:
            // Generic melee items
            switch(difficulty) {
                case 'basic':
                    mainHandItem = basic_weapons[Math.round(Math.random() * 12)]
                    offHandItem = 'minecraft:air'
                    enchantments = randomWeaponEnchants('generic', difficulty)
                    break
                case 'adv':
                    mainHandItem = advanced_weapons[Math.round(Math.random() * 12)]
                    offHandItem = 'minecraft:air'
                    enchantments = randomWeaponEnchants('generic', difficulty)
                    break
            }
    }
    return `{id:"${mainHandItem}",tag:{Enchantments:[${enchantments}]},Count:1},` +
           `{id:"${offHandItem}",tag:{${potion}},Count:1}`
}