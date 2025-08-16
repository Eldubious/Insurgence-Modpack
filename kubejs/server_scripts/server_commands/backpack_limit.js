// Check every so often how many backpacks a player is holding, and apply slowness accordingly

// All items which count as backpacks
const backpacks = ['sophisticatedbackpacks:backpack', 'sophisticatedbackpacks:copper_backpack', 'sophisticatedbackpacks:iron_backpack',
    'sophisticatedbackpacks:gold_backpack', 'sophisticatedbackpacks:diamond_backpack', 'sophisticatedbackpacks:netherite_backpack']

// All items which increase the carrying capacity by 1
const strength_items = ['ars_nouveau:belt_of_levitation', 'ancient_aether:strength_stone', 'aether_redux:ring_of_construction',
    'ancient_aether:warrior_ring', 'ancient_aether:warrior_pendant', 'aether:iron_bubble', 'tarotcards:strength',
    'irons_spellbooks:concentration_amulet', 'irons_spellbooks:heavy_chain_necklace']

var playerTick = 0
PlayerEvents.tick(event => {

    if (playerTick >= 100) {
        let player = event.getPlayer()
        let count = 0; let max = 2

        // Check each item in the inventory
        let inventory = player.getNbt().get("Inventory")
        inventory.forEach(element => {
            let id = element.get("id")

            // Increase the backpack count
            if (backpacks.indexOf(id) != -1) {
                count++
            }
        })

        // Check the items in the curios inventory
        let curios = player.getNbt().get("ForgeCaps").get("curios:inventory").get("Curios")
        curios.forEach(element => {             // Iterate on each slot type
            let slotTypeItems = element.get("StacksHandler").get("Stacks").get("Items")

            slotTypeItems.forEach(element => {  // Iterate on each item in that slot type
                let id = element.get("id")

                if (backpacks.indexOf(id) != -1) {      // Increase the backpack count
                    count++
                }
                else if (strength_items.indexOf(id) != -1) {    // Increase the maximum capacity
                    max++
                }
            })
        })

        // Apply Slowness and eventually Weakness if the player is carrying too much
        if (count > max) {
            let amp = Math.floor(count / max) - 1
            //player.tell("You are carrying too many backpacks. Your limit is " + max)
            
            let cmd = `effect give ${player.uuid.toString()} minecraft:slowness 4 ${amp} true`
            event.server.runCommandSilent(cmd)
        }

        playerTick = 0
    }
    playerTick++
})