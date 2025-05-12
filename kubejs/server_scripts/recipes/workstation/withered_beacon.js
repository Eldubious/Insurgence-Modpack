// Create and modify recipes for the Withered Beacon
ServerEvents.recipes(event => {

    // Register a recipe
    function superBeacon(condition, inputs, result) {
        event.custom({
            type: 'witherstormmod:item_craft_super_beacon',
            condition: condition,
            ingredients: inputs,
            result: {item: result}
        })
    }

    // Chromatic Compound
    superBeacon('main_activated',
        [
            {item: 'architects_palette:unobtanium'},
            {item: 'architects_palette:unobtanium'},
            {item: 'create:shadow_steel'},
            {item: 'create:shadow_steel'},
            {item: 'create:refined_radiance'},
            {item: 'create:refined_radiance'}
        ],
        'create:chromatic_compound'
    )
    // Cured Membrane
    event.remove({id: 'galosphere:cured_membrane'})
    superBeacon('main_activated',
        [
            {item: 'minecraft:phantom_membrane'},
            {item: 'galosphere:pink_salt_shard'},
            {item: 'galosphere:pink_salt_shard'},
            {item: 'galosphere:pink_salt_shard'},
            {item: 'galosphere:pink_salt_shard'},
            {item: 'witherstormmod:golden_apple_stew'}
        ],
        'galosphere:cured_membrane'
    )
})