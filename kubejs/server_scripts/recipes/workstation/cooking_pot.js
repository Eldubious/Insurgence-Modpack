// Create and modify recipes for the Cooking Pot
ServerEvents.recipes(event => {

    // Register a recipe
    function cookingPot(output, inputs, xp, time, bowl) {
        event.recipes.farmersdelight.cooking(
            inputs, output, xp, time, bowl)
    }

    // Golden Apple Stew
    event.remove({id: 'witherstormmod:golden_apple_stew'})
    cookingPot('witherstormmod:golden_apple_stew',
        [
            'minecraft:golden_apple',
            '#witherstormmod:cure_base',
            '#witherstormmod:cure_ingredient',
            'minecraft:suspicious_stew'
        ],
        5, 600, 'minecraft:bowl'
    )
    // Xocolotl
    event.remove({id: 'call_of_yucutan:xocolotl'})
    cookingPot('call_of_yucutan:xocolatl',
        [
            'minecraft:cocoa_beans',
            'minecraft:cocoa_beans',
            'minecraft:sugar',
            'minecraft:milk_bucket',
            'call_of_yucutan:chili_pepper',
            'call_of_yucutan:chili_pepper'
        ],
        5, 400, 'minecraft:bowl'
    )
})