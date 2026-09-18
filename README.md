# BLOOM RUN — Stage 13

Browser-based side-scrolling survival platformer built with HTML, CSS, and vanilla JavaScript.

## Run
Extract the ZIP and open `index.html` in a modern browser.

## Controls
- W / Up Arrow: jump
- A / Left Arrow: move left
- D / Right Arrow: move right
- S / Down Arrow: crouch / faster fall
- Space or left mouse: shoot
- Esc: pause

## Stage 1
- power ups are spawning in the sky in places that are not reachable 
- remove the 60 second timer 
- make it so the zombies can jump over holes 
- there are platforms that are not reachable by the player 
- there is a wall of plants that continuously moves during the time the game is going - prevents the player from backtracking and adds agency to moving forward - if touched the player is turned into a plant zombie and the game ends 
 
## Stage 2
- make the wall continouos if I'm next to the wall at the far right I shouldn't be able to see the map behind it should cover it up 
- periodically have parkour sections and that's the only spot you can find the bloom power up - power ups can also be air born as long as if the player jumps they can reach it 
- double the speed of the plant wall 
- add a leaderboard section area on the game screen 
- change the starting gun to a non automatic pistol 
- you can gain other weapons(like the AR you use in the previous iteration, shotgun, rpg, sniper, smg, etc) 
- you get one shot if you are hit by a zombie - any weapon excluding the pistol weapon blocks one shot 
 
## Stage 3
- When you fall into the hole then the character should hit the bottom of the screen and disappear and then the game ends 
- have meters counter on the top of the middle of the screen 
- double the speed of the wall 
- the parkour area should have one bloom power up and the parkour section should be harder and more focused on parkour 
- sniper should pierce enemies 
 
