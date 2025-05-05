/*
    Remove portals from persistent data when broken
*/
BlockEvents.broken('kubejs:depths_portal', event => {
    removeElement(event, 'depths')   
}) 

BlockEvents.broken('kubejs:dragon_portal', event => {
    removeElement(event, 'dragonrealm')
})

BlockEvents.broken('kubejs:inbetween_portal', event => {
    removeElement(event, 'inbetween')
})

// Searches through persistent data to find matching element(s) and remove them
function removeElement(event, portalType) {
    var server = event.getServer()
    var data = server.getPersistentData()

    var pos = event.block.getPos()
    var x = pos.getX(); var y = pos.getY(); var z = pos.getZ()
    var dimensionId = event.level.dimension.toString()

    var i = null
    data.get(portalType).forEach(element => {

        if (element["level"] == dimensionId && element["x"] == x &&
            element["y"] == y && element["z"] == z) {
            
            i = data.get(portalType).indexOf(element)
        }
    })
    data.get(portalType).remove(i)
}