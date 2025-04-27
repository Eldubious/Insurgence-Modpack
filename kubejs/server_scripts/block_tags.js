// Add or Remove block tags from blocks
ServerEvents.tags('block', event => {

    // Takes a tag name and a resource location
    function addToTag(tag, item) {
        event.add(tag, item)
    }

    // Add Ambrosium Campfire as a heat source
    addToTag('minecraft:campfires', 'ancient_aether:ambrosium_campfire')

    // Add Altar of Fire as a heat source (because why not)
    addToTag('farmersdelight:heat_sources', 'cataclysm:altar_of_fire')
})