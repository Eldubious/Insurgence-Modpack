// Create and remove recipes for Forbidden & Arcanus items
ServerEvents.recipes(event => {

    // Convert Soulless Sand back into Soul Sand


    // Automatically extract Soul from Soul Sand
    event.recipes.create.splashing(
        [
            'forbidden_arcanus:soul',
            Item.of('forbidden_arcanus:soulless_sand').withChance(0.80)
        ],
        'minecraft:soul_sand'
    )

    // Upgrade Soul into Corrupt Soul
    event.recipes.ars_nouveau.imbuement(
        'forbidden_arcanus:soul',
        'forbidden_arcanus:corrupt_soul',
        3000,
        [
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:dark_matter',
            'rubinated_nether:bleeding_obsidian'
        ]
    )

    // Upgrade Soul into Enchanted Soul
    event.recipes.ars_nouveau.imbuement(
        'forbidden_arcanus:soul',
        'forbidden_arcanus:enchanted_soul',
        5000,
        [
            'forbidden_arcanus:xpetrified_orb',
            'minecraft:experience_bottle',
            'forbidden_arcanus:deorum_block'
        ]
    )




    // Make Enchanted Golden Apple use Forge for recipe
    event.remove({id: 'forbidden_arcanus:enchanted_golden_apple'})
})