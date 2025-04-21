// Add and modify Fletching Table recipes
ServerEvents.recipes(event => {

    // Register a fletching recipe
    function fletching(input1, input2, input3, output, count) {
        event.custom({
            type: 'apotheosis:fletching',
            ingredients: [
                {
                    item: input1
                },
                {
                    item: input2
                },
                {
                    item: input3
                }
            ],
            result: {
                item: output,
                count: count
            }
        })
    }
    
    event.remove({id: 'apotheosis:fletching/obsidian_arrow'})

    fletching('ars_nouveau:wilden_spike', 'minecraft:stick', 'minecraft:feather', 'minecraft:arrow', 48)
    fletching('minecraft:obsidian', 'minecraft:stick', 'minecraft:feather', 'call_of_yucutan:obsidian_arrow', 6)
    fletching('minecraft:paper', 'minecraft:gunpowder', 'minecraft:arrow', 'forbidden_arcanus:boom_arrow', 2)
    fletching('minecraft:dragon_breath', 'minecraft:stick', 'minecraft:feather', 'forbidden_arcanus:draco_arcanus_arrow', 6)
    fletching('minecraft:coal', 'minecraft:stick', 'minecraft:feather', 'quark:torch_arrow', 6)
    fletching('minecraft:phantom_membrane', 'minecraft:arrow', 'minecraft:phantom_membrane', 'unusualend:phantom_arrow', 4)
    fletching('savage_and_ravage:creeper_spores', 'minecraft:stick', 'minecraft:feather', 'savage_and_ravage:mischief_arrow', 6)
    fletching('cataclysm:void_jaw', 'minecraft:arrow', 'minecraft:glowstone_dust', 'cataclysm:void_scatter_arrow', 3)
    fletching('iceandfire:wither_shard', 'iceandfire:dragonbone', 'minecraft:feather', 'iceandfire:dragonbone_arrow', 9)
    fletching('minecraft:flint', 'minecraft:stick', 'iceandfire:stymphalian_bird_feather', 'iceandfire:stymphalian_arrow', 6)
    fletching('minecraft:flint', 'minecraft:stick', 'iceandfire:amphithere_feather', 'iceandfire:amphithere_arrow', 6)
    fletching('iceandfire:hydra_fang', 'minecraft:stick', 'minecraft:lily_pad', 'iceandfire:hydra_arrow', 6)
    fletching('alexsmobs:shark_tooth', 'minecraft:stick', 'minecraft:kelp', 'alexsmobs:shark_tooth_arrow', 9)
    fletching('minecraft:arrow', 'alexscaves:scarlet_neodymium_ingot', 'minecraft:arrow', 'alexscaves:seeking_arrow', 12)
    fletching('alexscaves:corrodent_teeth', 'minecraft:stick', 'alexscaves:dark_tatters', 'alexscaves:burrowing_arrow', 6)

    event.custom({
        type: 'apotheosis:fletching',
        ingredients: [
            {
                item: 'iceandfire:sea_serpent_fang',
            },
            {
                item: 'minecraft:stick'
            },
            {
                tag: 'iceandfire:scales/sea_serpent'
            }
        ],
        result: {
            item: 'iceandfire:sea_serpent_arrow',
            count: 6
        }
    })
})