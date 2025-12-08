// --- Constants & Config ---
const GRAPHIC_MODES = { STANDARD: 0, PAPER: 1, NEON: 2 };

// Mode 0: Standard (Coffee, Berry, Minty, Sky)
const STANDARD_PALETTES = [
    { BG: 0xF2E8DC, GRID_EMPTY: 0xE3D5C0, GRID_FILLED: 0xE09F7D, TEXT: '#5D4037', CSS: { bg: '#F2E8DC', dark: '#E3D5C0', light: '#E09F7D', pale: '#5D4037', grad1: '#F2E8DC', grad2: '#EFE0D0' } },
    { BG: 0xfff0f5, GRID_EMPTY: 0xffddee, GRID_FILLED: 0xff66b2, TEXT: '#884466', CSS: { bg: '#fff0f5', dark: '#ffcce6', light: '#ff66b2', pale: '#884466', grad1: '#fff0f5', grad2: '#ffe6f2' } },
    { BG: 0xf0fff4, GRID_EMPTY: 0xd9ffe6, GRID_FILLED: 0x00cc66, TEXT: '#006633', CSS: { bg: '#f0fff4', dark: '#d9ffe6', light: '#00cc66', pale: '#006633', grad1: '#f0fff4', grad2: '#e6ffec' } },
    { BG: 0xf0f8ff, GRID_EMPTY: 0xddeeff, GRID_FILLED: 0x33bbff, TEXT: '#004488', CSS: { bg: '#f0f8ff', dark: '#ddeeff', light: '#33bbff', pale: '#004488', grad1: '#f0f8ff', grad2: '#e6f2ff' } }
];

// Mode 1: Paper (Sketchy, hand-drawn feel)
// Background vaguely creamy/paper-like. Grid filled changes colors subtly.
const PAPER_PALETTES = [
    { BG: 0xfdfbf7, GRID_EMPTY: 0xeae6dc, GRID_FILLED: 0xd65d5d, TEXT: '#333333', CSS: { bg: '#fdfbf7', dark: '#eae6dc', light: '#d65d5d', pale: '#333333', grad1: '#fdfbf7', grad2: '#f0e6d2' } }, // Red/Pencil
    { BG: 0xfdfbf7, GRID_EMPTY: 0xeae6dc, GRID_FILLED: 0x5d9cd6, TEXT: '#333333', CSS: { bg: '#fdfbf7', dark: '#eae6dc', light: '#5d9cd6', pale: '#333333', grad1: '#fdfbf7', grad2: '#f0e6d2' } }, // Blue/Ink
    { BG: 0xfdfbf7, GRID_EMPTY: 0xeae6dc, GRID_FILLED: 0x6dad5d, TEXT: '#333333', CSS: { bg: '#fdfbf7', dark: '#eae6dc', light: '#6dad5d', pale: '#333333', grad1: '#fdfbf7', grad2: '#f0e6d2' } }  // Green/Crayon
];

// Mode 2: Neon (Dark background, glowing outlines)
const NEON_PALETTES = [
    { BG: 0x050510, GRID_EMPTY: 0x1a1a33, GRID_FILLED: 0x00ff00, TEXT: '#ffff00', CSS: { bg: '#050510', dark: '#1a1a33', light: '#00ff00', pale: '#ffff00', grad1: '#050510', grad2: '#051005' } }, // Green/Yellow
    { BG: 0x050510, GRID_EMPTY: 0x1a1a33, GRID_FILLED: 0xff00ff, TEXT: '#00ffff', CSS: { bg: '#050510', dark: '#1a1a33', light: '#ff00ff', pale: '#00ffff', grad1: '#050510', grad2: '#100520' } }, // Magenta/Cyan
    { BG: 0x050510, GRID_EMPTY: 0x1a1a33, GRID_FILLED: 0x00ffff, TEXT: '#ff00aa', CSS: { bg: '#050510', dark: '#1a1a33', light: '#00ffff', pale: '#ff00aa', grad1: '#050510', grad2: '#050520' } }  // Cyan/Pink
];

