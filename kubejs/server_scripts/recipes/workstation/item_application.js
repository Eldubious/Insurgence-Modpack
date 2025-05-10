// Create recipes using Create's item application
ServerEvents.recipes(event => {

    // Creates an item application recipe
    function itemApplication(result, block, item) {
        event.custom({
            type: 'create:item_application',
            ingredients: [
                {item: block},
                {item: item}
            ],
            results: [
                {item: result}
            ]
        })
    }
    
    itemApplication('forbidden_arcanus:dark_rune_block', 'forbidden_arcanus:rune_block', 'forbidden_arcanus:corrupti_dust')
    itemApplication('forbidden_arcanus:corrupted_arcane_crystal_block', 'forbidden_arcanus:arcane_crystal_block', 'forbidden_arcanus:corrupti_dust')
})