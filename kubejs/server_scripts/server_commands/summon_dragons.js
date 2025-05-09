/*
    Dragon constants
*/
const dragon_types = {0: 'fire', 1: 'ice', 2: 'lightning'}      // Only used when making skeletons
const dragon_ages = {0: 50*24000, 1: 75*24000, 2: 100*24000}    // Corresponds to stages 3, 4, and 5
const dragon_gender = {0: false, 1: true}                       // false = female, true = male

/*
    Summon a random dragon of the specified type at the marker's position.
    The dragon will have a random color and gender, and be either stage 3, 4, or 5.
    type = "fire", "ice", or "lightning"
*/
function summonDragon(server, dimension, type, x, y, z) {
    var color = Math.round(Math.random() * 3)
    var age = dragon_ages[Math.round(Math.random() * 2)]
    var gender = dragon_gender[Math.round(Math.random())]
    
    var cmd = `execute in ${dimension} run summon iceandfire:${type}_dragon ${x} ${y} ${z} ` +
              `{HomeAreaX:${x},HomeAreaY:${y},HomeAreaZ:${z},HomeDimension:"${dimension}",` +
              `AgingDisabled:true,AgeTicks:${age},Variant:${color},Health:1000,` +
              `PersistenceRequired:true,Gender:${gender}}`
    server.runCommandSilent(cmd)
}

// Summons a dead dragon's skeleton
function summonDeadDragon(server, dimension, x, y, z) {
    var type = dragon_types[Math.round(Math.random() * 2)]
    var age = dragon_ages[Math.round(Math.random())]
    var gender = dragon_gender[Math.round(Math.random())]
    var rotation = Math.round(Math.random() * 3) * 90

    var cmd = `execute in ${dimension} run summon iceandfire:${type}_dragon ${x} ${y} ${z} ` +
              `{AgeTicks:${age},Gender:${gender},Rotation:[${rotation}f],` +
              `DeathStage:10,ModelDead:true,PersistenceRequired:true}`
    server.runCommandSilent(cmd)
}