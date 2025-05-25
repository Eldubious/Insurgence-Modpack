// Change the crafting recipes for Sophisticated Storage/Backpacks upgrade items.
ServerEvents.recipes(event => {

    // Create recipes which allow you to swap between a storage and backpack upgrade
    function swapUpgrades(storageUpgrade, backpackUpgrade) {
        event.shaped(storageUpgrade,
            ['ABA'],
            {
                A: '#minecraft:planks',
                B: backpackUpgrade
            }
        )
        event.shaped(backpackUpgrade,
            ['ABA'],
            {
                A: 'minecraft:string',
                B: storageUpgrade
            }
        )
    }

    // Create an Enchanting Apparatus recipe with no source cost
    function enchantApparatus(output, inputItems, catalyst) {
        event.recipes.ars_nouveau.enchanting_apparatus(inputItems, catalyst, output)
    }

    // Create a Molecular Metamorpher recipe (for stack upgrades)
    function metamorpher(output, outputCount, input1, count1, input2, count2, input3, count3, xpCost, time) {
        event.custom({
            type: 'experienceobelisk:molecular_metamorphosis',
            ingredient1: {
                item: input1
            },
            count1: count1,
            ingredient2: {
                item: input2
            },
            count2: count2,
            ingredient3: {
                item: input3
            },
            count3: count3,
            result: {
                item: output,
                count: outputCount
            },
            cost: xpCost,
            processTime: time
        })
    }

    /*
        Sophisticated Storage upgrades
    */
    // Filter Upgrades
    event.remove([{id: 'sophisticatedstorage:filter_upgrade'}, {id: 'sophisticatedstorage:advanced_filter_upgrade'}])
    event.remove([{id: 'sophisticatedstorage:storage_filter_upgrade_from_backpack_filter_upgrade'}, {id: 'sophisticatedstorage:storage_advanced_filter_upgrade_from_backpack_advanced_filter_upgrade'}])
    event.shaped('sophisticatedstorage:filter_upgrade',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:redstone',
            B: 'create:filter',
            C: 'minecraft:string',
            D: 'sophisticatedstorage:upgrade_base'
        }
    )
    enchantApparatus('sophisticatedstorage:advanced_filter_upgrade',
        [
            'create:brass_ingot', 'create:brass_ingot', 'irons_spellbooks:magic_cloth',
            'irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth'
        ],
        'sophisticatedstorage:filter_upgrade'
    )
    // Jukebox Upgrades
    event.remove([{id: 'sophisticatedstorage:storage_jukebox_upgrade_from_backpack_jukebox_upgrade'}, {id: 'sophisticatedstorage:storage_advanced_jukebox_upgrade_from_backpack_advanced_jukebox_upgrade'}])
    event.remove({id: 'sophisticatedstorage:advanced_jukebox_upgrade'})
    enchantApparatus('sophisticatedstorage:advanced_jukebox_upgrade',
        [
            'minecraft:diamond', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:gold_nugget',
            'minecraft:gold_nugget', 'minecraft:gold_nugget'
        ],
        'sophisticatedstorage:jukebox_upgrade'
    )
    // Void Upgrades
    event.remove([{id: 'sophisticatedstorage:void_upgrade'}, {id: 'sophisticatedstorage:advanced_void_upgrade'}])
    event.remove([{id: 'sophisticatedstorage:storage_void_upgrade_from_backpack_void_upgrade'}, {id: 'sophisticatedstorage:storage_advanced_void_upgrade_from_backpack_advanced_void_upgrade'}])
    event.shaped('sophisticatedstorage:void_upgrade',
        [
            ' A ',
            'BCB',
            ' B '
        ],
        {
            A: 'ars_nouveau:void_jar',
            B: '#forge:obsidian',
            C: 'sophisticatedstorage:upgrade_base'
        }
    )
    enchantApparatus('sophisticatedstorage:advanced_void_upgrade',
        [
            'minecraft:diamond', '#forge:obsidian', '#forge:obsidian', '#forge:obsidian', 'experienceobelisk:whisperglass',
            'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass'
        ],
        'sophisticatedstorage:void_upgrade'
    )
    // Smelting Upgrade
    event.remove([{id: 'sophisticatedstorage:smelting_upgrade'}, {id: 'sophisticatedstorage:storage_smelting_upgrade_from_backpack_smelting_upgrade'}])
    event.shaped('sophisticatedstorage:smelting_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:quartz',
            B: 'minecraft:furnace',
            C: 'sophisticatedstorage:upgrade_base'
        }
    )
    // Smoking Upgrade
    event.remove([{id: 'sophisticatedstorage:smoking_upgrade'}, {id: 'sophisticatedstorage:storage_smoking_upgrade_from_backpack_smoking_upgrade'}, {id: 'sophisticatedstorage:smoking_upgrade_from_smelting_upgrade'}])
    event.shaped('sophisticatedstorage:smoking_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:quartz',
            B: 'minecraft:smoker',
            C: 'sophisticatedstorage:upgrade_base'
        }
    )
    // Blasting Upgrade
    event.remove([{id: 'sophisticatedstorage:blasting_upgrade'}, {id: 'sophisticatedstorage:storage_blasting_upgrade_from_backpack_blasting_upgrade'}, {id: 'sophisticatedstorage:blasting_upgrade_from_smelting_upgrade'}])
    event.shaped('sophisticatedstorage:blasting_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:quartz',
            B: 'minecraft:blast_furnace',
            C: 'sophisticatedstorage:upgrade_base'
        }
    )
    // Crafting Upgrade
    event.remove([{id: 'sophisticatedstorage:crafting_upgrade'}, {id: 'sophisticatedstorage:storage_crafting_upgrade_from_backpack_crafting_upgrade'}])
    event.shaped('sophisticatedstorage:crafting_upgrade',
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'minecraft:crafting_table',
            B: '#forge:leather',
            C: 'sophisticatedstorage:upgrade_base'
        }
    )
    event.remove([{id: 'sophisticatedstorage:stonecutter_upgrade'}, {id: 'sophisticatedstorage:storage_stonecutter_upgrade_from_backpack_stonecutter_upgrade'}])
    event.shaped('sophisticatedstorage:stonecutter_upgrade',
        [
            'ABA',
            'CCC'
        ],
        {
            A: 'minecraft:stonecutter',
            B: 'sophisticatedstorage:upgrade_base',
            C: '#forge:stone'
        }
    )


    /*
        Sophisticated Backpacks upgrades
    */
    // Filter Upgrades
    event.remove([{id: 'sophisticatedbackpacks:filter_upgrade'}, {id: 'sophisticatedbackpacks:advanced_filter_upgrade'}])
    event.remove([{id: 'sophisticatedstorage:backpack_filter_upgrade_from_storage_filter_upgrade'}, {id: 'sophisticatedstorage:backpack_advanced_filter_upgrade_from_storage_advanced_filter_upgrade'}])
    event.shaped('sophisticatedbackpacks:filter_upgrade',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:redstone',
            B: 'create:filter',
            C: 'minecraft:string',
            D: 'sophisticatedbackpacks:upgrade_base'
        }
    )
    enchantApparatus('sophisticatedbackpacks:advanced_filter_upgrade',
        [
            'create:brass_ingot', 'create:brass_ingot', 'irons_spellbooks:magic_cloth',
            'irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth'
        ],
        'sophisticatedbackpacks:filter_upgrade'
    )
    // Magnet Upgrades
    event.remove([{id: 'sophisticatedbackpacks:magnet_upgrade'}, {id: 'sophisticatedbackpacks:advanced_magnet_upgrade'}, {id: 'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic'}])
    event.shaped('sophisticatedbackpacks:magnet_upgrade',
        [
            'ABA',
            'CDE',
            'C E'
        ],
        {
            A: 'forbidden_arcanus:ender_pearl_fragment',
            B: 'minecraft:iron_ingot',
            C: 'alexscaves:scarlet_neodymium_ingot',
            D: 'sophisticatedbackpacks:upgrade_base',
            E: 'alexscaves:azure_neodymium_ingot'
        }
    )
    enchantApparatus('sophisticatedbackpacks:advanced_magnet_upgrade',
        [
            'alexscaves:scarlet_magnet', 'alexscaves:azure_magnet', '#forge:ender_pearls', '#forge:ender_pearls',
            '#forge:ender_pearls'
        ],
        'sophisticatedbackpacks:magnet_upgrade'
    )
    // Jukebox Upgrades
    event.remove([{id: 'sophisticatedstorage:backpack_jukebox_upgrade_from_storage_jukebox_upgrade'}, {id: 'sophisticatedstorage:backpack_advanced_jukebox_upgrade_from_storage_advanced_jukebox_upgrade'}])
    event.remove({id: 'sophisticatedbackpacks:advanced_jukebox_upgrade'})
    enchantApparatus('sophisticatedbackpacks:advanced_jukebox_upgrade',
        [
            'minecraft:diamond', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:gold_nugget',
            'minecraft:gold_nugget', 'minecraft:gold_nugget'
        ],
        'sophisticatedbackpacks:jukebox_upgrade'
    )
    // Void Upgrades
    event.remove([{id: 'sophisticatedbackpacks:void_upgrade'}, {id: 'sophisticatedbackpacks:advanced_void_upgrade'}])
    event.remove([{id: 'sophisticatedstorage:backpack_void_upgrade_from_storage_void_upgrade'}, {id:"sophisticatedstorage:backpack_advanced_void_upgrade_from_storage_advanced_void_upgrade"}])
    event.shaped('sophisticatedbackpacks:void_upgrade',
        [
            ' A ',
            'BCB',
            ' B '
        ],
        {
            A: 'ars_nouveau:void_jar',
            B: '#forge:obsidian',
            C: 'sophisticatedbackpacks:upgrade_base'
        }
    )
    enchantApparatus('sophisticatedbackpacks:advanced_void_upgrade',
        [
            'minecraft:diamond', '#forge:obsidian', '#forge:obsidian', '#forge:obsidian', 'experienceobelisk:whisperglass',
            'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass'
        ],
        'sophisticatedbackpacks:void_upgrade'
    )
    // Smelting Upgrades
    event.remove([{id: 'sophisticatedbackpacks:smelting_upgrade'}, {id: 'sophisticatedbackpacks:auto_smelting_upgrade'}])
    event.remove([{id: 'sophisticatedstorage:backpack_smelting_upgrade_from_storage_smelting_upgrade'}])
    event.shaped('sophisticatedbackpacks:smelting_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:quartz',
            B: 'minecraft:furnace',
            C: 'sophisticatedbackpacks:upgrade_base'
        }
    )
    enchantApparatus('sophisticatedbackpacks:auto_smelting_upgrade',
        [
            'create:brass_ingot', 'create:brass_ingot', 'create:brass_ingot', 'create:experience_nugget', 'create:experience_nugget',
            'create:experience_nugget', 'create:experience_nugget'
        ],
        'sophisticatedbackpacks:smelting_upgrade'
    )
    // Smoking Upgrades
    event.remove([{id: 'sophisticatedbackpacks:smoking_upgrade'}, {id: 'sophisticatedbackpacks:auto_smoking_upgrade'}])
    event.remove([{id: 'sophisticatedstorage:backpack_smoking_upgrade_from_storage_smoking_upgrade'}, {id: 'sophisticatedbackpacks:smoking_upgrade_from_smelting_upgrade'}, {id: 'sophisticatedbackpacks:auto_smoking_upgrade_from_auto_smelting_upgrade'}])
    event.shaped('sophisticatedbackpacks:smoking_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:quartz',
            B: 'minecraft:smoker',
            C: 'sophisticatedbackpacks:upgrade_base'
        }
    )
    enchantApparatus('sophisticatedbackpacks:auto_smoking_upgrade',
        [
            'create:brass_ingot', 'create:brass_ingot', 'create:brass_ingot', 'create:experience_nugget', 'create:experience_nugget',
            'create:experience_nugget', 'create:experience_nugget'
        ],
        'sophisticatedbackpacks:smoking_upgrade'
    )
    // Blasting Upgrades
    event.remove([{id: 'sophisticatedbackpacks:blasting_upgrade'}, {id: 'sophisticatedbackpacks:auto_blasting_upgrade'}])
    event.remove([{id: 'sophisticatedstorage:backpack_blasting_upgrade_from_storage_blasting_upgrade'}, {id: 'sophisticatedbackpacks:blasting_upgrade_from_smelting_upgrade'}, {id: 'sophisticatedbackpacks:auto_blasting_upgrade_from_auto_smelting_upgrade'}])
    event.shaped('sophisticatedbackpacks:blasting_upgrade',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:quartz',
            B: 'minecraft:blast_furnace',
            C: 'sophisticatedbackpacks:upgrade_base'
        }
    )
    enchantApparatus('sophisticatedbackpacks:auto_blasting_upgrade',
        [
            'create:brass_ingot', 'create:brass_ingot', 'create:brass_ingot', 'create:experience_nugget', 'create:experience_nugget',
            'create:experience_nugget', 'create:experience_nugget'
        ],
        'sophisticatedbackpacks:blasting_upgrade'
    )
    // Crafting Upgrade
    event.remove([{id: 'sophisticatedbackpacks:crafting_upgrade'}, {id: 'sophisticatedstorage:backpack_crafting_upgrade_from_storage_crafting_upgrade'}])
    event.shaped('sophisticatedbackpacks:crafting_upgrade',
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'minecraft:crafting_table',
            B: '#forge:leather',
            C: 'sophisticatedbackpacks:upgrade_base'
        }
    )
    // Restock Upgrades
    event.remove([{id: 'sophisticatedbackpacks:restock_upgrade'}, {id: 'sophisticatedbackpacks:advanced_restock_upgrade'}])
    event.shaped('sophisticatedbackpacks:restock_upgrade',
        [
            'ABA',
            'CDC',
            ' E '
        ],
        {
            A: 'minecraft:slime_ball',
            B: 'minecraft:sticky_piston',
            C: 'create:iron_sheet',
            D: 'sophisticatedbackpacks:upgrade_base',
            E: 'minecraft:iron_nugget'
        }
    )
    enchantApparatus('sophisticatedbackpacks:advanced_restock_upgrade',
        [
            'minecraft:slime_block', 'create:brass_ingot', 'create:brass_ingot', 'minecraft:iron_nugget', 'minecraft:iron_nugget'
        ],
        'sophisticatedbackpacks:restock_upgrade'
    )
    // Deposit Upgrades
    event.remove([{id: 'sophisticatedbackpacks:deposit_upgrade'}, {id: 'sophisticatedbackpacks:advanced_deposit_upgrade'}])
    event.shaped('sophisticatedbackpacks:deposit_upgrade',
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'create:iron_sheet',
            C: 'sophisticatedbackpacks:upgrade_base',
            D: 'create:andesite_alloy',
            E: 'create:chute'
        }
    )
    enchantApparatus('sophisticatedbackpacks:advanced_deposit_upgrade',
        [
            'create:andesite_alloy_block', 'create:brass_ingot', 'create:brass_ingot', 'minecraft:iron_nugget', 'minecraft:iron_nugget'
        ],
        'sophisticatedbackpacks:deposit_upgrade'
    )
    // Stonecutter Upgrade
    event.remove([{id: 'sophisticatedbackpacks:stonecutter_upgrade'}, {id: 'sophisticatedstorage:backpack_stonecutter_upgrade_from_storage_stonecutter_upgrade'}])
    event.shaped('sophisticatedbackpacks:stonecutter_upgrade',
        [
            'ABA',
            'CCC'
        ],
        {
            A: 'minecraft:stonecutter',
            B: 'sophisticatedbackpacks:upgrade_base',
            C: '#forge:stone'
        }
    )
    // Tool Swapper Upgrades
    event.remove([{id: 'sophisticatedbackpacks:tool_swapper_upgrade'}, {id: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade'}])
    event.shaped('sophisticatedbackpacks:tool_swapper_upgrade',
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'create:copper_nugget',
            B: 'iceandfire:copper_sword',
            C: 'iceandfire:copper_pickaxe',
            D: 'sophisticatedbackpacks:upgrade_base',
            E: 'iceandfire:copper_axe',
            F: 'iceandfire:copper_shovel'
        }
    )
    enchantApparatus('sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        [
            'minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:golden_sword', 'minecraft:golden_pickaxe', 'minecraft:golden_axe',
            'minecraft:golden_shovel'
        ],
        'sophisticatedbackpacks:tool_swapper_upgrade'
    )
    // Feeding Upgrades
    event.remove([{id: 'sophisticatedbackpacks:feeding_upgrade'}, {id: 'sophisticatedbackpacks:advanced_feeding_upgrade'}])
    event.shaped('sophisticatedbackpacks:feeding_upgrade',
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            A: 'minecraft:apple',
            B: 'farmersdelight:mixed_salad',
            C: 'sophisticatedbackpacks:upgrade_base',
            D: 'farmersdelight:bacon_and_eggs',
            E: 'farmersdelight:fried_rice'
        }
    )
    enchantApparatus('sophisticatedbackpacks:advanced_feeding_upgrade',
        [
            'minecraft:golden_apple', 'mynethersdelight:breakfast_sampler', 'pineapple_delight:pineapple_fried_rice',
            'oceanic_delight:caesar_salad'
        ],
        'sophisticatedbackpacks:feeding_upgrade'
    )
    // Tank Upgrade
    event.remove({id: 'sophisticatedbackpacks:tank_upgrade'})
    event.shaped('sophisticatedbackpacks:tank_upgrade',
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'create:copper_sheet',
            B: 'create:fluid_tank',
            C: 'sophisticatedbackpacks:upgrade_base'
        }
    )
    // Inception Upgrade
    event.replaceInput({id: 'sophisticatedbackpacks:inception_upgrade'},
        'minecraft:ender_eye',
        'galosphere:cured_membrane'
    )


    /*
        Stack Upgrades
    */
    // Remove all original recipes
    const stack_upgrades = ['sophisticatedstorage:stack_upgrade_tier_1',
        'sophisticatedstorage:stack_upgrade_tier_1_plus', 'sophisticatedbackpacks:stack_upgrade_starter_tier',
        'sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1',
        'sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_2',
        'sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3',
        'sophisticatedstorage:stack_upgrade_tier_5', 'sophisticatedbackpacks:stack_upgrade_tier_4',
        'sophisticatedstorage:stack_upgrade_omega_tier', 'sophisticatedbackpacks:stack_upgrade_omega_tier',
        'sophisticatedstorage:stack_downgrade_tier_1', 'sophisticatedbackpacks:stack_downgrade_tier_1',
        'sophisticatedstorage:stack_downgrade_tier_2', 'sophisticatedbackpacks:stack_downgrade_tier_2',
        'sophisticatedstorage:stack_downgrade_tier_3', 'sophisticatedbackpacks:stack_downgrade_tier_3'
    ]
    stack_upgrades.forEach(element => {
        event.remove([{input: element}, {output:element}])
    })
    // Create new stack upgrade recipes
    metamorpher('sophisticatedstorage:stack_upgrade_tier_1', 1, 'quark:sturdy_stone', 4, 'sophisticatedstorage:upgrade_base', 1, 'quark:sturdy_stone', 4, 112, 1200)
    metamorpher('sophisticatedstorage:stack_upgrade_tier_1_plus', 1, 'minecraft:copper_block', 4, 'sophisticatedstorage:stack_upgrade_tier_1', 1, 'minecraft:copper_block', 4, 160, 1200)
    metamorpher('sophisticatedstorage:stack_upgrade_tier_2', 1, 'minecraft:iron_block', 3, 'sophisticatedstorage:stack_upgrade_tier_1_plus', 1, 'minecraft:iron_block', 3, 550, 1200)
    metamorpher('sophisticatedstorage:stack_upgrade_tier_3', 1, 'minecraft:gold_block', 2, 'sophisticatedstorage:stack_upgrade_tier_2', 1, 'minecraft:gold_block', 2, 1395, 1200)
    metamorpher('sophisticatedstorage:stack_upgrade_tier_4', 1, 'minecraft:diamond_block', 2, 'sophisticatedstorage:stack_upgrade_tier_3', 1, 'minecraft:diamond_block', 2, 2920, 1200)
    metamorpher('sophisticatedstorage:stack_upgrade_tier_5', 1, 'minecraft:netherite_block', 1, 'sophisticatedstorage:stack_upgrade_tier_4', 1, 'minecraft:netherite_block', 1, 5345, 1200)
    metamorpher('sophisticatedstorage:stack_upgrade_omega_tier', 1, 'galosphere:cured_membrane', 4, 'sophisticatedstorage:stack_upgrade_tier_5', 1, 'galosphere:cured_membrane', 4, 8670, 1200)
    metamorpher('sophisticatedbackpacks:stack_upgrade_starter_tier', 1, 'minecraft:copper_block', 4, 'sophisticatedbackpacks:upgrade_base', 1, 'minecraft:copper_block', 4, 160, 1200)
    metamorpher('sophisticatedbackpacks:stack_upgrade_tier_1', 1, 'minecraft:iron_block', 3, 'sophisticatedbackpacks:stack_upgrade_starter_tier', 1, 'minecraft:iron_block', 3, 550, 1200)
    metamorpher('sophisticatedbackpacks:stack_upgrade_tier_2', 1, 'minecraft:gold_block', 2, 'sophisticatedbackpacks:stack_upgrade_tier_1', 1, 'minecraft:gold_block', 2, 1395, 1200)
    metamorpher('sophisticatedbackpacks:stack_upgrade_tier_3', 1, 'minecraft:diamond_block', 2, 'sophisticatedbackpacks:stack_upgrade_tier_2', 1, 'minecraft:diamond_block', 2, 2920, 1200)
    metamorpher('sophisticatedbackpacks:stack_upgrade_tier_4', 1, 'minecraft:netherite_block', 1, 'sophisticatedbackpacks:stack_upgrade_tier_3', 1, 'minecraft:netherite_block', 1, 5345, 1200)
    metamorpher('sophisticatedbackpacks:stack_upgrade_omega_tier', 1, 'galosphere:cured_membrane', 4, 'sophisticatedbackpacks:stack_upgrade_tier_4', 1, 'galosphere:cured_membrane', 4, 8670, 1200)
    metamorpher('sophisticatedstorage:stack_downgrade_tier_1', 1, 'minecraft:flint', 1, 'sophisticatedstorage:upgrade_base', 1, 'minecraft:flint', 1, 7, 40)
    metamorpher('sophisticatedstorage:stack_downgrade_tier_2', 1, 'minecraft:flint', 2, 'sophisticatedstorage:stack_downgrade_tier_1', 1, 'minecraft:flint', 2, 16, 40)
    metamorpher('sophisticatedstorage:stack_downgrade_tier_3', 1, 'minecraft:flint', 3, 'sophisticatedstorage:stack_downgrade_tier_2', 1, 'minecraft:flint', 3, 27, 40)
    metamorpher('sophisticatedbackpacks:stack_downgrade_tier_1', 1, 'minecraft:flint', 1, 'sophisticatedbackpacks:upgrade_base', 1, 'minecraft:flint', 1, 7, 40)
    metamorpher('sophisticatedbackpacks:stack_downgrade_tier_2', 1, 'minecraft:flint', 2, 'sophisticatedbackpacks:stack_downgrade_tier_1', 1, 'minecraft:flint', 2, 16, 40)
    metamorpher('sophisticatedbackpacks:stack_downgrade_tier_3', 1, 'minecraft:flint', 3, 'sophisticatedbackpacks:stack_downgrade_tier_2', 1, 'minecraft:flint', 3, 27, 40)

    // Create exchange recipes for all upgrades
    const upgrades = [
        ['sophisticatedstorage:filter_upgrade', 'sophisticatedbackpacks:filter_upgrade'],
        ['sophisticatedstorage:advanced_filter_upgrade', 'sophisticatedbackpacks:advanced_filter_upgrade'],
        ['sophisticatedstorage:jukebox_upgrade', 'sophisticatedbackpacks:jukebox_upgrade'],
        ['sophisticatedstorage:advanced_jukebox_upgrade', 'sophisticatedbackpacks:advanced_jukebox_upgrade'],
        ['sophisticatedstorage:void_upgrade', 'sophisticatedbackpacks:void_upgrade'],
        ['sophisticatedstorage:advanced_void_upgrade', 'sophisticatedbackpacks:advanced_void_upgrade'],
        ['sophisticatedstorage:smelting_upgrade', 'sophisticatedbackpacks:smelting_upgrade'],
        ['sophisticatedstorage:smoking_upgrade', 'sophisticatedbackpacks:smoking_upgrade'],
        ['sophisticatedstorage:blasting_upgrade', 'sophisticatedbackpacks:blasting_upgrade'],
        ['sophisticatedstorage:crafting_upgrade', 'sophisticatedbackpacks:crafting_upgrade'],
        ['sophisticatedstorage:stonecutter_upgrade', 'sophisticatedbackpacks:stonecutter_upgrade'],
        ['sophisticatedstorage:stack_upgrade_tier_1_plus', 'sophisticatedbackpacks:stack_upgrade_starter_tier'],
        ['sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1'],
        ['sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_2'],
        ['sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3'],
        ['sophisticatedstorage:stack_upgrade_tier_5', 'sophisticatedbackpacks:stack_upgrade_tier_4'],
        ['sophisticatedstorage:stack_upgrade_omega_tier', 'sophisticatedbackpacks:stack_upgrade_omega_tier'],
        ['sophisticatedstorage:stack_downgrade_tier_1', 'sophisticatedbackpacks:stack_downgrade_tier_1'],
        ['sophisticatedstorage:stack_downgrade_tier_2', 'sophisticatedbackpacks:stack_downgrade_tier_2'],
        ['sophisticatedstorage:stack_downgrade_tier_3', 'sophisticatedbackpacks:stack_downgrade_tier_3']
    ]
    upgrades.forEach(element => swapUpgrades(element[0], element[1]))
})