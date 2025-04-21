// Create and remove recipes for Architect's Pallete items
ServerEvents.recipes(event => {

    // Unobtanium
    event.remove({id: 'architects_palette:warping/unobtanium_from_netherite_ingot_warping'})
    event.recipes.summoningrituals.altar('minecraft:amethyst_block')
        .input('4x irons_spellbooks:arcane_ingot')
        .input('4x samurai_dynasty:amethyst_ingot')
        .input('4x traveloptics:void_spellweave_ingot')
        .input('4x experienceobelisk:cognitive_alloy')
        .input('4x forbidden_arcanus:obsidian_ingot')
        .input('4x unusualend:pearlescent_ingot')
        .input('4x forbidden_arcanus:stellarite_piece')
        .input('4x minecraft:netherite_ingot')
        .itemOutput('architects_palette:unobtanium_block')
        .recipeTime(100)

    // Flint Block
    event.remove({ id: 'architects_palette:flint_block'})
    event.stonecutting('architects_palette:flint_block', 'supplementaries:flint_block')
    event.stonecutting('architects_palette:flint_pillar', 'supplementaries:flint_block')
    event.stonecutting('architects_palette:flint_tiles', 'supplementaries:flint_block')

    // Cerebral Plate
    event.remove({id: 'architects_palette:cerebral_plate'})
    event.shapeless(
        Item.of('architects_palette:cerebral_plate', 4),
        ['minecraft:tuff', 'minecraft:quartz', 'experienceobelisk:forgotten_dust', 'minecraft:charcoal']
    )
})