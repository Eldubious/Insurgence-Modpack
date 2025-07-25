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
    
    // Mark unused items
    const unused_items = ['aquaculture:fish_bones', 'miners_delight:moss', 'oceanic_delight:takoyaki', 'samurai_dynasty:ruby', 'samurai_dynasty:ruby_ore', 'samurai_dynasty:deepslate_ruby_ore',
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
        'sophisticatedstorage:compression_upgrade'
    ]
    unused_items.forEach(element => {
        event.add(element, Component.translate('tooltip.kubejs.unused_item'))
        event.add(element, Component.translate('tooltip.kubejs.unused_item_2'))
    })

    
})