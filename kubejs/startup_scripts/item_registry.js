// Register all custom items on game startup
StartupEvents.registry('item', event => {

    // Enchanting Catalyst
    event.create('enchant_catalyst')
        .maxStackSize(16)
        .translationKey('item.kubejs.enchant_catalyst')
        .tooltip('§6§oUsed in the Enchanting Apparatus to enchant items.')
        .glow(true)

    // Dimensional Gems
    const gems = ['dimension_gem_common', 'dimension_gem_uncommon', 'dimension_gem_rare',
        'dimension_gem_epic', 'dimension_gem_legendary']
    gems.forEach(element => event.create(element).translationKey('item.kubejs.' + element))
})