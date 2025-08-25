// Create and modify rituals for the Summoning Altar
ServerEvents.recipes(event => {

    /*
        Rituals for crafting items
    */
    function itemRitual(output, catalyst, inputItems) {
        if (inputItems.length == 2) {       // There are 2 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(120)
                .input(inputItems[0])
                .input(inputItems[1])
                .itemOutput(output)
        }
        if (inputItems.length == 3) {       // There are 3 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(120)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .itemOutput(output)
        }
        if (inputItems.length == 4) {       // There are 4 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(120)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .itemOutput(output)
        }
        else if (inputItems.length == 5) {       // There are 5 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(120)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .input(inputItems[4])
                .itemOutput(output)
        }
        else if (inputItems.length == 6) {       // There are 6 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(120)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .input(inputItems[4])
                .input(inputItems[5])
                .itemOutput(output)
        }
        else if (inputItems.length == 8) {  // There are 8 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(120)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .input(inputItems[4])
                .input(inputItems[5])
                .input(inputItems[6])
                .input(inputItems[7])
                .itemOutput(output)
        }
        else if (inputItems.length == 9) {  // There are 8 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(120)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .input(inputItems[4])
                .input(inputItems[5])
                .input(inputItems[6])
                .input(inputItems[7])
                .input(inputItems[8])
                .itemOutput(output)
        }
    }

    itemRitual('summoningrituals:altar', 'minecraft:enchanting_table', ['2x minecraft:red_wool', '2x #forge:ingots/gold', 'minecraft:candle', 'minecraft:wither_skeleton_skull', '2x create:chromatic_compound'])
    itemRitual('architects_palette:unobtanium_block', 'minecraft:amethyst_block',
        [
            '4x irons_spellbooks:arcane_ingot', '4x samurai_dynasty:amethyst_ingot', '4x traveloptics:void_spellweave_ingot', '4x experienceobelisk:cognitive_alloy',
            '4x forbidden_arcanus:obsidian_ingot', '4x unusualend:pearlescent_ingot', '4x forbidden_arcanus:stellarite_piece', '4x minecraft:netherite_ingot',
            '4x ae2:fluix_crystal'
        ]
    )
    // Recipes for creating Gate Pearls
    event.remove({output: 'gateways:gate_pearl'})
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"gateways:basic/blaze"}'), 'irons_spellbooks:divine_pearl', ['2x minecraft:blaze_rod', '2x minecraft:blaze_powder'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"gateways:basic/enderman"}'), 'irons_spellbooks:divine_pearl', ['2x minecraft:ender_pearl', '2x forbidden_arcanus:ender_pearl_fragment'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"gateways:basic/slime"}'), 'irons_spellbooks:divine_pearl', ['2x minecraft:slime_ball', '2x create:dough'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"gateways:endless/blaze"}'), 'irons_spellbooks:divine_pearl', [ '4x minecraft:blaze_rod', '8x minecraft:blaze_powder', 'irons_spellbooks:fire_upgrade_orb', 'ars_nouveau:manipulation_essence'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"gateways:emerald_grove"}'), 'irons_spellbooks:divine_pearl', ['2x minecraft:rotten_flesh', '6x minecraft:wheat_seeds', '6x minecraft:carrot', '4x #minecraft:saplings'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"gateways:overworldian_nights"}'), 'irons_spellbooks:divine_pearl', ['3x minecraft:rotten_flesh', '3x minecraft:bone', '3x minecraft:string', '3x minecraft:gunpowder', 'minecraft:spider_eye'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"gateways:hellish_fortress"}'), 'irons_spellbooks:divine_pearl', ['minecraft:wither_skeleton_skull', '2x minecraft:gold_block', '3x minecraft:blaze_rod'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:basic/ender_dragon"}'), 'irons_spellbooks:divine_pearl', ['2x quark:dragon_scale', '2x minecraft:diamond', '2x minecraft:chorus_fruit'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:basic/warden"}'), 'irons_spellbooks:divine_pearl', ['2x minecraft:echo_shard', 'apotheosis:warden_tendril'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:endless_blood"}'), 'irons_spellbooks:divine_pearl', ['3x forbidden_arcanus:aureal_bottle', '3x irons_spellbooks:blood_vial', '2x samurai_dynasty:oni_horn', '3x forbidden_arcanus:soul'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:raid_hideout"}'), 'irons_spellbooks:divine_pearl', ['minecraft:totem_of_undying', '2x illagerinvasion:platinum_sheet', '2x minecraft:emerald', 'ars_nouveau:conjuration_essence'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:treasure_vault"}'), 'irons_spellbooks:divine_pearl', ['4x minecraft:diamond', '4x #forge:ingots/gold', '4x rubinated_nether:ruby', '4x call_of_yucutan:jade', '4x samurai_dynasty:aquamarine', '4x samurai_dynasty:onyx'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:basic/shulker"}'), 'irons_spellbooks:divine_pearl', ['2x minecraft:shulker_shell', '4x minecraft:popped_chorus_fruit'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:basic/wilden"}'), 'irons_spellbooks:divine_pearl', ['ars_nouveau:wilden_horn', 'ars_nouveau:wilden_spike', 'ars_nouveau:wilden_wing', '2x ars_nouveau:source_gem'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:enchanted_library"}'), 'irons_spellbooks:divine_pearl', ['kubejs:hyper_enchant_catalyst', '4x ars_nouveau:source_gem', 'ars_nouveau:conjuration_essence', 'irons_spellbooks:arcane_rune', '4x irons_spellbooks:arcane_essence'])
    itemRitual(Item.of('gateways:gate_pearl', 1, '{gateway:"kubejs:edge_of_the_world"}'), 'irons_spellbooks:divine_pearl', ['forbidden_arcanus:stellarite_piece', '2x minecraft:echo_shard', '2x forbidden_arcanus:ender_pearl_fragment'])


    /*
        Rituals for summoning entities
    */
    function mobRitual(output, catalyst, inputItems) {
        if (inputItems.length == 5) {           // There are 5 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .input(inputItems[4])
                .mobOutput(output)

        } else if (inputItems.length == 4) {    // There are 4 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .mobOutput(output)

        } else if (inputItems.length == 3) {    // There are 3 item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .mobOutput(output)

        } else if (inputItems.length == 2) {    // There are two item inputs
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .mobOutput(output)
        }
    }
    // Create rituals for some generic mobs
    mobRitual('minecraft:wandering_trader', 'minecraft:emerald', ['minecraft:bell', '3x minecraft:emerald_block'])
    // Create rituals for all summonable mobs from Withered Beacon
    mobRitual('witherstormmod:sickened_bee', 'forbidden_arcanus:corrupt_soul', ['2x witherstormmod:withered_flesh', '4x minecraft:honeycomb', '2x minecraft:honey_bottle'])
    mobRitual('witherstormmod:sickened_skeleton', 'forbidden_arcanus:corrupt_soul', ['3x witherstormmod:withered_bone', '3x minecraft:bone'])
    mobRitual('witherstormmod:sickened_vindicator', 'forbidden_arcanus:corrupt_soul', ['4x witherstormmod:withered_flesh', 'minecraft:emerald', 'minecraft:iron_axe'])
    mobRitual('witherstormmod:sickened_zombie', 'forbidden_arcanus:corrupt_soul', ['3x witherstormmod:withered_flesh', '3x minecraft:rotten_flesh'])
    mobRitual('witherstormmod:sickened_wolf', 'forbidden_arcanus:corrupt_soul', ['3x witherstormmod:withered_flesh', '2x minecraft:bone', 'minecraft:name_tag'])
    mobRitual('witherstormmod:sickened_cow', 'forbidden_arcanus:corrupt_soul', ['2x witherstormmod:withered_flesh', '2x minecraft:beef', '2x minecraft:leather'])
    mobRitual('witherstormmod:sickened_parrot', 'forbidden_arcanus:corrupt_soul', ['8x #forge:seeds', 'witherstormmod:withered_flesh', 'minecraft:name_tag'])
    mobRitual('witherstormmod:sickened_pig', 'forbidden_arcanus:corrupt_soul', ['3x witherstormmod:withered_flesh', '3x minecraft:porkchop'])
    mobRitual('witherstormmod:sickened_pillager', 'forbidden_arcanus:corrupt_soul', ['3x witherstormmod:withered_flesh', '2x minecraft:arrow', 'minecraft:crossbow'])
    mobRitual('witherstormmod:sickened_creeper', 'forbidden_arcanus:corrupt_soul', ['3x witherstormmod:tainted_dust', '3x minecraft:gunpowder'])
    mobRitual('witherstormmod:sickened_cat', 'forbidden_arcanus:corrupt_soul', ['3x witherstormmod:withered_bone', '2x #minecraft:fishes', 'minecraft:name_tag'])
    mobRitual('witherstormmod:sickened_phantom', 'forbidden_arcanus:corrupt_soul', ['2x witherstormmod:withered_bone', '2x witherstormmod:withered_flesh', 'minecraft:phantom_membrane'])
    mobRitual('witherstormmod:sickened_villager', 'forbidden_arcanus:corrupt_soul', ['2x witherstormmod:withered_flesh', '2x minecraft:rotten_flesh', '2x minecraft:emerald', 'minecraft:golden_apple'])
    mobRitual('witherstormmod:sickened_mushroom_cow', 'forbidden_arcanus:corrupt_soul', ['2x witherstormmod:withered_flesh', '2x witherstormmod:tainted_mushroom', '2x minecraft:beef'])
    mobRitual('witherstormmod:sickened_spider', 'forbidden_arcanus:corrupt_soul', ['3x witherstormmod:withered_flesh', '3x witherstormmod:withered_spider_eye'])
    mobRitual('witherstormmod:sickened_chicken', 'forbidden_arcanus:corrupt_soul', ['witherstormmod:withered_bone', 'witherstormmod:withered_flesh', 'minecraft:feather'])
    mobRitual('witherstormmod:withered_symbiont', 'minecraft:wither_skeleton_skull', ['witherstormmod:tainted_dust_block', 'witherstormmod:infected_flesh_block', '2x witherstormmod:withered_flesh', 'witherstormmod:withered_bone'])
    // Create rituals for boss mobs
    mobRitual('cataclysm:amethyst_crab', 'cataclysm:blessed_amethyst_crab_meat', ['10x minecraft:amethyst_shard', '5x quark:moss_paste', '5x minecraft:deepslate', 'minecraft:amethyst_block', 'minecraft:moss_block'])



    // Function to create rituals which need sacrifices
    function mobSacrifice(output, catalyst, inputItems, sacrifice) {
        if (inputItems.length == 3) {
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .sacrifice(sacrifice)
                .sacrificeRegion(4, 4)
                .mobOutput(output)
        } else if (inputItems.length == 2) {
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .sacrifice(sacrifice)
                .sacrificeRegion(4, 4)
                .mobOutput(output)
        }
    }
    mobSacrifice('estrogen:moth', 'ars_nouveau:manipulation_essence', ['3x minecraft:yellow_wool', '3x minecraft:pink_wool'], 'minecraft:bee')
    mobSacrifice('minecraft:skeleton_horse', 'minecraft:wither_rose', ['4x minecraft:bone', '4x minecraft:bone_meal', 'ars_elemental:anima_essence'], 'minecraft:horse')
    mobSacrifice('minecraft:zombie_horse', 'minecraft:wither_rose', ['4x minecraft:rotten_flesh', '2x forbidden_arcanus:rotten_leather', 'ars_elemental:anima_essence'], 'minecraft:horse')
})

