// Modify obtainment methods for End Remastered eyes
const eyes = ['endrem:black_eye', 'endrem:cold_eye', 'endrem:corrupted_eye', 'endrem:lost_eye', 'endrem:nether_eye',
    'endrem:old_eye', 'endrem:rogue_eye', 'endrem:cursed_eye', 'endrem:evil_eye', 'endrem:guardian_eye',
    'endrem:magical_eye', 'endrem:wither_eye', 'endrem:witch_eye', 'endrem:undead_eye', 'endrem:exotic_eye',
    'endrem:cryptic_eye']
const ender_eye = 'minecraft:ender_eye'

ServerEvents.recipes(event => {

    // Remove original eye recipes
    event.remove({id: 'endrem:exotic_eye'})
    event.remove({id: 'endrem:witch_eye'})
    event.remove({id: 'endrem:undead_eye'})

    // Black Eye
    event.shaped('endrem:black_eye',
        [
            'III',
            'IGI',
            'MMM'
        ],
        {
            I: 'minecraft:ink_sac',
            G: 'alexscaves:gazing_pearl',
            M: 'alexscaves:marine_snow'
        }
    )

    // Lost Eye
    event.shaped('endrem:lost_eye',
        [
            'FTF',
            'SCA',
            'FFF'
        ],
        {
            F: 'alexscaves:ferrouslime_ball',
            T: 'alexscaves:tesla_bulb',
            S: 'alexscaves:scarlet_neodymium_ingot',
            A: 'alexscaves:azure_neodymium_ingot',
            C: 'alexscaves:telecore'
        }
    )
    event.smithing('endrem:lost_eye',
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:ender_eye',
        'minecraft:netherite_ingot'
    )

    // Nether Eye
    event.shaped('endrem:nether_eye',
        [
            'BSB',
            'SES',
            'NMN'
        ],
        {
            B: 'minecraft:blaze_powder',
            S: 'architects_palette:sunmetal_brick',
            E: 'minecraft:ender_eye',
            N: 'minecraft:nether_bricks',
            M: 'minecraft:magma_block'
        }
    )
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:fire_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:fire_essence',
            'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian',
            'minecraft:lava_bucket', 'minecraft:lava_bucket'
        ],
        'rubinated_nether:molten_ruby_block',
        'endrem:nether_eye',
        4000
    )

    // Guardian Eye
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:prismarine_crystals',
            'minecraft:prismarine_crystals', 'minecraft:prismarine_shard', 'minecraft:prismarine_shard',
            'minecraft:prismarine_shard', 'minecraft:prismarine_shard'
        ],
        'oceanic_delight:elder_guardian_eye',
        'endrem:guardian_eye',
        4000
    )
    event.shaped('endrem:guardian_eye',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:diamond',
            B: 'oceanic_delight:ancient_fish_eggs',
            C: 'minecraft:nautilus_shell',
            D: 'minecraft:ender_eye'
        }
    )

    // Cold Eye
    event.shaped('endrem:cold_eye',
        [
            'ABA',
            'CDC',
            'BEB'
        ],
        {
            A: 'minecraft:snowball',
            B: 'irons_spellbooks:frozen_bone',
            C: 'aether:cold_aercloud',
            D: 'minecraft:ender_eye',
            E: 'minecraft:blue_ice'
        }
    )

    // Evil Eye
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:abjuration_essence', 'minecraft:lapis_lazuli', 'minecraft:lapis_lazuli', 'minecraft:gold_ingot',
            'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:echo_shard', 'minecraft:echo_shard'
        ],
        'minecraft:ender_eye',
        'endrem:evil_eye',
        4000
    )
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'forbidden_arcanus:purifying_soap', 'galosphere:lumiere_shard', 'galosphere:lumiere_shard', 'galosphere:lumiere_shard',
            'iceandfire:pixie_dust', 'iceandfire:pixie_dust', 'forbidden_arcanus:rune', 'forbidden_arcanus:rune'
        ],
        'minecraft:ender_eye',
        'endrem:evil_eye',
        4000
    )

    // Witch Eye
    event.shaped('endrem:witch_eye',
        [
            'LCL',
            'VPS',
            'LRL'
        ],
        {
            L: 'alexscaves:licoroot_vine',
            V: 'alexscaves:vanilla_ice_cream_scoop',
            C: 'alexscaves:chocolate_ice_cream_scoop',
            S: 'alexscaves:sweetberry_ice_cream_scoop',
            P: 'endrem:witch_pupil',
            R: 'alexscaves:radiant_essence'
        }
    )
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:sugar', 'minecraft:fermented_spider_eye', 'minecraft:glistering_melon_slice', 'minecraft:nether_wart',
            'minecraft:enchanted_golden_apple', 'minecraft:phantom_membrane', 'minecraft:glowstone_dust', 'galosphere:golden_lichen_cordyceps'
        ],
        'endrem:witch_pupil',
        'endrem:witch_eye',
        4000
    )

    // Undead Eye
    event.shaped('endrem:undead_eye',
        [
            'KBK',
            'BLB',
            'KGK'
        ],
        {
            K: 'twilightforest:knightmetal_ingot',
            B: 'minecraft:bone',
            L: 'twilightforest:lich_trophy',
            G: 'minecraft:gold_ingot'
        }
    )
    event.shaped('endrem:undead_eye',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'iceandfire:ectoplasm',
            B: 'galosphere:pink_salt_shard',
            C: 'call_of_yucutan:mayan_calendar'
        }
    )

    // Exotic Eye
    event.shaped('endrem:exotic_eye',
        [
            'SFS',
            'BHT',
            'CPC'
        ],
        {
            S: 'ars_elemental:siren_shards',
            F: 'minecraft:fire_coral',
            B: 'minecraft:bubble_coral',
            H: 'minecraft:heart_of_the_sea',
            T: 'minecraft:tube_coral',
            C: 'minecraft:horn_coral',
            P: 'oceanic_delight:stuffed_pufferfish'
        }
    )
    event.shaped('endrem:exotic_eye',
        [
            'ABC',
            'DED',
            'FFF'
        ],
        {
            A: 'quark:violet_corundum_cluster',
            B: 'quark:red_corundum_cluster',
            C: 'quark:indigo_corundum_cluster',
            D: 'galosphere:allurite_shard',
            E: 'minecraft:ender_eye',
            F: 'galosphere:lumiere_shard'
        }
    )

    // Old Eye
    event.shaped('endrem:old_eye',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'alexscaves:pewen_sap',
            B: 'alexscaves:amber',
            C: 'minecraft:ender_eye'
        }
    )
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'call_of_yucutan:ancient_gold_ingot', 'call_of_yucutan:ancient_gold_ingot', 'call_of_yucutan:ancient_gold_ingot',
            'call_of_yucutan:ancient_gold_ingot', 'call_of_yucutan:ancient_gold_ingot', 'call_of_yucutan:ancient_gold_ingot'
        ],
        'minecraft:ender_eye',
        'endrem:old_eye',
        4000
    )

    // Wither Eye
    event.shaped('endrem:wither_eye',
        [
            'FDF',
            'ANA',
            'FOF'
        ],
        {
            F: 'experienceobelisk:forgotten_dust',
            D: 'forbidden_arcanus:dark_matter',
            A: 'ars_elemental:anima_essence',
            N: 'minecraft:nether_star',
            O: 'forbidden_arcanus:obsidian_ingot'
        }
    )
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'iceandfire:witherbone', 'iceandfire:witherbone', 'iceandfire:witherbone', 'iceandfire:witherbone',
            'ars_nouveau:void_jar', 'forbidden_arcanus:dark_rune', 'forbidden_arcanus:dark_rune', 'forbidden_arcanus:dark_rune'
        ],
        'minecraft:nether_star',
        'endrem:wither_eye',
        4000
    )

    // Magical Eye
    event.shaped('endrem:magical_eye',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:lapis_lazuli',
            B: 'forbidden_arcanus:arcane_crystal_dust',
            C: 'irons_spellbooks:evocation_upgrade_orb'
        }
    )
    event.shaped('endrem:magical_eye',
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:emerald',
            B: 'minecraft:totem_of_undying',
            C: 'ars_nouveau:conjuration_essence',
            D: 'minecraft:ender_eye',
            E: 'forbidden_arcanus:arcane_crystal'
        }
    )

    // Rogue Eye
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'alexscaves:block_of_uranium', 'alexscaves:acid_bucket', 'alexscaves:sulfur_dust', 'alexscaves:sulfur_dust',
            'minecraft:redstone', 'minecraft:redstone'
        ],
        'minecraft:ender_eye',
        'endrem:rogue_eye',
        4000
    )
    event.shaped('endrem:rogue_eye',
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'create:large_cogwheel',
            B: 'minecraft:sticky_piston',
            C: 'create:brass_ingot',
            D: 'minecraft:ender_eye',
            E: 'minecraft:slime_ball',
            F: 'create:experience_block'
        }
    )

    // Corrupted Eye
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'alexscaves:dark_tatters', 'alexscaves:dark_tatters', 'alexscaves:dark_tatters',
            'forbidden_arcanus:obsidian_ingot', 'forbidden_arcanus:obsidian_ingot', 'forbidden_arcanus:obsidian_ingot'
        ],
        'minecraft:ender_eye',
        'endrem:corrupted_eye',
        4000
    )
})