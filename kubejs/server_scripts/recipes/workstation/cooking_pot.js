// Create and modify recipes for the Cooking Pot
ServerEvents.recipes(event => {

    // Register a recipe
    function cookingPot(output, inputs, xp, time, bowl) {
        event.recipes.farmersdelight.cooking(
            inputs, output, xp, time, bowl)
    }

    // Remove default recipe for Turtle Soup
    event.remove({id: 'aquaculture:turtle_soup'})
    // Golden Apple Stew
    event.remove({id: 'witherstormmod:golden_apple_stew'})
    cookingPot('witherstormmod:golden_apple_stew',
        [
            'minecraft:golden_apple',
            '#witherstormmod:cure_base',
            '#witherstormmod:cure_ingredient',
            'minecraft:suspicious_stew'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Xocolotl
    event.remove({id: 'call_of_yucutan:xocolatl_recipe'})
    cookingPot('call_of_yucutan:xocolatl',
        [
            'minecraft:cocoa_beans',
            'minecraft:cocoa_beans',
            'minecraft:sugar',
            'minecraft:milk_bucket',
            'call_of_yucutan:chili_pepper',
            'call_of_yucutan:chili_pepper'
        ],
        1, 100, 'minecraft:bowl'
    )
    // Seething Stew
    event.remove({id: 'alexscaves:seething_stew'})
    cookingPot('alexscaves:seething_stew',
        [
            'alexscaves:cooked_dinosaur_chop',
            'alexscaves:flytrap',
            'alexscaves:heavy_bone'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Primordial Soup
    event.remove({id: 'alexscaves:primordial_soup'})
    cookingPot('alexscaves:primordial_soup',
        [
            'alexscaves:cooked_trilocaris_tail',
            'alexscaves:cooked_trilocaris_tail',
            'alexscaves:tree_star'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Vesper Stew
    event.remove({id: 'alexscaves:vesper_stew'})
    cookingPot('alexscaves:vesper_stew',
        [
            'alexscaves:vesper_wing',
            'alexscaves:thornwood_branch',
            'minecraft:brown_mushroom'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Bee Soup
    event.remove({id: 'the_bumblezone:bee_soup'})
    cookingPot('the_bumblezone:bee_soup',
        [
            'the_bumblezone:bee_bread',
            'minecraft:beetroot',
            'minecraft:potato',
            'minecraft:honeycomb',
            'minecraft:honeycomb',
            'the_bumblezone:bee_stinger'
        ],
        1, 400, 'minecraft:bowl'
    )
    // Mosquito Repellent Stew
    cookingPot('alexsmobs:mosquito_repellent_stew',
        [
            'alexsmobs:triops_eggs',
            'alexsmobs:triops_eggs',
            'alexsmobs:stink_bottle'
        ],
        1, 100, 'minecraft:bowl'
    )
    // Sopa de Macaco
    cookingPot('alexsmobs:sopa_de_macaco',
        [
            'alexsmobs:banana_peel',
            'minecraft:bone',
            'minecraft:brown_mushroom'
        ],
        1, 100, 'minecraft:bowl'
    )
    // Oatmeal
    event.remove({id: 'aether_redux:oatmeal'})
    cookingPot('aether_redux:oatmeal',
        [
            'aether_redux:wynd_oats',
            'aether_redux:wynd_oats',
            'aether_redux:wynd_oats'
        ],
        1, 150, 'minecraft:bowl'
    )
    // Hot Chocolate
    event.remove({id: 'alexscaves:hot_chocolate_bottle'})
    cookingPot('alexscaves:hot_chocolate_bottle',
        [
            'alexscaves:block_of_chocolate',
            'alexscaves:block_of_chocolate',
            'minecraft:sugar'
        ],
        1, 50, 'minecraft:glass_bottle'
    )
    // Fire Lily Mixture
    event.remove({id: 'iceandfire:fire_stew'})
    cookingPot('iceandfire:fire_stew',
        [
            'iceandfire:fire_lily',
            'minecraft:blaze_rod',
            'mynethersdelight:bullet_pepper'
        ],
        10, 400, 'minecraft:bowl'
    )
    // Frost Lily Mixture
    event.remove({id: 'iceandfire:frost_stew'})
    cookingPot('iceandfire:frost_stew',
        [
            'iceandfire:frost_lily',
            'minecraft:prismarine_crystals',
            'minecraft:ice'
        ],
        10, 400, 'minecraft:bowl'
    )
    // Lightning Lily Mixture
    event.remove({id: 'iceandfire:lightning_lily_mixture'})
    cookingPot('iceandfire:lightning_stew',
        [
            'iceandfire:lightning_lily',
            'minecraft:chorus_fruit',
            'ends_delight:dried_chorus_flower'
        ],
        10, 400, 'minecraft:bowl'
    )
    // Media Cube
    cookingPot('hexcasting:creative_unlocker',
        [
            'hexcasting:charged_amethyst',
            'hexcasting:charged_amethyst',
            'hexcasting:quenched_allay_shard',
            'ends_delight:non_hatchable_dragon_egg',
            'hexcasting:uuid_colorizer'
        ],
        128, 4800, 'create:chromatic_compound'
    )
})