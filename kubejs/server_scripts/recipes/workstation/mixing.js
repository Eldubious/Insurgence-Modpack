// Create mixing recipes for the Mechanical Mixer
ServerEvents.recipes(event => {

    // Register a mechanical mixer recipe
    function mixing(output, inputs, heat) {
        if (heat == 2) {
            event.recipes.create.mixing([output], inputs).superheated()
        }
        else if (heat == 1) {
            event.recipes.create.mixing([output], inputs).heated()
        }
        else if (heat == 0) {
            event.recipes.create.mixing([output], inputs)
        }
    }

    // Obsidian with Iron
    event.remove({id: 'forbidden_arcanus:obsidian_with_iron'})
    mixing('forbidden_arcanus:obsidian_with_iron', ['minecraft:obsidian', '4x minecraft:iron_nugget'], 0)
    // Quartz-Coated Steel
    event.remove({id: 'samurai_dynasty:quartz_ingot_smithing'})
    mixing('samurai_dynasty:quartz_ingot', ['samurai_dynasty:steel_ingot', '2x minecraft:quartz'], 2)
    // Amethyst-Coated Steel
    event.remove({id: 'samurai_dynasty:amethyst_ingot_smithing'})
    mixing('samurai_dynasty:amethyst_ingot', ['samurai_dynasty:steel_ingot', '2x minecraft:amethyst_shard'], 2)
    // Arcane Ingot
    event.remove({id: 'irons_spellbooks:arcane_ingot'})
    mixing('irons_spellbooks:arcane_ingot', ['galosphere:silver_ingot', '8x irons_spellbooks:arcane_essence'], 1)
    // Netherite Ingot
    event.remove({id: 'minecraft:netherite_ingot'})
    mixing('minecraft:netherite_ingot', ['4x #forge:ingots/gold', '4x minecraft:netherite_scrap'], 2)
    // Blast-Proof Plating
    event.remove({id: 'savage_and_ravage:blast_proof_plating'})
    mixing('savage_and_ravage:blast_proof_plating', ['2x create:golden_sheet', '3x savage_and_ravage:creeper_spores'], 1)
    // Deorum Ingot
    mixing('forbidden_arcanus:deorum_ingot', ['minecraft:gold_ingot', '4x minecraft:charcoal', '2x forbidden_arcanus:arcane_crystal_dust', '2x minecraft:redstone', '2x minecraft:blaze_powder', Fluid.lava(250)], 2)
    // Ivory Psimetal
    event.remove({id: 'psi:ivory_psimetal'})
    mixing('psi:ivory_psimetal', ['psi:psimetal', '8x psi:ivory_substance'], 2)
    // Ebony Psimetal
    event.remove({id: 'psi:ebony_psimetal'})
    mixing('psi:ebony_psimetal', ['psi:psimetal', '8x psi:ebony_substance'], 2)
    // Tectonic Ingot
    event.remove({id: 'traveloptics:tectonic_ingot'})
    mixing('traveloptics:tectonic_ingot', ['alexscaves:tectonic_shard', '4x irons_spellbooks:arcane_ingot', '4x alexscaves:amber_curiosity', Fluid.lava(1000)], 2)
    // Hullbreaker Steel
    event.remove({id: 'traveloptics:hullbreaker_steel'})
    mixing('traveloptics:hullbreaker_steel', ['4x irons_spellbooks:arcane_ingot', 'traveloptics:hullbreaker_scales', Fluid.water(1000)], 2)
})