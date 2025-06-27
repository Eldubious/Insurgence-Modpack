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
    
    event.remove({id: 'create:item_application/railway_casing'})
    itemApplication('create:railway_casing', 'create:andesite_casing', 'forbidden_arcanus:obsidian_ingot')
    itemApplication('create:railway_casing', 'create:copper_casing', 'forbidden_arcanus:obsidian_ingot')
    itemApplication('create:railway_casing', 'create:brass_casing', 'forbidden_arcanus:obsidian_ingot')
    
    itemApplication('forbidden_arcanus:dark_rune_block', 'forbidden_arcanus:rune_block', 'forbidden_arcanus:corrupti_dust')
    itemApplication('forbidden_arcanus:corrupted_arcane_crystal_block', 'forbidden_arcanus:arcane_crystal_block', 'forbidden_arcanus:corrupti_dust')
    itemApplication('create:shadow_steel_casing', 'create:andesite_casing', 'create:shadow_steel')
    itemApplication('create:refined_radiance_casing', 'create:andesite_casing', 'create:refined_radiance')
    itemApplication('create:shadow_steel_casing', 'create:brass_casing', 'create:shadow_steel')
    itemApplication('create:refined_radiance_casing', 'create:brass_casing', 'create:refined_radiance')
    itemApplication('create:shadow_steel_casing', 'create:copper_casing', 'create:shadow_steel')
    itemApplication('create:refined_radiance_casing', 'create:copper_casing', 'create:refined_radiance')
})