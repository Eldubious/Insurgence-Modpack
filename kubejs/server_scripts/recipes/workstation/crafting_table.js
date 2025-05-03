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
    // Cataclysm Eyes
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


})