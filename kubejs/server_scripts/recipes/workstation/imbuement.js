// Create and modify recipes for the Imbuement Chamber
ServerEvents.recipes(event => {

    // Register a recipe
    function imbuement(output, catalyst, pedestalItems, source) {
        event.recipes.ars_nouveau.imbuement(
            catalyst, output, source, pedestalItems
        )
    }

    // Cognitive Flux
    event.remove({id: 'experienceobelisk:cognitive_flux'})
    imbuement('experienceobelisk:cognitive_flux', 'mahoutsukai:powdered_diamond',
        [
            'minecraft:soul_sand',
            'minecraft:lapis_lazuli',
            'minecraft:quartz'
        ],
        2000
    )
    // Corrupt Soul
    imbuement('forbidden_arcanus:corrupt_soul', 'forbidden_arcanus:soul',
        [
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:dark_matter',
            'rubinated_nether:bleeding_obsidian'
        ],
        2000
    )
    // Enchanted Soul
    imbuement('forbidden_arcanus:enchanted_soul', 'forbidden_arcanus:soul',
        [
            'forbidden_arcanus:xpetrified_orb',
            'minecraft:experience_bottle',
            'forbidden_arcanus:deorum_ingot'
        ],
        4000
    )

})