// Create recipes for all Gate Pearls
ServerEvents.recipes(event => {

    // Creates a recipe for a gate pearl
    // Expects pattern to be a list and key to be an object
    function gateRecipe(pattern, key, output) {
        event.custom({
            type: 'gateways:gate_recipe',
            group: 'gateways',
            pattern: pattern,
            key: key,
            result: {item: 'gateways:gate_pearl'},
            gateway: output
        })
    }

    // Basic metals gateway
    gateRecipe(
        [
            'ISI',
            'GEG',
            'ISI'
        ],
        {
            I: {item: 'minecraft:iron_ingot'},
            S: {item: 'galosphere:silver_ingot'},
            G: {item: 'minecraft:gold_ingot'},
            E: {item: 'minecraft:ender_eye'}
        },
        'kubejs:basic/metals'
    )
    // Basic gemstones gateway
    gateRecipe(
        [
            'MDM',
            'REJ',
            'MOM'
        ],
        {
            M: {item: 'minecraft:emerald'},
            D: {item: 'minecraft:diamond'},
            R: {item: 'rubinated_nether:ruby'},
            E: {item: 'minecraft:ender_eye'},
            J: {item: 'call_of_yucutan:jade'},
            O: {item: 'samurai_dynasty:onyx'}
        },
        'kubejs:basic/gemstones'
    )
    // Basic obsidian gateway
    gateRecipe(
        [
            'III',
            'IEI',
            'OOO'
        ],
        {
            I: {item: 'forbidden_arcanus:obsidian_ingot'},
            E: {item: 'minecraft:ender_eye'},
            O: {item: 'minecraft:obsidian'}
        },
        'kubejs:basic/obsidian'
    )
    // Basic quartz gateway
    gateRecipe(
        [
            'QQQ',
            'QEQ',
            'BBB'
        ],
        {
            Q: {item: 'minecraft:quartz'},
            E: {item: 'minecraft:ender_eye'},
            B: {item: 'minecraft:quartz_block'}
        },
        'kubejs:basic/quartz'
    )
    // Basic animal gateway
    gateRecipe(
        [
            'LVL',
            'CEP',
            'HMH'
        ],
        {
            L: {item: 'minecraft:leather'},
            V: {item: 'twilightforest:venison'},
            C: {item: 'minecraft:chicken'},
            E: {item: 'minecraft:ender_eye'},
            P: {item: 'minecraft:pork'},
            H: {item: 'minecraft:rabbit_hide'},
            M: {item: 'minecraft:mutton'}
        },
        'kubejs:basic/animal'
    )
    // Basic warden gateway
    gateRecipe(
        [
            'SSS',
            'SES',
            'DWD'
        ],
        {
            S: {item: 'minecraft:sculk_vein'},
            E: {item: 'minecraft:ender_eye'},
            D: {item: 'minecraft:echo_shard'},
            W: {item: 'apotheosis:warden_tendril'}
        },
        'kubejs:basic/warden'
    )
    // Basic Wither Skeleton gateway
    gateRecipe(
        [
            'ABA',
            'BCB',
            'DDD'
        ],
        {
            A: {item: 'iceandfire:witherbone'},
            B: {item: 'minecraft:wither_skeleton_skull'},
            C: {item: 'minecraft:ender_eye'},
            D: {item: 'minecraft:soul_sand'}
        },
        "kubejs:basic/wither_skeleton"
    )


})