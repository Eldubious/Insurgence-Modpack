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
            var inputItems = ['kubejs:enchant_catalyst']

            if (level == max_level)     // Use the hyper catalyst for overleveled enchants
                inputItems = ['kubejs:enchant_catalyst']
            
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
    /*
        Universal Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:unbreaking', 4, 'minecraft:diamond', 'samurai_dynasty:steel_ingot', abj_essence, 'minecraft:diamond_block', 'samurai_dynasty:steel_block')
    createEnchantRecipe('minecraft:mending', 1, 'create:experience_block', 'experienceobelisk:mending_neurogel')
    createEnchantRecipe('minecraft:vanishing_curse', 1, 'minecraft:glass', 'minecraft:glass')
    // Apotheosis:
    createEnchantRecipe('apotheosis:life_mending', 4, 'rubinated_nether:ruby_shard', 'minecraft:gold_ingot', anima_essence, 'rubinated_nether:ruby', 'minecraft:gold_block')

    /*
        Armor Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:protection', 5, 'minecraft:amethyst_shard', 'minecraft:iron_ingot', earth_essence, 'minecraft:amethyst_block', 'minecraft:iron_block')
    createEnchantRecipe('minecraft:fire_protection', 5, 'rubinated_nether:ruby_shard', 'minecraft:copper_ingot', fire_essence, 'rubinated_nether:ruby', 'minecraft:copper_block')
    createEnchantRecipe('minecraft:blast_protection', 5, 'minecraft:gold_ingot', 'savage_and_ravage:creeper_spores', manip_essence, 'savage_and_ravage:blast_proof_plating', 'savage_and_ravage:creeper_spore_sack')
    createEnchantRecipe('minecraft:projectile_protection', 5, 'minecraft:amethyst_shard', 'galosphere:silver_ingot', air_essence, 'minecraft:amethyst_block', 'galosphere:silver_block')
    createEnchantRecipe('minecraft:feather_falling', 5, 'samurai_dynasty:onyx', 'minecraft:feather', air_essence, 'samurai_dynasty:onyx_block', 'supplementaries:feather_block')
    createEnchantRecipe('minecraft:respiration', 4, 'galosphere:allurite_shard', 'minecraft:dried_kelp', abj_essence, 'galosphere:allurite_block', 'architects_palette:algal_lamp')
    createEnchantRecipe('minecraft:aqua_affinity', 1, 'samurai_dynasty:aquamarine', 'minecraft:stone_pickaxe', water_essence)
    createEnchantRecipe('minecraft:thorns', 4, 'minecraft:quartz', 'minecraft:cactus', earth_essence, 'minecraft:quartz_block', 'nethers_exoticism:ramboutan')
    createEnchantRecipe('minecraft:depth_strider', 4, 'samurai_dynasty:aquamarine', 'galosphere:silver_ingot', water_essence, 'samurai_dynasty:aquamarine_block', 'galosphere:silver_block')
    createEnchantRecipe('minecraft:frost_walker', 3, 'samurai_dynasty:aquamarine', 'ars_nouveau:frostaya_pod', conj_essence)
    createEnchantRecipe('minecraft:binding_curse', 1, 'minecraft:chain', 'minecraft:chain')
    createEnchantRecipe('minecraft:soul_speed', 4, 'rubinated_nether:ruby', 'minecraft:soul_sand', fire_essence, 'rubinated_nether:ruby_block', 'minecraft:ancient_debris')
    createEnchantRecipe('minecraft:swift_sneak', 4, 'samurai_dynasty:onyx', 'minecraft:echo_shard', manip_essence, 'samurai_dynasty:onyx_block', 'minecraft:sculk_shrieker')
    // Apotheosis:
    createEnchantRecipe('apotheosis:icy_thorns', 4, 'galosphere:allurite_shard', 'minecraft:ice', water_essence, 'galosphere:allurite_block', 'minecraft:packed_ice')
    // Ars Nouveau:

    // Twilight Forest:



    /*
        Sword Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:sharpness', 6, 'minecraft:diamond', 'galosphere:silver_ingot', earth_essence, 'minecraft:diamond_block', 'galosphere:silver_block')
    createEnchantRecipe('minecraft:smite', 6, 'galosphere:pink_salt_shard', 'minecraft:iron_ingot', anima_essence, 'galosphere:pink_salt', 'minecraft:iron_block')
    createEnchantRecipe('minecraft:bane_of_arthropods', 6, 'the_bumblezone:honey_crystal_shards', 'minecraft:copper_ingot', earth_essence, 'the_bumblezone:glistering_honey_crystal', 'minecraft:copper_block')
    createEnchantRecipe('minecraft:knockback', 3, 'minecraft:amethyst_shard', 'create:zinc_ingot', air_essence)
    createEnchantRecipe('minecraft:fire_aspect', 3, 'galosphere:lumiere_shard', 'forbidden_arcanus:obsidian_ingot', fire_essence)
    createEnchantRecipe('minecraft:looting', 4, 'minecraft:diamond', 'forbidden_arcanus:deorum_ingot', conj_essence, 'minecraft:diamond_block', 'forbidden_arcanus:deorum_block')
    createEnchantRecipe('minecraft:sweeping', 4, 'aether:ambrosium_shard', 'minecraft:lapis_lazuli', air_essence, 'aether:ambrosium_block', 'minecraft:lapis_block')
    // Apotheosis:
    createEnchantRecipe('apotheosis:knowledge', 4, 'create:experience_nugget', 'aether_redux:gravitite_ingot', manip_essence, 'create:experience_block', 'aether_redux:gravitite_ingot')

    /*
        Tool Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:efficiency', 6, 'ars_nouveau:source_gem', 'architects_palette:nether_brass_ingot', abj_essence, 'ars_nouveau:source_gem_block', 'architects_palette:nether_brass_block')
    createEnchantRecipe('minecraft:silk_touch', 1, 'minecraft:lapis_lazuli', 'create:brass_ingot', water_essence)
    createEnchantRecipe('minecraft:fortune', 4, 'minecraft:emerald', 'forbidden_arcanus:deorum_ingot', conj_essence, 'minecraft:emerald_block', 'forbidden_arcanus:deorum_block')
    // Apotheosis:
    createEnchantRecipe('apotheosis:miners_fervor', 6, 'minecraft:redstone', 'create:zinc_ingot', manip_essence, 'create:polished_rose_quartz', 'create:zinc_block')
    createEnchantRecipe('apotheosis:earths_boon', 4, 'call_of_yucutan:jade_block', 'minecraft:iron_block', earth_essence, 'minecraft:diamond_block', 'minecraft:gold_block')
    createEnchantRecipe('apotheosis:chainsaw', 1, 'samurai_dynasty:quartz_ingot', 'create:brass_block')

    /*
        Bow Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:power', 6, 'minecraft:quartz', 'aether_redux:veridium_ingot', air_essence, 'minecraft:quartz_block', 'aether_redux:veridium_block')
    createEnchantRecipe('minecraft:punch', 3, 'minecraft:prismarine_shard', 'minecraft:copper_ingot', water_essence)
    createEnchantRecipe('minecraft:flame', 1, 'rubinated_nether:molten_ruby', 'minecraft:gold_ingot')
    createEnchantRecipe('minecraft:infinity', 1, 'ars_nouveau:source_gem_block', 'minecraft:spectral_arrow')
    // Apotheosis:
    createEnchantRecipe('apotheosis:endless_quiver', 1, 'forbidden_arcanus:draco_arcanus_arrow', 'forbidden_arcanus:processed_obsidian_block')

    /*
        Fishing Rod Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:lure', 4, 'galosphere:allurite_shard', 'create:zinc_ingot', water_essence, 'galosphere:allurite_block', 'create:zinc_block')
    createEnchantRecipe('minecraft:luck_of_the_sea', 4, 'samurai_dynasty:aquamarine', 'minecraft:gold_ingot', conj_essence, 'samurai_dynasty:aquamarine_block', 'minecraft:gold_block')

    /*
        Trident Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:loyalty', 4, 'galosphere:allurite_shard', 'minecraft:prismarine_shard', water_essence, 'galosphere:allurite_block', 'minecraft:prismarine')
    createEnchantRecipe('minecraft:impaling', 6, 'samurai_dynasty:aquamarine', 'minecraft:iron_ingot', water_essence, 'samurai_dynasty:aquamarine_block', 'minecraft:iron_block')
    createEnchantRecipe('minecraft:riptide', 4, 'ars_nouveau:source_gem', 'aether_redux:gravitite_ingot', air_essence, 'ars_nouveau:source_gem_block', 'aether_redux:gravitite_block')
    createEnchantRecipe('minecraft:channeling', 1, 'galosphere:lumiere_block', 'minecraft:copper_block')

    /*
        Crossbow Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:multishot', 1, 'minecraft:lapis_lazuli', 'irons_spellbooks:arcane_ingot')
    createEnchantRecipe('minecraft:quick_charge', 4, 'samurai_dynasty:onyx', 'minecraft:copper_ingot', air_essence, 'samurai_dynasty:onyx_block', 'minecraft:copper_block')
    createEnchantRecipe('minecraft:piercing', 5, 'minecraft:amethyst_shard', 'aether_redux:veridium_ingot', water_essence, 'minecraft:amethyst_block', 'aether_redux:veridium_block')
    // Apotheosis:
    createEnchantRecipe('apotheosis:crescendo', 6, 'galosphere:pink_salt_shard', 'unusualend:pearlescent_ingot', manip_essence, 'galosphere:pink_salt', 'unusualend:pearlescent_alloy_ingot')


    /*
        Shear Enchantments
    */
    // Apotheosis:
    createEnchantRecipe('apotheosis:chromatic', 1, '#forge:dyes', '#minecraft:wool')
    createEnchantRecipe('apotheosis:growth_serum', 1, 'ars_nouveau:source_gem', 'ars_nouveau:conjuration_essence')
    createEnchantRecipe('apotheosis:exploitation', 1, 'minecraft:amethyst_shard', 'minecraft:iron_ingot')






})