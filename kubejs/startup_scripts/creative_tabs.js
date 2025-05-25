// Modify Creative Mode tabs

// Add Chromatic Compound, Refined Radiance, and Shadow Steel to Create's creative mode tab
StartupEvents.modifyCreativeTab('create:base', event => {
    event.addAfter('create:brass_ingot', 'create:shadow_steel')
    event.addAfter('create:brass_ingot', 'create:refined_radiance')
    event.addAfter('create:brass_ingot', 'create:chromatic_compound')
    event.addAfter('create:copper_casing', 'create:shadow_steel_casing')
    event.addAfter('create:copper_casing', 'create:refined_radiance_casing')
})

// Add the damaged forms of the Key Inscribing Station
StartupEvents.modifyCreativeTab("dimdungeons:creative_tab", event => {
    event.add(['dimdungeons:block_key_charger_used', 'dimdungeons:block_key_charger_damaged'])
})

// Add the Bundle
StartupEvents.modifyCreativeTab("minecraft:tools_and_utilities", event => {
    event.add('minecraft:bundle')
})