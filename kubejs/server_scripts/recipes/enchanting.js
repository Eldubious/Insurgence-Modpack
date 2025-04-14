// Add Enchanting Apparatus recipes for every enchantment

const earth_essence = 'ars_nouveau:earth_essence'; const air_essence = 'ars_nouveau:air_essence'
const water_essence = 'ars_nouveau:water_essence'; const fire_essence = 'ars_nouveau:fire_essence'
const manip_essence = 'ars_nouveau:manipulation_essence'; const conj_essence = 'ars_nouveau:conjuration_essence'
const abj_essence = 'ars_nouveau:abjuration_essence'; const anima_essence = 'ars_elemental:anima_essence'


ServerEvents.recipes(event => {

    // Creates recipes for every level of the enchantment that scale uniformly
    // gem_block and material_block are only used if max_level >= 4
    function createEnchantRecipe(enchant, max_level, gem, material, essence, gem_block, material_block) {
        var gem_count = [gem]; var material_count = [material]
        var essence_count = []; var source = 500
        var level = 1; var add_essence = true

        // Register a new recipe for each level of the enchantment
        while (level <= max_level) {
            let inputItems = ['kubejs:enchant_catalyst']
            inputItems = inputItems.concat(gem_count, material_count, essence_count)

            // Register recipe
            event.recipes.ars_nouveau.enchantment(
                inputItems,
                enchant,
                level,
                source
            )
            level++

            // Alternate adding an extra essence every two levels
            if (add_essence) {
                essence_count.push(essence)
                add_essence = false
            } else
                add_essence = true

            // Switch to using blocks at level 4
            if (level == 4) {
                gem_count = [gem_block]
                material_count = [material_block]
            }
            // Add a gem and material if level is lower than 4
            else if (level < 4) {
                gem_count.push(gem)
                material_count.push(material)
            }
            // Add a gem and material block if level is higher than 5
            else {
                gem_count.push(gem_block)
                material_count.push(material_block)
            }
            source += 500
        }
    }

    // Armor enchantments
    // Vanilla:
    createEnchantRecipe('minecraft:protection', 4, 'minecraft:amethyst_shard', 'minecraft:iron_ingot', earth_essence, 'minecraft:amethyst_block', 'minecraft:iron_block')
    createEnchantRecipe('minecraft:fire_protection', 4, 'rubinated_nether:ruby_shard', 'minecraft:copper_ingot', fire_essence, 'rubinated_nether:ruby', 'minecraft:copper_block')
    createEnchantRecipe('minecraft:blast_protection', 4, 'minecraft:gold_ingot', 'savage_and_ravage:creeper_spores', manip_essence, 'savage_and_ravage:blast_proof_plating', 'savage_and_ravage:creeper_spore_sack')
    createEnchantRecipe('minecraft:projectile_protection', 4, 'minecraft:amethyst_shard', 'galosphere:silver_ingot', air_essence, 'minecraft:amethyst_block', 'galosphere:silver_block')
    createEnchantRecipe('minecraft:feather_falling', 4, 'samurai_dynasty:onyx', 'minecraft:feather', air_essence, 'samurai_dynasty:onyx_block', 'supplementaries:feather_block')
    createEnchantRecipe('minecraft:respiration', 3, 'galosphere:allurite_shard', 'minecraft:dried_kelp', abj_essence)
    createEnchantRecipe('minecraft:aqua_affinity', 1, 'samurai_dynasty:aquamarine', 'minecraft:stone_pickaxe', water_essence)
    createEnchantRecipe('minecraft:thorns', 3, 'minecraft:quartz', 'minecraft:cactus', earth_essence)
    createEnchantRecipe('minecraft:depth_strider', 3, 'samurai_dynasty:aquamarine', 'galosphere:silver_ingot', water_essence)
    createEnchantRecipe('minecraft:frost_walker', 2, 'samurai_dynasty:aquamarine', 'ars_nouveau:frostaya_pod', conj_essence)
    createEnchantRecipe('minecraft:binding_curse', 1, 'minecraft:chain', 'minecraft:chain')
    createEnchantRecipe('minecraft:soul_speed', 3, 'rubinated_nether:ruby', 'minecraft:soul_sand', fire_essence)
    createEnchantRecipe('minecraft:swift_sneak', 3, 'samurai_dynasty:onyx', 'minecraft:echo_shard', manip_essence)
})