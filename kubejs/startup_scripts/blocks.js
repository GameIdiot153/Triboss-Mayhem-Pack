//What you lookin' at?!

StartupEvents.registry('block', event => {
    event.create('triboss_trophy', 'cardinal')
        .displayName('Triboss Trophy')
        .soundType('netherite_block')
        .property(BlockProperties.WATERLOGGED)
        .tagBlock('minecraft:dragon_immune')
        .tagBlock('minecraft:guarded_by_piglins')
        .tagBlock('minecraft:inside_step_sound_blocks')
        .tagBlock('minecraft:wither_immune')
        .tagBlock('witherstormmod:wither_storm_small_cluster_blacklist')
        .tagBlock('witherstormmod:wither_storm_block_blacklist')
        .hardness(0.0)
        .resistance(0.0)
        .waterlogged()
        .box(4,0,4,12,13,12,true)
        .notSolid()
        .viewBlocking(true)
        .model('gi:block/triboss_trophy')
        .renderType('cutout_mipped')
})

console.info('Hello, World! (Loaded startup scripts)')