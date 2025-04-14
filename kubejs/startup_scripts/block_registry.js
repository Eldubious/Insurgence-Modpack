// Register all custom blocks on game startup
StartupEvents.registry('block', event => {

    // Portal Blocks
    // The Depths
    event.create('depths_portal')
        .translationKey('block.kubejs.depths_portal')
        .resistance(1200)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);

    // Dragonrealm
    event.create('dragon_portal')
        .translationKey('block.kubejs.dragon_portal')
        .resistance(1200)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);

    // The Inbetween
    event.create('inbetween_portal')
        .translationKey('block.kubejs.inbetween_portal')
        .resistance(1200)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true);
})