// Create and modify recipes for the Imbuement Chamber
ServerEvents.recipes(event => {

    // Register a recipe
    function imbuement(output, catalyst, pedestalItems, source) {
        event.recipes.ars_nouveau.imbuement(
            catalyst, output, source, pedestalItems
        )
    }

    // Warped Moss
    event.remove({id: 'ars_nouveau:conjuration_essence_to_end_stone'})
    event.remove([{id: 'unusualend:warped_moss_via_wart_block'}, {id: 'unusualend:warped_moss_via_press_create_compa'}])
    imbuement('unusualend:warped_moss', 'minecraft:moss_carpet',
        [
            'minecraft:warped_wart_block',
            'minecraft:end_stone',
            'minecraft:chorus_flower'
        ],
        500
    )
    // Blank Runestone
    imbuement('irons_spellbooks:blank_rune', 'minecraft:stone',
        [
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem'
        ],
        2000
    )
    imbuement('irons_spellbooks:blank_rune', 'minecraft:deepslate',
        [
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem'
        ],
        2000
    )
    // Cognitive Flux
    event.remove({id: 'experienceobelisk:cognitive_flux'})
    imbuement('experienceobelisk:cognitive_flux', 'mahoutsukai:powdered_diamond',
        [
            'minecraft:soul_sand',
            'minecraft:lapis_lazuli',
            'minecraft:quartz'
        ],
        2000
    )
    // Abjuration Essence
    event.remove({id: 'ars_nouveau:imbuement_abjuration_essence'})
    imbuement('ars_nouveau:abjuration_essence', 'ars_nouveau:source_gem',
        [
            'irons_spellbooks:cooldown_rune',
            'minecraft:milk_bucket',
            'ars_nouveau:bastion_pod'
        ],
        1500
    )
    // Conjuration Essence
    event.remove({id: 'ars_nouveau:imbuement_conjuration_essence'})
    imbuement('ars_nouveau:conjuration_essence', 'ars_nouveau:source_gem',
        [
            'irons_spellbooks:evocation_rune',
            'quark:soul_bead',
            'minecraft:emerald'
        ],
        1500
    )
    // Manipulation Essence
    event.remove({id: 'ars_nouveau:imbuement_manipulation_essence'})
    imbuement('ars_nouveau:manipulation_essence', 'ars_nouveau:source_gem',
        [
            'irons_spellbooks:arcane_rune',
            'minecraft:clock',
            'forbidden_arcanus:arcane_crystal'
        ],
        1500
    )
    // Anima Essence
    event.remove({id: 'ars_elemental:imbuement_anima_essence'})
    imbuement('ars_elemental:anima_essence', 'ars_nouveau:source_gem',
        [
            'irons_spellbooks:blood_rune',
            'minecraft:wither_skeleton_skull',
            'iceandfire:dragonbone'
        ],
        1500
    )
    // Air Essence
    event.remove({id: 'ars_nouveau:imbuement_air_essence'})
    imbuement('ars_nouveau:air_essence', 'ars_nouveau:source_gem',
        [
            'irons_spellbooks:holy_rune',
            'forbidden_arcanus:golden_feather',
            'quark:bottled_cloud'
        ],
        1500
    )
    // Earth Essence
    event.remove({id: 'ars_nouveau:imbuement_earth_essence'})
    imbuement('ars_nouveau:earth_essence', 'ars_nouveau:source_gem',
        [
            'irons_spellbooks:nature_rune',
            'minecraft:raw_iron',
            'ars_nouveau:mendosteen_pod'
        ],
        1500
    )
    // Fire Essence
    event.remove({id: 'ars_nouveau:imbuement_fire_essence'})
    imbuement('ars_nouveau:fire_essence', 'ars_nouveau:source_gem',
        [
            'irons_spellbooks:fire_rune',
            'rubinated_nether:molten_ruby',
            'architects_palette:nether_brass_ingot'
        ],
        1500
    )
    // Water Essence
    event.remove({id: 'ars_nouveau:imbuement_water_essence'})
    imbuement('ars_nouveau:water_essence', 'ars_nouveau:source_gem',
        [
            'irons_spellbooks:protection_rune',
            'minecraft:heart_of_the_sea',
            'architects_palette:algal_brick'
        ],
        1500
    )
    // Withered Bone
    imbuement('witherstormmod:withered_bone', 'minecraft:bone',
        [
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:dark_rune',
            'iceandfire:witherbone'
        ],
        3000
    )
    // Withered Flesh
    imbuement('witherstormmod:withered_flesh', 'minecraft:rotten_flesh',
        [
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:dark_rune',
            'iceandfire:witherbone'
        ],
        3000
    )
    // Withered Spider Eye
    imbuement('witherstormmod:withered_spider_eye', 'minecraft:spider_eye',
        [
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:dark_rune',
            'iceandfire:witherbone'
        ],
        3000
    )
    // Tainted Dust
    imbuement('witherstormmod:tainted_dust', 'hexcasting:amethyst_dust',
        [
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:dark_rune',
            'iceandfire:witherbone'
        ],
        3000
    )
    // Corrupt Soul
    imbuement('forbidden_arcanus:corrupt_soul', 'forbidden_arcanus:soul',
        [
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:dark_matter',
            'rubinated_nether:bleeding_obsidian'
        ],
        2000
    )
    // Enchanted Soul
    imbuement('forbidden_arcanus:enchanted_soul', 'forbidden_arcanus:soul',
        [
            'forbidden_arcanus:xpetrified_orb',
            'minecraft:experience_bottle',
            'forbidden_arcanus:deorum_ingot'
        ],
        4000
    )

    /*
        Architects Palette decoration blocks made originally from warping
    */
    event.remove({type: 'architects_palette:warping'})
    // Hadaline
    imbuement('architects_palette:hadaline', 'architects_palette:abyssaline', ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone'], 50)
    imbuement('architects_palette:hadaline_bricks', 'architects_palette:abyssaline_bricks', ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone'], 50)
    imbuement('architects_palette:hadaline_tiles', 'architects_palette:abyssaline_tiles', ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone'], 50)
    imbuement('architects_palette:chiseled_hadaline_bricks', 'architects_palette:chiseled_abyssaline_bricks', ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone'], 50)
    imbuement('architects_palette:hadaline_pillar', 'architects_palette:abyssaline_pillar', ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone'], 50)
    imbuement('architects_palette:hadaline_plating', 'architects_palette:abyssaline_plating', ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone'], 50)
    imbuement('architects_palette:hadaline_lamp', 'architects_palette:abyssaline_lamp', ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone'], 50)
    // Entrails
    imbuement('architects_palette:entrails', 'architects_palette:rotten_flesh_block', ['minecraft:rotten_flesh', 'minecraft:rotten_flesh'], 50)
    // Onyx
    imbuement('architects_palette:onyx', 'minecraft:granite', [], 50)
    imbuement('architects_palette:onyx_bricks', 'quark:granite_bricks', [], 50)
    imbuement('architects_palette:onyx_pillar', 'create:granite_pillar', [], 50)
    // Esoterrack
    imbuement('architects_palette:esoterrack', 'minecraft:andesite', [], 50)
    imbuement('architects_palette:esoterrack_bricks', 'create:small_andesite_bricks', [], 50)
    imbuement('architects_palette:esoterrack_pillar', 'create:andesite_pillar', [], 50)
    // Nebulite
    imbuement('architects_palette:nebulite', 'minecraft:diorite', [], 50)
    imbuement('architects_palette:polished_nebulite', 'minecraft:polished_diorite', [], 50)
    // Warpstone
    imbuement('architects_palette:warpstone', 'minecraft:clay', [], 50)
    // Moonshale
    imbuement('architects_palette:moonshale', 'minecraft:stone', [], 50)
    imbuement('architects_palette:moonshale_bricks', 'minecraft:stone_bricks', [], 50)
    imbuement('architects_palette:chiseled_moonshale', 'minecraft:chiseled_stone_bricks', [], 50)
    imbuement('architects_palette:cracked_moonshale_bricks', 'minecraft:cracked_stone_bricks', [], 50)
    imbuement('architects_palette:craterstone', 'minecraft:cobblestone', [], 50)
    // Moonstone | Sunstone
    imbuement('architects_palette:moonstone', 'architects_palette:sunstone', [], 50)
    imbuement('architects_palette:sunstone', 'architects_palette:moonstone', [], 50)
})