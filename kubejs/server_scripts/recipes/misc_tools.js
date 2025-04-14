// Recipes for a few random assorted items
ServerEvents.recipes(event => {

    // Traveler's Compass
    event.remove({id: 'travelerscompass:travelerscompass'})
    event.shaped(
        Item.of('travelerscompass:travelerscompass'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'galosphere:allurite_shard',
            B: 'ars_nouveau:dowsing_rod',
            C: 'minecraft:iron_ingot',
            D: 'minecraft:compass',
            E: 'minecraft:lodestone'
        }
    )

    // Cataclysm Eyes
    // Eye of Flame
    event.remove({id: 'cataclysm:flame_eye'})
    event.shaped(
        Item.of('cataclysm:flame_eye'),
        [
            'AAA',
            'BCD',
            'EEE'
        ],
        {
            A: 'minecraft:blaze_powder',
            B: 'iceandfire:fire_dragon_blood',
            C: 'minecraft:ender_eye',
            D: 'iceandfire:ice_dragon_blood',
            E: 'minecraft:soul_sand'
        }
    )
})