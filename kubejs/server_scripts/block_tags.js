// Add or Remove block tags from blocks
ServerEvents.tags('block', event => {

    // Takes a tag name and a resource location
    function addToTag(tag, item) {
        event.add(tag, item)
    }

    // Add Ambrosium Campfire as a heat source
    addToTag('minecraft:campfires', 'ancient_aether:ambrosium_campfire')

    // Add Altar of Fire as a heat source (because why not)
    addToTag('farmersdelight:heat_sources', 'cataclysm:altar_of_fire')

    const portals = ['kubejs:depths_portal', 'kubejs:dragon_portal', 'kubejs:inbetween_portal']
    portals.forEach(element => {
        // Prevent pickup and moving
        addToTag('witherstormmod:wither_storm_block_blacklist', element)
        addToTag('witherstormmod:wither_storm_small_cluster_blacklist', element)
        addToTag('alexscaves:unmovable', element)
        addToTag('alexscaves:resists_magnetron_body_building', element)
        addToTag('supplementaries:un_rotatable', element)
        addToTag('mutantmonsters:endersoul_hand_holdable_immune', element)
        addToTag('mutantmonsters:mutant_enderman_holdable_immune', element)
        addToTag('twilightforest:antibuilder_ignores', element)
        addToTag('ars_nouveau:gravity_blacklist', element)

        // Prevent destruction
        addToTag('alexscaves:nuke_proof', element)
        addToTag('minecraft:dragon_immune', element)
        addToTag('minecraft:wither_immune', element)
        addToTag('cataclysm:clawdian_immune', element)
        addToTag('cataclysm:scylla_immune', element)
        addToTag('cataclysm:leviathan_immune', element)
        addToTag('cataclysm:remnant_immune', element)
        addToTag('cataclysm:altar_destroy_immune', element)
        addToTag('cataclysm:ignis_immune', element)
        addToTag('cataclysm:harbinger_immune', element)
        addToTag('cataclysm:maledictus_immune', element)
        addToTag('cataclysm:netherite_monstrosity_immune', element)
        addToTag('the_bumblezone:sentry_watcher/forced_never_destroy', element)
        addToTag('aether:slider_unbreakable', element)
        addToTag('aether:valkyrie_queen_unbreakable', element)
    })
})