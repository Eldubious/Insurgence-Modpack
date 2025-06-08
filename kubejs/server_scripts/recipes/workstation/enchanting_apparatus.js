// Create and modify recipes for the Enchanting Apparatus
ServerEvents.recipes(event => {

    // Register a recipe
    function apparatusRecipe(inputs, catalyst, output, source, keepNbt) {
        event.recipes.ars_nouveau.enchanting_apparatus(
            inputs, catalyst, output, source, keepNbt
        )
    }

    // Fiery Cooking Pot
    event.remove({id: 'twilightdelight:fiery_cooking_pot'})
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot',
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot'
        ],
        'farmersdelight:cooking_pot', 'twilightdelight:fiery_cooking_pot', 0, false
    )
    // Extinction Spear
    event.remove({id: 'alexscaves:extinction_spear'})
    apparatusRecipe(
        [
            'alexscaves:tectonic_shard', 'alexscaves:tectonic_shard', 'alexscaves:tectonic_shard',
            'alexscaves:amber_curiosity', 'alexscaves:amber_curiosity', 'alexscaves:heavy_bone'
        ],
        'alexscaves:limestone_spear', 'alexscaves:extinction_spear', 0, false
    )
    // Blaze Burner
    apparatusRecipe(
        [
            'minecraft:blaze_rod', 'minecraft:blaze_rod'
        ],
        'create:empty_blaze_burner', 'create:blaze_burner', 0, false
    )
    // Flask of Poseidon
    event.remove({id: 'experienceobelisk:flask_poseidon'})
    apparatusRecipe(
        [
            'experienceobelisk:primordial_assembly', 'minecraft:kelp', 'minecraft:kelp',
            'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass'
        ],
        'minecraft:water_bucket', 'experienceobelisk:flask_of_poseidon', 0, false
    )
    // Flask of Hades
    event.remove({id: 'experienceobelisk:flask_hades'})
    apparatusRecipe(
        [
            'experienceobelisk:primordial_assembly', 'minecraft:nether_brick', 'minecraft:nether_brick',
            'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass'
        ],
        'minecraft:lava_bucket', 'experienceobelisk:flask_of_hades', 0, false
    )
    // Flask of Chaos
    event.remove({id: 'experienceobelisk:flask_chaos'})
    apparatusRecipe(
        [
            'experienceobelisk:primordial_assembly', 'minecraft:obsidian', 'minecraft:obsidian',
            'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass', 'experienceobelisk:whisperglass'
        ],
        'minecraft:bucket', 'experienceobelisk:flask_of_chaos', 0, false
    )
    // Tarantula Hawk Elytra
    event.remove({id: 'alexsmobs:tarantula_hawk_elytra'})
    event.recipes.create.deploying('alexsmobs:tarantula_hawk_elytra', ['minecraft:elytra', 'alexsmobs:tarantula_hawk_wing'])  // Make similar to Moth Elytra
    apparatusRecipe(
        [
            'alexsmobs:tarantula_hawk_wing', 'alexsmobs:tarantula_hawk_wing'
        ],
        'minecraft:elytra', 'alexsmobs:tarantula_hawk_elytra', 0, true
    )
    // Rosy Maple Elytra
    apparatusRecipe(
        [
            'estrogen:moth_fuzz', 'estrogen:moth_fuzz'
        ],
        'minecraft:elytra', 'estrogen:moth_elytra', 0, true
    )
    // Portal Keyhole
    event.remove({id: 'dimdungeons:recipe_block_portal_keyhole'})
    apparatusRecipe(
        [
            'supplementaries:lock_block',
            'minecraft:ender_eye',
            'minecraft:ender_eye'
        ],
        'dimdungeons:block_gilded_portal', 'dimdungeons:block_portal_keyhole', 0, false
    )
    // Fiery Equipment
    event.remove([{id: 'twilightforest:equipment/fiery_fiery_helmet'}, {id: 'twilightforest:equipment/fiery_helmet'}])
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot',
            'twilightforest:fiery_ingot'
        ], 
        'minecraft:iron_helmet', 'twilightforest:fiery_helmet', 2000, true
    )
    event.remove([{id: 'twilightforest:equipment/fiery_fiery_chestplate'}, {id: 'twilightforest:equipment/fiery_chestplate'}])
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot',
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot'
        ], 
        'minecraft:iron_chestplate', 'twilightforest:fiery_chestplate', 2000, true
    )
    event.remove([{id: 'twilightforest:equipment/fiery_fiery_leggings'}, {id: 'twilightforest:equipment/fiery_leggings'}])
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot',
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot'
        ], 
        'minecraft:iron_leggings', 'twilightforest:fiery_leggings', 2000, true
    )
    event.remove([{id: 'twilightforest:equipment/fiery_fiery_boots'}, {id: 'twilightforest:equipment/fiery_boots'}])
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot'
        ],
        'minecraft:iron_boots', 'twilightforest:fiery_boots', 2000, true
    )
    event.remove([{id: 'twilightforest:equipment/fiery_sword'}, {id: 'twilightforest:equipment/fiery_iron_sword'}])
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'minecraft:blaze_rod'
        ],
        'minecraft:iron_sword', 'twilightforest:fiery_sword', 2000, true
    )
    event.remove([{id: 'twilightforest:equipment/fiery_pickaxe'}, {id: 'twilightforest:equipment/fiery_iron_pickaxe'}])
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot', 'twilightforest:fiery_ingot',
            'minecraft:blaze_rod', 'minecraft:blaze_rod'
        ],
        'minecraft:iron_pickaxe', 'twilightforest:fiery_pickaxe', 2000, true
    )
    event.remove([{id: 'twilightdelight:fiery_knife'}, {id: 'twilightdelight:fiery_knifealt'}])
    apparatusRecipe(
        [
            'twilightforest:fiery_ingot', 'minecraft:blaze_rod'
        ],
        'farmersdelight:iron_knife', 'twilightdelight:fiery_knife', 2000, true
    )
    // Teardrop Sword
    apparatusRecipe(
        [
            'twilightforest:fiery_tears', 'twilightforest:fiery_tears', 'twilightforest:fiery_tears', 'twilightforest:fiery_tears'
        ],
        'twilightforest:fiery_sword', 'twilightdelight:teardrop_sword', 2000, true
    )
    // Infinity Wand
    event.remove({id: 'constructionwand:infinity_wand'})
    apparatusRecipe(
        [
            '#forge:nether_stars', 'minecraft:purple_dye', 'minecraft:purple_dye'
        ],
        'constructionwand:diamond_wand', 'constructionwand:infinity_wand', 2500, true
    )
    // Creative Source Jar
    apparatusRecipe(
        [
            'create:chromatic_compound', 'create:chromatic_compound', 'create:chromatic_compound', 'create:chromatic_compound',
            'ars_nouveau:source_gem_block', 'ars_nouveau:source_gem_block', 'ars_elemental:mark_of_mastery', 'ars_elemental:mark_of_mastery'
        ],
        'ars_nouveau:source_jar', 'ars_nouveau:creative_source_jar', 10000, false
    )
    // Elementarium
    apparatusRecipe(
        [
            'ars_nouveau:earth_essence', 'ars_nouveau:air_essence', 'ars_nouveau:fire_essence',
            'ars_nouveau:water_essence', 'ars_nouveau:manipulation_essence'
        ],
        'minecraft:iron_ingot', 'forbidden_arcanus:elementarium', 500, false
    )
})