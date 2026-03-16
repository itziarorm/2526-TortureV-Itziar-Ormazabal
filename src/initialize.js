import globals from "./globals.js";
import { Game, FPS, Block, SpriteID, State } from "./constants.js";
import { Level, level1 } from "./Level.js";
import { keydownHandler, keyupHandler } from "./events.js";
import Sprite from "./Sprite.js";
import Physics from "./Physics.js";
import HitBox from "./HitBox.js";

function initHTMLelements(){

    globals.canvas = document.getElementById('gameScreen');
    globals.ctx = globals.canvas.getContext('2d');

    globals.ctx.imageSmoothingEnabled = false;
}

function initVars(){

    globals.previousCycleMilliseconds = 0;
    globals.deltaTime = 0;
    globals.frameTimeObj = 1 / FPS;

    //initialize game countdown time
    globals.gameTime = 0;

    globals.gameState = Game.PLAYING;
    console.log(globals.gameState);

    globals.action = {
        
        moveLeft: false,
        moveRight: false,
        moveUp: false,
        moveDown: false,
    }

    globals.score = 0;
    globals.life = 3;
}

function initEvents(){

    //keyboard events
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
}

function initLevel(){

    globals.level = new Level(level1);
}

function initSprites(){

    initPlayer();
    initMoney();
    initSpider();
}

function initPlayer(){

    const physics = new Physics(0.25 * 64);

    const hitbox = new HitBox(14, 14, 16, 16);
    
    let xPos = 160;
    let yPos = 190;

    const text = "\u{1F474}";

    const player = new Sprite(SpriteID.PLAYER, State.DOWN, xPos, yPos, physics, hitbox, text);

    globals.sprites.push(player);
}

function initMoney(){

    const hitbox = new HitBox(14, 14, 16, 16);
    
    let xPos = 220;
    let yPos = 64;

    const text = "\u{1F4B5}";

    const money = new Sprite(SpriteID.MONEY, State.DOWN, xPos, yPos, 0, hitbox, text);

    globals.sprites.push(money);
}

function initSpider(){

    const physics = new Physics(0.25 * 32);

    const hitbox = new HitBox(14, 14, 16, 16);
    
    let xPos = 130;
    let yPos = 68;

    const text = "\u{1F577}";

    const player = new Sprite(SpriteID.SPIDER, State.DOWN, xPos, yPos, physics, hitbox, text);

    globals.sprites.push(player);
}

export{

    initHTMLelements,
    initVars,
    initEvents,
    initSprites,
    initLevel
}