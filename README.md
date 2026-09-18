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
