/*
    Remove portals from persistent data when broken
*/
BlockEvents.broken('kubejs:depths_portal', event => {
    var server = event.getServer()
    var data = server.getPersistentData()

    var pos = event.block.getPos()
    var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
    var dimensionId = level.dimension.toString()

    event.player.tell('Block broken')

    // Search through data to find matching element(s) and remove it
    data.get('depths').forEach(element => {
    
        if (element["level"] == dimensionId && element["x"] == x &&
            element["y"] == y && element["z"] == z) {
            
            let i = data.get('depths').indexOf(element)
            data.get('depths').splice(i, 1)

            event.player.tell('Portal removed')
        }
    });
}) 

BlockEvents.broken('kubejs:dragon_portal', event => {
    var server = event.getServer()
    var data = server.getPersistentData()

    var pos = event.block.getPos()
    var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
    var dimensionId = level.dimension.toString()

    event.player.tell('Block broken')

    // Search through data to find matching element(s) and remove it
    data.get('dragonrealm').forEach(element => {
    
        if (element["level"] == dimensionId && element["x"] == x &&
            element["y"] == y && element["z"] == z) {
            
            let i = data.get('dragonrealm').indexOf(element)
            data.get('dragonrealm').splice(i, 1)

            event.player.tell('Portal removed')
        }
    });
})

BlockEvents.broken('kubejs:inbetween_portal', event => {
    var server = event.getServer()
    var data = server.getPersistentData()

    var pos = event.block.getPos()
    var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
    var dimensionId = level.dimension.toString()

    event.player.tell('Block broken')

    // Search through data to find matching element(s) and remove it
    data.get('inbetween').forEach(element => {
    
        if (element["level"] == dimensionId && element["x"] == x &&
            element["y"] == y && element["z"] == z) {
            
            let i = data.get('inbetween').indexOf(element)
            data.get('inbetween').splice(i, 1)

            event.player.tell('Portal removed')
        }
    });
})