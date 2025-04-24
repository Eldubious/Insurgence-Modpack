// Change recipes for all progression-gated Create machines
ServerEvents.recipes(event => {

    /*
        Replace inputs for certain non-gated recipes
    */
    // Contraption Controls
    event.replaceInput({id: 'create:crafting/kinetics/contraption_controls'},
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
    // Adjustable Chain Gearshift
    event.replaceInput({id: 'create:crafting/kinetics/adjustable_chain_gearshift'},
        'create:electron_tube',
        'minecraft:redstone'
    )
    // Train Signal
    event.replaceInput({id: 'create:crafting/kinetics/track_signal'},
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
    // Controller Rail
    event.replaceInput({id: 'create:crafting/kinetics/controller_rail'},
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
    // Display Board
    event.replaceInput({id: 'create:crafting/kinetics/display_board'},
        'create:electron_tube',
        'minecraft:redstone_torch'
    )
    // Nixie Tube
    event.replaceInput({id: 'create:crafting/kinetics/nixie_tube'},
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
    // Train Schedule
    event.remove({id: 'create:crafting/kinetics/schedule'})
    event.shaped(Item.of('create:schedule'),
        [
            'TCT'
        ],
        {
            T: 'create:track',
            C: 'create:clipboard'
        }
    )
    // Centrifuge
    event.remove({id: 'estrogen:centrifuge'})
    event.shaped(Item.of('estrogen:centrifuge'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'create:fluid_tank',
            B: 'create:copper_sheet',
            C: 'create:turntable',
            D: 'create:cogwheel'
        }
    )

    /*
        Items which use the Electron Tube as an ingredient
    */
    // Steam Engine
    event.remove({id: 'create:crafting/kinetics/steam_engine'})
    event.shaped(Item.of('create:steam_engine'),
        [
            ' A ',
            ' B ',
            'CD '
        ],
        {
            A: 'create:shaft',
            B: 'create:brass_ingot',
            C: 'create:electron_tube',
            D: 'minecraft:copper_block'
        }
    )

    /*
        Items which use the Precision Mechanism as an ingredient
    */
    // Mechanical Crafter
    event.replaceInput({id: 'create:crafting/kinetics/mechanical_crafter'},
        'create:electron_tube',
        'create:precision_mechanism'
    )
    // Sequenced Gearshift
    event.remove({id: 'create:crafting/kinetics/sequenced_gearshift'})
    event.shapeless(Item.of('create:sequenced_gearshift'),
        [
            'create:brass_casing',
            'create:cogwheel',
            'create:polished_rose_quartz',
            'create:precision_mechanism'
        ]
    )
    // Cart Assembler
    event.remove({id: 'create:crafting/kinetics/cart_assembler'})
    event.shaped(Item.of('create:cart_assembler'),
        [
            'ABA',
            'CDC'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'minecraft:redstone',
            C: '#minecraft:logs',
            D: 'create:precision_mechanism'
        }
    )
    // Rope Pulley
    event.remove({id: 'create:crafting/kinetics/rope_pulley'})
    event.shaped(Item.of('create:rope_pulley'),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            A: 'create:andesite_casing',
            B: 'create:andesite_alloy',
            C: 'supplementaries:rope',
            D: 'create:precision_mechanism',
            E: 'create:iron_sheet'
        }
    )
    // Elevator Pulley
    event.remove({id: 'create:crafting/kinetics/elevator_pulley'})
    event.shaped(Item.of('create:elevator_pulley'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'create:brass_ingot',
            B: 'create:rope_pulley'
        }
    )
    // Mechanical Bearing
    event.remove({id: 'create:crafting/kinetics/mechanical_bearing'})
    event.shaped(Item.of('create:mechanical_bearing'),
        [
            ' A ',
            'BC ',
            ' D '
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'create:precision_mechanism',
            C: 'create:andesite_casing',
            D: 'create:shaft'
        }
    )
    // Clockwork Bearing
    event.remove({id: 'create:crafting/kinetics/clockwork_bearing'})
    event.shaped(Item.of('create:clockwork_bearing'),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            A: 'create:brass_ingot',
            B: 'create:mechanical_bearing',
            C: 'minecraft:clock'
        }
    )

    /*
        Items which use the Sturdy Sheet as an ingredient
    */
    // Propeller (Encased Fan)
    event.replaceInput({id: 'create:crafting/kinetics/propeller'},
        'create:andesite_alloy',
        'create:sturdy_sheet'
    )
    // Mechanical Roller
    event.remove({id: 'create:crafting/kinetics/mechanical_roller'})
    event.shaped(Item.of('create:mechanical_roller'),
        [
            'ABC',
            ' CD'
        ],
        {
            A: 'create:polished_rose_quartz',
            B: 'create:andesite_casing',
            C: 'create:sturdy_sheet',
            D: '#forge:stone'
        }
    )
    // Mechanical Plough
    event.remove({id: 'create:crafting/kinetics/mechanical_plough'})
    event.shaped(Item.of('create:mechanical_plough'),
        [
            'ABA',
            'CDC'
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:sturdy_sheet',
            C: 'create:andesite_alloy',
            D: 'create:andesite_casing'
        }
    )
    // Mechanical Harvester
    event.remove({id: 'create:crafting/kinetics/mechanical_harvester'})
    event.shaped(Item.of('create:mechanical_harvester'),
        [
            ' A ',
            'BCB',
            'BDB'
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:andesite_alloy',
            C: 'create:sturdy_sheet',
            D: 'create:andesite_casing'
        }
    )
    // Mechanical Drill
    event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
    event.shaped(Item.of('create:mechanical_drill'),
        [
            ' A ',
            'ACA',
            ' B '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:andesite_casing',
            C: 'create:sturdy_sheet'
        }
    )
    // Mechanical Saw
    event.replaceInput({id: 'create:crafting/kinetics/mechanical_saw'},
        'minecraft:iron_ingot',
        'create:sturdy_sheet'
    )
    // Mechanical Piston
    event.remove({id: 'create:crafting/kinetics/mechanical_piston'})
    event.shaped(Item.of('create:mechanical_piston'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'create:sturdy_sheet',
            C: 'create:andesite_casing',
            D: 'create:shaft'
        }
    )
    // Gantry Carriage
    event.remove({id: 'create:crafting/kinetics/gantry_carriage'})
    event.shaped(Item.of('create:gantry_carriage'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'create:sturdy_sheet',
            C: 'create:andesite_casing',
            D: 'create:cogwheel'
        }
    )
    
    /*
        Recipes which use the Mark of Mastery as an ingredient
    */
    // Basic Spell Turret
    event.replaceInput({id: 'ars_nouveau:basic_spell_turret'},
        'minecraft:redstone_block',
        'ars_elemental:mark_of_mastery'
    )
})