// Create and modify Stonecutter recipes
ServerEvents.recipes(event => {

    // Flint Block
    event.remove({ id: 'architects_palette:flint_block'})
    event.stonecutting('architects_palette:flint_block', 'supplementaries:flint_block')
    event.stonecutting('architects_palette:flint_pillar', 'supplementaries:flint_block')
    event.stonecutting('architects_palette:flint_tiles', 'supplementaries:flint_block')

    // Cable Anchor
    event.remove({id: 'ae2:network/parts/cable_anchor'})
    event.stonecutting('8x ae2:cable_anchor', 'minecraft:iron_ingot')
    event.stonecutting('8x ae2:cable_anchor', 'galosphere:silver_ingot')
    event.stonecutting('8x ae2:cable_anchor', 'create:andesite_alloy')
    event.stonecutting('8x ae2:cable_anchor', 'create:zinc_ingot')
    event.stonecutting('8x ae2:cable_anchor', 'twilightforest:ironwood_ingot')

    // Quartz Fiber
    event.remove({id: 'ae2:network/parts/quartz_fiber_part'})
    event.stonecutting('6x ae2:quartz_fiber', 'minecraft:quartz')
    event.stonecutting('6x ae2:quartz_fiber', 'ae2:certus_quartz_crystal')
    event.stonecutting('6x ae2:quartz_fiber', 'ae2:charged_certus_quartz_crystal')
})