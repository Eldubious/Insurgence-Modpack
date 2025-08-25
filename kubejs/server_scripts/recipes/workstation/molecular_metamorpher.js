// Create and modify recipes for the Molecular Metamorpher
ServerEvents.recipes(event => {

    // Register a recipe
    function metamorphosis(output, outputCount, input1, count1, input2, count2, input3, count3, xpCost, time) {
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

    // Register a recipe (the first input is a tag)
    function metamorphosisWithTag(output, outputCount, input1Tag, count1, input2, count2, input3, count3, xpCost, time) {
        event.custom({
            type: 'experienceobelisk:molecular_metamorphosis',
            ingredient1: {
                tag: input1Tag
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

    // Entwine Rod
    event.remove({id: 'architects_palette:entwine_rod'})
    metamorphosis('architects_palette:entwine_rod', 4, 'minecraft:ender_pearl', 1, 'galosphere:silver_nugget', 2, 'unusualend:warped_moss', 5, 55, 40)
    // Oracle Jelly
    event.remove({id: 'architects_palette:oracle_jelly'})
    metamorphosis('architects_palette:oracle_jelly', 4, 'minecraft:sugar', 1, 'hexcasting:amethyst_dust', 2, 'unusualend:end_blob', 2, 55, 40)
    // Cryptic Eye
    metamorphosis('endrem:cryptic_eye', 1, 'minecraft:ender_eye', 1, 'create:experience_nugget', 3, 'create:experience_nugget', 3, 315, 600)
    // Blank Teleporter Key
    metamorphosis('dimdungeons:item_blank_teleporter_key', 1, 'minecraft:blaze_rod', 2, 'dimdungeons:block_portal_crown', 1, 'create:chromatic_compound', 3, 55, 200)
    // Trident
    metamorphosis('minecraft:trident', 1, 'minecraft:prismarine_shard', 3, 'apotheosis:inert_trident', 1, 'experienceobelisk:mending_neurogel', 1, 55, 80)
    // Hammer Cores
    event.remove([{id: 'justhammers:impact_core'}, {id: 'justhammers:reinforced_core'}, {id: 'justhammers:reinforced_impact_core'}, {id: 'justhammers:destructor_core'}])
    metamorphosis('justhammers:impact_core', 1, 'minecraft:iron_block', 1, 'minecraft:netherite_ingot', 3, 'minecraft:gold_block', 1, 315, 900)
    metamorphosis('justhammers:reinforced_core', 1, 'create:brass_ingot', 16, 'justhammers:impact_core', 1, 'samurai_dynasty:steel_ingot', 16, 1395, 900)
    metamorphosis('justhammers:reinforced_impact_core', 1, 'minecraft:diamond', 10, 'justhammers:reinforced_core', 1, 'cataclysm:witherite_ingot', 8, 5345, 900)
    metamorphosis('justhammers:destructor_core', 1, 'minecraft:diamond_block', 2, 'justhammers:reinforced_impact_core', 1, 'cataclysm:ignitium_ingot', 4, 8670, 900)
    // Corundum
    metamorphosisWithTag('quark:red_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:red_dye', 1, 16, 40)
    metamorphosisWithTag('quark:orange_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:orange_dye', 1, 16, 40)
    metamorphosisWithTag('quark:yellow_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:yellow_dye', 1, 16, 40)
    metamorphosisWithTag('quark:green_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:lime_dye', 1, 16, 40)
    metamorphosisWithTag('quark:blue_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:light_blue_dye', 1, 16, 40)
    metamorphosisWithTag('quark:indigo_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:blue_dye', 1, 16, 40)
    metamorphosisWithTag('quark:violet_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:magenta_dye', 1, 16, 40)
    metamorphosisWithTag('quark:white_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:white_dye', 1, 16, 40)
    metamorphosisWithTag('quark:black_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:black_dye', 1, 16, 40)
    metamorphosisWithTag('quark:red_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:red_dye', 1, 16, 40)
    metamorphosisWithTag('quark:orange_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:orange_dye', 1, 16, 40)
    metamorphosisWithTag('quark:yellow_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:yellow_dye', 1, 16, 40)
    metamorphosisWithTag('quark:green_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:lime_dye', 1, 16, 40)
    metamorphosisWithTag('quark:blue_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:light_blue_dye', 1, 16, 40)
    metamorphosisWithTag('quark:indigo_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:blue_dye', 1, 16, 40)
    metamorphosisWithTag('quark:violet_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:magenta_dye', 1, 16, 40)
    metamorphosisWithTag('quark:white_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:white_dye', 1, 16, 40)
    metamorphosisWithTag('quark:black_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:black_dye', 1, 16, 40)
    // Printed Circuits
    metamorphosis('ae2:calculation_processor', 1, 'minecraft:redstone', 1, 'ae2:printed_silicon', 1, 'ae2:printed_calculation_processor', 1, 55, 120)
    metamorphosis('ae2:logic_processor', 1, 'minecraft:redstone', 1, 'ae2:printed_silicon', 1, 'ae2:printed_logic_processor', 1, 55, 120)
    metamorphosis('ae2:engineering_processor', 1, 'minecraft:redstone', 1, 'ae2:printed_silicon', 1, 'ae2:printed_engineering_processor', 1, 55, 120)
    // Budding Quartz
    metamorphosis('ae2:damaged_budding_quartz', 1, 'ae2:quartz_block', 1, 'ae2:charged_certus_quartz_crystal', 1, 'ae2:certus_quartz_dust', 1, 16, 1200)
    metamorphosis('ae2:chipped_budding_quartz', 1, 'ae2:damaged_budding_quartz', 1, 'ae2:charged_certus_quartz_crystal', 1, 'ae2:certus_quartz_dust', 1, 16, 1200)
    metamorphosis('ae2:flawed_budding_quartz', 1, 'ae2:chipped_budding_quartz', 1, 'ae2:charged_certus_quartz_crystal', 1, 'ae2:certus_quartz_dust', 1, 16, 1200)
    metamorphosis('ae2:flawless_budding_quartz', 1, 'ae2:flawed_budding_quartz', 1, 'ae2:charged_certus_quartz_crystal', 1, 'ae2:certus_quartz_dust', 1, 16, 1200)
    // Storage Components
    event.remove([{id: 'ae2:network/cells/item_storage_components_cell_1k_part'}, {id: 'ae2:network/cells/item_storage_components_cell_4k_part'},
        {id: 'ae2:network/cells/item_storage_components_cell_16k_part'}, {id: 'ae2:network/cells/item_storage_components_cell_64k_part'},
        {id: 'ae2:network/cells/item_storage_components_cell_256k_part'}, {id: 'ae2:network/cells/spatial_components'}, {id: 'ae2:network/cells/spatial_components_0'},
        {id: 'ae2:network/cells/spatial_components_1'}])
    metamorphosis('ae2:cell_component_1k', 1, 'minecraft:redstone', 4, 'ae2:charged_certus_quartz_crystal', 4, 'ae2:logic_processor', 1, 7, 20)
    metamorphosis('ae2:cell_component_4k', 1, 'minecraft:glowstone_dust', 4, 'ae2:cell_component_1k', 1, 'ae2:calculation_processor', 1, 40, 20*4)
    metamorphosis('ae2:cell_component_16k', 1, 'minecraft:glowstone_dust', 4, 'ae2:cell_component_4k', 1, 'ae2:calculation_processor', 1, 352, 20*16)
    metamorphosis('ae2:cell_component_64k', 1, 'ae2:sky_dust', 4, 'ae2:cell_component_16k', 1, 'ae2:calculation_processor', 1, 10252, 20*64)
    metamorphosis('ae2:cell_component_256k', 1, 'ae2:sky_dust', 4, 'ae2:cell_component_64k', 1, 'ae2:calculation_processor', 1, 255532, 20*256)
    metamorphosis('ae2:spatial_cell_component_2', 1, 'minecraft:glowstone_dust', 4, 'ae2:fluix_pearl', 4, 'ae2:engineering_processor', 1, 16, 20*2)
    metamorphosis('ae2:spatial_cell_component_16', 1, 'minecraft:glowstone_dust', 4, 'ae2:spatial_cell_component_2', 1, 'ae2:engineering_processor', 1, 352, 20*16)
    metamorphosis('ae2:spatial_cell_component_128', 1, 'minecraft:glowstone_dust', 4, 'ae2:spatial_cell_component_16', 1, 'ae2:engineering_processor', 1, 55148, 20*128)
    // Upgrade Cards
    event.remove([{id: 'ae2:materials/basiccard'}, {id: 'ae2:materials/advancedcard'}])
    metamorphosis('ae2:basic_card', 2, 'ae2:calculation_processor', 1, 'create:iron_sheet', 1, 'mahoutsukai:powdered_gold', 2, 55, 40)
    metamorphosis('ae2:advanced_card', 2, 'ae2:calculation_processor', 1, 'create:iron_sheet', 1, 'mahoutsukai:powdered_diamond', 2, 55, 40)
})