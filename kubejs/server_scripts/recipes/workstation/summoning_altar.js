// Create rituals for the Summoning Altar
ServerEvents.recipes(event => {

    /*  Create a recipe that uses an Enchanted Soul as a catalyst which
        takes 4 input items and has one output */
    function itemRitual(output, inputItems) {
        event.recipes.summoningrituals.altar('forbidden_arcanus:enchanted_soul')
            .recipeTime(20)
            .input(inputItems[0])
            .input(inputItems[1])
            .input(inputItems[2])
            .input(inputItems[3])
            .itemOutput(
                SummoningOutput.item(Item.of(output))
                    .offset(0, 1, 0)
                    .spread(0, 0, 0)
            )
    }
    
    // Create entity summoning rituals based on how many input items are used
    function mobRitual(output, catalyst, inputItems) {
        if (inputItems.length == 5) {
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .input(inputItems[4])
                .mobOutput(output)

        } else if (inputItems.length == 4) {
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .input(inputItems[3])
                .mobOutput(output)

        } else if (inputItems.length == 3) {
            event.recipes.summoningrituals.altar(catalyst)
                .recipeTime(60)
                .input(inputItems[0])
                .input(inputItems[1])
                .input(inputItems[2])
                .mobOutput(output)

        } else if (inputItems.length == 2) {
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
// Apply effects to specific recipes
SummoningRituals.start(event => {

    // Wither Storm
    if (event.recipe.getId().toString() == 'kubejs:rituals/wither_storm') {
        var playerId = event.player.uuid.toString()

        // Prevent automatic summoning
        if (!event.player) event.cancel()

        event.player.potionEffects.add('minecraft:darkness', 220, 0, false, false)

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
            event.server.runCommandSilent(`execute at ${playerId} run advancement grant @a[distance=..50] only witherstormmod:main/summon_wither_storm summoned_wither_storm`)
        }, 10000)
    }
})