const TEXTS = {
    tr: {
        SCORE: 'PUAN', BEST: 'EN İYİ', TIME: 'SÜRE', LOCKED: 'KİLİTLİ',
        PAUSED: 'DURAKLATILDI', SOUND: 'SES', RISK: 'RİSK', ON: 'AÇIK', OFF: 'KAPALI',
        RESTART: 'YENİDEN BAŞLAT', RESUME: 'DEVAM ET', GAME_OVER: 'OYUN BİTTİ',
        RISK_OFF_MSG: 'RİSK KAPALI',
        PICK_CARD: 'KART SEÇ', SKIP: 'KAPAT',
        LUCKY: 'ŞANSLI', UNLUCKY: 'ŞANSSIZ',
        TUTORIAL_BTN: 'NASIL OYNANIR?',
        TUTORIAL_TITLE: 'NASIL OYNANIR?',
        TUTORIAL_BODY:
            `Amaç: Gelen blokları alana yerleştir.
Satır veya sütunları doldurarak patlat ve puan topla.
Blokları koyacak yerin kalmazsa oyun biter!
Engelleyici bloklari yok etmek için o bloğun hem SATIRINI hem de SÜTUNUNU aynı anda doldurmalısın!

İstediğin zaman Risk Kartı seçebilirsin:
Şanslı Kart: +100 Puan kazandırır.
Şanssız Kart: -50 Puan siler ve alana 1 engelleyici blok koyar.

5000 puana ulaştığında risk almak zorundasın!
Şanslı: +250 Puan.
Şanssız: -100 Puan ve 2 engelleyici blok.



İyi Eğlenceler!`
    },
    en: {
        SCORE: 'SCORE', BEST: 'BEST', TIME: 'TIME', LOCKED: 'LOCKED',
        PAUSED: 'PAUSED', SOUND: 'SOUND', RISK: 'RISK', ON: 'ON', OFF: 'OFF',
        RESTART: 'RESTART GAME', RESUME: 'RESUME', GAME_OVER: 'GAME OVER',
        RISK_OFF_MSG: 'RISK OFF',
        PICK_CARD: 'PICK A CARD', SKIP: 'CLOSE',
        LUCKY: 'LUCKY', UNLUCKY: 'UNLUCKY',
        TUTORIAL_BTN: 'HOW TO PLAY?',
        TUTORIAL_TITLE: 'HOW TO PLAY',
        TUTORIAL_BODY:
            `Goal: Place the incoming blocks on the grid. Fill rows or columns to clear them and score points. If you run out of space to place a block, the game is over! To destroy obstacle blocks, you must fill BOTH the ROW and COLUMN of that block at the same time!
You can choose a Risk Card anytime: Lucky Card: Grants +100 Points. Unlucky Card: Deducts -50 Points and places 1 obstacle block.
When you reach 5000 points, taking risks becomes mandatory! Lucky: +250 Points. Unlucky: -100 Points and 2 obstacle blocks.`
    }
};


let currentMode = GRAPHIC_MODES.STANDARD;
let currentPaletteIndex = 0;

function getTheme() {
    let list;
    if (currentMode === GRAPHIC_MODES.PAPER) list = PAPER_PALETTES;
    else if (currentMode === GRAPHIC_MODES.NEON) list = NEON_PALETTES;
    else list = STANDARD_PALETTES;

    return list[currentPaletteIndex % list.length];
}

const GRID_SIZE = 10;
const BLOCK_SIZE = 40;
const GAP = 2;
const GRID_OFFSET_Y = 160;
const GRID_WIDTH = (BLOCK_SIZE + GAP) * GRID_SIZE - GAP;

// --- Audio System ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let soundEnabled = true;

function playTone(freq, type, duration) {
    if (!soundEnabled || audioCtx.state === 'suspended') {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        if (!soundEnabled) return;
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

const SOUNDS = {
    PLACE: () => playTone(150, 'square', 0.1),
    CLEAR: () => { playTone(300, 'square', 0.1); setTimeout(() => playTone(450, 'square', 0.2), 100); },
    GAMEOVER: () => { playTone(200, 'sawtooth', 0.3); setTimeout(() => playTone(150, 'sawtooth', 0.3), 300); },
    BUTTON: () => playTone(400, 'square', 0.05),
    CARD_FLIP: () => playTone(600, 'sine', 0.1),
    WIN: () => playTone(800, 'triangle', 0.3),
    LOSS: () => playTone(100, 'sawtooth', 0.4),
    FREEZE: () => playTone(1000, 'sawtooth', 0.5)
};

const SHAPES = [
    [[0, 0], [0, 1], [1, 0], [1, 1]], // 2x2 Square
    [[0, 0], [0, 1], [0, 2]],         // Horizontal 3
    [[0, 0], [1, 0], [2, 0]],         // Vertical 3
    [[0, 0], [0, 1], [1, 0]],         // Corner 1
    [[0, 0], [0, 1], [1, 1]],         // Corner 2
    [[0, 0], [1, 0], [1, 1]],         // Corner 3
    [[1, 0], [1, 1], [0, 1]],         // Corner 4
    [[0, 0], [0, 1], [0, 2], [1, 2]], // L-shape
    [[0, 0], [1, 0], [2, 0], [2, 1]], // L-shape
    [[0, 0]],                         // 1 block
    [[0, 0], [0, 1]],                 // 2 block H
    [[0, 0], [1, 0]]                  // 2 block V
];

let gameState = {
    grid: Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0)),
    score: 0,
    bestScore: parseInt(localStorage.getItem('blockPuzzleBest') || '0'),
    gameOver: false,
    riskEnabled: true,
    isPaused: false,
    frozenBlock: null,
    lang: 'tr', // Default Language: Turkish
    cardsDrawn: 0
};

class GameScene extends Phaser.Scene {
    constructor() { super({ key: 'GameScene' }); }

    create() {
        this.cameras.main.setBackgroundColor(getTheme().BG);
        this.generateTextures();

        this.gridContainer = this.add.container((this.game.config.width - GRID_WIDTH) / 2, GRID_OFFSET_Y);
        this.gridBlocks = [];
        this.handContainer = this.add.container(0, 0);

        this.createGrid();
        this.createHUD();
        this.spawnHandShapes();
        this.placeRandomStartingBlocks();

        this.input.on('pointermove', this.onDrag, this);
        this.input.on('pointerup', this.onDrop, this);
        this.input.keyboard.on('keydown-ESC', () => this.toggleSettings());

        this.dragObj = null;
        this.dragOffset = { x: 0, y: 0 };

        this.riskTimer = this.time.addEvent({ delay: 1000, callback: this.onTimerTick, callbackScope: this, loop: true });
        this.secondsLeft = 60;

        // Initial Theme Application
        this.applyTheme();
    }

    getText(key) { return TEXTS[gameState.lang][key]; }

