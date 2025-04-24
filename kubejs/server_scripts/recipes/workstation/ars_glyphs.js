// Modify the recipes of some Ars Nouveau glyphs
ServerEvents.recipes(event => {

    // Replace a recipe
    function glyph(outputGlyph, inputItems, xpCost) {
        event.recipes.ars_nouveau.glyph(
            outputGlyph, // Must be valid glyph
            inputItems, // List of items
            xpCost
        )
    }
})