/*
    Add portal data to the server's persistent data when placed
*/
BlockEvents.placed('kubejs:depths_portal', event => {
    placeEvent(event, 'depths')
})

BlockEvents.placed('kubejs:dragon_portal', event => {
    placeEvent(event, 'dragonrealm')
})

BlockEvents.placed('kubejs:inbetween_portal', event => {
    placeEvent(event, 'inbetween')
})

// Handle the place event for all three portal types
function placeEvent(event, portalType) {
    var server = event.getServer()
    var data = server.getPersistentData()

    var blockPos = event.block.getPos()
    var x = blockPos.getX(); var y = blockPos.getY(); var z = blockPos.getZ()
    var dimensionId = event.level.dimension.toString()

    portalsInit(data)
    addNewPortal(data, portalType, dimensionId, x, y, z)
}

// Initialize data fields if they do not exist
function portalsInit(data) {
    if (!data.contains('inbetween'))
        data.put('inbetween', [])
    if (!data.contains('dragonrealm'))
        data.put('dragonrealm', [])
    if (!data.contains('depths'))
        data.put('depths', [])
}

// Adds a portal to the persistent data if it doesn't already exist
function addNewPortal(data, portalType, dimensionId, x, y, z) {
    var containsPortal = false

    data.get(portalType).forEach(element => {
        if (element["level"] == dimensionId && element["x"] == x && element["y"] == y && element["z"] == z)
            containsPortal = true
    })

    if (!containsPortal)
        data.get(portalType).push({"x": x, "y": y, "z": z, "level": dimensionId})
}