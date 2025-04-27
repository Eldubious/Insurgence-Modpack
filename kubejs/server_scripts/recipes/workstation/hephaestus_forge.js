// Remove recipes for items which are crafted in the Hephaestus Forge
ServerEvents.recipes(event => {

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
    // Bookshelves

})