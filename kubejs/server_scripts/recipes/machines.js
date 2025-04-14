// Create new recipes for the items in the following array
const items = []

ServerEvents.recipes(event => {

    // Remove recipes
    event.remove({id: 'create:crafting/materials/electron_tube'})
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
    event.remove({id: 'create:sequenced_assembly/sturdy_sheet'})
    event.remove([{id: 'ars_elemental:mark_of_mastery'}, {id: 'ars_elemental:imbuement_mark_of_mastery'}])

    // Uses Electron Tube as ingredient
    // Smart Chute
    event.shaped(
        Item.of('create:smart_chute'),
        [
            'E',
            'C',
            'B'
        ],
        {
            E: 'create:electron_tube',
            C: 'create:chute',
            B: 'create:brass_sheet'
        }
    )
    // Smart Fluid Pipe
    event.shaped(
        Item.of('create:smart_fluid_pipe'),
        [
            ' E ',
            'NPN ',
        ],
        {
            E: 'create:electron_tube',
            N: 'create:brass_nugget',
            P: 'create:fluid_pipe' 
        }
    )
    // Stockpile Switch
    event.shaped(
        Item.of('create:stockpile_switch'),
        [
            ' E ',
            'BCB',
            ' B '
        ],
        {
            E: 'create:electron_tube',
            B: 'create:brass_ingot',
            C: 'minecraft:chest'
        }
    )
    // Brass Funnel
    event.shaped(
        Item.of('create:brass_funnel'),
        [
            'E',
            'B',
            'K'
        ],
        {
            E: 'create:electron_tube',
            B: 'create:brass_ingot',
            K: 'minecraft:dried_kelp'  
        }
    )
    // Brass Tunnel
    event.shaped(
        Item.of('create:brass_tunnel'),
        [
            ' BE',
            'BKB',
        ],
        {
            B: 'create:brass_ingot',
            E: 'create:electron_tube',
            K: 'minecraft:dried_kelp' 
        }
    )
    // Smart Observer
    event.shaped(
        Item.of('create:content_observer'),
        [
            ' E ',
            'BOB',
            ' B '
        ],
        {
           E: 'create:electron_tube',
           B: 'create:brass_ingot',
           O: 'minecraft:observer' 
        }
    )

    /*
        Items which use the Precision Mechanism as an ingredient
     */
    // Mechanical Arm
    event.shaped(
        Item.of('create:mechanical_arm'),
        [
            'ABB',
            '  P',
            '  C'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'create:brass_ingot',
            P: 'create:precision_mechanism',
            C: 'create:brass_casing'
        }
    )



    /*
        Items which use the Sturdy Sheet as an ingredient
     */
    // Mechanical Drill
    event.shaped(
        Item.of('create:mechanical_drill'),
        [
            ' S ',
            'SIS',
            ' A '
        ],
        {
            S: 'create:sturdy_sheet',
            I: 'minecraft:iron_block',
            A: 'create:andesite_casing'
        }
    )
    // Mechanical Saw
    event.shaped(
        Item.of('create:mechanical_saw'),
        [
            'NIN',
            'ISI',
            ' A '
        ],
        {
            N: 'minecraft:iron_nugget',
            I: 'minecraft:iron_ingot',
            S: 'create:sturdy_sheet',
            A: 'create:andesite_casing'
        }
    )
    // Mechanical Plough
    event.shaped(
        Item.of('create:mechanical_plough'),
        [
            'SAS',
            'DDD',
        ],
        {
            S: 'create:sturdy_sheet',
            A: 'create:andesite_casing',
            D: 'minecraft:dried_kelp'
        }
    )
    // Mechanical Roller
    event.shaped(
        Item.of('create:mechanical_roller'),
        [
            'CAC',
            'SWS',
            'CSC'
        ],
        {
            C: 'minecraft:cobblestone',
            A: 'create:andesite_casing',
            S: 'create:sturdy_sheet',
            W: 'create:large_water_wheel'
        }
    )
    // Gantry Carriage
    event.shaped(
        Item.of('create:gantry_carriage'),
        [
            'PPP',
            'SAS',
            'CRC'
        ],
        {
            P: '#minecraft:planks',
            S: 'create:sturdy_sheet',
            A: 'create:andesite_alloy',
            C: 'create:cogwheel',
            R: 'minecraft:redstone'
        }
    )
    // Mechanical Piston
    event.shaped(
        Item.of('create:mechanical_piston'),
        [
            'PPP',
            'SAS',
            'SRS'
        ],
        {
            P: '#minecraft:planks',
            A: 'create:andesite_alloy',
            S: 'create:sturdy_sheet',
            R: 'create:andesite_casing'
        }
    )


    /*
        Recipes which use the Mark of Mastery as an ingredient
     */
    // Basic Spell Turret
    event.shaped(
        Item.of('ars_nouveau:basic_spell_turret'),
        [
            'SDS',
            'GMG',
            'SRS'
        ],
        {
            S: 'ars_nouveau:source_gem_block',
            D: 'minecraft:dispenser',
            G: 'minecraft:gold_ingot',
            M: 'ars_elemental:mark_of_mastery',
            R: 'minecraft:redstone_block'
        }
    )
    // Drygmy Charm
    event.shaped(
        Item.of('ars_nouveau:drygmy_charm'),
        [
            'SCS',
            'CMC',
            'SCS'
        ],
        {
            S: 'minecraft:moss_block',
            C: 'minecraft:mossy_cobblestone',
            M: 'ars_elemental:mark_of_mastery'
        }
    )
    // Siren Charm
    event.shaped(
        Item.of('ars_elemental:siren_charm'),
        [
            'PSP',
            'FMF',
            'PSP'
        ],
        {
            P: 'minecraft:prismarine_shard',
            S: 'minecraft:salmon',
            F: 'minecraft:cod',
            M: 'ars_elemental:mark_of_mastery'
        }
    )



})