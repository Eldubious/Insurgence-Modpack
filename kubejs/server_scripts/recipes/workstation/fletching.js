// Create and modify recipes for the Fletching Table
ServerEvents.recipes(event => {

    // Register a recipe
    function fletching(input1, input2, input3, output, count) {
        event.custom({
            type: 'apotheosis:fletching',
            ingredients: [
                {item: input1},
                {item: input2},
                {item: input3}
            ],
            result: {
                item: output,
                count: count
            }
        })
    }
    
    // Vanilla Arrows (using Wilden Spike)
    fletching('ars_nouveau:wilden_spike', 'minecraft:stick', 'minecraft:feather', 'minecraft:arrow', 48)
    // Obsidian Arrows
    event.remove({id: 'apotheosis:fletching/obsidian_arrow'})
    fletching('minecraft:obsidian', 'minecraft:stick', 'minecraft:feather', 'call_of_yucutan:obsidian_arrow', 6)
    // Boom Arrows
    fletching('minecraft:paper', 'minecraft:gunpowder', 'minecraft:arrow', 'forbidden_arcanus:boom_arrow', 2)
    // Draco Arcanus Arrows
    fletching('minecraft:dragon_breath', 'minecraft:stick', 'minecraft:feather', 'forbidden_arcanus:draco_arcanus_arrow', 6)
    // Torch Arrows
    fletching('minecraft:coal', 'minecraft:stick', 'minecraft:feather', 'quark:torch_arrow', 6)
    // Phantom Arrows
    fletching('minecraft:phantom_membrane', 'minecraft:arrow', 'minecraft:phantom_membrane', 'unusualend:phantom_arrow', 4)
    // Mischief Arrows
    fletching('savage_and_ravage:creeper_spores', 'minecraft:stick', 'minecraft:feather', 'savage_and_ravage:mischief_arrow', 6)
    // Void Scatter Arrows
    fletching('cataclysm:void_jaw', 'minecraft:arrow', 'minecraft:glowstone_dust', 'cataclysm:void_scatter_arrow', 3)
    // Dragonbone Arrows
    fletching('iceandfire:wither_shard', 'iceandfire:dragonbone', 'minecraft:feather', 'iceandfire:dragonbone_arrow', 9)
    // Stymphalian Arrows
    fletching('minecraft:flint', 'minecraft:stick', 'iceandfire:stymphalian_bird_feather', 'iceandfire:stymphalian_arrow', 6)
    // Amphithere Arrows
    fletching('minecraft:flint', 'minecraft:stick', 'iceandfire:amphithere_feather', 'iceandfire:amphithere_arrow', 6)
    // Hydra Arrows
    fletching('iceandfire:hydra_fang', 'minecraft:stick', 'minecraft:lily_pad', 'iceandfire:hydra_arrow', 6)
    // Shark-Tooth Arrows
    fletching('alexsmobs:shark_tooth', 'minecraft:stick', 'minecraft:kelp', 'alexsmobs:shark_tooth_arrow', 9)
    // Seeking Arrows
    fletching('minecraft:arrow', 'alexscaves:scarlet_neodymium_ingot', 'minecraft:arrow', 'alexscaves:seeking_arrow', 12)
    // Burrowing Arrows
    fletching('alexscaves:corrodent_teeth', 'minecraft:stick', 'alexscaves:dark_tatters', 'alexscaves:burrowing_arrow', 6)
    // Tide Arrow
    event.custom({
        type: 'apotheosis:fletching',
        ingredients: [
            {item: 'iceandfire:sea_serpent_fang'},
            {item: 'minecraft:stick'},
            {tag: 'iceandfire:scales/sea_serpent'}
        ],
        result: {
            item: 'iceandfire:sea_serpent_arrow',
            count: 6
        }
    })
})