// Create and modify recipes for the Millstone and Crushing Wheel
ServerEvents.recipes(event => {

    // Register both a Millstone and Crushing wheel recipe (for ores)
    function crush(oreInput, oreOutput, oreAmt, expNugAmt, stoneBlock) {
        millstone(oreInput,
            [
                Item.of(oreOutput, oreAmt),
                Item.of(oreOutput, 1).withChance(0.5),
                Item.of('create:experience_nugget', expNugAmt).withChance(0.75),
                Item.of(stoneBlock).withChance(0.12)
            ]
        )
        crushingWheel(oreInput,
            [
                Item.of(oreOutput, oreAmt + 1),
                Item.of(oreOutput, 1).withChance(0.5),
                Item.of('create:experience_nugget', expNugAmt).withChance(0.75),
                Item.of(stoneBlock).withChance(0.12)
            ]
        )
    }

    // Register a Millstone recipe
    function millstone(input, outputs) {
        event.recipes.create.milling(
            outputs, input
        )
    }

    // Register a Crushing Wheel recipe
    function crushingWheel(input, outputs) {
        event.recipes.create.crushing(
            outputs, input
        )
    }

    // Crushed ore recipes
    event.remove([{id: 'create:crushing/coal_ore'}, {id: 'create:crushing/deepslate_coal_ore'}])
    crush('minecraft:coal_ore', 'minecraft:coal', 1, 1, 'minecraft:cobblestone')
    crush('minecraft:deepslate_coal_ore', 'minecraft:coal', 1, 1, 'minecraft:cobbled_deepslate')
    crush('alexscaves:coprolith_coal_ore', 'minecraft:coal', 1, 1, 'alexscaves:coprolith')
    event.remove([{id: 'create:crushing/iron_ore'}, {id: 'create:crushing/deepslate_iron_ore'}])
    crush('minecraft:iron_ore', 'create:crushed_raw_iron', 1, 1, 'minecraft:cobblestone')
    crush('minecraft:deepslate_iron_ore', 'create:crushed_raw_iron', 1, 1, 'minecraft:cobbled_deepslate')
    crush('alexscaves:galena_iron_ore', 'create:crushed_raw_iron', 1, 1, 'alexscaves:galena')
    event.remove([{id: 'create:crushing/copper_ore'}, {id: 'create:crushing/deepslate_copper_ore'}])
    crush('minecraft:copper_ore', 'create:crushed_raw_copper', 5, 1, 'minecraft:cobblestone')
    crush('minecraft:deepslate_copper_ore', 'create:crushed_raw_copper', 5, 1, 'minecraft:cobbled_deepslate')
    event.remove([{id: 'create:crushing/gold_ore'}, {id: 'create:crushing/deepslate_gold_ore'}, {id: 'create:crushing/nether_gold_ore'}, {id: 'create:crushing/gilded_blackstone'}])
    crush('minecraft:gold_ore', 'create:crushed_raw_gold', 1, 2, 'minecraft:cobblestone')
    crush('minecraft:deepslate_gold_ore', 'create:crushed_raw_gold', 1, 2, 'minecraft:cobbled_deepslate')
    crush('minecraft:nether_gold_ore', 'minecraft:gold_nugget', 16, 1, 'minecraft:netherrack')
    crush('minecraft:gilded_blackstone', 'minecraft:gold_nugget', 16, 1, 'minecraft:blackstone')
    event.remove([{id: 'create:crushing/lapis_ore'}, {id: 'create:crushing/deepslate_lapis_ore'}])
    crush('minecraft:lapis_ore', 'minecraft:lapis_lazuli', 11, 1, 'minecraft:cobblestone')
    crush('minecraft:deepslate_lapis_ore', 'minecraft:lapis_lazuli', 11, 1, 'minecraft:cobbled_deepslate')
    event.remove([{id: 'create:crushing/redstone_ore'}, {id: 'create:crushing/deepslate_redstone_ore'}])
    crush('minecraft:redstone_ore', 'minecraft:redstone', 6, 1, 'minecraft:cobblestone')
    crush('minecraft:deepslate_redstone_ore', 'minecraft:redstone', 6, 1, 'minecraft:cobbled_deepslate')
    crush('alexscaves:guanostone_redstone_ore', 'minecraft:redstone', 6, 1, 'alexscaves:guanostone')
    event.remove([{id: 'create:crushing/emerald_ore'}, {id: 'create:crushing/deepslate_emerald_ore'}])
    crush('minecraft:emerald_ore', 'minecraft:emerald', 1, 1, 'minecraft:cobblestone')
    crush('minecraft:deepslate_emerald_ore', 'minecraft:emerald', 1, 1, 'minecraft:cobbled_deepslate')
    event.remove([{id: 'create:crushing/diamond_ore'}, {id: 'create:crushing/deepslate_diamond_ore'}])
    crush('minecraft:diamond_ore', 'minecraft:diamond', 1, 1, 'minecraft:cobblestone')
    crush('minecraft:deepslate_diamond_ore', 'minecraft:diamond', 1, 1, 'minecraft:cobbled_deepslate')
    event.remove([{id: 'create:crushing/zinc_ore'}, {id: 'create:crushing/deepslate_zinc_ore'}])
    crush('create:zinc_ore', 'create:crushed_raw_zinc', 1, 1, 'minecraft:cobblestone')
    crush('create:deepslate_zinc_ore', 'create:crushed_raw_zinc', 1, 1, 'minecraft:cobbled_deepslate')
    event.remove({id: 'create:crushing/silver_ore'})
    crush('galosphere:silver_ore', 'create:crushed_raw_silver', 1, 1, 'minecraft:cobblestone')
    crush('galosphere:deepslate_silver_ore', 'create:crushed_raw_silver', 1, 1, 'minecraft:cobbled_deepslate')
    event.remove({id: 'create:crushing/nether_quartz_ore'})
    crush('minecraft:nether_quartz_ore', 'minecraft:quartz', 2, 1, 'minecraft:netherrack')
    crush('ancient_aether:aether_quartz_ore', 'minecraft:quartz', 2, 1, 'aether:holystone')
    event.remove({id: 'create:crushing/compat/aether/ambrosium_ore'})
    crush('aether:ambrosium_ore', 'aether:ambrosium_shard', 1, 1, 'aether:holystone')
    event.remove({id: 'create:crushing/compat/aether/zanite_ore'})
    crush('aether:zanite_ore', 'aether:zanite_gemstone', 1, 1, 'aether:holystone')
    event.remove({id: 'create:crushing/raw_uranium'})
    // Ores which do not have a default recipe
    crush('alexscaves:radrock_uranium_ore', 'alexscaves:uranium', 1, 1, 'alexscaves:radrock')
    crush('alexscaves:energized_galena_scarlet', 'alexscaves:raw_scarlet_neodymium', 1, 1, 'alexscaves:galena')
    crush('alexscaves:energized_galena_azure', 'alexscaves:raw_azure_neodymium', 1, 1, 'alexscaves:galena')
    crush('aether:gravitite_ore', 'aether_redux:raw_gravitite', 1, 1, 'aether:holystone')
    crush('aether_redux:veridium_ore', 'aether_redux:raw_veridium', 1, 1, 'aether:holystone')
    crush('ancient_aether:valkyrum_ore', 'aether_redux:raw_valkyrum', 1, 1, 'aether:holystone')
    crush('iceandfire:sapphire_ore', 'iceandfire:sapphire_gem', 1, 1, 'minecraft:cobblestone')
    crush('call_of_yucutan:jade_ore', 'call_of_yucutan:jade', 1, 1, 'minecraft:cobblestone')
    crush('call_of_yucutan:deepslate_jade_ore', 'call_of_yucutan:jade', 1, 1, 'minecraft:cobbled_deepslate')
    crush('samurai_dynasty:onyx_ore', 'samurai_dynasty:onyx', 1, 1, 'minecraft:cobblestone')
    crush('samurai_dynasty:deepslate_onyx_ore', 'samurai_dynasty:onyx', 1, 1, 'minecraft:cobbled_deepslate')
    crush('samurai_dynasty:aquamarine_ore', 'samurai_dynasty:aquamarine', 1, 1, 'minecraft:cobblestone')
    crush('samurai_dynasty:deepslate_aquamarine_ore', 'samurai_dynasty:aquamarine', 1, 1, 'minecraft:cobbled_deepslate')
    crush('rubinated_nether:nether_ruby_ore', 'rubinated_nether:ruby', 1, 1, 'minecraft:netherrack')
    crush('rubinated_nether:molten_ruby_ore', 'rubinated_nether:ruby', 2, 1, 'minecraft:magma_block')
    crush('rubinated_nether:rubinated_blackstone', 'rubinated_nether:ruby_shard', 16, 1, 'minecraft:blackstone')
    crush('forbidden_arcanus:xpetrified_ore', 'forbidden_arcanus:xpetrified_orb', 1, 1, 'minecraft:cobblestone')
    crush('forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:arcane_crystal', 1, 1, 'minecraft:cobblestone')
    crush('forbidden_arcanus:deepslate_arcane_crystal_ore', 'forbidden_arcanus:arcane_crystal', 1, 1, 'minecraft:cobbled_deepslate')
    crush('forbidden_arcanus:gilded_darkstone', 'forbidden_arcanus:deorum_nugget', 4, 1, 'forbidden_arcanus:darkstone')
    crush('forbidden_arcanus:runic_stone', 'forbidden_arcanus:rune', 1, 1, 'minecraft:cobblestone')
    crush('forbidden_arcanus:runic_deepslate', 'forbidden_arcanus:rune', 1, 1, 'minecraft:cobbled_deepslate')
    crush('forbidden_arcanus:runic_darkstone', 'forbidden_arcanus:rune', 1, 1, 'forbidden_arcanus:darkstone')
    // Blocks
    millstone('minecraft:ancient_debris', ['minecraft:netherite_scrap', Item.of('minecraft:netherite_scrap').withChance(0.2)])
    crushingWheel('minecraft:ancient_debris', ['minecraft:netherite_scrap', Item.of('minecraft:netherite_scrap').withChance(0.6)])
    millstone('irons_spellbooks:arcane_debris', ['irons_spellbooks:arcane_salvage', Item.of('irons_spellbooks:arcane_salvage').withChance(0.2)])
    crushingWheel('irons_spellbooks:arcane_debris', ['irons_spellbooks:arcane_salvage', Item.of('irons_spellbooks:arcane_salvage').withChance(0.6)])
    millstone('regions_unexplored:raw_redstone_block', ['2x minecraft:redstone', Item.of('minecraft:redstone').withChance(0.2)])
    crushingWheel('regions_unexplored:raw_redstone_block', ['2x minecraft:redstone', Item.of('minecraft:redstone').withChance(0.6)])
    millstone('regions_unexplored:redstone_bulb', ['2x minecraft:redstone', Item.of('minecraft:redstone').withChance(0.2)])
    crushingWheel('regions_unexplored:redstone_bulb', ['2x minecraft:redstone', Item.of('minecraft:redstone').withChance(0.6)])
    millstone('forbidden_arcanus:stella_arcanum', ['forbidden_arcanus:stellarite_piece', Item.of('forbidden_arcanus:stellarite_piece').withChance(0.2)])
    crushingWheel('forbidden_arcanus:stella_arcanum', ['forbidden_arcanus:stellarite_piece', Item.of('forbidden_arcanus:stellarite_piece').withChance(0.6)])
    millstone('minecraft:sculk', ['2x create:experience_nugget', Item.of('create:experience_nugget').withChance(0.25)])
    crushingWheel('minecraft:sculk', ['2x create:experience_nugget', Item.of('create:experience_nugget').withChance(0.5)])
    millstone('unusualend:shiny_gloopstone', ['unusualend:shiny_crystal', Item.of('unusualend:shiny_crystal').withChance(0.25), Item.of('unusualend:end_blob').withChance(0.2)])
    crushingWheel('unusualend:shiny_gloopstone', ['unusualend:shiny_crystal', Item.of('unusualend:shiny_crystal').withChance(0.5), Item.of('unusualend:end_blob').withChance(0.2)])
    // Copy recipes from Crushing Wheel
    millstone('minecraft:moss_block', [Item.of('quark:moss_paste', 2), Item.of('quark:moss_paste').withChance(0.1)])
    millstone('minecraft:netherrack', ['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.5)])
    millstone('unusualend:gloopslate', [Item.of('unusualend:end_blob').withChance(0.1)])
    millstone('unusualend:gloopstone', [Item.of('unusualend:end_blob').withChance(0.2)])

    // Mahou Tsukai powdered item recipes
    millstone('create:crushed_raw_iron', ['mahoutsukai:powdered_iron'])
    crushingWheel('create:crushed_raw_iron', ['2x mahoutsukai:powdered_iron', Item.of('mahoutsukai:powdered_iron').withChance(0.20)])
    millstone('create:crushed_raw_gold', ['mahoutsukai:powdered_gold'])
    crushingWheel('create:crushed_raw_gold', ['2x mahoutsukai:powdered_gold', Item.of('mahoutsukai:powdered_gold').withChance(0.20)])
    millstone('#forge:ender_pearls', ['mahoutsukai:powdered_ender'])
    crushingWheel('#forge:ender_pearls', ['2x mahoutsukai:powdered_ender', Item.of('mahoutsukai:powdered_ender').withChance(0.20)])
    millstone('minecraft:ender_eye', ['mahoutsukai:powdered_eye'])
    crushingWheel('minecraft:ender_eye', ['2x mahoutsukai:powdered_eye', Item.of('mahoutsukai:powdered_eye').withChance(0.20)])
    millstone('minecraft:diamond', ['mahoutsukai:powdered_diamond'])
    crushingWheel('minecraft:diamond', ['2x mahoutsukai:powdered_diamond', Item.of('mahoutsukai:powdered_diamond').withChance(0.20)])
    millstone('minecraft:emerald', ['mahoutsukai:powdered_emerald'])
    crushingWheel('minecraft:emerald', ['2x mahoutsukai:powdered_emerald', Item.of('mahoutsukai:powdered_emerald').withChance(0.20)])
    millstone('minecraft:quartz', ['mahoutsukai:powdered_quartz'])
    crushingWheel('minecraft:quartz', ['2x mahoutsukai:powdered_quartz', Item.of('mahoutsukai:powdered_quartz').withChance(0.20)])
})