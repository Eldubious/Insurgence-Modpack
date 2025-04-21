// Create recipes for the Enchanting Apparatus
ServerEvents.recipes(event => {

    function apparatusRecipe(inputs, catalyst, output, source, keepNbt) {
        event.recipes.ars_nouveau.enchanting_apparatus(
            inputs,
            catalyst,
            output,
            source,
            keepNbt
        )
    }

    // Fiery Cooking Pot
    event.remove({id: 'twilightdelight:fiery_cooking_pot'})
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot',
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot'
        ],
        'farmersdelight:cooking_pot',
        'twilightdelight:fiery_cooking_pot',
        0,
        false
    )
    // Extinction Spear
    event.remove({id: 'alexscaves:extinction_spear'})
    apparatusRecipe(
        [
            'alexscaves:tectonic_shard', 'alexscaves:tectonic_shard', 'alexscaves:tectonic_shard',
            'alexscaves:amber_curiosity', 'alexscaves:amber_curiosity', 'alexscaves:heavy_bone'
        ],
        'alexscaves:limestone_spear',
        'alexscaves:extinction_spear',
        0,
        false
    )
    // Blaze Burner
    apparatusRecipe(
        [
            'minecraft:blaze_rod', 'minecraft:blaze_rod'
        ],
        'create:empty_blaze_burner',
        'create:blaze_burner',
        0,
        false
    )
    // Flask of Poseidon
    event.remove({id: 'experienceobelisk:flask_poseidon'})
    apparatusRecipe(
        [
            'experienceobelisk:primordial_assembly', 'minecraft:kelp', 'minecraft:kelp',
            'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass'
        ],
        'minecraft:water_bucket',
        'experienceobelisk:flask_of_poseidon',
        0,
        false
    )
    // Flask of Hades
    event.remove({id: 'experienceobelisk:flask_hades'})
    apparatusRecipe(
        [
            'experienceobelisk:primordial_assembly', 'minecraft:nether_brick', 'minecraft:nether_brick',
            'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass'
        ],
        'minecraft:lava_bucket',
        'experienceobelisk:flask_of_hades',
        0,
        false
    )
    // Flask of Chaos
    event.remove({id: 'experienceobelisk:flask_chaos'})
    apparatusRecipe(
        [
            'experienceobelisk:primordial_assembly', 'minecraft:obsidian', 'minecraft:obsidian',
            'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass'
        ],
        'minecraft:bucket',
        'experienceobelisk:flask_of_chaos',
        0,
        false
    )
    // Tarantula Hawk Elytra
    event.remove({id: 'alexsmobs:tarantula_hawk_elytra'})
    event.recipes.create.deploying('alexsmobs:tarantula_hawk_elytra', ['minecraft:elytra', 'alexsmobs:tarantula_hawk_wing'])  // Make similar to Moth Elytra
    apparatusRecipe(
        [
            'alexsmobs:tarantula_hawk_wing', 'alexsmobs:tarantula_hawk_wing'
        ],
        'minecraft:elytra',
        'alexsmobs:tarantula_hawk_elytra',
        0,
        true
    )
    // Rosy Maple Elytra
    apparatusRecipe(
        [
            'estrogen:moth_fuzz', 'estrogen:moth_fuzz'
        ],
        'minecraft:elytra',
        'estrogen:moth_elytra',
        0,
        true
    )
})