// Remove and modify recipes of duplicate items
ServerEvents.recipes(event => {

    // Remove the recipe for Aquaculture's Sushi and the duplicate Rice Roll Medley recipe
    event.remove({id: 'farmersdelight:rice_roll_medley_block'})
    event.remove({id: 'aquaculture:sushi'})

    // Remove the Forbidden Arcanus Bat Soup recipe
    event.remove({output: 'forbidden_arcanus:bat_soup'})

    // Replace Aquaculture's Fish Bones with Alex's Mob's Fish Bones
    event.remove({id: 'alexsmobs:bonemeal_from_fish_bones'})
    event.replaceOutput(
        {output: 'aquaculture:fish_bones'},
        'aquaculture:fish_bones',
        'alexsmobs:fish_bones'
    )
    event.replaceInput(
        {input: 'aquaculture:fish_bones'},
        'aquaculture:fish_bones',
        'alexsmobs:fish_bones'
    )

    // Replace Miner's Delight's Tentacles with Oceanic Delight's Tentacles
    event.replaceOutput(
        {id: 'miners_delight:cutting/baked_squid'},
        'miners_delight:baked_tentacles',
        'oceanic_delight:grilled_squid_tentacles'
    )
    event.replaceOutput(
        {id: 'miners_delight:cutting/squid'},
        'miners_delight:tentacles',
        'oceanic_delight:squid_tentacles'
    )
    event.replaceOutput(
        {id: 'miners_delight:cutting/glow_squid'},
        'miners_delight:tentacles',
        'oceanic_delight:glow_squid_tentacles'
    )
    event.replaceInput(
        {input: '#forge:tentacles', not: [{output: 'miners_delight:baked_tentacles'}, {id: 'farmersdelight:cooking/cabbage_rolls'}, {id: 'oceanic_delight:glow_squid_stew'}, {id: 'miners_delight:cooking/bat_rolls'}]},
        '#forge:tentacles',
        '#oceanic_delight:squid_tentacles'
    )

    // Replace Architect's Palette's Withered Bone with Ice and Fire's Witherbone
    event.replaceInput(
        {input: '#forge:bones/wither', not: {id: 'farmersdelight:cooking/bone_broth'}},
        '#forge:bones/wither',
        'iceandfire:witherbone'
    )
    event.replaceOutput(
        {id: 'architects_palette:withered_bone'},
        'architects_palette:withered_bone',
        'iceandfire:witherbone'
    )

    // Replace Samurai Dynasty's Jade with Call of Yucatan's Jade
    event.replaceInput(
        {input: 'samurai_dynasty:jade', not: {id: 'samurai_dynasty:jade_block'}},
        'samurai_dynasty:jade',
        'call_of_yucutan:jade'
    )

    // Replace Samurai Dynasty's Ruby with Rubinated Nether's Ruby
    event.replaceInput(
        {input: '#forge:gems/ruby', not: {id: 'samurai_dynasty:ruby_block'}},
        '#forge:gems/ruby',
        'rubinated_nether:ruby'
    )

    // Replace Ice and Fire's Copper Nugget with Create's Copper Nugget
    event.remove({id: 'iceandfire:copper_ingot_to_nuggets'})
    event.remove({id: 'iceandfire:copper_nuggets_to_ingot'})
    event.replaceInput(
        {input: '#forge:nuggets/copper'},
        '#forge:nuggets/copper',
        'create:copper_nugget'
    )
    event.replaceOutput(
        {output: 'iceandfire:copper_nugget'},
        'iceandfire:copper_nugget',
        'create:copper_nugget'
    )

    // Replace Ice and Fire and Samurai Dynasty's Silver with Galosphere's Silver
    event.remove({id: 'samurai_dynasty:silver_ingot_from_nugget'})
    event.remove({input: 'create:crushed_raw_silver', not: [{output: 'galosphere:silver_ingot'}, {output: 'galosphere:silver_nugget'}]})
    event.replaceInput(
        {id: 'samurai_dynasty:silver_block'},
        '#forge:ingots/silver',
        'samurai_dynasty:silver_ingot'
    )
    event.replaceInput(
        {input: '#forge:ingots/silver', not: [{id: 'iceandfire:silver_ingot_to_silver_block'}, {id: 'samurai_dynasty:silver_block'}, {id: 'iceandfire:silver_ingot_to_silver_nugget'}, {id: 'samurai_dynasty:silver_nugget'}]},
        '#forge:ingots/silver',
        'galosphere:silver_ingot'
    )
    event.replaceInput(
        {input: '#forge:storage_blocks/silver', not: {id: 'iceandfire:silver_block_to_silver_ingot'}},
        '#forge:storage_blocks/silver',
        'galosphere:silver_block'
    )
    event.replaceOutput(
        {output: '#forge:nuggets/silver', not: [{id: 'iceandfire:silver_ingot_to_silver_nugget'}, {id: 'samurai_dynasty:silver_nugget'}]},
        '#forge:nuggets/silver',
        'galosphere:silver_nugget'
    )
})