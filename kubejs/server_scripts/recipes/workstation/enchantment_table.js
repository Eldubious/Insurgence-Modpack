// Create and modify enchantment table recipes
ServerEvents.recipes(event => {

    // Register an infusion enchanting recipe
    function enchantTable(output, outputCount, input, minEterna, maxEterna, minQuanta, maxQuanta, minArcana, maxArcana) {
        event.custom({
            type: 'apotheosis:enchanting',
            input: {item: input},
            requirements: {
                eterna: minEterna,
                quanta: minQuanta,
                arcana: minArcana
            },
            max_requirements: {
                eterna: maxEterna,
                quanta: maxQuanta,
                arcana: maxArcana
            },
            display_level: 3,
            result: {
                item: output,
                count: outputCount
            }
        })
    }

    // Cryptic Eye
    enchantTable('endrem:cryptic_eye', 1, 'minecraft:ender_eye', 15, 15, 40, 50, 5, 10)

    // Enchant Catalyst
    enchantTable('kubejs:enchant_catalyst', 5, 'create:polished_rose_quartz', 20, 20, 0, 100, 0, 100)

    // Hyper Enchant Catalyst
    enchantTable('kubejs:hyper_enchant_catalyst', 1, 'minecraft:diamond', 40, 40, 0, 100, 0, 100)

    // Bibliophage duping
    enchantTable('experienceobelisk:bibliophage', 2, 'experienceobelisk:bibliophage', 0, 50, 70, 100, 0, 100)
})