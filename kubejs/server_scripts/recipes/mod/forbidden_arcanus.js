// Create and remove recipes for Forbidden & Arcanus items
ServerEvents.recipes(event => {

    /*
        Remove recipes for items meant to be crafted in the Hephaestus Forge
    */
    // Advanced Materials
    event.remove({id: 'create:crafting/materials/electron_tube'})
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
    event.remove({id: 'create:sequenced_assembly/sturdy_sheet'})
    event.remove([{id: 'ars_elemental:mark_of_mastery'}, {id: 'ars_elemental:imbuement_mark_of_mastery'}])
    // Materials
    event.remove({id: 'experienceobelisk:bibliophage'})
    event.remove({id: 'apotheosis:prismatic_web'})
    // Charms
    event.remove({id: 'ars_elemental:siren_charm'})
    event.remove({id: 'ars_elemental:firenando_charm'})
    event.remove({id: 'ars_nouveau:starbuncle_charm'})
    event.remove({id: 'ars_nouveau:drygmy_charm'})
    event.remove({id: 'ars_nouveau:whirlisprig_charm'})
    event.remove({id: 'ars_nouveau:wixie_charm'})
    event.remove({id: 'tarotcards:tarot_deck'})
    event.remove({id: 'ars_elemental:air_bangle'})
    event.remove({id: 'ars_elemental:anima_bangle'})
    event.remove({id: 'ars_elemental:earth_bangle'})
    event.remove({id: 'ars_elemental:water_bangle'})
    event.remove({id: 'ars_elemental:fire_bangle'})
    event.remove({id: 'ars_elemental:summon_bangle'})
    event.remove({id: 'ars_elemental:base_bangle'})
    event.remove({id: 'ars_nouveau:ring_of_lesser_discount'})
    event.remove({id: 'ars_nouveau:ring_of_greater_discount'})
    event.remove({id: 'ars_nouveau:amulet_of_mana_boost'})
    event.remove({id: 'ars_nouveau:amulet_of_mana_regen'})
    event.remove({id: 'hexcasting:lens'})
    event.remove({id: 'experienceobelisk:enlightened_amulet'})
    event.remove({id: 'ars_nouveau:belt_of_levitation'})
    event.remove({id: 'ars_nouveau:belt_of_unstable_gifts'})
    event.remove({id: 'ars_nouveau:jump_ring'})


    // Convert Soulless Sand back into Soul Sand


    // Automatically extract Soul from Soul Sand
    event.recipes.create.splashing(
        [
            'forbidden_arcanus:soul',
            Item.of('forbidden_arcanus:soulless_sand').withChance(0.80)
        ],
        'minecraft:soul_sand'
    )

    // Upgrade Soul into Corrupt Soul
    event.recipes.ars_nouveau.imbuement(
        'forbidden_arcanus:soul',
        'forbidden_arcanus:corrupt_soul',
        3000,
        [
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:dark_matter',
            'rubinated_nether:bleeding_obsidian'
        ]
    )

    // Upgrade Soul into Enchanted Soul
    event.recipes.ars_nouveau.imbuement(
        'forbidden_arcanus:soul',
        'forbidden_arcanus:enchanted_soul',
        5000,
        [
            'forbidden_arcanus:xpetrified_orb',
            'minecraft:experience_bottle',
            'forbidden_arcanus:deorum_block'
        ]
    )




    // Make Enchanted Golden Apple use Forge for recipe
    event.remove({id: 'forbidden_arcanus:enchanted_golden_apple'})
})