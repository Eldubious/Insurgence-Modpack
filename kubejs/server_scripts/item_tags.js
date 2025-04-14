// Create tags to organize items
ServerEvents.tags('item', event => {
    
    // Takes a tag name and a resource location
    function addToTag(tag, item) {
        event.add(tag, item)
    }

    // Takes a tag name and a resource location
    function removeFromTag(tag, item) {
        event.remove(tag, item)
    }

	// Add more spicy ingredients to more cooking recipes
	addToTag('mynethersdelight:hot_spice', 'call_of_yucutan:chili_pepper')
	addToTag('mynethersdelight:hot_spice', 'twilightforest:fiery_blood')
	addToTag('mynethersdelight:hot_spice', 'twilightforest:fiery_tears')

	// Add more fish to fillet recipes
	addToTag('aquaculturedelight:fillet_two', 'alexsmobs:blobfish')
	addToTag('aquaculturedelight:fillet_three', 'alexsmobs:cosmic_cod')

	// Add more meats to cooking recipes
	addToTag('mynethersdelight:curry_meats', 'twilightdelight:raw_tomahawk_smeak')
	addToTag('mynethersdelight:curry_meats', 'twilightforest:raw_meef')
	addToTag('mynethersdelight:curry_meats', 'twilightdelight:raw_meef_slice')
	addToTag('mynethersdelight:curry_meats', 'twilightforest:raw_venison')
	addToTag('mynethersdelight:curry_meats', 'twilightdelight:raw_venison_rib')
	addToTag('mynethersdelight:curry_meats', 'alexsmobs:moose_ribs')
	addToTag('mynethersdelight:curry_meats', 'alexsmobs:kangaroo_meat')
	addToTag('mynethersdelight:curry_meats', 'wan_ancient_beasts:raw_ancient_meat')

    // Add new Items as an ingredient for Golden Apple Stew
    addToTag('witherstormmod:cure_base', 'experienceobelisk:experience_jelly')
    addToTag('witherstormmod:cure_base', 'aether:swet_ball')
    addToTag('witherstormmod:cure_base', 'aether_redux:golden_swet_ball')
    addToTag('witherstormmod:cure_base', 'aether_redux:vanilla_swet_ball')
    addToTag('witherstormmod:cure_base', 'unusualend:end_blob')

    // Remove unsused items from certain tags
    const silverOres = ['samurai_dynasty:silver_ore', 'samurai_dynasty:deepslate_silver_ore', 'iceandfire:silver_ore', 'iceandfire:deepslate_silver_ore']
    silverOres.forEach(item => {removeFromTag('forge:ores/silver', item)})
    const rubyOres = ['samurai_dynasty:ruby_ore', 'samurai_dynasty:deepslate_ruby_ore']
    rubyOres.forEach(item => {removeFromTag('forge:ores/ruby', item)})
    const jadeOres = ['samurai_dynasty:jade_ore', 'samurai_dynasty:deepslate_jade_ore']
    jadeOres.forEach(item => {removeFromTag('forge:ores/jade', item)})
    removeFromTag('forge:storage_blocks/raw_silver', 'iceandfire:raw_silver_block')
    removeFromTag('farmersdelight:tools/knives', 'aetherdelight:stratus_knife')
	removeFromTag('aquaculturedelight:kelp_rolls', 'aquaculture:sushi')

    // Dimensional Gems
    const gems = ['kubejs:dimension_gem_common', 'kubejs:dimension_gem_uncommon', 'kubejs:dimension_gem_rare',
        'kubejs:dimension_gem_epic', 'kubejs:dimension_gem_legendary']
    gems.forEach(element => addToTag('kubejs:dimensional_gems', element))

    // Cutting Board tools for salvaging certain equipment
    const can_salvage = ['justhammers:stone_hammer', 'justhammers:iron_hammer', 'justhammers:gold_hammer', 'justhammers:diamond_hammer', 'justhammers:netherite_hammer',
        'justhammers:stone_impact_hammer', 'justhammers:iron_impact_hammer', 'justhammers:gold_impact_hammer', 'justhammers:diamond_impact_hammer', 'justhammers:netherite_impact_hammer',
        'justhammers:stone_reinforced_hammer', 'justhammers:iron_reinforced_hammer', 'justhammers:gold_reinforced_hammer', 'justhammers:diamond_reinforced_hammer', 'justhammers:netherite_reinforced_hammer',
        'justhammers:stone_reinforced_impact_hammer', 'justhammers:iron_reinforced_impact_hammer', 'justhammers:gold_reinforced_impact_hammer', 'justhammers:diamond_reinforced_impact_hammer',
        'justhammers:netherite_reinforced_impact_hammer', 'justhammers:stone_destructor_hammer', 'justhammers:iron_destructor_hammer', 'justhammers:gold_destructor_hammer',
        'justhammers:diamond_destructor_hammer', 'justhammers:netherite_destructor_hammer', 'alexscaves:primitive_club', 'mahoutsukai:hammer', 'forbidden_arcanus:wooden_blacksmith_gavel',
        'forbidden_arcanus:stone_blacksmith_gavel', 'forbidden_arcanus:iron_blacksmith_gavel', 'forbidden_arcanus:golden_blacksmith_gavel', 'forbidden_arcanus:diamond_blacksmith_gavel',
        'forbidden_arcanus:netherite_blacksmith_gavel', 'forbidden_arcanus:reinforced_deorum_blacksmith_gavel', 'mutantmonsters:hulk_hammer', 'samurai_dynasty:tetsubo', 'samurai_dynasty:tetsubo_netherite',
        'unusualend:warped_anchor']
    can_salvage.forEach(element => addToTag('kubejs:can_salvage_equipment', element))

    // Relics
    const relics = ['relics:amphibian_boot', 'relics:aqua_walker', 'relics:arrow_quiver', 'relics:bastion_ring', 'relics:blazing_flask', 'relics:chorus_inhibitor',
        'relics:drowned_belt', 'relics:elytra_booster', 'relics:enders_hand', 'relics:holy_locket', 'relics:horse_flute', 'relics:hunter_belt', 'relics:ice_breaker',
        'relics:ice_skates', 'relics:infinity_ham', 'relics:jellyfish_necklace', 'relics:leather_belt', 'relics:magic_mirror', 'relics:magma_walker', 'relics:midnight_robe',
        'relics:rage_glove', 'relics:reflection_necklace', 'relics:roller_skates', 'relics:shadow_glaive', 'relics:space_dissector', 'relics:spatial_sign', 'relics:spore_sack',
        'relics:wool_mitten']
    relics.forEach(element => addToTag('kubejs:relics', element))

    // Food which provides bonus hearts
    const qualityFoods = ["minecraft:golden_apple", "minecraft:enchanted_golden_apple", "minecraft:golden_carrot", "quark:ancient_fruit",
		"estrogen:estrogen_chip_cookie", "minecraft:pumpkin_pie", "minecraft:mushroom_stew", "minecraft:beetroot_soup", "minecraft:rabbit_stew",
		"nethers_exoticism:unsettling_fruits_salad", "nethers_exoticism:curious_fruits_salad", "the_bumblezone:bee_soup",
		"the_bumblezone:royal_jelly_bottle", "mynethersdelight:crimson_stroganoff", "mynethersdelight:strider_with_grilled_fungus", "mynethersdelight:fried_hoglin_chop",
		"mynethersdelight:plate_of_stuffed_hoglin_snout", "mynethersdelight:plate_of_stuffed_hoglin_ham", "mynethersdelight:plate_of_stuffed_hoglin",
		"mynethersdelight:breakfast_sampler", "aetherdelight:bowl_of_enchanted_berries", "aetherdelight:festive_sweets", "aetherdelight:bowl_of_ginger_cookies",
		"aetherdelight:sweet_and_sour_soup", "aetherdelight:swet_pudding", "aetherdelight:ambrosia_glazed_apple", "aetherdelight:enchanted_pie_slice",
		"alexsmobs:shrimp_fried_rice", "alexsmobs:kangaroo_burger", "alexsmobs:mosquito_repellent_stew", "aquaculturedelight:raw_fish_fillet_roll",
		"aquaculturedelight:jellyfish_jelly", "aquaculturedelight:poor_fisher_chowder", "aquaculturedelight:bass_stew", "aquaculturedelight:unusual_fish_soup",
		"aquaculturedelight:halaszle", "aquaculturedelight:large_fish_with_vegetables", "aquaculturedelight:baked_pollock_with_carrots",
		"aquaculturedelight:buckling", "aquaculturedelight:tuna_spaghetti", "aquaculturedelight:rollmops", "aquaculturedelight:turtle_meat_dish",
		"aquaculturedelight:catfish_barbecue", "aquaculturedelight:halibut_with_tartar_sauce", "arsdelight:mendosteen_jelly", "arsdelight:bastion_jelly",
		"arsdelight:bombegrante_jelly", "arsdelight:frostaya_jelly", "arsdelight:source_berry_jelly", "arsdelight:mendosteen_pie_slice", "arsdelight:bastion_pie_slice",
		"arsdelight:bombegrante_pie_slice", "arsdelight:frostaya_pie_slice", "arsdelight:grilled_wilden_skewer", "arsdelight:grilled_chimera_skewer",
		"arsdelight:source_berry_cupcake", "arsdelight:arch_sauce", "arsdelight:wilden_sauce", "arsdelight:arch_soup", "arsdelight:wilden_stew",
		"arsdelight:bowl_of_wilden_salad", "arsdelight:horn_roll", "arsdelight:bowl_of_honey_glazed_chimera", "arsdelight:mendosteen_chicken",
		"arsdelight:bastion_pork", "arsdelight:bombegrante_steak", "arsdelight:frostaya_mutton", "create:sweet_roll", "create:honeyed_apple",
		"cataclysm:blessed_amethyst_crab_meat", "witherstormmod:golden_apple_stew", "quarkdelight:cloud_latte", "farmersdelight:cake_slice",
		"farmersdelight:apple_pie_slice", "farmersdelight:sweet_berry_cheesecake_slice", "farmersdelight:chocolate_pie_slice", "farmersdelight:melon_popsicle",
		"farmersdelight:glow_berry_custard", "farmersdelight:fruit_salad", "farmersdelight:mixed_salad", "farmersdelight:nether_salad",
		"farmersdelight:barbecue_stick", "farmersdelight:egg_sandwich", "farmersdelight:chicken_sandwich", "farmersdelight:hamburger",
		"farmersdelight:bacon_sandwich", "farmersdelight:mutton_wrap", "farmersdelight:dumplings", "farmersdelight:stuffed_potato",
		"farmersdelight:cabbage_rolls", "farmersdelight:salmon_roll", "farmersdelight:cod_roll", "farmersdelight:kelp_roll", "farmersdelight:bone_broth",
		"farmersdelight:beef_stew", "farmersdelight:chicken_soup", "farmersdelight:vegetable_soup", "farmersdelight:fish_stew", "farmersdelight:fried_rice",
		"farmersdelight:pumpkin_soup", "farmersdelight:baked_cod_stew", "farmersdelight:noodle_soup", "farmersdelight:bacon_and_eggs",
		"farmersdelight:pasta_with_meatballs", "farmersdelight:pasta_with_mutton_chop", "farmersdelight:mushroom_rice",
		"farmersdelight:roasted_mutton_chops", "farmersdelight:vegetable_noodles", "farmersdelight:steak_and_potatoes", "farmersdelight:ratatouille",
		"farmersdelight:squid_ink_pasta", "farmersdelight:grilled_salmon", "farmersdelight:roast_chicken", "farmersdelight:stuffed_pumpkin",
		"farmersdelight:honey_glazed_ham", "farmersdelight:shepherds_pie", "farmersdelight:dog_food", "ars_nouveau:source_berry_pie",
		"ars_nouveau:source_berry_roll", "iceandfire:ambrosia", "twilightforest:meef_stroganoff", "twilightforest:hydra_chop", "twilightforest:experiment_115",
		"mahoutsukai:faecake", "miners_delight:pasta_with_veggieballs", "miners_delight:cave_soup",
		"miners_delight:vegan_hamburger", "miners_delight:vegan_wrap", "miners_delight:vegan_steak_and_potatoes", "miners_delight:bat_rolls",
		"miners_delight:improvised_barbecue_stick", "miners_delight:weird_caviar", "miners_delight:insect_sandwich", "miners_delight:insect_wrap",
		"miners_delight:insect_stew", "miners_delight:seasoned_arthropods", "miners_delight:squid_sandwich", "miners_delight:takoyaki",
		"miners_delight:bowl_of_stuffed_squid", "miners_delight:glow_ink_pasta", "alexscaves:serene_salad", "alexscaves:seething_stew", "alexscaves:primordial_soup",
		"quarkdelight:cavern_explorer_stew", "quarkdelight:bowl_of_exotic_fruits", "quarkdelight:lush_moss_salad", "quarkdelight:miso_with_bamboo_sprouts",
		"quarkdelight:crab_pasta", "quarkdelight:cooked_whole_crab", "quarkdelight:crab_bars", "quarkdelight:bucket_of_sweet_gelatine", "aether:blue_gummy_swet",
		"aether:golden_gummy_swet", "aether_redux:vanilla_gummy_swet", "aquaculture:turtle_soup", "alexscaves:spelunkie", "alexscaves:slam",
		"alexscaves:green_soylent", "alexscaves:deep_sea_sushi_roll", "alexscaves:vesper_stew", "alexscaves:darkened_apple", "vinery:jellie_wine",
		"alexscaves:sundae", "alexscaves:caramel_apple", "estrogen:horse_urine_bottle", "twilightdelight:chocolate_wafer", "twilightdelight:chocolate_113",
		"twilightdelight:milky_113", "twilightdelight:glow_113", "twilightdelight:honey_113", "twilightdelight:meef_wrap", "twilightdelight:ghast_burger",
		"twilightdelight:hydra_burger", "twilightdelight:berry_stick", "twilightdelight:glowstew", "twilightdelight:mushgloom_sauce",
		"twilightdelight:glow_venison_rib_with_pasta", "twilightdelight:mushgloom_meef_pasta", "twilightdelight:fried_insect",
		"twilightdelight:thousand_plant_stew", "twilightdelight:grilled_ghast", "twilightdelight:grilled_tomahawk_smeak", "twilightdelight:borer_tear_soup",
		"twilightdelight:ghast_brain_salad", "twilightdelight:plate_of_lily_chicken", "twilightdelight:plate_of_fiery_snakes", "twilightdelight:plate_of_meef_wellington",
		"twilightdelight:aurora_pie_slice", "twilightdelight:torchberry_pie_slice", "twilightdelight:tear_drink", "twilightdelight:glacier_ice_tea",
		"twilightdelight:phytochemical_juice", "unusualend:wandering_stew", "unusualend:bluk_au_chocolat", "unusualend:bluk_skewer", "ends_delight:bubble_tea",
		"ends_delight:assorted_salad", "ends_delight:end_barbecue_stick", "ends_delight:dragon_leg_with_sauce", "ends_delight:steamed_dragon_egg",
		"ends_delight:dragon_meat_stew", "ends_delight:grilled_shulker", "ends_delight:chorus_fruit_pie_slice", "ends_delight:ender_congee",
		"ends_delight:roasted_dragon_steak", "ends_delight:stir_fried_shulker_meat", "ends_delight:enderman_gristle_stew", "ends_delight:ender_noodle",
		"ends_delight:shulker_soup", "ends_delight:dragon_breath_and_chorus_soup", "ends_delight:end_mixed_salad", "ends_delight:smoked_dragon_leg",
		"ends_delight:shulker_omelette", "ends_delight:ender_sausage", "ends_delight:ender_bamboo_rice", "ends_delight:chorus_flower_pie",
		"ends_delight:chorus_fruit_popsicle", "mynethersdelight:spicy_noodle_soup", "mynethersdelight:spicy_cotton", "mynethersdelight:plate_of_ghasta_with_cream",
		"mynethersdelight:spicy_curry", "mynethersdelight:hot_wings_bucket", "mynethersdelight:magma_cake_slice", "mynethersdelight:chilidog",
		"mynethersdelight:plate_of_cold_striderloaf", "vinery:bottle_mojang_noir", "vinery:cristel_wine", "vinery:creepers_crush", "vinery:apple_wine",
		"vinery:chorus_wine", "vinery:aegis_wine", "alexscaves:gummy_ring_red", "alexscaves:gummy_ring_green", "alexscaves:gummy_ring_yellow", "alexscaves:gummy_ring_blue",
		"alexscaves:gummy_ring_pink", "tropicraft:seared_marlin", "tropicraft:sea_urchin_roe", "tropicraft:cooked_ray", "mynethersdelight:plate_of_striderloaf",
		"call_of_yucatan:xocolatl", "trailandtales_delight:cherry_cheese_pie_slice", "trailandtales_delight:cherry_cheese_slice", "trailandtales_delight:stuffed_sniffer_egg",
		"trailandtales_delight:golden_lantern_fruit", "trailandtales_delight:cheese_slice", "trailandtales_delight:cherry_cake_slice", "trailandtales_delight:ancient_coffee",
		"trailandtales_delight:torchflower_tea", "trailandtales_delight:cherry_petal_tea", "trailandtales_delight:pitcher_plant_tea", "oceanic_delight:sea_grape_juice",
		"oceanic_delight:nautilus_juice", "oceanic_delight:sponge_cake_slice", "oceanic_delight:squid_salad", "oceanic_delight:caesar_salad", "oceanic_delight:sea_salad",
		"oceanic_delight:seafood_skewer", "oceanic_delight:steamed_beef", "oceanic_delight:sea_pickle_roll", "oceanic_delight:fish_egg_roll", "oceanic_delight:glow_squid_stew",
		"oceanic_delight:globular_rice", "oceanic_delight:shrimp_stew", "oceanic_delight:pasta_with_eyeball", "oceanic_delight:squid_and_pickles", "oceanic_delight:bowl_of_paella",
		"oceanic_delight:plate_of_stuffed_pufferfish", "aether:healing_stone", "ancient_aether:festive_gummy_swet", "hexcasting:sub_sandwich"]
    qualityFoods.forEach(element => addToTag('kubejs:quality_foods', element)) 
    // DEV: store length of list in global variable
    global.qualityFoodsLen = qualityFoods.length 
})