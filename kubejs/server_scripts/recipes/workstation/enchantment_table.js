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
})