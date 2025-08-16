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
    // Adding Pink Salt to recipes
    // Sausage and Potatoes
    event.remove({id: 'mynethersdelight:cooking/sausage_and_potatoes'})
    cookingPot('mynethersdelight:sausage_and_potatoes',
        [
            'minecraft:potato',
            'mynethersdelight:hoglin_sausage',
            'mynethersdelight:hoglin_sausage',
            'galosphere:pink_salt_shard'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Roasted Tambaqui
    event.remove({id: 'aquaculturedelight:cooking/roasted_tambaqui'})
    cookingPot('aquaculturedelight:roasted_tambaqui',
        [
            'aquaculture:tambaqui',
            'farmersdelight:onion',
            'minecraft:potato',
            'galosphere:pink_salt_shard'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Trout Steak
    event.remove({id: 'aquaculturedelight:cooking/trout_steak'})
    cookingPot('aquaculturedelight:trout_steak',
        [
            '#forge:raw_fishes/trout',
            'farmersdelight:tomato',
            'minecraft:glow_berries',
            'galosphere:pink_salt_shard'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Twisted Ghasta
    event.remove({id: 'mynethersdelight:cooking/twisted_ghasta'})
    cookingPot('mynethersdelight:twisted_ghasta',
        [
            'mynethersdelight:ghasta',
            'galosphere:pink_salt_shard',
            'minecraft:twisting_vines',
            'minecraft:warped_fungus'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Tuna Spaghetti
    event.remove({id: 'aquaculturedelight:cooking/tuna_spaghetti'})
    cookingPot('aquaculturedelight:tuna_spaghetti',
        [
            'aquaculture:tuna',
            '#forge:pasta',
            'galosphere:pink_salt_shard',
            'farmersdelight:tomato_sauce',
            '#forge:mushrooms'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Glow Ink Pasta
    event.remove({id: 'miners_delight:cooking/glow_ink_pasta'})
    cookingPot('miners_delight:glow_ink_pasta',
        [
            '#forge:raw_fishes',
            '#forge:pasta',
            'galosphere:pink_salt_shard',
            'minecraft:glow_berries',
            'minecraft:glow_ink_sac'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Squid Ink Pasta
    event.remove({id: 'farmersdelight:cooking/squid_ink_pasta'})
    cookingPot('farmersdelight:squid_ink_pasta',
        [
            '#forge:raw_fishes',
            '#forge:pasta',
            'galosphere:pink_salt_shard',
            'farmersdelight:tomato',
            'minecraft:ink_sac'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Pasta with Veggieballs
    event.remove({id: 'miners_delight:cooking/pasta_with_veggieballs'})
    cookingPot('miners_delight:pasta_with_veggieballs',
        [
            '#miners_delight:baked_cave_carrot',
            '#forge:pasta',
            'farmersdelight:tomato_sauce',
            'galosphere:pink_salt_shard'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Pasta with Mutton Chop
    event.remove({id: 'farmersdelight:cooking/pasta_with_mutton_chop'})
    cookingPot('farmersdelight:pasta_with_mutton_chop',
        [
            '#forge:raw_mutton',
            '#forge:pasta',
            'farmersdelight:tomato_sauce',
            'galosphere:pink_salt_shard'
        ],
        1, 200, 'minecraft:bowl'
    )
    // Pasta with Meatballs
    event.remove({id: 'farmersdelight:cooking/pasta_with_meatballs'})
    cookingPot('farmersdelight:pasta_with_meatballs',
        [
            'farmersdelight:minced_beef',
            '#forge:pasta',
            'farmersdelight:tomato_sauce',
            'galosphere:pink_salt_shard'
        ],
        1, 200, 'minecraft:bowl'
    )
})