// All recipes related to the dimensional dungeons
ServerEvents.recipes(event => {

    







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