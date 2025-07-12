// Create and modify recipes for the Cutting Board
ServerEvents.recipes(event => {
    
    // Register a recipe
    function cuttingBoard(output, input, tool, sound) {
        event.recipes.farmersdelight.cutting(
            input, tool, output, sound
        )
    }

    // Raw Catfish
    cuttingBoard('6x aquaculture:fish_fillet_raw', 'alexsmobs:raw_catfish', '#forge:tools/knives', 'farmersdelight:block.cutting_board.knife')
    // Fresh Marlin
    cuttingBoard('10x aquaculture:fish_fillet_raw', 'tropicraft:fresh_marlin', '#forge:tools/knives', 'farmersdelight:block.cutting_board.knife')
    // Pineapple Cubes
    cuttingBoard('2x tropicraft:pineapple_cubes', 'pineapple_delight:pineapple_side', '#forge:tools/knives', 'farmersdelight:block.cutting_board.knife')
    // Coconut Chunks
    cuttingBoard('4x tropicraft:coconut_chunk', 'tropicraft:coconut', '#forge:tools/knives', 'farmersdelight:block.cutting_board.knife')
    // Strange Root
    cuttingBoard('2x forbidden_arcanus:strange_root', 'forbidden_arcanus:petrified_root', '#forge:shears', 'minecraft:entity.sheep.shear')

    // Dreadsteel Paint Kits
    event.remove([{id: 'dreadsteel:kit_default'}, {id: 'dreadsteel:kit_white'}, {id: 'dreadsteel:kit_black'}, {id: 'dreadsteel:kit_bronze'}])
    cuttingBoard('dreadsteel:kit_default', 'iceandfire:bestiary', 'arts_and_crafts:magenta_paintbrush', 'arts_and_crafts:item.paintbrush.paint')
    cuttingBoard('dreadsteel:kit_white', 'iceandfire:bestiary', 'arts_and_crafts:light_blue_paintbrush', 'arts_and_crafts:item.paintbrush.paint')
    cuttingBoard('dreadsteel:kit_black', 'iceandfire:bestiary', 'arts_and_crafts:lime_paintbrush', 'arts_and_crafts:item.paintbrush.paint')
    cuttingBoard('dreadsteel:kit_bronze', 'iceandfire:bestiary', 'arts_and_crafts:red_paintbrush', 'arts_and_crafts:item.paintbrush.paint')

    /*
        Equipment Salvaging using the Cutting Board
    */
    // Register a recipe
    function salvage(type, input, outputs) {
        // Using Hammers
        if (type == 0) {
            event.recipes.farmersdelight.cutting(
                input,
                '#kubejs:can_salvage_equipment',
                outputs,
                'create:mechanical_press_activation_compounded_1'
            )
        }
        // Using Shears
        else if (type == 1) {
            event.recipes.farmersdelight.cutting(
                input,
                '#forge:shears',
                outputs,
                'minecraft:entity.sheep.shear'
            )
        }
    }
    // Remove Horse Armor crushing recipes
    event.remove({id: 'create:crushing/leather_horse_armor'})
    event.remove({id: 'create:crushing/iron_horse_armor'})
    event.remove({id: 'create:crushing/golden_horse_armor'})
    event.remove({id: 'create:crushing/diamond_horse_armor'})

    /*
        Create new salvaging recipes for the Cutting Board
    */

    // Horse Armor
    salvage(0, 'minecraft:iron_horse_armor', [Item.of('minecraft:iron_ingot', 2), Item.of('minecraft:leather', 1), Item.of('minecraft:iron_ingot', 2).withChance(0.30)])
    salvage(0, 'minecraft:golden_horse_armor', [Item.of('minecraft:gold_ingot', 2), Item.of('minecraft:leather', 1), Item.of('minecraft:gold_ingot', 2).withChance(0.30)])
    salvage(0, 'minecraft:diamond_horse_armor', [Item.of('minecraft:diamond', 2), Item.of('minecraft:leather', 1), Item.of('minecraft:diamond', 2).withChance(0.30)])
    // Weapons & Armor
    salvage(0, 'the_bumblezone:bee_cannon', [Item.of('the_bumblezone:sugar_infused_cobblestone', 5), Item.of('minecraft:gunpowder').withChance(0.80)])
    salvage(0, 'minecraft:bow', [Item.of('minecraft:stick', 2), Item.of('minecraft:string'), Item.of('minecraft:string').withChance(0.75)])
    salvage(0, 'minecraft:crossbow', [Item.of('minecraft:stick', 2), Item.of('minecraft:string'), Item.of('minecraft:iron_ingot').withChance(0.75), Item.of('minecraft:tripwire_hook').withChance(0.40)])
    salvage(0, 'minecraft:elytra', [Item.of('minecraft:phantom_membrane', 2), Item.of('minecraft:phantom_membrane').withChance(0.50)])
    salvage(0, 'twilightforest:twilight_scepter', [Item.of('minecraft:bone'), Item.of('minecraft:ender_pearl').withChance(0.75)])
    salvage(0, 'twilightforest:lifedrain_scepter', [Item.of('minecraft:bone'), Item.of('minecraft:fermented_spider_eye').withChance(0.75)])
    salvage(0, 'twilightforest:zombie_scepter', [Item.of('minecraft:bone'), Item.of('minecraft:rotten_flesh').withChance(0.75)])
    salvage(0, 'twilightforest:fortification_scepter', [Item.of('minecraft:bone'), Item.of('minecraft:golden_apple').withChance(0.75)])
    salvage(0, 'irons_spellbooks:blood_staff', [Item.of('minecraft:stick', 2), Item.of('irons_spellbooks:blood_rune').withChance(0.75), Item.of('irons_spellbooks:blood_upgrade_orb').withChance(0.15)])
    salvage(0, 'irons_spellbooks:magehunter', [Item.of('irons_spellbooks:arcane_ingot'), Item.of('irons_spellbooks:arcane_ingot').withChance(0.50)])
    salvage(0, 'irons_spellbooks:keeper_flamberge', [Item.of('minecraft:netherite_scrap').withChance(0.80), Item.of('minecraft:netherite_scrap').withChance(0.10)])
    salvage(0, 'cataclysm:coral_bardiche', [Item.of('minecraft:stick'), Item.of('cataclysm:crystallized_coral').withChance(0.75), Item.of('cataclysm:crystallized_coral_fragments', 2).withChance(0.50)])
    salvage(0, 'cataclysm:coral_spear', [Item.of('minecraft:stick'), Item.of('cataclysm:crystallized_coral').withChance(0.75), Item.of('cataclysm:crystallized_coral_fragments', 2).withChance(0.50)])
    salvage(0, 'cataclysm:athame', [Item.of('cataclysm:crystallized_coral_fragments'), Item.of('cataclysm:crystallized_coral_fragments', 1).withChance(0.50)])
    salvage(0, 'cataclysm:khopesh', [Item.of('cataclysm:ancient_metal_ingot'), Item.of('cataclysm:ancient_metal_nugget', 2).withChance(0.33)])
    salvage(0, 'cataclysm:infernal_forge', [Item.of('cataclysm:lava_power_cell', 3), Item.of('cataclysm:lava_power_cell').withChance(0.80), Item.of('traveloptics:pyro_spellweave_ingot').withChance(0.80)])
    salvage(0, 'cataclysm:tidal_claws', [Item.of('traveloptics:aqua_upgrade_orb'), Item.of('traveloptics:abyssal_spellweave_ingot').withChance(0.80)])
    salvage(0, 'cataclysm:gauntlet_of_guard', [Item.of('irons_spellbooks:ender_upgrade_orb'), Item.of('traveloptics:void_spellweave_ingot').withChance(0.80)])
    salvage(0, 'minecraft:totem_of_undying', [Item.of('minecraft:gold_nugget', 3), Item.of('minecraft:gold_nugget', 1).withChance(0.33), Item.of('minecraft:emerald', 1), Item.of('minecraft:emerald', 1).withChance(0.25)])
    salvage(0, 'unusualend:void_totem', [Item.of('minecraft:gold_nugget', 3), Item.of('minecraft:gold_nugget', 1).withChance(0.33), Item.of('minecraft:emerald', 1), Item.of('minecraft:emerald', 1).withChance(0.25)])
    salvage(0, 'savage_and_ravage:cleaver_of_beheading', [Item.of('samurai_dynasty:steel_ingot', 1), Item.of('samurai_dynasty:steel_nugget', 2).withChance(0.33)])
    salvage(0, 'savage_and_ravage:wand_of_freezing', [Item.of('minecraft:packed_ice', 2), Item.of('minecraft:packed_ice', 1).withChance(0.5), Item.of('minecraft:diamond', 1).withChance(0.2)])
    salvage(0, 'savage_and_ravage:mask_of_dishonesty', [Item.of('create:experience_nugget', 1), Item.of('create:experience_nugget', 1).withChance(0.5)])
    salvage(0, 'savage_and_ravage:conch_of_conjuring', [Item.of('ars_nouveau:conjuration_essence', 1).withChance(0.50)])
    // Spellbooks
    salvage(1, 'irons_spellbooks:necronomicon_spell_book', [Item.of('minecraft:leather', 2), Item.of('minecraft:paper').withChance(0.90), Item.of('irons_spellbooks:mana_upgrade_orb').withChance(0.15)])
    salvage(1, 'irons_spellbooks:evoker_spell_book', [Item.of('minecraft:leather', 2), Item.of('minecraft:paper').withChance(0.90), Item.of('irons_spellbooks:evocation_upgrade_orb').withChance(0.15)])
    salvage(1, 'irons_spellbooks:villager_spell_book', [Item.of('minecraft:leather', 2), Item.of('minecraft:paper').withChance(0.90), Item.of('irons_spellbooks:holy_upgrade_orb').withChance(0.15)])
    salvage(1, 'irons_spellbooks:blaze_spell_book', [Item.of('minecraft:leather', 2), Item.of('minecraft:paper').withChance(0.90), Item.of('irons_spellbooks:fire_upgrade_orb').withChance(0.15)])
    salvage(1, 'irons_spellbooks:rotten_spell_book', [Item.of('forbidden_arcanus:rotten_leather', 2), Item.of('minecraft:paper').withChance(0.90), Item.of('irons_spellbooks:blood_upgrade_orb').withChance(0.15)])
    salvage(1, 'irons_spellbooks:ruined_book', [Item.of('minecraft:leather', 2), Item.of('minecraft:sculk_vein').withChance(0.90), Item.of('irons_spellbooks:cooldown_upgrade_orb').withChance(0.15)])
    // Music Discs
    salvage(0, 'minecraft:disc_fragment_5', [Item.of('minecraft:echo_shard').withChance(0.10)])
    salvage(0, 'alexscaves:disc_fragment_tasty', [Item.of('alexscaves:peppermint_powder').withChance(0.45)])
    salvage(0, 'alexscaves:disc_fragment_fusion', [Item.of('alexscaves:sulfur_dust').withChance(0.45)])
    salvage(0, 'unusualend:disc_fragment_flying_ships', [Item.of('ends_delight:chorus_fruit_grain').withChance(0.60)])
    // Accessories
    const relics = ['relics:amphibian_boot', 'relics:aqua_walker', 'relics:arrow_quiver', 'relics:bastion_ring', 'relics:blazing_flask', 'relics:chorus_inhibitor',
        'relics:drowned_belt', 'relics:elytra_booster', 'relics:enders_hand', 'relics:holy_locket', 'relics:horse_flute', 'relics:hunter_belt', 'relics:ice_breaker',
        'relics:ice_skates', 'relics:infinity_ham', 'relics:jellyfish_necklace', 'relics:leather_belt', 'relics:magic_mirror', 'relics:magma_walker', 'relics:midnight_robe',
        'relics:rage_glove', 'relics:reflection_necklace', 'relics:roller_skates', 'relics:shadow_glaive', 'relics:space_dissector', 'relics:spatial_sign', 'relics:spore_sack',
        'relics:wool_mitten']
    relics.forEach(item => salvage(0, item, [Item.of('relics:relic_experience_bottle'), Item.of('relics:relic_experience_bottle').withChance(0.50)]))
    salvage(0, 'cataclysm:sandstorm_in_a_bottle', [Item.of('quark:clear_shard', 2), Item.of('minecraft:sand'), Item.of('ars_nouveau:air_essence').withChance(0.60)])
    salvage(1, '#tarotcards:tarot_cards', [Item.of('minecraft:gold_nugget', 5), Item.of('minecraft:gold_nugget', 3).withChance(0.50)])
    // Resources
    salvage(0, 'cataclysm:remnant_skull', [Item.of('cataclysm:koboleton_bone', 2), Item.of('cataclysm:ancient_metal_nugget', 2).withChance(0.33)])
    salvage(0, 'cataclysm:crystallized_coral', [Item.of('minecraft:fire_coral'), Item.of('minecraft:tube_coral'), Item.of('minecraft:brain_coral'), Item.of('minecraft:diamond').withChance(0.33)])
    salvage(0, 'forbidden_arcanus:dragon_scale', ['3x quark:dragon_scale'])
})