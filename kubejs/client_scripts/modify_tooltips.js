// Modify item tooltips
ItemEvents.tooltip(event => {

    // Add instructional tooltips to items
    event.add('kubejs:enchant_catalyst', Component.translate('tooltip.kubejs.enchant_catalyst'))
    event.add('kubejs:hyper_enchant_catalyst', Component.translate('tooltip.kubejs.hyper_enchant_catalyst'))
    const cataclysm_eyes = ['cataclysm:mech_eye', 'cataclysm:flame_eye', 'cataclysm:void_eye', 'cataclysm:monstrous_eye', 'cataclysm:abyss_eye', 'cataclysm:desert_eye', 'cataclysm:cursed_eye']
    cataclysm_eyes.forEach(element => {
        let name = element.slice(element.indexOf(':') + 1)
        event.add(element, Component.translate(`tooltip.kubejs.${name}`))
        event.add(element, Component.translate('tooltip.kubejs.cataclysm_eyes'))
    })

    // Mark unused items so I don't forget
    const unused_items = ['aquaculture:fish_bones', 'miners_delight:moss', 'oceanic_delight:takoyaki', 'samurai_dynasty:ruby', 'samurai_dynasty:ruby_ore', 'samurai_dynasty:deepslate_ruby_ore',
        'samurai_dynasty:jade', 'samurai_dynasty:jade_ore', 'samurai_dynasty:deepslate_jade_ore', 'samurai_dynasty:raw_silver', 'samurai_dynasty:silver_ingot', 'samurai_dynasty:silver_nugget',
        'samurai_dynasty:silver_ore', 'samurai_dynasty:deepslate_silver_ore', 'samurai_dynasty:ruby_block', 'samurai_dynasty:jade_block', 'samurai_dynasty:silver_block', 'miners_delight:tentacles',
        'miners_delight:baked_tentacles', 'forbidden_arcanus:tentacle', 'forbidden_arcanus:cooked_tentacle', 'tropicraft:pineapple', 'forbidden_arcanus:bat_soup', 'architects_palette:withered_bone',
        'aetherdelight:stratus_knife', 'aetherdelight:raw_aerfillet', 'aetherdelight:cooked_aerfillet', 'aetherdelight:quail_stew', 'aetherdelight:goldenleaf_salad', 'aetherdelight:goldenleaf_crate',
        'aetherdelight:oat_cookie', 'aetherdelight:strange_root_salad', 'aetherdelight:luxbuds_salad', 'aetherdelight:quickroot_crate', 'aetherdelight:chromaberry_crate', 'iceandfire:copper_nugget',
        'iceandfire:raw_silver', 'iceandfire:silver_ingot', 'iceandfire:silver_nugget', 'iceandfire:silver_ore', 'iceandfire:deepslate_silver_ore', 'iceandfire:raw_silver_block',
        'iceandfire:silver_block', 'forbidden_arcanus:bat_wing', 'farmersdelight:rope'
    ]
    unused_items.forEach(element => {
        event.add(element, '§4§o§lShould not be obtainable')
    })

    
})