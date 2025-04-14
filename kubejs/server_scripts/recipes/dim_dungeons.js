// All recipes related to the dimensional dungeons
ServerEvents.recipes(event => {

    // Portal Keyhole
    event.remove({id: 'dimdungeons:recipe_block_portal_keyhole'})
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'supplementaries:lock_block',
            'minecraft:ender_eye',
            'minecraft:ender_eye'
        ],
        'dimdungeons:block_gilded_portal',
        'dimdungeons:block_portal_keyhole'
    )







    // The Command Block
    event.recipes.create.mechanical_crafting('minecraft:command_block',
        [
            'CCCCC',
            'CUAUC',
            'CALAC',
            'CUAUC',
            'CCCCC'
        ],
        {
            L: 'kubejs:dimension_gem_legendary',
            A: 'irons_spellbooks:arcane_salvage',
            C: 'minecraft:terracotta',
            U: 'architects_palette:unobtanium'
        })
})