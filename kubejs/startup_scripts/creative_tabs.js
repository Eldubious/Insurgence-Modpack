// Modify Creative Mode tabs
StartupEvents.modifyCreativeTab('create:base', event => {

    // Add Chromatic Compound, Refined Radiance, and Shadow Steel to Create's creative mode tab
    event.addAfter('create:brass_ingot', 'create:shadow_steel')
    event.addAfter('create:brass_ingot', 'create:refined_radiance')
    event.addAfter('create:brass_ingot', 'create:chromatic_compound')
    event.addAfter('create:copper_casing', 'create:shadow_steel_casing')
    event.addAfter('create:copper_casing', 'create:refined_radiance_casing')
})