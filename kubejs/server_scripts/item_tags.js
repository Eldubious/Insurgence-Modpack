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

	/*
		Recipe modifications
	*/
	// Add more spicy ingredients to some cooking recipes
	addToTag('mynethersdelight:hot_spice', 'call_of_yucutan:chili_pepper')
	addToTag('mynethersdelight:hot_spice', 'twilightforest:fiery_blood')
	addToTag('mynethersdelight:hot_spice', 'twilightforest:fiery_tears')
	// Add Alex's Mobs Catfish to catfish tag
	addToTag('forge:raw_fishes/catfish', 'alexsmobs:raw_catfish')
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
	// Add more bookshelves to the forge tag
	const bookshelves = [
		'twilightforest:canopy_bookshelf', 'thaumon:greatwood_grimoire_bookshelf', 'thaumon:alchemists_greatwood_bookshelf', 'thaumon:classic_greatwood_bookshelf',
		'thaumon:greatwood_bookshelf', 'thaumon:silverwood_bookshelf', 'thaumon:classic_silverwood_bookshelf', 'thaumon:alchemists_silverwood_bookshelf',
		'thaumon:silverwood_grimoire_bookshelf', 'aether_redux:fieldsproot_bookshelf', 'aether_redux:blightwillow_bookshelf', 'aether_redux:cloudcap_bookshelf',
		'aether_redux:jellyshroom_bookshelf', 'aether_redux:crystal_bookshelf', 'aether_redux:glacia_bookshelf']
	bookshelves.forEach(element => addToTag('forge:bookshelves', element))
    // Add new Items as an ingredient for Golden Apple Stew
    addToTag('witherstormmod:cure_base', 'experienceobelisk:experience_jelly')
    addToTag('witherstormmod:cure_base', 'aether:swet_ball')
    addToTag('witherstormmod:cure_base', 'aether_redux:golden_swet_ball')
    addToTag('witherstormmod:cure_base', 'aether_redux:vanilla_swet_ball')
    addToTag('witherstormmod:cure_base', 'unusualend:end_blob')
	// Combine Abyssal Sacrifice recipes
	addToTag('kubejs:abyssal_sacrifice_ingredients', 'cataclysm:crystallized_coral')
	addToTag('kubejs:abyssal_sacrifice_ingredients', 'cataclysm:coral_chunk')
	// Remove Prismarite from trim materials tag
	removeFromTag('minecraft:trim_materials', 'regions_unexplored:prismarite_cluster')
	// Create an aether grass tag for the aether grass bale recipe
	addToTag('kubejs:aether_grass', 'aether_redux:short_aether_grass')
	addToTag('kubejs:aether_grass', 'ancient_aether:sky_grass')
	addToTag('kubejs:aether_grass', 'aether_redux:splitfern')
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
	

	/*
		Blacklisting items
	*/
	// Blacklist items from Eternal Stella
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'alexsmobs:shattered_dimensional_carver')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'alexsmobs:dimensional_carver')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'alexsmobs:pupfish_finder')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'aquaculture:leech')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'aquaculture:minnow')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'aquaculture:worm')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'ars_nouveau:potion_flask')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'ars_nouveau:potion_flask_amplify')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'ars_nouveau:potion_flask_extend_time')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'galosphere:preserved_flesh')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'supplementaries:bubble_blower')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'supplementaries:rope_arrow')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'supplementaries:bamboo_spikes_tipped')
	addToTag('forbidden_arcanus:modifier/eternal_incompatible', 'traveloptics:celestial_shard')
	const eyes = ['endrem:black_eye', 'endrem:cold_eye', 'endrem:corrupted_eye', 'endrem:lost_eye', 'endrem:nether_eye', 'endrem:old_eye', 'endrem:rogue_eye', 'endrem:cursed_eye',
		'endrem:evil_eye', 'endrem:guardian_eye', 'endrem:magical_eye', 'endrem:wither_eye', 'endrem:witch_eye', 'endrem:undead_eye', 'endrem:exotic_eye', 'endrem:cryptic_eye']
	eyes.forEach(element => addToTag('forbidden_arcanus:modifier/eternal_incompatible', element))
	// Blacklist backpacks from the Curio Bag & Quark backpack and have them make you overencumbered
	const backpacks = ['quark:backpack', 'sophisticatedbackpacks:backpack', 'sophisticatedbackpacks:copper_backpack', 'sophisticatedbackpacks:iron_backpack',
		'sophisticatedbackpacks:gold_backpack', 'sophisticatedbackpacks:diamond_backpack', 'sophisticatedbackpacks:netherite_backpack']
	backpacks.forEach(element => {
		addToTag('ars_elemental:blacklist_bag_item', element)
		addToTag('supplementaries:overencumbering', element)
		addToTag('quark:backpack_blocked', element)
	})

	/*
		Curios
	*/
	// Add Tarot Cards to their own slot
	const tarot_cards = ['tarotcards:tarot_deck', 'tarotcards:death', 'tarotcards:judgement', 'tarotcards:justice', 'tarotcards:strength',
		'tarotcards:temperance', 'tarotcards:the_chariot', 'tarotcards:the_devil', 'tarotcards:the_emperor', 'tarotcards:the_empress',
		'tarotcards:the_fool', 'tarotcards:the_hanged_man', 'tarotcards:the_hermit', 'tarotcards:the_hierophant', 'tarotcards:the_high_priestess',
		'tarotcards:the_lovers', 'tarotcards:the_magician', 'tarotcards:the_moon', 'tarotcards:the_star', 'tarotcards:the_sun',
		'tarotcards:the_tower', 'tarotcards:the_world', 'tarotcards:wheel_of_fortune']
	tarot_cards.forEach(element => {
		removeFromTag('curios:curio', element)
		addToTag('curios:tarotcard', element)
	})
	// Add the Spyglass to its own slot
	removeFromTag('curios:belt', 'minecraft:spyglass')
	addToTag('curios:spyglass', 'minecraft:spyglass')
	// Move Thigh slot items to new slots
	removeFromTag('curios:thighs', 'estrogen:thigh_highs')
	removeFromTag('curios:thighs', 'estrogen:estrogen_patches')
	addToTag('curios:feet', 'estrogen:thigh_highs')
	addToTag('curios:augment_slot', 'estrogen:estrogen_patches')
	// Remove talent slot from items
	const talent_items = ['traveloptics:aetherial_despair_ring', 'traveloptics:firestorm_ring', 'traveloptics:azure_ignition_bracelet',
		'traveloptics:nightstalkers_band', 'traveloptics:energy_unbound_necklace', 'traveloptics:sigil_of_the_spider_sorcerer',
		'traveloptics:amulet_of_spectral_shift', 'traveloptics:bottled_raincloud']
	talent_items.forEach(element => removeFromTag('curios:talent', element))
	// Relics quiver
	removeFromTag('curios:back', 'relics:arrow_quiver')
	addToTag('curios:belt', 'relics:arrow_quiver')
	// Elytra Booster
	removeFromTag('curios:back', 'relics:elytra_booster')
	addToTag('curios:augment_slot', 'relics:elytra_booster')
	// Move key to charm slot
	addToTag('curios:charm', 'supplementaries:key')
	// Allow terminal to be equipped anywhere
	removeFromTag('curios:belt', 'toms_storage:ts.adv_wireless_terminal')
	addToTag('curios:curio', 'toms_storage:ts.adv_wireless_terminal')
	// Add items to bundle slot
	const bundle_items = ['minecraft:shulker_box', 'minecraft:white_shulker_box', 'minecraft:light_gray_shulker_box', 'minecraft:gray_shulker_box',
		'minecraft:black_shulker_box', 'minecraft:brown_shulker_box', 'minecraft:red_shulker_box', 'minecraft:orange_shulker_box',
		'minecraft:yellow_shulker_box', 'minecraft:lime_shulker_box', 'minecraft:green_shulker_box', 'minecraft:cyan_shulker_box',
		'minecraft:light_blue_shulker_box', 'minecraft:blue_shulker_box', 'minecraft:purple_shulker_box', 'minecraft:magenta_shulker_box',
		'minecraft:pink_shulker_box', 'sophisticatedstorage:shulker_box', 'sophisticatedstorage:copper_shulker_box', 'sophisticatedstorage:iron_shulker_box',
		'sophisticatedstorage:gold_shulker_box', 'sophisticatedstorage:diamond_shulker_box', 'sophisticatedstorage:netherite_shulker_box', 'supplementaries:sack',
		'quark:seed_pouch', 'the_bumblezone:buzzing_briefcase', 'create:light_gray_toolbox', 'create:cyan_toolbox', 'create:purple_toolbox',
		'create:blue_toolbox', 'create:green_toolbox', 'create:red_toolbox', 'create:black_toolbox', 'create:brown_toolbox', 'create:white_toolbox',
		'create:orange_toolbox', 'create:magenta_toolbox', 'create:light_blue_toolbox', 'create:yellow_toolbox', 'create:lime_toolbox',
		'create:pink_toolbox', 'create:gray_toolbox']
	bundle_items.forEach(element => addToTag('curios:bundle', element))
	// Add items for the compass slot
	removeFromTag('curios:hands', 'map_atlases:atlas')
	const compass_items = ['minecraft:compass', 'minecraft:clock', 'minecraft:recovery_compass', 'supplementaries:altimeter', 'galosphere:barometer',
		'map_atlases:atlas', 'breezy:gust_gauge', 'irons_spellbooks:wayward_compass', 'travelerscompass:travelerscompass', 'the_bumblezone:honey_compass']
	compass_items.forEach(element => addToTag('curios:compass', element))


	/*
		Functionality Changes
	*/
	// Add more golden items to be unbreakable with the tarot card
	const golden_items = ['aquaculture:gold_fishing_rod', 'aquaculture:gold_fillet_knife', 'farmersdelight:golden_knife',
		'forbidden_arcanus:golden_blacksmith_gavel', 'samurai_dynasty:gold_samurai_helmet', 'samurai_dynasty:gold_samurai_chestplate',
		'samurai_dynasty:gold_samurai_leggings', 'samurai_dynasty:gold_samurai_boots', 'samurai_dynasty:gold_samurai_helmet_light',
		'samurai_dynasty:gold_samurai_chestplate_light', 'samurai_dynasty:gold_samurai_leggings_light', 'samurai_dynasty:gold_samurai_boots_light',
		'samurai_dynasty:gold_samurai_helmet_master', 'samurai_dynasty:gold_samurai_chestplate_master', 'samurai_dynasty:gold_samurai_leggings_master',
		'samurai_dynasty:gold_samurai_boots_master', 'samurai_dynasty:gold_ninja_helmet', 'samurai_dynasty:gold_ninja_chestplate',
		'samurai_dynasty:gold_ninja_boots', 'aether:golden_ring', 'aether:golden_pendant', 'twilightforest:gold_minotaur_axe', 'aether:golden_gloves',
		'cataclysm:khopesh', 'immersive_armors:divine_helmet', 'immersive_armors:divine_chestplate', 'immersive_armors:divine_leggings',
		'immersive_armors:divine_boots', 'immersive_armors:steampunk_helmet', 'immersive_armors:steampunk_chestplate', 'immersive_armors:steampunk_leggings',
		'immersive_armors:steampunk_boots']
	golden_items.forEach(element => addToTag('tarotcards:golden'))
	
	/*
		Oraganizational
    */
   	// Remove unsused items from their tags
    const silverOres = ['samurai_dynasty:silver_ore', 'samurai_dynasty:deepslate_silver_ore', 'iceandfire:silver_ore', 'iceandfire:deepslate_silver_ore']
    silverOres.forEach(item => {removeFromTag('forge:ores/silver', item)})
    const rubyOres = ['samurai_dynasty:ruby_ore', 'samurai_dynasty:deepslate_ruby_ore']
    rubyOres.forEach(item => {removeFromTag('forge:ores/ruby', item)})
    const jadeOres = ['samurai_dynasty:jade_ore', 'samurai_dynasty:deepslate_jade_ore']
    jadeOres.forEach(item => {removeFromTag('forge:ores/jade', item)})
    removeFromTag('forge:storage_blocks/raw_silver', 'iceandfire:raw_silver_block')
    removeFromTag('farmersdelight:tools/knives', 'aetherdelight:stratus_knife')
	removeFromTag('forge:tools/knives', 'aetherdelight:stratus_knife')
	removeFromTag('aquaculturedelight:kelp_rolls', 'aquaculture:sushi')
	removeFromTag('forge:moss', 'miners_delight:moss')
	addToTag('forge:moss', 'quark:moss_paste')
	removeFromTag('forge:rope', 'quark:rope')
	removeFromTag('supplementaries:ropes', 'quark:rope')
	removeFromTag('forge:rope', 'farmersdelight:rope')
	removeFromTag('supplementaries:ropes', 'farmersdelight:rope')
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
		"oceanic_delight:plate_of_stuffed_pufferfish", "aether:healing_stone", "ancient_aether:festive_gummy_swet", "hexcasting:sub_sandwich", "pineapple_delight:pineapple_pie_side",
		"pineapple_delight:pineapple_fried_rice", "pineapple_delight:pineapple_juice", "pineapple_delight:pineapple_milk_shake", "pineapple_delight:pineapple_ice_cream"]
    qualityFoods.forEach(element => addToTag('kubejs:quality_foods', element)) 
    // DEV: store length of list in global variable
    global.qualityFoodsLen = qualityFoods.length
	// All stone blocks which can be used in the Create Cobblestone Generator
	const generatorStoneTypes = [
		'minecraft:cobblestone', 'minecraft:stone', 'minecraft:basalt', 'create:limestone', 'create:scoria', 'minecraft:deepslate', 'minecraft:cobbled_deepslate',
		'minecraft:granite', 'minecraft:diorite', 'minecraft:andesite', 'minecraft:calcite', 'minecraft:tuff', 'minecraft:dripstone_block', 'minecraft:sandstone',
		'minecraft:red_sandstone', 'quark:jasper', 'quark:shale', 'quark:myalite', 'minecraft:netherrack', 'minecraft:blackstone', 'minecraft:end_stone', 'endergetic:eumus',
		'minecraft:terracotta', 'arts_and_crafts:gypsum', 'arts_and_crafts:soapstone', 'arts_and_crafts:beige_pietraforte', 'arts_and_crafts:cobbled_beige_pietraforte',
		'arts_and_crafts:hazel_pietraforte', 'arts_and_crafts:cobbled_hazel_pietraforte', 'arts_and_crafts:ivory_pietraforte', 'arts_and_crafts:cobbled_ivory_pietraforte',
		'arts_and_crafts:jet_pietraforte', 'arts_and_crafts:cobbled_jet_pietraforte', 'arts_and_crafts:marlot_pietraforte', 'arts_and_crafts:cobbled_marlot_pietraforte',
		'arts_and_crafts:ochre_pietraforte', 'arts_and_crafts:cobbled_ochre_pietraforte', 'arts_and_crafts:umber_pietraforte', 'arts_and_crafts:cobbled_umber_pietraforte',
		'arts_and_crafts:verdant_pietraforte', 'arts_and_crafts:cobbled_verdant_pietraforte', 'create:asurine', 'create:crimsite', 'create:ochrum', 'create:scorchia',
		'create:veridium', 'alexscaves:limestone', 'alexscaves:guanostone', 'alexscaves:coprolith', 'alexscaves:abyssmarine', 'alexscaves:radrock', 'alexscaves:galena',
		'the_bumblezone:sugar_infused_stone', 'the_bumblezone:sugar_infused_cobblestone', 'forbidden_arcanus:darkstone', 'aether:holystone', 'aether_redux:divinite',
		'aether_redux:driftshale', 'regions_unexplored:chalk', 'regions_unexplored:argillite', 'samurai_dynasty:spirit_stone_base', 'unusualend:warped_stone', 'unusualend:gloopslate',
		'unusualend:gloopstone', 'unusualend:raw_purpur_block', 'architects_palette:myonite', 'architects_palette:moonshale', 'architects_palette:craterstone',
		'architects_palette:nebulite', 'architects_palette:onyx', 'architects_palette:esoterrack', 'architects_palette:sunstone', 'architects_palette:heliodor_rod',
		'architects_palette:ekanite_rod', 'architects_palette:monazite_rod', 'architects_palette:wardstone', 'architects_palette:abyssaline', 'minecraft:packed_mud',
		'quark:soul_sandstone', 'minecraft:smooth_basalt', 'quark:dusky_myalite', 'architects_palette:warpstone', 'supplementaries:daub', 'minecraft:ice', 'iceandfire:dread_stone',
		'iceandfire:chared_stone', 'iceandfire:chared_cobblestone', 'iceandfire:frozen_stone', 'iceandfire:frozen_cobblestone', 'iceandfire:crackled_stone',
		'iceandfire:crackled_cobblestone', 'twilightforest:mazestone', 'twilightforest:nagastone', 'twilightforest:aurora_block', 'twilightforest:deadrock',
		'twilightforest:giant_cobblestone']
	generatorStoneTypes.forEach(element => addToTag('kubejs:create_cobblestone_generator_compatible', element))
	// Enchanting decoration items
	const ench_decor =['minecraft:candle', 'minecraft:white_candle', 'minecraft:light_gray_candle', 'minecraft:gray_candle', 'minecraft:black_candle', 'minecraft:brown_candle',
		'minecraft:red_candle', 'minecraft:orange_candle', 'minecraft:yellow_candle', 'minecraft:lime_candle', 'minecraft:green_candle', 'minecraft:cyan_candle',
		'minecraft:light_blue_candle', 'minecraft:blue_candle', 'minecraft:purple_candle', 'minecraft:magenta_candle', 'minecraft:pink_candle', 'the_bumblezone:luminescent_wax_node_red',
		'the_bumblezone:luminescent_wax_node_purple', 'the_bumblezone:luminescent_wax_node_blue', 'the_bumblezone:luminescent_wax_node_green', 'the_bumblezone:luminescent_wax_node_yellow',
		'the_bumblezone:luminescent_wax_node_white', 'the_bumblezone:luminescent_wax_channel_red', 'the_bumblezone:luminescent_wax_channel_purple', 'the_bumblezone:luminescent_wax_channel_blue',
		'the_bumblezone:luminescent_wax_channel_green', 'the_bumblezone:luminescent_wax_channel_yellow', 'the_bumblezone:luminescent_wax_channel_white', 'the_bumblezone:luminescent_wax_corner_red',
		'the_bumblezone:luminescent_wax_corner_purple', 'the_bumblezone:luminescent_wax_corner_blue', 'the_bumblezone:luminescent_wax_corner_green', 'the_bumblezone:luminescent_wax_corner_yellow',
		'the_bumblezone:luminescent_wax_corner_white', 'unusualend:citrine_candle', 'unusualend:condensed_citrine_block', 'create:experience_block', 'minecraft:lectern', 'witherstormmod:tainted_carved_pumpkin',
		'minecraft:jack_o_lantern', 'minecraft:carved_pumpkin', 'minecraft:amethyst_cluster', 'galosphere:allurite_cluster', 'galosphere:lumiere_cluster', 'galosphere:glinted_amethyst_cluster',
		'galosphere:glinted_allurite_cluster', 'galosphere:glinted_lumiere_cluster', 'quark:tiny_potato', 'supplementaries:globe', 'supplementaries:globe_sepia', 'minecraft:dragon_egg',
		'forbidden_arcanus:arcane_dragon_egg', 'wan_ancient_beasts:sniffer_skull', 'wan_ancient_beasts:eater_skull', 'wan_ancient_beasts:walker_skull', 'wan_ancient_beasts:crusher_skull',
		'wan_ancient_beasts:glider_skull', 'wan_ancient_beasts:soarer_skull', 'minecraft:skeleton_skull', 'minecraft:zombie_head', 'minecraft:creeper_head', 'supplementaries:enderman_head',
		'minecraft:wither_skeleton_skull', 'minecraft:dragon_head', 'minecraft:piglin_head', 'minecraft:player_head', 'mutantmonsters:mutant_skeleton_skull', 'forbidden_arcanus:obsidian_skull',
		'twilightforest:zombie_skull_candle', 'twilightforest:skeleton_skull_candle', 'twilightforest:wither_skeleton_skull_candle', 'twilightforest:creeper_skull_candle',
		'twilightforest:player_skull_candle', 'twilightforest:piglin_skull_candle', 'twilightforest:naga_trophy', 'twilightforest:lich_trophy', 'twilightforest:minoshroom_trophy',
		'twilightforest:hydra_trophy', 'twilightforest:knight_phantom_trophy', 'twilightforest:ur_ghast_trophy', 'twilightforest:alpha_yeti_trophy', 'twilightforest:snow_queen_trophy',
		'twilightforest:quest_ram_trophy', 'cataclysm:kobolediator_skull', 'cataclysm:draugr_head', 'cataclysm:aptrgangr_head', 'forbidden_arcanus:eternal_obsidian_skull',
		'experienceobelisk:cognitive_crystal_block', 'forbidden_arcanus:arcane_crystal_obelisk', 'forbidden_arcanus:corrupted_arcane_crystal_obelisk', 'samurai_dynasty:tanuki_statue',
		'samurai_dynasty:komainu_statue', 'samurai_dynasty:kawauso_statue', 'supplementaries:fire_pit', 'rubinated_nether:ruby_brazier', 'rubinated_nether:ruby_lava_lamp', 'supplementaries:statue',
		'lootr:trophy', 'chimes:bamboo_chimes', 'chimes:iron_chimes', 'chimes:carved_bamboo_chimes', 'chimes:copper_chimes', 'chimes:amethyst_chimes', 'chimes:glass_bells', 'supplementaries:goblet',
		'supplementaries:urn', 'endergetic:acidian_lantern', 'minecraft:sculk_shrieker', 'twilightforest:firefly', 'twilightforest:cicada', 'twilightforest:moonworm', 'irons_spellbooks:firefly_jar',
		'twilightforest:firefly_jar', 'twilightforest:cicada_jar', 'twilightforest:firefly_particle_spawner', 'create:peculiar_bell', 'create:haunted_bell', 'create:nixie_tube', 'alexscaves:beholder',
		'regions_unexplored:prismarite_cluster', 'regions_unexplored:large_prismarite_cluster', 'regions_unexplored:hanging_prismarite', 'hexcasting:amethyst_sconce', 'galosphere:pink_salt_lamp',
		'ars_nouveau:arcane_core', 'iceandfire:pixie_house_mushroom_red', 'iceandfire:pixie_house_mushroom_brown', 'iceandfire:pixie_house_oak', 'iceandfire:pixie_house_birch', 'iceandfire:pixie_house_spruce',
		'iceandfire:pixie_house_dark_oak', 'thaumon:grimoire', 'thaumon:grimoire_stack', 'thaumon:vial_rack', 'thaumon:research_notes', 'thaumon:crystal_lamp', 'thaumon:crystal_stand',
		'thaumon:retort', 'iceandfire:lectern', 'call_of_yucutan:ah_puch_idol', 'call_of_yucutan:kukulkan_idol', 'alexsmobs:void_worm_effigy', 'iceandfire:pixie_jar_0', 'iceandfire:pixie_jar_1',
		'iceandfire:pixie_jar_2', 'iceandfire:pixie_jar_3', 'iceandfire:pixie_jar_4']
	ench_decor.forEach(element => addToTag('kubejs:enchantment_decor', element))
	// A tag for game cartridges which are found in loot chests
	const game_discs = ['gamediscs:game_disc_blocktris', 'gamediscs:game_disc_tnt_sweeper', 'gamediscs:game_disc_pong']
	game_discs.forEach(element => addToTag('kubejs:chest_loot_game_discs', element))
})