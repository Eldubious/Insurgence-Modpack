// Modify and create biome tags
ServerEvents.tags('worldgen/biome', event => {

    // Takes a tag name and a resource location
    function addToTag(tag, item) {
        event.add(tag, item)
    }

    // Takes a tag name and a resource location
    function removeFromTag(tag, item) {
        event.remove(tag, item)
    }

    // Biomes found in the dragonrealm
    const dragonrealm_biomes = ["regions_unexplored:autumnal_maple_forest", "regions_unexplored:barley_fields", "regions_unexplored:clover_plains", "regions_unexplored:eucalyptus_forest",
        "regions_unexplored:frozen_pine_taiga", "regions_unexplored:frozen_tundra", "regions_unexplored:grassland", "regions_unexplored:highland_fields", "regions_unexplored:icy_heights",
        "regions_unexplored:maple_forest", "regions_unexplored:marsh", "regions_unexplored:mauve_hills", "regions_unexplored:rocky_meadow", "regions_unexplored:poppy_fields",
        "regions_unexplored:rainforest", "regions_unexplored:silver_birch_forest", "regions_unexplored:sparse_rainforest", "regions_unexplored:spires", "regions_unexplored:temperate_grove"]

    // Biomes found in the Depths
    const depths_biomes = ["regions_unexplored:prismachasm", "regions_unexplored:redstone_caves", "minecraft:deep_dark", "kubejs:dragon_hollow", "kubejs:asurine_caves", "kubejs:crimson_caves", "kubejs:mossy_fields", "kubejs:dragon_hollow"]
    
    /*
        Add/Remove biome tags for biomes found only in the Dragonrealm
     */

    // Iterate through all biomes in the Dragonrealm
    dragonrealm_biomes.forEach(biome => {
        addToTag('kubejs:is_dragonrealm', biome)
        addToTag('kubejs:has_no_monster_rooms', biome)
        
        // Add tags
        addToTag('alexscaves:has_no_underground_cabins', biome)
        addToTag('aether_redux:has_wyndsprouts', biome)
        addToTag('breezy:more_wind', biome)
        addToTag('minecraft:without_wandering_trader_spawns', biome)
        addToTag('minecraft:without_patrol_spawns', biome)
        addToTag('realmrpg_wyrms:ender_wyrm_spawn', biome)
        addToTag('realmrpg_wyrms:red_wyrm_spawn', biome)

        // Remove vanilla tags
        removeFromTag('minecraft:is_overworld', biome)
        removeFromTag('minecraft:is_forest', biome)
        removeFromTag('minecraft:is_hill', biome)
        removeFromTag('minecraft:is_jungle', biome)
        removeFromTag('minecraft:is_mountain', biome)
        removeFromTag('minecraft:has_structure/mineshaft', biome)
        removeFromTag('minecraft:has_structure/igloo', biome)
        removeFromTag('minecraft:has_structure/jungle_temple', biome)
        removeFromTag('minecraft:has_structure/pillager_outpost', biome)
        removeFromTag('minecraft:has_structure/ruined_portal_standard', biome)
        removeFromTag('minecraft:has_structure/ruined_portal_swamp', biome)
        removeFromTag('minecraft:has_structure/swamp_hut', biome)
        removeFromTag('minecraft:has_structure/village_plains', biome)
        removeFromTag('minecraft:has_structure/village_snowy', biome)
        // Remove forge tags
        removeFromTag('forge:is_cold/overworld', biome)
        removeFromTag('forge:is_dense/overworld', biome)
        removeFromTag('forge:is_hot/overworld', biome)
        removeFromTag('forge:is_sparse/overworld', biome)
        removeFromTag('forge:is_wet/overworld', biome)
        removeFromTag('forge:is_plains', biome)
        removeFromTag('forge:is_plateau', biome)
        removeFromTag('forge:is_snowy', biome)
        removeFromTag('forge:is_swamp', biome)
    })
    // Add tags to specific biomes
    // Allow moths to spawn in these biomes
    addToTag('estrogen:spawns_moth', 'regions_unexplored:maple_forest')
    addToTag('estrogen:spawns_moth', 'regions_unexplored:autumnal_maple_forest')
    addToTag('estrogen:spawns_moth', 'regions_unexplored:silver_birch_forest')
    addToTag('estrogen:spawns_moth', 'regions_unexplored:temperate_grove')
    // Allow frosted prison to generate in these biomes
    addToTag('cataclysm:has_structure/frosted_prison', 'regions_unexplored:frozen_pine_taiga')
    addToTag('cataclysm:has_structure/frosted_prison', 'regions_unexplored:frozen_tundra')
    addToTag('cataclysm:has_structure/frosted_prison', 'regions_unexplored:icy_heights')
    addToTag('cataclysm:has_structure/frosted_prison', 'regions_unexplored:spires')
    // Allow floating nipe to generate in these biomes
    addToTag('forbidden_arcanus:has_structure/nipe_always_floating', 'regions_unexplored:grassland')
    addToTag('forbidden_arcanus:has_structure/nipe_always_floating', 'regions_unexplored:marsh')
    addToTag('forbidden_arcanus:has_structure/nipe_always_floating', 'regions_unexplored:barley_fields')
    addToTag('forbidden_arcanus:has_structure/nipe_always_floating', 'regions_unexplored:poppy_fields')
    addToTag('forbidden_arcanus:has_structure/nipe_always_floating', 'regions_unexplored:highland_fields')
    // Allow iceologer to spawn in these biomes
    addToTag('savage_and_ravage:has_monster/iceologer', 'regions_unexplored:frozen_pine_taiga')
    addToTag('savage_and_ravage:has_monster/iceologer', 'regions_unexplored:frozen_tundra')
    addToTag('savage_and_ravage:has_monster/iceologer', 'regions_unexplored:icy_heights')
    addToTag('savage_and_ravage:has_monster/iceologer', 'regions_unexplored:spires')

    // Allow custom dragon nests to spawn
    // Fire Dragons
    addToTag('kubejs:has_structure/fire_dragon_nest', 'regions_unexplored:grassland')
    addToTag('kubejs:has_structure/fire_dragon_nest', 'regions_unexplored:poppy_fields')
    addToTag('kubejs:has_structure/fire_dragon_nest', 'regions_unexplored:barley_fields')
    addToTag('kubejs:has_structure/fire_dragon_nest', 'regions_unexplored:temperate_grove')
    addToTag('kubejs:has_structure/fire_dragon_nest', 'regions_unexplored:silver_birch_forest')
    addToTag('kubejs:has_structure/fire_dragon_nest', 'regions_unexplored:clover_plains')
    // Ice Dragons
    addToTag('kubejs:has_structure/ice_dragon_nest', 'regions_unexplored:frozen_tundra')
    addToTag('kubejs:has_structure/ice_dragon_nest', 'regions_unexplored:frozen_pine_taiga')
    addToTag('kubejs:has_structure/ice_dragon_nest', 'regions_unexplored:icy_heights')
    addToTag('kubejs:has_structure/ice_dragon_nest', 'regions_unexplored:autumnal_maple_forest')
    addToTag('kubejs:has_structure/ice_dragon_nest', 'regions_unexplored:maple_forest')
    addToTag('kubejs:has_structure/ice_dragon_nest', 'regions_unexplored:spires')
    // Lightning Dragons
    addToTag('kubejs:has_structure/lightning_dragon_nest', 'regions_unexplored:rainforest')
    addToTag('kubejs:has_structure/lightning_dragon_nest', 'regions_unexplored:sparse_rainforest')
    addToTag('kubejs:has_structure/lightning_dragon_nest', 'regions_unexplored:eucalyptus_forest')
    addToTag('kubejs:has_structure/lightning_dragon_nest', 'regions_unexplored:marsh')
    addToTag('kubejs:has_structure/lightning_dragon_nest', 'regions_unexplored:highland_fields')
    addToTag('kubejs:has_structure/lightning_dragon_nest', 'regions_unexplored:rocky_meadow')
    addToTag('kubejs:has_structure/lightning_dragon_nest', 'regions_unexplored:mauve_hills')

    // Iterate through all biomes in The Depths
    depths_biomes.forEach(biome => {
        addToTag('kubejs:is_depths', biome)
        addToTag('kubejs:has_no_monster_rooms', biome)

        // Add tags
        addToTag('kubejs:has_structure/deep_monster_room', biome)
        addToTag('alexsmobs:spawns_murmurs_ignore_height', biome)
        addToTag('minecraft:mineshaft_blocking', biome)

        // Remove tags
        removeFromTag('alexscaves:has_no_underground_cabins', biome)
        removeFromTag('minecraft:has_structure/mineshaft', biome)
        removeFromTag('minecraft:is_overworld', biome)
        removeFromTag('forge:is_cave', biome)
    })

    // Add tags to Reality Marble
    addToTag('alexsmobs:spawns_red_gusters', 'mahoutsukai:marble')
    addToTag('breezy:more_wind', 'mahoutsukai:marble')
    addToTag('samurai_dynasty:has_structure/structures', 'mahoutsukai:marble')
})