/*
    Event handler for summoning the Wither Storm and the Tainted Village Gateway
*/
SummoningRituals.start(event => {
    

    // If the current recipe is the one which summons the Wither Storm
    if (event.recipe.getId().toString() == 'kubejs:rituals/wither_storm') {
        if (!event.player) event.cancel()   // Prevent automatic summoning
        
        var playerId = event.player.uuid.toString()

        // Grant the darkness effect to all players withing 30 blocks of the summoner
        event.server.runCommandSilent(`execute at ${playerId} run effect give @a[distance=..30] minecraft:darkness 11`)

        // Play sounds for all players within 50 blocks of the summoner
        // 1.5s -> 3s -> 4.5s -> 6s -> 7s -> 8s -> 9s -> 9.5s -> 10s
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.warden.heartbeat hostile @a[distance=..50] ~ ~ ~ 100 0`)
        }, 1500);
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.warden.heartbeat hostile @a[distance=..50] ~ ~ ~ 100 0.25`)
        }, 3000);
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.warden.heartbeat hostile @a[distance=..50] ~ ~ ~ 100 0.5`)
        }, 4500);
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.warden.heartbeat hostile @a[distance=..50] ~ ~ ~ 100 0.75`)
        }, 6000);
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.warden.heartbeat hostile @a[distance=..50] ~ ~ ~ 100 1`)
        }, 7000);
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.warden.heartbeat hostile @a[distance=..50] ~ ~ ~ 100 1`)
        }, 8000);
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.warden.heartbeat hostile @a[distance=..50] ~ ~ ~ 100 1.25`)
        }, 9000);
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.warden.heartbeat hostile @a[distance=..50] ~ ~ ~ 100 1.5`)
        }, 9500);
        setTimeout(() => {
            event.server.runCommandSilent(`execute at ${playerId} run playsound minecraft:entity.wither.spawn hostile @a[distance=..50] ~ ~ ~ 100 0.75`)
            // Also grant the advancement for summoning the Wither Storm to all players within 50 blocks
            event.server.runCommandSilent(`execute at ${playerId} run advancement grant @a[distance=..50] only witherstormmod:main/root`)
            event.server.runCommandSilent(`execute at ${playerId} run advancement grant @a[distance=..50] only witherstormmod:main/summon_wither_storm`)
        }, 10000)
    }

    // If the current recipe is for the Gate Pearl
    else if (event.recipe.getId().toString() == 'kubejs:rituals/gate_pearl_tainted_village') {
        if (!event.player) event.cancel()   // Prevent automatic summoning
        
        // Only craft item if player has advancement for summoning the Wither Storm
        if (!event.player.isAdvancementDone('witherstormmod:main/summon_wither_storm')) {
            // Explain the requirements to the player
            var playerId = event.player.uuid.toString()
            let cmd = `execute as ${playerId} run title @s actionbar {"type":"translatable","translate":"actionbar.kubejs.wither_storm_gate_pearl_recipe_error"}`
            event.server.runCommandSilent(cmd)

            event.cancel()
        }
    }
})