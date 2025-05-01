//What you lookin' at?!

ServerEvents.recipes(event => {
    // remove shit
    event.remove(
        { output: 'minecraft:ender_eye' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_bee' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_cat' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_chicken' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_cow' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_creeper' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_mushroom_cow' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_parrot' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_phantom' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_pillager' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_skeleton' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_spider' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_villager' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_vindicator' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_wolf' }
    )
    //-----------------------------------------------
    event.remove(
        { id: 'witherstormmod:summon_sickened_zombie' }
    )

    // change shit
    event.replaceInput(
        { id: 'witherstormmod:upgraded_phasometer' },
        'minecraft:ender_eye',
        'supplementaries:crystal_display'
    )
    //-----------------------------------------------
    event.replaceInput(
        { id: 'witherstormmod:type_tracking_amulet' },
        'minecraft:ender_eye',
        'minecraft:slime_ball'
    )
    //-----------------------------------------------
    event.replaceInput(
        { id: 'witherstormmod:type_tracking_amulet' },
        'minecraft:chorus_fruit',
        'minecraft:recovery_compass'
    )
    //-----------------------------------------------
    event.replaceInput(
        { id: 'minecraft:shulker_box'},
        '#forge:chests',
        'supplementaries:sack'
    )

    // add shit
    event.custom({
        "type": "witherstormmod:item_craft_super_beacon",
        "condition": "all_supports",
        "ingredients": [
            {
            "item": "minecraft:ender_pearl"
            },
            {
            "item": "minecraft:blaze_powder"
            },
            {
            "item": "witherstormmod:tainted_dust"
            },
        ],
        "result": {
            "item": "minecraft:ender_eye"
        }
    })
    //-----------------------------------------------
    event.shaped( 'kubejs:triboss_trophy', [
        'SEW',
        'BGB',
        'IPI'
    ], {
        S: 'minecraft:nether_star',
        E: 'minecraft:dragon_egg',
        W: 'witherstormmod:withered_nether_star',
        B: 'quark:gold_bars',
        G: 'supplementaries:goblet',
        I: 'minecraft:gold_ingot',
        P: 'minecraft:light_weighted_pressure_plate'
    })
    //-----------------------------------------------
    event.shaped( 'minecraft:command_block', [
        'PBP',
        'CSC',
        'PAP'
    ], {
        P: 'minecraft:piston',
        B: 'witherstormmod:command_block_book',
        C: 'supplementaries:cog_block',
        S: 'witherstormmod:withered_phlegm_block',
        A: 'witherstormmod:super_support_beacon'
    })
    //-----------------------------------------------
    event.shaped('minecraft:slime_ball',[
        'SSS',
        'SMS',
        'SSS'
    ],{
        S: 'minecraft:snowball',
        M: 'minecraft:magma_cream'
    })
})
console.info('Hello, World! (Loaded server scripts)')
//Stop snooping around!