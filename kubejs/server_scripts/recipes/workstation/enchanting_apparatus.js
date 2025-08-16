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
    // Caelestis
    apparatusRecipe(
        [
            'forbidden_arcanus:dark_nether_star', 'dreadsteel:dreadsteel_ingot', 'forbidden_arcanus:corrupted_arcane_crystal',
            'dreadsteel:dreadsteel_ingot', 'forbidden_arcanus:corrupted_arcane_crystal'
        ],
        'forbidden_arcanus:dark_matter', 'simplyswords:caelestis', 8000, false
    )
    // Enigma
    apparatusRecipe(
        [
            'create:refined_radiance', 'cataclysm:ancient_metal_ingot', 'create:refined_radiance', 'aether:golden_amber',
            'create:refined_radiance', 'cataclysm:ancient_metal_ingot', 'create:refined_radiance', 'aether:golden_amber'
        ],
        'call_of_yucutan:jade_sword', 'simplyswords:enigma', 4000, true
    )
    // Waking // Awakened Lichblade
    event.remove([{id: 'simplyswords:waking_lichblade'}, {id: 'simplyswords:awakened_lichblade'}])
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'create:refined_radiance', 'cataclysm:essence_of_the_storm', 'minecraft:skeleton_skull'
        ],
        'simplyswords:slumbering_lichblade', 'simplyswords:waking_lichblade', 3000, true
    )
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'create:refined_radiance', 'create:refined_radiance', 'traveloptics:echo_winglet'
        ],
        'simplyswords:waking_lichblade', 'simplyswords:awakened_lichblade', 4000, true
    )
    // Whisperwind
    apparatusRecipe(
        [
            'create:shadow_steel', 'create:shadow_steel', 'traveloptics:echo_winglet', 'cataclysm:black_steel_nugget', 'cataclysm:black_steel_nugget'
        ],
        'samurai_dynasty:katana_netherite', 'simplyswords:whisperwind', 4000, true
    )
    // Watching Warglaive
    apparatusRecipe(
        [
            'traveloptics:darkness_cloth', 'alexscaves:pure_darkness', 'alexscaves:pure_darkness', 'create:shadow_steel', 'create:shadow_steel'
        ],
        'simplyswords:netherite_warglaive', 'simplyswords:watching_warglaive', 4000, true
    )
    // Righteous // Tainted Relic
    event.remove([{id: 'simplyswords:righteous_relic'}, {id: 'simplyswords:tainted_relic'}])
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'irons_spellbooks:dragonskin', 'irons_spellbooks:dragonskin',
            'aether:ambrosium_shard', 'aether:ambrosium_shard'
        ],
        'simplyswords:dormant_relic', 'simplyswords:righteous_relic', 3000, true
    )
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'irons_spellbooks:dragonskin', 'irons_spellbooks:dragonskin',
            'forbidden_arcanus:dark_rune', 'forbidden_arcanus:dark_rune'
        ],
        'simplyswords:dormant_relic', 'simplyswords:tainted_relic', 3000, true
    )
    // Sunfire
    event.remove({id: 'simplyswords:sunfire'})
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'create:shadow_steel', 'create:shadow_steel',
            'minecraft:enchanted_golden_apple', 'minecraft:enchanted_golden_apple', 'irons_spellbooks:fire_upgrade_orb'
        ],
        'simplyswords:righteous_relic', 'simplyswords:sunfire', 4000, true
    )
    // Harbinger
    event.remove({id: 'simplyswords:harbinger'})
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'simplyswords:runic_tablet', 'create:shadow_steel', 'create:shadow_steel',
            'minecraft:echo_shard', 'minecraft:echo_shard', 'traveloptics:aqua_upgrade_orb'
        ],
        'simplyswords:righteous_relic', 'simplyswords:harbinger', 4000, true
    )
    // The Watcher
    apparatusRecipe(
        [
            'traveloptics:darkness_cloth', 'alexscaves:pure_darkness', 'create:shadow_steel', 'create:shadow_steel', 'create:shadow_steel'
        ],
        'simplyswords:netherite_claymore', 'simplyswords:watcher_claymore', 4000, true
    )
    // Brimstone Claymore
    apparatusRecipe(
        [
            'traveloptics:pyro_spellweave_ingot', 'ars_nouveau:fire_essence', 'ars_nouveau:fire_essence', 'minecraft:magma_block', 'minecraft:magma_block',
            'create:shadow_steel', 'create:shadow_steel'
        ],
        'simplyswords:netherite_claymore', 'simplyswords:brimstone_claymore', 4000, true
    )
    // Soulrender
    apparatusRecipe(
        [
            'apotheosis:warden_tendril', 'create:shadow_steel', 'create:shadow_steel', 'traveloptics:hullbreaker_steel', 'forbidden_arcanus:corrupt_soul'
        ],
        'simplyswords:netherite_scythe', 'simplyswords:soulrender', 4000, true
    )
    // Soulstealer
    apparatusRecipe(
        [
            'apotheosis:warden_tendril', 'create:shadow_steel', 'create:shadow_steel', 'traveloptics:hullbreaker_steel', 'forbidden_arcanus:corrupt_soul'
        ],
        'simplyswords:netherite_sai', 'simplyswords:soulstealer', 4000, true
    )
    // Flamewind
    apparatusRecipe(
        [
            'forbidden_arcanus:arcane_dragon_egg', 'dice:red_d6', 'dimdungeons:item_portal_key', 'forbidden_arcanus:silver_dragon_scale'
        ],
        'simplyswords:netherite_glaive', 'simplyswords:flamewind', 2000, true
    )
    // Tempest
    apparatusRecipe(
        [
            'ars_nouveau:fire_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:water_essence', 'ars_nouveau:water_essence', 'twilightforest:fiery_ingot',
            'cataclysm:lacrima'
        ],
        'simplyswords:netherite_chakram', 'simplyswords:tempest', 2000, true
    )
    // Emberblade
    apparatusRecipe(
        [
            'irons_spellbooks:fire_upgrade_orb', 'ars_nouveau:fire_essence', 'cataclysm:lava_power_cell', 'cataclysm:lava_power_cell'
        ],
        'simplyswords:netherite_longsword', 'simplyswords:emberblade', 2000, true
    )
    // Molten Edge
    apparatusRecipe(
        [
            'traveloptics:pyro_spellweave_ingot', 'ars_nouveau:fire_essence', 'ars_nouveau:fire_essence', 'minecraft:magma_block', 'minecraft:magma_block',
            'create:shadow_steel', 'create:shadow_steel'
        ],
        'simplyswords:netherite_greataxe', 'simplyswords:molten_edge', 4000, true
    )
    // Emberlash
    apparatusRecipe(
        [
            'irons_spellbooks:fire_upgrade_orb', 'ars_nouveau:fire_essence', 'cataclysm:lava_power_cell', 'cataclysm:lava_power_cell'
        ],
        'simplyswords:netherite_cutlass', 'simplyswords:emberlash', 2000, true
    )
    // Longsword of the Plague
    apparatusRecipe(
        [
            'irons_spellbooks:nature_upgrade_orb', 'traveloptics:verdant_spellweave_ingot', 'minecraft:spore_blossom', 'minecraft:spore_blossom'
        ],
        'simplyswords:netherite_longsword', 'simplyswords:toxic_longsword', 2000, true
    )
    // Storm's Edge
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'irons_spellbooks:energized_core', 'cataclysm:lacrima', 'cataclysm:lacrima', 'cataclysm:lacrima'
        ],
        'simplyswords:netherite_twinblade', 'simplyswords:storms_edge', 2000, true
    )
    // Storm's Edge
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'irons_spellbooks:energized_core', 'cataclysm:lacrima', 'cataclysm:lacrima', 'cataclysm:lacrima'
        ],
        'simplyswords:netherite_longsword', 'simplyswords:stormbringer', 2000, true
    )
    // Storm's Edge
    apparatusRecipe(
        [
            'simplyswords:runic_tablet', 'irons_spellbooks:energized_core', 'cataclysm:lacrima', 'cataclysm:lacrima', 'cataclysm:lacrima'
        ],
        'simplyswords:netherite_greathammer', 'simplyswords:mjolnir', 2000, true
    )
    // Bibliophage
    apparatusRecipe(
        [
            'minecraft:quartz', 'minecraft:quartz', 'minecraft:quartz', 'experienceobelisk:cognitive_amalgam', 'experienceobelisk:cognitive_amalgam',
            'mahoutsukai:powdered_eye', 'forbidden_arcanus:xpetrified_orb'
        ],
        'experienceobelisk:cognitive_crystal', 'experienceobelisk:bibliophage', 1000, true
    )
})