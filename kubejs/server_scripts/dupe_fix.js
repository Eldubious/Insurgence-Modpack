// Prevent all interactions when holding any of these items in the Dimensional Dungeons
const banned_held_items = ['minecraft:book', 'minecraft:enchanted_book',
    'minecraft:stick', 'minecraft:blaze_rod', 'minecraft:gunpowder'
]

BlockEvents.rightClicked(event => {
    let player = event.getPlayer()
    let mainHand = player.mainHandItem.id.toString()
    let offHand = player.offHandItem.id.toString()
    let dimensionId = event.level.dimension.toString()

    console.log(`Main Hand: ${mainHand}, Off Hand: ${offHand}, Dimension: ${dimensionId}`)

    if (dimensionId == 'dimdungeons:dungeon_dimension') {

        if (banned_held_items.indexOf(mainHand) != -1 || banned_held_items.indexOf(offHand) != -1) {
            event.cancel()
        }
    }
})