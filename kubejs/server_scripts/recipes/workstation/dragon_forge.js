// Create new recipes for Ice and Fire's Dreadsteel Ingots
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
})