    generateTextures() {
        const theme = getTheme();
        const graphics = this.make.graphics({ x: 0, y: 0, add: false });

        // Block
        if (this.textures.exists('block_filled')) this.textures.remove('block_filled');
        graphics.clear();

        if (currentMode === GRAPHIC_MODES.PAPER) {
            // Paper Style: Hand-drawn look, slight irregularity
            graphics.fillStyle(theme.GRID_FILLED, 0.9);
            graphics.fillRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
            graphics.lineStyle(2, 0x000000, 0.8);
            graphics.strokeRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
            // Inner scribble
            graphics.lineStyle(1, 0x000000, 0.3);
            graphics.moveTo(5, 5); graphics.lineTo(BLOCK_SIZE - 5, BLOCK_SIZE - 5);
            graphics.strokePath();

        } else if (currentMode === GRAPHIC_MODES.NEON) {
            // Neon Style: Glowy outline, empty center or dark center
            graphics.fillStyle(0x000000, 0); // Transparent center
            graphics.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);

            // Outer Glow (simulated with multiple strokes)
            graphics.lineStyle(4, theme.GRID_FILLED, 0.3);
            graphics.strokeRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
            graphics.lineStyle(2, theme.GRID_FILLED, 1);
            graphics.strokeRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);

        } else {
            // Standard Style
            graphics.fillStyle(theme.GRID_FILLED, 1);
            graphics.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
            graphics.lineStyle(2, 0x000000, 0.3);
            graphics.strokeRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
        }
        graphics.generateTexture('block_filled', BLOCK_SIZE, BLOCK_SIZE);

        // Empty
        if (this.textures.exists('block_empty')) this.textures.remove('block_empty');
        graphics.clear();

        if (currentMode === GRAPHIC_MODES.PAPER) {
            // Paper: Faint pencil grid
            graphics.fillStyle(theme.GRID_EMPTY, 0.5);
            graphics.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
            graphics.lineStyle(1, 0x555555, 0.3);
            graphics.strokeRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);

        } else if (currentMode === GRAPHIC_MODES.NEON) {
            // Neon: Faint grid lines
            graphics.fillStyle(theme.GRID_EMPTY, 1);
            graphics.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
            graphics.lineStyle(1, theme.GRID_FILLED, 0.2);
            graphics.strokeRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
        } else {
            // Standard
            graphics.fillStyle(theme.GRID_EMPTY, 1);
            graphics.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
            graphics.lineStyle(2, theme.GRID_FILLED, 0.2);
            graphics.strokeRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
        }
        graphics.generateTexture('block_empty', BLOCK_SIZE, BLOCK_SIZE);

        // Frozen
        if (this.textures.exists('block_frozen')) this.textures.remove('block_frozen');
        graphics.clear();

        if (currentMode === GRAPHIC_MODES.PAPER) {
            // Paper Frozen: Scribbled gray
            graphics.fillStyle(0x888888, 0.8);
            graphics.fillRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
            graphics.lineStyle(3, 0x222222, 0.8);
            graphics.strokeRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
            graphics.beginPath();
            graphics.moveTo(5, 5); graphics.lineTo(BLOCK_SIZE - 5, BLOCK_SIZE - 5);
            graphics.moveTo(BLOCK_SIZE - 5, 5); graphics.lineTo(5, BLOCK_SIZE - 5);
            graphics.strokePath();

        } else if (currentMode === GRAPHIC_MODES.NEON) {
            // Neon Frozen: Dark with glowing X
            graphics.fillStyle(0x222222, 0.9);
            graphics.fillRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
            graphics.lineStyle(2, 0xffffff, 1); // White Glow X
            graphics.strokeRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
            graphics.beginPath();
            graphics.moveTo(5, 5); graphics.lineTo(BLOCK_SIZE - 5, BLOCK_SIZE - 5);
            graphics.moveTo(BLOCK_SIZE - 5, 5); graphics.lineTo(5, BLOCK_SIZE - 5);
            graphics.strokePath();
            // Outer glow for frozen
            graphics.lineStyle(2, 0xffffff, 0.3);
            graphics.strokeRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);

        } else {
            // Standard Frozen
            graphics.fillStyle(0x888888, 1); // Neutral gray
            graphics.fillRect(0, 0, BLOCK_SIZE, BLOCK_SIZE);
            graphics.lineStyle(4, 0x333333, 1);
            graphics.strokeRect(2, 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
            graphics.lineStyle(3, 0x000000, 0.5);
            graphics.beginPath();
            graphics.moveTo(5, 5); graphics.lineTo(BLOCK_SIZE - 5, BLOCK_SIZE - 5);
            graphics.moveTo(BLOCK_SIZE - 5, 5); graphics.lineTo(5, BLOCK_SIZE - 5);
            graphics.strokePath();
        }
        graphics.generateTexture('block_frozen', BLOCK_SIZE, BLOCK_SIZE);

        // Card Back
        if (this.textures.exists('card_back')) this.textures.remove('card_back');
        graphics.clear();
        graphics.fillStyle(theme.GRID_EMPTY, 1);
        graphics.fillRect(0, 0, 100, 140);
        graphics.lineStyle(2, theme.GRID_FILLED, 1);
        graphics.strokeRect(0, 0, 100, 140);
        graphics.lineStyle(1, theme.GRID_FILLED, 0.3);
        for (let i = 0; i < 140; i += 10) { graphics.moveTo(0, i); graphics.lineTo(100, i); }
        graphics.strokePath();
        graphics.generateTexture('card_back', 100, 140);
    }

    onTimerTick() {
        if (gameState.gameOver || gameState.isPaused) return;

        if (!gameState.riskEnabled) {
            this.riskText.setText(this.getText('RISK_OFF_MSG'));
            return;
        }

        if (gameState.frozenBlock) {
            this.riskText.setText(this.getText('LOCKED'));
            return;
        }

        this.secondsLeft--;
        this.riskText.setText(`${this.getText('TIME')}: ${this.secondsLeft}s`);

        if (this.secondsLeft <= 0) {
            this.secondsLeft = 60;
            this.rotateTheme();
            if (gameState.riskEnabled) this.triggerCardRisk();
        }
    }

    rotateTheme() {
        // Rotate within the current mode's palettes
        currentPaletteIndex++;
        this.applyTheme();
    }

    applyTheme() {
        const theme = getTheme();
        // CSS Vars
        document.documentElement.style.setProperty('--bg-grad-1', theme.CSS.grad1);
        document.documentElement.style.setProperty('--bg-grad-2', theme.CSS.grad2);

        document.documentElement.style.setProperty('--bg-color', theme.CSS.bg);
        document.documentElement.style.setProperty('--gb-dark', theme.CSS.dark);
        document.documentElement.style.setProperty('--gb-light', theme.CSS.light);
        document.documentElement.style.setProperty('--gb-pale', theme.CSS.pale);

        // Phaser Colors
        this.cameras.main.setBackgroundColor(theme.BG);
        this.scoreText.setColor(theme.TEXT);
        this.bestText.setColor(theme.TEXT);
        this.riskText.setColor(theme.TEXT);
        this.btnPause.setColor(theme.TEXT);

        // Update Text Logic (in case lang changed or just refresh)
        this.scoreText.setText(`${this.getText('SCORE')}: ${gameState.score}`);
        this.bestText.setText(`${this.getText('BEST')}: ${gameState.bestScore}`);
        if (gameState.riskEnabled) {
            this.riskText.setText(`${this.getText('TIME')}: ${this.secondsLeft}s`);
        } else {
            this.riskText.setText(this.getText('RISK_OFF_MSG'));
        }

        this.generateTextures();
        this.refreshGridVisuals();
    }

    refreshGridVisuals() {
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                this.gridBlocks[r][c].bg.setTexture('block_empty');
                let val = gameState.grid[r][c];
                if (val === 1) this.gridBlocks[r][c].filled.setTexture('block_filled');
                else if (val === 2) this.gridBlocks[r][c].filled.setTexture('block_frozen');
                else this.gridBlocks[r][c].filled.setTexture('block_filled');
                this.gridBlocks[r][c].filled.visible = (val !== 0);
            }
        }
        this.handShapes.forEach(s => { if (s) s.each(c => { if (c.type === 'Image') c.setTexture('block_filled'); }); });
    }

    createGrid() {
        for (let r = 0; r < GRID_SIZE; r++) {
            this.gridBlocks[r] = [];
            for (let c = 0; c < GRID_SIZE; c++) {
                let bg = this.add.image(c * (BLOCK_SIZE + GAP), r * (BLOCK_SIZE + GAP), 'block_empty').setOrigin(0);
                this.gridContainer.add(bg);
                let bgFilled = this.add.image(c * (BLOCK_SIZE + GAP), r * (BLOCK_SIZE + GAP), 'block_filled').setOrigin(0);
                bgFilled.visible = false;
                bgFilled.alpha = 0;
                this.gridContainer.add(bgFilled);
                this.gridBlocks[r][c] = { bg, filled: bgFilled, value: 0 };
            }
        }
    }

    createHUD() {
        const style = { fontFamily: '"Press Start 2P"', fontSize: '18px', color: '#ffaaaa' };

        this.scoreText = this.add.text(this.game.config.width / 2, 60, '', style).setOrigin(0.5);
        this.bestText = this.add.text(this.game.config.width / 2, 90, '', { ...style, fontSize: '12px', alpha: 0.8 }).setOrigin(0.5);
        this.riskText = this.add.text(this.game.config.width / 2, 125, '', { ...style, fontSize: '16px' }).setOrigin(0.5);

        this.btnPause = this.add.text(this.game.config.width - 40, 50, '||', { fontSize: '24px', color: '#ffaaaa', fontStyle: 'bold' })
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => this.toggleSettings());

        // Init text
        this.updateScore(0);
        this.createModeButtons();
    }

    createModeButtons() {
        const x = 30;
        const y = 60;
        const gap = 35;

        // Mode 1: Standard
        let btn1 = this.add.text(x, y, '1', { fontFamily: '"Press Start 2P"', fontSize: '12px', color: '#ffffff', backgroundColor: '#555555', padding: { x: 5, y: 5 } })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.setGraphicMode(GRAPHIC_MODES.STANDARD));

        // Mode 2: Paper
        let btn2 = this.add.text(x + gap, y, '2', { fontFamily: '"Press Start 2P"', fontSize: '12px', color: '#000000', backgroundColor: '#fdfbf7', padding: { x: 5, y: 5 } })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.setGraphicMode(GRAPHIC_MODES.PAPER));

        // Mode 3: Neon
        let btn3 = this.add.text(x + gap * 2, y, '3', { fontFamily: '"Press Start 2P"', fontSize: '12px', color: '#00ffff', backgroundColor: '#000000', padding: { x: 5, y: 5 } })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.setGraphicMode(GRAPHIC_MODES.NEON));
    }

    setGraphicMode(mode) {
        if (currentMode === mode) return;
        currentMode = mode;
        currentPaletteIndex = 0; // Reset index on switch logic
        SOUNDS.BUTTON();
        this.applyTheme();
    }

    triggerCardRisk() {
        const overlay = this.add.container(0, 0);
        const w = this.game.config.width, h = this.game.config.height;

        let bg = this.add.rectangle(w / 2, h / 2, w, h, 0xffffff, 0.9).setInteractive(); // Whiteish
        overlay.add(bg);

        let title = this.add.text(w / 2, h / 2 - 160, this.getText('PICK_CARD'), { fontFamily: '"Press Start 2P"', fontSize: '24px', color: getTheme().TEXT }).setOrigin(0.5);
        overlay.add(title);

        const isHighStakes = gameState.score >= 5000;

        if (isHighStakes) {
            let warn = this.add.text(w / 2, h / 2 - 120, '!!! ' + this.getText('RISK') + ' !!!', { fontFamily: '"Press Start 2P"', fontSize: '16px', color: '#ff0000' }).setOrigin(0.5);
            this.tweens.add({ targets: warn, alpha: 0.2, duration: 300, yoyo: true, repeat: -1 });
            overlay.add(warn);
        }

        const card1 = this.createCard(w / 2 - 70, h / 2, overlay, isHighStakes);
        const card2 = this.createCard(w / 2 + 70, h / 2, overlay, isHighStakes);

        if (!isHighStakes) {
            let btnSkip = this.add.text(w / 2, h / 2 + 120, this.getText('SKIP'), { fontFamily: '"Press Start 2P"', fontSize: '16px', color: '#aaaaaa' })
                .setOrigin(0.5).setInteractive({ useHandCursor: true });
            btnSkip.on('pointerdown', () => { SOUNDS.BUTTON(); overlay.destroy(); });
            overlay.add(btnSkip);
        }
    }

    createCard(x, y, parent, highStakes) {
        let container = this.add.container(x, y);
        let back = this.add.image(0, 0, 'card_back');
        container.add(back);
        container.setSize(100, 140);
        container.setInteractive({ useHandCursor: true });

        container.on('pointerdown', () => {
            parent.each(c => { if (c.type === 'Container') c.disableInteractive(); });
            this.revealCard(container, parent, highStakes);
        });
        parent.add(container);
        return container;
    }

    revealCard(cardContainer, parent, highStakes) {
        SOUNDS.CARD_FLIP();

        // Dynamic Probability
        gameState.cardsDrawn++;
        let count = gameState.cardsDrawn;
        let unluckyChance = 0.40; // Default 1-3
        if (count >= 4 && count <= 5) unluckyChance = 0.45;
        else if (count >= 6 && count <= 7) unluckyChance = 0.50;
        else if (count >= 8) unluckyChance = 0.60;

        const isLucky = Math.random() >= unluckyChance; // if random(0-1) is >= 0.4, then 60% chance it is lucky. Wait, user said "unlucky chance"
        // User said: unlucky chance 40%. So isLucky = random > 0.40 (60% lucky)

        const theme = getTheme();

        let valWin = highStakes ? 250 : 100;
        let valLoss = highStakes ? -100 : -50;
        let frozenCount = highStakes ? 2 : 1;

        let msg = isLucky ? `+${valWin}` : `${valLoss}\n${frozenCount}X`;

        this.tweens.add({
            targets: cardContainer, scaleX: 0, duration: 150,
            onComplete: () => {
                cardContainer.removeAll(true);
                let face = this.add.rectangle(0, 0, 100, 140, theme.GRID_FILLED).setStrokeStyle(2, theme.TEXT);
                let txt = this.add.text(0, 0, msg, { fontFamily: '"Press Start 2P"', fontSize: '18px', color: '#ffffff', align: 'center' }).setOrigin(0.5);
                cardContainer.add([face, txt]);
                this.tweens.add({
                    targets: cardContainer, scaleX: 1, duration: 150,
                    onComplete: () => {
                        if (isLucky) {
                            SOUNDS.WIN();
                            this.updateScore(valWin);
                        } else {
                            SOUNDS.LOSS();
                            this.updateScore(valLoss);
                            this.applyFrozenPenalty(frozenCount);
                        }
                        this.time.delayedCall(1500, () => parent.destroy());
                    }
                });
            }
        });
    }

    applyFrozenPenalty(count) {
        let empties = [];
        for (let r = 0; r < GRID_SIZE; r++) { for (let c = 0; c < GRID_SIZE; c++) { if (gameState.grid[r][c] === 0) empties.push({ r, c }); } }

        for (let i = 0; i < count; i++) {
            if (empties.length > 0) {
                let idx = Phaser.Math.Between(0, empties.length - 1);
                let pick = empties[idx];
                empties.splice(idx, 1);
                // Last one becomes the 'tracked' one for text, simple enough.
                gameState.frozenBlock = pick;
                this.setGridCell(pick.r, pick.c, 2);
                SOUNDS.FREEZE();
            }
        }
    }

    placeRandomStartingBlocks() {
        let count = Phaser.Math.Between(3, 6);
        for (let i = 0; i < count; i++) {
            let r = Phaser.Math.Between(0, GRID_SIZE - 1);
            let c = Phaser.Math.Between(0, GRID_SIZE - 1);
            if (gameState.grid[r][c] === 0) this.setGridCell(r, c, 1);
        }
    }

    setGridCell(r, c, val) {
        gameState.grid[r][c] = val;
        let cell = this.gridBlocks[r][c];
        if (val === 0) {
            cell.filled.visible = false;
        } else {
            cell.filled.visible = true;
            cell.filled.alpha = 1;
            if (val === 2) cell.filled.setTexture('block_frozen');
            else cell.filled.setTexture('block_filled');
        }
    }

    spawnHandShapes() {
        this.handShapes = [];
        const zoneWidth = this.game.config.width / 3;
        const yPos = GRID_OFFSET_Y + GRID_WIDTH + 80;
        for (let i = 0; i < 3; i++) {
            let shapeDef = Phaser.Utils.Array.GetRandom(SHAPES);
            let shapeObj = this.createShapeObject(shapeDef, 0.6);
            shapeObj.x = zoneWidth * i + zoneWidth / 2; shapeObj.y = yPos;
            shapeObj.homeX = shapeObj.x; shapeObj.homeY = shapeObj.y; shapeObj.inHandIndex = i;
            shapeObj.setInteractive({ cursor: 'grab' });
            shapeObj.on('pointerdown', (pointer) => this.startDrag(pointer, shapeObj));
            this.add.existing(shapeObj);
            this.handShapes.push(shapeObj);
        }
    }

    createShapeObject(coords, scale = 1) {
        let container = this.add.container(0, 0);
        container.gridCoords = coords; container.layoutScale = scale;
        let maxX = 0, maxY = 0;
        coords.forEach(p => { if (p[1] > maxX) maxX = p[1]; if (p[0] > maxY) maxY = p[0]; });
        coords.forEach(p => {
            let blk = this.add.image(p[1] * (BLOCK_SIZE + GAP), p[0] * (BLOCK_SIZE + GAP), 'block_filled').setOrigin(0);
            container.add(blk);
        });
        let width = (maxX + 1) * (BLOCK_SIZE + GAP), height = (maxY + 1) * (BLOCK_SIZE + GAP);
        container.setSize(width, height); container.setDisplaySize(width * scale, height * scale);
        container.each(child => { child.x -= width / 2; child.y -= height / 2; });
        return container;
    }

    startDrag(pointer, shape) {
        if (gameState.gameOver || gameState.isPaused) return;
        this.dragObj = shape;
        this.children.bringToTop(shape);
        this.tweens.add({ targets: shape, scaleX: 1, scaleY: 1, duration: 100, ease: 'Back.out' });
        this.dragOffset.x = shape.x - pointer.x; this.dragOffset.y = shape.y - pointer.y;
        SOUNDS.BUTTON();
    }

    onDrag(pointer) {
        if (!this.dragObj || gameState.isPaused) return;
        this.dragObj.x = pointer.x + this.dragOffset.x; this.dragObj.y = pointer.y + this.dragOffset.y;
    }

    onDrop(pointer) {
        if (!this.dragObj) return;
        if (gameState.isPaused) {
            this.tweens.add({ targets: this.dragObj, x: this.dragObj.homeX, y: this.dragObj.homeY, scaleX: 0.6, scaleY: 0.6, duration: 200, ease: 'Cubic.out' });
            this.dragObj = null; return;
        }
        let shape = this.dragObj;
        let shapeTL_X = shape.x - shape.width / 2, shapeTL_Y = shape.y - shape.height / 2;
        let cellSize = BLOCK_SIZE + GAP;
        let col = Math.round((shapeTL_X - this.gridContainer.x) / cellSize);
        let row = Math.round((shapeTL_Y - this.gridContainer.y) / cellSize);

        if (this.canPlace(shape.gridCoords, row, col)) {
            this.placeShape(shape.gridCoords, row, col);
            this.handShapes[shape.inHandIndex] = null;
            shape.destroy();
            SOUNDS.PLACE();
            this.checkLines();
            this.checkGameOver();
            if (this.handShapes.every(s => s === null)) { this.spawnHandShapes(); this.checkGameOver(); }
        } else {
            this.tweens.add({ targets: shape, x: shape.homeX, y: shape.homeY, scaleX: 0.6, scaleY: 0.6, duration: 200, ease: 'Cubic.out' });
        }
        this.dragObj = null;
    }

    canPlace(coords, row, col) {
        for (let p of coords) {
            let r = row + p[0], c = col + p[1];
            if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE) return false;
            if (gameState.grid[r][c] !== 0) return false;
        }
        return true;
    }

    placeShape(coords, row, col) {
        for (let p of coords) this.setGridCell(row + p[0], col + p[1], 1);
        this.updateScore(10 + coords.length);
    }

    checkLines() {
        let candidateRows = [], candidateCols = [];

        // 1. Identify all fully filled rows/cols (ignoring frozen status for a moment)
        for (let r = 0; r < GRID_SIZE; r++) { if (gameState.grid[r].every(val => val !== 0)) candidateRows.push(r); }
        for (let c = 0; c < GRID_SIZE; c++) {
            let full = true;
            for (let r = 0; r < GRID_SIZE; r++) { if (gameState.grid[r][c] === 0) { full = false; break; } }
            if (full) candidateCols.push(c);
        }

        // 2. Filter Rows: A row is valid ONLY IF it has no 'active' frozen blocks (blocks that are not being cleared by a a column)
        // If a row contains a frozen block, that frozen block needs the column to be in candidateCols. If not, the WHOLE ROW is blocked.
        let validRows = candidateRows.filter(r => {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (gameState.grid[r][c] === 2) {
                    // Frozen block found. Is the intersecting column also full?
                    if (!candidateCols.includes(c)) return false; // Blocked!
                }
            }
            return true;
        });

        // 3. Filter Cols: Similar logic.
        let validCols = candidateCols.filter(c => {
            for (let r = 0; r < GRID_SIZE; r++) {
                if (gameState.grid[r][c] === 2) {
                    if (!candidateRows.includes(r)) return false; // Blocked!
                }
            }
            return true;
        });

        if (validRows.length > 0 || validCols.length > 0) {
            this.clearLines(validRows, validCols);
            SOUNDS.CLEAR();
            this.updateScore((validRows.length + validCols.length) * 100);
        }
    }

    clearLines(rows, cols) {
        let cellsToClear = [];
        let frozenCleared = false;

        // Since we already validated the locking logic in checkLines, we can just clear everything in valid rows/cols.
        // Frozen blocks in these lists are strictly those that met the condition.

        rows.forEach(r => {
            for (let c = 0; c < GRID_SIZE; c++) {
                cellsToClear.push({ r, c });
                if (gameState.grid[r][c] === 2) frozenCleared = true;
            }
        });
        cols.forEach(c => {
            for (let r = 0; r < GRID_SIZE; r++) {
                cellsToClear.push({ r, c });
                if (gameState.grid[r][c] === 2) frozenCleared = true;
            }
        });

        let unique = new Set(cellsToClear.map(o => `${o.r},${o.c}`));
        unique.forEach(key => {
            let [r, c] = key.split(',').map(Number);
            this.tweens.add({
                targets: this.gridBlocks[r][c].filled, alpha: 0, duration: 100, yoyo: true, repeat: 2,
                onComplete: () => this.setGridCell(r, c, 0)
            });
        });

        if (frozenCleared) {
            gameState.frozenBlock = null;
            this.secondsLeft = 60;
        }
    }

    updateScore(points) {
        // Calculate Multiplier based on Risk Probability
        let multiplier = 1;
        if (gameState.riskEnabled) {
            let count = gameState.cardsDrawn;
            let riskChance = 0.40;
            if (count >= 4 && count <= 5) riskChance = 0.45;
            else if (count >= 6 && count <= 7) riskChance = 0.50;
            else if (count >= 8) riskChance = 0.60;

            // Mapping: 0.4 -> 1x, 0.6 -> 1.6x. (Linear: M = 1 + (R-0.4)*3)
            // 0.4 -> 1
            // 0.5 -> 1.3
            // 0.6 -> 1.6
            // 0.7 -> 1.9 (approx 2)
            multiplier = 1 + (riskChance - 0.40) * 3;
        }

        gameState.score += Math.floor(points * multiplier);
        this.scoreText.setText(`${this.getText('SCORE')}: ${gameState.score}`);
        if (gameState.score > gameState.bestScore) {
            gameState.bestScore = gameState.score;
            this.bestText.setText(`${this.getText('BEST')}: ${gameState.bestScore}`);
            localStorage.setItem('blockPuzzleBest', gameState.bestScore);
        }
    }

    checkGameOver() {
        let activeShapes = this.handShapes.filter(s => s !== null);
        if (activeShapes.length === 0) return;
        let canMove = false;
        for (let s of activeShapes) {
            let coords = s.gridCoords;
            for (let r = 0; r < GRID_SIZE; r++) { for (let c = 0; c < GRID_SIZE; c++) { if (this.canPlace(coords, r, c)) { canMove = true; break; } } if (canMove) break; }
            if (canMove) break;
        }
        if (!canMove) {
            gameState.gameOver = true;
            SOUNDS.GAMEOVER();
            this.showGameOver();
        }
    }

    showGameOver() {
        const w = this.game.config.width, h = this.game.config.height;
        let overlay = this.add.rectangle(w / 2, h / 2, w, h, 0xffffff, 0.9).setInteractive(); // Light overlay
        let txt = this.add.text(w / 2, h / 2 - 50, this.getText('GAME_OVER'), { fontFamily: '"Press Start 2P"', fontSize: '40px', color: '#ff0000' }).setOrigin(0.5);
        let scoreTxt = this.add.text(w / 2, h / 2 + 20, `${this.getText('SCORE')}: ${gameState.score}`, { fontFamily: '"Press Start 2P"', fontSize: '20px', color: getTheme().TEXT }).setOrigin(0.5);
        let btn = this.add.text(w / 2, h / 2 + 100, '> ' + this.getText('RESTART') + ' <', { fontFamily: '"Press Start 2P"', fontSize: '20px', color: getTheme().TEXT }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.tweens.add({ targets: btn, scaleX: 1.1, scaleY: 1.1, duration: 800, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' });
        btn.on('pointerdown', () => this.restartGame());
    }

    restartGame() {
        this.scene.restart();
        gameState.score = 0;
        gameState.gameOver = false;
        gameState.isPaused = false;
        gameState.grid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
        gameState.frozenBlock = null;
        gameState.cardsDrawn = 0;
        SOUNDS.BUTTON();
    }

    toggleSettings() {
        if (this.settingsOverlay) {
            this.settingsOverlay.destroy();
            this.settingsOverlay = null;
            gameState.isPaused = false;
            return;
        }

        gameState.isPaused = true;

        const w = this.game.config.width, h = this.game.config.height, theme = getTheme();
        let cont = this.add.container(0, 0);

        // Menu BG 
        let bg = this.add.rectangle(w / 2, h / 2, 380, 480, theme.BG).setStrokeStyle(4, theme.GRID_FILLED);

        let title = this.add.text(w / 2, h / 2 - 180, this.getText('PAUSED'), { fontFamily: '"Press Start 2P"', fontSize: '24px', color: theme.TEXT }).setOrigin(0.5);

        let btnSound = this.add.text(w / 2, h / 2 - 120, `${this.getText('SOUND')}: ${soundEnabled ? this.getText('ON') : this.getText('OFF')}`, { fontFamily: '"Press Start 2P"', fontSize: '18px', color: theme.TEXT }).setOrigin(0.5).setInteractive();
        btnSound.on('pointerdown', () => { soundEnabled = !soundEnabled; btnSound.setText(`${this.getText('SOUND')}: ${soundEnabled ? this.getText('ON') : this.getText('OFF')}`); SOUNDS.BUTTON(); });

        let btnRisk = this.add.text(w / 2, h / 2 - 70, `${this.getText('RISK')}: ${gameState.riskEnabled ? this.getText('ON') : this.getText('OFF')}`, { fontFamily: '"Press Start 2P"', fontSize: '18px', color: theme.TEXT }).setOrigin(0.5).setInteractive();
        btnRisk.on('pointerdown', () => {
            gameState.riskEnabled = !gameState.riskEnabled;
            btnRisk.setText(`${this.getText('RISK')}: ${gameState.riskEnabled ? this.getText('ON') : this.getText('OFF')}`);
            if (!gameState.riskEnabled) this.riskText.setText(this.getText('RISK_OFF_MSG'));
            else this.riskText.setText(`${this.getText('TIME')}: ${this.secondsLeft}s`);
            SOUNDS.BUTTON();
        });

        // Lang
        const getLangLabel = () => gameState.lang === 'tr' ? 'DİL' : 'LANG';
        let btnLang = this.add.text(w / 2, h / 2 - 20, `${getLangLabel()}: ${gameState.lang.toUpperCase()}`, { fontFamily: '"Press Start 2P"', fontSize: '18px', color: theme.TEXT }).setOrigin(0.5).setInteractive();
        btnLang.on('pointerdown', () => {
            gameState.lang = gameState.lang === 'tr' ? 'en' : 'tr';
            btnLang.setText(`${getLangLabel()}: ${gameState.lang.toUpperCase()}`);
            SOUNDS.BUTTON();
            // Dynamic text refresh
            this.scoreText.setText(`${this.getText('SCORE')}: ${gameState.score}`);
            this.bestText.setText(`${this.getText('BEST')}: ${gameState.bestScore}`);
        });

        // Use theme.TEXT for buttons instead of white, for visibility on pastel options
        let btnTutorial = this.add.text(w / 2, h / 2 + 30, this.getText('TUTORIAL_BTN'), { fontFamily: '"Press Start 2P"', fontSize: '16px', color: theme.TEXT }).setOrigin(0.5).setInteractive();
        btnTutorial.on('pointerdown', () => { SOUNDS.BUTTON(); this.showTutorial(); });

        let btnRestart = this.add.text(w / 2, h / 2 + 100, `> ${this.getText('RESTART')}`, { fontFamily: '"Press Start 2P"', fontSize: '18px', color: theme.TEXT }).setOrigin(0.5).setInteractive();
        btnRestart.on('pointerdown', () => { SOUNDS.BUTTON(); this.restartGame(); });

        let btnResume = this.add.text(w / 2, h / 2 + 160, `> ${this.getText('RESUME')}`, { fontFamily: '"Press Start 2P"', fontSize: '18px', color: theme.TEXT }).setOrigin(0.5).setInteractive();
        btnResume.on('pointerdown', () => { this.toggleSettings(); SOUNDS.BUTTON(); });

        cont.add([bg, title, btnSound, btnRisk, btnLang, btnTutorial, btnResume, btnRestart]);
        cont.setDepth(999);
        this.settingsOverlay = cont;
    }

    showTutorial() {
        const w = this.game.config.width, h = this.game.config.height;
        let overlay = this.add.container(0, 0);
        let bg = this.add.rectangle(w / 2, h / 2, w - 40, h - 100, 0x000000).setStrokeStyle(4, 0xffffff);

        let title = this.add.text(w / 2, 100, this.getText('TUTORIAL_TITLE'), {
            fontFamily: '"Press Start 2P"', fontSize: '22px', color: '#ffff00', align: 'center'
        }).setOrigin(0.5);

        let body = this.add.text(w / 2, 150, this.getText('TUTORIAL_BODY'), {
            fontFamily: '"Press Start 2P"', fontSize: '14px', color: '#ffffff', align: 'center', lineSpacing: 10, wordWrap: { width: w - 80 }
        }).setOrigin(0.5, 0);

        let btnClose = this.add.text(w / 2, h - 80, this.getText('SKIP'), {
            fontFamily: '"Press Start 2P"', fontSize: '20px', color: '#aaaaaa'
        }).setOrigin(0.5).setInteractive();

        btnClose.on('pointerdown', () => { SOUNDS.BUTTON(); overlay.destroy(); });

        overlay.add([bg, title, body, btnClose]);
        overlay.setDepth(1000);
    }
}

const config = {
    type: Phaser.AUTO, width: 480, height: 800, backgroundColor: '#1a0505',
    parent: 'game-container', scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    pixelArt: true, scene: GameScene
};

const game = new Phaser.Game(config);
