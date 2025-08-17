let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('minecraft:apple', 'domesticationinnovation:rotten_apple'))
$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('trailandtales_delight:curd_block', 'trailandtales_delight:cheese_wheel'))
$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('minecraft:smithing_table', 'forbidden_arcanus:hephaestus_forge'))