## Stage 4
- At every 1000 meters the environment changes(the platforms, ground and background) 
- pistol one shots basic zombies 
- make the special weapons three times as rare 
- after reaching 500 meters more enemy types will spawn like tankier zombies, fast zombies, flying creatures (can't fly too high, can be at different heights, must be reachable by the players bullet), flying creatures that can shoot, etc. 
- add coins that you can collect while running some in the air some on the ground some on platforms etc, all of them should be reachable - coins do not disappear after losing and you can use them in the shop (not yet implemented) 
- add house like structures - you can't enter them but when you walk past you get the weapon that's inside it - that's how you get weapons now instead of from killing enemies 
- enemies killed and distance traveled should both be calculated into the score 
 
## Stage 5
- Question: does the wall speed up or is stuck at the same speed the entire game? 
- You don't need to save for the score to show up on the leaderboard if no name is chosen it just says unknown 
- pistol 1 dmg, sniper 5 dmg pierces, rpg 10 dmg aoe, AR 1.5 dmg, smg 1 dmg, shot gun 1.5 dmg per pellet 
- you might find vehicles (2x faster than normal movement) in houses (motorcycle (protects 1 hit) after 1000 meters, car (shields 2 hits) after 2500 meters, truck (shields 5 hits) after 6000 meters, once hits are used the vehicle breaks and knocks back enemies that are close 
- low level enemies: flyer 1 hp, walker 1 hp, fast walker 1 hp, tanky walker 3 hp 
- medium level enemies: shooting flyer 3hp, jumping walker(periodically jumps) 3hp, bloater walker(explodes on death) 8hp 
- large level enemies: fast flyer 2hp, shielded walker (has a shield that blocks 3 shots) 3hp, rush zombie (large and charges at the player after a charge up - can't jump while rushing) 
 
- before 500 meters you only encounter low level walkers after all low level enemies 
- after 2000 meters you can encounter medium level enemies 
- after 5000 meters you can encounter large level enemies 
  
 
## Stage 6
- I want the player to be able to jump if only one foot is on solid ground 
- you should only encounter regular walkers bellow 1000 meters - after you can encounter the rest of the low level enemies (flyers, fast walker, tanky walker) 
- slow the speed of the wall by half - at 1000 meters the wall speed up by 1.3x of original speed and then at 2000 it should be 1.6x of original speed, and at 3000 it should be at 2x of original speed 
- An icon in the top left begins to shake if the wall within 100 meters of the player, and it will show up if within 300 meters of the player, if over 300 meters away it won't  show up at all 
- if a name is typed that is the name that will show up instead of unknown when a name is not chosen 
- Instead of spawning in out of the sky - you walk out of a house 
- the player has 3 lives at the start if the game(they show up as hearts - when the player has a weapon/vehicle the item is shown to the right of the hearts, when the weapon breaks the icon breaks and disappears and when a vehicle runs out of gas it the icon disappears 
- vehicles are no longer hit based - motorcycle (lasts 8 seconds) after 1000 meters, car (lasts 12 seconds) after 2500 meters, truck (lasts 20 seconds) - vehicles run through all monsters - a gas meter will show how long you can use the vehicle - does not replace the weapon the player has 
 
## Stage 7
- if a name is typed that is the name that will show up instead of unknown when a name is not chosen 
- I want the icon next to the hearts to just be an icon that looks like the weapon or vehicle - no words 
- explosive zombies - look malformed with glowing red/yellow/green orb like things on them - clearly looks like they explode - also when they do explode have some kinda explosion on screen 
- add a character customization screen to the menu(can change gender, hair, skin color, and color of clothes) 
- In the shop add a Cosmetics section, a vehicle skin and weapons skin section, an upgrade section, and a start with x item section 
- In the settings section have a way to turn of music and sfx (separate options) 
- Hide meters ran, coins, and kills during the game 
- add a score multiplier (looks like a bar fills up to max X12 - when multiplier breaks it drops back to the bottom)- in the top middle of the screen 
- Multiplier - gains(collecting all coins in a coin spawn (each spawn should have 5 coins), swapping weapons(reaching a weapon/vehicle house with a weapon already equipped), and collecting bloom) - what breaks it is getting hit even if a weapon blocks it 
- collecting all coins in a coin spawn or swapping weapons provides a 3 seconds speed boost in which you can run through enemies and take no damage 
 
## Stage 8
- make coin spawns twice as rare 
- bug: the enter name bar still shows unknown - even though I've previously entered a name 
- in customization: 
  - have clothes color split between pants and shirt section 
  - add new hair styles: afro, dreads, cornrows, curly, braid, pigtails, spiky, bob, hightop fade, ponytail, bun 
  - add facial hair 
  - add facial hair and hair color section 
  - also for the hair make it look like your looking at it from a side profile since that is how the player sees the character 
- the current parkour zones don't show up until past 5000 meters and they no longer contain the bloom cleanse 
- every 700 meters a bloom cleanse will spawn 
- when explosion zombies get near the player they will start blinking for 1 and a half seconds and then explode 
- when you click escape you can see your coins in the bottom left(coin icon and number) and the meters ran in the bottom middle(number followed by meters - in white) and kills in the bottom right( in red) 
- in shop: start with x item changed to starting item 
  
 
## Stage 8
- in customization: 
  - curly is curly long hair 
  - more realistic/detialed hair 
- when explosion zombie goes off kills zombies near as well 
- there should be a meter above the player that shows them how long a they'll have vehicle 
- if a shooting enemy is off screen it can't shoot 
- remove "slow the speed of the wall by half - at 1000 meters the wall speed up by 1.3x of original speed and then at 2000 it should be 1.6x of original speed, and at 3000 it should be at 2x of original speed" and just set the wall to 2x speed 
- when you click escape it should be total coins not just coins from the run 
- remove the small tutorial from the bottom when in a run 
- remove this coin formation

## Stage 9 changes
- Completing all five coins in a coin group triggers a 3-second **Gold Rush**.
- Gold Rush keeps the 1.5x movement-speed boost, doubles gun damage, and gives the held gun a gold glow.
- Gold Rush does **not** make the player invulnerable and does not let the player ram through enemies.
- The old Momentum Boost banner is removed. Gold Rush appears in yellow on the right side of the screen.
- Bloom wall speed now scales by another 50% at each milestone:
  - 0–999m: 280 px/s
  - 1000–1999m: 420 px/s
  - 2000–2999m: 630 px/s
  - 3000m+: 945 px/s
- Medium enemies begin spawning after 3000m.
- Large enemies begin spawning after 8000m.
- Added procedural arcade SFX for guns, zombie impacts, vehicles, player hits, the Bloom wall, Gold Rush, coins, explosions, and pickups.
- Replaced the old background drone with an original procedural gritty arcade soundtrack.
- Music and SFX continue to respect their separate Settings toggles.

## Stage 10
- Removed the menu line: "Keep your streak alive. Clean runs build score. One hit breaks the multiplier."
- Reworked the title screen into a split composition: the safehouse is visible on the left and the menu panel sits on the right.
- Coin pickups now use a springy/bouncy synthesized sound.
- Gold Rush now uses a wind/booster surge instead of a musical reward chirp.
- Player damage uses a short vocal-like "ugh" impact sound.
- Bloom wall proximity uses layered rushing-root, dirt, and cracking sounds.
- Infected being shot use a separate low "uuuguh"-style synthesized groan.
- Every gun class now has a distinct firing profile: pistol crack, AR report, tight SMG snap, shotgun blast, sniper crack/echo, and RPG launch thump/whoosh.
- Vehicles use repeating two-part engine revs while active.
- Existing Music and SFX settings still independently control soundtrack and effects.


## Stage 11
- The Bloom wall now begins 100 meters behind the player.
- Wall movement is constant at 120% of the player's normal run speed (408 px/s versus 340 px/s).
- Weapon reports were rebuilt with pressure thumps, filtered noise, air tails, and unique profiles for pistol, AR, SMG, shotgun, sniper, and RPG.
- The wall sound is deeper, emphasizing subterranean rumble, roots, wood friction, and moving dirt.
- Gold Rush audio is continuous for the full power-up duration. It uses a fortepiano envelope: a loud initial wind/booster surge that quickly softens into a sustained rush.
- Zombie-hit and player-hit sounds use breathy/formant-like organic grunts and fleshy impacts instead of bright digital tones.
- The soundtrack is replaced with a grittier, more hectic procedural score built around heavy percussion, dirty bass pulses, debris hits, and abrasive noise rather than arcade leads.
- Vehicle audio uses lower combustion-style cylinder/exhaust layers and filtered road noise for a less digital engine sound.
- Existing Music and SFX toggles still independently control their respective audio.


## Stage 12
- Bloom wall still begins 100m behind the runner, but now moves at 20% player speed before 500m, matches player speed from 500-999m, and becomes 20% faster at 1000m+.
- Added a heavy wall-collision impact sound.
- Wall root audio is deeper, louder overall, and scales up as the wall gets closer.
- Shooting-enemy projectiles are nonlethal: they can interrupt the run and cost a heart/weapon guard, but never reduce the runner below one life.
- Bloater explosions destroy any active vehicle if the vehicle hits the Bloater or is caught in the blast.
- Gold Rush weapon reports are reinforced to sound stronger.
- Coin pickups use sharper metallic clinks.
- Gold Rush audio is a more fantastical continuous wind/booster bed.
- The in-run starting safehouse now visually matches the menu safehouse much more closely.


## Stage 13
- Bloom-wall movement rules stay the same as Stage 12, but wall audio is silent while the wall is far behind the camera. Root-rush audio begins only shortly before the wall reaches the left edge of the viewport and grows stronger once it is visible.
- Added a distinct death sound for wall, pit, and zombie deaths.
- Gold Rush restores the exact Stage 9 three-step rising cue instead of the continuous Stage 11/12 wind bed.
- The procedural soundtrack is significantly louder and now explicitly resumes the Web Audio context when necessary so music is audible when Music is enabled.
- Zombies make lower breathy/moaning vocal sounds when shot.
- Direct character damage uses a separate human pain/moan sound rather than the multiplier-break effect.
- Multiplier breaks have their own non-vocal impact sound so blocked hits do not incorrectly trigger a human moan.


## Stage 14
- All guns have infinite ammunition.
- Special weapons are stored as unique inventory slots and automatically used by priority: RPG > Sniper > Shotgun > AR > SMG > Pistol.
- Picking up another weapon while already carrying a special weapon triggers WEAPON SWAP, +50 score, multiplier gain, and the existing swap speed boost. Duplicate weapon pickups still trigger the swap reward without creating duplicate inventory.
- Hits consume the highest-priority stored special weapon; the next-highest weapon becomes active automatically.
- Completing a five-coin set displays GOLD RUSH and awards +100 score.
- Bloom cleansers display BLOOM FIXED and award +25 score.
- Run-action notices appear below the score in slanted green text.
- Gold Rush activation audio is quieter.

## Stage 15
- Shooting increases Bloom once per trigger/shot event rather than per projectile. Multi-pellet shots only add Bloom once; the shotgun now fires 5 pellets.
- Added purchasable/equippable character cosmetic themes: Gold, Festive, Camo, Blooming, Cosmic, Spooky/Halloween, Cupid, St. Patrick's Day, Soldier, Beach, Ninja, and Pirate. These layer over the player's existing customization rather than replacing gender, hair, skin tone, shirt color, or pants color.
- Added weapon and vehicle finishes: Gold, Festive, Camo, Zebra, Ultra Realistic, Glowing, Toxic, Blooming, Water, Grass, Cosmic, Neon, and Dots.
- The Starting Item shop now contains all weapons and vehicles. An equipped starting item is granted at the beginning of future runs and gets a unique sign outside the safehouse on the menu.
- Added a high-cost Bloom Stabilizer permanent upgrade, which reduces passive and trigger-based Bloom accumulation by 15%.
- Bloom cleanser pickups remain reachable but now spawn high enough to require a committed jump.
- Added land obstacles to long solid-ground sections while keeping them away from ledges, houses, and coin groups: mud slows the runner, thorns remove a heart, and plant traps stop movement until Space is rapidly pressed 8 times.


## Stage 16
- Rebuilt the Shop as a horizontal card carousel instead of stacked item grids.
- Q / E (or the category arrow buttons) cycles Cosmetics, Vehicle Skins, Weapon Skins, Upgrades, and Starting Item; only the active category is visible.
- Shop cards now show a visual preview first, followed by the item name and price.
- Starting Item previews use the actual unique safehouse sign design, and Pistol was removed from the Starting Item shop.
- Restored the shotgun to its pre-Stage-15 seven-pellet spread while Bloom still increases only once per trigger pull.
- Vehicles are affected by land obstacles: mud slows them, spikes slow them and break the multiplier, and plant traps can capture riders.
- Mud now renders visibly on top of the ground surface.
- Plant traps center the character inside the vines, visually recede as Space is mashed, remain in the world after escape, and launch the player forward with a brief escape burst.
- Plant traps and spikes break the score multiplier; mud does not.


## Stage 17
- Character cosmetic themes now replace shirt/pants colors instead of inheriting customization clothing colors; hair and skin tone remain personalized unless a mask/hood intentionally covers hair.
- Reworked character cosmetic rendering with more recognizable themed outfits, accessories, headgear, masks, armor, wings, and detailing.
- Festive weapon/vehicle skins now include wreath details.
- Camo uses a fuller camouflage pattern; zebra stripes and polka dots cover the equipment more clearly.
- Blooming equipment grows visible stems, leaves, and flowers off the weapon/vehicle.
- Vehicle bodies use patterns across the whole body instead of leaving the center as one flat color.
- Added previous/next preview controls in Weapon Skins and Vehicle Skins so different weapon/vehicle models can be inspected before buying/equipping a skin.
- Starting Item signs now explicitly render the currently equipped weapon or vehicle skin.
- Plant-trap escape launches lock control only until the player is 5 meters beyond the trap, then normal control returns.
