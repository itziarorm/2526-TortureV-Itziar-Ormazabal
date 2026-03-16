import globals from "./globals.js";
import { Game, FPS, Block } from "./constants.js";
import { Level, level1 } from "./Level.js";
import { keydownHandler, keyupHandler } from "./events.js";

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
}

function initEvents(){

    //keyboard events
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
}


function initSprites(){

    initPlayer();
}

function initPlayer(){


}

function initLevel(){

    globals.level = new Level(level1);
}

export{

    initHTMLelements,
    initVars,
    initEvents,
    initSprites,
    initLevel
}