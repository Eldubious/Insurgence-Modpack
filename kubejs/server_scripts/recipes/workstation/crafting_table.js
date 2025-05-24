// Create and modify recipes for the Crafting Table
ServerEvents.recipes(event => {

    /*
        Items and Materials
    */
    // Cerebral Plate
    event.remove({id: 'architects_palette:cerebral_plate'})
    event.shapeless(
        Item.of('architects_palette:cerebral_plate', 4),
        ['minecraft:tuff', 'minecraft:quartz', 'experienceobelisk:forgotten_dust', 'minecraft:charcoal']
    )
    // Astute Assembly
    event.remove({id: 'experienceobelisk:astute_assembly'})
    event.shaped(
        Item.of('experienceobelisk:astute_assembly', 2),
        [
            'ACA',
            'ABA',
            'ACA'
        ],
        {
            A: 'experienceobelisk:cognitive_alloy',
            B: 'experienceobelisk:cognitive_crystal',
            C: 'architects_palette:cerebral_plate'
        }
    )
    // Blank Runestone
    event.shaped('2x irons_spellbooks:blank_rune',
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'minecraft:stone',
            C: 'irons_spellbooks:blank_rune'
        }
    )
    event.shaped('2x irons_spellbooks:blank_rune',
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'minecraft:deepslate',
            C: 'irons_spellbooks:blank_rune'
        }
    )
    // Withered Nether Star
    event.shaped('witherstormmod:withered_nether_star',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'create:chromatic_compound',
            B: 'forbidden_arcanus:dark_nether_star_block'
        }
    )
    // Samurai Dynasty Cloth
    event.remove({id: 'samurai_dynasty:cloth'})
    event.shaped('samurai_dynasty:cloth',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:string',
            B: '#minecraft:wool'
        }
    )
    // Spell Cloth
    event.remove({id: 'mahoutsukai:spell_cloth'})
    event.shaped('4x mahoutsukai:spell_cloth', 
        [
            'AA'
        ],
        {
            A: 'irons_spellbooks:magic_cloth'
        }
    )
    // Creative Blaze Cake
    event.shaped('create:creative_blaze_cake',
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:blaze_powder',
            B: 'minecraft:lava_bucket',
            C: 'architects_palette:oracle_jelly',
            D: 'create:chromatic_compound',
            E: 'create:blaze_cake_base'
        }
    )
    // Smithing Templates
    event.replaceInput([{id: 'traveloptics:abyssal_upgrade_smithing_template'}, {id: 'traveloptics:abyssal_upgrade_smithing_template2'},
                        {id: 'traveloptics:tectonic_upgrade_smithing_template'}, {id: 'traveloptics:darkness_upgrade_smithing_template'},
                        {id: 'traveloptics:witherite_upgrade_smithing_template'}, {id: 'forbidden_arcanus:darkstone_upgrade_smithing_template'},
                        {id: 'cataclysm:ignitium_upgrade_smithing_template'}, {id: 'cataclysm:cursium_upgrade_smithing_template'}],
        'minecraft:netherite_upgrade_smithing_template',
        'experienceobelisk:primordial_assembly'
    )
    
    



    /*
        Blocks
    */
    // Lodestone
    event.replaceInput({id: 'minecraft:lodestone'},
        'minecraft:netherite_ingot',
        'minecraft:iron_ingot'
    )
    // The Depths Portal
    event.shaped(Item.of('kubejs:depths_portal'),
        [
            'ABA',
            'BCB',
            'ADA'
        ],
        {
            A: 'galosphere:silver_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:diamond_pickaxe',
            D: 'minecraft:respawn_anchor'
        }
    )
    // Dragonrealm Portal
    event.shaped(Item.of('kubejs:dragon_portal'),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A: 'aether_redux:gravitite_ingot',
            B: 'forbidden_arcanus:golden_dragon_scale',
            C: 'unusualend:pearlescent_ingot',
            D: 'iceandfire:dragon_horn',
            E: 'iceandfire:dragon_bone_block'
        }
    )
    // The Inbetween Portal
    event.shaped(Item.of('kubejs:inbetween_portal'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:amethyst_block',
            B: 'galosphere:chiseled_amethyst',
            C: 'witherstormmod:tainted_dust',
            D: 'minecraft:ender_pearl'
        }
    )
    // Aether Grass Bale
    event.remove({id: 'aetherdelight:addon_redux/aether_grass_bale'})
    event.remove({id: 'aetherdelight:addon_redux/aether_grass_from_bale'})
    event.shaped(Item.of('aetherdelight:aether_grass_bale'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: '#kubejs:aether_grass'
        }
    )
    // Experience Obelisk
    event.remove({id: 'experienceobelisk:experience_obelisk'})
    event.shaped('experienceobelisk:experience_obelisk',
        [
            ' E ',
            'ECE',
            'DDD'
        ],
        {
            E: 'create:experience_nugget',
            C: 'experienceobelisk:cognitive_crystal',
            D: 'minecraft:polished_deepslate'
        }
    )
    // Uncrafting Table
    event.remove({id: 'twilightforest:uncrafting_table'})
    event.shaped('twilightforest:uncrafting_table',
        [
            'ABA',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:skeleton_skull',
            B: 'create:chromatic_compound',
            C: 'minecraft:crafting_table',
            D: 'twilightforest:ironwood_ingot',
            E: 'twilightforest:transformation_powder'
        }
    )
    // Used Key Inscriber
    event.shaped('dimdungeons:block_key_charger_used',
        [
            'A A',
            'BCB',
            'BBB'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:stone_bricks',
            C: 'experienceobelisk:cognitive_crystal'
        }
    )
    // Key Inscriber
    event.shaped('dimdungeons:block_key_charger',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'create:shadow_steel',
            C: 'dimdungeons:block_key_charger_used'
        }
    )
    // Creative Motor
    event.shaped('create:creative_motor',
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'create:chromatic_compound',
            B: 'create:electron_tube',
            C: 'create:sturdy_sheet',
            D: 'create:gearbox',
            E: 'create:rotation_speed_controller'
        }
    )
    // Portal Crown Block
    event.shaped('dimdungeons:block_portal_crown',
        [
            'AAA',
            'ABA',
            'CDC'
        ],
        {
            A: 'forbidden_arcanus:deorum_ingot',
            B: 'illagerinvasion:hallowed_gem',
            C: 'create:shadow_steel',
            D: 'minecraft:gold_block'
        }
    )


    /*
        Tools and Equipment
    */
    // Traveler's Compass
    event.remove({id: 'travelerscompass:travelerscompass'})
    event.shaped(
        Item.of('travelerscompass:travelerscompass'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'galosphere:allurite_shard',
            B: 'ars_nouveau:dowsing_rod',
            C: 'minecraft:netherite_ingot',
            D: 'minecraft:compass',
            E: 'minecraft:lodestone'
        }
    )
    // Skyjade Knife
    event.shaped(
        'aetherdelight:skyjade_knife',
        [
            ' J',
            'S '
        ],
        {
            J: 'call_of_yucutan:jade',
            S: 'aether:skyroot_stick'
        }
    )
    // Personal Dimension Key
    event.remove({id: 'dimdungeons:recipe_item_blank_build_key'})
    event.shaped(Item.of('dimdungeons:item_blank_build_key'),
        [
            ' A ',
            'ABA',
            'CA '
        ],
        {
            A: 'forbidden_arcanus:ender_pearl_fragment',
            B: 'dimdungeons:item_homeward_pearl',
            C: 'architects_palette:entwine_rod'
        }
    )
    // Basic Dungeon Key
    event.remove({id: 'dimdungeons:recipe_item_blank_key'})
    event.shaped(Item.of('dimdungeons:item_portal_key'),
        [
            ' A',
            'B '
        ],
        {
            A: 'minecraft:name_tag',
            B: 'architects_palette:entwine_rod'
        }
    )
    // Bell of Secrets
    event.shaped(Item.of('dimdungeons:item_secret_bell'),
        [
            'ABA',
            ' C '
        ],
        {
            A: 'ars_nouveau:conjuration_essence',
            B: 'minecraft:stick',
            C: 'minecraft:bell'
        }
    )
    // Eye of Flame
    event.remove({id: 'cataclysm:flame_eye'})
    event.shaped(
        Item.of('cataclysm:flame_eye'),
        [
            'AAA',
            'BCD',
            'EEE'
        ],
        {
            A: 'minecraft:blaze_powder',
            B: 'iceandfire:fire_dragon_blood',
            C: 'minecraft:ender_eye',
            D: 'iceandfire:ice_dragon_blood',
            E: 'minecraft:soul_sand'
        }
    )
    // Eye of Curse
    event.remove({id: 'cataclysm:cursed_eye'})
    event.shaped('cataclysm:cursed_eye',
        [
            'ABA',
            'BCB',
            'DED'
        ],
        {
            A: 'iceandfire:witherbone',
            B: 'create:brass_ingot',
            C: 'minecraft:ender_eye',
            D: 'galosphere:silver_nugget',
            E: 'iceandfire:ice_dragon_heart'
        }
    )
    // Eye of Abyss
    event.remove({id: 'cataclysm:abyss_eye'})
    event.shaped('cataclysm:abyss_eye',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'forbidden_arcanus:ender_pearl_fragment',
            B: 'minecraft:crying_obsidian',
            C: 'minecraft:ender_eye',
        }
    )
    // Abyssal Sacrifice
    event.remove([{id: 'cataclysm:abyssal_sacrifice'}, {id: 'cataclysm:abyssal_sacrifice2'}])
    event.shaped('cataclysm:abyssal_sacrifice',
        [
            'ABA',
            'CDC',
            'ECE'
        ],
        {
            A: '#kubejs:abyssal_sacrifice_ingredients',
            B: 'cataclysm:athame',
            C: 'forbidden_arcanus:aquatic_dragon_scale',
            D: 'minecraft:heart_of_the_sea',
            E: '#forge:ender_pearls'
        }
    )
    // Creative Spell Book
    event.custom({
        type: 'ars_nouveau:book_upgrade',
        ingredients: [
            {item: 'ars_nouveau:archmage_spell_book'},
            {item: 'create:chromatic_compound'},
            {item: 'create:chromatic_compound'},
            {item: 'forbidden_arcanus:golden_dragon_scale'},
            {item: 'forbidden_arcanus:golden_dragon_scale'},
            {item: 'irons_spellbooks:legendary_ink'},
            {item: 'traveloptics:celestial_shard'},
            {item: 'cataclysm:abyssal_sacrifice'},
            {item: 'cataclysm:void_core'}
        ],
        result: {item: 'ars_nouveau:creative_spell_book'}
    })
    // Apprentice Spell Book
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    event.custom({
        type: 'ars_nouveau:book_upgrade',
        ingredients: [
            {item: 'ars_nouveau:novice_spell_book'},
            {item: 'minecraft:crying_obsidian'},
            {item: 'minecraft:diamond'},
            {item: 'minecraft:diamond'},
            {item: 'minecraft:diamond'},
            {item: 'irons_spellbooks:rare_ink'},
            {item: 'irons_spellbooks:lightning_bottle'},
            {item: 'minecraft:blaze_powder'},
            {item: 'minecraft:blaze_powder'}
        ],
        result: {item: 'ars_nouveau:apprentice_spell_book'}
    })
    // Archmage Spell Book
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'})
    event.custom({
        type: 'ars_nouveau:book_upgrade',
        ingredients: [
            {item: 'ars_nouveau:apprentice_spell_book'},
            {item: 'ars_nouveau:wilden_tribute'},
            {item: 'ars_elemental:mark_of_mastery'},
            {item: 'minecraft:totem_of_undying'},
            {item: 'minecraft:emerald'},
            {item: 'minecraft:emerald'},
            {item: 'create:shadow_steel'},
            {item: 'create:shadow_steel'},
            {item: 'create:shadow_steel'}
        ],
        result: {item: 'ars_nouveau:archmage_spell_book'}
    })
    // Novice Spell Book
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.shapeless(
        'ars_nouveau:novice_spell_book',
        [
            'minecraft:enchanted_book', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:purple_dye',
            'iceandfire:silver_sword', 'iceandfire:silver_pickaxe', 'iceandfire:silver_axe', 'iceandfire:silver_shovel'
        ]
    )
    // Draco Arcanus Armor
    event.replaceInput([{input: 'forbidden_arcanus:obsidian_ingot', input: 'forbidden_arcanus:dragon_scale'}, {id: 'forbidden_arcanus:draco_arcanus_staff'}, {id: 'forbidden_arcanus:draco_arcanus_scepter'}],
        'forbidden_arcanus:obsidian_ingot',
        'create:shadow_steel'
    )
    // Tyr Armor
    event.remove([{id: 'forbidden_arcanus:tyr_boots'}, {id: 'forbidden_arcanus:tyr_leggings'}, {id: 'forbidden_arcanus:tyr_chestplate'}, {id: 'forbidden_arcanus:tyr_helmet'}])
    event.shaped('forbidden_arcanus:tyr_boots',
        [
            'ABA',
            'C C'
        ],
        {
            A: 'forbidden_arcanus:aquatic_dragon_scale',
            B: 'create:refined_radiance',
            C: 'forbidden_arcanus:golden_dragon_scale'
        }
    )
    event.shaped('forbidden_arcanus:tyr_leggings',
        [
            'ACA',
            'ABA',
            'C C'
        ],
        {
            A: 'forbidden_arcanus:aquatic_dragon_scale',
            B: 'create:refined_radiance',
            C: 'forbidden_arcanus:golden_dragon_scale'
        }
    )
    event.shaped('forbidden_arcanus:tyr_chestplate',
        [
            'C C',
            'ACA',
            'ABA'
        ],
        {
            A: 'forbidden_arcanus:aquatic_dragon_scale',
            B: 'create:refined_radiance',
            C: 'forbidden_arcanus:golden_dragon_scale'
        }
    )
    event.shaped('forbidden_arcanus:tyr_helmet',
        [
            ' B ',
            'CAC',
            'A A'
        ],
        {
            A: 'forbidden_arcanus:aquatic_dragon_scale',
            B: 'create:refined_radiance',
            C: 'forbidden_arcanus:golden_dragon_scale'
        }
    )
    // Tyr Samurai Armor
    event.remove([{id: 'samurai_dynasty:tyr_samurai_boots'}, {id: 'samurai_dynasty:tyr_samurai_leggings'}, {id: 'samurai_dynasty:tyr_samurai_chestplate'}, {id: 'samurai_dynasty:tyr_samurai_helmet'}])
    event.shaped('samurai_dynasty:tyr_samurai_boots',
        [
            ' D ',
            'ABA',
            'C C'
        ],
        {
            A: 'forbidden_arcanus:aquatic_dragon_scale',
            B: 'create:refined_radiance',
            C: 'forbidden_arcanus:golden_dragon_scale',
            D: 'samurai_dynasty:aquamarine'
        }
    )
    event.shaped('samurai_dynasty:tyr_samurai_leggings',
        [
            'BDB',
            'A A',
            'C C'
        ],
        {
            A: 'forbidden_arcanus:aquatic_dragon_scale',
            B: 'create:refined_radiance',
            C: 'forbidden_arcanus:golden_dragon_scale',
            D: 'samurai_dynasty:aquamarine'
        }
    )
    event.shaped('samurai_dynasty:tyr_samurai_chestplate',
        [
            'C C',
            'BCB',
            'ADA'
        ],
        {
            A: 'forbidden_arcanus:aquatic_dragon_scale',
            B: 'create:refined_radiance',
            C: 'forbidden_arcanus:golden_dragon_scale',
            D: 'samurai_dynasty:aquamarine'
        }
    )
    event.shaped('samurai_dynasty:tyr_samurai_helmet',
        [
            'C C',
            'BDB',
            'A A'
        ],
        {
            A: 'forbidden_arcanus:aquatic_dragon_scale',
            B: 'create:refined_radiance',
            C: 'forbidden_arcanus:golden_dragon_scale',
            D: 'samurai_dynasty:aquamarine'
        }
    )
    // Formidi-Blade
    event.shaped('witherstormmod:formidi_blade',
        [
            'A B',
            'CB ',
            'DCA'
        ],
        {
            A: 'witherstormmod:tainted_dust',
            B: 'architects_palette:unobtanium',
            C: 'dreadsteel:dreadsteel_ingot',
            D: 'iceandfire:witherbone'
        }
    )
    // Eye of the Storm
    event.shaped('witherstormmod:eye_of_the_storm',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'dreadsteel:dreadsteel_ingot',
            B: 'architects_palette:unobtanium',
            C: 'iceandfire:witherbone'
        }
    )
    // Dimensional Carver
    event.replaceInput({id: 'alexsmobs:dimensional_carver'},
        'minecraft:netherite_ingot',
        'create:shadow_steel'
    )
    // Enchantment Table <-> Matrix Enchantment Table
    event.shapeless('minecraft:enchanting_table', ['quark:matrix_enchanter'])
    event.shapeless('quark:matrix_enchanter', ['minecraft:enchanting_table'])
})