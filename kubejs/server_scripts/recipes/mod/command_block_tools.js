// Add Smithing Table recipes for each Command Block Tool
ServerEvents.recipes(event => {

    const tool_types = ['sword', 'shovel', 'axe', 'pickaxe', 'hoe']
    const command_mat = ['wooden_', 'stone_' , 'iron_', 'gold_', '']      // Used in the Command tool id
    const materials = ['wooden', 'stone', 'iron', 'golden', 'diamond']  // Used in the vanilla tool id
    const mat_index = [0, 1, 2, 3, 4]

    mat_index.forEach(i => {
        tool_types.forEach(tool => {
            event.smithing(
                `witherstormmod:${command_mat[i]}command_block_${tool}`,
                'kubejs:withered_smithing_template',
                `minecraft:${materials[i]}_${tool}`,
                'witherstormmod:command_block_book'
            )
        })
    })
})