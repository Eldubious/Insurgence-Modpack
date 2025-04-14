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
})