(() => {
  const menuScreen = document.getElementById('menuScreen');
  const wipScreen = document.getElementById('wipScreen');
  const customizeScreen = document.getElementById('customizeScreen');
  const shopScreen = document.getElementById('shopScreen');
  const settingsScreen = document.getElementById('settingsScreen');
  const gameScreen = document.getElementById('gameScreen');
  const runBtn = document.getElementById('runBtn');
  const backBtn = document.getElementById('backBtn');
  const customizeBtn = document.getElementById('customizeBtn');
  const customizeBackBtn = document.getElementById('customizeBackBtn');
  const shopBtn = document.getElementById('shopBtn');
  const shopBackBtn = document.getElementById('shopBackBtn');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsBackBtn = document.getElementById('settingsBackBtn');
  const shopCoinBalance = document.getElementById('shopCoinBalance');
  const customPreview = document.getElementById('customPreview');
  const genderSelect = document.getElementById('genderSelect');
  const hairSelect = document.getElementById('hairSelect');
  const skinColorInput = document.getElementById('skinColorInput');
  const hairColorInput = document.getElementById('hairColorInput');
  const facialHairSelect = document.getElementById('facialHairSelect');
  const facialHairColorInput = document.getElementById('facialHairColorInput');
  const shirtColorInput = document.getElementById('shirtColorInput');
  const pantsColorInput = document.getElementById('pantsColorInput');
  const musicToggle = document.getElementById('musicToggle');
  const sfxToggle = document.getElementById('sfxToggle');
  const wipTitle = document.getElementById('wipTitle');
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const healthFill = document.getElementById('healthFill');
  const bloomFill = document.getElementById('bloomFill');
  const healthText = document.getElementById('healthText');
  const bloomText = document.getElementById('bloomText');
  const distanceText = document.getElementById('distance');
  const killsText = document.getElementById('killsText');
  const scoreText = document.getElementById('scoreText');
  const bloomWarning = document.getElementById('bloomWarning');
  const weaponIconGraphic = document.getElementById('weaponIconGraphic');
  const vehicleIconGraphic = document.getElementById('vehicleIconGraphic');
  const menuLeaderboardList = document.getElementById('menuLeaderboardList');
  const menuCoinBalance = document.getElementById('menuCoinBalance');
  const coinText = document.getElementById('coinText');
  const biomeText = document.getElementById('biomeText');

  const pausePanel = document.getElementById('pausePanel');
  const resultPanel = document.getElementById('resultPanel');
  const resumeBtn = document.getElementById('resumeBtn');
  const quitBtn = document.getElementById('quitBtn');
  const againBtn = document.getElementById('againBtn');
  const resultMenuBtn = document.getElementById('resultMenuBtn');
  const resultTitle = document.getElementById('resultTitle');
  const resultEyebrow = document.getElementById('resultEyebrow');
  const resultKills = document.getElementById('resultKills');
  const resultScore = document.getElementById('resultScore');
  const resultBloom = document.getElementById('resultBloom');
  const resultDistance = document.getElementById('resultDistance');
  const resultCoins = document.getElementById('resultCoins');
  const playerNameInput = document.getElementById('playerName');
  const saveScoreBtn = document.getElementById('saveScoreBtn');
  const livesHearts = document.getElementById('livesHearts');
  const weaponItemSlot = document.getElementById('weaponItemSlot');
  const vehicleItemSlot = document.getElementById('vehicleItemSlot');
  const vehicleGasFill = document.getElementById('vehicleGasFill');
  const wallWarningIcon = document.getElementById('wallWarningIcon');
  const wallWarningDistance = document.getElementById('wallWarningDistance');
  const saveMessage = document.getElementById('saveMessage');
  const multiplierLabel = document.getElementById('multiplierLabel');
  const multiplierFill = document.getElementById('multiplierFill');
  const multiplierEvent = document.getElementById('multiplierEvent');
  const multiplierHud = document.querySelector('.multiplier-hud');
  const boostBanner = document.getElementById('boostBanner');
  const pauseCoins = document.getElementById('pauseCoins');
  const pauseDistance = document.getElementById('pauseDistance');
  const pauseKills = document.getElementById('pauseKills');

  const keys = new Set();
  const GRAVITY = 2200;
  const RUN_SPEED = 340;
  const JUMP_SPEED = 820;
  const BULLET_SPEED = 1080;
  const LEADERBOARD_KEY = 'bloomRunLeaderboardV1';
  const COIN_KEY = 'bloomRunCoinsV1';
  const PLAYER_NAME_KEY = 'bloomRunPlayerNameV1';
  const CUSTOMIZE_KEY = 'bloomRunCustomizeV1';
  const SETTINGS_KEY = 'bloomRunSettingsV1';
  const BIOME_LENGTH = 10000; // 1000 meters at 10 world pixels per meter.
  const BIOMES = [
    { name: 'OVERGROWN OUTSKIRTS', skyA:'#15241d', skyB:'#0d1713', skyC:'#09100d', ground:'#18221d', groundTop:'#315039', platform:'#344b3d', platformTop:'#79a05f', accent:'#6faa59', silhouette:'#384f41' },
    { name: 'RUSTED INDUSTRIAL', skyA:'#29231d', skyB:'#171513', skyC:'#0d0d0c', ground:'#2c2822', groundTop:'#72543a', platform:'#453d34', platformTop:'#a87749', accent:'#bf7d45', silhouette:'#5a4b3e' },
    { name: 'FLOODED DISTRICT', skyA:'#15252b', skyB:'#0e1a20', skyC:'#091014', ground:'#17262a', groundTop:'#356b72', platform:'#2b454a', platformTop:'#56a0a3', accent:'#64b6b1', silhouette:'#355a61' },
    { name: 'PALE BLOOM FIELDS', skyA:'#292b20', skyB:'#191a14', skyC:'#0d0e0b', ground:'#27291e', groundTop:'#7e8b4a', platform:'#414531', platformTop:'#a5b763', accent:'#c3cf6b', silhouette:'#62684b' }
  ];

  // Legacy reference speed; Stage 11 wall speed is derived from RUN_SPEED in getBloomWallSpeed().
  const BLOOM_WALL_BASE_SPEED = RUN_SPEED * 1.2;
  const BLOOM_WALL_WIDTH = 220;

  const WEAPONS = {
    pistol: {
      label: 'PISTOL', automatic: false, cooldown: 0.32, pellets: 1,
      damage: 1, ammo: Infinity, spread: 1.2, bloomSpread: 1.0,
      bloomPerShot: 0.42, bulletSpeed: 1080, bulletLife: 1.15,
      color: '#d4d8d2', guard: false
    },
    ar: {
      label: 'AR', automatic: true, cooldown: 0.11, pellets: 1,
      damage: 1.5, ammo: 54, spread: 2.0, bloomSpread: 0.88,
      bloomPerShot: 0.34, bulletSpeed: 1160, bulletLife: 1.3,
      color: '#9bb8a2', guard: true
    },
    shotgun: {
      label: 'SHOTGUN', automatic: false, cooldown: 0.66, pellets: 7,
      damage: 1.5, ammo: 16, spread: 15, bloomSpread: 0.7,
      bloomPerShot: 1.15, bulletSpeed: 940, bulletLife: 0.62,
      color: '#d2ad74', guard: true
    },
    rpg: {
      label: 'RPG', automatic: false, cooldown: 0.95, pellets: 1,
      damage: 10, ammo: 6, spread: 1.1, bloomSpread: 0.45,
      bloomPerShot: 1.25, bulletSpeed: 650, bulletLife: 2.0,
      color: '#d27054', guard: true, explosive: true, radius: 115
    },
    sniper: {
      label: 'SNIPER', automatic: false, cooldown: 0.82, pellets: 1,
      damage: 5, ammo: 10, spread: 0.25, bloomSpread: 0.36,
      bloomPerShot: 0.72, bulletSpeed: 1550, bulletLife: 1.5,
      color: '#8ecad0', guard: true
    },
    smg: {
      label: 'SMG', automatic: true, cooldown: 0.075, pellets: 1,
      damage: 1, ammo: 78, spread: 4.3, bloomSpread: 1.1,
      bloomPerShot: 0.28, bulletSpeed: 1040, bulletLife: 1.0,
      color: '#b6a2d6', guard: true
    }
  };
  const WEAPON_KEYS = ['ar', 'shotgun', 'rpg', 'sniper', 'smg'];

  const VEHICLES = {
    motorcycle: { label: 'MOTORCYCLE', minDistance: 1000, duration: 8,  color: '#d2b05c' },
    car:        { label: 'CAR',        minDistance: 2500, duration: 12, color: '#6fa2bf' },
    truck:      { label: 'TRUCK',      minDistance: 6000, duration: 20, color: '#9a7659' }
  };


  let dpr = 1;
  let last = performance.now();
  let state = 'menu';
  let gameTime = 0;
  let spawnClock = 0;
  let cameraX = 0;
  let shake = 0;
  let maxBloom = 0;
  let nextEnemyId = 1;
  let facing = 1;
  let generatedUntil = 0;
  let terrainSectionIndex = 0;
  let bloomWallX = -620;
  let mouseFireHeld = false;
  let currentRunSaved = false;
  let currentRunId = null;
  let weaponFlash = 0;
  let guardFlash = 0;
  let pitDeathPhase = 0;
  let pitDeathTimer = 0;
  let spawnHouse = null;
  let spawnWalkActive = false;
  let weaponBreakTimer = 0;
  let brokenWeaponLabel = '';
  let nameAutosaveTimer = null;
  let multiplierFlashTimer = 0;
  let multiplierBreakTimer = 0;
  let multiplierMessageTimer = 0;
  let characterStyle = null;
  let audioContext = null;
  let musicNodes = null;
  let goldRushAudio = null;
  let wallSfxClock = 0;
  let vehicleSfxClock = 0;

  let player;
  let bullets = [];
  let enemies = [];
  let pickups = [];
  let weaponPickups = []; // legacy array kept empty; Stage 4 weapons come from houses.
  let coins = [];
  let houses = [];
  let enemyProjectiles = [];
  let particles = [];
  let platforms = [];
  let holes = [];
  let decorations = [];
  let parkourZones = [];
  let coinGroups = new Map();
  let nextCoinGroupId = 1;
  let nextBloomCleanseMeter = 700;
  let explosions = [];

  function showScreen(screen) {
    [menuScreen, wipScreen, customizeScreen, shopScreen, settingsScreen, gameScreen].forEach(s => s && s.classList.remove('active'));
    screen.classList.add('active');
  }

  function openWip(name) {
    wipTitle.textContent = name.toUpperCase();
    showScreen(wipScreen);
    state = 'wip';
  }

  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => openWip(btn.dataset.page));
  });

  function openMenuPanel(screen) {
    showScreen(screen);
    state = 'menu-panel';
  }

  backBtn.addEventListener('click', () => {
    showScreen(menuScreen);
    state = 'menu';
    renderLeaderboard();
  });
  customizeBtn.addEventListener('click', () => { loadCustomizeControls(); openMenuPanel(customizeScreen); drawCustomizerPreview(); });
  customizeBackBtn.addEventListener('click', () => { showScreen(menuScreen); state = 'menu'; });
  shopBtn.addEventListener('click', () => { setCoinBalance(getCoinBalance()); openMenuPanel(shopScreen); });
  shopBackBtn.addEventListener('click', () => { showScreen(menuScreen); state = 'menu'; });
  settingsBtn.addEventListener('click', () => { loadSettingsControls(); openMenuPanel(settingsScreen); });
  settingsBackBtn.addEventListener('click', () => { showScreen(menuScreen); state = 'menu'; });

  runBtn.addEventListener('click', startGame);
  againBtn.addEventListener('click', () => {
    if (state === 'ended') saveCurrentScore(false);
    startGame();
  });
  resultMenuBtn.addEventListener('click', () => {
    if (state === 'ended') saveCurrentScore(false);
    returnToMenu();
  });
  quitBtn.addEventListener('click', returnToMenu);

  resumeBtn.addEventListener('click', () => {
    pausePanel.classList.add('hidden');
    state = 'playing';
    last = performance.now();
  });

  function returnToMenu() {
    stopMusic();
    stopGoldRushAudio();
    state = 'menu';
    renderLeaderboard();
    pausePanel.classList.add('hidden');
    resultPanel.classList.add('hidden');
    showScreen(menuScreen);
  }

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function getPreferredName() {
    try { return (localStorage.getItem(PLAYER_NAME_KEY) || '').trim().slice(0,16).toUpperCase(); }
    catch { return ''; }
  }

  function setPreferredName(name) {
    const clean = (name || '').trim().slice(0,16).toUpperCase();
    try {
      if (clean) localStorage.setItem(PLAYER_NAME_KEY, clean);
      else localStorage.removeItem(PLAYER_NAME_KEY);
    } catch {}
    return clean;
  }

  function getCustomization() {
    const defaults = {
      gender:'masculine', hair:'short', facialHair:'none', skin:'#caa98d',
      hairColor:'#1b1b19', facialHairColor:'#1b1b19', shirt:'#51655a', pants:'#26352f'
    };
    try {
      const raw = JSON.parse(localStorage.getItem(CUSTOMIZE_KEY) || 'null');
      if (!raw || typeof raw !== 'object') return defaults;
      // Migrate Stage 7's single clothes color into the new shirt/pants split.
      const migrated = { ...defaults, ...raw };
      if (!raw.shirt && raw.clothes) migrated.shirt = raw.clothes;
      if (!raw.pants && raw.clothes) migrated.pants = '#26352f';
      return migrated;
    } catch { return defaults; }
  }

  function saveCustomization() {
    const next = {
      gender: genderSelect.value,
      hair: hairSelect.value,
      facialHair: facialHairSelect.value,
      skin: skinColorInput.value,
      hairColor: hairColorInput.value,
      facialHairColor: facialHairColorInput.value,
      shirt: shirtColorInput.value,
      pants: pantsColorInput.value
    };
    try { localStorage.setItem(CUSTOMIZE_KEY, JSON.stringify(next)); } catch {}
    characterStyle = next;
    drawCustomizerPreview();
  }

  function loadCustomizeControls() {
    const style = getCustomization();
    genderSelect.value = style.gender;
    hairSelect.value = style.hair;
    facialHairSelect.value = style.facialHair;
    skinColorInput.value = style.skin;
    hairColorInput.value = style.hairColor;
    facialHairColorInput.value = style.facialHairColor;
    shirtColorInput.value = style.shirt;
    pantsColorInput.value = style.pants;
    characterStyle = style;
  }

  [genderSelect, hairSelect, facialHairSelect, skinColorInput, hairColorInput, facialHairColorInput, shirtColorInput, pantsColorInput].forEach(control => {
    control.addEventListener('input', saveCustomization);
    control.addEventListener('change', saveCustomization);
  });

  function getSettings() {
    const defaults = { music:true, sfx:true };
    try {
      const raw = JSON.parse(localStorage.getItem(SETTINGS_KEY) || 'null');
      return raw && typeof raw === 'object' ? { ...defaults, ...raw } : defaults;
    } catch { return defaults; }
  }

  function saveSettings() {
    const settings = { music: !!musicToggle.checked, sfx: !!sfxToggle.checked };
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch {}
    if (!settings.music) stopMusic();
    else if (state === 'playing') startMusic();
    if (!settings.sfx) stopGoldRushAudio();
    else if (state === 'playing' && player && player.goldRushTime > 0) startGoldRushAudio(false);
  }

  function loadSettingsControls() {
    const settings = getSettings();
    musicToggle.checked = settings.music;
    sfxToggle.checked = settings.sfx;
  }
  musicToggle.addEventListener('change', saveSettings);
  sfxToggle.addEventListener('change', saveSettings);

  function ensureAudio() {
    if (!audioContext) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioContext = new AC();
    }
    if (audioContext && audioContext.state === 'suspended') audioContext.resume().catch(()=>{});
    return audioContext;
  }

  function playNoiseBurst(ac, destination, duration, volume, highpass = 0) {
    const length = Math.max(1, Math.floor(ac.sampleRate * duration));
    const buffer = ac.createBuffer(1, length, ac.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    const src = ac.createBufferSource();
    src.buffer = buffer;
    let node = src;
    if (highpass > 0) {
      const filter = ac.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = highpass;
      src.connect(filter);
      node = filter;
    }
    const gain = ac.createGain();
    gain.gain.value = volume;
    node.connect(gain); gain.connect(destination);
    src.start();
  }

  function playSfx(kind='ui', detail=null) {
    if (!getSettings().sfx) return;
    const ac = ensureAudio();
    if (!ac) return;
    const now = ac.currentTime;
    const master = ac.createGain();
    master.gain.value = .86;
    master.connect(ac.destination);

    const tone = (freq, dur, type='sine', volume=.045, endFreq=null, delay=0) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      const t = now + delay;
      osc.type = type;
      osc.frequency.setValueAtTime(Math.max(1, freq), t);
      if (endFreq && endFreq > 0) osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), t + dur);
      gain.gain.setValueAtTime(.0001, t);
      gain.gain.exponentialRampToValueAtTime(volume, t + Math.min(.006, dur * .16));
      gain.gain.exponentialRampToValueAtTime(.0001, t + dur);
      osc.connect(gain); gain.connect(master); osc.start(t); osc.stop(t + dur + .035);
    };

    const noise = (dur, volume=.04, filterType='highpass', startFreq=900, endFreq=null, delay=0, q=1.1) => {
      const length = Math.max(1, Math.floor(ac.sampleRate * dur));
      const buffer = ac.createBuffer(1, length, ac.sampleRate);
      const data = buffer.getChannelData(0);
      let last = 0;
      for (let i=0;i<length;i++) {
        // Slightly correlated noise has more physical body than raw white noise.
        const white = Math.random()*2-1;
        last = last * .72 + white * .28;
        const fade = Math.pow(1 - i / length, .42);
        data[i] = last * fade;
      }
      const src = ac.createBufferSource();
      src.buffer = buffer;
      const filter = ac.createBiquadFilter();
      filter.type = filterType;
      const t = now + delay;
      filter.frequency.setValueAtTime(Math.max(20,startFreq), t);
      if (endFreq && endFreq > 0) filter.frequency.exponentialRampToValueAtTime(Math.max(20,endFreq), t + dur);
      filter.Q.value = q;
      const gain = ac.createGain();
      gain.gain.setValueAtTime(.0001, t);
      gain.gain.exponentialRampToValueAtTime(volume, t + Math.min(.014, dur*.12));
      gain.gain.exponentialRampToValueAtTime(.0001, t + dur);
      src.connect(filter); filter.connect(gain); gain.connect(master);
      src.start(t); src.stop(t + dur + .035);
    };

    const bodyThump = (freq=58, dur=.12, volume=.07, delay=0) => {
      tone(freq, dur, 'sine', volume, Math.max(26, freq*.46), delay);
      noise(dur*.72, volume*.36, 'lowpass', 520, 180, delay, .7);
    };

    const organicGroan = (base=112, dur=.33, volume=.07, delay=0) => {
      // A breathy, formant-like grunt: low voiced body plus two filtered-noise bands.
      tone(base, dur, 'triangle', volume*.7, base*.72, delay);
      noise(dur, volume*.48, 'bandpass', base*4.7, base*3.4, delay, 2.4);
      noise(dur*.82, volume*.31, 'bandpass', base*8.4, base*6.1, delay+.018, 2.0);
      noise(dur*.46, volume*.20, 'lowpass', 640, 260, delay+.025, .65);
    };

    if (kind === 'gun' || kind === 'shoot') {
      const weapon = detail || (player && player.weapon) || 'pistol';
      // Weapon reports are built from a pressure thump, mechanical crack, and short air tail.
      if (weapon === 'pistol') {
        bodyThump(76,.095,.085);
        noise(.055,.115,'bandpass',2450,1650,0,1.8);
        noise(.105,.045,'highpass',1150,2800,.015,.8);
        noise(.12,.018,'bandpass',700,430,.045,1.2);
      } else if (weapon === 'ar') {
        bodyThump(67,.085,.09);
        noise(.047,.118,'bandpass',2850,1850,0,2.0);
        noise(.095,.046,'highpass',1350,3400,.008,.85);
        tone(118,.07,'triangle',.028,72,.018);
      } else if (weapon === 'smg') {
        bodyThump(82,.060,.062);
        noise(.038,.088,'bandpass',3300,2200,0,2.2);
        noise(.062,.03,'highpass',1800,3900,.006,.8);
      } else if (weapon === 'shotgun') {
        bodyThump(48,.21,.145);
        noise(.16,.14,'lowpass',1700,260,0,.65);
        noise(.075,.09,'bandpass',2200,1150,0,1.3);
        noise(.24,.03,'bandpass',620,270,.04,1.1);
      } else if (weapon === 'sniper') {
        bodyThump(54,.145,.12);
        noise(.052,.15,'bandpass',3900,2200,0,2.5);
        noise(.13,.055,'highpass',1750,5200,.006,.9);
        noise(.30,.026,'bandpass',820,350,.12,1.5);
        tone(72,.28,'sine',.026,48,.12);
      } else if (weapon === 'rpg') {
        bodyThump(42,.25,.115);
        noise(.34,.09,'lowpass',980,170,0,.55);
        noise(.28,.072,'bandpass',520,1100,.018,.7);
        noise(.45,.036,'highpass',620,1900,.045,.6);
      }
    } else if (kind === 'zombieHit') {
      // Fleshy impact first, then an organic infected grunt with no square/saw timbre.
      bodyThump(54,.10,.075);
      noise(.075,.052,'lowpass',720,240,0,.65);
      organicGroan(104,.35,.078,.028);
    } else if (kind === 'vehicle') {
      // Combustion-like engine revs: low cylinders + filtered exhaust/road noise.
      const vehicle = detail || (player && player.vehicle) || 'car';
      const base = vehicle === 'motorcycle' ? 82 : vehicle === 'truck' ? 38 : 54;
      const top = vehicle === 'motorcycle' ? 176 : vehicle === 'truck' ? 72 : 112;
      tone(base,.38,'sine',.065,top,0);
      tone(base*.51,.38,'triangle',.043,top*.52,0);
      noise(.40,.05,'bandpass',vehicle === 'truck' ? 145 : 220, vehicle === 'motorcycle' ? 520 : 320,0,1.4);
      noise(.34,.032,'lowpass',760,260,.01,.6);
      tone(base*1.04,.32,'sine',.056,top*.93,.42);
      noise(.34,.044,'bandpass',vehicle === 'truck' ? 135 : 205, vehicle === 'motorcycle' ? 480 : 300,.42,1.35);
    } else if (kind === 'hit') {
      bodyThump(45,.13,.09);
      noise(.07,.048,'lowpass',640,220,0,.6);
      organicGroan(92,.31,.09,.015);
    } else if (kind === 'wall') {
      // Deep root mass: subterranean rumble, woody friction and dirt, with very little treble.
      tone(29,.72,'sine',.075,24);
      tone(43,.62,'triangle',.045,31,.03);
      noise(.78,.085,'lowpass',420,105,0,.7);
      noise(.64,.055,'bandpass',150,245,.02,1.25);
      noise(.11,.032,'bandpass',540,330,.16,1.6);
      noise(.09,.028,'bandpass',470,290,.43,1.5);
    } else if (kind === 'goldrush') {
      // One-shot fallback only; the actual Gold Rush uses the continuous loop below.
      noise(.22,.055,'bandpass',420,2200,0,.7);
      tone(52,.20,'sine',.035,78);
    } else if (kind === 'coin') {
      tone(520,.09,'sine',.052,345);
      tone(285,.075,'triangle',.026,430,.02);
      tone(430,.105,'sine',.05,720,.085);
      tone(780,.07,'triangle',.026,1060,.16);
    } else if (kind === 'bloom') {
      tone(410,.13,'sine',.04,620);
    } else if (kind === 'explode') {
      bodyThump(38,.34,.15);
      noise(.36,.12,'lowpass',1500,130,0,.55);
      noise(.15,.052,'bandpass',900,430,.015,1.0);
    } else if (kind === 'boost') {
      noise(.27,.034,'bandpass',520,1900,0,.8);
      tone(92,.22,'triangle',.035,165);
    } else if (kind === 'pickup') {
      tone(320,.10,'triangle',.04,470);
    } else {
      tone(250,.045,'triangle',.03,190);
    }

    setTimeout(() => { try { master.disconnect(); } catch {} }, 1800);
  }

  function startGoldRushAudio(retrigger=true) {
    if (!getSettings().sfx || !player || player.goldRushTime <= 0) return;
    const ac = ensureAudio();
    if (!ac) return;
    const now = ac.currentTime;

    if (!goldRushAudio) {
      const master = ac.createGain();
      master.gain.value = .0001;
      master.connect(ac.destination);

      // A looping, broadband wind/booster bed with no obvious repeating pitch.
      const seconds = 1.8;
      const buffer = ac.createBuffer(1, Math.floor(ac.sampleRate * seconds), ac.sampleRate);
      const data = buffer.getChannelData(0);
      let low = 0;
      for (let i=0;i<data.length;i++) {
        const white = Math.random()*2-1;
        low = low*.91 + white*.09;
        data[i] = white*.45 + low*.75;
      }
      const src = ac.createBufferSource();
      src.buffer = buffer;
      src.loop = true;

      const hp = ac.createBiquadFilter();
      hp.type = 'highpass'; hp.frequency.value = 180;
      const lp = ac.createBiquadFilter();
      lp.type = 'lowpass'; lp.frequency.value = 2600;
      const band = ac.createBiquadFilter();
      band.type = 'peaking'; band.frequency.value = 620; band.Q.value = .7; band.gain.value = 6;
      src.connect(hp); hp.connect(lp); lp.connect(band); band.connect(master);

      const rumble = ac.createOscillator();
      const rumbleGain = ac.createGain();
      rumble.type = 'sine'; rumble.frequency.value = 46;
      rumbleGain.gain.value = .018;
      rumble.connect(rumbleGain); rumbleGain.connect(master);

      src.start(); rumble.start();
      goldRushAudio = { master, src, rumble, rumbleGain };
    }

    const g = goldRushAudio.master.gain;
    g.cancelScheduledValues(now);
    const current = Math.max(.0001, g.value || .0001);
    g.setValueAtTime(current, now);
    if (retrigger) {
      // Fortepiano: strong initial blast, then immediate drop to a softer sustained wind.
      g.linearRampToValueAtTime(.14, now + .035);
      g.exponentialRampToValueAtTime(.038, now + .52);
    } else {
      g.linearRampToValueAtTime(.038, now + .12);
    }
  }

  function stopGoldRushAudio() {
    if (!goldRushAudio) return;
    try { goldRushAudio.src.stop(); } catch {}
    try { goldRushAudio.rumble.stop(); } catch {}
    try { goldRushAudio.master.disconnect(); } catch {}
    goldRushAudio = null;
  }

  function startMusic() {
    if (!getSettings().music || musicNodes) return;
    const ac = ensureAudio();
    if (!ac) return;

    const master = ac.createGain();
    master.gain.value = .050;
    const drive = ac.createWaveShaper();
    const curve = new Float32Array(512);
    for (let i=0;i<curve.length;i++) {
      const x = i / (curve.length - 1) * 2 - 1;
      curve[i] = Math.tanh(x * 1.9);
    }
    drive.curve = curve;
    drive.oversample = '2x';
    const lowpass = ac.createBiquadFilter();
    lowpass.type = 'lowpass'; lowpass.frequency.value = 4300; lowpass.Q.value = .35;
    master.connect(drive); drive.connect(lowpass); lowpass.connect(ac.destination);

    // Grittier, more hectic score: pounding drums, dirty bass pulses and noisy metallic accents.
    const bpm = 154;
    const stepMs = (60 / bpm / 4) * 1000; // sixteenth notes
    const bass = [49,49,55,49,65.41,49,46.25,55,49,58.27,49,65.41,43.65,49,55,46.25];
    let step = 0;

    const musicTone = (freq, dur, type='triangle', vol=.05, endFreq=null, delay=0) => {
      const t = ac.currentTime + delay;
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.type = type; osc.frequency.setValueAtTime(freq,t);
      if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1,endFreq),t+dur);
      gain.gain.setValueAtTime(vol,t); gain.gain.exponentialRampToValueAtTime(.0001,t+dur);
      osc.connect(gain); gain.connect(master); osc.start(t); osc.stop(t+dur+.02);
    };

    const musicNoise = (dur, vol, filterType, freq, q=.8) => {
      const len = Math.max(1, Math.floor(ac.sampleRate * dur));
      const buf = ac.createBuffer(1,len,ac.sampleRate);
      const d = buf.getChannelData(0);
      let brown=0;
      for (let i=0;i<len;i++) { brown = brown*.82 + (Math.random()*2-1)*.18; d[i]=brown; }
      const src=ac.createBufferSource(); src.buffer=buf;
      const filter=ac.createBiquadFilter(); filter.type=filterType; filter.frequency.value=freq; filter.Q.value=q;
      const gain=ac.createGain(); const t=ac.currentTime;
      gain.gain.setValueAtTime(vol,t); gain.gain.exponentialRampToValueAtTime(.0001,t+dur);
      src.connect(filter); filter.connect(gain); gain.connect(master); src.start(t); src.stop(t+dur+.02);
    };

    const tick = () => {
      if (!musicNodes || musicNodes.master !== master || !getSettings().music) return;
      const pos = step % 16;
      // Kick-like impacts on 1/3 plus extra hectic accents.
      if (pos === 0 || pos === 8 || pos === 11) {
        musicTone(78,.115,'sine',.18,38);
        musicNoise(.07,.055,'lowpass',360,.55);
      }
      // Snare / debris hit.
      if (pos === 4 || pos === 12) {
        musicNoise(.12,.115,'bandpass',1350,1.1);
        musicTone(165,.055,'triangle',.032,92);
      }
      // Fast dirty hats / grit.
      if (pos % 2 === 1 || pos === 6 || pos === 14) musicNoise(.035,.045,'highpass',3100,.65);

      if (pos % 4 === 0 || pos === 6 || pos === 14) {
        const b = bass[pos];
        musicTone(b,.15,'triangle',.11,b*.72);
        musicNoise(.08,.018,'bandpass',260,.8);
      }
      // Sparse abrasive scrape accents, deliberately non-melodic.
      if (pos === 3 || pos === 10 || pos === 15) musicNoise(.09,.035,'bandpass',720 + pos*45,2.0);
      step++;
    };

    musicNodes = { master, drive, lowpass, timer:null };
    tick();
    musicNodes.timer = setInterval(tick, stepMs);
  }

  function stopMusic() {
    if (!musicNodes) return;
    if (musicNodes.timer) clearInterval(musicNodes.timer);
    try { musicNodes.master.disconnect(); } catch {}
    try { musicNodes.drive.disconnect(); } catch {}
    try { musicNodes.lowpass.disconnect(); } catch {}
    musicNodes = null;
  }

  function drawCustomizerPreview() {
    if (!customPreview) return;
    const pctx = customPreview.getContext('2d');
    const style = getCustomization();
    pctx.clearRect(0,0,customPreview.width,customPreview.height);
    const g = pctx.createLinearGradient(0,0,0,customPreview.height);
    g.addColorStop(0,'#17261f'); g.addColorStop(1,'#0a100e');
    pctx.fillStyle=g; pctx.fillRect(0,0,customPreview.width,customPreview.height);
    pctx.fillStyle='rgba(80,130,79,.14)';
    for(let i=0;i<10;i++){pctx.beginPath();pctx.arc(22+i*31,260-(i%3)*9,18,0,Math.PI*2);pctx.fill();}
    drawAvatarFigure(pctx, 140, 78, 2.65, style, 1, false);
  }

  function drawHairStyle(c, style) {
    const color = style.hairColor || '#1b1b19';
    const hair = style.hair || 'short';
    if (hair === 'bald') return;

    c.save();
    c.fillStyle = color;
    c.strokeStyle = color;
    c.lineCap = 'round';
    c.lineJoin = 'round';

    // The face points toward +X. Each silhouette is built as a side profile:
    // forehead/fringe at +X, most volume and length behind the head at -X.
    const curl = (x,y,r) => { c.beginPath(); c.arc(x,y,r,0,Math.PI*2); c.fill(); };
    const strand = (pts, width=2.2) => {
      c.lineWidth = width; c.beginPath(); c.moveTo(pts[0][0],pts[0][1]);
      for (let i=1;i<pts.length;i++) c.quadraticCurveTo(...pts[i]);
      c.stroke();
    };

    if (hair === 'short') {
      c.beginPath(); c.moveTo(-11,8); c.quadraticCurveTo(-12,-2,-3,-5); c.quadraticCurveTo(5,-6,10,1); c.lineTo(8,6); c.quadraticCurveTo(2,2,-4,3); c.lineTo(-6,12); c.lineTo(-11,12); c.closePath(); c.fill();
      c.lineWidth=1.2; strand([[-8,2],[-3,-3,2,-1],[6,0,8,3]],1.2); strand([[-9,6],[-4,1,1,2]],1.1);
    } else if (hair === 'long') {
      c.beginPath(); c.moveTo(-11,8); c.quadraticCurveTo(-13,-3,-3,-6); c.quadraticCurveTo(6,-6,10,1); c.lineTo(7,7); c.lineTo(3,8); c.quadraticCurveTo(0,20,-2,34); c.lineTo(-12,36); c.quadraticCurveTo(-15,20,-11,8); c.closePath(); c.fill();
      c.lineWidth=1.15; strand([[-9,3],[-13,13,-8,31]],1.2); strand([[-4,1],[-7,13,-3,31]],1.15); strand([[1,0],[0,8,1,20]],1.0);
    } else if (hair === 'mohawk') {
      c.beginPath(); c.moveTo(-10,5); c.lineTo(-8,-3); c.lineTo(-5,-11); c.lineTo(-1,-7); c.lineTo(2,-15); c.lineTo(5,-8); c.lineTo(9,-10); c.lineTo(10,4); c.lineTo(6,7); c.lineTo(-8,9); c.closePath(); c.fill();
      c.lineWidth=1; strand([[-5,-7],[-1,-3,4,-6]],1);
    } else if (hair === 'afro') {
      [[-10,5,7],[-8,-2,7],[-2,-7,8],[6,-5,7],[10,2,6],[-11,12,7],[-4,13,8],[4,10,7]].forEach(([x,y,r])=>curl(x,y,r));
      c.globalAlpha=.22; c.strokeStyle='#fff'; c.lineWidth=.9;
      [[-8,-1],[-1,-4],[5,-2],[-7,8],[-1,8]].forEach(([x,y])=>{c.beginPath();c.arc(x,y,3,Math.PI*.2,Math.PI*1.15);c.stroke();}); c.globalAlpha=1; c.strokeStyle=color;
    } else if (hair === 'dreads') {
      c.beginPath(); c.moveTo(-11,7); c.quadraticCurveTo(-11,-4,-2,-5); c.quadraticCurveTo(6,-5,10,2); c.lineTo(8,7); c.lineTo(-10,10); c.closePath(); c.fill();
      [[-10,5,-14,29],[-6,5,-9,34],[-2,4,-4,31],[2,4,1,26]].forEach(([x,y,tx,ty],i)=>{c.lineWidth=3.2; c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(tx-2,16+i*2,tx,ty);c.stroke(); c.globalAlpha=.22;c.strokeStyle='#fff';c.lineWidth=.7;c.stroke();c.globalAlpha=1;c.strokeStyle=color;});
    } else if (hair === 'cornrows') {
      c.lineWidth=2.4;
      [-2,1,4,7].forEach((y,i)=>{c.beginPath();c.moveTo(9,y);c.quadraticCurveTo(0,y-4,-10,y+i*.7);c.stroke();});
      c.fillRect(-11,7,5,10);
      c.globalAlpha=.25;c.strokeStyle='#fff';c.lineWidth=.7;[-1,2,5].forEach(y=>{c.beginPath();c.moveTo(6,y);c.quadraticCurveTo(-1,y-2,-8,y+1);c.stroke();});c.globalAlpha=1;c.strokeStyle=color;
    } else if (hair === 'curly') {
      // Long curly hair: a full side-profile cascade reaching the shoulder/back.
      const curls=[[-9,1,5.2],[-4,-3,5.1],[2,-3,4.8],[7,1,4.4],[-11,7,5.6],[-7,12,5.5],[-11,18,5.3],[-8,24,5.2],[-10,30,4.8],[-4,16,5.2],[-4,22,5.0],[-3,29,4.7]];
      curls.forEach(([x,y,r])=>curl(x,y,r));
      c.globalAlpha=.25;c.strokeStyle='#fff';c.lineWidth=.9;
      [[-9,2,3.1],[-5,10,3],[-9,18,3],[-5,24,2.8],[-9,29,2.5],[1,-1,2.5]].forEach(([x,y,r])=>{c.beginPath();c.arc(x,y,r,.1,Math.PI*1.35);c.stroke();});
      c.globalAlpha=1;c.strokeStyle=color;
    } else if (hair === 'braid') {
      c.beginPath();c.moveTo(-11,7);c.quadraticCurveTo(-11,-4,-2,-5);c.quadraticCurveTo(6,-5,10,1);c.lineTo(7,6);c.lineTo(-10,10);c.closePath();c.fill();
      [[-10,13,4.4],[-12,19,4],[-13,25,3.7],[-14,31,3.3],[-14,36,2.7]].forEach(([x,y,r])=>curl(x,y,r));
      c.globalAlpha=.22;c.strokeStyle='#fff';c.lineWidth=.8;strand([[-10,11],[-14,20,-12,34]],.8);c.globalAlpha=1;c.strokeStyle=color;
    } else if (hair === 'pigtails') {
      c.beginPath();c.moveTo(-11,7);c.quadraticCurveTo(-10,-4,-1,-5);c.quadraticCurveTo(7,-4,10,2);c.lineTo(7,7);c.lineTo(-10,10);c.closePath();c.fill();
      curl(-12,10,5); curl(-16,17,5.2); curl(-18,24,4.6); curl(8,5,4.2); curl(12,10,4.5);
      c.globalAlpha=.22;c.strokeStyle='#fff';c.lineWidth=.8;c.beginPath();c.arc(-16,17,2.5,0,Math.PI*1.4);c.stroke();c.globalAlpha=1;c.strokeStyle=color;
    } else if (hair === 'spiky') {
      c.beginPath(); c.moveTo(-11,7); c.lineTo(-10,-3); c.lineTo(-6,1); c.lineTo(-2,-10); c.lineTo(2,-1); c.lineTo(7,-8); c.lineTo(9,1); c.lineTo(12,-2); c.lineTo(10,7); c.lineTo(-7,11); c.closePath(); c.fill();
      c.globalAlpha=.18;c.strokeStyle='#fff';c.lineWidth=.8;strand([[-7,2],[-2,-2,3,1]],.8);c.globalAlpha=1;c.strokeStyle=color;
    } else if (hair === 'bob') {
      c.beginPath();c.moveTo(-11,7);c.quadraticCurveTo(-10,-5,-1,-6);c.quadraticCurveTo(9,-5,11,4);c.lineTo(10,15);c.quadraticCurveTo(4,20,-4,20);c.lineTo(-11,18);c.closePath();c.fill();
      c.globalAlpha=.22;c.strokeStyle='#fff';c.lineWidth=.9;strand([[-7,1],[-1,-3,6,1]],.9);strand([[-8,8],[-5,13,-4,18]],.8);c.globalAlpha=1;c.strokeStyle=color;
    } else if (hair === 'hightop') {
      c.beginPath();c.moveTo(-9,-14);c.lineTo(7,-14);c.lineTo(9,3);c.quadraticCurveTo(3,5,-3,4);c.lineTo(-10,7);c.closePath();c.fill(); c.fillRect(-11,5,5,9);
      c.globalAlpha=.2;c.strokeStyle='#fff';c.lineWidth=.8;for(let x=-6;x<=4;x+=4){c.beginPath();c.moveTo(x,-12);c.lineTo(x+1,0);c.stroke();}c.globalAlpha=1;c.strokeStyle=color;
    } else if (hair === 'ponytail') {
      c.beginPath();c.moveTo(-11,7);c.quadraticCurveTo(-11,-4,-2,-5);c.quadraticCurveTo(6,-5,10,1);c.lineTo(7,7);c.lineTo(-10,10);c.closePath();c.fill();
      c.beginPath();c.ellipse(-16,10,8,5,-.3,0,Math.PI*2);c.fill();c.beginPath();c.ellipse(-22,18,8,4.5,-.55,0,Math.PI*2);c.fill();c.beginPath();c.ellipse(-25,26,6.5,3.8,-.7,0,Math.PI*2);c.fill();
      c.globalAlpha=.22;c.strokeStyle='#fff';c.lineWidth=.8;strand([[-14,8],[-20,16,-24,25]],.8);c.globalAlpha=1;c.strokeStyle=color;
    } else if (hair === 'bun') {
      c.beginPath();c.moveTo(-11,7);c.quadraticCurveTo(-11,-4,-2,-5);c.quadraticCurveTo(6,-5,10,1);c.lineTo(7,7);c.lineTo(-10,10);c.closePath();c.fill(); curl(-14,0,7.5);
      c.globalAlpha=.22;c.strokeStyle='#fff';c.lineWidth=.8;c.beginPath();c.arc(-14,0,4.2,.4,Math.PI*1.7);c.stroke();c.globalAlpha=1;c.strokeStyle=color;
    }

    // A subtle hairline/strand highlight adds depth without changing the chosen color.
    c.globalAlpha=.12; c.strokeStyle='#fff'; c.lineWidth=.75;
    c.beginPath(); c.moveTo(-7,1); c.quadraticCurveTo(-2,-2,5,1); c.stroke();
    c.restore();
  }

  function drawFacialHair(c, style) {
    const facial = style.facialHair || 'none';
    if (facial === 'none') return;
    c.save(); c.fillStyle = style.facialHairColor || style.hairColor || '#1b1b19';
    if (facial === 'stubble') {
      c.globalAlpha=.7; [[5,15],[7,18],[3,19],[8,20],[1,17]].forEach(([x,y])=>c.fillRect(x,y,1.4,1.4));
    } else if (facial === 'mustache') {
      c.fillRect(4,15,7,2.5); c.fillRect(7,16,5,2);
    } else if (facial === 'goatee') {
      c.fillRect(5,15,7,2.5); c.fillRect(7,18,5,5);
    } else if (facial === 'beard') {
      c.beginPath();c.moveTo(2,14);c.lineTo(11,14);c.lineTo(10,22);c.lineTo(4,24);c.lineTo(0,20);c.closePath();c.fill();
    }
    c.restore();
  }

  function drawAvatarFigure(c, centerX, topY, scale, style, dir=1, crouch=false) {
    c.save(); c.translate(centerX, topY); c.scale(dir*scale,scale);
    const crouchOffset = crouch ? 18 : 0; c.translate(0,crouchOffset);
    c.strokeStyle=style.pants || '#26352f'; c.lineWidth=8;
    c.beginPath(); c.moveTo(-7,37);c.lineTo(-9,56-crouchOffset);c.moveTo(7,37);c.lineTo(10,56-crouchOffset);c.stroke();
    c.fillStyle=style.shirt || '#51655a';
    if (style.gender === 'feminine') { c.beginPath(); c.moveTo(-12,18);c.lineTo(12,18);c.lineTo(15,43);c.lineTo(-15,43);c.closePath();c.fill(); }
    else c.fillRect(-14,18,28,29);
    c.fillStyle=style.skin; c.fillRect(-10,4,20,18);
    drawHairStyle(c, style);
    drawFacialHair(c, style);
    c.fillStyle='#d8f379'; c.fillRect(5,10,3,3);
    c.strokeStyle=style.skin; c.lineWidth=6; c.beginPath(); c.moveTo(8,25);c.lineTo(20,24);c.stroke();
    c.fillStyle='#202725'; c.fillRect(16,20,20,7); c.fillRect(21,27,7,8);
    c.restore();
  }

  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (['w', 'a', 's', 'd', ' ', 'arrowup', 'arrowleft', 'arrowdown', 'arrowright'].includes(k)) {
      e.preventDefault();
    }

    // Semi-auto weapons only fire on a fresh press. Automatic weapons also
    // continue firing in update() while the key remains held.
    if (k === ' ' && state === 'playing' && !e.repeat) shoot();
    keys.add(k);

    if (k === 'escape' && gameScreen.classList.contains('active')) {
      if (state === 'playing') {
        state = 'paused';
        updatePauseStats();
        pausePanel.classList.remove('hidden');
      } else if (state === 'paused') {
        state = 'playing';
        pausePanel.classList.add('hidden');
        last = performance.now();
      }
    }
  });
  addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));

  canvas.addEventListener('mousedown', e => {
    if (e.button !== 0 || state !== 'playing') return;
    e.preventDefault();
    mouseFireHeld = true;
    shoot();
  });
  addEventListener('mouseup', e => {
    if (e.button === 0) mouseFireHeld = false;
  });
  canvas.addEventListener('mouseleave', () => { mouseFireHeld = false; });

  function getLeaderboard() {
    try {
      const raw = localStorage.getItem(LEADERBOARD_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function buildLeaderboardRow(entry, index) {
    const li = document.createElement('li');
    const rank = document.createElement('span');
    const name = document.createElement('span');
    const score = document.createElement('span');
    rank.className = 'board-rank';
    name.className = 'board-name';
    score.className = 'board-score';
    rank.textContent = entry ? `#${index + 1}` : '—';
    name.textContent = entry ? (entry.name || 'UNKNOWN') : 'NO RUNS YET';
    score.textContent = entry ? String(entry.score || 0) : '0';
    li.append(rank, name, score);
    return li;
  }

  function renderLeaderboard() {
    const board = getLeaderboard();
    menuLeaderboardList.innerHTML = '';

    if (!board.length) {
      menuLeaderboardList.appendChild(buildLeaderboardRow(null, 0));
      return;
    }

    board.slice(0, 10).forEach((entry, index) => {
      menuLeaderboardList.appendChild(buildLeaderboardRow(entry, index));
    });
  }

  function saveCurrentScore(auto = false) {
    if (state !== 'ended') return;
    const typedName = playerNameInput.value.trim().slice(0,16).toUpperCase();
    const rememberedName = getPreferredName();
    const cleanName = typedName || rememberedName || 'UNKNOWN';
    if (typedName) setPreferredName(typedName);
    if (!currentRunId) currentRunId = `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;

    const board = getLeaderboard();
    const entry = {
      runId: currentRunId,
      name: cleanName,
      score: Math.floor(player.score),
      kills: player.kills,
      maxBloom: Math.round(maxBloom),
      distance: getDistanceMeters(),
      savedAt: Date.now()
    };
    const existing = board.findIndex(x => x.runId === currentRunId);
    if (existing >= 0) board[existing] = entry;
    else board.push(entry);
    board.sort((a, b) => (b.score - a.score) || (b.distance - a.distance) || (b.kills - a.kills));

    try {
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board.slice(0, 10)));
      currentRunSaved = true;
      saveMessage.textContent = cleanName === 'UNKNOWN'
        ? 'SAVED AS UNKNOWN · ENTER A NAME TO REMEMBER IT'
        : `SAVED AS ${cleanName}`;
      renderLeaderboard();
    } catch {
      saveMessage.textContent = 'COULD NOT SAVE IN THIS BROWSER';
    }
  }
  if (saveScoreBtn) saveScoreBtn.addEventListener('click', () => saveCurrentScore(false));
  playerNameInput.addEventListener('input', () => {
    const typed = playerNameInput.value.trim().slice(0,16).toUpperCase();
    if (typed) setPreferredName(typed);
    if (nameAutosaveTimer) clearTimeout(nameAutosaveTimer);
    nameAutosaveTimer = setTimeout(() => saveCurrentScore(false), 120);
  });
  playerNameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveCurrentScore(false);
    }
  });


  function getCoinBalance() {
    try { return Math.max(0, parseInt(localStorage.getItem(COIN_KEY) || '0', 10) || 0); }
    catch { return 0; }
  }

  function setCoinBalance(value) {
    const amount = Math.max(0, Math.floor(value));
    try { localStorage.setItem(COIN_KEY, String(amount)); } catch {}
    if (menuCoinBalance) menuCoinBalance.textContent = String(amount);
    if (shopCoinBalance) shopCoinBalance.textContent = String(amount);
    return amount;
  }

  function addPermanentCoins(amount) {
    return setCoinBalance(getCoinBalance() + amount);
  }

  function getDistanceMeters() {
    return Math.max(0, Math.floor((player.x - 220) / 10));
  }

  function getBiomeIndexAt(x) {
    return Math.floor(Math.max(0, x - 220) / BIOME_LENGTH) % BIOMES.length;
  }

  function getNextBiomeBoundary(x) {
    const progress = Math.max(0, x - 220);
    return 220 + (Math.floor(progress / BIOME_LENGTH) + 1) * BIOME_LENGTH;
  }

  function getBiomeAt(x) {
    return BIOMES[getBiomeIndexAt(x)];
  }

  function recalcScore() {
    if (!player) return;
    player.score = Math.floor((player.distanceScore || 0) + (player.killScore || 0));
  }

  function updateDistanceScore() {
    const meters = getDistanceMeters();
    if (meters > player.furthestMeter) {
      const gained = meters - player.furthestMeter;
      player.distanceScore += gained * player.multiplier;
      player.furthestMeter = meters;
      recalcScore();
    }
  }

  function showMultiplierEvent(text, broken=false) {
    if (!multiplierEvent) return;
    multiplierEvent.textContent = text;
    multiplierMessageTimer = 1.15;
    if (multiplierHud) {
      multiplierHud.classList.remove('hot','broken');
      void multiplierHud.offsetWidth;
      multiplierHud.classList.add(broken ? 'broken' : 'hot');
    }
  }

  function gainMultiplier(reason) {
    if (!player) return;
    const before = player.multiplier;
    player.multiplier = Math.min(12, player.multiplier + 1);
    showMultiplierEvent(player.multiplier > before ? `${reason} · X${player.multiplier}` : `${reason} · MAX X12`);
    playSfx('pickup');
  }

  function breakMultiplier() {
    if (!player || player.multiplier <= 1) return;
    player.multiplier = 1;
    showMultiplierEvent('MULTIPLIER BROKEN · X1', true);
    playSfx('hit');
  }

  function grantMomentumBoost() {
    if (!player) return;
    player.boostTime = Math.max(player.boostTime || 0, 3);
    playSfx('boost');
  }

  function activateGoldRush() {
    if (!player) return;
    player.goldRushTime = Math.max(player.goldRushTime || 0, 3);
    if (boostBanner) boostBanner.classList.remove('hidden');
    startGoldRushAudio(true);
  }

  function getBloomWallSpeed() {
    // Stage 11: constant pressure at 20% faster than the player's normal run speed.
    return RUN_SPEED * 1.2;
  }

  function getWallDistanceMeters() {
    if (!player) return Infinity;
    const front = bloomWallX + BLOOM_WALL_WIDTH;
    return Math.max(0, Math.floor((player.x - front) / 10));
  }

  function startGame() {
    showScreen(gameScreen);
    pausePanel.classList.add('hidden');
    resultPanel.classList.add('hidden');
    keys.clear();
    mouseFireHeld = false;
    currentRunSaved = false;
    currentRunId = null;

    player = {
      x: 82, y: 100, w: 34, h: 58,
      vx: 0, vy: 0, grounded: true, crouching: false, coyote: .08,
      bloom: 8, kills: 0, score: 0, killScore: 0, distanceScore: 0, furthestMeter: 0, runCoins: 0,
      multiplier: 1, boostTime: 0, goldRushTime: 0,
      shotCooldown: 0, muzzle: 0, invuln: 0,
      weapon: 'pistol', ammo: Infinity, plantZombie: false,
      lives: 3,
      vehicle: null, vehicleTime: 0, vehicleMaxTime: 0
    };

    bullets = [];
    enemies = [];
    pickups = [];
    weaponPickups = [];
    coins = [];
    houses = [];
    enemyProjectiles = [];
    particles = [];
    decorations = [];
    platforms = [];
    holes = [];
    parkourZones = [];
    coinGroups = new Map();
    nextCoinGroupId = 1;
    nextBloomCleanseMeter = 700;
    explosions = [];
    generatedUntil = 0;
    terrainSectionIndex = 0;
    buildLevel(9500);
    const startGroundY = getGroundYAt(82, 0) ?? (innerHeight - 100);
    player.y = startGroundY - player.h;
    spawnHouse = { x: 28, y: startGroundY - 112, w: 150, h: 112, biome: 0 };
    spawnWalkActive = true;

    gameTime = 0;
    spawnClock = 0.75;
    characterStyle = characterStyle || getCustomization();
    startMusic();
    playSfx('ui');
    cameraX = 0;
    // Stage 11: the wall's front begins exactly 100 meters (1000 world px) behind the player.
    bloomWallX = player.x - 1000 - BLOOM_WALL_WIDTH;
    shake = 0;
    maxBloom = player.bloom;
    nextEnemyId = 1;
    weaponFlash = 0;
    guardFlash = 0;
    pitDeathPhase = 0;
    pitDeathTimer = 0;
    weaponBreakTimer = 0;
    wallSfxClock = 0;
    vehicleSfxClock = 0;
    brokenWeaponLabel = '';
    state = 'playing';
    last = performance.now();

    for (let i = 0; i < 4; i++) spawnEnemy(780 + i * 600, 'walker');
    renderLeaderboard();
    setCoinBalance(getCoinBalance());
    updateHUD();
  }

  function addGround(x, width, groundY) {
    // Split ground exactly at 1000m biome boundaries so the terrain itself
    // changes at the same moment as the background.
    let cursor = x;
    const end = x + width;
    while (cursor < end - 0.1) {
      const boundary = getNextBiomeBoundary(cursor);
      const segEnd = Math.min(end, boundary);
      const biome = getBiomeIndexAt(cursor + 1);
      platforms.push({ x: cursor, y: groundY, w: segEnd - cursor, h: 150, kind: 'ground', biome });
      for (let dx = cursor + 80; dx < segEnd - 60; dx += 150 + Math.random() * 120) {
        decorations.push({
          x: dx, y: groundY, biome,
          type: biome === 1 ? (Math.random() > .5 ? 'pipe' : 'bone') : biome === 2 ? (Math.random() > .5 ? 'reed' : 'bone') : (Math.random() > .43 ? 'plant' : 'bone'),
          s: .68 + Math.random() * .75
        });
      }
      cursor = segEnd;
    }
  }

  function createCoinGroup() {
    const id = nextCoinGroupId++;
    coinGroups.set(id, { total:5, collected:0, completed:false });
    return id;
  }

  function addCoin(x, y, value = 1, groupId = null) {
    coins.push({ x, y, w: 18, h: 18, value, groupId, phase: Math.random() * Math.PI * 2, alive: true });
  }

  function addReachableCoinPattern(start, width, groundY) {
    if (width < 300) return;
    const groupId = createCoinGroup();
    const style = Math.floor(Math.random() * 2);
    const count = 5;
    if (style === 0) {
      // Five-coin ground trail.
      const left = start + 120;
      const span = Math.max(150, width - 240);
      for (let i = 0; i < count; i++) addCoin(left + span * (i / 4), groundY - 28, 1, groupId);
    } else {
      // Five-coin smooth airborne arc, always inside the player's jump envelope.
      const left = start + Math.min(180, width * .25);
      const span = Math.min(Math.max(220, width - 220), 330);
      for (let i = 0; i < count; i++) {
        const t = i / 4;
        addCoin(left + span * t, groundY - 44 - Math.sin(t * Math.PI) * 92, 1, groupId);
      }
    }
  }

  function addHouse(x, groundY, rewardKind = 'weapon', type = null) {
    if (!type) {
      if (rewardKind === 'vehicle') {
        const distance = Math.max(0, Math.floor((x - 220) / 10));
        const eligible = Object.keys(VEHICLES).filter(k => distance >= VEHICLES[k].minDistance);
        if (!eligible.length) return;
        type = eligible[Math.floor(Math.random() * eligible.length)];
      } else {
        type = WEAPON_KEYS[Math.floor(Math.random() * WEAPON_KEYS.length)];
      }
    }
    houses.push({ x, y: groundY - 104, w: 112, h: 104, type, rewardKind, claimed: false, biome: getBiomeIndexAt(x) });
  }

  function addNormalSection(groundY) {
    const start = generatedUntil;
    const groundLength = terrainSectionIndex === 0 ? 980 : 560 + Math.random() * 330;
    addGround(start, groundLength, groundY);
    // Stage 8: coin groups are twice as rare. Every group still contains exactly five reachable coins.
    if (Math.random() < 0.5) addReachableCoinPattern(start, groundLength, groundY);

    // Stage 5: special-weapon houses are one-third as common as Stage 4.
    if (terrainSectionIndex > 1 && groundLength > 650) {
      const houseX = start + groundLength * (.55 + Math.random() * .18);
      const distance = Math.max(0, Math.floor((houseX - 220) / 10));
      const roll = Math.random();
      if (roll < 0.042) {
        addHouse(houseX, groundY, 'weapon');
      } else if (roll < 0.120 && distance >= 1000) {
        addHouse(houseX, groundY, 'vehicle');
      }
    }

    const holeWidth = terrainSectionIndex === 0 ? 0 : 105 + Math.random() * 42;
    if (holeWidth > 0) holes.push({ x: start + groundLength, w: holeWidth, y: groundY, parkour: false, biome: getBiomeIndexAt(start + groundLength) });
    generatedUntil = start + groundLength + holeWidth;
  }

  function addParkourSection(groundY) {
    const zoneStart = generatedUntil;
    const entryW = 250;
    addGround(zoneStart, entryW, groundY);

    const pitStart = zoneStart + entryW;
    const widths =  [108, 86, 78, 92, 72, 84, 76, 90, 104];
    const gaps =    [ 62, 72, 68, 82, 70, 76, 84, 70, 78];
    const heights = [ 58,122, 74,142, 96, 34,118, 62,136];
    const sectionPlatforms = [];
    let px = pitStart + 34;

    for (let i = 0; i < widths.length; i++) {
      const p = { x: px, y: groundY - heights[i], w: widths[i], h: 20, kind: 'parkour', biome: getBiomeIndexAt(px) };
      platforms.push(p);
      sectionPlatforms.push(p);
      px += widths[i] + gaps[i];
    }

    // Coin groups are optional here too, keeping Stage 8's overall coin spawn rate lower.
    if (Math.random() < 0.5) {
      const parkourCoinGroup = createCoinGroup();
      [0,2,4,6,8].forEach((idx, coinIndex) => {
        const p = sectionPlatforms[idx];
        const lift = coinIndex === 2 ? 54 : 30;
        addCoin(p.x + p.w * .5 - 9, p.y - lift, 1, parkourCoinGroup);
      });
    }

    const lastP = sectionPlatforms[sectionPlatforms.length - 1];
    const exitStart = lastP.x + lastP.w + 78;
    holes.push({ x: pitStart, w: exitStart - pitStart, y: groundY, parkour: true, biome: getBiomeIndexAt(pitStart) });

    const exitW = 410;
    addGround(exitStart, exitW, groundY);
    parkourZones.push({ x: zoneStart, end: exitStart + exitW, pitStart, pitEnd: exitStart });

    // No guaranteed weapon reward: Stage 4 weapons come only from rare houses.
    const finalGap = 118 + Math.random() * 24;
    holes.push({ x: exitStart + exitW, w: finalGap, y: groundY, parkour: false, biome: getBiomeIndexAt(exitStart + exitW) });
    generatedUntil = exitStart + exitW + finalGap;
  }

  function scheduleBloomCleansers() {
    while (220 + nextBloomCleanseMeter * 10 < generatedUntil - 80) {
      const targetX = 220 + nextBloomCleanseMeter * 10;
      const safeX = findSafeGroundX(targetX, 42);
      const groundY = getGroundYAt(safeX, 42);
      if (groundY !== null) pickups.push(makeBloomPickup(safeX - 12, groundY - 72, true));
      nextBloomCleanseMeter += 700;
    }
  }

  function buildLevel(targetX) {
    const groundY = innerHeight - 100;
    while (generatedUntil < targetX) {
      const generatedMeters = Math.max(0, Math.floor((generatedUntil - 220) / 10));
      // Stage 8: parkour is a late-run feature and cannot appear before 5000m.
      if (generatedMeters >= 5000 && terrainSectionIndex > 0 && terrainSectionIndex % 6 === 0) addParkourSection(groundY);
      else addNormalSection(groundY);
      terrainSectionIndex++;
      scheduleBloomCleansers();
    }
  }

  function getGroundPlatformAt(x, margin = 0) {
    for (const p of platforms) {
      if (p.kind !== 'ground') continue;
      if (x >= p.x + margin && x <= p.x + p.w - margin) return p;
    }
    return null;
  }

  function getGroundYAt(x, margin = 0) {
    const p = getGroundPlatformAt(x, margin);
    return p ? p.y : null;
  }

  function findSafeGroundX(x, margin = 65) {
    x = Math.max(40, x);
    if (getGroundYAt(x, margin) !== null) return x;
    for (let offset = 20; offset < 900; offset += 20) {
      const r = x + offset;
      if (getGroundYAt(r, margin) !== null) return r;
      const l = Math.max(40, x - offset);
      if (getGroundYAt(l, margin) !== null) return l;
    }
    return 180;
  }

  function rectsOverlap(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function makeBloomPickup(x, y, airborne = false) {
    return {
      type: 'bloom', x, y, w: 24, h: 24,
      phase: Math.random() * Math.PI * 2,
      alive: true, airborne
    };
  }

  function spawnWeaponPickup(x, y) {
    const type = WEAPON_KEYS[Math.floor(Math.random() * WEAPON_KEYS.length)];
    weaponPickups.push({
      type, x, y, w: 34, h: 24,
      phase: Math.random() * Math.PI * 2,
      alive: true
    });
  }

  function platformSupporting(entity, lookAheadX = 0) {
    const footY = entity.y + entity.h;
    const probeX = entity.x + entity.w / 2 + lookAheadX;
    for (const p of platforms) {
      if (probeX < p.x || probeX > p.x + p.w) continue;
      if (Math.abs(footY - p.y) <= 12) return p;
    }
    return null;
  }


  function playerFootSupport() {
    if (!player) return null;
    const footY = player.y + player.h;
    // Each probe represents one foot. Either foot being over solid terrain is
    // enough to preserve a grounded jump, even if the other foot is over a gap.
    const footXs = [player.x + 5, player.x + player.w - 5];
    for (const p of platforms) {
      if (Math.abs(footY - p.y) > 10) continue;
      if (footXs.some(x => x >= p.x && x <= p.x + p.w)) return p;
    }
    return null;
  }

  function chooseEnemyType(distanceM) {
    const lowAll = ['walker','fast','tank','flyer'];
    const medium = ['shooter','jumper','bloater'];
    const large = ['fastFlyer','shielded','rush'];
    let pool;
    // Stage 9 progression: low tier after 1000m, medium after 3000m, large after 8000m.
    if (distanceM < 1000) pool = ['walker'];
    else if (distanceM < 3000) pool = [...lowAll, ...lowAll, 'walker'];
    else if (distanceM < 8000) pool = [...lowAll, ...lowAll, ...medium];
    else pool = [...lowAll, ...medium, ...medium, ...large];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function spawnEnemy(forcedX, forcedType = null) {
    let x = forcedX ?? (cameraX + innerWidth + 120 + Math.random() * 300);
    if (x > generatedUntil - 1000) buildLevel(x + 2800);
    const type = forcedType || chooseEnemyType(getDistanceMeters());
    const flying = type === 'flyer' || type === 'shooter' || type === 'fastFlyer';
    const specs = {
      walker:    { hp:1,  speed:95,  w:35, h:55, score:100 },
      fast:      { hp:1,  speed:195, w:31, h:49, score:135 },
      tank:      { hp:3,  speed:58,  w:47, h:66, score:220 },
      flyer:     { hp:1,  speed:128, w:38, h:34, score:155 },
      shooter:   { hp:3,  speed:92,  w:42, h:36, score:245 },
      jumper:    { hp:3,  speed:112, w:36, h:56, score:240 },
      bloater:   { hp:8,  speed:56,  w:52, h:67, score:380 },
      fastFlyer: { hp:2,  speed:235, w:36, h:31, score:290 },
      shielded:  { hp:3,  speed:82,  w:43, h:61, score:340 },
      rush:      { hp:10, speed:74,  w:58, h:76, score:520 }
    }[type];

    if (flying) {
      const baseY = innerHeight - 100;
      const altitude = type === 'shooter' ? 110 + Math.random() * 65 : 75 + Math.random() * 90;
      enemies.push({
        id: nextEnemyId++, type, flying:true, x, y: baseY - altitude - specs.h,
        baseY: baseY - altitude - specs.h, w:specs.w, h:specs.h,
        vx:0, vy:0, health:specs.hp, maxHealth:specs.hp,
        speed:specs.speed, scoreValue:specs.score, grounded:false,
        attack:0, shootClock:type === 'shooter' ? .8 + Math.random() * 1.1 : 999,
        hitFlash:0, bloomStyle:Math.floor(Math.random()*4), seed:Math.random()*20
      });
      return;
    }

    x = findSafeGroundX(Math.max(90, x), 54);
    const groundY = getGroundYAt(x, 54) ?? (innerHeight - 100);
    enemies.push({
      id: nextEnemyId++, type, flying:false, x, y:groundY-specs.h, w:specs.w, h:specs.h,
      vx:0, vy:0, health:specs.hp, maxHealth:specs.hp,
      speed:specs.speed + Math.min(65, gameTime*.18), scoreValue:specs.score,
      grounded:true, attack:0, hitFlash:0,
      shieldShots:type === 'shielded' ? 3 : 0,
      jumpClock:type === 'jumper' ? .7 + Math.random()*1.1 : 999,
      rushState:type === 'rush' ? 'idle' : null,
      rushCooldown:type === 'rush' ? .8 + Math.random()*1.2 : 999,
      rushTimer:0, rushDir:1,
      fuseTimer:type === 'bloater' ? null : undefined,
      bloomStyle:Math.floor(Math.random()*4), seed:Math.random()*20
    });
  }

  function fireEnemyProjectile(enemy) {
    const sx = enemy.x + enemy.w / 2;
    const sy = enemy.y + enemy.h / 2;
    const tx = player.x + player.w / 2;
    const ty = player.y + player.h / 2;
    const dx = tx - sx, dy = ty - sy;
    const len = Math.max(1, Math.hypot(dx,dy));
    const speed = 380;
    enemyProjectiles.push({ x:sx, y:sy, vx:dx/len*speed, vy:dy/len*speed, r:5, life:4, color:'#c5d868' });
  }

  function equipWeapon(type) {
    const def = WEAPONS[type];
    if (!def) return;
    playSfx('pickup');
    player.weapon = type;
    player.ammo = def.ammo;
    weaponFlash = 1;
    guardFlash = 1;
    for (let i = 0; i < 18; i++) {
      particles.push({
        x: player.x + player.w / 2, y: player.y + 22,
        vx: (Math.random() - .5) * 210, vy: (Math.random() - .5) * 180,
        life: .3 + Math.random() * .35, size: 2 + Math.random() * 4,
        color: def.color
      });
    }
  }

  function revertToPistol() {
    player.weapon = 'pistol';
    player.ammo = Infinity;
    player.shotCooldown = Math.max(player.shotCooldown, .24);
  }


  function equipVehicle(type) {
    const def = VEHICLES[type];
    if (!def) return;
    playSfx('vehicle', type);
    vehicleSfxClock = 1.05;
    player.vehicle = type;
    player.vehicleTime = def.duration;
    player.vehicleMaxTime = def.duration;
    guardFlash = 1;
    for (let i=0;i<22;i++) particles.push({
      x:player.x+player.w/2,y:player.y+player.h/2,
      vx:(Math.random()-.5)*250,vy:(Math.random()-.5)*180,
      life:.35+Math.random()*.35,size:2+Math.random()*5,color:def.color
    });
  }

  function endVehicle() {
    if (!player.vehicle) return;
    const def = VEHICLES[player.vehicle];
    const cx = player.x + player.w/2;
    const cy = player.y + player.h/2;
    for (let i=0;i<24;i++) particles.push({
      x:cx,y:cy,vx:(Math.random()-.5)*260,vy:-30+(Math.random()-.5)*180,
      life:.25+Math.random()*.35,size:2+Math.random()*5,color:def.color
    });
    player.vehicle = null;
    player.vehicleTime = 0;
    player.vehicleMaxTime = 0;
  }

  function loseLife(source, dir) {
    playSfx('hit');
    player.lives = Math.max(0, player.lives - 1);
    guardFlash = 1;
    shake = 11;
    player.invuln = 1.15;
    player.vx = -dir * 290;
    player.vy = -260;
    for (let i=0;i<20;i++) particles.push({
      x:player.x+player.w/2,y:player.y+player.h/2,
      vx:(Math.random()-.5)*260,vy:-30+(Math.random()-.5)*220,
      life:.3+Math.random()*.35,size:2+Math.random()*4,color:'#c94f48'
    });
    if (player.lives <= 0) {
      finishGame('zombies');
      return false;
    }
    return true;
  }

  function absorbPlayerHit(source, dir) {
    if (player.boostTime > 0) return true;
    breakMultiplier();
    if (player.weapon !== 'pistol' && WEAPONS[player.weapon].guard) {
      consumeWeaponGuard(source, dir);
      return true;
    }
    return loseLife(source, dir);
  }

  function shoot() {
    if (state !== 'playing' || spawnWalkActive || player.shotCooldown > 0) return;
    const def = WEAPONS[player.weapon];
    if (!def) return;
    if (player.weapon !== 'pistol' && player.ammo <= 0) {
      revertToPistol();
      return;
    }

    const gun = getGunMuzzle();
    const baseAngle = facing === 1 ? 0 : Math.PI;
    const bloomSpread = Math.pow(player.bloom / 100, 1.6) * 29 * def.bloomSpread;

    for (let i = 0; i < def.pellets; i++) {
      const weaponSpread = def.pellets > 1
        ? (i - (def.pellets - 1) / 2) / Math.max(1, (def.pellets - 1) / 2) * def.spread
        : (Math.random() - .5) * def.spread;
      const randomBloom = (Math.random() - .5) * bloomSpread;
      const angle = baseAngle + (weaponSpread + randomBloom) * Math.PI / 180;
      bullets.push({
        x: gun.x, y: gun.y,
        vx: Math.cos(angle) * def.bulletSpeed,
        vy: Math.sin(angle) * def.bulletSpeed,
        r: def.explosive ? 5 : (player.weapon === 'sniper' ? 2.4 : 3),
        life: def.bulletLife, damage: def.damage * (player.goldRushTime > 0 ? 2 : 1),
        explosive: !!def.explosive, radius: def.radius || 0,
        piercing: player.weapon === 'sniper', hitIds: [],
        color: def.color
      });
    }

    playSfx('gun', player.weapon);
    player.shotCooldown = def.cooldown;
    player.muzzle = .075;
    player.bloom = Math.min(100, player.bloom + def.bloomPerShot);
    if (player.weapon !== 'pistol') {
      player.ammo--;
      if (player.ammo <= 0) setTimeout(() => {
        if (state === 'playing' && player.weapon !== 'pistol' && player.ammo <= 0) revertToPistol();
      }, 120);
    }
    shake = Math.max(shake, player.weapon === 'shotgun' || player.weapon === 'rpg' ? 6 : 2.5);

    for (let i = 0; i < 5; i++) {
      particles.push({
        x: gun.x, y: gun.y,
        vx: facing * (90 + Math.random() * 180), vy: (Math.random() - .5) * 100,
        life: .12 + Math.random() * .12, size: 2 + Math.random() * 3,
        color: '#f2cb62'
      });
    }
  }

  function getGunMuzzle() {
    const gunY = player.y + (player.crouching ? 32 : 24);
    const lengths = { pistol: 29, ar: 48, shotgun: 52, rpg: 56, sniper: 62, smg: 42 };
    return {
      x: player.x + player.w / 2 + facing * (lengths[player.weapon] || 30),
      y: gunY
    };
  }

  function explodeBullet(bullet) {
    shake = Math.max(shake, 11);
    for (const enemy of enemies) {
      if (enemy.health <= 0) continue;
      const dx = (enemy.x + enemy.w / 2) - bullet.x;
      const dy = (enemy.y + enemy.h / 2) - bullet.y;
      if (Math.hypot(dx, dy) <= bullet.radius) {
        if (enemy.shieldShots > 0) enemy.shieldShots--;
        else enemy.health -= bullet.damage;
        enemy.hitFlash = .12;
        if (enemy.health <= 0) killEnemy(enemy);
      }
    }
    for (let i = 0; i < 42; i++) {
      const a = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 360;
      particles.push({
        x: bullet.x, y: bullet.y,
        vx: Math.cos(a) * speed, vy: Math.sin(a) * speed,
        life: .25 + Math.random() * .55, size: 3 + Math.random() * 7,
        color: Math.random() > .38 ? '#dc8d45' : '#6f8f54'
      });
    }
  }

  function bulletHitsPlatform(b) {
    for (const p of platforms) {
      if (b.x < p.x || b.x > p.x + p.w) continue;
      if (b.y >= p.y && b.y <= p.y + p.h) return true;
    }
    return false;
  }

  function consumeWeaponGuard(enemy, dir) {
    const oldWeapon = player.weapon;
    const def = WEAPONS[oldWeapon];
    brokenWeaponLabel = def.label;
    weaponBreakTimer = .42;
    guardFlash = 1;
    shake = 12;
    player.invuln = 1.0;
    player.vx = -dir * 310;
    player.vy = -280;
    revertToPistol();

    for (let i = 0; i < 26; i++) {
      particles.push({
        x: player.x + player.w / 2, y: player.y + 25,
        vx: (Math.random() - .5) * 320, vy: -60 + (Math.random() - .5) * 240,
        life: .28 + Math.random() * .45, size: 2 + Math.random() * 5,
        color: def.color
      });
    }

    // Push the zombie away so the invulnerability window isn't immediately retriggered.
    enemy.x += dir * 45;
  }

  function update(dt) {
    if (state !== 'playing') return;
    gameTime += dt;

    if (player.x + innerWidth * 3 > generatedUntil) buildLevel(player.x + innerWidth * 5);

    // Stage 11: constant wall speed at 120% of normal player running speed.
    bloomWallX += getBloomWallSpeed() * dt;
    wallSfxClock = Math.max(0, wallSfxClock - dt);
    const wallMetersForSfx = getWallDistanceMeters();
    if (wallMetersForSfx <= 300 && wallSfxClock <= 0) {
      playSfx('wall');
      wallSfxClock = wallMetersForSfx <= 100 ? .55 : 1.45;
    }

    if (pitDeathPhase > 0) {
      // Once a jump is missed, the player visibly falls to the bottom edge.
      // On impact they disappear briefly, then the run ends.
      player.vx = 0;
      player.crouching = false;
      player.vy += GRAVITY * dt;
      player.y += player.vy * dt;

      if (pitDeathPhase === 1 && player.y + player.h >= innerHeight) {
        player.y = innerHeight - player.h;
        player.vy = 0;
        pitDeathPhase = 2;
        pitDeathTimer = .24;
        shake = 10;
        for (let i = 0; i < 14; i++) {
          particles.push({
            x: player.x + player.w / 2, y: innerHeight - 6,
            vx: (Math.random() - .5) * 190, vy: -40 - Math.random() * 150,
            life: .22 + Math.random() * .22, size: 2 + Math.random() * 4,
            color: '#506557'
          });
        }
      } else if (pitDeathPhase === 2) {
        pitDeathTimer -= dt;
        if (pitDeathTimer <= 0) {
          finishGame('pit');
          return;
        }
      }

      for (const particle of particles) {
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;
        particle.vy += 240 * dt;
        particle.life -= dt;
      }
      particles = particles.filter(p => p.life > 0);
      const targetCamera = Math.max(0, player.x - innerWidth * .30);
      cameraX += (targetCamera - cameraX) * Math.min(1, dt * 10);
      updateHUD();
      return;
    }

    player.shotCooldown = Math.max(0, player.shotCooldown - dt);
    player.invuln = Math.max(0, player.invuln - dt);
    player.muzzle = Math.max(0, player.muzzle - dt);
    shake = Math.max(0, shake - dt * 20);
    weaponFlash = Math.max(0, weaponFlash - dt * 2.2);
    guardFlash = Math.max(0, guardFlash - dt * 2.5);
    weaponBreakTimer = Math.max(0, weaponBreakTimer - dt);
    player.boostTime = Math.max(0, (player.boostTime || 0) - dt);
    player.goldRushTime = Math.max(0, (player.goldRushTime || 0) - dt);
    if (player.goldRushTime <= 0) stopGoldRushAudio();
    multiplierFlashTimer = Math.max(0, multiplierFlashTimer - dt);
    multiplierBreakTimer = Math.max(0, multiplierBreakTimer - dt);
    multiplierMessageTimer = Math.max(0, multiplierMessageTimer - dt);
    if (boostBanner) boostBanner.classList.toggle('hidden', player.goldRushTime <= 0);
    if (multiplierMessageTimer <= 0 && multiplierEvent) multiplierEvent.textContent = 'KEEP THE STREAK ALIVE';

    if (player.vehicle) {
      player.vehicleTime = Math.max(0, player.vehicleTime - dt);
      vehicleSfxClock = Math.max(0, vehicleSfxClock - dt);
      if (vehicleSfxClock <= 0 && player.vehicleTime > 0) {
        playSfx('vehicle', player.vehicle);
        vehicleSfxClock = 1.35;
      }
      if (player.vehicleTime <= 0) endVehicle();
    } else {
      vehicleSfxClock = 0;
    }

    const bloomRate = 1.0 + Math.min(.9, gameTime * .009);
    player.bloom = Math.min(100, player.bloom + bloomRate * dt);
    maxBloom = Math.max(maxBloom, player.bloom);

    const left = keys.has('a') || keys.has('arrowleft');
    const right = keys.has('d') || keys.has('arrowright');
    const down = keys.has('s') || keys.has('arrowdown');
    const jump = keys.has('w') || keys.has('arrowup');

    const supportBeforeMove = player.vy >= 0 ? playerFootSupport() : null;
    if (supportBeforeMove) {
      player.grounded = true;
      player.coyote = .09;
    } else {
      player.coyote = Math.max(0, player.coyote - dt);
    }

    player.crouching = down && player.grounded && !spawnWalkActive;
    const movementBase = RUN_SPEED * (player.vehicle ? 2 : ((player.boostTime > 0 || player.goldRushTime > 0) ? 1.5 : 1));
    const targetSpeed = player.crouching ? movementBase * .38 : movementBase;

    if (spawnWalkActive) {
      facing = 1;
      player.vx = 145;
      if (player.x >= 220) spawnWalkActive = false;
    } else if (left && !right) {
      player.vx = -targetSpeed;
      facing = -1;
    } else if (right && !left) {
      player.vx = targetSpeed;
      facing = 1;
    } else {
      player.vx *= Math.pow(.0008, dt);
      if (Math.abs(player.vx) < 2) player.vx = 0;
    }

    if (!spawnWalkActive && jump && (player.grounded || player.coyote > 0) && !player.crouching) {
      player.vy = -JUMP_SPEED;
      player.grounded = false;
      player.coyote = 0;
    }
    if (down && !player.grounded) player.vy += GRAVITY * .75 * dt;

    const def = WEAPONS[player.weapon];
    if (def.automatic && (keys.has(' ') || mouseFireHeld)) shoot();

    player.vy += GRAVITY * dt;
    player.x += player.vx * dt;
    player.x = Math.max(12, player.x);

    const prevBottom = player.y + player.h;
    player.y += player.vy * dt;
    player.grounded = false;
    for (const p of platforms) {
      const nextBottom = player.y + player.h;
      const withinX = player.x + player.w > p.x && player.x < p.x + p.w;
      if (withinX && player.vy >= 0 && prevBottom <= p.y + 4 && nextBottom >= p.y) {
        if (down && p.kind !== 'ground' && keys.has('s')) continue;
        player.y = p.y - player.h;
        player.vy = 0;
        player.grounded = true;
        player.coyote = .09;
        break;
      }
    }

    const floorLine = innerHeight - 100;
    if (player.y + player.h > floorLine + 62) {
      pitDeathPhase = 1;
      player.vx = 0;
      mouseFireHeld = false;
      return;
    }

    if (player.x <= bloomWallX + BLOOM_WALL_WIDTH - 16) {
      playSfx('wall');
      player.plantZombie = true;
      finishGame('wall');
      return;
    }

    // Bullets and collisions.
    for (const b of bullets) {
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.life -= dt;
      let detonated = false;

      for (const enemy of enemies) {
        if (enemy.health <= 0) continue;
        if (b.piercing && b.hitIds.includes(enemy.id)) continue;
        if (b.x > enemy.x && b.x < enemy.x + enemy.w && b.y > enemy.y && b.y < enemy.y + enemy.h) {
          if (!b.explosive) playSfx('zombieHit');
          if (b.explosive) {
            explodeBullet(b);
            detonated = true;
          } else if (enemy.shieldShots > 0) {
            enemy.shieldShots--;
            enemy.hitFlash = .12;
            b.life = 0;
            for (let i=0;i<9;i++) particles.push({x:b.x,y:b.y,vx:(Math.random()-.5)*190,vy:(Math.random()-.5)*190,life:.25+Math.random()*.2,size:2+Math.random()*4,color:'#8ecad0'});
            break;
          } else {
            enemy.health -= b.damage;
            enemy.hitFlash = .09;
            enemy.x += Math.sign(b.vx) * 9;
            if (b.piercing) b.hitIds.push(enemy.id);
            if (enemy.health <= 0) killEnemy(enemy);
            for (let i = 0; i < 7; i++) {
              particles.push({
                x: b.x, y: b.y,
                vx: (Math.random() - .5) * 180, vy: (Math.random() - .5) * 180,
                life: .28 + Math.random() * .28, size: 2 + Math.random() * 4,
                color: Math.random() > .4 ? '#6ed05e' : '#733c35'
              });
            }
          }
          if (!b.piercing) {
            b.life = 0;
            break;
          }
        }
      }

      if (!detonated && b.explosive && b.life > 0 && bulletHitsPlatform(b)) {
        explodeBullet(b);
        detonated = true;
        b.life = 0;
      }
      if (b.explosive && b.life <= 0 && !detonated) explodeBullet(b);
    }
    bullets = bullets.filter(b => b.life > 0 && b.x > cameraX - 900 && b.x < cameraX + innerWidth + 1600);
    if (state !== 'playing') return;

    // Enemy movement. Tiers add flyers, jumpers, bloaters, shields and rush behavior.
    for (const enemy of enemies) {
      if (enemy.health <= 0) continue;
      enemy.hitFlash = Math.max(0, enemy.hitFlash - dt);
      enemy.attack = Math.max(0, enemy.attack - dt);
      const dir = Math.sign((player.x + player.w / 2) - (enemy.x + enemy.w / 2)) || 1;

      if (enemy.flying) {
        enemy.vx = dir * enemy.speed;
        enemy.x += enemy.vx * dt;
        const bobRate = enemy.type === 'fastFlyer' ? 3.6 : 2.1;
        const targetY = enemy.baseY + Math.sin(gameTime * bobRate + enemy.seed) * (enemy.type === 'fastFlyer' ? 38 : 28);
        enemy.y += (targetY - enemy.y) * Math.min(1, dt * (enemy.type === 'fastFlyer' ? 5 : 3.2));
        const minY = Math.max(75, innerHeight - 100 - 205);
        const maxY = innerHeight - 100 - 60;
        enemy.y = Math.max(minY, Math.min(maxY, enemy.y));
        if (enemy.type === 'shooter') {
          const shooterOnScreen = enemy.x + enemy.w >= cameraX && enemy.x <= cameraX + innerWidth;
          if (shooterOnScreen) {
            enemy.shootClock -= dt;
            if (enemy.shootClock <= 0 && Math.abs(enemy.x - player.x) < 760) {
              fireEnemyProjectile(enemy);
              enemy.shootClock = 1.35 + Math.random() * .9;
            }
          } else {
            // Prevent an off-screen enemy from banking a shot and firing instantly on entry.
            enemy.shootClock = Math.max(enemy.shootClock, .25);
          }
        }
      } else {
        if (enemy.type === 'bloater') {
          const px = player.x + player.w / 2, py = player.y + player.h / 2;
          const ex = enemy.x + enemy.w / 2, ey = enemy.y + enemy.h / 2;
          if (enemy.fuseTimer === null && Math.hypot(px - ex, py - ey) <= 175) {
            enemy.fuseTimer = 1.5;
            playSfx('pickup');
          }
          if (enemy.fuseTimer !== null) {
            enemy.fuseTimer -= dt;
            if (enemy.fuseTimer <= 0) {
              enemy.killed = true;
              enemy.health = 0;
              explodeBloater(enemy);
              continue;
            }
          }
        }

        if (enemy.type === 'jumper') {
          enemy.jumpClock -= dt;
          if (enemy.grounded && enemy.jumpClock <= 0) {
            enemy.vy = -730;
            enemy.grounded = false;
            enemy.jumpClock = 1.15 + Math.random() * 1.15;
          }
        }

        if (enemy.type === 'rush') {
          enemy.rushCooldown -= dt;
          if (enemy.rushState === 'idle' && enemy.grounded && enemy.rushCooldown <= 0 && Math.abs(player.x-enemy.x) < 720) {
            enemy.rushState = 'charging';
            enemy.rushTimer = .78;
            enemy.rushDir = dir;
          } else if (enemy.rushState === 'charging') {
            enemy.rushTimer -= dt;
            enemy.vx = 0;
            if (enemy.rushTimer <= 0) {
              enemy.rushState = 'rushing';
              enemy.rushTimer = 1.25;
            }
          } else if (enemy.rushState === 'rushing') {
            enemy.rushTimer -= dt;
            enemy.vx = enemy.rushDir * 455;
            if (enemy.rushTimer <= 0) {
              enemy.rushState = 'idle';
              enemy.rushCooldown = 1.6 + Math.random()*1.2;
            }
          }
        }

        if (enemy.type !== 'rush' || enemy.rushState === 'idle') {
          enemy.vx = dir * (enemy.grounded ? enemy.speed : Math.max(285, enemy.speed * 1.9));
        }
        if (enemy.type === 'bloater' && enemy.fuseTimer !== null) enemy.vx *= 0.42;

        // Rush zombies intentionally cannot gap-jump while charging/rushing.
        const canGapJump = !(enemy.type === 'rush' && enemy.rushState !== 'idle');
        if (enemy.grounded && canGapJump) {
          const supportNow = platformSupporting(enemy, 0);
          const supportAhead = platformSupporting(enemy, dir * (enemy.type === 'tank' || enemy.type === 'bloater' ? 64 : 56));
          if (supportNow && !supportAhead) {
            enemy.vy = enemy.type === 'tank' || enemy.type === 'bloater' ? -820 : -760;
            enemy.grounded = false;
          }
        }
        enemy.x += enemy.vx * dt;
        const eb = enemy.y + enemy.h;
        enemy.vy += GRAVITY * dt;
        enemy.y += enemy.vy * dt;
        enemy.grounded = false;
        for (const p of platforms) {
          const nb = enemy.y + enemy.h;
          const withinX = enemy.x + enemy.w > p.x && enemy.x < p.x + p.w;
          if (withinX && enemy.vy >= 0 && eb <= p.y + 4 && nb >= p.y) {
            enemy.y = p.y - enemy.h;
            enemy.vy = 0;
            enemy.grounded = true;
            break;
          }
        }
        if (enemy.y > innerHeight + 220) { enemy.health = 0; continue; }
      }

      if (rectsOverlap(player, enemy)) {
        // Primed Bloaters are committed to their 1.5s fuse; the explosion, not
        // an ordinary contact hit, is the danger during this telegraph.
        if (enemy.type === 'bloater' && enemy.fuseTimer !== null) continue;
        if (player.vehicle || player.boostTime > 0) {
          // Vehicles and momentum boosts ram straight through infected.
          enemy.x += dir * 80;
          killEnemy(enemy);
          shake = Math.max(shake, 5);
          continue;
        }
        if (enemy.attack <= 0 && player.invuln <= 0) {
          enemy.attack = .9;
          if (!absorbPlayerHit(enemy, dir)) return;
        }
      }
    }
    enemies = enemies.filter(e => e.health > 0);

    // Hostile shots from flying ranged creatures use the same one-hit rule.
    for (const shot of enemyProjectiles) {
      shot.x += shot.vx * dt;
      shot.y += shot.vy * dt;
      shot.life -= dt;
      const hitBox = { x:shot.x-shot.r, y:shot.y-shot.r, w:shot.r*2, h:shot.r*2 };
      if (shot.life > 0 && player.invuln <= 0 && rectsOverlap(player, hitBox)) {
        shot.life = 0;
        if (player.boostTime > 0) continue;
        const dir = Math.sign(player.x - shot.x) || 1;
        if (!absorbPlayerHit({x:shot.x}, dir)) return;
      }
    }
    enemyProjectiles = enemyProjectiles.filter(s => s.life > 0 && s.x > cameraX - 500 && s.x < cameraX + innerWidth + 900 && s.y > -80 && s.y < innerHeight + 100);

    spawnClock -= dt;
    if (spawnClock <= 0 && enemies.length < 16) {
      spawnEnemy(cameraX + innerWidth + 100 + Math.random() * 300);
      spawnClock = Math.max(.62, 1.9 - gameTime * .007);
    }

    // Stage 8 Bloom cleansers are scheduled every 700 meters and are independent
    // of late-game parkour zones; zombies still do not drop them.
    for (const p of pickups) {
      p.phase += dt * 3;
      const bob = Math.sin(p.phase) * 5;
      const test = { x: p.x, y: p.y + bob, w: p.w, h: p.h };
      if (p.alive && rectsOverlap(player, test)) {
        p.alive = false;
        player.bloom = Math.max(0, player.bloom - 34);
        gainMultiplier('BLOOM CLEANSED');
        playSfx('bloom');
        for (let i = 0; i < 18; i++) {
          particles.push({
            x: p.x + 12, y: p.y + 12,
            vx: (Math.random() - .5) * 220, vy: (Math.random() - .5) * 220,
            life: .4 + Math.random() * .4, size: 2 + Math.random() * 5,
            color: Math.random() > .25 ? '#82ef7d' : '#e8e281'
          });
        }
      }
    }
    pickups = pickups.filter(p => p.alive);

    // Passing the door/front of a rare house grants its stored weapon.
    for (const house of houses) {
      if (house.claimed) continue;
      const triggerX = house.x + house.w * .58;
      if (player.x + player.w / 2 >= triggerX && player.x < house.x + house.w + 90) {
        house.claimed = true;
        const swapping = player.weapon !== 'pistol' || (house.rewardKind === 'vehicle' && !!player.vehicle);
        if (swapping) {
          gainMultiplier(house.rewardKind === 'vehicle' ? 'VEHICLE SWAP' : 'WEAPON SWAP');
          grantMomentumBoost();
        }
        if (house.rewardKind === 'vehicle') equipVehicle(house.type);
        else equipWeapon(house.type);
      }
    }

    // Coins persist immediately in localStorage, so death never removes them.
    for (const coin of coins) {
      coin.phase += dt * 4.2;
      const bob = Math.sin(coin.phase) * 3;
      const test = {x:coin.x, y:coin.y+bob, w:coin.w, h:coin.h};
      if (coin.alive && rectsOverlap(player,test)) {
        coin.alive = false;
        player.runCoins += coin.value;
        addPermanentCoins(coin.value);
        playSfx('coin');
        if (coin.groupId && coinGroups.has(coin.groupId)) {
          const group = coinGroups.get(coin.groupId);
          group.collected++;
          if (!group.completed && group.collected >= group.total) {
            group.completed = true;
            gainMultiplier('5-COIN SET');
            activateGoldRush();
          }
        }
        for (let i=0;i<10;i++) particles.push({
          x:coin.x+9,y:coin.y+9,vx:(Math.random()-.5)*150,vy:-30-Math.random()*130,
          life:.25+Math.random()*.25,size:2+Math.random()*3,color:'#e5bd4e'
        });
      }
    }
    coins = coins.filter(c => c.alive);

    for (const p of particles) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 240 * dt;
      p.life -= dt;
    }
    particles = particles.filter(p => p.life > 0);
    for (const ex of explosions) ex.life -= dt;
    explosions = explosions.filter(ex => ex.life > 0);

    const targetCamera = Math.max(0, player.x - innerWidth * .30);
    cameraX += (targetCamera - cameraX) * Math.min(1, dt * 10);

    updateDistanceScore();
    recalcScore();
    updateHUD();
  }

  function explodeBloater(enemy) {
    const cx=enemy.x+enemy.w/2, cy=enemy.y+enemy.h/2, radius=145;
    shake=Math.max(shake,16);
    explosions.push({x:cx,y:cy,life:.55,maxLife:.55,radius});
    playSfx('explode');
    const blastVictims = [];
    for (const other of enemies) {
      if (other===enemy || other.health<=0) continue;
      const ox=other.x+other.w/2, oy=other.y+other.h/2;
      const d=Math.hypot(ox-cx,oy-cy);
      if (d<radius) blastVictims.push(other);
    }
    // A Bloater detonation kills infected caught in the blast too. Other Bloaters
    // can chain-react, making crowded encounters deliberately dangerous.
    for (const other of blastVictims) {
      if (other.health <= 0) continue;
      other.health = 0;
      killEnemy(other);
    }
    const px=player.x+player.w/2, py=player.y+player.h/2;
    if (Math.hypot(px-cx,py-cy)<radius && state==='playing' && !player.vehicle && player.boostTime <= 0) {
      absorbPlayerHit(enemy, Math.sign(px-cx)||1);
    }
    const orbColors=['#ff4b36','#ffd93f','#82f15d'];
    for(let i=0;i<62;i++){
      const a=Math.random()*Math.PI*2, speed=90+Math.random()*430;
      particles.push({x:cx,y:cy,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,life:.3+Math.random()*.65,size:3+Math.random()*9,color:orbColors[i%3]});
    }
  }

  function killEnemy(enemy) {
    if (enemy.health <= 0 && enemy.killed) return;
    enemy.killed = true;
    player.kills++;
    player.killScore += (enemy.scoreValue || 100) * player.multiplier;
    recalcScore();
    enemy.health = 0;
    if (enemy.type === 'bloater') explodeBloater(enemy);
    for (let i = 0; i < 24; i++) {
      particles.push({
        x: enemy.x + enemy.w / 2, y: enemy.y + enemy.h / 2,
        vx: (Math.random() - .5) * 300, vy: -40 + (Math.random() - .5) * 260,
        life: .45 + Math.random() * .55, size: 3 + Math.random() * 6,
        color: Math.random() > .35 ? '#5eaa50' : '#5b302c'
      });
    }
  }

  function finishGame(reason = 'zombies') {
    stopMusic();
    stopGoldRushAudio();
    state = 'ended';
    mouseFireHeld = false;
    resultPanel.classList.remove('hidden');
    resultEyebrow.textContent = reason === 'wall' ? 'BLOOM CONSUMED YOU' : 'RUN OVER';
    resultTitle.textContent = reason === 'wall'
      ? 'YOU BECAME ONE OF THEM'
      : reason === 'pit'
        ? 'YOU FELL'
        : 'NO LIVES LEFT';
    updateDistanceScore();
    recalcScore();
    resultKills.textContent = player.kills;
    resultScore.textContent = Math.floor(player.score);
    resultBloom.textContent = Math.round(maxBloom) + '%';
    if (resultDistance) resultDistance.textContent = getDistanceMeters() + 'm';
    if (resultCoins) resultCoins.textContent = '+' + player.runCoins;
    currentRunSaved = false;
    currentRunId = `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    if (saveScoreBtn) saveScoreBtn.disabled = false;
    const rememberedName = getPreferredName();
    playerNameInput.value = rememberedName || '';
    saveMessage.textContent = '';
    saveCurrentScore(true);
    setTimeout(() => playerNameInput.focus(), 0);
  }

  function equipmentIconSvg(type, kind='weapon') {
    const stroke = kind === 'vehicle' ? '#8ec9da' : '#e1d89c';
    const fill = kind === 'vehicle' ? '#557f8c' : '#5f675f';
    if (kind === 'vehicle') {
      if (type === 'motorcycle') return `<svg viewBox="0 0 64 40" aria-hidden="true"><circle cx="14" cy="30" r="8" fill="none" stroke="${stroke}" stroke-width="4"/><circle cx="50" cy="30" r="8" fill="none" stroke="${stroke}" stroke-width="4"/><path d="M14 30 L25 17 L42 18 L50 30 M25 17 L34 30 L17 30 M39 18 L45 11" fill="none" stroke="${stroke}" stroke-width="4" stroke-linecap="round"/></svg>`;
      if (type === 'car') return `<svg viewBox="0 0 64 40" aria-hidden="true"><path d="M8 25 L14 15 H44 L54 25 V32 H8 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M20 15 L26 8 H40 L45 15" fill="none" stroke="${stroke}" stroke-width="3"/><circle cx="19" cy="32" r="6" fill="#101614" stroke="${stroke}" stroke-width="2"/><circle cx="46" cy="32" r="6" fill="#101614" stroke="${stroke}" stroke-width="2"/></svg>`;
      return `<svg viewBox="0 0 64 40" aria-hidden="true"><path d="M5 13 H34 V31 H5 Z M34 20 H51 L59 27 V31 H34 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><circle cx="17" cy="32" r="6" fill="#101614" stroke="${stroke}" stroke-width="2"/><circle cx="48" cy="32" r="6" fill="#101614" stroke="${stroke}" stroke-width="2"/></svg>`;
    }
    if (type === 'ar') return `<svg viewBox="0 0 72 36" aria-hidden="true"><path d="M5 15 H50 L62 11 V18 H52 L45 22 H28 L24 31 H18 L20 22 H5 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M33 22 L38 31" stroke="${stroke}" stroke-width="4"/></svg>`;
    if (type === 'shotgun') return `<svg viewBox="0 0 72 36" aria-hidden="true"><path d="M5 13 H57 V19 H5 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M24 19 L19 29 H12 L17 19 M36 19 L43 26" stroke="${stroke}" stroke-width="4" fill="none"/></svg>`;
    if (type === 'rpg') return `<svg viewBox="0 0 72 36" aria-hidden="true"><path d="M8 10 H57 L68 18 L57 26 H8 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M28 26 L25 33 M42 26 L46 33" stroke="${stroke}" stroke-width="4"/><path d="M8 10 L2 6 V30 L8 26" fill="${fill}" stroke="${stroke}" stroke-width="3"/></svg>`;
    if (type === 'sniper') return `<svg viewBox="0 0 78 36" aria-hidden="true"><path d="M5 16 H69 V20 H5 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><rect x="25" y="8" width="25" height="7" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M33 20 L28 31 M46 20 L52 31" stroke="${stroke}" stroke-width="4"/></svg>`;
    if (type === 'smg') return `<svg viewBox="0 0 68 36" aria-hidden="true"><path d="M6 13 H49 V22 H6 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M22 22 V32 H15 V22 M38 22 L42 31" fill="${fill}" stroke="${stroke}" stroke-width="4"/><path d="M49 15 H62" stroke="${stroke}" stroke-width="4"/></svg>`;
    return `<svg viewBox="0 0 54 36" aria-hidden="true"><path d="M6 12 H42 V20 H26 L24 31 H16 L18 20 H6 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/></svg>`;
  }

  function updatePauseStats() {
    if (!player) return;
    if (pauseCoins) pauseCoins.textContent = String(getCoinBalance());
    if (pauseDistance) pauseDistance.textContent = `${getDistanceMeters()} meters`;
    if (pauseKills) pauseKills.textContent = String(player.kills);
  }

  function updateHUD() {
    bloomFill.style.width = player.bloom + '%';
    bloomText.textContent = Math.round(player.bloom) + '%';

    if (livesHearts) {
      livesHearts.innerHTML = '';
      for (let i = 0; i < 3; i++) {
        const heart = document.createElement('span');
        heart.className = i < player.lives ? 'heart alive' : 'heart lost';
        heart.textContent = i < player.lives ? '♥' : '♡';
        livesHearts.appendChild(heart);
      }
      livesHearts.setAttribute('aria-label', `${player.lives} of 3 lives`);
    }

    const specialWeaponActive = player.weapon !== 'pistol';
    if (weaponItemSlot) {
      const showBroken = !specialWeaponActive && weaponBreakTimer > 0;
      weaponItemSlot.classList.toggle('hidden', !specialWeaponActive && !showBroken);
      weaponItemSlot.classList.toggle('breaking', showBroken);
      if (weaponIconGraphic) {
        const iconType = showBroken ? (brokenWeaponLabel || 'pistol').toLowerCase() : player.weapon;
        weaponIconGraphic.innerHTML = equipmentIconSvg(iconType, 'weapon');
      }
    }

    if (vehicleItemSlot) {
      vehicleItemSlot.classList.toggle('hidden', !player.vehicle);
      if (player.vehicle) {
        if (vehicleIconGraphic) vehicleIconGraphic.innerHTML = equipmentIconSvg(player.vehicle, 'vehicle');
        if (vehicleGasFill) vehicleGasFill.style.width = `${Math.max(0, Math.min(100, player.vehicleTime / Math.max(.001, player.vehicleMaxTime) * 100))}%`;
      } else if (vehicleGasFill) vehicleGasFill.style.width = '0%';
    }

    const meters = getDistanceMeters();
    if (distanceText) distanceText.textContent = meters + 'm';
    if (biomeText) biomeText.textContent = getBiomeAt(player.x).name;
    if (coinText) coinText.textContent = String(getCoinBalance());
    if (killsText) killsText.textContent = player.kills;
    scoreText.textContent = Math.floor(player.score);
    updatePauseStats();

    if (multiplierLabel) multiplierLabel.textContent = `X${player.multiplier}`;
    if (multiplierFill) multiplierFill.style.width = `${((player.multiplier - 1) / 11) * 100}%`;
    if (multiplierHud && multiplierMessageTimer <= 0) multiplierHud.classList.remove('hot','broken');

    const wallMeters = getWallDistanceMeters();
    if (wallWarningIcon) {
      const nearby = wallMeters <= 300;
      wallWarningIcon.classList.toggle('hidden', !nearby);
      wallWarningIcon.classList.toggle('danger', nearby && wallMeters <= 100);
      if (wallWarningDistance) wallWarningDistance.textContent = `${wallMeters}m`;
    }

    if (boostBanner) boostBanner.classList.toggle('hidden', player.goldRushTime <= 0);
    bloomWarning.style.opacity = player.bloom > 62
      ? String(Math.min(1, (player.bloom - 62) / 18))
      : '0';
  }

  function draw() {
    if (!gameScreen.classList.contains('active')) return;
    const w = innerWidth;
    const h = innerHeight;
    ctx.clearRect(0, 0, w, h);

    const sx = shake ? (Math.random() - .5) * shake : 0;
    const sy = shake ? (Math.random() - .5) * shake : 0;
    ctx.save();
    ctx.translate(sx, sy);

    drawBackground(w, h);

    ctx.save();
    ctx.translate(-cameraX, 0);
    drawLevel();
    drawBloomWall();
    drawPickups();
    drawCoins();
    drawHouses();
    drawEnemies();
    drawEnemyProjectiles();
    drawPlayer();
    drawVehicleTimeMeter();
    drawBullets();
    drawParticles();
    drawExplosions();
    drawCrosshair();
    ctx.restore();

    drawBloomVignette(w, h);
    if (guardFlash > 0) drawGuardFlash(w, h);
    ctx.restore();
  }

  function drawBackground(w, h) {
    const biomeIndex = getBiomeIndexAt(cameraX + w * .5);
    const biome = BIOMES[biomeIndex];
    const sky = ctx.createLinearGradient(0,0,0,h);
    sky.addColorStop(0,biome.skyA); sky.addColorStop(.58,biome.skyB); sky.addColorStop(1,biome.skyC);
    ctx.fillStyle=sky; ctx.fillRect(0,0,w,h);

    ctx.fillStyle = biome.accent + '18';
    for (let i=0;i<9;i++) {
      const x=((i*430-cameraX*.16)%(w+520))-140;
      const y=h-220-(i%3)*65;
      ctx.beginPath(); ctx.arc(x,y,150+(i%2)*80,0,Math.PI*2); ctx.fill();
    }

    ctx.strokeStyle = biome.silhouette + 'aa';
    ctx.lineWidth = biomeIndex === 1 ? 9 : 7;
    for (let i=0;i<14;i++) {
      const x=((i*280-cameraX*.28)%(w+320))-100;
      const base=h-90;
      const top=base-120-(i%5)*34;
      ctx.beginPath();
      if (biomeIndex === 1) {
        ctx.moveTo(x,base); ctx.lineTo(x,top+35); ctx.lineTo(x+38,top+35); ctx.lineTo(x+38,base);
        ctx.moveTo(x+8,top+35); ctx.lineTo(x+8,top); ctx.lineTo(x+16,top);
      } else if (biomeIndex === 2) {
        ctx.moveTo(x,base); ctx.lineTo(x+8,top+55); ctx.moveTo(x+8,top+55); ctx.quadraticCurveTo(x+35,top+15,x+55,top+40);
      } else {
        ctx.moveTo(x,base); ctx.lineTo(x+(i%2?12:-9),top);
        ctx.moveTo(x+2,top+50); ctx.lineTo(x-36,top+18);
        ctx.moveTo(x+4,top+71); ctx.lineTo(x+43,top+40);
      }
      ctx.stroke();
    }

    // Kilometer transition marker in the far background.
    const nextBoundary=getNextBiomeBoundary(cameraX+w*.5);
    const screenBoundary=nextBoundary-cameraX;
    if (screenBoundary>-60 && screenBoundary<w+60) {
      ctx.fillStyle='rgba(230,240,220,.2)'; ctx.fillRect(screenBoundary-1,0,2,h);
    }

    ctx.fillStyle='rgba(220,255,220,.018)';
    for(let y=0;y<h;y+=5) ctx.fillRect(0,y,w,1);
  }

  function drawLevel() {
    for (const hole of holes) {
      if (hole.x + hole.w < cameraX - 100 || hole.x > cameraX + innerWidth + 100) continue;
      const g = ctx.createLinearGradient(0, hole.y, 0, innerHeight + 120);
      g.addColorStop(0, 'rgba(5,10,8,.98)');
      g.addColorStop(.55, 'rgba(9,18,12,1)');
      g.addColorStop(1, 'rgba(55,97,47,.46)');
      ctx.fillStyle = g;
      ctx.fillRect(hole.x, hole.y, hole.w, innerHeight - hole.y + 180);

      ctx.strokeStyle = hole.parkour ? 'rgba(112,172,84,.5)' : 'rgba(94,146,77,.36)';
      ctx.lineWidth = 3;
      for (let x = hole.x + 16; x < hole.x + hole.w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, hole.y + 8);
        ctx.lineTo(x + Math.sin(x) * 8, hole.y + 65);
        ctx.stroke();
      }
    }

    for (const z of parkourZones) {
      if (z.end < cameraX || z.x > cameraX + innerWidth) continue;
      ctx.fillStyle = 'rgba(130,205,86,.08)';
      ctx.fillRect(z.x, 80, z.end - z.x, innerHeight - 180);
      ctx.fillStyle = 'rgba(177,233,104,.5)';
      ctx.font = 'bold 10px Courier New';
      ctx.fillText('PARKOUR CHALLENGE · 1 BLOOM CLEANSE', z.x + 18, 112);
    }

    for (const p of platforms) {
      if (p.x + p.w < cameraX - 200 || p.x > cameraX + innerWidth + 200) continue;
      const biome = BIOMES[p.biome ?? getBiomeIndexAt(p.x)];
      if (p.kind === 'ground') {
        ctx.fillStyle = biome.ground;
        ctx.fillRect(p.x, p.y, p.w, p.h);
        ctx.fillStyle = biome.groundTop;
        ctx.fillRect(p.x, p.y, p.w, 8);
        ctx.fillStyle = biome.accent + '2e';
        for (let x = p.x; x < p.x + p.w; x += 34) ctx.fillRect(x, p.y + 18 + ((x / 34) % 3) * 14, 18, 3);
      } else {
        ctx.fillStyle = biome.platform;
        ctx.fillRect(p.x, p.y, p.w, p.h);
        ctx.fillStyle = biome.platformTop;
        ctx.fillRect(p.x, p.y, p.w, 5);
        ctx.fillStyle = biome.ground;
        for (let x = p.x + 12; x < p.x + p.w - 8; x += 38) ctx.fillRect(x, p.y + 8, 22, 4);
      }
    }

    for (const d of decorations) {
      if (d.x < cameraX - 120 || d.x > cameraX + innerWidth + 120) continue;
      if (d.type === 'plant' || d.type === 'reed') drawGroundBloom(d.x, d.y, d.s, d.biome);
      else if (d.type === 'pipe') drawPipe(d.x, d.y, d.s, d.biome);
      else drawBone(d.x, d.y, d.s);
    }
  }

  function drawBloomWall() {
    const front = bloomWallX + BLOOM_WALL_WIDTH;
    const coverStart = cameraX - 320;
    const width = Math.max(0, front - coverStart);
    const bottom = innerHeight + 160;

    // Continuous opaque mass from beyond the visible left edge all the way to
    // the moving front. No terrain/background can be seen behind the wall.
    const g = ctx.createLinearGradient(Math.max(coverStart, front - 420), 0, front, 0);
    g.addColorStop(0, '#102817');
    g.addColorStop(.66, '#245530');
    g.addColorStop(1, '#6eaa4f');
    ctx.fillStyle = g;
    ctx.fillRect(coverStart, -50, width, bottom + 80);

    // Dense internal plant texture across the covered region near the front.
    ctx.strokeStyle = 'rgba(84,145,69,.8)';
    ctx.lineWidth = 4;
    const textureStart = Math.max(coverStart, front - 440);
    for (let x = textureStart; x < front; x += 28) {
      for (let y = -20; y < bottom; y += 52) {
        const sway = Math.sin(gameTime * 2.7 + x * .025 + y * .05) * 9;
        ctx.beginPath();
        ctx.moveTo(x, y + 45);
        ctx.quadraticCurveTo(x + sway, y + 20, x + 4, y);
        ctx.stroke();
      }
    }

    ctx.strokeStyle = 'rgba(173,224,105,.95)';
    ctx.lineWidth = 6;
    for (let y = -30; y < bottom; y += 34) {
      const sway = Math.sin(gameTime * 3.4 + y * .08) * 15;
      ctx.beginPath();
      ctx.moveTo(front - 8, y);
      ctx.quadraticCurveTo(front + 20 + sway, y + 17, front - 4, y + 34);
      ctx.stroke();

      ctx.fillStyle = y % 68 === 0 ? '#c3d865' : '#76ad58';
      ctx.beginPath();
      ctx.arc(front + sway * .42, y + 13, 7, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawGroundBloom(x, y, s, biomeIndex = 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    const biome = BIOMES[biomeIndex % BIOMES.length];
    ctx.strokeStyle = biome.accent;
    ctx.lineWidth = 3;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo((i - 1.5) * 8, -14, (i - 1.5) * 12, -26 - i * 2);
      ctx.stroke();
    }
    ctx.fillStyle = biome.platformTop;
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(Math.cos(a) * 8, -25 + Math.sin(a) * 8, 5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = biome.accent;
    ctx.beginPath();
    ctx.arc(0, -25, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawPipe(x,y,s,biomeIndex=1) {
    const biome=BIOMES[biomeIndex%BIOMES.length];
    ctx.save(); ctx.translate(x,y); ctx.scale(s,s);
    ctx.strokeStyle=biome.platformTop; ctx.lineWidth=6;
    ctx.beginPath(); ctx.moveTo(-10,0); ctx.lineTo(-10,-28); ctx.lineTo(14,-28); ctx.lineTo(14,-46); ctx.stroke();
    ctx.restore();
  }

  function drawBone(x, y, s) {
    ctx.save();
    ctx.translate(x, y - 7);
    ctx.scale(s, s);
    ctx.strokeStyle = '#687068';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(12, -6);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(-12, 1, 3, 0, Math.PI * 2);
    ctx.arc(14, -7, 3, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawPlayer() {
    if (pitDeathPhase === 2 && pitDeathTimer < .17) return;
    if (player.plantZombie) {
      drawTransformedPlayer();
      return;
    }
    if (player.invuln > 0 && Math.floor(player.invuln * 18) % 2 === 0) return;

    ctx.save();
    ctx.translate(player.x + player.w / 2, player.y);
    ctx.scale(facing, 1);
    drawVehicleUnderPlayer();
    const crouchOffset = player.crouching ? 18 : 0;
    ctx.translate(0, crouchOffset);

    const style = characterStyle || getCustomization();
    ctx.strokeStyle = style.pants || '#26352f';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-7, 37); ctx.lineTo(-9, 56 - crouchOffset);
    ctx.moveTo(7, 37); ctx.lineTo(10, 56 - crouchOffset);
    ctx.stroke();

    ctx.fillStyle = style.shirt || '#51655a';
    if (style.gender === 'feminine') {
      ctx.beginPath(); ctx.moveTo(-12,18); ctx.lineTo(12,18); ctx.lineTo(15,43); ctx.lineTo(-15,43); ctx.closePath(); ctx.fill();
    } else {
      ctx.fillRect(-14, 18, 28, 29);
    }
    ctx.fillStyle = style.skin;
    ctx.fillRect(-10, 4, 20, 18);
    drawHairStyle(ctx, style);
    drawFacialHair(ctx, style);
    ctx.fillStyle = '#d8f379';
    ctx.fillRect(5, 10, 3, 3);

    ctx.strokeStyle = style.skin;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(8, 25); ctx.lineTo(18, 24);
    ctx.stroke();
    drawHeldWeapon();

    if (player.bloom > 55) {
      ctx.strokeStyle = '#5e9f59';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-9, 18); ctx.lineTo(-18, 6);
      ctx.moveTo(-11, 28); ctx.lineTo(-23, 24);
      ctx.stroke();
      ctx.fillStyle = '#99c45e';
      ctx.beginPath();
      ctx.arc(-19, 5, 4, 0, Math.PI * 2);
      ctx.arc(-24, 24, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawVehicleTimeMeter() {
    if (!player || !player.vehicle || player.vehicleMaxTime <= 0) return;
    const ratio = Math.max(0, Math.min(1, player.vehicleTime / player.vehicleMaxTime));
    const width = 56;
    const height = 7;
    const x = player.x + player.w / 2 - width / 2;
    const y = player.y - 19;
    ctx.save();
    ctx.fillStyle = 'rgba(6,11,9,.82)';
    ctx.fillRect(x - 2, y - 2, width + 4, height + 4);
    ctx.strokeStyle = 'rgba(225,238,221,.48)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x - 2, y - 2, width + 4, height + 4);
    ctx.fillStyle = ratio > .3 ? '#d8c45c' : '#d85e4f';
    ctx.fillRect(x, y, width * ratio, height);
    ctx.restore();
  }

  function drawVehicleUnderPlayer() {
    if (!player.vehicle) return;
    const type=player.vehicle, def=VEHICLES[type];
    ctx.save();
    ctx.fillStyle=def.color; ctx.strokeStyle='#111916'; ctx.lineWidth=4;
    if(type==='motorcycle'){
      ctx.beginPath();ctx.arc(-15,52,9,0,Math.PI*2);ctx.arc(18,52,9,0,Math.PI*2);ctx.stroke();
      ctx.fillRect(-13,42,29,6);ctx.fillRect(0,35,16,7);
    }else if(type==='car'){
      ctx.fillRect(-29,35,62,17);ctx.fillRect(-16,25,32,12);
      ctx.beginPath();ctx.arc(-18,54,8,0,Math.PI*2);ctx.arc(21,54,8,0,Math.PI*2);ctx.fillStyle='#101614';ctx.fill();
    }else{
      ctx.fillRect(-38,30,78,23);ctx.fillRect(-31,18,34,14);ctx.fillRect(4,22,29,8);
      ctx.beginPath();ctx.arc(-25,55,9,0,Math.PI*2);ctx.arc(26,55,9,0,Math.PI*2);ctx.fillStyle='#101614';ctx.fill();
    }
    ctx.restore();
  }

  function drawHeldWeapon() {
    const type = player.weapon;
    const def = WEAPONS[type];
    ctx.save();
    if (player.goldRushTime > 0) {
      ctx.shadowColor = '#ffd84f';
      ctx.shadowBlur = 16 + Math.sin(gameTime * 20) * 4;
      ctx.fillStyle = '#f6d75d';
    } else {
      ctx.fillStyle = weaponFlash > 0 ? '#e9f1df' : '#202725';
    }

    if (type === 'pistol') {
      ctx.fillRect(16, 20, 20, 7);
      ctx.fillRect(21, 27, 7, 8);
    } else if (type === 'ar') {
      ctx.fillRect(16, 19, 42, 8);
      ctx.fillRect(26, 27, 7, 11);
      ctx.fillRect(47, 16, 8, 4);
    } else if (type === 'shotgun') {
      ctx.fillRect(16, 20, 47, 7);
      ctx.fillStyle = '#72533d';
      ctx.fillRect(23, 27, 18, 6);
    } else if (type === 'rpg') {
      ctx.fillStyle = '#4e5b49';
      ctx.fillRect(14, 17, 50, 12);
      ctx.fillStyle = '#82654a';
      ctx.fillRect(27, 29, 7, 10);
    } else if (type === 'sniper') {
      ctx.fillRect(15, 20, 55, 6);
      ctx.fillRect(28, 26, 7, 10);
      ctx.fillStyle = '#799aa0';
      ctx.fillRect(27, 15, 18, 5);
    } else if (type === 'smg') {
      ctx.fillRect(16, 19, 35, 9);
      ctx.fillRect(25, 28, 8, 10);
      ctx.fillRect(45, 15, 5, 5);
    }

    if (player.muzzle > 0) {
      const mx = { pistol: 37, ar: 59, shotgun: 64, rpg: 65, sniper: 71, smg: 52 }[type] || 40;
      ctx.fillStyle = '#f4d260';
      ctx.beginPath();
      ctx.moveTo(mx, 23);
      ctx.lineTo(mx + 11, 17);
      ctx.lineTo(mx + 7, 23);
      ctx.lineTo(mx + 12, 29);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  function drawTransformedPlayer() {
    ctx.save();
    ctx.translate(player.x + player.w / 2, player.y);
    ctx.fillStyle = '#647c60';
    ctx.fillRect(-14, 18, 28, 30);
    ctx.fillStyle = '#809575';
    ctx.fillRect(-11, 2, 22, 21);
    ctx.strokeStyle = '#5ea257';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 5); ctx.lineTo(0, -20);
    ctx.moveTo(-6, 14); ctx.lineTo(-22, -2);
    ctx.moveTo(7, 17); ctx.lineTo(23, 1);
    ctx.stroke();
    drawZombieFlower(0, -24, 9, 0);
    drawZombieFlower(-24, -4, 7, 1);
    drawZombieFlower(24, 0, 7, 2);
    ctx.restore();
  }

  function drawZombie(z) {
    ctx.save();
    ctx.translate(z.x + z.w/2, z.y);
    ctx.translate(Math.sin(gameTime*6+z.seed)*2,0);

    if (z.flying) {
      const shooter = z.type === 'shooter';
      const fastFlyer = z.type === 'fastFlyer';
      ctx.fillStyle = z.hitFlash>0 ? '#dce4b4' : (shooter ? '#6f7654' : fastFlyer ? '#536e68' : '#70846b');
      ctx.beginPath(); ctx.ellipse(0,z.h*.5,z.w*.42,z.h*.38,0,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle = shooter ? '#c0b55f' : fastFlyer ? '#82c8b1' : '#7da774'; ctx.lineWidth=4;
      const flap=Math.sin(gameTime*(fastFlyer?15:10)+z.seed)*7;
      ctx.beginPath(); ctx.moveTo(-8,z.h*.45); ctx.lineTo(-z.w*.7,z.h*.2+flap); ctx.moveTo(8,z.h*.45); ctx.lineTo(z.w*.7,z.h*.2-flap); ctx.stroke();
      ctx.fillStyle='#182019'; ctx.fillRect(-7,z.h*.38,4,4); ctx.fillRect(4,z.h*.38,4,4);
      drawZombieFlower(0,-2,6,z.bloomStyle);
      if (shooter) { ctx.fillStyle='#8f8848'; ctx.fillRect(-4,z.h*.72,18,5); }
    } else {
      const tank=z.type==='tank', fast=z.type==='fast', bloater=z.type==='bloater', shielded=z.type==='shielded', rush=z.type==='rush';
      ctx.strokeStyle=tank||bloater||rush?'#4b564d':'#35433b'; ctx.lineWidth=tank||bloater||rush?11:7;
      ctx.beginPath(); ctx.moveTo(-8,z.h-19);ctx.lineTo(-11,z.h);ctx.moveTo(7,z.h-19);ctx.lineTo(12,z.h);ctx.stroke();
      const bloaterBlink = bloater && z.fuseTimer !== null && (Math.floor((1.5 - Math.max(0,z.fuseTimer)) * 10) % 2 === 0);
      ctx.fillStyle=z.hitFlash>0?'#b6d89f':(bloaterBlink?'#c76b3f':bloater?'#6f7047':rush?'#694b43':tank?'#596158':fast?'#3f5747':'#49574e');
      ctx.fillRect(-z.w*.43,18,z.w*.86,z.h-28);
      ctx.fillStyle=z.hitFlash>0?'#d9e5bc':(bloaterBlink?'#d3a94c':rush?'#8c6b61':tank||bloater?'#84907e':'#7f917a');
      ctx.fillRect(-12,1,24,20); ctx.fillStyle='#1b251f';ctx.fillRect(-7,8,4,4);ctx.fillRect(5,8,4,4);
      ctx.strokeStyle='#697967';ctx.lineWidth=tank||rush?8:6;ctx.beginPath();ctx.moveTo(11,25);ctx.lineTo(25,28);ctx.moveTo(-11,25);ctx.lineTo(-24,23);ctx.stroke();
      ctx.strokeStyle='#4f9348';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,4);ctx.lineTo(-2,-13);ctx.moveTo(4,10);ctx.lineTo(14,-2);ctx.stroke();
      drawZombieFlower(-2,-16,tank||bloater||rush?9:7,z.bloomStyle); drawZombieFlower(15,-4,5,z.bloomStyle+1);
      if (shielded && z.shieldShots>0) {
        ctx.strokeStyle='#7fc4cb';ctx.lineWidth=5;ctx.beginPath();ctx.arc(-20,31,18,-Math.PI/2,Math.PI/2);ctx.stroke();
        ctx.fillStyle='#9bd6da';ctx.font='bold 9px Courier New';ctx.fillText(String(z.shieldShots),-27,34);
      }
      if (rush && z.rushState==='charging') {
        ctx.strokeStyle='#e0a05d';ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,34,30,0,Math.PI*2);ctx.stroke();
      }
      if (bloater && z.fuseTimer !== null) {
        const fuseProgress = 1 - Math.max(0,z.fuseTimer) / 1.5;
        ctx.strokeStyle = bloaterBlink ? '#ff553f' : '#e8cf52';
        ctx.globalAlpha = .35 + fuseProgress * .5; ctx.lineWidth = 2 + fuseProgress * 3;
        ctx.beginPath(); ctx.arc(0,35,32 + fuseProgress*10,0,Math.PI*2); ctx.stroke(); ctx.globalAlpha = 1;
      }
      if (bloater) {
        // Malformed explosive growths: asymmetrical swollen tissue with bright
        // red/yellow/green volatile sacs that clearly telegraph the explosion.
        ctx.fillStyle='rgba(116,105,65,.72)';
        ctx.beginPath();ctx.ellipse(-14,39,18,24,-.35,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.ellipse(16,33,15,21,.5,0,Math.PI*2);ctx.fill();
        const sacs=[[-17,25,7,'#ff4b36'],[17,28,8,'#ffd93f'],[-6,46,9,'#7ff05b'],[18,48,6,'#ff5b38'],[2,20,5,'#d8ff59']];
        for(const [sx,sy,sr,sc] of sacs){
          ctx.shadowColor=sc;ctx.shadowBlur=10;ctx.fillStyle=sc;ctx.beginPath();ctx.arc(sx,sy,sr,0,Math.PI*2);ctx.fill();
          ctx.shadowBlur=0;ctx.strokeStyle='rgba(255,255,220,.58)';ctx.lineWidth=1.5;ctx.stroke();
        }
        ctx.strokeStyle='rgba(239,121,63,.55)';ctx.lineWidth=3;
        ctx.beginPath();ctx.moveTo(-13,28);ctx.lineTo(-4,35);ctx.lineTo(-7,46);ctx.moveTo(8,27);ctx.lineTo(15,34);ctx.lineTo(15,47);ctx.stroke();
      }
    }

    if(z.health<z.maxHealth&&z.health>0){ctx.fillStyle='#17211c';ctx.fillRect(-18,-28,36,4);ctx.fillStyle='#8ab95f';ctx.fillRect(-18,-28,36*(z.health/z.maxHealth),4);}
    ctx.restore();
  }

  function drawZombieFlower(x, y, r, variant) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = variant % 2 ? '#8ebd52' : '#6cab60';
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      ctx.beginPath();
      ctx.ellipse(Math.cos(a) * r * .75, Math.sin(a) * r * .75, r * .52, r * .28, a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#d5c85d';
    ctx.beginPath();
    ctx.arc(0, 0, r * .34, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawEnemies() {
    const wallFront = bloomWallX + BLOOM_WALL_WIDTH;
    for (const z of enemies) {
      if (z.health <= 0 || z.x + z.w <= wallFront) continue;
      if (z.x + z.w < cameraX - 80 || z.x > cameraX + innerWidth + 80) continue;
      drawZombie(z);
    }
  }

  function drawBullets() {
    for (const b of bullets) {
      ctx.fillStyle = b.color || '#f0d877';
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
      if (b.explosive) {
        ctx.strokeStyle = 'rgba(236,169,80,.5)';
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r + 4, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  function drawPickups() {
    const wallFront = bloomWallX + BLOOM_WALL_WIDTH;
    for (const p of pickups) {
      if (p.x + p.w <= wallFront) continue;
      const y = p.y + Math.sin(p.phase) * 5;
      ctx.save();
      ctx.translate(p.x + 12, y + 12);
      const glow = ctx.createRadialGradient(0, 0, 2, 0, 0, 30);
      glow.addColorStop(0, 'rgba(158,247,119,.5)');
      glow.addColorStop(1, 'rgba(158,247,119,0)');
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(0, 0, 30, 0, Math.PI * 2); ctx.fill();
      for (let i = 0; i < 7; i++) {
        const a = i / 7 * Math.PI * 2 + p.phase * .18;
        ctx.fillStyle = i % 2 ? '#8ce478' : '#b0e66f';
        ctx.beginPath();
        ctx.ellipse(Math.cos(a) * 7, Math.sin(a) * 7, 5, 2.7, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#e6db68';
      ctx.beginPath(); ctx.arc(0, 0, 3.6, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }

  function drawCoins() {
    const wallFront=bloomWallX+BLOOM_WALL_WIDTH;
    for(const c of coins){
      if(c.x+c.w<=wallFront) continue;
      const y=c.y+Math.sin(c.phase)*3;
      ctx.save();ctx.translate(c.x+9,y+9);
      ctx.fillStyle='rgba(230,190,70,.18)';ctx.beginPath();ctx.arc(0,0,17,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#e5bd4e';ctx.strokeStyle='#fff0a0';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,0,6.5,8,0,0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.fillStyle='#9b7527';ctx.fillRect(-1,-4,2,8);ctx.restore();
    }
  }

  function drawHouses(){
    const wallFront=bloomWallX+BLOOM_WALL_WIDTH;
    ctx.textAlign='center';ctx.font='bold 9px Courier New';

    if (spawnHouse && spawnHouse.x + spawnHouse.w > wallFront && spawnHouse.x < cameraX + innerWidth + 180) {
      const h = spawnHouse;
      const biome = BIOMES[h.biome || 0];
      ctx.fillStyle=biome.ground;ctx.fillRect(h.x,h.y+30,h.w,h.h-30);
      ctx.fillStyle=biome.platform;ctx.beginPath();ctx.moveTo(h.x-12,h.y+32);ctx.lineTo(h.x+h.w*.5,h.y);ctx.lineTo(h.x+h.w+12,h.y+32);ctx.closePath();ctx.fill();
      ctx.fillStyle='#070b09';ctx.fillRect(h.x+58,h.y+h.h-68,46,68);
      ctx.fillStyle=biome.platformTop;ctx.fillRect(h.x+18,h.y+48,27,22);ctx.fillRect(h.x+h.w-45,h.y+48,27,22);
      ctx.strokeStyle=biome.accent;ctx.lineWidth=3;ctx.strokeRect(h.x+8,h.y+38,h.w-16,h.h-42);
      ctx.fillStyle=biome.accent;ctx.fillText('SAFEHOUSE',h.x+h.w*.5,h.y+52);
    }
    for(const h of houses){
      if(h.x+h.w<=wallFront||h.x>cameraX+innerWidth+180) continue;
      const biome=BIOMES[h.biome??0];
      const reward=h.rewardKind==='vehicle'?VEHICLES[h.type]:WEAPONS[h.type];
      ctx.fillStyle=biome.ground;ctx.fillRect(h.x,h.y+28,h.w,h.h-28);
      ctx.fillStyle=biome.platform;ctx.beginPath();ctx.moveTo(h.x-10,h.y+30);ctx.lineTo(h.x+h.w*.5,h.y);ctx.lineTo(h.x+h.w+10,h.y+30);ctx.closePath();ctx.fill();
      ctx.fillStyle='#101513';ctx.fillRect(h.x+h.w*.42,h.y+h.h-45,28,45);
      ctx.strokeStyle=h.claimed?'#59615a':reward.color;ctx.lineWidth=3;ctx.strokeRect(h.x+8,h.y+37,h.w-16,h.h-45);
      ctx.fillStyle=h.claimed?'#69716c':reward.color;ctx.fillText(h.claimed?'EMPTY':reward.label,h.x+h.w*.5,h.y+52);
    }
    ctx.textAlign='start';
  }

  function drawEnemyProjectiles(){
    for(const s of enemyProjectiles){ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(220,240,120,.45)';ctx.beginPath();ctx.arc(s.x,s.y,s.r+4,0,Math.PI*2);ctx.stroke();}
  }

  function drawParticles() {
    for (const p of particles) {
      ctx.globalAlpha = Math.min(1, p.life * 3);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    ctx.globalAlpha = 1;
  }

  function drawExplosions() {
    for (const ex of explosions) {
      const t = 1 - ex.life / ex.maxLife;
      const radius = ex.radius * (.18 + t * .9);
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - t);
      const g = ctx.createRadialGradient(ex.x,ex.y,0,ex.x,ex.y,radius);
      g.addColorStop(0,'rgba(255,255,205,.95)');
      g.addColorStop(.18,'rgba(255,216,61,.92)');
      g.addColorStop(.45,'rgba(255,76,42,.72)');
      g.addColorStop(.78,'rgba(112,240,78,.28)');
      g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(ex.x,ex.y,radius,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle=`rgba(255,225,88,${Math.max(0,.8-t)})`;ctx.lineWidth=5;ctx.beginPath();ctx.arc(ex.x,ex.y,radius*.72,0,Math.PI*2);ctx.stroke();
      ctx.restore();
    }
  }

  function drawCrosshair() {
    const gun = getGunMuzzle();
    const distance = player.weapon === 'sniper' ? 145 : 108;
    const cx = gun.x + facing * distance;
    const cy = gun.y;
    const t = Math.pow(player.bloom / 100, 1.35);
    const angle = t * (42 * Math.PI / 180);
    const halfGap = t * 8;
    const segmentLength = 30;
    const dx = Math.cos(angle) * segmentLength;
    const dy = Math.sin(angle) * segmentLength;
    const tipX = cx - facing * segmentLength * .45;

    ctx.save();
    ctx.strokeStyle = player.bloom > 75 ? 'rgba(232,205,93,.96)' : 'rgba(231,238,225,.92)';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'square';
    ctx.beginPath();
    ctx.moveTo(tipX, cy - halfGap);
    ctx.lineTo(tipX + facing * dx, cy - halfGap - dy);
    ctx.moveTo(tipX, cy + halfGap);
    ctx.lineTo(tipX + facing * dx, cy + halfGap + dy);
    ctx.stroke();
    ctx.restore();
  }

  function drawBloomVignette(w, h) {
    const a = Math.max(0, (player.bloom - 35) / 100);
    if (a <= 0) return;
    const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * .25, w / 2, h / 2, Math.max(w, h) * .65);
    g.addColorStop(0, 'rgba(49,91,49,0)');
    g.addColorStop(1, `rgba(58,103,53,${a * .52})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }

  function drawGuardFlash(w, h) {
    ctx.save();
    ctx.globalAlpha = Math.min(.38, guardFlash * .32);
    ctx.strokeStyle = '#e0d879';
    ctx.lineWidth = 8;
    ctx.strokeRect(9, 9, w - 18, h - 18);
    ctx.restore();
  }

  function frame(now) {
    let dt = (now - last) / 1000;
    last = now;
    dt = Math.min(dt, .033);
    update(dt);
    draw();
    requestAnimationFrame(frame);
  }

  renderLeaderboard();
  setCoinBalance(getCoinBalance());
  requestAnimationFrame(frame);
})();
