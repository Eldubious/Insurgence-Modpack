// Create and register Charger recipes
ServerEvents.recipes(event => {

    // Register a charging recipe
    function charger(output, input) {
        event.custom({
            type: 'ae2:charger',
            ingredient: {
                item: input
            },
            result: {
                item: output
            }
        })
    }

    // Remove all original charging recipes
    event.remove({type: 'ae2:charger'})

    // AE Guide
    charger('ae2:guide', 1, 'create:iron_sheet')
})