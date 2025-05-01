execute as @a[scores={place_command_block=1}] at @s run setblock ~ ~ ~ command_block
execute as @a[scores={place_command_block=1}] run scoreboard players reset @a place_command_block

scoreboard players enable @a place_command_block