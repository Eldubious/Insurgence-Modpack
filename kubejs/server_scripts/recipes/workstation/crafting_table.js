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
            A: '#mynethersdelight:hot_spice',
            B: '#kubejs:lava_ingredient',
            C: 'architects_palette:oracle_jelly',
            D: 'create:chromatic_compound',
            E: 'create:blaze_cake_base'
        }
    )
    // Blaze Cake
    event.shaped('create:blaze_cake',
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            A: '#mynethersdelight:hot_spice',
            B: '#kubejs:lava_ingredient',
            C: '#forge:eggs',
            D: 'create:cinder_flour',
            E: 'create:blaze_cake_base'
        }
    )
    // Add pink salt to cooking recipes
    event.remove([{id: 'farmersdelight:steak_and_potatoes'}, {id: 'miners_delight:vegan_steak_and_potatoes'}])
    event.shapeless('farmersdelight:steak_and_potatoes',
        [
            'minecraft:baked_potato', 'minecraft:cooked_beef', 'galosphere:pink_salt_shard', 'farmersdelight:onion', 'farmersdelight:cooked_rice',
            'minecraft:bowl'
        ]
    )
    event.shapeless('miners_delight:vegan_steak_and_potatoes',
        [
            'minecraft:baked_potato', '#miners_delight:baked_cave_carrot', 'galosphere:pink_salt_shard', 'farmersdelight:onion', 'farmersdelight:cooked_rice',
            'minecraft:bowl'
        ]
    )
    // Smithing Templates
    event.replaceInput([{id: 'traveloptics:abyssal_upgrade_smithing_template'}, {id: 'traveloptics:abyssal_upgrade_smithing_template2'},
                        {id: 'traveloptics:tectonic_upgrade_smithing_template'}, {id: 'traveloptics:darkness_upgrade_smithing_template'},
                        {id: 'traveloptics:witherite_upgrade_smithing_template'}, {id: 'forbidden_arcanus:darkstone_upgrade_smithing_template'}],
        'minecraft:netherite_upgrade_smithing_template',
        'experienceobelisk:primordial_assembly'
    )
    event.replaceInput([{id: 'traveloptics:witherite_upgrade_smithing_template'}, {id: 'traveloptics:abyssal_upgrade_smithing_template'},
        {id: 'traveloptics:abyssal_upgrade_smithing_template2'}, {id: 'traveloptics:tectonic_upgrade_smithing_template'},
        {id: 'traveloptics:darkness_upgrade_smithing_template'}],
        'irons_spellbooks:arcane_ingot',
        'create:refined_radiance'
    )
    // Ignitium and Cursium Smithing Templates
    event.remove([{id: 'cataclysm:ignitium_upgrade_smithing_template'}, {id: 'cataclysm:cursium_upgrade_smithing_template'}])
    event.shaped('cataclysm:ignitium_upgrade_smithing_template',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'create:refined_radiance',
            B: 'minecraft:blaze_powder',
            C: 'experienceobelisk:primordial_assembly'
        }
    )
    event.shaped('cataclysm:cursium_upgrade_smithing_template',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'create:refined_radiance',
            C: 'cataclysm:black_steel_ingot',
            D: 'experienceobelisk:primordial_assembly'
        }
    )
    // Bundle
    event.shaped('minecraft:bundle',
        [
            'A',
            'B'
        ],
        {
            A: 'minecraft:string',
            B: '#forge:leather'
        }
    )
    // Sanctified Spell Book Improvement
    event.remove({id: 'traveloptics:sanctified_spell_slot_upgrade'})
    event.shaped('traveloptics:sanctified_spell_slot_upgrade',
        [
            'ABA',
            'CBC',
            'CBC'
        ],
        {
            A: 'call_of_yucutan:ancient_gold_ingot',
            B: 'irons_spellbooks:magic_cloth',
            C: 'create:refined_radiance'
        }
    )
    // Spectral Spell Book Improvement
    event.remove({id: 'traveloptics:spectral_spell_slot_upgrade'})
    event.shaped('traveloptics:spectral_spell_slot_upgrade',
        [
            'ABA',
            'CBC',
            'CBC'
        ],
        {
            A: 'call_of_yucutan:hematite',
            B: 'unusualend:spectral_cloth',
            C: 'create:refined_radiance'
        }
    )
    // Sushi
    event.remove({id: 'aquaculture:sushi'})
    event.shapeless('aquaculture:sushi', ['minecraft:dried_kelp', 'farmersdelight:cooked_rice', 'aquaculture:fish_fillet_raw'])
    // Verdant Spellweave Ingot
    event.shaped('traveloptics:verdant_spellweave_ingot',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'quark:moss_paste',
            B: 'cataclysm:amethyst_crab_shell',
            C: 'irons_spellbooks:arcane_ingot'
        }
    )
    // Dragon Scale conversion
    event.shapeless('forbidden_arcanus:dragon_scale', ['quark:dragon_scale', 'quark:dragon_scale', 'quark:dragon_scale'])
    event.shapeless('3x quark:dragon_scale', ['forbidden_arcanus:dragon_scale'])
    // Ancient Metal Weapon Parts
    event.remove({id: 'traveloptics:ancient_metal_weapon_parts'})
    event.shaped('traveloptics:ancient_metal_weapon_parts',
        [
            'ABA',
            'BCB',
            'DBA'
        ],
        {
            A: 'cataclysm:ancient_metal_ingot',
            B: 'create:shadow_steel',
            C: 'irons_spellbooks:weapon_parts',
            D: 'cataclysm:ancient_metal_nugget'
        }
    )
    // Netherite Smithing Template
    event.shaped('2x minecraft:netherite_upgrade_smithing_template',
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:netherite_upgrade_smithing_template',
            C: 'minecraft:netherrack'
        }
    )
    event.replaceInput({id: 'minecraft:netherite_upgrade_smithing_template'},
        'minecraft:obsidian',
        'minecraft:netherrack'
    )
    event.shaped('minecraft:netherite_upgrade_smithing_template',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:netherrack',
            B: 'minecraft:diamond',
            C: 'minecraft:netherite_scrap',
            D: 'experienceobelisk:primordial_assembly'
        }
    )
    // Runic Tablet
    event.shaped('simplyswords:runic_tablet',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'thaumon:arcane_stone',
            B: 'ars_nouveau:conjuration_essence',
            C: 'minecraft:echo_shard',
            D: 'experienceobelisk:primordial_assembly'
        }
    )
    event.shaped('2x simplyswords:runic_tablet',
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'samurai_dynasty:aquamarine',
            B: 'simplyswords:runic_tablet',
            C: 'thaumon:runic_arcane_stone'
        }
    )
    // Pouch
    event.replaceInput({id: 'toolbelt:pouch'},
        'minecraft:gold_ingot',
        'create:brass_ingot'
    )
    // Toolbelt
    event.replaceInput({id: 'toolbelt:belt'},
        'minecraft:iron_ingot',
        'samurai_dynasty:steel_ingot'
    )
    // Item & Fluid Cell Housing
    event.remove([{id: 'ae2:network/cells/fluid_cell_housing'}, {id: 'ae2:network/cells/item_cell_housing'}])
    event.shaped('ae2:item_cell_housing',
        [
           'ABA',
           'B B',
           'CDC' 
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'minecraft:redstone',
            C: 'create:iron_sheet',
            D: 'create:sturdy_sheet'
        }
    )
    event.shaped('ae2:fluid_cell_housing',
        [
           'ABA',
           'B B',
           'CDC' 
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'minecraft:redstone',
            C: 'create:copper_sheet',
            D: 'create:sturdy_sheet'
        }
    )
    // Memory Card
    event.remove({id: 'ae2:tools/network_memory_card'})
    event.shaped('ae2:memory_card',
        [
            'AB ',
            'CC '
        ],
        {
            A: 'ae2:calculation_processor',
            B: 'create:iron_sheet',
            C: 'minecraft:gold_nugget'
        }
    )
    // Wireless Booster
    event.replaceInput({id: 'ae2:network/wireless_booster'},
        'ae2:ender_dust',
        'mahoutsukai:powdered_ender'
    )
    event.replaceInput({id: 'ae2:network/wireless_booster'},
        'minecraft:iron_ingot',
        'create:iron_sheet'
    )
    // Wireless Reciever
    event.remove({id: 'ae2:network/wireless_part'})
    event.shaped('ae2:wireless_receiver',
        [
            ' A ',
            ' B ',
            'DCD'
        ],
        {
            A: 'ae2:fluix_pearl',
            B: 'ae2:quartz_fiber',
            C: 'create:iron_sheet',
            D: 'minecraft:iron_nugget'
        }
    )
    // Fluix ME Glass Cable
    event.remove({id: 'ae2:network/cables/glass_fluix'})
    event.shapeless('4x ae2:fluix_glass_cable', ['ae2:quartz_fiber', 'ae2:fluix_crystal'])
    // ME DISK Housing
    event.replaceInput({id: 'ae2things:cells/disk_housing'},
        'minecraft:amethyst_shard',
        'create:sturdy_sheet'
    ),
    event.replaceInput({id: 'ae2things:cells/disk_housing'},
        'minecraft:netherite_ingot',
        'create:shadow_steel'
    )
    // Cognitive Amalgam Duplication
    event.shaped('8x experienceobelisk:cognitive_amalgam',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:lapis_lazuli',
            B: 'experienceobelisk:cognitive_amalgam',
            C: 'galosphere:cured_membrane'
        }
    )
    // Formation & Annihilation Cores
    event.remove([{id: 'ae2:materials/formationcore'}, {id: 'ae2:materials/annihilationcore'}])
    event.shapeless('4x ae2:formation_core', ['ae2:logic_processor', 'ae2:fluix_dust', '#forge:gems/certus_quartz'])
    event.shapeless('4x ae2:annihilation_core', ['ae2:logic_processor', 'ae2:fluix_dust', 'minecraft:quartz'])
    // Infinity Range Card
    event.remove({id: 'aeinfinitybooster:infinity_card'})
    event.shaped('aeinfinitybooster:infinity_card',
        [
            'ABA',
            'BCB',
            'ADA'
        ],
        {
            A: 'ae2:singularity',
            B: 'ae2:wireless_booster',
            C: 'minecraft:echo_shard',
            D: 'minecraft:netherite_ingot'
        }
    )
    // Dimension Card
    event.remove({id: 'aeinfinitybooster:dimension_card'})
    event.shaped('aeinfinitybooster:dimension_card',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'create:shadow_steel',
            B: 'minecraft:echo_shard',
            C: 'aeinfinitybooster:infinity_card',
            D: 'forbidden_arcanus:dark_nether_star'
        }
    )
    // Meteorite Compass Alt
    event.shaped('ae2:meteorite_compass',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:quartz',
            B: 'minecraft:compass'
        }
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
    // Dragonforge Apertures
    event.replaceInput([{id: 'iceandfire:dragonforge_fire_input'}, {id: 'iceandfire:dragonforge_ice_input'}, {id: 'iceandfire:dragonforge_lightning_input'}],
        'minecraft:iron_ingot',
        'samurai_dynasty:steel_ingot'
    )
    // Dragonforge Bricks
    event.remove([{id: 'iceandfire:dragonforge_fire_brick'}, {id: 'iceandfire:dragonforge_ice_brick'}, {id: 'iceandfire:dragonforge_lightning_brick'}])
    event.shaped('6x iceandfire:dragonforge_fire_brick',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:storage_blocks/scales/dragon/fire',
            B: 'create:shadow_steel',
            C: 'minecraft:stone_bricks'
        }
    )
    event.shaped('6x iceandfire:dragonforge_ice_brick',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:storage_blocks/scales/dragon/ice',
            B: 'create:shadow_steel',
            C: 'minecraft:stone_bricks'
        }
    )
    event.shaped('6x iceandfire:dragonforge_lightning_brick',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#forge:storage_blocks/scales/dragon/lightning',
            B: 'create:shadow_steel',
            C: 'minecraft:stone_bricks'
        }
    )
    // Dragonforge Cores
    event.remove([{id: 'iceandfire:dragonforge_fire_core_disabled'}, {id: 'iceandfire:dragonforge_ice_core_disabled'}, {id: 'iceandfire:dragonforge_lightning_core_disabled'}])
    event.shaped('iceandfire:dragonforge_fire_core_disabled',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'iceandfire:dragonforge_fire_brick',
            B: 'create:refined_radiance',
            C: 'iceandfire:fire_dragon_heart'
        }
    )
    event.shaped('iceandfire:dragonforge_ice_core_disabled',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'iceandfire:dragonforge_ice_brick',
            B: 'create:refined_radiance',
            C: 'iceandfire:ice_dragon_heart'
        }
    )
    event.shaped('iceandfire:dragonforge_lightning_core_disabled',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'iceandfire:dragonforge_lightning_brick',
            B: 'create:refined_radiance',
            C: 'iceandfire:lightning_dragon_heart'
        }
    )
    // CAD Assembler & Spell Programmer
    event.replaceInput([{id: 'psi:assembler'}, {id: 'psi:programmer'}],
        'minecraft:iron_ingot',
        'forbidden_arcanus:obsidian_ingot'
    )
    // Vanilla Chest
    event.shaped('minecraft:chest',
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: '#minecraft:planks'
        }
    )
    // Supplementaries Sack
    event.remove({id: 'supplementaries:sack'})
    event.shaped('supplementaries:sack',
        [
            ' A ',
            'B B',
            ' B '
        ],
        {
            A: 'minecraft:string',
            B: 'supplementaries:flax'
        }
    )
    event.shaped('supplementaries:sack',
        [
            ' A ',
            'B B',
            ' B '
        ],
        {
            A: 'minecraft:string',
            B: 'farmersdelight:canvas'
        }
    )
    // Mechanical Generator
    event.remove({id: 'createcobblestone:crafting/mechanical_generator'})
    event.shaped('createcobblestone:mechanical_generator',
        [
            'ABA',
            'CDE',
            'FFF'
        ],
        {
            A: 'create:brass_ingot',
            B: 'minecraft:iron_pickaxe',
            C: 'minecraft:water_bucket',
            D: 'quark:diamond_heart',
            E: 'minecraft:lava_bucket',
            F: 'create:brass_casing'
        }
    )
    // Lava Bucket <-> Lava Bottle
    event.shapeless('4x alexsmobs:lava_bottle', ['minecraft:lava_bucket', '4x minecraft:glass_bottle'])
    event.shapeless('minecraft:lava_bucket', ['minecraft:bucket', '4x alexsmobs:lava_bottle'])
    // Arcane Crystal Obelisks
    event.shaped('forbidden_arcanus:arcane_crystal_obelisk',
        [
            'A ',
            'A ',
            'BC'
        ],
        {
            A: 'forbidden_arcanus:arcane_crystal_block',
            B: 'forbidden_arcanus:arcane_polished_darkstone',
            C: 'forbidden_arcanus:mundabitur_dust'
        }
    )
    event.shaped('forbidden_arcanus:corrupted_arcane_crystal_obelisk',
        [
            'A ',
            'A ',
            'BC'
        ],
        {
            A: 'forbidden_arcanus:corrupted_arcane_crystal_block',
            B: 'forbidden_arcanus:arcane_polished_darkstone',
            C: 'forbidden_arcanus:mundabitur_dust'
        }
    )
    // Energy Provider
    event.remove({id: 'createappliedkinetics:energy_provider'})
    event.shaped('createappliedkinetics:energy_provider',
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'create:shaft',
            B: 'create:brass_sheet',
            C: 'create:brass_casing',
            D: 'create:brass_ingot',
            E: 'create:precision_mechanism'
        }
    )
    // Quartz Glass
    event.replaceInput({id: 'ae2:decorative/quartz_glass'},
        'ae2:certus_quartz_dust',
        'mahoutsukai:powdered_quartz'
    )
    // Vibrant Quartz Glass
    event.remove({id: 'ae2:decorative/quartz_vibrant_glass'})
    event.shaped('4x ae2:quartz_vibrant_glass',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'minecraft:glowstone_dust'
        }
    )
    // Energy Cell
    event.replaceInput({id: 'ae2:network/blocks/energy_energy_cell'},
        'ae2:fluix_dust',
        'create:copper_sheet'
    )
    event.replaceInput({id: 'ae2:network/blocks/energy_energy_cell'},
        'ae2:quartz_glass',
        'ae2:quartz_vibrant_glass'
    )
    // Dense Energy Cell
    event.remove({id: 'ae2:network/blocks/energy_dense_energy_cell'})
    event.shaped('ae2:dense_energy_cell',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'ae2:fluix_crystal',
            B: 'create:refined_radiance',
            C: 'ae2:energy_cell'
        }
    )
    // Creative Energy Cell
    event.shaped('ae2:creative_energy_cell',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'architects_palette:unobtanium',
            B: 'create:chromatic_compound',
            C: 'ae2:dense_energy_cell'
        }
    )
    // P2P Tunnel
    event.replaceInput({id: 'ae2:network/parts/tunnels_me'},
        'minecraft:iron_ingot',
        'minecraft:iron_nugget'
    )
    event.replaceInput({id: 'ae2:network/parts/tunnels_me'},
        'ae2:fluix_crystal',
        'ae2:fluix_dust'
    )
    // Matter Condenser
    event.shaped('ae2:condenser',
        [
            'ABA',
            'BCB',
            'DBD'
        ],
        {
            A: 'ae2:smooth_sky_stone_block',
            B: 'minecraft:iron_ingot',
            C: 'ars_elemental:mark_of_mastery',
            D: 'ae2:fluix_crystal'
        }
    )
    // ME Drive
    event.remove({id: 'ae2:network/blocks/storage_drive'})
    event.shaped('ae2:drive',
        [
            ' A ',
            'ABA',
            'CDC'
        ],
        {
            A: 'create:iron_sheet',
            B: '#farmersdelight:cabinets/wooden',
            C: 'minecraft:copper_ingot',
            D: 'ae2:engineering_processor'
        }
    )
    // ME Chest
    event.remove({id: 'ae2:network/blocks/storage_chest'})
    event.shaped('ae2:chest',
        [
            ' D ',
            'ABA',
            'CAC'
        ],
        {
            A: 'create:iron_sheet',
            B: '#forge:chests/wooden',
            C: 'minecraft:copper_ingot',
            D: 'ae2:terminal'
        }
    )
    // Spatial Pylon
    event.remove({id: 'ae2:network/blocks/spatial_io_pylon'})
    event.shaped('ae2:spatial_pylon',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'forbidden_arcanus:ender_pearl_fragment',
            C: 'ae2:fluix_crystal'
        }
    )
    // Cell Workbench
    event.remove({id: 'ae2:network/blocks/cell_workbench'})
    event.shaped('ae2:cell_workbench',
        [
            ' A ',
            'BCB',
            'DBD'
        ],
        {
            A: 'ae2:calculation_processor',
            B: 'create:iron_sheet',
            C: 'minecraft:crafting_table',
            D: 'minecraft:copper_ingot'
        }
    )
    // Wireless Access Point
    event.remove({id: 'ae2:network/wireless_access_point'})
    event.shaped('ae2:wireless_access_point',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'ae2:singularity',
            B: 'ae2:wireless_receiver',
            C: 'ae2:calculation_processor'
        }
    )
    // Accelerator
    event.remove({id: 'experienceobelisk:accelerator'})
    event.shaped('6x experienceobelisk:accelerator',
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            A: 'samurai_dynasty:steel_ingot',
            B: 'minecraft:polished_deepslate',
            C: 'experienceobelisk:cognitive_crystal'
        }
    )
    // Molecular Metamorpher
    event.remove({id: 'experienceobelisk:molecular_metamorpher'})
    event.shaped('experienceobelisk:molecular_metamorpher',
        [
            'ABA',
            ' A ',
            'CDC'
        ],
        {
            A: 'create:experience_nugget',
            B: 'experienceobelisk:cognitive_amalgam',
            C: 'experienceobelisk:astute_assembly',
            D: 'galosphere:warped_anchor'
        }
    )
    // Warped Anchor
    event.remove({id: 'galosphere:warped_anchor'})
    event.shaped('galosphere:warped_anchor',
        [
            'AAA',
            'CBC'
        ],
        {
            A: 'galosphere:allurite_block',
            B: 'galosphere:silver_ingot',
            C: 'galosphere:silver_block'
        }
    )
    // Experience Fountain
    event.replaceInput({id: 'experienceobelisk:experience_fountain'},
        'experienceobelisk:cognitive_alloy',
        'minecraft:polished_deepslate'
    )
    // Dragon Egg
    event.shaped('minecraft:dragon_egg',
        [
            ' A ',
            'ABA',
            'ACA'
        ],
        {
            A: 'forbidden_arcanus:dragon_scale',
            B: 'alexscaves:immortal_embryo',
            C: 'irons_spellbooks:dragonskin'
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
            A: 'architects_palette:oracle_jelly',
            B: 'minecraft:crying_obsidian',
            C: 'minecraft:ender_eye',
        }
    )
    // Eye of Storm
    event.remove({id: 'cataclysm:storm_eye'})
    event.shaped('cataclysm:storm_eye',
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'architects_palette:cerebral_plate',
            B: 'minecraft:lightning_rod',
            C: 'minecraft:prismarine_shard',
            D: 'iceandfire:lightning_dragon_heart'
        }
    )
    // Eye of Desert
    event.remove({id: 'cataclysm:desert_eye'})
    event.shaped('cataclysm:desert_eye',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:bone',
            B: 'minecraft:chiseled_sandstone',
            C: 'minecraft:gold_ingot',
            D: 'thaumon:amber'
        }
    )
    // Eye of Mech
    event.remove({id: 'cataclysm:mech_eye'})
    event.shaped('cataclysm:mech_eye',
        [
            'ABA',
            'BCB',
            'ADA'
        ],
        {
            A: 'samurai_dynasty:steel_ingot',
            B: 'create:polished_rose_quartz',
            C: 'minecraft:ender_eye',
            D: 'minecraft:redstone_block'
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
    // Astrape
    event.remove({id: 'cataclysm:astrape'})
    event.shaped('cataclysm:astrape',
        [
            ' AB',
            ' CA',
            'C  '
        ],
        {
            A: 'cataclysm:essence_of_the_storm',
            B: 'create:refined_radiance',
            C: 'cataclysm:lacrima'
        }
    )
    // Ceraunus
    event.remove({id: 'cataclysm:ceraunus'})
    event.shaped('cataclysm:ceraunus',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'cataclysm:essence_of_the_storm',
            B: 'create:refined_radiance',
            C: 'cataclysm:lacrima'
        }
    )
    // Wither Assault Shoulder Weapon
    event.remove({id: 'cataclysm:wither_assault_shoulder_weapon'})
    event.shaped('cataclysm:wither_assault_shoulder_weapon',
        [
            'AB ',
            'BDC',
            ' CB'
        ],
        {
            A: 'supplementaries:cannon',
            B: 'cataclysm:witherite_ingot',
            C: 'minecraft:gunpowder',
            D: 'minecraft:redstone_block'
        }
    )
    // Laser Gatling
    event.remove({id: 'cataclysm:laser_gatling'})
    event.shaped('cataclysm:laser_gatling',
        [
            'AB ',
            'BCD',
            ' DD'
        ],
        {
            A: 'rubinated_nether:ruby_laser',
            B: 'samurai_dynasty:steel_ingot',
            C: 'minecraft:redstone_block',
            D: 'cataclysm:witherite_ingot'
        }
    )
    // Meat Shredder
    event.replaceInput({id: 'cataclysm:meat_shredder'},
        'minecraft:iron_block',
        'create:iron_sheet'
    )
    // Soul Render
    event.remove({id: 'cataclysm:soul_render'})
    event.shaped('cataclysm:soul_render',
        [
            'ABA',
            'AC ',
            ' C '
        ],
        {
            A: 'cataclysm:cursium_ingot',
            B: 'cataclysm:black_steel_ingot',
            C: 'create:shadow_steel'
        }
    )
    // The Annihilator
    event.remove({id: 'cataclysm:the_annihilator'})
    event.shaped('cataclysm:the_annihilator',
        [
            'A A',
            'BCB',
            ' C '
        ],
        {
            A: 'cataclysm:cursium_ingot',
            B: 'cataclysm:black_steel_nugget',
            C: 'create:shadow_steel'
        }
    )
    // Cursed Bow
    event.remove({id: 'cataclysm:cursed_bow'})
    event.shaped('cataclysm:cursed_bow',
        [
            'ABC',
            'D C',
            'ABC'
        ],
        {
            A: 'cataclysm:black_steel_nugget',
            B: 'cataclysm:cursium_ingot',
            C: 'minecraft:string',
            D: 'create:shadow_steel'
        }
    )
    // Blazing Grips
    event.remove({id: 'cataclysm:blazing_grips'})
    event.shaped('cataclysm:blazing_grips',
        [
            'AAA',
            'BCB',
            'DDD'
        ],
        {
            A: 'architects_palette:nether_brass_ingot',
            B: 'create:shadow_steel',
            C: 'cataclysm:ignitium_ingot',
            D: 'minecraft:nether_brick'
        }
    )
    // The Incinerator
    event.remove({id: 'cataclysm:the_incinerator'})
    event.shaped('cataclysm:the_incinerator',
        [
            ' AB',
            'CBA',
            'DC '
        ],
        {
            A: 'minecraft:blaze_rod',
            B: 'cataclysm:ignitium_ingot',
            C: 'create:shadow_steel',
            D: 'minecraft:netherite_sword'
        }
    )
    // Bulwark of Flame
    event.remove({id: 'cataclysm:bulwark_of_the_flame'})
    event.shaped('cataclysm:bulwark_of_the_flame',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:nether_brick',
            B: 'cataclysm:ignitium_ingot',
            C: 'create:shadow_steel',
            D: 'minecraft:shield'
        }
    )
    // Trident of the Eternal Maelstrom
    event.remove({id: 'traveloptics:trident_of_the_eternal_maelstrom'})
    event.shaped('traveloptics:trident_of_the_eternal_maelstrom',
        [
            ' AB',
            'CBA',
            'DC '
        ],
        {
            A: 'create:refined_radiance',
            B: 'traveloptics:hullbreaker_steel',
            C: 'irons_spellbooks:arcane_essence',
            D: 'irons_spellbooks:weapon_parts'
        }
    )
    // Shellbound
    event.shaped('traveloptics:tome_of_abyssal_flora',
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'cataclysm:amethyst_crab_shell',
            B: 'traveloptics:verdant_spellweave_ingot',
            C: 'irons_spellbooks:druidic_spell_book'
        }
    )
    // Scourge of the Sands
    event.shaped('traveloptics:scourge_of_the_sands',
        [
            ' AB',
            ' CA',
            'D  '
        ],
        {
            A: 'cataclysm:ancient_metal_nugget',
            B: 'traveloptics:desert_jewel_fragment',
            C: 'create:refined_radiance',
            D: 'cataclysm:ancient_metal_ingot'
        }
    )
    // Flames of Eldritch
    event.shaped('traveloptics:flames_of_eldritch',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'cataclysm:ignitium_ingot',
            B: 'create:refined_radiance',
            C: 'traveloptics:flame_tempered_handguard'
        }
    )
    // Harbinger's Wrath
    event.shaped('traveloptics:harbingers_wrath',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'cataclysm:witherite_ingot',
            B: 'create:refined_radiance',
            C: 'traveloptics:last_glow'
        }
    )
    // Abyssal Tidecaller
    event.shaped('traveloptics:abyssal_tidecaller',
        [
            'AAB',
            ' C ',
            'C  '
        ],
        {
            A: 'traveloptics:abyssal_spellweave_ingot',
            B: 'create:refined_radiance',
            C: 'traveloptics:abyssal_tentacle'
        }
    )
    // Infernal Devastator
    event.shaped('traveloptics:infernal_devastator',
        [
            ' AB',
            'ABA',
            'CA '
        ],
        {
            A: 'minecraft:netherite_scrap',
            B: 'traveloptics:pyro_spellweave_ingot',
            C: 'create:refined_radiance'
        }
    )
    // Gauntlet of Extinction
    event.shaped('traveloptics:gauntlet_of_extinction',
        [
            ' DA',
            'BCD',
            'CB '
        ],
        {
            A: 'alexscaves:ominous_catalyst',
            B: 'create:refined_radiance',
            C: 'traveloptics:tectonic_ingot',
            D: 'alexscaves:tectonic_shard'
        }
    )
    // Cursed Wraithblade
    event.shaped('traveloptics:cursed_wraithblade',
        [
            ' BA',
            'CAB',
            'DC '
        ],
        {
            A: 'cataclysm:cursium_ingot',
            B: 'traveloptics:echo_winglet',
            C: 'create:refined_radiance',
            D: 'cataclysm:black_steel_ingot'
        }
    )
    // Voidstrike Reaper
    event.shaped('traveloptics:voidstrike_reaper',
        [
            'AAB',
            ' C ',
            'C  '
        ],
        {
            A: 'traveloptics:void_spellweave_ingot',
            B: 'create:refined_radiance',
            C: 'minecraft:netherite_ingot'
        }
    )
    // Guide to Watery Whispers
    event.shaped('traveloptics:guide_to_watery_whispers',
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'irons_spellbooks:magic_cloth',
            B: 'minecraft:prismarine_crystals',
            C: 'oceanic_delight:ancient_fish_eggs',
            D: 'minecraft:book',
            E: 'minecraft:heart_of_the_sea'
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
    // Wand of the Final Light
    event.remove({id: 'traveloptics:wand_of_final_light'})
    event.shaped('traveloptics:wand_of_final_light',
        [
            ' AB',
            ' CD',
            'ED '
        ],
        {
            A: 'traveloptics:withered_excrucis',
            B: 'traveloptics:pocket_black_hole',
            C: 'minecraft:crying_obsidian',
            D: 'create:refined_radiance',
            E: 'traveloptics:ancient_metal_weapon_parts'
        }
    )
    // Eye of Nothingness
    event.remove({id: 'traveloptics:eye_of_nothingness'})
    event.shaped('traveloptics:eye_of_nothingness',
        [
            'ABA',
            'CDC',
            'ECE'
        ],
        {
            A: 'forbidden_arcanus:dark_matter',
            B: 'irons_spellbooks:ancient_knowledge_fragment',
            C: 'create:shadow_steel',
            D: 'minecraft:ender_eye',
            E: 'forbidden_arcanus:dark_rune'
        }
    )
    // Ribboncleaver
    event.shaped('simplyswords:ribboncleaver',
        [
            ' AB',
            'ABA',
            'CA '
        ],
        {
            A: 'ars_nouveau:magebloom_fiber',
            B: 'create:refined_radiance',
            C: 'traveloptics:ancient_metal_weapon_parts'
        }
    )
    // Hiveheart
    event.shaped('simplyswords:hiveheart',
        [
            ' AB',
            ' CA',
            'D  '
        ],
        {
            A: 'create:refined_radiance',
            B: 'minecraft:bee_nest',
            C: 'traveloptics:verdant_spellweave_ingot',
            D: 'minecraft:stick'
        }
    )
    // Wickpiercer
    event.shaped('simplyswords:wickpiercer',
        [
            ' AB',
            ' DA',
            'D  '
        ],
        {
            A: 'the_bumblezone:potion_candle',
            B: 'create:refined_radiance',
            D: 'cataclysm:ignitium_ingot'
        }
    )
    // Waxweaver
    event.shaped('simplyswords:waxweaver',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'create:refined_radiance',
            B: 'the_bumblezone:potion_candle',
            C: 'cataclysm:ignitium_ingot'
        }
    )
    // Soulpyre
    event.shaped('simplyswords:soulpyre',
        [
            ' AB',
            ' CD',
            'E  '
        ],
        {
            A: 'cataclysm:ignitium_ingot',
            B: 'create:refined_radiance',
            C: 'traveloptics:flame_tempered_handguard',
            D: 'cataclysm:cursium_ingot',
            E: 'minecraft:stick'
        }
    )
    // Hearthflame
    event.shaped('simplyswords:hearthflame',
        [
            ' AB',
            ' CA',
            'D  '
        ],
        {
            A: 'create:refined_radiance',
            B: 'traveloptics:pyro_spellweave_ingot',
            C: 'cataclysm:lava_power_cell',
            D: 'minecraft:stick'
        }
    )
    // Soulkeeper
    event.shaped('simplyswords:soulkeeper',
        [
            ' AB',
            ' CA',
            'D  '
        ],
        {
            A: 'create:refined_radiance',
            B: 'cataclysm:cursium_ingot',
            C: 'aether_redux:sentry_chip',
            D: 'aether:skyroot_stick'
        }
    )
    // Icewhisper
    event.shaped('simplyswords:icewhisper',
        [
            ' AB',
            ' C ',
            'D  '
        ],
        {
            A: 'irons_spellbooks:permafrost_shard',
            B: 'create:refined_radiance',
            C: 'minecraft:stick',
            D: 'cataclysm:black_steel_ingot'
        }
    )
    // Arcanethyst
    event.shaped('simplyswords:arcanethyst',
        [
            ' AB',
            ' C ',
            'D  '
        ],
        {
            A: 'traveloptics:void_spellweave_ingot',
            B: 'create:refined_radiance',
            C: 'minecraft:stick',
            D: 'hexcasting:charged_amethyst'
        }
    )
    // Thunderbrand
    event.shaped('simplyswords:thunderbrand',
        [
            ' AB',
            ' C ',
            'D  '
        ],
        {
            A: 'cataclysm:essence_of_the_storm',
            B: 'create:refined_radiance',
            C: 'minecraft:stick',
            D: 'cataclysm:lacrima'
        }
    )
    // Slumbering Lichblade
    event.shaped('simplyswords:slumbering_lichblade',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'iceandfire:ghost_ingot',
            B: 'create:shadow_steel',
            C: 'iceandfire:dread_shard'
        }
    )
    // Star's Edge
    event.shaped('simplyswords:stars_edge',
        [
            ' AB',
            ' C ',
            'BA '
        ],
        {
            A: 'cataclysm:lacrima',
            B: 'traveloptics:abyssal_tentacle',
            C: 'create:shadow_steel'
        }
    )
    // Dormant Relic
    event.shaped('simplyswords:dormant_relic',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'call_of_yucutan:ancient_gold_ingot',
            B: 'call_of_yucutan:hematite',
            C: 'irons_spellbooks:weapon_parts'
        }
    )
    // Bramblethorn
    event.shaped('simplyswords:bramblethorn',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'twilightforest:ironwood_ingot',
            B: 'traveloptics:verdant_spellweave_ingot',
            C: 'irons_spellbooks:weapon_parts'
        }
    )
    // Twisted Blade
    event.shaped('simplyswords:twisted_blade',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'samurai_dynasty:steel_ingot',
            B: 'create:shadow_steel',
            C: 'minecraft:stick'
        }
    )
    // Magiscythe
    event.shaped('simplyswords:magiscythe',
        [
            'AAB',
            'AC ',
            'D  '
        ],
        {
            A: 'forbidden_arcanus:deorum_ingot',
            B: 'irons_spellbooks:evocation_upgrade_orb',
            C: 'minecraft:diamond',
            D: 'forbidden_arcanus:draco_arcanus_staff'
        }
    )
    // Magispear
    event.shaped('simplyswords:magispear',
        [
            ' AB',
            ' CA',
            'D  '
        ],
        {
            A: 'forbidden_arcanus:deorum_ingot',
            B: 'irons_spellbooks:evocation_upgrade_orb',
            C: 'minecraft:diamond',
            D: 'forbidden_arcanus:draco_arcanus_staff'
        }
    )
    // Magiblade
    event.shaped('simplyswords:magiblade',
        [
            ' AB',
            'ACA',
            'DA '
        ],
        {
            A: 'forbidden_arcanus:deorum_ingot',
            B: 'irons_spellbooks:evocation_upgrade_orb',
            D: 'minecraft:diamond',
            C: 'forbidden_arcanus:draco_arcanus_staff'
        }
    )
    // Livyatan
    event.shaped('simplyswords:livyatan',
        [
            'AB ',
            'AC ',
            ' C '
        ],
        {
            A: 'cataclysm:black_steel_ingot',
            B: 'irons_spellbooks:ice_rune',
            C: 'create:shadow_steel'
        }
    )
    // Frostfall
    event.shaped('simplyswords:frostfall',
        [
            'ABA',
            'ACA',
            ' C '
        ],
        {
            A: 'cataclysm:black_steel_ingot',
            B: 'irons_spellbooks:ice_rune',
            C: 'create:shadow_steel'
        }
    )
    // Shadowsting
    event.shaped('simplyswords:shadowsting',
        [
            '  A',
            'BA ',
            'CB '
        ],
        {
            A: 'traveloptics:hullbreaker_steel',
            B: 'cataclysm:ancient_metal_nugget',
            C: 'irons_spellbooks:weapon_parts'
        }
    )
    // Matter Cannon
    event.shaped('ae2:matter_cannon',
        [
            'ABB',
            'CD '
        ],
        {
            A: 'ae2:smooth_sky_stone_block',
            B: 'ae2:silicon',
            C: 'ae2:energy_cell',
            D: 'ae2:charged_certus_quartz_crystal'
        }
    )
    // Color Applicator
    event.shaped('ae2:color_applicator',
        [
            '  A',
            'BC ',
            'D A'
        ],
        {
            A: 'ae2:silicon',
            B: 'ae2:smooth_sky_stone_block',
            C: 'ae2:charged_certus_quartz_crystal',
            D: 'ae2:energy_cell'
        }
    )
    // Wings
    event.remove([{id: 'icarus:feathered_wings'}, {id: 'icarus:mechanical_feathered_wings'}, {id: 'icarus:dragon_wings'},
        {id: 'icarus:mechanical_leather_wings'}, {id: 'icarus:light_wings'}, {id: 'icarus:flandres_wings'},
        {id: 'icarus:discords_wings'}, {id: 'icarus:zanzas_wings'}
    ])
    let dye_colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow',
        'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink']
    dye_colors.forEach(color => {
        // Feathered Wings
        event.shaped(`icarus:${color}_feathered_wings`,
            [
                'ABA',
                'CDC',
                'C C'
            ],
            {
                A: 'galosphere:cured_membrane',
                B: `minecraft:${color}_dye`,
                C: 'forbidden_arcanus:golden_feather',
                D: '#kubejs:elytra'
            }
        )
        // Mechanical Feathered Wings
        event.shaped(`icarus:${color}_mechanical_feathered_wings`,
            [
                'ABA',
                'CDC',
                'E E'
            ],
            {
                A: 'galosphere:cured_membrane',
                B: `minecraft:${color}_dye`,
                C: 'create:brass_sheet',
                D: '#kubejs:elytra',
                E: 'forbidden_arcanus:golden_feather'
            }
        )
        // Mechanical Leather Wings
        event.shaped(`icarus:${color}_mechanical_leather_wings`,
            [
                'ABA',
                'CDC',
                'E E'
            ],
            {
                A: 'galosphere:cured_membrane',
                B: `minecraft:${color}_dye`,
                C: 'create:brass_sheet',
                D: '#kubejs:elytra',
                E: '#kubejs:tough_leather'
            }
        )
        // Dragon Wings
        event.shaped(`icarus:${color}_dragon_wings`,
            [
                'ABA',
                'CDC',
                'C C'
            ],
            {
                A: 'galosphere:cured_membrane',
                B: `minecraft:${color}_dye`,
                C: 'forbidden_arcanus:golden_dragon_scale',
                D: '#kubejs:elytra'
            }
        )
        // Light Wings
        event.shaped(`icarus:${color}_light_wings`,
            [
                'ABA',
                'CDC',
                'E E'
            ],
            {
                A: 'galosphere:cured_membrane',
                B: `minecraft:${color}_dye`,
                C: 'aether:ambrosium_shard',
                D: '#kubejs:elytra',
                E: 'minecraft:glowstone_dust'
            }
        )
    })
    // Primordial Crest Armor
    event.replaceInput([{id: 'traveloptics:primordial_crest_armor_boots'}, {id: 'traveloptics:primordial_crest_armor_leggings'},
        {id: 'traveloptics:primordial_crest_armor_chestplate'}, {id: 'traveloptics:primordial_crest_armor_helmet'}],
        'irons_spellbooks:magic_cloth',
        'create:refined_radiance'
    )
    // Deepling Mage Armor
    event.remove([{id: 'traveloptics:deepling_mage_armor_helmet'}, {id: 'traveloptics:deepling_mage_armor_leggings'},
        {id: 'traveloptics:deepling_mage_armor_robe'}, {id: 'traveloptics:deepling_mage_armor_boots'}
    ])
    event.shaped('traveloptics:deepling_mage_armor_helmet',
        [
            'AAA',
            'BCB'
        ],
        {
            A: 'minecraft:prismarine_crystals',
            B: 'create:refined_radiance',
            C: 'traveloptics:aqua_rune'
        }
    ),
    event.shaped('traveloptics:deepling_mage_armor_robe',
        [
            'DCD',
            'ABA',
            'ABA'
        ],
        {
            A: 'minecraft:prismarine_crystals',
            B: 'create:refined_radiance',
            C: 'traveloptics:aqua_rune',
            D: 'minecraft:nautilus_shell'
        }
    )
    event.shaped('traveloptics:deepling_mage_armor_leggings',
        [
            'BAB',
            'ACA',
            'A A'
        ],
        {
            A: 'minecraft:prismarine_crystals',
            B: 'create:refined_radiance',
            C: 'traveloptics:aqua_rune'
        }
    )
    event.shaped('traveloptics:deepling_mage_armor_boots',
        [
            'A A',
            'BCB'
        ],
        {
            A: 'minecraft:prismarine_crystals',
            B: 'create:refined_radiance',
            C: 'traveloptics:aqua_rune'
        }
    )
})