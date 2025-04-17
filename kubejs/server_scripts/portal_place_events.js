/*
    Add portal data to the server's persistent data when placed
*/
BlockEvents.placed('kubejs:depths_portal', event => {
    var server = event.getServer()
    var data = server.getPersistentData()

    var blockPos = event.block.pos
    var x = blockPos.getX(); var y = blockPos.getY(); var z = blockPos.getZ()
    var dimensionId = level.dimension.toString()

    // Initialize portal field if it doesn't exist
    if (!data.contains("depths")) {
        data.put("depths", [])
    }
    event.player.tell('event fired')

    // Add portal if not added
    let containsPortal = false
    data.get('depths').forEach(element => {
        if (element["level"] == dimensionId && element["x"] == x && element["y"] == y && element["z"] == z)
            containsPortal = true
    })
    if (!containsPortal)
        data.get('depths').push({"x": x, "y": y, "z": z, "level": dimensionId})
})

/*
    Add portal data to the server's persistent data when placed
*/
BlockEvents.placed('kubejs:dragon_portal', event => {
    var server = event.getServer()
    var data = server.getPersistentData()

    var blockPos = event.block.pos
    var x = blockPos.getX(); var y = blockPos.getY(); var z = blockPos.getZ()
    var dimensionId = level.dimension.toString()

    // Initialize portal field if it doesn't exist
    if (!data.contains("dragonrealm")) {
        data.put("dragonrealm", [])
    }

    // Add portal if not added
    let containsPortal = false
    data.get('dragonrealm').forEach(element => {
        if (element["level"] == dimensionId && element["x"] == x && element["y"] == y && element["z"] == z)
            containsPortal = true
    })
    if (!containsPortal)
        data.get('dragonrealm').push({"x": x, "y": y, "z": z, "level": dimensionId})


})

/*
    Add portal data to the server's persistent data when placed
*/
BlockEvents.placed('kubejs:inbetween_portal', event => {
    var server = event.getServer()
    var data = server.getPersistentData()

    var blockPos = event.block.pos
    var x = blockPos.getX(); var y = blockPos.getY(); var z = blockPos.getZ()
    var dimensionId = level.dimension.toString()

    // Initialize portal field if it doesn't exist
    if (!data.contains("inbetween")) {
        data.put("inbetween", [])
    }

    // Add portal if not added
    let containsPortal = false
    data.get('inbetween').forEach(element => {
        if (element["level"] == dimensionId && element["x"] == x && element["y"] == y && element["z"] == z)
            containsPortal = true
    })
    if (!containsPortal)
        data.get('inbetween').push({"x": x, "y": y, "z": z, "level": dimensionId})

})