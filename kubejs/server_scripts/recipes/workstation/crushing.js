// Create and modify recipes for the Millstone and Crushing Wheel
ServerEvents.recipes(event => {

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
    // Copy pre-existing Crushing Wheel recipes
    millstone('#forge:ores/coal', ['2x minecraft:coal', Item.of('minecraft:coal', 2).withChance(0.33)])
    millstone('#forge:ores/iron', ['create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.33)])
    millstone('#forge:ores/copper', ['3x create:crushed_raw_copper', Item.of('create:crushed_raw_copper', 3).withChance(0.33)])
    millstone('#forge:ores/zinc', ['create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.33)])
    millstone('#forge:ores/gold', ['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.33)])
    millstone('#forge:ores/silver', ['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.33)])
    millstone('#forge:ores/emerald', ['minecraft:emerald', Item.of('minecraft:emerald').withChance(0.33)])
    millstone('#forge:ores/diamond', ['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.33)])
    // Create both Crushing Wheel and Millstone recipes
    millstone('#forge:ores/ruby', ['rubinated_nether:ruby', Item.of('rubinated_nether:ruby').withChance(0.33)])
    crushingWheel('#forge:ores/ruby', ['rubinated_nether:ruby', Item.of('rubinated_nether:ruby').withChance(0.75)])
    millstone('#forge:ores/jade', ['call_of_yucutan:jade', Item.of('call_of_yucutan:jade').withChance(0.33)])
    crushingWheel('#forge:ores/jade', ['call_of_yucutan:jade', Item.of('call_of_yucutan:jade').withChance(0.75)])
    millstone('#forge:ores/onyx', ['samurai_dynasty:onyx', Item.of('samurai_dynasty:onyx').withChance(0.33)])
    crushingWheel('#forge:ores/onyx', ['samurai_dynasty:onyx', Item.of('samurai_dynasty:onyx').withChance(0.75)])

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