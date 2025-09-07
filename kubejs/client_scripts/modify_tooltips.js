// Modify item tooltips
ItemEvents.tooltip(event => {

    // Add instructional tooltips to items
    event.add('kubejs:enchant_catalyst', Component.translate('tooltip.kubejs.enchant_catalyst'))
    event.add('kubejs:hyper_enchant_catalyst', Component.translate('tooltip.kubejs.hyper_enchant_catalyst'))
    const cataclysm_eyes = ['cataclysm:mech_eye', 'cataclysm:flame_eye', 'cataclysm:void_eye', 'cataclysm:monstrous_eye', 'cataclysm:abyss_eye', 'cataclysm:desert_eye', 'cataclysm:cursed_eye', 'cataclysm:storm_eye']
    cataclysm_eyes.forEach(element => {
        let name = element.slice(element.indexOf(':') + 1)
        event.add(element, Component.translate(`tooltip.kubejs.${name}`))
        event.add(element, Component.translate('tooltip.kubejs.cataclysm_eyes'))
    })
    event.add('create:shadow_steel', Component.translate('tooltip.kubejs.shadow_steel'))
    event.add('create:refined_radiance', Component.translate('tooltip.kubejs.refined_radiance'))
    event.add('summoningrituals:indestructible_altar', Component.translate('tooltip.kubejs.indestructible_altar'))
    event.add('kubejs:withered_smithing_template', Component.translate('tooltip.kubejs.withered_smithing_template'))
    event.add('witherstormmod:command_block_book', Component.translate('tooltip.kubejs.command_block_book'))
    const strength_items = ['ars_nouveau:belt_of_levitation', 'ancient_aether:strength_stone', 'aether_redux:ring_of_construction',
    'ancient_aether:warrior_ring', 'ancient_aether:warrior_pendant', 'aether:iron_bubble', 'tarotcards:strength',
    'irons_spellbooks:concentration_amulet', 'irons_spellbooks:heavy_chain_necklace']
    strength_items.forEach(element => {
        event.add(element, Component.translate('tooltip.kubejs.increase_carrying_capacity'))
    })
    event.add('forbidden_arcanus:stella_arcanum', Component.translate('tooltip.kubejs.stellarite'))
    event.add('tarotcards:tarot_deck', Component.translate('tooltip.kubejs.tarot_deck'))
    event.add('rubinated_nether:nether_ruby_ore', Component.translate('tooltip.kubejs.nether_ruby_ore'))
    event.add('rubinated_nether:molten_ruby_ore', Component.translate('tooltip.kubejs.magma_ruby_ore'))
    event.add('samurai_dynasty:ruby_ore', Component.translate('tooltip.kubejs.depths_ruby_ore'))
    event.add('samurai_dynasty:deepslate_ruby_ore', Component.translate('tooltip.kubejs.depths_ruby_ore'))
    
    // Mark unused items
    const unused_items = ['aquaculture:fish_bones', 'miners_delight:moss', 'oceanic_delight:takoyaki', 'samurai_dynasty:ruby', 'simplyswords:decaying_relic',
        'samurai_dynasty:jade', 'samurai_dynasty:jade_ore', 'samurai_dynasty:deepslate_jade_ore', 'samurai_dynasty:raw_silver', 'samurai_dynasty:silver_ingot', 'samurai_dynasty:silver_nugget',
        'samurai_dynasty:silver_ore', 'samurai_dynasty:deepslate_silver_ore', 'samurai_dynasty:ruby_block', 'samurai_dynasty:jade_block', 'samurai_dynasty:silver_block', 'miners_delight:tentacles',
        'miners_delight:baked_tentacles', 'forbidden_arcanus:tentacle', 'forbidden_arcanus:cooked_tentacle', 'tropicraft:pineapple', 'forbidden_arcanus:bat_soup', 'architects_palette:withered_bone',
        'aetherdelight:stratus_knife', 'aetherdelight:raw_aerfillet', 'aetherdelight:cooked_aerfillet', 'aetherdelight:quail_stew', 'aetherdelight:goldenleaf_salad', 'aetherdelight:goldenleaf_crate',
        'aetherdelight:oat_cookie', 'aetherdelight:strange_root_salad', 'aetherdelight:luxbuds_salad', 'aetherdelight:quickroot_crate', 'aetherdelight:chromaberry_crate', 'iceandfire:copper_nugget',
        'iceandfire:raw_silver', 'iceandfire:silver_ingot', 'iceandfire:silver_nugget', 'iceandfire:silver_ore', 'iceandfire:deepslate_silver_ore', 'iceandfire:raw_silver_block',
        'iceandfire:silver_block', 'forbidden_arcanus:bat_wing', 'farmersdelight:rope', 'rubinated_nether:freezer', 'forbidden_arcanus:cloth', 'sophisticatedbackpacks:compacting_upgrade',
        'sophisticatedbackpacks:advanced_compacting_upgrade', 'sophisticatedbackpacks:battery_upgrade', 'sophisticatedbackpacks:infinity_upgrade', 'sophisticatedbackpacks:survival_infinity_upgrade',
        'sophisticatedstorage:infinity_upgrade', 'sophisticatedstorage:survival_infinity_upgrade', 'sophisticatedstorage:compacting_upgrade', 'sophisticatedstorage:advanced_compacting_upgrade',
        'sophisticatedstorage:hopper_upgrade', 'sophisticatedstorage:advanced_hopper_upgrade', 'sophisticatedstorage:pump_upgrade', 'sophisticatedstorage:advanced_pump_upgrade',
        'sophisticatedstorage:xp_pump_upgrade', 'sophisticatedstorage:feeding_upgrade', 'sophisticatedstorage:advanced_feeding_upgrade', 'sophisticatedstorage:magnet_upgrade',
        'sophisticatedstorage:advanced_magnet_upgrade', 'sophisticatedstorage:auto_smelting_upgrade', 'sophisticatedstorage:auto_blasting_upgrade', 'sophisticatedstorage:auto_smoking_upgrade',
        'sophisticatedstorage:compression_upgrade', 'ae2:entropy_manipulator', 'ae2:charged_staff', 'ae2:crafting_unit', 'ae2:crafting_accelerator', 'ae2:1k_crafting_storage',
        'ae2:4k_crafting_storage', 'ae2:16k_crafting_storage', 'ae2:64k_crafting_storage', 'ae2:256k_crafting_storage', 'ae2:crafting_monitor', 'ae2:name_press', 'ae2:blank_pattern',
        'ae2:molecular_assembler', 'ae2:pattern_provider', 'ae2:cable_pattern_provider', 'ae2:ender_dust', 'ae2:formation_plane', 'ae2:annihilation_plane', 'ae2:pattern_access_terminal',
        'ae2:pattern_encoding_terminal', 'ae2:vibration_chamber', 'ae2:export_bus', 'ae2:import_bus', 'ae2:crystal_resonance_generator', 'ae2:quantum_entangled_singularity',
        'ae2:creative_item_cell', 'ae2:creative_fluid_cell', 'ae2:quantum_ring', 'ae2:quantum_link', 'ae2:inscriber'
    ]
    unused_items.forEach(element => {
        event.add(element, Component.translate('tooltip.kubejs.unused_item'))
        event.add(element, Component.translate('tooltip.kubejs.unused_item_2'))
    })

    
})