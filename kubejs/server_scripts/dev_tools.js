// Some development tools

// Prints a list of all item ids in container to console only if player is holding a Debug Stick
BlockEvents.rightClicked('sophisticatedstorage:netherite_barrel', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var inventory = event.block.getInventory().getAllItems()
        var str = ''

        inventory.forEach(item => {
            let id = item.id.toString()
            str += "'" + id + "', "
        })

        console.log(str.trim())
        event.player.tell(`${inventory.length} item IDs extracted!`)
        event.cancel()
    }
})

// Prints a list of the number of items in the list global.qualityFoods
BlockEvents.rightClicked('minecraft:campfire', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        event.player.tell(`Number of quality food items: ${global.qualityFoodsLen}`)
        event.cancel()
    }
})

// Prints out all nearby marker entities and their stored nbt data
BlockEvents.rightClicked('minecraft:lodestone', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var str = 'All nearby marker entities:\n\n'
        var entities = event.getServer().getEntities()

        entities.forEach(entity => {
            if (entity.getType() == 'minecraft:marker') {
                let pos = entity.getPos()
                let x = pos.x(); let y = pos.y(); let z = pos.z()
                let dimension = entity.level.dimension.toString()
                let data = entity.getNbt().data.toString()

                str += 'MARKER:\n'
                str += `Position:\n    ${dimension}\n    X: ${x}, Y: ${y}, Z: ${z}\n\n`
                str += `NBT data:\n    ${data}\n\n`
            }
        })
        event.server.tell(str)
        event.cancel()
    }
})

// Summon a marker entity in the location of the Ender Pearl Block with the nbt in the debug stick
BlockEvents.rightClicked('architects_palette:ender_pearl_block', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var pos = event.block.getPos()
        var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
        var dimensionId = event.level.getDimension().toString()
        var data = event.player.mainHandItem.getNbt()
        var cmd = ''

        if (data.type.toString() == 'block') {
            cmd = `execute in ${dimensionId} run summon minecraft:marker ${x} ${y} ${z} {data:{type:"${data.type}",block:"${data.block}"}}`
            event.server.runCommand(cmd)
            event.server.tell(cmd)
            event.block.set('minecraft:air')
            event.player.tell(`Made marker entity at: ${x} ${y} ${z} with: {data: {type:"${data.type}", block:"${data.block}"}}`)
        }
        else if (data.type.toString() == 'summon') {
            cmd = `execute in ${dimensionId} run summon minecraft:marker ${x} ${y} ${z} {data:{type:"${data.type}",func:"${data.func}",enemy:"${data.enemy}"}}`
            event.server.runCommand(cmd)
            event.block.set('minecraft:air')
            event.player.tell(`Made marker entity at: ${x} ${y} ${z} with: {data: {type:"${data.type}", func:"${data.func}", enemy:"${data.enemy}"}}`)
        }
        event.cancel()
    } 
})

// Teleport player to the Dragonrealm
BlockEvents.rightClicked('minecraft:stone_bricks', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var playerId = event.player.name.toString()
        var pos = event.block.getPos()
        var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
        
        // Clamp y value
        y = Math.min(Math.max(y, 55), 105)

        event.player.tell(`execute in kubejs:dragonrealm run tp ${playerId} ${x} ${y} ${z}`)

        server.runCommand(`execute in kubejs:dragonrealm run tp ${playerId} ${x} ${y} ${z}`)
        server.runCommand(`execute in kubejs:dragonrealm run setblock minecraft:stone_bricks ${x} ${y-1} ${z}`)
        

        //event.player.setLevel(server.getLevel(new ResourceLocation('kubejs', 'dragonrealm')))
        


        //event.player.setY(event.player.getY() + 3)
        
    }
})


const types = {0: 'fire', 1: 'ice', 2: 'lightning'}
const stages = {0: 0, 1: 25*24000, 2: 50*24000, 3: 75*24000, 4: 100*24000}
const genders = {0: true, 1: false}

// Summon a randomized Dragon with no AI
BlockEvents.rightClicked('iceandfire:dragonscale_red', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var pos = event.block.getPos()
        var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
        var dimension = event.block.getDimension().toString()

        // Randomize attributes of the dragon
        var type = types[Math.round(Math.random() * 2)]
        var stage = Math.round(Math.random() * 4)
        var age = stages[stage]
        var color = Math.round(Math.random() * 3)
        var gender = genders[Math.round(Math.random())]

        // Run summon command
        server.runCommand(`execute in ${dimension} run summon iceandfire:${type}_dragon ${x} ${y} ${z} 
            {NoAI:true,AgingDisabled:true,Variant:${color},AgeTicks:${age},PersistenceRequired:true,Gender:${gender},
            Health:1000,HomeAreaX:${x},HomeAreaY:${y},HomeAreaZ:${z},HomeDimension:"${dimension}"}`)
            
        event.block.set('minecraft:air')
        event.cancel()
    }
})

// Print out all persistent data for each portal type
// Or clear them if sneaking
BlockEvents.rightClicked('kubejs:depths_portal', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var data = server.getPersistentData()

        if (event.player.isCrouching()) {
            data.put("depths", [])
            event.player.tell('cleared this portal data!')
            event.cancel()
        }

        event.player.tell('Depths Portals:\n' + data.get("depths"))
    }
})

BlockEvents.rightClicked('kubejs:dragon_portal', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var data = server.getPersistentData()

        if (event.player.isCrouching()) {
            data.put("dragonrealm", [])
            event.player.tell('cleared this portal data!')
            event.cancel()
        }

        event.player.tell('Dragonrealm Portals:\n' + data.get("dragonrealm"))
    }
})

BlockEvents.rightClicked('kubejs:inbetween_portal', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var data = server.getPersistentData()

        if (event.player.isCrouching()) {
            data.put("inbetween", [])
            event.player.tell('cleared this portal data!')
            event.cancel()
        }

        event.player.tell('Inbetween Portals:\n' + data.get("inbetween"))
    }
})

// Print out all of persistent data's keys for the server or increment a test value on the data
BlockEvents.rightClicked('architects_palette:unobtanium_block', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var data = server.getPersistentData()

        if (event.player.isCrouching()) {
            
            data.put("debug", {"foo": 69, "bar": 420})
            event.player.tell('incremented debug counter')
        }
        else event.player.tell("Server's Persistent Data:\n" + data.get("debug"))
    }
})

// Setblock command tests
BlockEvents.rightClicked('minecraft:jungle_wood', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var pos = event.block.getPos()
        var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
        var dimension = event.block.getDimension().toString()

        var cmd = `execute in ${dimension} run setblock ${x} ${y+1} ${z} minecraft:jungle_wood`
        server.runCommandSilent(cmd)
        cmd = `execute in ${dimension} run fill ${x-1} ${y+2} ${z-1} ${x+1} ${y+2} ${z+1} minecraft:jungle_leaves`
        server.runCommandSilent(cmd)
    }
})

// Give all quality foods
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
BlockEvents.rightClicked('minecraft:soul_campfire', event => {
    if (event.player.mainHandItem.id.toString() == 'minecraft:debug_stick') {
        var server = event.getServer()
        var playerId = event.player.uuid
        event.player.tell('giving all quality foods...')
        qualityFoods.forEach(element => {
            let cmd = `execute at ${playerId} run summon minecraft:item ~ ~ ~ {Item:{id:"${element}",Count:1}}`
            server.runCommandSilent(cmd)
        })
    }
})
