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
})