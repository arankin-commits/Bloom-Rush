# BLOOM RUN — Stage 9

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
