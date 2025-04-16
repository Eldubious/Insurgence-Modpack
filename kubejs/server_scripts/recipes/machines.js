// Create new recipes for the items in the following array
const items = []

ServerEvents.recipes(event => {

    // Remove recipes
    event.remove({id: 'create:crafting/materials/electron_tube'})
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
    event.remove({id: 'create:sequenced_assembly/sturdy_sheet'})
    event.remove([{id: 'ars_elemental:mark_of_mastery'}, {id: 'ars_elemental:imbuement_mark_of_mastery'}])

    // Replace inputs for non-gated recipes
    event.replaceInput(
        {id: 'create:crafting/kinetics/contraption_controls'},
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
    event.replaceInput(
        {id: 'create:crafting/kinetics/adjustable_chain_gearshift'},
        'create:electron_tube',
        'minecraft:redstone'
    )
    event.replaceInput(
        {id: 'create:crafting/kinetics/track_signal'},
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
    event.replaceInput(
        {id: 'create:crafting/kinetics/controller_rail'},
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
    event.replaceInput(
        {id: 'create:crafting/kinetics/display_board'},
        'create:electron_tube',
        'minecraft:redstone_torch'
    )
    event.replaceInput(
        {id: 'create:crafting/kinetics/nixie_tube'},
        'create:electron_tube',
        'create:polished_rose_quartz'
    )
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
    event.remove({id: 'estrogen:centrifuge'})
    event.shaped(Item.of('estrogen:centrifuge'),
        [
            ' F ',
            'CTC'
        ],
        {
            C: 'create:copper_sheet',
            F: 'create:fluid_tank',
            T: 'create:turntable'
        }
    )

    /*
        Items which use the Electron Tube as an ingredient
    */
    event.remove({id: 'create:crafting/kinetics/steam_engine'})
    event.shaped(Item.of('create:steam_engine'),
        [
            ' S ',
            ' B ',
            'EC '
        ],
        {
            S: 'create:shaft',
            B: 'create:brass_ingot',
            E: 'create:electron_tube',
            C: 'minecraft:copper_block'
        }
    )

    /*
        Items which use the Precision Mechanism as an ingredient
     */
    



    /*
        Items which use the Sturdy Sheet as an ingredient
     */
    


    /*
        Recipes which use the Mark of Mastery as an ingredient
     */
    



})