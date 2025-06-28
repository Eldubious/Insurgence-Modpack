// Create and modify recipes for the Freezer (Aether)
ServerEvents.recipes(event => {
    
    // Remove recipe of the Freezer (Rubinated Nether)
    event.remove({id: 'rubinated_nether:freezer_crafting'})

    // Register a recipe
    function freezer(output, input, time, exp, category) {
        event.custom({
            type: "aether:freezing",
            category: category,
            cookingtime: time,
            experience: exp,
            ingredient: {
                item: input
            },
            result: output
        })
    }

    // Items
    freezer('endrem:cold_eye', 'minecraft:ender_eye', 1200, 30, 'freezable_misc')
    freezer('twilightforest:ice_bomb', 'supplementaries:bomb', 400, 5, 'freezable_misc')
    freezer('mynethersdelight:plate_of_cold_striderloaf', 'mynethersdelight:plate_of_striderloaf', 400, 5, 'freezable_misc')
    freezer('wan_ancient_beasts:frozen_ancient_meat', 'wan_ancient_beasts:raw_ancient_meat', 400, 5, 'freezable_misc')
    freezer('ancient_aether:festive_gummy_swet', 'aether:blue_gummy_swet', 400, 5, 'freezable_misc')
    freezer('irons_spellbooks:frozen_bone', 'minecraft:bone', 90, 0.1, 'freezable_misc')
    // Blocks
    freezer('iceandfire:frozen_dirt', 'minecraft:dirt', 200, 0.1, 'freezable_blocks')
    freezer('iceandfire:frozen_grass', 'minecraft:grass_block', 200, 0.1, 'freezable_blocks')
    freezer('iceandfire:frozen_stone', 'minecraft:stone', 200, 0.1, 'freezable_blocks')
    freezer('iceandfire:frozen_cobblestone', 'minecraft:cobblestone', 200, 0.1, 'freezable_blocks')
    freezer('iceandfire:frozen_gravel', 'minecraft:gravel', 200, 0.1, 'freezable_blocks')
    freezer('iceandfire:frozen_dirt_path', 'minecraft:dirt_path', 200, 0.1, 'freezable_blocks')
    freezer('wan_ancient_beasts:frozen_straw_block', 'wan_ancient_beasts:straw_block', 200, 0.1, 'freezable_blocks')
    freezer('regions_unexplored:frozen_grass', 'minecraft:grass', 200, 0.1, 'freezable_blocks')
    freezer('realmrpg_skeletons:frozen_waterdrop_skeleton', 'realmrpg_skeletons:waterdrop_skeleton', 200, 0.1, 'freezable_blocks')
    freezer('rubinated_nether:frosted_ice', 'minecraft:water_bucket', 200, 0.1, 'freezable_blocks')
    freezer('rubinated_nether:frosted_ice', 'minecraft:snow_block', 200, 0.1, 'freezable_blocks')
    freezer('rubinated_nether:dry_ice', 'minecraft:blue_ice', 200, 0.1, 'freezable_blocks')
    freezer('mynethersdelight:cold_striderloaf', 'mynethersdelight:striderloaf', 200, 7.5, 'freezable_blocks')
})