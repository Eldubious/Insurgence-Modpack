// Create and modify recipes for the Withered Beacon
ServerEvents.recipes(event => {

    // Remove all original recipes using the Withered Beacon
    event.remove({type: 'witherstormmod:item_craft_super_beacon'})
    event.remove({type: 'witherstormmod:resummon_super_beacon'})

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

    // Summoning Altar
    superBeacon('all_supports',
        [
            {item: 'minecraft:wither_skeleton_skull'},
            {item: 'minecraft:candle'},
            {item: 'create:chromatic_compound'},
            {item: 'create:chromatic_compound'},
            {tag: 'forge:ingots/gold'},
            {tag: 'forge:ingots/gold'},
            {item: 'minecraft:red_wool'},
            {item: 'minecraft:red_wool'}
        ],
        'summoningrituals:altar'
    )

    // Uncrafting Table
    event.remove({id: 'twilightforest:uncrafting_table'})
    superBeacon('all_supports',
        [
            {item: 'minecraft:crafting_table'},
            {item: 'create:chromatic_compound'},
            {item: 'create:chromatic_compound'},
            {item: 'create:chromatic_compound'},
            {item: 'twilightforest:ironwood_ingot'},
            {item: 'twilightforest:ironwood_ingot'},
            {item: 'twilightforest:transformation_powder'}
        ],
        'twilightforest:uncrafting_table'
    )
})