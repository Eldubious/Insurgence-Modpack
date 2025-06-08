// Remove recipes for items
ServerEvents.recipes(event => {

    /*
        Remove items used as quest rewards
    */
    // Winemaker's Set
    event.remove({id: 'vinery:winemaker_boots'})
    event.remove({id: 'vinery:winemaker_leggings'})
    event.remove({id: 'vinery:winemaker_apron'})
    event.remove({id: 'vinery:straw_hat'})

    /*
        Remove recipes from unused methods and items
    */
    event.remove({type: 'rubinated_nether:freezing'})
    event.remove({type: 'architects_palette:warping'})
    event.remove({type: 'witherstormmod:item_craft_super_beacon'})
    event.remove({type: 'witherstormmod:resummon_super_beacon'})

    event.remove({id: 'sophisticatedstorage:backpack_auto_smelting_upgrade_from_storage_auto_smelting_upgrade'})
    event.remove({id: 'sophisticatedstorage:backpack_auto_blasting_upgrade_from_storage_auto_blasting_upgrade'})
    event.remove({id: 'sophisticatedstorage:backpack_auto_smoking_upgrade_from_storage_auto_smoking_upgrade'})
    event.remove({id: 'sophisticatedstorage:backpack_feeding_upgrade_from_storage_feeding_upgrade'})
    event.remove({id: 'sophisticatedstorage:backpack_advanced_feeding_upgrade_from_storage_advanced_feeding_upgrade'})
    event.remove({id: 'sophisticatedstorage:backpack_magnet_upgrade_from_storage_magnet_upgrade'})
    event.remove({id: 'sophisticatedstorage:backpack_advanced_magnet_upgrade_from_storage_advanced_magnet_upgrade'})

    /*
        Prevent log spam and remove recipes which are not parsed properly.
    */
    event.remove({id: 'create:cutting/compat/nethers_exoticism/ramboutan_log'})
    event.remove({id: 'create:cutting/compat/nethers_exoticism/ramboutan_wood'})

    event.remove({id: 'forbidden_arcanus:edelwood_chest_boat'})
    event.remove({id: 'forbidden_arcanus:aurum_chest_boat'})

    event.remove({id: 'samurai_dynasty:mask_amethyst_samurai_helmet'})
    event.remove({id: 'samurai_dynasty:mask_quartz_samurai_helmet'})
    event.remove({id: 'samurai_dynasty:mask_netherite_samurai_helmet'})
    event.remove({id: 'samurai_dynasty:mask_straw_hat'})

    event.remove({id: 'aether_treasure_reforging:phoenix_upgrade_smithing_template'})
    event.remove({id: 'aether_treasure_reforging:valkyrie_upgrade_smithing_template'})
    event.remove({id: 'aether_treasure_reforging:neptune_upgrade_smithing_template'})

    event.remove({id: 'aether_redux:genesis_dark_gummy_swet'})

    event.remove({id: 'lost_aether_content:gravitite_shield'})

    event.remove({id: 'deep_aether:stratus_smithing_template_from_gravitite'})
    event.remove({id: 'deep_aether:gravitite_ring'})
    event.remove({id: 'deep_aether:stratus_ingot'})

    event.remove({id: 'aetherdelight:addon_redux/chromaberry_crate'})
    event.remove({id: 'aetherdelight:addon_redux/chromaberry_from_crate'})
    event.remove({id: 'aetherdelight:addon_redux/quickroot_crate'})
    event.remove({id: 'aetherdelight:addon_redux/quickroot_from_crate'})
    event.remove({id: 'aetherdelight:addon_redux/aether_grass_from_bale'})
    event.remove({id: 'aetherdelight:addon_redux/straw'})
    event.remove({id: 'aetherdelight:addon_redux/oat_cookie'})
    event.remove({id: 'aetherdelight:addon_redux/strange_root_salad'})
    event.remove({id: 'aetherdelight:addon_redux/luxbuds_salad'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/knife/frosted_purple_flower'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/knife/sweetblossom'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/knife/gilded_white_flower'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/knife/tall_cloudcap'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/knife/blighted_fungi'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/axe/fieldsprout_log'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/axe/fieldsprout_wood'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/axe/fieldsprout_petals'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/axe/springshroom_hyphae'})
    event.remove({id: 'aetherdelight:addon_redux/cutting/axe/springshroom_stem'})

    event.remove({id: 'unusualend:music_disc_endstone_golem'})

    event.remove({id: 'twilightdelight:teardrop_sword'})
    event.remove({id: 'twilightdelight:rainbow_ice_cream'})
    event.remove({id: 'twilightdelight:twilight_ice_cream'})
    event.remove({id: 'twilightdelight:refreshing_ice_cream'})
    event.remove({id: 'twilightdelight:neapolitan/glacier_cake_slice'})
    event.remove({id: 'twilightdelight:neapolitan/phytochemical_cake_slice'})
    event.remove({id: 'twilightdelight:neapolitan/aurora_cake_slice'})
    event.remove({id: 'twilightdelight:neapolitan/torchberry_cake_slice'})

    event.remove({id: 'farmersrespite:chilidog_alt'})
    
    event.remove({id: 'nethersdelight:cutting/hoglin_sausage_alt'})
    
    /*
        Remove recipes for balance
    */
    event.remove({id: 'forbidden_arcanus:enchanted_golden_apple'})

    /*
        Recipes that override the ones for the Seashelf and Hellshelf items.
        The id of each recipe that is overridden is given below.
        I couldn't override them with their new recipes bc of how the Hephaestus Forge works.
    */
    // apotheosis:seashelf
    event.remove({id: 'ars_nouveau:agronomic_sourcelink'})
    // apotheosis:heart_seashelf
    event.remove({id: 'forbidden_arcanus:quantum_catcher'})
    // apotheosis:hellshelf
    event.remove({id: 'experienceobelisk:metamorpher/transforming_focus'})
    // apotheosis:glowing_hellshelf
    event.remove({id: 'ars_nouveau:volcanic_sourcelink'})
    // apotheosis:blazing_hellshelf
    event.remove({id: 'alexscaves:ominous_catalyst'})
})