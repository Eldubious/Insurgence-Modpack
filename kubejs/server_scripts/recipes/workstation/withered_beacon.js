// Create and remove recipes crafted from the Withered Beacon
ServerEvents.recipes(event => {

    event.remove({type: 'witherstormmod:item_craft_super_beacon'})
    event.remove({type: 'witherstormmod:resummon_super_beacon'})

    // Uncrafting Table
    event.remove({id: 'twilightforest:uncrafting_table'})

    // Cured Membrane
    event.remove({id: 'galosphere:cured_membrane'})
    event.custom({
        type: 'witherstormmod:item_craft_super_beacon',
        condition: 'main_activated',
        ingredients: [
            {item: 'minecraft:phantom_membrane'},
            {item: 'galosphere:pink_salt_shard'},
            {item: 'galosphere:pink_salt_shard'},
            {item: 'galosphere:pink_salt_shard'},
            {item: 'galosphere:pink_salt_shard'},
            {item: 'witherstormmod:golden_apple_stew'}
        ],
        result: {item: 'galosphere:cured_membrane'}
    })

    // Summoning Altar
    event.custom({
        type: 'witherstormmod:item_craft_super_beacon',
        condition: 'main_activated',
        ingredients: [
            {item: 'minecraft:wither_skeleton_skull'},
            {item: 'minecraft:candle'},
            {item: 'kubejs:dimension_gem_epic'},
            {item: 'kubejs:dimension_gem_epic'},
            {item: 'minecraft:gold_ingot'},
            {item: 'minecraft:gold_ingot'},
            {item: 'minecraft:red_wool'},
            {item: 'minecraft:dark_oak_planks'}
        ],
        result: {item: 'summoningrituals:altar'}
    })
})