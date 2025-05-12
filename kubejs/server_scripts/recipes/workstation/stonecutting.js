// Create and modify Stonecutter recipes
ServerEvents.recipes(event => {

    // Flint Block
    event.remove({ id: 'architects_palette:flint_block'})
    event.stonecutting('architects_palette:flint_block', 'supplementaries:flint_block')
    event.stonecutting('architects_palette:flint_pillar', 'supplementaries:flint_block')
    event.stonecutting('architects_palette:flint_tiles', 'supplementaries:flint_block')
})