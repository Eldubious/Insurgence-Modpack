// Create and modify recipes for the Crafting Table
ServerEvents.recipes(event => {

    /*
        Items and Materials
    */
    // Cerebral Plate
    event.remove({id: 'architects_palette:cerebral_plate'})
    event.shapeless(
        Item.of('architects_palette:cerebral_plate', 4),
        ['minecraft:tuff', 'minecraft:quartz', 'experienceobelisk:forgotten_dust', 'minecraft:charcoal']
    )
    // Astute Assembly
    event.remove({id: 'experienceobelisk:astute_assembly'})
    event.shaped(
        Item.of('experienceobelisk:astute_assembly', 2),
        [
            'ACA',
            'ABA',
            'ACA'
        ],
        {
            A: 'experienceobelisk:cognitive_alloy',
            B: 'experienceobelisk:cognitive_crystal',
            C: 'architects_palette:cerebral_plate'
        }
    )
    // Experience Obelisk
    event.remove({id: 'experienceobelisk:experience_obelisk'})
    event.shaped('experienceobelisk:experience_obelisk',
        [
            ' E ',
            'ECE',
            'DDD'
        ],
        {
            E: 'create:experience_nugget',
            C: 'experienceobelisk:cognitive_crystal',
            D: 'minecraft:polished_deepslate'
        }
    )



    /*
        Blocks
    */
    // Lodestone
    event.replaceInput({id: 'minecraft:lodestone'},
        'minecraft:netherite_ingot',
        'minecraft:iron_ingot'
    )

    /*
        Tools and Equipment
    */
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
            C: 'minecraft:netherite_ingot',
            D: 'minecraft:compass',
            E: 'minecraft:lodestone'
        }
    )

    // Skyjade Knife
    event.shaped(
        'aetherdelight:skyjade_knife',
        [
            ' J',
            'S '
        ],
        {
            J: 'call_of_yucutan:jade',
            S: 'aether:skyroot_stick'
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