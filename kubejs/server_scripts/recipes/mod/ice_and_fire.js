// Create new recipes for Ice and Fire items
ServerEvents.recipes(event => {

    // Dragonsteel
    event.remove({id: 'iceandfire:dragonforge/dragonsteel_fire_ingot'})
    event.remove({id: 'iceandfire:dragonforge/dragonsteel_ice_ingot'})
    event.remove({id: 'iceandfire:dragonforge/dragonsteel_lightning_ingot'})
    event.custom({
        type: 'iceandfire:dragonforge',
        dragon_type: 'fire',
        cook_time: 1000,
        input: {item: 'samurai_dynasty:steel_ingot'},
        blood: {item: 'iceandfire:fire_dragon_blood'},
        result: {item: 'iceandfire:dragonsteel_fire_ingot'}
    })
    event.custom({
        type: 'iceandfire:dragonforge',
        dragon_type: 'ice',
        cook_time: 1000,
        input: {item: 'samurai_dynasty:steel_ingot'},
        blood: {item: 'iceandfire:ice_dragon_blood'},
        result: {item: 'iceandfire:dragonsteel_ice_ingot'}
    })
    event.custom({
        type: 'iceandfire:dragonforge',
        dragon_type: 'lightning',
        cook_time: 1000,
        input: {item: 'samurai_dynasty:steel_ingot'},
        blood: {item: 'iceandfire:lightning_dragon_blood'},
        result: {item: 'iceandfire:dragonsteel_lightning_ingot'}
    })

    // Dreadsteel
    event.remove({ id: 'dreadsteel:dreadsteel_ingot' })
    event.custom({
        type: 'witherstormmod:item_craft_super_beacon',
        condition: 'main_activated',
        ingredients: [
            {item: 'iceandfire:dragonsteel_fire_ingot'},
            {item: 'iceandfire:dragonsteel_ice_ingot'},
            {item: 'iceandfire:dragonsteel_lightning_ingot'},
            {item: 'iceandfire:dread_shard'},
            {item: 'iceandfire:dread_shard'},
            {item: 'iceandfire:dread_shard'},
        ],
        result: {item: 'dreadsteel:dreadsteel_ingot'}
    })

    // Dreadsteel Default Kit
    event.remove({id: 'dreadsteel:kit_default'})
    event.recipes.farmersdelight.cutting(
        'iceandfire:bestiary',
        'arts_and_crafts:magenta_paintbrush',
        'dreadsteel:kit_default'
    )

    // Dreadsteel White Kit
    event.remove({id: 'dreadsteel:kit_white'})
    event.recipes.farmersdelight.cutting(
        'iceandfire:bestiary',
        'arts_and_crafts:light_blue_paintbrush',
        'dreadsteel:kit_white'
    )

    // Dreadsteel Black Kit
    event.remove({id: 'dreadsteel:kit_black'})
    event.recipes.farmersdelight.cutting(
        'iceandfire:bestiary',
        'arts_and_crafts:lime_paintbrush',
        'dreadsteel:kit_black'
    )

    // Dreadsteel Bronze Kit
    event.remove({id: 'dreadsteel:kit_bronze'})
    event.recipes.farmersdelight.cutting(
        'iceandfire:bestiary',
        'arts_and_crafts:red_paintbrush',
        'dreadsteel:kit_bronze'
    )
})