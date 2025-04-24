// Add/change recipes for Cognition items
ServerEvents.recipes(event => {

    

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

    

})