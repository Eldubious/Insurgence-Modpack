// Add/change recipes for Cognition items
ServerEvents.recipes(event => {

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

    // Cognitive Flux
    event.remove({id: 'experienceobelisk:cognitive_flux'})
    event.recipes.ars_nouveau.imbuement(
        'mahoutsukai:powdered_diamond',
        'experienceobelisk:cognitive_flux',
        2000,
        [
            'minecraft:soul_sand',
            'minecraft:lapis_lazuli',
            'minecraft:quartz'
        ]
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

})