// Change the recipes of some glyphs from Ars Nouveau
ServerEvents.recipes(event => {

    // Register recipe for a glyph
    function glyph(outputGlyph, inputItems, xpCost) {
        event.recipes.ars_nouveau.glyph(
            outputGlyph, // Must be valid glyph
            inputItems, // List of items
            xpCost
        )
    }
})