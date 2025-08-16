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
    metamorphosisWithTag('quark:red_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:red_dye', 1, 55, 40)
    metamorphosisWithTag('quark:orange_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:orange_dye', 1, 55, 40)
    metamorphosisWithTag('quark:yellow_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:yellow_dye', 1, 55, 40)
    metamorphosisWithTag('quark:green_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:lime_dye', 1, 55, 40)
    metamorphosisWithTag('quark:blue_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:light_blue_dye', 1, 55, 40)
    metamorphosisWithTag('quark:indigo_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:blue_dye', 1, 55, 40)
    metamorphosisWithTag('quark:violet_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:magenta_dye', 1, 55, 40)
    metamorphosisWithTag('quark:white_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:white_dye', 1, 55, 40)
    metamorphosisWithTag('quark:black_corundum', 1, 'quark:corundum', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:black_dye', 1, 55, 40)
    metamorphosisWithTag('quark:red_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:red_dye', 1, 55, 40)
    metamorphosisWithTag('quark:orange_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:orange_dye', 1, 55, 40)
    metamorphosisWithTag('quark:yellow_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:yellow_dye', 1, 55, 40)
    metamorphosisWithTag('quark:green_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:lime_dye', 1, 55, 40)
    metamorphosisWithTag('quark:blue_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:light_blue_dye', 1, 55, 40)
    metamorphosisWithTag('quark:indigo_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:blue_dye', 1, 55, 40)
    metamorphosisWithTag('quark:violet_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:magenta_dye', 1, 55, 40)
    metamorphosisWithTag('quark:white_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:white_dye', 1, 55, 40)
    metamorphosisWithTag('quark:black_corundum_cluster', 1, 'kubejs:corundum_cluster', 1, 'experienceobelisk:transforming_focus', 1, 'minecraft:black_dye', 1, 55, 40)
})