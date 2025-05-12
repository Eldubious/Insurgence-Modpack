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

            if (level == max_level && max_level != 1)     // Use the hyper catalyst for overleveled enchants
                inputItems = ['kubejs:hyper_enchant_catalyst']
            
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
            // Do nothing if level is higher than 4
            else if (level > 4) {}
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
    // Unusual End:
    createEnchantRecipe('unusualend:everlasting', 1, 'galosphere:pink_salt_shard', 'minecraft:phantom_membrane')
    // Ars Elemental:
    event.recipes.ars_nouveau.enchantment(
        [
            'kubejs:enchant_catalyst', anima_essence, 'minecraft:totem_of_undying', 'ars_nouveau:source_gem_block', 'minecraft:lapis_block'
        ],
        'ars_elemental:soulbound', 1,
        10000
    )

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
    createEnchantRecipe('apotheosis:berserkers_fury', 4, 'rubinated_nether:ruby_shard', 'architects_palette:nether_brass_ingot', fire_essence, 'rubinated_nether:ruby', 'architects_palette:nether_brass_block')
    createEnchantRecipe('apotheosis:rebounding', 4, 'ars_nouveau:source_gem', 'minecraft:ender_pearl', manip_essence, 'ars_nouveau:source_gem_block', 'architects_palette:ender_pearl_block')
    createEnchantRecipe('apotheosis:stable_footing', 1, 'ars_nouveau:source_gem', 'minecraft:feather')
    // Unusual End:
    createEnchantRecipe('unusualend:boloks_head', 4, 'unusualend:citrine_chunk', 'minecraft:iron_ingot', earth_essence, 'unusualend:citrine_block', 'minecraft:iron_block')
    // Ars Nouveau:
    createEnchantRecipe('ars_nouveau:mana_boost', 4, 'ars_nouveau:source_gem', 'forbidden_arcanus:silver_dragon_scale', conj_essence, 'ars_nouveau:source_gem_block', 'forbidden_arcanus:arcane_dragon_egg')
    createEnchantRecipe('ars_nouveau:mana_regen', 4, 'ars_nouveau:source_gem', 'forbidden_arcanus:golden_dragon_scale', abj_essence, 'ars_nouveau:source_gem_block', 'forbidden_arcanus:arcane_dragon_egg')
    // Twilight Forest:
    createEnchantRecipe('twilightforest:fire_react', 4, 'rubinated_nether:molten_ruby_nugget', 'twilightforest:armor_shard', fire_essence, 'rubinated_nether:molten_ruby', 'twilightforest:knightmetal_ingot')
    createEnchantRecipe('twilightforest:chill_aura', 4, 'create:zinc_nugget', 'twilightforest:armor_shard', water_essence, 'create:zinc_ingot', 'twilightforest:knightmetal_ingot')
    // Estrogen:
    createEnchantRecipe('estrogen:uwufy_curse', 1, 'estrogen:moth_fuzz', 'estrogen:moth_fuzz')

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
    createEnchantRecipe('apotheosis:knowledge', 4, 'create:experience_nugget', 'aether_redux:gravitite_ingot', manip_essence, 'create:experience_block', 'aether_redux:gravitite_block')
    createEnchantRecipe('apotheosis:scavenger', 4, 'iceandfire:sapphire_gem', 'minecraft:gold_ingot', anima_essence, 'iceandfire:sapphire_block', 'minecraft:gold_block')
    createEnchantRecipe('apotheosis:bane_of_illagers', 6, 'minecraft:emerald', 'galosphere:silver_ingot', anima_essence, 'minecraft:emerald_block', 'galosphere:silver_block')
    // Unusual End:
    createEnchantRecipe('unusualend:boloks_fury', 4, 'unusualend:citrine_chunk', 'samurai_dynasty:steel_ingot', fire_essence, 'unusualend:citrine_block', 'samurai_dynasty:steel_block')
    // My Nether's Delight:
    createEnchantRecipe('mynethersdelight:poaching', 1, 'mynethersdelight:hoglin_loin', 'mynethersdelight:hoglin_loin')

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
    // Vein Mining:
    createEnchantRecipe('veinmining:vein_mining', 1, 'minecraft:diamond', 'minecraft:diamond')

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
    // Apotheosis:
    createEnchantRecipe('apotheosis:spearfishing', 6, 'minecraft:prismarine_shard', 'galosphere:silver_ingot', conj_essence, 'minecraft:prismarine', 'galosphere:silver_block')

    /*
        Crossbow Enchantments
    */
    // Vanilla:
    createEnchantRecipe('minecraft:multishot', 1, 'minecraft:lapis_lazuli', 'irons_spellbooks:arcane_ingot')
    createEnchantRecipe('minecraft:quick_charge', 4, 'samurai_dynasty:onyx', 'minecraft:copper_ingot', air_essence, 'samurai_dynasty:onyx_block', 'minecraft:copper_block')
    createEnchantRecipe('minecraft:piercing', 5, 'minecraft:amethyst_shard', 'aether_redux:veridium_ingot', water_essence, 'minecraft:amethyst_block', 'aether_redux:veridium_block')
    // Apotheosis:
    createEnchantRecipe('apotheosis:crescendo', 6, 'galosphere:pink_salt_shard', 'unusualend:pearlescent_ingot', manip_essence, 'galosphere:pink_salt', 'unusualend:pearlescent_block')

    /*
        Knife Enchantments
    */
    // Farmer's Delight:
    createEnchantRecipe('farmersdelight:backstabbing', 4, 'galosphere:pink_salt_shard', 'create:zinc_ingot', abj_essence, 'galosphere:pink_salt', 'create:zinc_block')

    /*
        Shear Enchantments
    */
    // Apotheosis:
    createEnchantRecipe('apotheosis:chromatic', 1, '#forge:dyes', '#minecraft:wool')
    createEnchantRecipe('apotheosis:growth_serum', 1, 'ars_nouveau:source_gem', 'ars_nouveau:conjuration_essence')
    createEnchantRecipe('apotheosis:exploitation', 1, 'minecraft:amethyst_shard', 'minecraft:iron_ingot')
    // The Bumblezone:
    createEnchantRecipe('the_bumblezone:comb_cutter', 3, 'samurai_dynasty:onyx', 'minecraft:honeycomb', air_essence)

    /*
        Hoe Enchantments
    */
    // Apotheosis:
    createEnchantRecipe('apotheosis:natures_blessing', 4, 'minecraft:emerald', 'iceandfire:dragonbone', conj_essence, 'minecraft:emerald_block', 'iceandfire:dragon_bone_block')
    createEnchantRecipe('apotheosis:tempting', 1, 'minecraft:wheat', 'minecraft:gold_ingot')

    /*
        Anvil Enchantments
    */
    // Apotheosis:
    createEnchantRecipe('apotheosis:obliteration', 1, 'minecraft:ender_eye', 'create:zinc_ingot')
    createEnchantRecipe('apotheosis:splitting', 1, 'minecraft:emerald', 'create:zinc_ingot')

    /*
        Shield Enchantments
    */
    // Apotheosis:
    createEnchantRecipe('apotheosis:reflective', 6, 'ars_nouveau:source_gem', 'architects_palette:wardstone_brick', manip_essence, 'ars_nouveau:source_gem_block', 'architects_palette:wardstone')
    createEnchantRecipe('apotheosis:shield_bash', 5, 'call_of_yucutan:jade', 'aether_redux:veridium_ingot', earth_essence, 'call_of_yucutan:jade_block', 'aether_redux:veridium_block')

    /*
        Wand Enchantments
    */
    // Unusual End:
    createEnchantRecipe('unusualend:arcane_recovery', 4, 'unusualend:shiny_crystal', 'minecraft:copper_ingot', abj_essence, 'unusualend:shiny_crystal_block', 'minecraft:copper_block')
    createEnchantRecipe('unusualend:benevolence', 1, 'minecraft:amethyst_shard', 'minecraft:ghast_tear')
    createEnchantRecipe('unusualend:bonding', 1, 'unusualend:shiny_crystal', 'irons_spellbooks:arcane_ingot')

    /*
        Elytra Enchantments
    */
    // Unusual End:
    createEnchantRecipe('unusualend:boloks_wings', 4, 'unusualend:citrine_chunk', 'unusualend:enderling_scrap', air_essence, 'unusualend:citrine_block', 'unusualend:dragling_plush')

    /*
        Warped Spear Enchantments
    */
    // Unusual End:
    createEnchantRecipe('unusualend:joust', 3, 'minecraft:prismarine_shard', 'unusualend:warped_berries', water_essence)

    /*
        Potato Cannon Enchantments
    */
    // Create:
    createEnchantRecipe('create:potato_recovery', 4, 'minecraft:potato', 'minecraft:iron_ingot', conj_essence, 'farmersdelight:potato_crate', 'minecraft:iron_block')

    /*
        Backtank Enchantments
    */
    // Create:
    createEnchantRecipe('create:capacity', 4, 'aether:ambrosium_shard', 'minecraft:copper_ingot', air_essence, 'aether:ambrosium_block', 'minecraft:copper_block')

    /*
        Stinger Spear Enchantments
    */
    // The Bumblezone:
    createEnchantRecipe('the_bumblezone:potent_poison', 4, 'the_bumblezone:honey_crystal_shards', 'minecraft:spider_eye', anima_essence, 'the_bumblezone:glistering_honey_crystal', 'minecraft:fermented_spider_eye')
    createEnchantRecipe('the_bumblezone:neurotoxins', 2, 'galosphere:allurite_shard', 'the_bumblezone:bee_stinger', conj_essence)

    /*
        Straddleboard Enchantments
    */
    // Alex's Mobs:
    createEnchantRecipe('alexsmobs:straddle_jump', 4, 'galosphere:lumiere_shard', 'alexsmobs:straddlite', air_essence, 'galosphere:lumiere_block', 'alexsmobs:straddlite_block')
    createEnchantRecipe('alexsmobs:lavawax', 1, 'minecraft:obsidian', 'minecraft:honeycomb')
    createEnchantRecipe('alexsmobs:serpentfriend', 1, 'galosphere:allurite_shard', 'minecraft:bone')
    createEnchantRecipe('alexsmobs:board_return', 1, 'ars_nouveau:source_gem', 'minecraft:copper_ingot')

    /*
        Block and Chain Enchantments
    */
    // Twilight Forest:
    createEnchantRecipe('twilightforest:destruction', 4, 'minecraft:quartz', 'twilightforest:armor_shard', manip_essence, 'minecraft:quartz_block', 'twilightforest:knightmetal_ingot')

    /*
        Tecpatl Enchantments
    */
    // Call of Yucatan:
    createEnchantRecipe('call_of_yucutan:toxic_blade', 3, 'call_of_yucutan:jade', 'minecraft:iron_ingot', earth_essence)
    createEnchantRecipe('call_of_yucutan:double_edged', 4, 'minecraft:quartz', 'forbidden_arcanus:obsidian_ingot', air_essence, 'minecraft:quartz_block', 'forbidden_arcanus:processed_obsidian_block')

    /*
        Macuahuitl Enchantments
    */
    // Call of Yucatan:
    createEnchantRecipe('call_of_yucutan:ritual_slaught', 4, 'call_of_yucutan:jade', 'architects_palette:nether_brass_ingot', anima_essence, 'call_of_yucutan:jade_block', 'architects_palette:nether_brass_block')

    /*
        Enchanter's Shield Enchantments
    */
    // Ars Elemental:
    createEnchantRecipe('ars_elemental:mirror_shield', 5, 'ars_nouveau:source_gem', 'minecraft:gold_ingot', manip_essence, 'ars_nouveau:source_gem_block', 'minecraft:gold_block')

    /*
        Slingshot Enchantments
    */
    // Supplementaries:
    createEnchantRecipe('supplementaries:stasis', 1, 'minecraft:amethyst_shard', 'aether_redux:gravitite_ingot')

    /*
        Kunai Enchantments
    */
    // Samurai Dynasty:
    createEnchantRecipe('samurai_dynasty:returning_blade', 1, 'minecraft:diamond', 'samurai_dynasty:steel_ingot')

    /*
        Saltbound Tablet Enchantments
    */
    // Galosphere:
    createEnchantRecipe('galosphere:enfeeble', 1, 'minecraft:amethyst_shard', 'galosphere:pink_salt')
    createEnchantRecipe('galosphere:sustain', 4, 'galosphere:pink_salt_shard', 'forbidden_arcanus:obsidian_ingot', abj_essence, 'galosphere:pink_salt', 'forbidden_arcanus:processed_obsidian_block')
    createEnchantRecipe('galosphere:rupture', 4, 'create:rose_quartz', 'minecraft:copper_ingot', fire_essence, 'create:rose_quartz_block', 'minecraft:copper_block')

    /*
        Collar Tag Enchantments
    */
    // Domestication Innovation:
    createEnchantRecipe('domesticationinnovation:health_boost', 4, 'the_bumblezone:honey_crystal_shards', 'minecraft:copper_ingot', abj_essence, 'the_bumblezone:glistering_honey_crystal', 'minecraft:copper_block')
    createEnchantRecipe('domesticationinnovation:fireproof', 1, 'minecraft:diamond', 'forbidden_arcanus:obsidian_ingot')
    createEnchantRecipe('domesticationinnovation:immunity_frame', 4, 'galosphere:lumiere_shard', 'minecraft:phantom_membrane', manip_essence, 'galosphere:lumiere_block', 'unusualend:phantom_membrane_block')
    createEnchantRecipe('domesticationinnovation:deflection', 1, 'minecraft:ender_eye', 'architects_palette:wardstone')
    createEnchantRecipe('domesticationinnovation:poison_resistance', 1, 'the_bumblezone:honey_crystal_shards', 'samurai_dynasty:steel_ingot')
    createEnchantRecipe('domesticationinnovation:chain_lightning', 3, 'call_of_yucutan:jade', 'minecraft:copper_ingot', air_essence)
    createEnchantRecipe('domesticationinnovation:speedster', 4, 'iceandfire:sapphire_gem', 'minecraft:gold_ingot', manip_essence, 'iceandfire:sapphire_block', 'minecraft:gold_block')
    createEnchantRecipe('domesticationinnovation:frost_fang', 1, 'iceandfire:sapphire_gem', 'minecraft:ice')
    createEnchantRecipe('domesticationinnovation:magnetic', 1, 'ars_nouveau:source_gem', 'samurai_dynasty:amethyst_ingot')
    createEnchantRecipe('domesticationinnovation:linked_inventory', 1, 'minecraft:diamond', 'minecraft:ender_chest')
    createEnchantRecipe('domesticationinnovation:total_recall', 1, 'minecraft:lapis_lazuli', 'minecraft:echo_shard')
    createEnchantRecipe('domesticationinnovation:health_siphon', 1, 'rubinated_nether:ruby_shard', 'irons_spellbooks:blood_vial')
    createEnchantRecipe('domesticationinnovation:bubbling', 3, 'unusualend:citrine_chunk', 'irons_spellbooks:arcane_ingot', water_essence)
    createEnchantRecipe('domesticationinnovation:herding', 3, 'minecraft:quartz', 'samurai_dynasty:cloth', earth_essence)
    createEnchantRecipe('domesticationinnovation:amphibious', 1, 'samurai_dynasty:aquamarine', 'architects_palette:algal_blend')
    createEnchantRecipe('domesticationinnovation:vampire', 3, 'galosphere:pink_salt_shard', 'irons_spellbooks:blood_vial', anima_essence)
    createEnchantRecipe('domesticationinnovation:void_cloud', 1, 'unusualend:void_totem', 'aether:cold_aercloud')
    createEnchantRecipe('domesticationinnovation:charisma', 4, 'minecraft:emerald', 'forbidden_arcanus:deorum_ingot', manip_essence, 'minecraft:emerald_block', 'forbidden_arcanus:deorum_block')
    createEnchantRecipe('domesticationinnovation:shadow_hands', 5, 'rubinated_nether:ruby', 'unusualend:enderling_scrap', conj_essence, 'rubinated_nether:ruby_block', 'unusualend:spectral_block')
    createEnchantRecipe('domesticationinnovation:disc_jockey', 1, 'minecraft:lapis_lazuli', 'minecraft:jukebox')
    createEnchantRecipe('domesticationinnovation:defusal', 4, 'call_of_yucutan:jade', 'minecraft:gunpowder', fire_essence, 'call_of_yucutan:jade_block', 'quark:gunpowder_sack')
    createEnchantRecipe('domesticationinnovation:warping_bite', 1, 'minecraft:lapis_block', 'architects_palette:ender_pearl_block')
    createEnchantRecipe('domesticationinnovation:ore_scenting', 4, 'iceandfire:sapphire_gem', 'galosphere:silver_ingot', manip_essence, 'iceandfire:sapphire_block', 'galosphere:silver_block')
    createEnchantRecipe('domesticationinnovation:gluttonous', 1, 'call_of_yucutan:jade', 'minecraft:golden_apple')
    createEnchantRecipe('domesticationinnovation:psychic_wall', 4, 'minecraft:lapis_lazuli', 'samurai_dynasty:amethyst_ingot', conj_essence, 'minecraft:lapis_block', 'hexcasting:charged_amethyst')
    createEnchantRecipe('domesticationinnovation:intimidation', 3, 'samurai_dynasty:onyx', 'minecraft:bone', fire_essence)
    createEnchantRecipe('domesticationinnovation:tethered_teleport', 1, 'minecraft:ender_pearl', 'minecraft:gold_ingot')
    createEnchantRecipe('domesticationinnovation:muffled', 1, 'galosphere:lumiere_shard', '#minecraft:wool')
    createEnchantRecipe('domesticationinnovation:blazing_protection', 4, 'galosphere:lumiere_shard', 'minecraft:blaze_rod', manip_essence, 'galosphere:lumiere_block', 'quark:blaze_lantern')
    createEnchantRecipe('domesticationinnovation:healing_aura', 3, 'aether:ambrosium_shard', 'samurai_dynasty:amethyst_ingot', abj_essence)
    createEnchantRecipe('domesticationinnovation:rejuvenation', 1, 'call_of_yucutan:jade', 'forbidden_arcanus:deorum_ingot')
    createEnchantRecipe('domesticationinnovation:undead_curse', 1, 'forbidden_arcanus:rotten_leather', 'forbidden_arcanus:rotten_leather')
    createEnchantRecipe('domesticationinnovation:infamy_curse', 1, 'minecraft:blaze_powder', 'minecraft:blaze_powder')
    createEnchantRecipe('domesticationinnovation:blight_curse', 1, 'forbidden_arcanus:dark_matter', 'forbidden_arcanus:dark_matter')
    createEnchantRecipe('domesticationinnovation:immaturity_curse', 1, 'minecraft:egg', 'minecraft:egg')

    /*
        Edelwood Bucket Enchantments
    */
    // Forbidden & Arcanus:
    createEnchantRecipe('forbidden_arcanus:permafrost', 1, 'minecraft:ice', 'minecraft:obsidian')

    /*
        Raygun Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:energy_efficiency', 4, 'alexscaves:uranium', 'samurai_dynasty:steel_ingot', fire_essence, 'alexscaves:block_of_uranium', 'samurai_dynasty:steel_block')
    createEnchantRecipe('alexscaves:gamma_ray', 1, 'alexscaves:block_of_uranium', 'galosphere:allurite_block')
    createEnchantRecipe('alexscaves:x_ray', 1, 'galosphere:allurite_shard', 'architects_palette:wardstone_brick')
    createEnchantRecipe('alexscaves:solar', 1, 'galosphere:lumiere_shard', 'aether_redux:veridium_ingot')

    /*
        Primitive Club Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:dazing_sweep', 3, 'galosphere:pink_salt_shard', 'create:brass_ingot', abj_essence)
    createEnchantRecipe('alexscaves:swiftwood', 4, 'alexscaves:amber', 'create:copper_nugget', air_essence, 'alexscaves:amber_curiosity', 'minecraft:copper_ingot')
    createEnchantRecipe('alexscaves:bonking', 1, 'alexscaves:amber', '#forge:logs')

    /*
        Extinction Spear Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:plummeting_flight', 4, 'aether:ambrosium_shard', 'galosphere:silver_ingot', air_essence, 'aether:ambrosium_block', 'galosphere:silver_block')
    createEnchantRecipe('alexscaves:herd_phalanx', 4, 'iceandfire:sapphire_gem', 'alexscaves:tough_hide', conj_essence, 'iceandfire:sapphire_block', 'alexscaves:dinosaur_chop')
    createEnchantRecipe('alexscaves:chomping_spirit', 3, 'minecraft:amethyst_shard', 'alexscaves:heavy_bone', fire_essence)

    /*
        Resistor Shield Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:arrow_inducting', 1, 'alexscaves:scarlet_neodymium_ingot', 'alexscaves:azure_neodymium_ingot')
    createEnchantRecipe('alexscaves:heavy_slam', 4, 'samurai_dynasty:onyx', 'minecraft:iron_ingot', earth_essence, 'samurai_dynasty:onyx_block', 'minecraft:iron_block')

    /*
        Galena Gauntlet Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:field_extension', 5, 'galosphere:allurite_shard', 'alexscaves:azure_neodymium_ingot', conj_essence, 'galosphere:allurite_block', 'alexscaves:block_of_azure_neodymium')
    createEnchantRecipe('alexscaves:crystallization', 1, 'minecraft:diamond', 'alexscaves:energized_galena_neutral')
    createEnchantRecipe('alexscaves:ferrous_haste', 1, 'galosphere:allurite_shard', 'minecraft:gold_ingot')

    /*
        Ortholance Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:second_wave', 1, 'alexscaves:sea_glass_shards', 'minecraft:copper_ingot')
    createEnchantRecipe('alexscaves:flinging', 4, 'alexscaves:pearl', 'aether_redux:veridium_ingot', water_essence, 'alexscaves:block_of_pearl', 'aether_redux:veridium_block')
    createEnchantRecipe('alexscaves:sea_swing', 1, 'minecraft:prismarine_shard', 'samurai_dynasty:amethyst_ingot')
    createEnchantRecipe('alexscaves:tsunami', 1, 'iceandfire:sapphire_gem', 'alexscaves:mussel')

    /* 
        Magic Conch Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:taxing_bellow', 1, 'alexscaves:pearl', 'forbidden_arcanus:deorum_ingot')
    createEnchantRecipe('alexscaves:lasting_morale', 4, 'minecraft:redstone', 'forbidden_arcanus:obsidian_ingot', abj_essence, 'minecraft:redstone_block', 'forbidden_arcanus:processed_obsidian_block')
    createEnchantRecipe('alexscaves:charting_call', 5, 'samurai_dynasty:aquamarine', 'create:brass_ingot', manip_essence, 'samurai_dynasty:aquamarine_block', 'create:brass_block')

    /*
        Sea Staff Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:enveloping_bubble', 1, 'samurai_dynasty:aquamarine', 'unusualend:warped_spores')
    createEnchantRecipe('alexscaves:bouncing_bolt', 1, 'minecraft:prismarine_shard', 'irons_spellbooks:arcane_ingot')
    createEnchantRecipe('alexscaves:seapairing', 1, 'aether:ambrosium_shard', 'create:experience_nugget')
    createEnchantRecipe('alexscaves:triple_splash', 1, 'samurai_dynasty:aquamarine', 'minecraft:heart_of_the_sea')
    createEnchantRecipe('alexscaves:soak_seeking', 4, 'galosphere:lumiere_shard', 'create:zinc_ingot', water_essence, 'galosphere:lumiere_block', 'create:zinc_block')

    /*
        Totem of Possession Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:detonating_death', 1, 'alexscaves:occult_gem', 'minecraft:gunpowder')
    createEnchantRecipe('alexscaves:rapid_possession', 4, 'minecraft:redstone', 'alexscaves:coprolith', anima_essence, 'minecraft:redstone_block', 'alexscaves:peering_coprolith')
    createEnchantRecipe('alexscaves:sightless', 1, 'alexscaves:pure_darkness', 'alexscaves:dark_tatters')
    createEnchantRecipe('alexscaves:astral_transferring', 1, 'minecraft:amethyst_shard', 'samurai_dynasty:amethyst_ingot')

    /*
        Desolate Dagger Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:impending_stab', 4, 'alexscaves:occult_gem', 'architects_palette:nether_brass_ingot', fire_essence, 'alexscaves:forsaken_idol', 'architects_palette:nether_brass_block')
    createEnchantRecipe('alexscaves:sated_blade', 3, 'alexscaves:occult_gem', 'samurai_dynasty:steel_ingot', conj_essence)
    createEnchantRecipe('alexscaves:double_stab', 1, 'minecraft:quartz', 'alexscaves:shadow_silk')

    /*
        Dreadbow Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:precise_volley', 1, 'rubinated_nether:ruby', 'alexscaves:corrodent_teeth')
    createEnchantRecipe('alexscaves:dark_nock', 4, 'galosphere:pink_salt_shard', 'alexscaves:dark_tatters', fire_essence, 'galosphere:pink_salt', 'alexscaves:shadow_silk')
    createEnchantRecipe('alexscaves:relentless_darkness', 1, 'alexscaves:pure_darkness', 'samurai_dynasty:quartz_ingot')
    createEnchantRecipe('alexscaves:twilight_perfection', 4, 'minecraft:amethyst_shard', 'forbidden_arcanus:obsidian_ingot', abj_essence, 'minecraft:amethyst_block', 'forbidden_arcanus:processed_obsidian_block')
    createEnchantRecipe('alexscaves:shaded_respite', 1, 'ars_nouveau:source_gem', 'forbidden_arcanus:obsidian_ingot')

    /*
        Shot Gum Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:targeted_ricochet', 1, 'rubinated_nether:ruby', 'alexscaves:sharpened_candy_cane')
    createEnchantRecipe('alexscaves:triple_split', 1, 'alexscaves:gumball_pile', 'alexscaves:gumball_pile')
    createEnchantRecipe('alexscaves:bouncy_ball', 4, 'galosphere:lumiere_shard', 'alexscaves:gumball_pile', water_essence, 'galosphere:lumiere_block', 'alexscaves:gobthumper')
    createEnchantRecipe('alexscaves:explosive_flavor', 1, 'alexscaves:caramel', 'savage_and_ravage:creeper_spores')

    /*
        Candy Cane Hook Enchantments
    */
    // Alex's Caves:
    createEnchantRecipe('alexscaves:far_flung', 4, 'the_bumblezone:honey_crystal_shards', 'create:brass_ingot', air_essence, 'the_bumblezone:glistering_honey_crystal', 'create:brass_block')
    createEnchantRecipe('alexscaves:sharp_cane', 3, 'minecraft:quartz', 'alexscaves:peppermint_powder', fire_essence)
    createEnchantRecipe('alexscaves:straight_hook', 1, 'the_bumblezone:honey_crystal_shards', 'samurai_dynasty:quartz_ingot')

    /*
        Sugar Staff Enchantments
    */ 
    // Alex's Caves:
    createEnchantRecipe('alexscaves:spell_lasting', 4, 'alexscaves:caramel', 'architects_palette:nether_brass_ingot', abj_essence, 'alexscaves:caramel_apple', 'architects_palette:nether_brass_block')
    createEnchantRecipe('alexscaves:peppermint_punting', 1, 'galosphere:pink_salt_shard', 'alexscaves:small_peppermint')
    createEnchantRecipe('alexscaves:humungous_hex', 3, 'hexcasting:charged_amethyst', 'irons_spellbooks:arcane_ingot', manip_essence)
    createEnchantRecipe('alexscaves:multiple_mint', 3, 'rubinated_nether:ruby_shard', 'alexscaves:large_peppermint', conj_essence)
    createEnchantRecipe('alexscaves:seekcandy', 1, 'minecraft:diamond', 'alexscaves:frostmint')
})