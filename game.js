(() => {
  const menuScreen = document.getElementById('menuScreen');
  const wipScreen = document.getElementById('wipScreen');
  const challengesScreen = document.getElementById('challengesScreen');
  const customizeScreen = document.getElementById('customizeScreen');
  const shopScreen = document.getElementById('shopScreen');
  const settingsScreen = document.getElementById('settingsScreen');
  const gameScreen = document.getElementById('gameScreen');
  const runBtn = document.getElementById('runBtn');
  const backBtn = document.getElementById('backBtn');
  const challengesBtn = document.getElementById('challengesBtn');
  const challengesBackBtn = document.getElementById('challengesBackBtn');
  const challengesMenuRankName = document.getElementById('challengesMenuRankName');
  const challengesMenuRankStars = document.getElementById('challengesMenuRankStars');
  const challengesMenuList = document.getElementById('challengesMenuList');
  const customizeBtn = document.getElementById('customizeBtn');
  const customizeBackBtn = document.getElementById('customizeBackBtn');
  const shopBtn = document.getElementById('shopBtn');
  const shopBackBtn = document.getElementById('shopBackBtn');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsBackBtn = document.getElementById('settingsBackBtn');
  const shopCoinBalance = document.getElementById('shopCoinBalance');
  const cosmeticShopItems = document.getElementById('cosmeticShopItems');
  const vehicleSkinShopItems = document.getElementById('vehicleSkinShopItems');
  const weaponSkinShopItems = document.getElementById('weaponSkinShopItems');
  const upgradeShopItems = document.getElementById('upgradeShopItems');
  const startingItemShopItems = document.getElementById('startingItemShopItems');
  const shopCategoryPrev = document.getElementById('shopCategoryPrev');
  const shopCategoryNext = document.getElementById('shopCategoryNext');
  const shopCategoryTitle = document.getElementById('shopCategoryTitle');
  const shopCategoryDots = document.getElementById('shopCategoryDots');
  const vehiclePreviewPrev = document.getElementById('vehiclePreviewPrev');
  const vehiclePreviewNext = document.getElementById('vehiclePreviewNext');
  const vehiclePreviewLabel = document.getElementById('vehiclePreviewLabel');
  const weaponPreviewPrev = document.getElementById('weaponPreviewPrev');
  const weaponPreviewNext = document.getElementById('weaponPreviewNext');
  const weaponPreviewLabel = document.getElementById('weaponPreviewLabel');
  const startingItemSign = document.getElementById('startingItemSign');
  const startingItemSignIcon = document.getElementById('startingItemSignIcon');
  const startingItemSignLabel = document.getElementById('startingItemSignLabel');
  const customPreview = document.getElementById('customPreview');
  const genderSelect = document.getElementById('genderSelect');
  const hairSelect = document.getElementById('hairSelect');
  const skinColorInput = document.getElementById('skinColorInput');
  const hairColorInput = document.getElementById('hairColorInput');
  const facialHairSelect = document.getElementById('facialHairSelect');
  const facialHairColorInput = document.getElementById('facialHairColorInput');
  const shirtColorInput = document.getElementById('shirtColorInput');
  const pantsColorInput = document.getElementById('pantsColorInput');
  const hideHeadgearToggle = document.getElementById('hideHeadgearToggle');
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
  const actionNotice = document.getElementById('actionNotice');
  const pauseCoins = document.getElementById('pauseCoins');
  const pauseDistance = document.getElementById('pauseDistance');
  const pauseKills = document.getElementById('pauseKills');
  const menuRankName = document.getElementById('menuRankName');
  const menuRankStars = document.getElementById('menuRankStars');
  const pauseChallengeList = document.getElementById('pauseChallengeList');
  const challengePanel = document.getElementById('challengePanel');
  const challengeRankName = document.getElementById('challengeRankName');
  const challengeRankStars = document.getElementById('challengeRankStars');
  const challengeEarnedList = document.getElementById('challengeEarnedList');
  const challengeRankUp = document.getElementById('challengeRankUp');
  const challengeNextList = document.getElementById('challengeNextList');
  const challengeContinueBtn = document.getElementById('challengeContinueBtn');

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
  const SHOP_KEY = 'bloomRunShopV1';
  const PROGRESSION_KEY = 'bloomRunProgressionV1';
  const RANK_NAMES = [
    'SEEDLING','SPROUT','TRAILBLAZER','SCAVENGER','RUNNER','OUTRIDER','PATHFINDER','SHARPSHOT',
    'VANGUARD','STALKER','BREAKER','RECLAIMER','WARDEN','MARAUDER','SENTINEL','ROADBORN',
    'HARBINGER','IRONROOT','STORMRUNNER','GEARHEAD','BLOOMHUNTER','DREADWALKER','LAST LIGHT','APEX SURVIVOR'
  ];
  // 23 rank-ups consuming exactly 100 challenge stars: 5×3, 8×4, 7×5, 3×6.
  const RANK_STAR_REQUIREMENTS = [3,3,3,3,3, 4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5, 6,6,6];
  const RANK_UNLOCKS = {
    2:{item:'smg',label:'START WITH SMG'}, 4:{item:'ar',label:'START WITH AR'},
    6:{item:'shotgun',label:'START WITH SHOTGUN'}, 8:{item:'sniper',label:'START WITH SNIPER'},
    12:{item:'rpg',label:'START WITH RPG'}, 16:{item:'upgradedMotorcycle',label:'UPGRADED MOTORCYCLE'},
    20:{item:'upgradedCar',label:'UPGRADED CAR'}, 24:{item:'upgradedTruck',label:'UPGRADED TRUCK'}
  };
  const BLOOM_PER_TRIGGER = 0.42;
  const BIOME_LENGTH = 10000; // 1000 meters at 10 world pixels per meter.
  const BIOMES = [
    { name: 'OVERGROWN OUTSKIRTS', skyA:'#15241d', skyB:'#0d1713', skyC:'#09100d', ground:'#18221d', groundTop:'#315039', platform:'#344b3d', platformTop:'#79a05f', accent:'#6faa59', silhouette:'#384f41' },
    { name: 'RUSTED INDUSTRIAL', skyA:'#29231d', skyB:'#171513', skyC:'#0d0d0c', ground:'#2c2822', groundTop:'#72543a', platform:'#453d34', platformTop:'#a87749', accent:'#bf7d45', silhouette:'#5a4b3e' },
    { name: 'FLOODED DISTRICT', skyA:'#15252b', skyB:'#0e1a20', skyC:'#091014', ground:'#17262a', groundTop:'#356b72', platform:'#2b454a', platformTop:'#56a0a3', accent:'#64b6b1', silhouette:'#355a61' },
    { name: 'PALE BLOOM FIELDS', skyA:'#292b20', skyB:'#191a14', skyC:'#0d0e0b', ground:'#27291e', groundTop:'#7e8b4a', platform:'#414531', platformTop:'#a5b763', accent:'#c3cf6b', silhouette:'#62684b' }
  ];

  // Stage 12 wall pressure is distance-gated relative to normal player speed.
  const BLOOM_WALL_BASE_SPEED = RUN_SPEED * 0.2;
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
      damage: 1.5, ammo: Infinity, spread: 2.0, bloomSpread: 0.88,
      bloomPerShot: 0.34, bulletSpeed: 1160, bulletLife: 1.3,
      color: '#9bb8a2', guard: true
    },
    shotgun: {
      label: 'SHOTGUN', automatic: false, cooldown: 0.66, pellets: 7,
      damage: 1.5, ammo: Infinity, spread: 15, bloomSpread: 0.7,
      bloomPerShot: BLOOM_PER_TRIGGER, bulletSpeed: 940, bulletLife: 0.62,
      color: '#d2ad74', guard: true
    },
    rpg: {
      label: 'RPG', automatic: false, cooldown: 0.95, pellets: 1,
      damage: 10, ammo: Infinity, spread: 1.1, bloomSpread: 0.45,
      bloomPerShot: 1.25, bulletSpeed: 650, bulletLife: 2.0,
      color: '#d27054', guard: true, explosive: true, radius: 115
    },
    sniper: {
      label: 'SNIPER', automatic: false, cooldown: 0.82, pellets: 1,
      damage: 5, ammo: Infinity, spread: 0.25, bloomSpread: 0.36,
      bloomPerShot: 0.72, bulletSpeed: 1550, bulletLife: 1.5,
      color: '#8ecad0', guard: true
    },
    smg: {
      label: 'SMG', automatic: true, cooldown: 0.075, pellets: 1,
      damage: 1, ammo: Infinity, spread: 4.3, bloomSpread: 1.1,
      bloomPerShot: 0.28, bulletSpeed: 1040, bulletLife: 1.0,
      color: '#b6a2d6', guard: true
    }
  };
  const WEAPON_KEYS = ['ar', 'shotgun', 'rpg', 'sniper', 'smg'];
  const WEAPON_PRIORITY = ['rpg', 'sniper', 'shotgun', 'ar', 'smg', 'pistol'];

  const VEHICLES = {
    motorcycle: { label: 'MOTORCYCLE', minDistance: 1000, duration: 8,  color: '#d2b05c' },
    car:        { label: 'CAR',        minDistance: 2500, duration: 12, color: '#6fa2bf' },
    truck:      { label: 'TRUCK',      minDistance: 6000, duration: 20, color: '#9a7659' }
  };


  const CHARACTER_SKINS = {
    base:{label:'DEFAULT',price:0,desc:'Uses your customization with no extra theme.',chip:'#51655a'},
    gold:{label:'GOLD',price:10000,desc:'Solid polished gold-metal outfit with a restrained metallic shine.',chip:'#d7ad3e'},
    festive:{label:'FESTIVE',price:1000,desc:'Winter runner coat with fur trim, holly, and festive layers.',chip:'#b83f39'},
    camo:{label:'CAMO',price:100,desc:'Full field-camouflage fatigues and utility rig.',chip:'#69704a'},
    blooming:{label:'BLOOMING',price:2500,desc:'Weathered overgrowth outfit with moss, grass, vines, and flowers.',chip:'#72b95f'},
    cosmic:{label:'COSMIC',price:5000,desc:'Dark starfield accents and tiny constellations.',chip:'#6b58a7'},
    spooky:{label:'SPOOKY / HALLOWEEN',price:800,desc:'Orange and violet haunted detailing.',chip:'#d97630'},
    cupid:{label:'CUPID',price:500,desc:'Pink heart accents layered over the themed outfit.',chip:'#e87ba4'},
    stpatricks:{label:"ST. PATRICK'S DAY",price:300,desc:'Green clover-inspired highlights.',chip:'#4d9b54'},
    soldier:{label:'SOLDIER',price:200,desc:'Harness straps and field-kit accents.',chip:'#66704e'},
    beach:{label:'BEACH',price:800,desc:'Bright tropical bands and beach details.',chip:'#55b8bd'},
    ninja:{label:'NINJA',price:2000,desc:'Full stealth wraps, hood, face mask, sash, and arm guards.',chip:'#252936'},
    pirate:{label:'PIRATE',price:1500,desc:'Red sash, belt, and pirate trim.',chip:'#98473f'}
  };

  const GEAR_SKINS = {
    base:{label:'DEFAULT',price:0,desc:'Standard equipment finish.',chip:'#5f675f'},
    gold:{label:'GOLD',price:10000,desc:'Solid gold-metal finish with a subtle polished shine.',chip:'#d7ad3e'},
    festive:{label:'FESTIVE',price:1000,desc:'Seasonal finish with wreath detailing.',chip:'#b94542'},
    camo:{label:'CAMO',price:100,desc:'Layered field camouflage across the whole body.',chip:'#65704a'},
    zebra:{label:'ZEBRA',price:500,desc:'Natural black-and-white striping across the whole body.',chip:'#e6e6df'},
    realistic:{label:'ULTRA REALISTIC',price:1000,desc:'Muted steel, rubber, glass, and worn hardware tones.',chip:'#6d7471'},
    glowing:{label:'GLOWING',price:1500,desc:'Cold luminous energy finish.',chip:'#79e8e8'},
    toxic:{label:'TOXIC',price:3000,desc:'Acid green contaminated finish.',chip:'#9bd94d'},
    blooming:{label:'BLOOMING',price:2500,desc:'Old rusted equipment reclaimed by moss, grass, vines, and flowers.',chip:'#6dbb61'},
    water:{label:'WATER',price:800,desc:'Blue flowing-water finish.',chip:'#54a7d2'},
    grass:{label:'GRASS',price:300,desc:'Living green field finish.',chip:'#5e9c51'},
    cosmic:{label:'COSMIC',price:5000,desc:'Deep-space violet and star highlights.',chip:'#6654a0'},
    neon:{label:'NEON',price:8000,desc:'Detailed neon tracing that follows the equipment body lines.',chip:'#e250d4'},
    dots:{label:'DOTS',price:800,desc:'Contrasting polka-dot finish.',chip:'#d8cd86'}
  };

  const STARTING_ITEMS = {
    none:{label:'NONE',price:0,kind:'none',type:null,desc:'Begin with the normal pistol and no vehicle.'},
    smg:{label:'SMG',price:0,kind:'weapon',type:'smg',unlockRank:2,desc:'Earn the SPROUT field rank to start with an SMG.'},
    ar:{label:'AR',price:0,kind:'weapon',type:'ar',unlockRank:4,desc:'Earn the SCAVENGER field rank to start with an assault rifle.'},
    shotgun:{label:'SHOTGUN',price:0,kind:'weapon',type:'shotgun',unlockRank:6,desc:'Earn the OUTRIDER field rank to start with the shotgun.'},
    sniper:{label:'SNIPER',price:0,kind:'weapon',type:'sniper',unlockRank:8,desc:'Earn the SHARPSHOT field rank to start with the piercing sniper.'},
    rpg:{label:'RPG',price:0,kind:'weapon',type:'rpg',unlockRank:12,desc:'Earn the RECLAIMER field rank to start with the RPG.'},
    upgradedMotorcycle:{label:'UPGRADED MOTORCYCLE',price:0,kind:'vehicle',type:'motorcycle',upgraded:true,unlockRank:16,desc:'Rank reward: upgraded motorcycle with 12 seconds of fuel.'},
    upgradedCar:{label:'UPGRADED CAR',price:0,kind:'vehicle',type:'car',upgraded:true,unlockRank:20,desc:'Rank reward: upgraded car with 18 seconds of fuel.'},
    upgradedTruck:{label:'UPGRADED TRUCK',price:0,kind:'vehicle',type:'truck',upgraded:true,unlockRank:24,desc:'Rank reward: upgraded truck with 30 seconds of fuel.'}
  };

  const SHOP_UPGRADES = {
    bloomControl:{label:'BLOOM STABILIZER',price:3000,desc:'Permanent: Bloom accumulates 15% more slowly from time and trigger pulls.'}
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
  let actionNoticeTimer = 0;
  let progressionStateCache = null;
  let runChallengeCompleted = new Set();
  let pendingGameOverReason = null;
  let shopStateCache = null;
  const SHOP_CATEGORIES = [
    {key:'cosmetics',label:'COSMETICS'},
    {key:'vehicleSkins',label:'VEHICLE SKINS'},
    {key:'weaponSkins',label:'WEAPON SKINS'},
    {key:'upgrades',label:'UPGRADES'},
    {key:'startingItems',label:'STARTING ITEM'}
  ];
  let activeShopCategoryIndex = 0;
  const SHOP_VEHICLE_PREVIEWS = ['motorcycle','car','truck'];
  const SHOP_WEAPON_PREVIEWS = ['pistol','smg','ar','shotgun','sniper','rpg'];
  let shopVehiclePreviewIndex = 1;
  let shopWeaponPreviewIndex = 2;
  let svgSkinPatternUid = 0;

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
  let obstacles = [];
  let nextObstacleId = 1;

  function showScreen(screen) {
    [menuScreen, wipScreen, challengesScreen, customizeScreen, shopScreen, settingsScreen, gameScreen].forEach(s => s && s.classList.remove('active'));
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
  challengesBtn?.addEventListener('click', () => { renderMenuChallenges(); openMenuPanel(challengesScreen); });
  challengesBackBtn?.addEventListener('click', () => { showScreen(menuScreen); state = 'menu'; updateRankUI(); });
  customizeBtn.addEventListener('click', () => { loadCustomizeControls(); openMenuPanel(customizeScreen); drawCustomizerPreview(); });
  customizeBackBtn.addEventListener('click', () => { showScreen(menuScreen); state = 'menu'; });
  shopBtn.addEventListener('click', () => { syncRankUnlocks(); setCoinBalance(getCoinBalance()); renderShop(); openMenuPanel(shopScreen); updateShopCategoryView(); });
  shopBackBtn.addEventListener('click', () => { showScreen(menuScreen); state = 'menu'; updateStartingItemSign(); });
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
  challengeContinueBtn?.addEventListener('click', () => showFinalResult(pendingGameOverReason || 'zombies'));

  function returnToMenu() {
    stopMusic();
    stopGoldRushAudio();
    state = 'menu';
    renderLeaderboard();
    updateRankUI();
    pausePanel.classList.add('hidden');
    resultPanel.classList.add('hidden');
    if (challengePanel) challengePanel.classList.add('hidden');
    showScreen(menuScreen);
    updateStartingItemSign();
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
      hairColor:'#1b1b19', facialHairColor:'#1b1b19', shirt:'#51655a', pants:'#26352f', hideHeadgear:false
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
      pants: pantsColorInput.value,
      hideHeadgear: !!hideHeadgearToggle?.checked
    };
    try { localStorage.setItem(CUSTOMIZE_KEY, JSON.stringify(next)); } catch {}
    characterStyle = {...next, cosmeticSkin:getShopState().equipped.cosmetic || 'base'};
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
    if (hideHeadgearToggle) hideHeadgearToggle.checked = !!style.hideHeadgear;
    characterStyle = {...style, cosmeticSkin:getShopState().equipped.cosmetic || 'base'};
  }

  [genderSelect, hairSelect, facialHairSelect, skinColorInput, hairColorInput, facialHairColorInput, shirtColorInput, pantsColorInput, hideHeadgearToggle].filter(Boolean).forEach(control => {
    control.addEventListener('input', saveCustomization);
    control.addEventListener('change', saveCustomization);
  });



  function buildChallenges() {
    const list = [];
    for (let tier = 1; tier <= 20; tier++) {
      const distance = 250 + (tier - 1) * 250;
      const kills = 5 + (tier - 1) * 4;
      const coinCount = 5 + (tier - 1) * 2;
      const groups = 1 + Math.floor((tier - 1) / 3);
      const blooms = 1 + Math.floor((tier - 1) / 4);
      list.push({id:`distance-${tier}`,kind:'distance',target:distance,label:`Reach ${distance} meters in one run`});
      list.push({id:`kills-${tier}`,kind:'kills',target:kills,label:`Defeat ${kills} infected in one run`});
      list.push({id:`coins-${tier}`,kind:'coins',target:coinCount,label:`Collect ${coinCount} coins in one run`});
      list.push({id:`groups-${tier}`,kind:'coinGroups',target:groups,label:`Complete ${groups} full coin ${groups===1?'spawn':'spawns'} in one run`});
      list.push({id:`blooms-${tier}`,kind:'blooms',target:blooms,label:`Collect ${blooms} Bloom ${blooms===1?'cleanser':'cleansers'} in one run`});
    }
    return list;
  }
  const CHALLENGES = buildChallenges();
  const CHALLENGE_BY_ID = new Map(CHALLENGES.map(c => [c.id,c]));

  function rankIndexFromStars(stars) {
    let spent = 0;
    for (let i = 0; i < RANK_STAR_REQUIREMENTS.length; i++) {
      spent += RANK_STAR_REQUIREMENTS[i];
      if (stars < spent) return i + 1;
    }
    return 24;
  }

  function rankProgressFromStars(stars) {
    const rankIndex = rankIndexFromStars(stars);
    if (rankIndex >= 24) return {index:24,name:RANK_NAMES[23],earned:6,needed:6,maxed:true};
    let before = 0;
    for (let i = 0; i < rankIndex - 1; i++) before += RANK_STAR_REQUIREMENTS[i];
    const needed = RANK_STAR_REQUIREMENTS[rankIndex - 1];
    return {index:rankIndex,name:RANK_NAMES[rankIndex-1],earned:Math.max(0,stars-before),needed,maxed:false};
  }

  function rankMaxMultiplier() {
    const r = rankProgressFromStars(getProgressionState().completedIds.length).index;
    if (r >= 12) return 12;
    if (r >= 8) return 9;
    if (r >= 4) return 6;
    return 3;
  }

  function defaultProgressionState() {
    return {completedIds:[],activeIds:CHALLENGES.slice(0,5).map(c=>c.id),nextIndex:5};
  }

  function getProgressionState() {
    if (progressionStateCache) return progressionStateCache;
    const defaults = defaultProgressionState();
    try {
      const raw = JSON.parse(localStorage.getItem(PROGRESSION_KEY) || 'null');
      if (!raw || typeof raw !== 'object') return (progressionStateCache = defaults);
      const completedIds = Array.isArray(raw.completedIds) ? [...new Set(raw.completedIds.filter(id=>CHALLENGE_BY_ID.has(id)))] : [];
      const activeIds = Array.isArray(raw.activeIds) ? [...new Set(raw.activeIds.filter(id=>CHALLENGE_BY_ID.has(id) && !completedIds.includes(id)))] : [];
      let nextIndex = Math.max(0, Math.min(CHALLENGES.length, Number(raw.nextIndex)||0));
      while (activeIds.length < 5 && nextIndex < CHALLENGES.length) {
        const id = CHALLENGES[nextIndex++].id;
        if (!completedIds.includes(id) && !activeIds.includes(id)) activeIds.push(id);
      }
      return (progressionStateCache = {completedIds,activeIds,nextIndex});
    } catch { return (progressionStateCache = defaults); }
  }

  function saveProgressionState(stateObj=getProgressionState()) {
    progressionStateCache = stateObj;
    try { localStorage.setItem(PROGRESSION_KEY, JSON.stringify(stateObj)); } catch {}
    syncRankUnlocks();
    updateRankUI();
  }

  function isStartingItemUnlocked(key) {
    const item = STARTING_ITEMS[key];
    if (!item || !item.unlockRank) return true;
    return rankProgressFromStars(getProgressionState().completedIds.length).index >= item.unlockRank;
  }

  function syncRankUnlocks() {
    const stateObj = getShopState();
    const rank = rankProgressFromStars(getProgressionState().completedIds.length).index;
    let changed = false;
    for (const [key,item] of Object.entries(STARTING_ITEMS)) {
      if (item.unlockRank && rank >= item.unlockRank && !stateObj.owned.startingItems.includes(key)) {
        stateObj.owned.startingItems.push(key); changed = true;
      }
    }
    if (stateObj.equipped.startingItem !== 'none' && !isStartingItemUnlocked(stateObj.equipped.startingItem)) {
      stateObj.equipped.startingItem = 'none'; changed = true;
    }
    if (changed) saveShopState(stateObj);
  }

  function starString(progress) {
    if (progress.maxed) return '★★★★★★';
    return '★'.repeat(Math.min(progress.needed,progress.earned)) + '☆'.repeat(Math.max(0,progress.needed-progress.earned));
  }

  function updateRankUI() {
    const progress = rankProgressFromStars(getProgressionState().completedIds.length);
    if (menuRankName) menuRankName.textContent = progress.name;
    if (menuRankStars) menuRankStars.textContent = starString(progress);
    if (challengesMenuRankName) challengesMenuRankName.textContent = progress.name;
    if (challengesMenuRankStars) challengesMenuRankStars.textContent = starString(progress);
  }

  function renderMenuChallenges() {
    if (!challengesMenuList) return;
    const stateObj = getProgressionState();
    const progress = rankProgressFromStars(stateObj.completedIds.length);
    if (challengesMenuRankName) challengesMenuRankName.textContent = progress.name;
    if (challengesMenuRankStars) challengesMenuRankStars.textContent = starString(progress);
    challengesMenuList.innerHTML = '';
    stateObj.activeIds.forEach((id, index) => {
      const c = CHALLENGE_BY_ID.get(id);
      if (!c) return;
      const row = document.createElement('div');
      row.className = 'challenges-menu-row';
      const target = c.kind === 'distance' ? `${c.target}m` : String(c.target);
      row.innerHTML = `<div class="challenge-menu-number">${String(index + 1).padStart(2,'0')}</div><div class="challenge-menu-copy"><strong>${c.label}</strong><span>TARGET · ${target}</span></div><div class="challenge-menu-star">★</div>`;
      challengesMenuList.appendChild(row);
    });
    if (!stateObj.activeIds.length) {
      const done = document.createElement('div');
      done.className = 'challenges-menu-complete';
      done.textContent = 'ALL CHALLENGES COMPLETE';
      challengesMenuList.appendChild(done);
    }
  }

  function challengeValue(challenge) {
    if (!player || !challenge) return 0;
    if (challenge.kind === 'distance') return getDistanceMeters();
    if (challenge.kind === 'kills') return player.kills || 0;
    if (challenge.kind === 'coins') return player.runCoins || 0;
    if (challenge.kind === 'coinGroups') return player.coinGroupsCompleted || 0;
    if (challenge.kind === 'blooms') return player.bloomsFixed || 0;
    return 0;
  }

  function updateRunChallengeStatus() {
    if (!player) return;
    const stateObj = getProgressionState();
    for (const id of stateObj.activeIds) {
      const c = CHALLENGE_BY_ID.get(id);
      if (c && challengeValue(c) >= c.target) runChallengeCompleted.add(id);
    }
  }

  function challengeProgressLabel(c) {
    const value = Math.min(c.target, challengeValue(c));
    if (c.kind === 'distance') return `${value}/${c.target}m`;
    return `${value}/${c.target}`;
  }

  function renderPauseChallenges() {
    if (!pauseChallengeList) return;
    updateRunChallengeStatus();
    const stateObj = getProgressionState();
    pauseChallengeList.innerHTML = '';
    for (const id of stateObj.activeIds) {
      const c = CHALLENGE_BY_ID.get(id); if (!c) continue;
      const row = document.createElement('div');
      row.className = `pause-challenge-row${runChallengeCompleted.has(id)?' pending':''}`;
      row.innerHTML = `<strong>${c.label}</strong><span>${challengeProgressLabel(c)}</span>`;
      pauseChallengeList.appendChild(row);
    }
  }

  function commitRunChallenges() {
    updateRunChallengeStatus();
    const stateObj = getProgressionState();
    const completedNow = stateObj.activeIds.filter(id => runChallengeCompleted.has(id));
    if (!completedNow.length) return null;
    const beforeStars = stateObj.completedIds.length;
    const beforeRank = rankIndexFromStars(beforeStars);
    for (const id of completedNow) if (!stateObj.completedIds.includes(id)) stateObj.completedIds.push(id);
    stateObj.activeIds = stateObj.activeIds.filter(id => !completedNow.includes(id));
    while (stateObj.activeIds.length < 5 && stateObj.nextIndex < CHALLENGES.length) {
      const id = CHALLENGES[stateObj.nextIndex++].id;
      if (!stateObj.completedIds.includes(id) && !stateObj.activeIds.includes(id)) stateObj.activeIds.push(id);
    }
    const afterRank = rankIndexFromStars(stateObj.completedIds.length);
    saveProgressionState(stateObj);
    const rankUps=[];
    for (let r=beforeRank+1;r<=afterRank;r++) rankUps.push({index:r,name:RANK_NAMES[r-1],unlock:RANK_UNLOCKS[r]||null});
    return {completedNow:completedNow.map(id=>CHALLENGE_BY_ID.get(id)).filter(Boolean),rankUps,progress:rankProgressFromStars(stateObj.completedIds.length),active:stateObj.activeIds.map(id=>CHALLENGE_BY_ID.get(id)).filter(Boolean)};
  }

  function renderChallengeReview(outcome) {
    if (!outcome || !challengePanel) return;
    challengeEarnedList.innerHTML = '';
    outcome.completedNow.forEach((c,i)=>{
      const row=document.createElement('div'); row.className='challenge-earned-row'; row.style.animationDelay=`${i*.08}s`;
      row.innerHTML=`<strong>${c.label}</strong><span>+★</span>`; challengeEarnedList.appendChild(row);
    });
    if (challengeRankName) challengeRankName.textContent = outcome.progress.name;
    if (challengeRankStars) challengeRankStars.textContent = starString(outcome.progress);
    if (challengeRankUp) {
      if (outcome.rankUps.length) {
        const latest=outcome.rankUps[outcome.rankUps.length-1];
        const unlocks=outcome.rankUps.filter(x=>x.unlock).map(x=>x.unlock.label);
        challengeRankUp.classList.remove('hidden');
        challengeRankUp.innerHTML = `RANK UP · ${latest.name}${unlocks.length?`<small>UNLOCKED: ${unlocks.join(' · ')}</small>`:''}`;
      } else { challengeRankUp.classList.add('hidden'); challengeRankUp.innerHTML=''; }
    }
    challengeNextList.innerHTML='';
    outcome.active.forEach(c=>{ const row=document.createElement('div'); row.className='challenge-next-row'; row.innerHTML=`<strong>${c.label}</strong><span>0/${c.target}${c.kind==='distance'?'m':''}</span>`; challengeNextList.appendChild(row); });
  }

  function defaultShopState() {
    return {
      owned:{
        cosmetics:['base'], weaponSkins:['base'], vehicleSkins:['base'],
        startingItems:['none'], upgrades:[]
      },
      equipped:{ cosmetic:'base', weaponSkin:'base', vehicleSkin:'base', startingItem:'none' }
    };
  }

  function getShopState() {
    if (shopStateCache) return shopStateCache;
    const defaults = defaultShopState();
    try {
      const raw = JSON.parse(localStorage.getItem(SHOP_KEY) || 'null');
      if (!raw || typeof raw !== 'object') return (shopStateCache = defaults);
      const merged = {
        owned:{
          cosmetics:Array.isArray(raw.owned?.cosmetics)?raw.owned.cosmetics:['base'],
          weaponSkins:Array.isArray(raw.owned?.weaponSkins)?raw.owned.weaponSkins:['base'],
          vehicleSkins:Array.isArray(raw.owned?.vehicleSkins)?raw.owned.vehicleSkins:['base'],
          startingItems:Array.isArray(raw.owned?.startingItems)?raw.owned.startingItems:['none'],
          upgrades:Array.isArray(raw.owned?.upgrades)?raw.owned.upgrades:[]
        },
        equipped:{...defaults.equipped,...(raw.equipped||{})}
      };
      for (const [list,key] of [['cosmetics','base'],['weaponSkins','base'],['vehicleSkins','base'],['startingItems','none']]) {
        if (!merged.owned[list].includes(key)) merged.owned[list].push(key);
      }
      if (merged.equipped.startingItem === 'pistol') merged.equipped.startingItem = 'none';
      merged.owned.startingItems = merged.owned.startingItems.filter(k => k !== 'pistol' && STARTING_ITEMS[k]);
      if (!STARTING_ITEMS[merged.equipped.startingItem] || ['motorcycle','car','truck','pistol'].includes(merged.equipped.startingItem)) merged.equipped.startingItem = 'none';
      return (shopStateCache = merged);
    } catch { return (shopStateCache = defaults); }
  }

  function saveShopState(stateObj = getShopState()) {
    shopStateCache = stateObj;
    try { localStorage.setItem(SHOP_KEY, JSON.stringify(stateObj)); } catch {}
    updateStartingItemSign();
  }

  function shopCategoryConfig(category) {
    if (category === 'cosmetics') return {items:CHARACTER_SKINS, owned:'cosmetics', equip:'cosmetic'};
    if (category === 'weaponSkins') return {items:GEAR_SKINS, owned:'weaponSkins', equip:'weaponSkin'};
    if (category === 'vehicleSkins') return {items:GEAR_SKINS, owned:'vehicleSkins', equip:'vehicleSkin'};
    if (category === 'startingItems') return {items:STARTING_ITEMS, owned:'startingItems', equip:'startingItem'};
    if (category === 'upgrades') return {items:SHOP_UPGRADES, owned:'upgrades', equip:null};
    return null;
  }

  function buyOrEquipShopItem(category, key) {
    const cfg = shopCategoryConfig(category);
    if (!cfg || !cfg.items[key]) return;
    if (category === 'startingItems' && !isStartingItemUnlocked(key)) return;
    const stateObj = getShopState();
    const owned = stateObj.owned[cfg.owned];
    const item = cfg.items[key];
    if (!owned.includes(key)) {
      const balance = getCoinBalance();
      if (balance < item.price) return;
      setCoinBalance(balance - item.price);
      owned.push(key);
    }
    if (cfg.equip) stateObj.equipped[cfg.equip] = key;
    saveShopState(stateObj);
    characterStyle = getActiveCharacterStyle();
    renderShop();
    drawCustomizerPreview();
  }

  function shopPriceLabel(item, owned, equipped, category) {
    if (equipped) return 'EQUIPPED';
    if (owned) return category === 'upgrades' ? 'OWNED' : 'EQUIP';
    return 'BUY';
  }

  function createShopPreview(category, key, item) {
    const wrap = document.createElement('div');
    wrap.className = 'shop-preview';
    if (category === 'cosmetics') {
      const canvas = document.createElement('canvas');
      canvas.width = 180; canvas.height = 126;
      wrap.appendChild(canvas);
      requestAnimationFrame(() => {
        const c = canvas.getContext('2d');
        c.clearRect(0,0,canvas.width,canvas.height);
        const g=c.createLinearGradient(0,0,0,126);g.addColorStop(0,'#18261e');g.addColorStop(1,'#0b120f');c.fillStyle=g;c.fillRect(0,0,180,126);
        const style = {...getCustomization(), cosmeticSkin:key};
        drawAvatarFigure(c, 90, 23, 1.48, style, 1, false);
      });
      return wrap;
    }
    if (category === 'weaponSkins') {
      wrap.innerHTML = equipmentIconSvg(SHOP_WEAPON_PREVIEWS[shopWeaponPreviewIndex],'weapon',key);
      return wrap;
    }
    if (category === 'vehicleSkins') {
      wrap.innerHTML = equipmentIconSvg(SHOP_VEHICLE_PREVIEWS[shopVehiclePreviewIndex],'vehicle',key);
      return wrap;
    }
    if (category === 'startingItems') {
      if (item.kind === 'none') {
        wrap.innerHTML = '<div class="shop-none-preview">NO STARTING SIGN</div>';
      } else {
        const signSkin = item.kind === 'vehicle' ? (getShopState().equipped.vehicleSkin || 'base') : (getShopState().equipped.weaponSkin || 'base');
        wrap.innerHTML = `<div class="shop-start-sign-preview sign-${item.type}"><div class="sign-icon">${equipmentIconSvg(item.type,item.kind,signSkin)}</div><div class="sign-word">${item.label}</div></div>`;
      }
      return wrap;
    }
    wrap.innerHTML = '<div class="shop-upgrade-preview">✿</div>';
    return wrap;
  }

  function renderShopList(container, category) {
    if (!container) return;
    const cfg = shopCategoryConfig(category);
    const stateObj = getShopState();
    const balance = getCoinBalance();
    container.innerHTML = '';
    for (const [key,item] of Object.entries(cfg.items)) {
      if (category === 'startingItems' && key === 'pistol') continue;
      const rankLocked = category === 'startingItems' && !isStartingItemUnlocked(key);
      const owned = stateObj.owned[cfg.owned].includes(key) && !rankLocked;
      const equipped = !!(cfg.equip && stateObj.equipped[cfg.equip] === key && !rankLocked);
      const card = document.createElement('div');
      card.className = `shop-item-card${owned?' owned':''}${equipped?' equipped':''}${rankLocked?' rank-locked':''}`;
      card.appendChild(createShopPreview(category,key,item));
      const name = document.createElement('div'); name.className='shop-item-name'; name.textContent=item.label; card.appendChild(name);
      const price = document.createElement('div'); price.className='shop-item-price';
      price.textContent = rankLocked ? `UNLOCK: ${RANK_NAMES[item.unlockRank-1]}` : (item.unlockRank ? 'RANK REWARD' : (item.price > 0 ? `${item.price} ◉` : 'FREE')); card.appendChild(price);
      const btn = document.createElement('button'); btn.className='shop-buy-btn'; btn.type='button'; btn.textContent=rankLocked?'LOCKED':shopPriceLabel(item,owned,equipped,category);
      btn.disabled = rankLocked || !!(category === 'upgrades' && owned) || (!owned && balance < item.price);
      btn.addEventListener('click', () => buyOrEquipShopItem(category,key));
      card.appendChild(btn);
      container.appendChild(card);
    }
    container.onwheel = ev => {
      if (Math.abs(ev.deltaY) > Math.abs(ev.deltaX)) { container.scrollLeft += ev.deltaY; ev.preventDefault(); }
    };
  }

  function updateShopCategoryView(delta=0) {
    activeShopCategoryIndex = (activeShopCategoryIndex + delta + SHOP_CATEGORIES.length) % SHOP_CATEGORIES.length;
    const active = SHOP_CATEGORIES[activeShopCategoryIndex];
    if (shopCategoryTitle) shopCategoryTitle.textContent = active.label;
    document.querySelectorAll('.shop-category-panel').forEach(panel => panel.classList.toggle('active', panel.dataset.shopCategory === active.key));
    if (shopCategoryDots) shopCategoryDots.innerHTML = SHOP_CATEGORIES.map((_,i)=>`<i class="${i===activeShopCategoryIndex?'active':''}"></i>`).join('');
  }

  function renderShop() {
    setCoinBalance(getCoinBalance());
    renderShopList(cosmeticShopItems,'cosmetics');
    renderShopList(vehicleSkinShopItems,'vehicleSkins');
    renderShopList(weaponSkinShopItems,'weaponSkins');
    renderShopList(upgradeShopItems,'upgrades');
    renderShopList(startingItemShopItems,'startingItems');
    updateShopCategoryView(0);
  }

  function updateSkinPreviewLabels() {
    if (vehiclePreviewLabel) vehiclePreviewLabel.textContent = (VEHICLES[SHOP_VEHICLE_PREVIEWS[shopVehiclePreviewIndex]]?.label || 'CAR');
    if (weaponPreviewLabel) weaponPreviewLabel.textContent = (WEAPONS[SHOP_WEAPON_PREVIEWS[shopWeaponPreviewIndex]]?.label || 'AR');
  }

  function cycleSkinPreview(kind, delta) {
    if (kind === 'vehicle') {
      shopVehiclePreviewIndex = (shopVehiclePreviewIndex + delta + SHOP_VEHICLE_PREVIEWS.length) % SHOP_VEHICLE_PREVIEWS.length;
      updateSkinPreviewLabels();
      renderShopList(vehicleSkinShopItems,'vehicleSkins');
    } else {
      shopWeaponPreviewIndex = (shopWeaponPreviewIndex + delta + SHOP_WEAPON_PREVIEWS.length) % SHOP_WEAPON_PREVIEWS.length;
      updateSkinPreviewLabels();
      renderShopList(weaponSkinShopItems,'weaponSkins');
    }
  }

  shopCategoryPrev?.addEventListener('click', () => updateShopCategoryView(-1));
  shopCategoryNext?.addEventListener('click', () => updateShopCategoryView(1));
  vehiclePreviewPrev?.addEventListener('click', () => cycleSkinPreview('vehicle',-1));
  vehiclePreviewNext?.addEventListener('click', () => cycleSkinPreview('vehicle',1));
  weaponPreviewPrev?.addEventListener('click', () => cycleSkinPreview('weapon',-1));
  weaponPreviewNext?.addEventListener('click', () => cycleSkinPreview('weapon',1));
  updateSkinPreviewLabels();

  function getActiveCharacterStyle() {
    const base = getCustomization();
    return {...base, cosmeticSkin:getShopState().equipped.cosmetic || 'base'};
  }

  function hasUpgrade(key) { return getShopState().owned.upgrades.includes(key); }
  function bloomGainModifier() { return hasUpgrade('bloomControl') ? 0.85 : 1; }

  function updateStartingItemSign() {
    if (!startingItemSign) return;
    const key = getShopState().equipped.startingItem || 'none';
    const rawItem = STARTING_ITEMS[key] || STARTING_ITEMS.none;
    const item = isStartingItemUnlocked(key) ? rawItem : STARTING_ITEMS.none;
    startingItemSign.className = `starting-item-sign${item.kind === 'none' ? ' hidden' : ''}${item.type ? ` sign-${item.type}` : ''}`;
    if (item.kind !== 'none') {
      const signSkin = item.kind === 'vehicle' ? (getShopState().equipped.vehicleSkin || 'base') : (getShopState().equipped.weaponSkin || 'base');
      startingItemSignIcon.innerHTML = equipmentIconSvg(item.type, item.kind, signSkin);
      startingItemSignLabel.textContent = item.label;
    }
  }

  function applyStartingItem() {
    const key = getShopState().equipped.startingItem || 'none';
    const item = STARTING_ITEMS[key];
    if (!item || item.kind === 'none' || item.type === 'pistol' || !isStartingItemUnlocked(key)) return;
    if (item.kind === 'weapon') {
      player.weaponInventory[item.type] = true;
      refreshActiveWeapon();
    } else if (item.kind === 'vehicle') {
      const def = VEHICLES[item.type];
      player.vehicle = item.type;
      player.vehicleUpgraded = !!item.upgraded;
      const duration = def.duration * (item.upgraded ? 1.5 : 1);
      player.vehicleTime = duration;
      player.vehicleMaxTime = duration;
    }
  }

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

    const voiceMoan = (base=96, dur=.45, volume=.08, human=false, delay=0) => {
      // A breathy vowel-like source with a falling pitch and formant resonances.
      // This sounds more like a throat/voice than a clean oscillator tone.
      const length = Math.max(1, Math.floor(ac.sampleRate * dur));
      const buffer = ac.createBuffer(1, length, ac.sampleRate);
      const data = buffer.getChannelData(0);
      let phase = 0;
      let breath = 0;
      for (let i=0;i<length;i++) {
        const t = i / ac.sampleRate;
        const progress = i / length;
        const freq = base * (1 - progress * (human ? .24 : .36)) * (1 + Math.sin(t*17.0)*.008);
        phase += Math.PI * 2 * freq / ac.sampleRate;
        const glottal = Math.sin(phase) + .34*Math.sin(phase*2.02) + .12*Math.sin(phase*3.01);
        const white = Math.random()*2-1;
        breath = breath*.82 + white*.18;
        const attack = Math.min(1, progress/.06);
        const release = Math.pow(Math.max(0, 1-progress), .72);
        data[i] = (glottal*.53 + breath*.24) * attack * release;
      }
      const src = ac.createBufferSource();
      src.buffer = buffer;
      const t0 = now + delay;

      const dry = ac.createBiquadFilter();
      dry.type = 'lowpass';
      dry.frequency.value = human ? 2600 : 1900;
      const dryGain = ac.createGain();
      dryGain.gain.value = volume*.24;
      src.connect(dry); dry.connect(dryGain); dryGain.connect(master);

      const formants = human
        ? [[620,5.5,.50],[1080,5.0,.34],[2380,4.2,.16]]
        : [[430,5.8,.58],[860,5.0,.33],[1740,4.0,.14]];
      for (const [f,q,g] of formants) {
        const bp = ac.createBiquadFilter();
        bp.type = 'bandpass'; bp.frequency.value=f; bp.Q.value=q;
        const bg = ac.createGain(); bg.gain.value = volume*g;
        src.connect(bp); bp.connect(bg); bg.connect(master);
      }
      src.start(t0); src.stop(t0 + dur + .035);
    };

    if (kind === 'gun' || kind === 'shoot') {
      const weapon = detail || (player && player.weapon) || 'pistol';
      const goldRushShot = !!(player && player.goldRushTime > 0);
      if (goldRushShot) master.gain.value = 1.0;
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
      // Gold Rush reinforces every weapon report with an extra pressure wave and rushing air,
      // so doubled-damage shots sound physically stronger without becoming a separate arcade beep.
      if (goldRushShot) {
        bodyThump(46, .14, .105, .002);
        noise(.16, .075, 'bandpass', 1350, 3000, .004, .85);
        noise(.22, .052, 'highpass', 760, 3600, .01, .65);
      }
    } else if (kind === 'zombieHit') {
      // Wet impact plus a low infected moan.
      bodyThump(52,.10,.078);
      noise(.075,.052,'lowpass',720,220,0,.65);
      voiceMoan(84 + Math.random()*18,.40 + Math.random()*.12,.086,false,.022);
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
    } else if (kind === 'multiplierBreak') {
      bodyThump(58,.075,.055);
      noise(.055,.04,'bandpass',980,520,0,1.2);
    } else if (kind === 'hit') {
      // Human pain/moan layer for the runner taking a zombie hit.
      bodyThump(45,.13,.09);
      noise(.07,.042,'lowpass',620,210,0,.6);
      voiceMoan(112 + Math.random()*12,.34 + Math.random()*.10,.095,true,.012);
    } else if (kind === 'wall') {
      // Stage 12: deeper roots/dirt, with volume driven by actual wall distance.
      const intensity = typeof detail === 'number' ? Math.max(0, Math.min(1, detail)) : .5;
      const v = .72 + intensity * 1.05;
      master.gain.value = Math.min(1.15, .72 + intensity * .32);
      tone(22,.84,'sine',.085*v,18);
      tone(34,.74,'triangle',.054*v,24,.025);
      noise(.90,.10*v,'lowpass',330,72,0,.65);
      noise(.72,.066*v,'bandpass',105,205,.018,1.35);
      noise(.16,.034*v,'bandpass',420,255,.14,1.5);
      noise(.12,.032*v,'bandpass',370,220,.46,1.45);
    } else if (kind === 'wallImpact') {
      // Dense root/wood collision when the Bloom wall actually catches the runner.
      master.gain.value = 1.05;
      bodyThump(24,.42,.19);
      tone(31,.48,'sine',.12,18,.005);
      noise(.50,.17,'lowpass',520,62,0,.55);
      noise(.24,.11,'bandpass',190,92,.018,1.15);
      noise(.09,.055,'bandpass',900,360,.025,1.6);
    } else if (kind === 'goldrush') {
      // Restored to the Stage 9 three-step Gold Rush cue.
      master.gain.value = .58;
      tone(440, .12, 'square', .024, 660);
      tone(660, .12, 'triangle', .027, 880, .08);
      tone(880, .18, 'square', .030, 1180, .16);
    } else if (kind === 'coin') {
      // Short metallic clinks: two hard high-frequency contacts plus a tiny ring.
      master.gain.value = .92;
      tone(1420,.045,'sine',.052,1180);
      tone(1960,.035,'triangle',.028,1640,.006);
      noise(.028,.025,'highpass',2500,5100,.002,.9);
      tone(1680,.085,'sine',.030,1260,.032);
      tone(2280,.052,'sine',.018,1840,.038);
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
    } else if (kind === 'death') {
      // Distinct final body impact followed by a longer fading human moan.
      master.gain.value = 1.0;
      bodyThump(32,.34,.14);
      noise(.22,.065,'lowpass',520,95,.01,.55);
      voiceMoan(101,.82,.12,true,.035);
      tone(29,.55,'sine',.065,20,.02);
    } else {
      tone(250,.045,'triangle',.03,190);
    }

    setTimeout(() => { try { master.disconnect(); } catch {} }, 1800);
  }

  function startGoldRushAudio(retrigger=true) {
    // Stage 13 restores the Stage 9 one-shot cue instead of a continuous Gold Rush bed.
    if (retrigger) playSfx('goldrush');
  }

  function stopGoldRushAudio() {
    if (!goldRushAudio) return;
    try { goldRushAudio.src && goldRushAudio.src.stop(); } catch {}
    try { goldRushAudio.rumble && goldRushAudio.rumble.stop(); } catch {}
    try { goldRushAudio.shimmerA && goldRushAudio.shimmerA.stop(); } catch {}
    try { goldRushAudio.shimmerB && goldRushAudio.shimmerB.stop(); } catch {}
    try { goldRushAudio.master && goldRushAudio.master.disconnect(); } catch {}
    goldRushAudio = null;
  }

  function startMusic() {
    if (!getSettings().music || musicNodes) return;
    const ac = ensureAudio();
    if (!ac) return;
    if (ac.state === 'suspended') {
      ac.resume().then(() => {
        if (getSettings().music && !musicNodes) startMusic();
      }).catch(()=>{});
      return;
    }

    const master = ac.createGain();
    // Louder gritty music bed so it remains audible under combat SFX.
    master.gain.value = .105;
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
        musicTone(78,.115,'sine',.21,38);
        musicNoise(.07,.055,'lowpass',360,.55);
      }
      // Snare / debris hit.
      if (pos === 4 || pos === 12) {
        musicNoise(.12,.14,'bandpass',1350,1.1);
        musicTone(165,.055,'triangle',.032,92);
      }
      // Fast dirty hats / grit.
      if (pos % 2 === 1 || pos === 6 || pos === 14) musicNoise(.035,.045,'highpass',3100,.65);

      if (pos % 4 === 0 || pos === 6 || pos === 14) {
        const b = bass[pos];
        musicTone(b,.15,'triangle',.14,b*.72);
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
    const style = getActiveCharacterStyle();
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



  function cosmeticOutfitPalette(style) {
    const skin = style.cosmeticSkin || 'base';
    const themes = {
      gold:['#c69a31','#a97820'], festive:['#a43131','#235d36'], camo:['#46513a','#2d3528'],
      blooming:['#355c39','#263f2b'], cosmic:['#252145','#17172d'], spooky:['#211c2b','#141319'],
      cupid:['#d86f96','#f0b4c8'], stpatricks:['#2c7b43','#183d28'], soldier:['#4c563d','#30372d'],
      beach:['#3aa9af','#d5b36f'], ninja:['#171b22','#0f1218'], pirate:['#efe1bd','#4d3026']
    };
    const chosen = themes[skin];
    return chosen ? {shirt:chosen[0],pants:chosen[1]} : {shirt:style.shirt || '#51655a',pants:style.pants || '#26352f'};
  }

  function cosmeticHidesHair(style) {
    return !style.hideHeadgear && (style.cosmeticSkin || 'base') === 'ninja';
  }

  function hairClipMode(style) {
    if (style.hideHeadgear) return 'none';
    switch (style.cosmeticSkin || 'base') {
      case 'festive':
      case 'soldier':
      case 'beach':
      case 'pirate':
      case 'stpatricks':
        return 'hat';
      case 'ninja':
        return 'hood';
      default:
        return 'none';
    }
  }

  function drawHairVisibleWithHeadgear(c, style) {
    if (cosmeticHidesHair(style)) return;
    const clipMode = hairClipMode(style);
    if (clipMode === 'none') {
      drawHairStyle(c, style);
      return;
    }
    c.save();
    c.beginPath();
    if (clipMode === 'hat') {
      c.rect(-24, 10, 20, 34);
      c.rect(-10, 14, 10, 26);
      c.rect(0, 16, 5, 12);
    } else if (clipMode === 'hood') {
      c.rect(-20, 14, 14, 28);
      c.rect(-9, 18, 4, 14);
    }
    c.clip();
    drawHairStyle(c, style);
    c.restore();
  }

  function drawCosmeticHeadgear(c, style) {
    if (style.hideHeadgear) return;
    const skin = style.cosmeticSkin || 'base';
    if (skin === 'base') return;
    c.save(); c.lineCap='round'; c.lineJoin='round';
    if (skin === 'gold') {
      c.strokeStyle='#f7df82'; c.lineWidth=2; c.beginPath(); c.moveTo(-10,5); c.lineTo(-6,0); c.lineTo(0,3); c.lineTo(6,-1); c.lineTo(10,5); c.stroke();
    } else if (skin === 'festive') {
      c.fillStyle='#a83432'; c.beginPath(); c.moveTo(-11,5); c.quadraticCurveTo(-2,-7,10,1); c.lineTo(7,6); c.closePath(); c.fill();
      c.fillStyle='#eee3c8'; c.fillRect(-11,4,20,3); c.beginPath(); c.arc(10,1,3,0,Math.PI*2); c.fill();
    } else if (skin === 'soldier') {
      c.fillStyle='#46503a'; c.beginPath(); c.arc(0,9,12,Math.PI,Math.PI*2); c.lineTo(10,11); c.lineTo(-10,11); c.closePath(); c.fill();
      c.strokeStyle='#7b8661'; c.lineWidth=2; c.beginPath(); c.moveTo(-9,7); c.lineTo(9,7); c.stroke();
    } else if (skin === 'beach') {
      c.fillStyle='#e6b857'; c.beginPath(); c.ellipse(0,5,13,3,0,0,Math.PI*2); c.fill(); c.fillStyle='#cf7d46'; c.fillRect(-7,1,14,4);
      c.strokeStyle='#1e2c2d'; c.lineWidth=2; c.beginPath(); c.moveTo(1,11); c.lineTo(10,11); c.stroke();
    } else if (skin === 'ninja') {
      // Full hood/mask intentionally covers the hairstyle.
      c.fillStyle='#11151c'; c.beginPath(); c.roundRect(-12,1,24,22,6); c.fill();
      c.fillStyle=style.skin; c.fillRect(-10,8,20,5); c.fillStyle='#0a0d12'; c.fillRect(-10,15,20,8);
      c.fillStyle='#d8f379'; c.fillRect(5,10,3,3);
    } else if (skin === 'pirate') {
      c.fillStyle='#3b2521'; c.beginPath(); c.moveTo(-13,5); c.lineTo(-7,-2); c.lineTo(8,0); c.lineTo(13,6); c.closePath(); c.fill();
      c.fillStyle='#a33e39'; c.fillRect(-10,5,19,3); c.strokeStyle='#201818'; c.lineWidth=2; c.beginPath(); c.moveTo(2,11); c.lineTo(11,11); c.stroke();
    } else if (skin === 'spooky') {
      c.strokeStyle='#d56e31'; c.lineWidth=2; c.beginPath(); c.arc(0,10,12,Math.PI*1.05,Math.PI*1.95); c.stroke();
    } else if (skin === 'cupid') {
      c.fillStyle='#f3b8d0'; c.font='7px serif'; c.fillText('♥',-12,4); c.fillText('♥',7,1);
    } else if (skin === 'stpatricks') {
      c.fillStyle='#235d35'; c.fillRect(-8,0,16,6); c.fillRect(-11,5,22,3); c.fillStyle='#d3b04d'; c.fillRect(-3,3,6,3);
    }
    c.restore();
  }

  function drawCharacterSkinOverlay(c, style, crouchOffset=0) {
    const skin = style.cosmeticSkin || 'base';
    if (skin === 'base') return;
    c.save(); c.lineCap='round'; c.lineJoin='round';
    const dot=(x,y,r,color)=>{c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();};
    if (skin === 'gold') {
      c.strokeStyle='#f6df86';c.lineWidth=1.6;c.strokeRect(-13,19,26,27);c.fillStyle='rgba(255,244,174,.48)';c.fillRect(-10,21,4,22);c.fillStyle='#916616';c.fillRect(-14,32,28,3);c.fillStyle='#ffe99a';c.fillRect(-2,32,4,3);
      c.beginPath();c.moveTo(-14,20);c.lineTo(-9,17);c.lineTo(-4,20);c.closePath();c.fill();c.beginPath();c.moveTo(14,20);c.lineTo(9,17);c.lineTo(4,20);c.closePath();c.fill();
    } else if (skin === 'festive') {
      c.fillStyle='#eee6cf';c.fillRect(-14,18,28,4);c.fillRect(-14,41,28,4);c.fillStyle='#315f3d';c.fillRect(-13,29,26,4);dot(-9,25,1.6,'#e7cf71');dot(8,35,1.6,'#e7cf71');
      c.strokeStyle='#4e843f';c.lineWidth=2;c.beginPath();c.arc(7,25,5,0,Math.PI*2);c.stroke();dot(5,23,1.1,'#b33d38');dot(9,27,1.1,'#b33d38');
    } else if (skin === 'camo') {
      c.globalAlpha=.95;[['#263426',-13,19,11,8],['#687248',-2,19,15,7],['#3a452d',-10,28,12,8],['#85734f',2,27,11,9],['#263426',-13,37,14,9],['#687248',3,37,10,9]].forEach(([co,x,y,w,h])=>{c.fillStyle=co;c.beginPath();c.roundRect(x,y,w,h,2);c.fill();});
      c.strokeStyle='#b2a47a';c.lineWidth=1.7;c.beginPath();c.moveTo(-8,20);c.lineTo(8,44);c.stroke();
    } else if (skin === 'blooming') {
      c.strokeStyle='#79b761';c.lineWidth=2.3;c.beginPath();c.moveTo(-11,45);c.quadraticCurveTo(-1,35,-8,22);c.moveTo(9,44);c.quadraticCurveTo(1,33,10,21);c.stroke();
      dot(-8,22,3,'#dbcf67');dot(10,21,3,'#9edc6b');dot(-2,34,2.4,'#d885a4');
      c.fillStyle='#68a354';c.beginPath();c.ellipse(-13,29,6,2.5,-.5,0,Math.PI*2);c.ellipse(13,35,6,2.5,.5,0,Math.PI*2);c.fill();
    } else if (skin === 'cosmic') {
      c.fillStyle='rgba(14,13,39,.7)';c.fillRect(-13,19,26,27);[['#d6f6ff',-9,23],['#d48cff',6,26],['#fff0a1',-2,34],['#77dce4',9,40],['#f38bd2',-8,42]].forEach(([co,x,y])=>dot(x,y,1.3,co));
      c.strokeStyle='#8270bd';c.lineWidth=1;c.beginPath();c.moveTo(-8,23);c.lineTo(-2,34);c.lineTo(6,26);c.stroke();
    } else if (skin === 'spooky') {
      c.fillStyle='#131018';c.fillRect(-13,19,26,27);c.strokeStyle='#db7933';c.lineWidth=2.5;c.strokeRect(-12,20,24,24);c.fillStyle='#6d4c98';c.beginPath();c.moveTo(-13,19);c.lineTo(-19,42);c.lineTo(-9,39);c.closePath();c.fill();
      dot(-5,31,2,'#f29b3f');dot(5,31,2,'#f29b3f');
    } else if (skin === 'cupid') {
      c.fillStyle='#f4b4cc';c.fillRect(-13,19,26,27);c.fillStyle='#fff0f4';c.beginPath();c.ellipse(-16,27,7,12,-.3,0,Math.PI*2);c.ellipse(16,27,7,12,.3,0,Math.PI*2);c.fill();c.fillStyle='#df5d91';c.font='8px serif';c.fillText('♥',-4,34);
    } else if (skin === 'stpatricks') {
      c.strokeStyle='#77c86d';c.lineWidth=2.5;c.strokeRect(-12,20,24,24);c.fillStyle='#d7b34b';c.fillRect(-13,34,26,3);[-6,5].forEach(x=>{dot(x,28,2.5,'#89d66f');dot(x+2,26,2.5,'#89d66f');dot(x+2,30,2.5,'#89d66f');});
    } else if (skin === 'soldier') {
      c.fillStyle='#343d30';c.fillRect(-13,19,26,27);c.fillStyle='#626b4b';c.fillRect(-10,22,8,18);c.fillRect(3,22,8,18);c.strokeStyle='#b09b6a';c.lineWidth=2;c.beginPath();c.moveTo(-9,20);c.lineTo(7,45);c.moveTo(9,20);c.lineTo(-7,45);c.stroke();
    } else if (skin === 'beach') {
      c.fillStyle='#43afb4';c.fillRect(-13,19,26,27);c.fillStyle='#f5c964';c.fillRect(-13,29,26,4);c.fillStyle='#f08b63';dot(-7,24,2.2,'#f08b63');dot(6,38,2.2,'#f08b63');c.strokeStyle='#fbefca';c.lineWidth=1.5;c.beginPath();c.moveTo(-10,22);c.lineTo(8,42);c.stroke();
    } else if (skin === 'ninja') {
      c.fillStyle='#10141b';c.fillRect(-14,18,28,29);c.fillStyle='#2a3040';c.fillRect(-14,31,28,4);c.fillStyle='#7f3838';c.fillRect(-15,35,30,3);c.strokeStyle='#4c566b';c.lineWidth=2;c.beginPath();c.moveTo(-12,22);c.lineTo(12,42);c.stroke();
    } else if (skin === 'pirate') {
      c.fillStyle='#e9dbb7';c.fillRect(-13,19,26,27);c.fillStyle='#853c35';c.fillRect(-14,31,28,5);c.fillStyle='#4b2d25';c.fillRect(-13,39,26,7);c.fillStyle='#d8b65b';c.fillRect(-2,31,4,5);c.strokeStyle='#a53d37';c.lineWidth=2;c.beginPath();c.moveTo(-8,20);c.lineTo(8,42);c.stroke();
    }
    c.restore();
  }

  function drawAvatarFigure(c, centerX, topY, scale, style, dir=1, crouch=false) {
    c.save(); c.translate(centerX, topY); c.scale(dir*scale,scale);
    const crouchOffset = crouch ? 18 : 0; c.translate(0,crouchOffset);
    const outfit = cosmeticOutfitPalette(style);
    c.strokeStyle=outfit.pants; c.lineWidth=8;
    c.beginPath(); c.moveTo(-7,37);c.lineTo(-9,56-crouchOffset);c.moveTo(7,37);c.lineTo(10,56-crouchOffset);c.stroke();
    c.fillStyle=outfit.shirt;
    if (style.gender === 'feminine') { c.beginPath(); c.moveTo(-12,18);c.lineTo(12,18);c.lineTo(15,43);c.lineTo(-15,43);c.closePath();c.fill(); }
    else c.fillRect(-14,18,28,29);
    drawCharacterSkinOverlay(c, style, crouchOffset);
    c.fillStyle=style.skin; c.fillRect(-10,4,20,18);
    drawHairVisibleWithHeadgear(c, style);
    drawFacialHair(c, style);
    c.fillStyle='#d8f379'; c.fillRect(5,10,3,3);
    drawCosmeticHeadgear(c, style);
    c.strokeStyle=style.skin; c.lineWidth=6; c.beginPath(); c.moveTo(8,25);c.lineTo(20,24);c.stroke();
    c.fillStyle='#202725'; c.fillRect(16,20,20,7); c.fillRect(21,27,7,8);
    c.restore();
  }

  addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (['w', 'a', 's', 'd', ' ', 'arrowup', 'arrowleft', 'arrowdown', 'arrowright'].includes(k)) {
      e.preventDefault();
    }
    if (shopScreen.classList.contains('active') && (k === 'q' || k === 'e')) {
      e.preventDefault();
      if (!e.repeat) updateShopCategoryView(k === 'q' ? -1 : 1);
      return;
    }

    // Plant traps require repeated fresh Space presses and suppress shooting while trapped.
    if (k === ' ' && state === 'playing' && !e.repeat && player?.trapped) {
      strugglePlantTrap();
    } else if (k === ' ' && state === 'playing' && !e.repeat) {
      shoot();
    }
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
    player.score = Math.floor((player.distanceScore || 0) + (player.killScore || 0) + (player.bonusScore || 0));
  }

  function addBonusScore(points) {
    if (!player || !points) return;
    player.bonusScore = (player.bonusScore || 0) + points;
    recalcScore();
  }

  function showActionNotice(text, points=0) {
    if (!actionNotice) return;
    actionNotice.innerHTML = `<strong>${text}</strong>${points ? `<span>+${points} SCORE</span>` : ''}`;
    actionNotice.classList.remove('hidden','pop');
    void actionNotice.offsetWidth;
    actionNotice.classList.add('pop');
    actionNoticeTimer = 1.65;
  }

  function hasSpecialWeapon() {
    if (!player || !player.weaponInventory) return false;
    return WEAPON_PRIORITY.some(type => type !== 'pistol' && player.weaponInventory[type]);
  }

  function highestPriorityWeapon() {
    if (!player || !player.weaponInventory) return 'pistol';
    return WEAPON_PRIORITY.find(type => type === 'pistol' || player.weaponInventory[type]) || 'pistol';
  }

  function refreshActiveWeapon() {
    if (!player) return;
    player.weapon = highestPriorityWeapon();
    player.ammo = Infinity;
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

  function gainMultiplier(reason, showMessage=true) {
    if (!player) return;
    const cap = player.maxMultiplier || rankMaxMultiplier();
    const before = player.multiplier;
    player.multiplier = Math.min(cap, player.multiplier + 1);
    if (showMessage) showMultiplierEvent(player.multiplier > before ? `${reason} · X${player.multiplier}` : `${reason} · MAX X${cap}`);
    else if (multiplierHud) { multiplierHud.classList.remove('hot'); void multiplierHud.offsetWidth; multiplierHud.classList.add('hot'); }
    playSfx('pickup');
  }

  function breakMultiplier() {
    if (!player || player.multiplier <= 0) return;
    player.multiplier = 0;
    showMultiplierEvent('MULTIPLIER BROKEN · X0', true);
    playSfx('multiplierBreak');
  }

  function grantMomentumBoost() {
    if (!player) return;
    player.boostTime = Math.max(player.boostTime || 0, 3);
    playSfx('boost');
  }

  function activateGoldRush() {
    if (!player) return;
    player.goldRushTime = Math.max(player.goldRushTime || 0, 3);
    if (boostBanner) boostBanner.classList.add('hidden');
    playSfx('goldrush');
  }

  function getBloomWallSpeed() {
    // Stage 12: the wall begins slow, matches the runner at 500m, then becomes faster at 1000m.
    const meters = player ? getDistanceMeters() : 0;
    if (meters < 500) return RUN_SPEED * 0.2;
    if (meters < 1000) return RUN_SPEED;
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
    if (challengePanel) challengePanel.classList.add('hidden');
    keys.clear();
    mouseFireHeld = false;
    currentRunSaved = false;
    currentRunId = null;
    runChallengeCompleted = new Set();
    syncRankUnlocks();

    player = {
      x: 82, y: 100, w: 34, h: 58,
      vx: 0, vy: 0, grounded: true, crouching: false, coyote: .08,
      bloom: 8, kills: 0, score: 0, killScore: 0, distanceScore: 0, bonusScore: 0, furthestMeter: 0, runCoins: 0,
      multiplier: 0, maxMultiplier: rankMaxMultiplier(), boostTime: 0, goldRushTime: 0,
      shotCooldown: 0, muzzle: 0, invuln: 0,
      weapon: 'pistol', ammo: Infinity, weaponInventory: { pistol:true, ar:false, shotgun:false, rpg:false, sniper:false, smg:false }, plantZombie: false,
      lives: 3,
      vehicle: null, vehicleTime: 0, vehicleMaxTime: 0, vehicleUpgraded:false,
      coinGroupsCompleted:0, bloomsFixed:0,
      trapped:false, trapProgress:0, trapObstacleId:null, trapLaunchTime:0, trapLaunchTargetX:0, trapLaunchDir:1, trapEntryDir:1, obstacleSlowTime:0
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
    obstacles = [];
    nextObstacleId = 1;
    generatedUntil = 0;
    terrainSectionIndex = 0;
    buildLevel(9500);
    const startGroundY = getGroundYAt(82, 0) ?? (innerHeight - 100);
    player.y = startGroundY - player.h;
    spawnHouse = { x: 28, y: startGroundY - 112, w: 150, h: 112, biome: 0 };
    spawnWalkActive = true;

    gameTime = 0;
    spawnClock = 0.75;
    characterStyle = getActiveCharacterStyle();
    applyStartingItem();
    startMusic();
    playSfx('ui');
    cameraX = 0;
    // Stage 12 keeps the wall front 100 meters (1000 world px) behind the player at the start.
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
    actionNoticeTimer = 0;
    if (actionNotice) actionNotice.classList.add('hidden');
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


  function addLandObstacles(start, width, groundY) {
    if (terrainSectionIndex < 2 || width < 660) return;
    const desired = Math.random() < .68 ? 1 + (width > 790 && Math.random() < .32 ? 1 : 0) : 0;
    for (let n=0;n<desired;n++) {
      let x = null;
      for (let tries=0;tries<18;tries++) {
        const candidate = start + 210 + Math.random() * Math.max(1, width - 420);
        const nearHouse = houses.some(h => Math.abs((h.x+h.w/2)-candidate) < 145);
        const nearCoin = coins.some(c => Math.abs(c.x-candidate) < 75);
        const nearObstacle = obstacles.some(o => Math.abs((o.x+o.w/2)-candidate) < 125);
        if (!nearHouse && !nearCoin && !nearObstacle) { x = candidate; break; }
      }
      if (x === null) continue;
      const roll = Math.random();
      const type = roll < .42 ? 'mud' : roll < .76 ? 'thorns' : 'plantTrap';
      const dims = type === 'mud' ? [96,12] : type === 'thorns' ? [58,25] : [70,28];
      obstacles.push({id:nextObstacleId++, type, x:x-dims[0]/2, y:groundY, w:dims[0], h:dims[1], active:true, hitCooldown:0});
    }
  }

  function playerOnObstacle(ob, padding=0) {
    if (!ob || !ob.active || !player) return false;
    const footY = player.y + player.h;
    return player.x + player.w > ob.x + padding && player.x < ob.x + ob.w - padding && Math.abs(footY - ob.y) < 13;
  }

  function getMudSlowMultiplier() {
    if (!player) return 1;
    const onMud = obstacles.some(ob => ob.type === 'mud' && playerOnObstacle(ob,5));
    let mult = onMud ? (player.vehicle ? .58 : .46) : 1;
    if ((player.obstacleSlowTime || 0) > 0) mult = Math.min(mult, player.vehicle ? .52 : .7);
    return mult;
  }

  function strugglePlantTrap() {
    if (!player || !player.trapped) return false;
    player.trapProgress = Math.min(8, (player.trapProgress || 0) + 1);
    shake = Math.max(shake,2.5);
    for (let i=0;i<4;i++) particles.push({x:player.x+player.w/2,y:player.y+player.h-8,vx:(Math.random()-.5)*90,vy:-30-Math.random()*70,life:.18+Math.random()*.12,size:2+Math.random()*2,color:'#6fa75c'});
    if (player.trapProgress >= 8) {
      const trap = obstacles.find(o => o.id === player.trapObstacleId);
      const wasVehicle = !!player.vehicle;
      const launchDir = player.trapEntryDir || facing || 1;
      if (trap) player.x = launchDir > 0 ? trap.x + trap.w + 16 : trap.x - player.w - 16;
      player.trapped = false; player.trapProgress = 0; player.trapObstacleId = null;
      player.trapLaunchTime = 0;
      player.trapLaunchDir = launchDir;
      // Five meters in game distance = 50 world pixels. Control returns exactly after clearing that distance.
      player.trapLaunchTargetX = player.x + launchDir * 50;
      player.vx = launchDir * RUN_SPEED * (wasVehicle ? 2.7 : 1.85);
      facing = launchDir;
      player.invuln = Math.max(player.invuln,.18);
    }
    return true;
  }

  function handleLandObstacles() {
    if (!player) return;
    for (const ob of obstacles) {
      if (!ob.active) continue;
      ob.hitCooldown = Math.max(0,(ob.hitCooldown||0));
      if (!playerOnObstacle(ob,2)) continue;
      if (ob.type === 'thorns' && ob.hitCooldown <= 0 && player.invuln <= 0) {
        ob.hitCooldown = 1.25;
        breakMultiplier();
        if (player.vehicle) {
          player.obstacleSlowTime = Math.max(player.obstacleSlowTime || 0, 1.2);
          player.vx *= .38;
          shake = Math.max(shake,4);
          playSfx('hit');
        } else {
          const dir = Math.sign(player.vx) || 1;
          if (!loseLife(ob,dir)) return;
        }
      } else if (ob.type === 'plantTrap' && !player.trapped && !player.trapLaunchTargetX) {
        breakMultiplier();
        player.trapEntryDir = Math.sign(player.vx) || facing || 1;
        player.trapped = true; player.trapProgress = 0; player.trapObstacleId = ob.id; player.vx = 0;
        player.x = ob.x + ob.w/2 - player.w/2;
        showMultiplierEvent('TRAPPED · SPAM SPACE');
      }
      // Mud intentionally never breaks the multiplier. Its slowdown is calculated continuously.
    }
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

    // Long solid stretches can contain field hazards, always kept well away from edges.
    addLandObstacles(start, groundLength, groundY);

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
      const safeX = findSafeGroundX(targetX, 115);
      const groundY = getGroundYAt(safeX, 115);
      // Stage 15: cleanser stays reachable, but sits near the upper end of a normal jump.
      if (groundY !== null) pickups.push(makeBloomPickup(safeX - 12, groundY - 145 - Math.random() * 10, true));
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
    if (!def || type === 'pistol') return false;
    const alreadyArmed = hasSpecialWeapon();
    if (!player.weaponInventory) player.weaponInventory = { pistol:true, ar:false, shotgun:false, rpg:false, sniper:false, smg:false };
    // Weapons are unique inventory slots: duplicates still count as a swap event,
    // but never create a second copy of the same gun.
    player.weaponInventory[type] = true;
    refreshActiveWeapon();
    playSfx('pickup');
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
    return alreadyArmed;
  }

  function revertToPistol() {
    if (!player) return;
    for (const type of WEAPON_KEYS) player.weaponInventory[type] = false;
    refreshActiveWeapon();
    player.shotCooldown = Math.max(player.shotCooldown, .24);
  }


  function equipVehicle(type) {
    const def = VEHICLES[type];
    if (!def) return;
    playSfx('vehicle', type);
    vehicleSfxClock = 1.05;
    player.vehicle = type;
    player.vehicleUpgraded = false;
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
    player.vehicleUpgraded = false;
    player.vehicleTime = 0;
    player.vehicleMaxTime = 0;
  }

  function explodeVehicle() {
    if (!player.vehicle) return false;
    const type = player.vehicle;
    const def = VEHICLES[type];
    const cx = player.x + player.w/2;
    const cy = player.y + player.h/2;
    player.vehicle = null;
    player.vehicleUpgraded = false;
    player.vehicleTime = 0;
    player.vehicleMaxTime = 0;
    player.invuln = Math.max(player.invuln, .85);
    player.vy = Math.min(player.vy, -250);
    player.vx *= .45;
    shake = Math.max(shake, 17);
    explosions.push({x:cx,y:cy,life:.52,maxLife:.52,radius:105});
    playSfx('explode');
    for (let i=0;i<48;i++) {
      const a=Math.random()*Math.PI*2, speed=90+Math.random()*360;
      particles.push({x:cx,y:cy,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed-45,
        life:.28+Math.random()*.62,size:3+Math.random()*7,color:i%3===0?'#f6c34d':(i%3===1?'#d65e39':def.color)});
    }
    return true;
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

  function takeNonlethalProjectileHit(shot, dir) {
    // Stage 12: ranged infected shots can hurt/interrupt a run, but can never be the killing blow.
    // They break the multiplier, can consume a weapon guard, and otherwise remove at most one
    // heart while always leaving the runner with at least one life.
    if (player.boostTime > 0) return true;
    breakMultiplier();
    if (player.weapon !== 'pistol' && WEAPONS[player.weapon].guard) {
      consumeWeaponGuard(shot, dir);
      return true;
    }
    playSfx('hit');
    if (player.lives > 1) player.lives -= 1;
    guardFlash = 1;
    shake = Math.max(shake, 8);
    player.invuln = .85;
    player.vx = -dir * 185;
    player.vy = -155;
    for (let i=0;i<14;i++) particles.push({
      x:player.x+player.w/2,y:player.y+player.h/2,
      vx:(Math.random()-.5)*210,vy:-20+(Math.random()-.5)*170,
      life:.22+Math.random()*.28,size:2+Math.random()*3,color:'#d8c86a'
    });
    return true;
  }

  function shoot() {
    if (state !== 'playing' || spawnWalkActive || player.shotCooldown > 0) return;
    const def = WEAPONS[player.weapon];
    if (!def) return;
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
    // Stage 15: Bloom increases once per trigger/shot event, never per pellet.
    player.bloom = Math.min(100, player.bloom + BLOOM_PER_TRIGGER * bloomGainModifier());
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
    const oldWeapon = highestPriorityWeapon();
    const def = WEAPONS[oldWeapon];
    brokenWeaponLabel = def.label;
    weaponBreakTimer = .42;
    guardFlash = 1;
    shake = 12;
    player.invuln = 1.0;
    player.vx = -dir * 310;
    player.vy = -280;
    if (oldWeapon !== 'pistol' && player.weaponInventory) player.weaponInventory[oldWeapon] = false;
    refreshActiveWeapon();

    for (let i = 0; i < 26; i++) {
      particles.push({
        x: player.x + player.w / 2, y: player.y + 25,
        vx: (Math.random() - .5) * 320, vy: -60 + (Math.random() - .5) * 240,
        life: .28 + Math.random() * .45, size: 2 + Math.random() * 5,
        color: def.color
      });
    }

    // Push the zombie away so the invulnerability window isn't immediately retriggered.
    if (enemy && typeof enemy.x === 'number') enemy.x += dir * 45;
  }

  function update(dt) {
    if (state !== 'playing') return;
    gameTime += dt;

    if (player.x + innerWidth * 3 > generatedUntil) buildLevel(player.x + innerWidth * 5);

    // Stage 13: wall audio stays silent while it is well behind the camera.
    // It begins only shortly before the wall front reaches the left edge of the viewport.
    bloomWallX += getBloomWallSpeed() * dt;
    wallSfxClock = Math.max(0, wallSfxClock - dt);
    const wallFrontForSfx = bloomWallX + BLOOM_WALL_WIDTH;
    const pixelsBeforeScreen = cameraX - wallFrontForSfx;
    const wallAboutToEnter = pixelsBeforeScreen <= 220;
    if (wallAboutToEnter && wallSfxClock <= 0) {
      const wallIntensity = Math.max(0, Math.min(1, 1 - Math.max(0, pixelsBeforeScreen) / 220));
      playSfx('wall', .28 + wallIntensity * .72);
      wallSfxClock = .34 + (1 - wallIntensity) * .36;
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
    player.obstacleSlowTime = Math.max(0, (player.obstacleSlowTime || 0) - dt);
    player.goldRushTime = Math.max(0, (player.goldRushTime || 0) - dt);
    if (player.goldRushTime <= 0) stopGoldRushAudio();
    multiplierFlashTimer = Math.max(0, multiplierFlashTimer - dt);
    multiplierBreakTimer = Math.max(0, multiplierBreakTimer - dt);
    multiplierMessageTimer = Math.max(0, multiplierMessageTimer - dt);
    actionNoticeTimer = Math.max(0, actionNoticeTimer - dt);
    if (actionNotice && actionNoticeTimer <= 0) actionNotice.classList.add('hidden');
    if (boostBanner) boostBanner.classList.add('hidden');
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

    const bloomRate = (1.0 + Math.min(.9, gameTime * .009)) * bloomGainModifier();
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
    const terrainSlow = getMudSlowMultiplier();
    const targetSpeed = player.trapped ? 0 : (player.crouching ? movementBase * .38 : movementBase) * terrainSlow;

    if (player.trapped) {
      player.vx = 0;
    } else if ((player.trapLaunchTargetX || 0) && ((player.trapLaunchDir || 1) > 0 ? player.x < player.trapLaunchTargetX : player.x > player.trapLaunchTargetX)) {
      // Escape launch is briefly automatic in the direction the player entered the trap.
      facing = player.trapLaunchDir || 1;
      player.vx = facing * movementBase * 1.55; // Stage 16 burst speed, with Stage 17 distance-based control return.
    } else if ((player.trapLaunchTargetX || 0) !== 0) {
      player.trapLaunchTargetX = 0;
      player.trapLaunchDir = facing || 1;
      // Normal control resumes on this frame once the player is 5m beyond the trap.
    } else if (spawnWalkActive) {
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

    if (!player.trapped && !spawnWalkActive && jump && (player.grounded || player.coyote > 0) && !player.crouching) {
      player.vy = -JUMP_SPEED;
      player.grounded = false;
      player.coyote = 0;
    }
    if (down && !player.grounded) player.vy += GRAVITY * .75 * dt;

    const def = WEAPONS[player.weapon];
    if (!player.trapped && def.automatic && (keys.has(' ') || mouseFireHeld)) shoot();

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

    for (const ob of obstacles) ob.hitCooldown = Math.max(0,(ob.hitCooldown||0)-dt);
    handleLandObstacles();
    if (state !== 'playing') return;

    const floorLine = innerHeight - 100;
    if (player.y + player.h > floorLine + 62) {
      pitDeathPhase = 1;
      player.vx = 0;
      mouseFireHeld = false;
      return;
    }

    if (player.x <= bloomWallX + BLOOM_WALL_WIDTH - 16) {
      playSfx('wallImpact');
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
          // Vehicles ram through infected, but a Bloater detonation destroys the active vehicle.
          enemy.x += dir * 80;
          killEnemy(enemy);
          shake = Math.max(shake, enemy.type === 'bloater' ? 11 : 5);
          continue;
        }
        if (enemy.attack <= 0 && player.invuln <= 0) {
          enemy.attack = .9;
          if (!absorbPlayerHit(enemy, dir)) return;
        }
      }
    }
    enemies = enemies.filter(e => e.health > 0);

    // Stage 12: hostile ranged shots are disruptive but explicitly nonlethal.
    for (const shot of enemyProjectiles) {
      shot.x += shot.vx * dt;
      shot.y += shot.vy * dt;
      shot.life -= dt;
      const hitBox = { x:shot.x-shot.r, y:shot.y-shot.r, w:shot.r*2, h:shot.r*2 };
      if (shot.life > 0 && player.invuln <= 0 && rectsOverlap(player, hitBox)) {
        shot.life = 0;
        if (player.boostTime > 0) continue;
        const dir = Math.sign(player.x - shot.x) || 1;
        takeNonlethalProjectileHit({x:shot.x,y:shot.y}, dir);
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
        player.bloomsFixed = (player.bloomsFixed || 0) + 1;
        player.bloom = Math.max(0, player.bloom - 34);
        gainMultiplier('BLOOM CLEANSED', false);
        addBonusScore(25);
        showActionNotice('BLOOM FIXED!', 25);
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
        if (house.rewardKind === 'vehicle') {
          // Vehicles remain single-slot: picking up another vehicle replaces the current one.
          if (player.vehicle) {
            gainMultiplier('VEHICLE SWAP');
            grantMomentumBoost();
          }
          equipVehicle(house.type);
        } else {
          const swapping = hasSpecialWeapon();
          equipWeapon(house.type);
          if (swapping) {
            gainMultiplier('WEAPON SWAP', false);
            grantMomentumBoost();
            addBonusScore(50);
            showActionNotice('WEAPON SWAP!', 50);
          }
        }
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
            player.coinGroupsCompleted = (player.coinGroupsCompleted || 0) + 1;
            gainMultiplier('5-COIN SET', false);
            addBonusScore(100);
            showActionNotice('GOLD RUSH!', 100);
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
    const playerInBlast = Math.hypot(px-cx,py-cy)<radius && state==='playing';
    let vehicleAbsorbedBlast = false;
    if (playerInBlast && player.vehicle) {
      // Any vehicle is destroyed by a Bloater blast, whether the vehicle hit the Bloater
      // or the zombie detonated nearby. The destroyed vehicle absorbs this explosion hit.
      vehicleAbsorbedBlast = explodeVehicle();
    }
    if (playerInBlast && !vehicleAbsorbedBlast && !player.vehicle && player.boostTime <= 0) {
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

  function showFinalResult(reason = 'zombies') {
    if (challengePanel) challengePanel.classList.add('hidden');
    state = 'ended';
    resultPanel.classList.remove('hidden');
    resultEyebrow.textContent = reason === 'wall' ? 'BLOOM CONSUMED YOU' : 'RUN OVER';
    resultTitle.textContent = reason === 'wall'
      ? 'YOU BECAME ONE OF THEM'
      : reason === 'pit'
        ? 'YOU FELL'
        : 'NO LIVES LEFT';
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

  function finishGame(reason = 'zombies') {
    stopMusic();
    stopGoldRushAudio();
    playSfx('death', reason);
    mouseFireHeld = false;
    updateDistanceScore();
    recalcScore();
    updateRunChallengeStatus();
    pendingGameOverReason = reason;
    const outcome = commitRunChallenges();
    if (outcome && outcome.completedNow.length) {
      state = 'challenge-review';
      resultPanel.classList.add('hidden');
      renderChallengeReview(outcome);
      challengePanel.classList.remove('hidden');
    } else {
      showFinalResult(reason);
    }
  }


  function gearSkinPalette(skin, kind='weapon') {
    const palettes = {
      base:['#5f675f', kind==='vehicle'?'#8ec9da':'#e1d89c'],
      gold:['#c49327','#f6dd79'], festive:['#8e302e','#65a962'], camo:['#4f5d3d','#9a9764'],
      zebra:['#ecece7','#171a18'], realistic:['#555d5c','#9aa29f'], glowing:['#56c9d1','#b5ffff'],
      toxic:['#658f38','#c4f35f'], blooming:['#6a4d31','#7fa85e'], water:['#3d7fa6','#8ed8ee'],
      grass:['#4f7d43','#9bca72'], cosmic:['#282451','#b39aff'], neon:['#151922','#58f5ed'],
      dots:['#d4d0c1','#d54a61']
    };
    const p = palettes[skin] || palettes.base;
    return {fill:p[0], stroke:p[1], accent:p[1]};
  }

  function activeGearSkin(kind='weapon') {
    const stateObj=getShopState();
    return kind==='vehicle' ? (stateObj.equipped.vehicleSkin||'base') : (stateObj.equipped.weaponSkin||'base');
  }

  function prepareGearSkinContext(c, skin) {
    c.shadowBlur=0; c.shadowColor='transparent';
    if (skin==='glowing') { c.shadowColor='#8dffff'; c.shadowBlur=10; }
    else if (skin==='neon') { c.shadowColor='#36f7f1'; c.shadowBlur=8; }
    else if (skin==='toxic') { c.shadowColor='#a8ed55'; c.shadowBlur=5; }
    else if (skin==='gold') { c.shadowColor='rgba(255,226,126,.34)'; c.shadowBlur=3; }
  }

  function svgGearPattern(skin, id, fill, stroke) {
    if (skin==='gold') return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8c6117"/><stop offset=".26" stop-color="#e2b844"/><stop offset=".48" stop-color="#fff0a0"/><stop offset=".58" stop-color="#c99427"/><stop offset="1" stop-color="#7e5512"/></linearGradient>`;
    if (skin==='camo') return `<pattern id="${id}" width="20" height="16" patternUnits="userSpaceOnUse"><rect width="20" height="16" fill="#596344"/><path d="M-2 4 C3 -1 8 0 11 4 C14 7 18 5 22 3 V10 C17 14 13 10 9 12 C4 15 1 12 -2 10Z" fill="#2f3b2d"/><path d="M4 5 C7 2 12 2 15 6 C13 10 8 10 4 8Z" fill="#8a7650"/><path d="M-1 14 C4 10 8 11 11 15" fill="none" stroke="#1f2c22" stroke-width="3"/></pattern>`;
    if (skin==='zebra') return `<pattern id="${id}" width="16" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(-16)"><rect width="16" height="20" fill="#f1f0ea"/><path d="M1 -5 C7 2 3 9 0 25 H5 C9 11 13 3 8 -5ZM12 -5 C17 4 12 11 10 25 H15 C19 12 20 2 18 -5Z" fill="#111514"/></pattern>`;
    if (skin==='dots') return `<pattern id="${id}" width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="#e6dfcf"/><circle cx="4" cy="4" r="2.5" fill="#d74b62"/><circle cx="11" cy="10" r="2.5" fill="#315f82"/></pattern>`;
    if (skin==='cosmic') return `<pattern id="${id}" width="20" height="16" patternUnits="userSpaceOnUse"><rect width="20" height="16" fill="#282451"/><circle cx="4" cy="5" r="1" fill="#d8f5ff"/><circle cx="14" cy="4" r="1.2" fill="#d795ff"/><circle cx="10" cy="12" r=".9" fill="#ffe58c"/></pattern>`;
    if (skin==='water') return `<pattern id="${id}" width="22" height="12" patternUnits="userSpaceOnUse"><rect width="22" height="12" fill="#3d7fa6"/><path d="M0 6 Q5 1 11 6 T22 6" fill="none" stroke="#9fe1f2" stroke-width="2"/></pattern>`;
    if (skin==='grass') return `<pattern id="${id}" width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="#4f7d43"/><path d="M2 14 L5 5 M7 14 L8 3 M11 14 L13 7" stroke="#9bca72" stroke-width="2"/></pattern>`;
    if (skin==='festive') return `<pattern id="${id}" width="18" height="18" patternUnits="userSpaceOnUse"><rect width="18" height="18" fill="#8e302e"/><path d="M0 9 H18 M9 0 V18" stroke="#65a962" stroke-width="4"/><path d="M0 0 L18 18 M18 0 L0 18" stroke="#e6d8a2" stroke-width="1.2" opacity=".7"/></pattern>`;
    if (skin==='blooming') return `<pattern id="${id}" width="22" height="18" patternUnits="userSpaceOnUse"><rect width="22" height="18" fill="#70513a"/><path d="M0 2 L8 0 L12 6 L6 10 L0 8ZM13 10 L22 7 V18 H11Z" fill="#8b5637"/><path d="M2 15 C7 9 13 16 20 9" fill="none" stroke="#557d45" stroke-width="3"/><circle cx="17" cy="5" r="1.5" fill="#9fcb72"/></pattern>`;
    return '';
  }

  function svgGearExtras(skin, kind, type) {
    if (skin==='festive') return `<g transform="translate(${kind==='vehicle'?34:35} ${kind==='vehicle'?20:18})"><circle r="7" fill="none" stroke="#3f8d4b" stroke-width="3"/><circle cx="-4" cy="-3" r="1.4" fill="#d94d45"/><circle cx="4" cy="2" r="1.4" fill="#d94d45"/><path d="M-2 6 L0 10 L2 6" fill="#d94d45"/></g>`;
    if (skin==='gold') return `<path d="M11 11 L19 8" stroke="#fff0a0" stroke-width="1.5" opacity=".9"/><path d="M23 7 L31 5" stroke="#fff8c9" stroke-width="1" opacity=".7"/>`;
    if (skin==='blooming') {
      const anchor = kind==='vehicle' ? (type==='motorcycle' ? 'M22 20 Q18 9 24 3 M39 20 Q44 7 52 5' : 'M15 19 Q18 6 26 3 M42 18 Q47 5 55 4') : 'M20 16 Q21 5 28 2 M43 17 Q47 7 55 5';
      return `<g stroke="#5f984f" stroke-width="2.2" fill="none"><path d="${anchor}"/><path d="M12 23 Q25 18 38 23 Q50 28 60 21" stroke="#4d7441" stroke-width="2.8"/></g><g fill="#91c66d"><ellipse cx="26" cy="5" rx="3.2" ry="1.7" transform="rotate(-28 26 5)"/><ellipse cx="51" cy="7" rx="3.4" ry="1.8" transform="rotate(24 51 7)"/></g><g fill="#d8ca6d"><circle cx="55" cy="4" r="2.5"/><circle cx="35" cy="20" r="2"/></g><g fill="#6f9257" opacity=".75"><circle cx="18" cy="22" r="2.5"/><circle cx="24" cy="23" r="2"/><circle cx="46" cy="22" r="2.5"/></g>`;
    }
    if (skin==='toxic') return `<g fill="#b8f15e"><circle cx="18" cy="12" r="2"/><circle cx="42" cy="22" r="2.4"/><circle cx="52" cy="12" r="1.6"/></g>`;
    if (skin==='neon') {
      if (kind==='vehicle' && type==='car') return `<g fill="none" stroke-linecap="round"><path d="M8 25 L14 15 H44 L54 25 V32 H8 Z" stroke="#44fff3" stroke-width="1.8"/><path d="M20 15 L26 8 H40 L45 15" stroke="#ff4ee8" stroke-width="1.5"/><path d="M12 28 H50 M18 18 H46" stroke="#8e6cff" stroke-width="1" opacity=".9"/></g>`;
      if (kind==='vehicle' && type==='motorcycle') return `<g fill="none" stroke-linecap="round"><path d="M14 30 L25 17 L42 18 L50 30 M25 17 L34 30 L17 30 M39 18 L45 11" stroke="#44fff3" stroke-width="1.7"/><circle cx="14" cy="30" r="8" stroke="#ff4ee8" stroke-width="1.4"/><circle cx="50" cy="30" r="8" stroke="#ff4ee8" stroke-width="1.4"/><path d="M24 20 H42" stroke="#ffe85b" stroke-width="1"/></g>`;
      if (kind==='vehicle') return `<g fill="none" stroke-linecap="round"><path d="M5 13 H34 V31 H5 Z M34 20 H51 L59 27 V31 H34" stroke="#44fff3" stroke-width="1.7"/><path d="M8 17 H30 M38 23 H51 M9 28 H55" stroke="#ff4ee8" stroke-width="1.2"/><circle cx="17" cy="32" r="6" stroke="#8e6cff" stroke-width="1.2"/><circle cx="48" cy="32" r="6" stroke="#8e6cff" stroke-width="1.2"/></g>`;
      return `<g fill="none" stroke-linecap="round"><path d="M7 14 H55" stroke="#44fff3" stroke-width="1.5"/><path d="M13 21 H47" stroke="#ff4ee8" stroke-width="1.2"/><path d="M22 10 L31 6 M39 11 L48 7" stroke="#8e6cff" stroke-width="1"/></g>`;
    }
    return '';
  }

  function equipmentIconSvg(type, kind='weapon', skinOverride=null) {
    const skin = skinOverride || activeGearSkin(kind);
    const iconPalette = gearSkinPalette(skin, kind);
    const stroke = iconPalette.stroke;
    const baseFill = iconPalette.fill;
    const uid = `skinpat${++svgSkinPatternUid}`;
    const defs = svgGearPattern(skin, uid, baseFill, stroke);
    const patterned = !!defs;
    const fill = patterned ? `url(#${uid})` : baseFill;
    const extras = svgGearExtras(skin, kind, type);
    const pre = defs ? `<defs>${defs}</defs>` : '';
    if (kind === 'vehicle') {
      if (type === 'motorcycle') return `<svg viewBox="0 0 64 40" aria-hidden="true">${pre}<circle cx="14" cy="30" r="8" fill="#101614" stroke="#6f7470" stroke-width="2.5"/><circle cx="50" cy="30" r="8" fill="#101614" stroke="#6f7470" stroke-width="2.5"/><path d="M14 30 L25 18 L40 19 L50 30 M25 18 L33 30 L17 30 M40 19 L46 11" fill="none" stroke="#4b504d" stroke-width="3"/><path d="M22 18 Q28 13 37 15 L43 19 L36 25 H20 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/><rect x="28" y="24" width="10" height="6" rx="2" fill="#303532"/><path d="M39 15 H47" stroke="#242a27" stroke-width="4"/>${extras}</svg>`;
      if (type === 'car') return `<svg viewBox="0 0 64 40" aria-hidden="true">${pre}<path d="M8 25 L14 15 H44 L54 25 V32 H8 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M20 15 L26 8 H40 L45 15" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M24 10 H39 L42 15 H19Z" fill="#17201e" opacity=".82"/><path d="M11 25 H52" stroke="rgba(255,255,255,.18)" stroke-width="1"/><circle cx="19" cy="32" r="6" fill="#101614" stroke="#737875" stroke-width="2"/><circle cx="46" cy="32" r="6" fill="#101614" stroke="#737875" stroke-width="2"/>${extras}</svg>`;
      return `<svg viewBox="0 0 64 40" aria-hidden="true">${pre}<path d="M4 16 H34 V31 H4 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M34 20 H49 L59 27 V31 H34 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M38 21 H48 L54 26 H38Z" fill="#17201e" opacity=".8"/><path d="M7 19 H31 M7 27 H31" stroke="rgba(255,255,255,.15)" stroke-width="1"/><circle cx="16" cy="32" r="6" fill="#101614" stroke="#737875" stroke-width="2"/><circle cx="49" cy="32" r="6" fill="#101614" stroke="#737875" stroke-width="2"/>${extras}</svg>`;
    }
    let body='';
    if (type === 'ar') body=`<path d="M5 15 H50 L62 11 V18 H52 L45 22 H28 L24 31 H18 L20 22 H5 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M33 22 L38 31" stroke="${stroke}" stroke-width="4"/>`;
    else if (type === 'shotgun') body=`<path d="M5 13 H57 V19 H5 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M24 19 L19 29 H12 L17 19 M36 19 L43 26" stroke="${stroke}" stroke-width="4" fill="none"/>`;
    else if (type === 'rpg') body=`<path d="M8 10 H57 L68 18 L57 26 H8 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M28 26 L25 33 M42 26 L46 33" stroke="${stroke}" stroke-width="4"/><path d="M8 10 L2 6 V30 L8 26" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
    else if (type === 'sniper') body=`<path d="M5 16 H69 V20 H5 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><rect x="25" y="8" width="25" height="7" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M33 20 L28 31 M46 20 L52 31" stroke="${stroke}" stroke-width="4"/>`;
    else if (type === 'smg') body=`<path d="M6 13 H49 V22 H6 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/><path d="M22 22 V32 H15 V22 M38 22 L42 31" fill="${fill}" stroke="${stroke}" stroke-width="4"/><path d="M49 15 H62" stroke="${stroke}" stroke-width="4"/>`;
    else body=`<path d="M6 12 H42 V20 H26 L24 31 H16 L18 20 H6 Z" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
    return `<svg viewBox="0 0 78 40" aria-hidden="true">${pre}${body}${extras}</svg>`;
  }

  function updatePauseStats() {
    if (!player) return;
    if (pauseCoins) pauseCoins.textContent = String(getCoinBalance());
    if (pauseDistance) pauseDistance.textContent = `${getDistanceMeters()} meters`;
    if (pauseKills) pauseKills.textContent = String(player.kills);
    renderPauseChallenges();
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
      const showBroken = weaponBreakTimer > 0;
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

    updateRunChallengeStatus();
    if (multiplierLabel) multiplierLabel.textContent = `X${player.multiplier}`;
    if (multiplierFill) multiplierFill.style.width = `${Math.max(0,Math.min(100,(player.multiplier / Math.max(1, player.maxMultiplier || rankMaxMultiplier())) * 100))}%`;
    if (multiplierHud && multiplierMessageTimer <= 0) multiplierHud.classList.remove('hot','broken');

    const wallMeters = getWallDistanceMeters();
    if (wallWarningIcon) {
      const nearby = wallMeters <= 300;
      wallWarningIcon.classList.toggle('hidden', !nearby);
      wallWarningIcon.classList.toggle('danger', nearby && wallMeters <= 100);
      if (wallWarningDistance) wallWarningDistance.textContent = `${wallMeters}m`;
    }

    if (boostBanner) boostBanner.classList.add('hidden');
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
    drawObstacles();
    drawHouses();
    drawEnemies();
    drawEnemyProjectiles();
    drawPlayer();
    drawVehicleTimeMeter();
    drawTrapEscapeMeter();
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

    const style = characterStyle || getActiveCharacterStyle();
    const outfit = cosmeticOutfitPalette(style);
    ctx.strokeStyle = outfit.pants;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-7, 37); ctx.lineTo(-9, 56 - crouchOffset);
    ctx.moveTo(7, 37); ctx.lineTo(10, 56 - crouchOffset);
    ctx.stroke();

    ctx.fillStyle = outfit.shirt;
    if (style.gender === 'feminine') {
      ctx.beginPath(); ctx.moveTo(-12,18); ctx.lineTo(12,18); ctx.lineTo(15,43); ctx.lineTo(-15,43); ctx.closePath(); ctx.fill();
    } else {
      ctx.fillRect(-14, 18, 28, 29);
    }
    drawCharacterSkinOverlay(ctx, style, crouchOffset);
    ctx.fillStyle = style.skin;
    ctx.fillRect(-10, 4, 20, 18);
    drawHairVisibleWithHeadgear(ctx, style);
    drawFacialHair(ctx, style);
    ctx.fillStyle = '#d8f379';
    ctx.fillRect(5, 10, 3, 3);
    drawCosmeticHeadgear(ctx, style);

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

  function drawCanvasGearSkinDetails(c, skin, kind, box, type='') {
    const {x,y,w,h}=box;
    const mask=()=>{
      c.beginPath();
      if(kind==='vehicle'){
        if(type==='motorcycle'){
          c.moveTo(x+w*.05,y+h*.55);c.quadraticCurveTo(x+w*.32,y+h*.02,x+w*.72,y+h*.18);c.lineTo(x+w*.98,y+h*.55);c.lineTo(x+w*.72,y+h*.9);c.lineTo(x+w*.12,y+h*.88);c.closePath();
        }else if(type==='truck'){
          c.rect(x,y+h*.28,w*.54,h*.68);c.moveTo(x+w*.54,y+h*.96);c.lineTo(x+w*.54,y+h*.38);c.lineTo(x+w*.7,y+h*.08);c.lineTo(x+w*.9,y+h*.08);c.lineTo(x+w,y+h*.48);c.lineTo(x+w,y+h*.96);c.closePath();
        }else{
          c.moveTo(x,y+h*.96);c.lineTo(x,y+h*.48);c.lineTo(x+w*.18,y+h*.42);c.lineTo(x+w*.31,y+h*.06);c.lineTo(x+w*.7,y+h*.06);c.lineTo(x+w*.84,y+h*.42);c.lineTo(x+w,y+h*.5);c.lineTo(x+w,y+h*.96);c.closePath();
        }
      }else{
        // Compact approximation of the weapon body, stock/barrel and grip for pattern clipping.
        c.roundRect(x,y+h*.18,w,h*.42,Math.max(1,w*.025));
        if(type!=='shotgun' && type!=='sniper') c.rect(x+w*.22,y+h*.5,w*.18,h*.44);
        if(type==='rpg') { c.rect(x+w*.02,y+h*.06,w*.96,h*.62); }
        if(type==='sniper') { c.rect(x+w*.2,y,w*.42,h*.24); }
      }
    };

    c.save(); c.shadowBlur=0; c.lineCap='round'; c.lineJoin='round';
    if (['gold','camo','zebra','dots','blooming'].includes(skin)) {
      c.save(); mask(); c.clip();
      if (skin==='gold') {
        const g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#78500f');g.addColorStop(.27,'#d8aa35');g.addColorStop(.46,'#fff0a0');g.addColorStop(.6,'#c48e1f');g.addColorStop(1,'#78500f');c.fillStyle=g;c.fillRect(x,y,w,h);
      } else if (skin==='camo') {
        c.fillStyle='#596344';c.fillRect(x,y,w,h);
        const patches=[['#2e3b2c',.00,.08,.3,.34],['#8a7650',.25,.02,.3,.31],['#405039',.54,.08,.42,.34],['#8d8257',.06,.52,.36,.34],['#263526',.42,.48,.3,.42],['#667044',.72,.5,.29,.34]];
        patches.forEach(([co,px,py,pw,ph])=>{c.fillStyle=co;c.beginPath();c.roundRect(x+w*px,y+h*py,w*pw,h*ph,Math.max(2,w*.025));c.fill();});
      } else if (skin==='zebra') {
        c.fillStyle='#f0efe9';c.fillRect(x,y,w,h);c.strokeStyle='#111514';c.lineWidth=Math.max(2,w*.045);for(let i=-2;i<8;i++){const sx=x+i*w*.17;c.beginPath();c.moveTo(sx,y-3);c.bezierCurveTo(sx+w*.13,y+h*.25,sx-w*.05,y+h*.65,sx+w*.19,y+h+3);c.stroke();}
      } else if (skin==='dots') {
        c.fillStyle='#e7dfcf';c.fillRect(x,y,w,h);const colors=['#d74b62','#315f82','#f0c95d'];for(let i=0;i<12;i++){c.fillStyle=colors[i%colors.length];c.beginPath();c.arc(x+w*(.07+(i%6)*.18),y+h*(.24+Math.floor(i/6)*.5),Math.max(1.8,w*.035),0,Math.PI*2);c.fill();}
      } else if (skin==='blooming') {
        c.fillStyle='#725039';c.fillRect(x,y,w,h);c.fillStyle='rgba(132,77,45,.78)';for(let i=0;i<7;i++){c.beginPath();c.arc(x+w*(.08+(i*17%82)/100),y+h*(.18+(i*31%68)/100),Math.max(2,w*.035),0,Math.PI*2);c.fill();}
        c.fillStyle='rgba(72,112,56,.82)';for(let i=0;i<7;i++){c.beginPath();c.ellipse(x+w*(.05+i*.15),y+h*(.72-(i%2)*.14),w*.1,h*.14,(i%2?.45:-.35),0,Math.PI*2);c.fill();}
      }
      c.restore();
    }

    if (skin==='gold') {
      c.strokeStyle='rgba(255,245,190,.9)';c.lineWidth=Math.max(1,w*.018);c.beginPath();c.moveTo(x+w*.13,y+h*.22);c.lineTo(x+w*.46,y+h*.08);c.stroke();
    } else if (skin==='festive') {
      c.strokeStyle='#3f8d4b';c.lineWidth=Math.max(2,w*.035);c.beginPath();c.arc(x+w*.53,y+h*.48,Math.min(w,h)*.22,0,Math.PI*2);c.stroke();c.fillStyle='#d94d45';[[.43,.36],[.62,.42],[.49,.62]].forEach(([px,py])=>{c.beginPath();c.arc(x+w*px,y+h*py,Math.max(1.6,w*.028),0,Math.PI*2);c.fill();});
    } else if (skin==='blooming') {
      // Living overgrowth grows off the rusted body.
      c.strokeStyle='#5f984f';c.lineWidth=Math.max(1.6,w*.022);c.beginPath();c.moveTo(x+w*.08,y+h*.78);c.quadraticCurveTo(x+w*.28,y-h*.18,x+w*.42,y+h*.18);c.moveTo(x+w*.58,y+h*.78);c.quadraticCurveTo(x+w*.75,y-h*.18,x+w*.94,y+h*.14);c.stroke();
      c.fillStyle='#8dd06f';[[.31,.05],[.78,.02],[.46,.2]].forEach(([px,py])=>{c.beginPath();c.ellipse(x+w*px,y+h*py,Math.max(2,w*.05),Math.max(1.2,w*.025),-.4,0,Math.PI*2);c.fill();});c.fillStyle='#dfcf68';c.beginPath();c.arc(x+w*.78,y+h*.02,Math.max(1.8,w*.03),0,Math.PI*2);c.fill();
    } else if (skin==='neon') {
      // Detailed tracing hugs body seams; nothing shoots randomly away from the equipment.
      c.save();c.shadowBlur=8;c.lineCap='round';
      if(kind==='vehicle' && type==='motorcycle'){
        c.shadowColor='#41fff2';c.strokeStyle='#41fff2';c.lineWidth=1.8;c.beginPath();c.moveTo(x+w*.05,y+h*.65);c.lineTo(x+w*.34,y+h*.18);c.lineTo(x+w*.7,y+h*.24);c.lineTo(x+w*.96,y+h*.66);c.stroke();c.shadowColor='#ff4ee8';c.strokeStyle='#ff4ee8';c.beginPath();c.moveTo(x+w*.22,y+h*.72);c.lineTo(x+w*.72,y+h*.72);c.stroke();
      }else if(kind==='vehicle' && type==='truck'){
        c.shadowColor='#41fff2';c.strokeStyle='#41fff2';c.lineWidth=1.7;c.strokeRect(x+w*.02,y+h*.3,w*.5,h*.6);c.beginPath();c.moveTo(x+w*.55,y+h*.88);c.lineTo(x+w*.55,y+h*.4);c.lineTo(x+w*.7,y+h*.1);c.lineTo(x+w*.88,y+h*.1);c.lineTo(x+w*.98,y+h*.48);c.lineTo(x+w*.98,y+h*.88);c.stroke();c.shadowColor='#ff4ee8';c.strokeStyle='#ff4ee8';c.beginPath();c.moveTo(x+w*.08,y+h*.5);c.lineTo(x+w*.48,y+h*.5);c.moveTo(x+w*.62,y+h*.55);c.lineTo(x+w*.9,y+h*.55);c.stroke();
      }else if(kind==='vehicle'){
        c.shadowColor='#41fff2';c.strokeStyle='#41fff2';c.lineWidth=1.7;c.beginPath();c.moveTo(x+w*.02,y+h*.9);c.lineTo(x+w*.02,y+h*.48);c.lineTo(x+w*.2,y+h*.42);c.lineTo(x+w*.33,y+h*.08);c.lineTo(x+w*.68,y+h*.08);c.lineTo(x+w*.84,y+h*.42);c.lineTo(x+w*.98,y+h*.5);c.lineTo(x+w*.98,y+h*.9);c.stroke();c.shadowColor='#ff4ee8';c.strokeStyle='#ff4ee8';c.beginPath();c.moveTo(x+w*.14,y+h*.6);c.lineTo(x+w*.88,y+h*.6);c.moveTo(x+w*.31,y+h*.22);c.lineTo(x+w*.7,y+h*.22);c.stroke();
      }else{
        c.shadowColor='#41fff2';c.strokeStyle='#41fff2';c.lineWidth=1.5;c.beginPath();c.moveTo(x+w*.02,y+h*.2);c.lineTo(x+w*.98,y+h*.2);c.moveTo(x+w*.08,y+h*.56);c.lineTo(x+w*.88,y+h*.56);c.stroke();c.shadowColor='#ff4ee8';c.strokeStyle='#ff4ee8';c.lineWidth=1.1;c.beginPath();c.moveTo(x+w*.2,y+h*.34);c.lineTo(x+w*.7,y+h*.34);c.stroke();
      }
      c.restore();
    } else if (skin==='cosmic') {
      c.fillStyle='#d8f5ff';for(let i=0;i<8;i++){c.beginPath();c.arc(x+w*(.1+(i*37%80)/100),y+h*(.15+(i*53%70)/100),1+(i%2)*.6,0,Math.PI*2);c.fill();}
    } else if (skin==='water') {
      c.strokeStyle='#9fe1f2';c.lineWidth=2;for(let row=0;row<2;row++){c.beginPath();c.moveTo(x,y+h*(.35+row*.35));c.quadraticCurveTo(x+w*.25,y+h*(.18+row*.35),x+w*.5,y+h*(.35+row*.35));c.quadraticCurveTo(x+w*.75,y+h*(.52+row*.35),x+w,y+h*(.35+row*.35));c.stroke();}
    }
    c.restore();
  }

  function drawVehicleUnderPlayer() {
    if (!player.vehicle) return;
    const type=player.vehicle;
    const skin=activeGearSkin('vehicle');
    const pal=gearSkinPalette(skin,'vehicle');
    ctx.save(); prepareGearSkinContext(ctx,skin);
    ctx.fillStyle=pal.fill; ctx.strokeStyle=pal.stroke; ctx.lineWidth=3;
    let detailBox={x:-30,y:25,w:62,h:28};
    if(type==='motorcycle'){
      // More natural motorcycle: tires, rims, frame, engine, tank and seat.
      ctx.fillStyle='#0e1211';ctx.beginPath();ctx.arc(-16,52,10,0,Math.PI*2);ctx.arc(20,52,10,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='#707873';ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(-16,52,7.5,0,Math.PI*2);ctx.arc(20,52,7.5,0,Math.PI*2);ctx.stroke();
      ctx.strokeStyle='#3d4541';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-16,52);ctx.lineTo(-5,35);ctx.lineTo(11,38);ctx.lineTo(20,52);ctx.moveTo(-5,35);ctx.lineTo(3,52);ctx.lineTo(-16,52);ctx.moveTo(11,38);ctx.lineTo(17,26);ctx.stroke();
      ctx.fillStyle=pal.fill;ctx.strokeStyle=pal.stroke;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-8,34);ctx.quadraticCurveTo(1,25,13,31);ctx.lineTo(9,40);ctx.lineTo(-8,40);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#303633';ctx.fillRect(-1,41,10,7);ctx.fillStyle='#191e1c';ctx.fillRect(6,27,13,5);
      detailBox={x:-9,y:27,w:29,h:21};
    }else if(type==='car'){
      ctx.beginPath();ctx.moveTo(-29,52);ctx.lineTo(-29,37);ctx.lineTo(-18,35);ctx.lineTo(-10,25);ctx.lineTo(14,25);ctx.lineTo(23,35);ctx.lineTo(33,38);ctx.lineTo(33,52);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#14201d';ctx.beginPath();ctx.moveTo(-7,27);ctx.lineTo(11,27);ctx.lineTo(18,35);ctx.lineTo(-14,35);ctx.closePath();ctx.fill();
      ctx.fillStyle='#0e1211';ctx.beginPath();ctx.arc(-18,54,8,0,Math.PI*2);ctx.arc(21,54,8,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#737875';ctx.lineWidth=2;ctx.beginPath();ctx.arc(-18,54,5.5,0,Math.PI*2);ctx.arc(21,54,5.5,0,Math.PI*2);ctx.stroke();detailBox={x:-28,y:25,w:60,h:28};
    }else{
      // Natural truck proportions: bed, cab, hood, windows, bumper and separated wheels.
      ctx.fillStyle=pal.fill;ctx.strokeStyle=pal.stroke;ctx.lineWidth=3;ctx.fillRect(-40,30,42,22);ctx.strokeRect(-40,30,42,22);
      ctx.beginPath();ctx.moveTo(2,27);ctx.lineTo(12,20);ctx.lineTo(28,20);ctx.lineTo(38,31);ctx.lineTo(40,52);ctx.lineTo(2,52);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#14201d';ctx.beginPath();ctx.moveTo(13,22);ctx.lineTo(27,22);ctx.lineTo(34,31);ctx.lineTo(9,31);ctx.closePath();ctx.fill();
      ctx.fillStyle='#0e1211';ctx.beginPath();ctx.arc(-26,54,9,0,Math.PI*2);ctx.arc(27,54,9,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#737875';ctx.lineWidth=2;ctx.beginPath();ctx.arc(-26,54,6,0,Math.PI*2);ctx.arc(27,54,6,0,Math.PI*2);ctx.stroke();
      ctx.fillStyle='#555d58';ctx.fillRect(38,47,7,4);detailBox={x:-39,y:20,w:79,h:32};
    }
    drawCanvasGearSkinDetails(ctx,skin,'vehicle',detailBox,type);
    ctx.restore();
  }

  function drawHeldWeapon() {
    const type = player.weapon;
    const skin = activeGearSkin('weapon');
    const pal = gearSkinPalette(skin,'weapon');
    ctx.save(); prepareGearSkinContext(ctx,skin);
    if (player.goldRushTime > 0) {
      ctx.shadowColor = '#ffd84f';
      ctx.shadowBlur = 16 + Math.sin(gameTime * 20) * 4;
      ctx.fillStyle = '#f6d75d';
    } else {
      ctx.fillStyle = weaponFlash > 0 ? '#e9f1df' : pal.fill;
    }
    ctx.strokeStyle=pal.stroke;

    if (type === 'pistol') {
      ctx.fillRect(16, 20, 20, 7); ctx.fillRect(21, 27, 7, 8);
    } else if (type === 'ar') {
      ctx.fillRect(16, 19, 42, 8); ctx.fillRect(26, 27, 7, 11); ctx.fillRect(47, 16, 8, 4);
    } else if (type === 'shotgun') {
      ctx.fillRect(16, 20, 47, 7); ctx.fillStyle = skin==='realistic' ? '#76583e' : pal.stroke; ctx.fillRect(23, 27, 18, 6);
    } else if (type === 'rpg') {
      ctx.fillRect(14, 17, 50, 12); ctx.fillStyle = pal.stroke; ctx.fillRect(27, 29, 7, 10);
    } else if (type === 'sniper') {
      ctx.fillRect(15, 20, 55, 6); ctx.fillRect(28, 26, 7, 10); ctx.fillStyle = pal.stroke; ctx.fillRect(27, 15, 18, 5);
    } else if (type === 'smg') {
      ctx.fillRect(16, 19, 35, 9); ctx.fillRect(25, 28, 8, 10); ctx.fillRect(45, 15, 5, 5);
    }

    // Full-body skin detailing so camo/zebra/dots read across the weapon instead of a single flat center color.
    ctx.shadowBlur=0;
    const weaponBoxes={pistol:{x:16,y:19,w:22,h:16},ar:{x:16,y:16,w:43,h:22},shotgun:{x:16,y:18,w:48,h:16},rpg:{x:14,y:16,w:52,h:23},sniper:{x:15,y:14,w:56,h:22},smg:{x:16,y:15,w:37,h:23}};
    drawCanvasGearSkinDetails(ctx,skin,'weapon',weaponBoxes[type]||weaponBoxes.pistol,type);

    if (player.muzzle > 0) {
      const mx = { pistol: 37, ar: 59, shotgun: 64, rpg: 65, sniper: 71, smg: 52 }[type] || 40;
      ctx.fillStyle = '#f4d260';
      ctx.beginPath(); ctx.moveTo(mx,23); ctx.lineTo(mx+11,17); ctx.lineTo(mx+7,23); ctx.lineTo(mx+12,29); ctx.closePath(); ctx.fill();
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


  function drawObstacles(){
    const wallFront=bloomWallX+BLOOM_WALL_WIDTH;
    for(const ob of obstacles){
      if(!ob.active || ob.x+ob.w<=wallFront || ob.x>cameraX+innerWidth+120) continue;
      ctx.save();
      if(ob.type==='mud'){
        // Raised puddle sitting visibly on top of the ground instead of looking embedded in it.
        ctx.fillStyle='#514332';ctx.beginPath();ctx.moveTo(ob.x,ob.y-1);ctx.quadraticCurveTo(ob.x+ob.w*.08,ob.y-15,ob.x+ob.w*.22,ob.y-10);ctx.quadraticCurveTo(ob.x+ob.w*.38,ob.y-20,ob.x+ob.w*.52,ob.y-11);ctx.quadraticCurveTo(ob.x+ob.w*.73,ob.y-18,ob.x+ob.w,ob.y-2);ctx.lineTo(ob.x+ob.w,ob.y+2);ctx.lineTo(ob.x,ob.y+2);ctx.closePath();ctx.fill();
        ctx.strokeStyle='#826c4d';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(ob.x+7,ob.y-5);ctx.quadraticCurveTo(ob.x+ob.w*.35,ob.y-15,ob.x+ob.w*.58,ob.y-7);ctx.quadraticCurveTo(ob.x+ob.w*.78,ob.y-13,ob.x+ob.w-8,ob.y-5);ctx.stroke();
        ctx.fillStyle='rgba(157,126,82,.38)';ctx.beginPath();ctx.ellipse(ob.x+ob.w*.32,ob.y-9,ob.w*.14,3.5,0,0,Math.PI*2);ctx.fill();
      }else if(ob.type==='thorns'){
        ctx.fillStyle='#596a45';for(let i=0;i<6;i++){const x=ob.x+i*(ob.w/5);ctx.beginPath();ctx.moveTo(x,ob.y);ctx.lineTo(x+5,ob.y-ob.h);ctx.lineTo(x+11,ob.y);ctx.closePath();ctx.fill();}
        ctx.strokeStyle='#7f9a53';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(ob.x,ob.y-4);ctx.lineTo(ob.x+ob.w,ob.y-4);ctx.stroke();
      }else{
        ctx.strokeStyle='#5a984f';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(ob.x,ob.y);ctx.quadraticCurveTo(ob.x+ob.w*.25,ob.y-ob.h*1.3,ob.x+ob.w*.5,ob.y-6);ctx.quadraticCurveTo(ob.x+ob.w*.75,ob.y-ob.h*1.4,ob.x+ob.w,ob.y);ctx.stroke();
        ctx.fillStyle='#80b55c';[.18,.5,.82].forEach(t=>{ctx.beginPath();ctx.ellipse(ob.x+ob.w*t,ob.y-15-(t===.5?6:0),7,3,t*Math.PI,0,Math.PI*2);ctx.fill();});
      }
      ctx.restore();
    }
  }

  function drawTrapEscapeMeter(){
    if(!player?.trapped) return;
    const trap = obstacles.find(o=>o.id===player.trapObstacleId);
    const remaining = 1-Math.min(1,(player.trapProgress||0)/8);
    if(trap){
      const cx=player.x+player.w/2, ground=player.y+player.h;
      ctx.save();
      ctx.strokeStyle='#4f9348';ctx.lineWidth=4;ctx.lineCap='round';
      for(let i=0;i<5;i++){
        const side=i%2?-1:1;
        const baseX=cx+side*(8+(i%3)*4);
        const topY=ground-(16+remaining*(20+i*7));
        ctx.beginPath();ctx.moveTo(trap.x+trap.w*(.2+i*.14),trap.y);ctx.quadraticCurveTo(cx+side*(22+i*2),ground-28,cx+side*(4+i%2*6),topY);ctx.stroke();
        ctx.fillStyle='#78b65c';ctx.beginPath();ctx.ellipse(cx+side*(7+i%2*6),topY+7,6,3,side*.7,0,Math.PI*2);ctx.fill();
      }
      ctx.restore();
    }
    const w=62,h=7,x=player.x+player.w/2-w/2,y=player.y-31;
    ctx.save();ctx.fillStyle='rgba(7,12,9,.9)';ctx.fillRect(x-2,y-2,w+4,h+4);ctx.strokeStyle='#7dac5e';ctx.strokeRect(x-2,y-2,w+4,h+4);ctx.fillStyle='#9ee06c';ctx.fillRect(x,y,w*Math.min(1,player.trapProgress/8),h);ctx.fillStyle='#d9e8cf';ctx.font='bold 8px Courier New';ctx.textAlign='center';ctx.fillText('SPAM SPACE',x+w/2,y-5);ctx.textAlign='start';ctx.restore();
  }

  function drawHouses(){
    const wallFront=bloomWallX+BLOOM_WALL_WIDTH;
    ctx.textAlign='center';ctx.font='bold 9px Courier New';

    if (spawnHouse && spawnHouse.x + spawnHouse.w > wallFront && spawnHouse.x < cameraX + innerWidth + 180) {
      // Stage 12: mirror the menu safehouse -- dark green clapboard body, asymmetric roof,
      // warm divided windows, centered heavy door, antenna and creeping vines.
      const h = spawnHouse;
      ctx.save();
      // Body
      const bodyY = h.y + 32;
      const bodyH = h.h - 32;
      const bodyGrad = ctx.createLinearGradient(h.x,bodyY,h.x,bodyY+bodyH);
      bodyGrad.addColorStop(0,'#334139'); bodyGrad.addColorStop(.55,'#202c27'); bodyGrad.addColorStop(1,'#17201d');
      ctx.fillStyle=bodyGrad;ctx.fillRect(h.x+6,bodyY,h.w-12,bodyH);
      ctx.strokeStyle='#53675b';ctx.lineWidth=3;ctx.strokeRect(h.x+6,bodyY,h.w-12,bodyH);
      // Subtle vertical siding
      ctx.strokeStyle='rgba(235,245,236,.045)';ctx.lineWidth=1;
      for(let sx=h.x+18;sx<h.x+h.w-10;sx+=22){ctx.beginPath();ctx.moveTo(sx,bodyY+3);ctx.lineTo(sx,bodyY+bodyH-2);ctx.stroke();}
      // Asymmetric menu-style roof
      const roofGrad = ctx.createLinearGradient(h.x,h.y,h.x+h.w,h.y+38);
      roofGrad.addColorStop(0,'#536259');roofGrad.addColorStop(.62,'#2a3530');roofGrad.addColorStop(1,'#17201d');
      ctx.fillStyle=roofGrad;ctx.beginPath();ctx.moveTo(h.x-7,h.y+36);ctx.lineTo(h.x+30,h.y+7);ctx.lineTo(h.x+h.w*.68,h.y);ctx.lineTo(h.x+h.w+8,h.y+36);ctx.closePath();ctx.fill();
      ctx.strokeStyle='#111815';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(h.x-5,h.y+36);ctx.lineTo(h.x+h.w+7,h.y+36);ctx.stroke();
      // Warm windows with crossbars
      const drawSafeWindow=(wx,wy,ww,wh)=>{
        ctx.fillStyle='#849569';ctx.fillRect(wx,wy,ww,wh);
        const glow=ctx.createRadialGradient(wx+ww/2,wy+wh*.75,1,wx+ww/2,wy+wh*.75,ww*.8);
        glow.addColorStop(0,'rgba(210,224,132,.34)');glow.addColorStop(1,'rgba(210,224,132,0)');ctx.fillStyle=glow;ctx.fillRect(wx-8,wy-8,ww+16,wh+16);
        ctx.strokeStyle='#18221e';ctx.lineWidth=4;ctx.strokeRect(wx,wy,ww,wh);
        ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(wx+ww/2,wy);ctx.lineTo(wx+ww/2,wy+wh);ctx.moveTo(wx,wy+wh/2);ctx.lineTo(wx+ww,wy+wh/2);ctx.stroke();
      };
      drawSafeWindow(h.x+18,h.y+49,28,23);
      drawSafeWindow(h.x+h.w-46,h.y+49,28,23);
      // Door
      const doorX=h.x+h.w*.42, doorW=h.w*.18, doorY=h.y+h.h-64;
      const doorGrad=ctx.createLinearGradient(doorX,0,doorX+doorW,0);doorGrad.addColorStop(0,'#121a17');doorGrad.addColorStop(.55,'#26362f');doorGrad.addColorStop(1,'#131c18');
      ctx.fillStyle=doorGrad;ctx.fillRect(doorX,doorY,doorW,64);ctx.strokeStyle='#0b110f';ctx.lineWidth=4;ctx.strokeRect(doorX,doorY,doorW,64);
      ctx.fillStyle='#b3c472';ctx.beginPath();ctx.arc(doorX+doorW*.82,doorY+34,3,0,Math.PI*2);ctx.fill();
      // Sign
      ctx.fillStyle='#141d19';ctx.strokeStyle='#667669';ctx.lineWidth=2;ctx.fillRect(h.x+h.w*.31,h.y+39,h.w*.38,16);ctx.strokeRect(h.x+h.w*.31,h.y+39,h.w*.38,16);
      ctx.fillStyle='#a9ba87';ctx.font='bold 8px Courier New';ctx.fillText('SAFEHOUSE',h.x+h.w*.5,h.y+50);
      // Antenna and two loops
      ctx.strokeStyle='#738779';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(h.x+h.w*.78,h.y+6);ctx.lineTo(h.x+h.w*.82,h.y-24);ctx.stroke();
      ctx.beginPath();ctx.ellipse(h.x+h.w*.82,h.y-18,12,5,0,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.ellipse(h.x+h.w*.82,h.y-18,6,2.5,0,0,Math.PI*2);ctx.stroke();
      // Vines
      ctx.strokeStyle='rgba(82,137,71,.78)';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(h.x+9,h.y+h.h-4);ctx.quadraticCurveTo(h.x-4,h.y+76,h.x+18,h.y+51);ctx.quadraticCurveTo(h.x+30,h.y+40,h.x+22,h.y+30);ctx.stroke();
      ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(h.x+h.w-4,h.y+h.h-18);ctx.quadraticCurveTo(h.x+h.w+9,h.y+80,h.x+h.w-18,h.y+57);ctx.stroke();
      ctx.restore();
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
  syncRankUnlocks();
  updateRankUI();
  updateStartingItemSign();
  requestAnimationFrame(frame);
})();
