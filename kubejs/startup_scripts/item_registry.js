// Register all custom items on game startup
StartupEvents.registry('item', event => {

    // Enchanting Catalyst
    event.create('enchant_catalyst')
        .maxStackSize(16)
        .translationKey('item.kubejs.enchant_catalyst')
        .glow(true)

    // Hyper Enchanting Catalyst
    event.create('hyper_enchant_catalyst')
        .maxStackSize(16)
        .translationKey('item.kubejs.hyper_enchant_catalyst')
        .glow(true)

    // Obfuscated
    event.create('obfuscated')
        .unstackable()
        .translationKey('item.kubejs.obfuscated')

    // Withered Smithing Template
    event.create('withered_smithing_template')
        .translationKey('item.kubejs.withered_smithing_template')
})