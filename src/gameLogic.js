import { Game, SpriteID, State, Key } from "./constants.js";
import globals from "./globals.js";
import { Collision } from "./constants.js";
import detectCollisions from "./collisions.js";

export default function update(){

    switch(globals.gameState){

        case Game.PLAYING:

            playGame();
            
            break;
        case Game.GAME_OVER:
            
            gameOver();
            break;

            default:
                break;
    }
}

function playGame(){

    updateSprites();

    detectCollisions();

    isGameOver();
}

function updateSprites(){

    for(let i = 0; i < globals.sprites.length; ++i){

        const sprite = globals.sprites[i];
        updateSprite(sprite);
    
    }
}

function updateSprite(sprite){

    const type = sprite.id;
    switch(type){

        case SpriteID.PLAYER:

            updatePlayer(sprite);
            
            break;
        
        case SpriteID.SPIDER:

            updateSpider();

            break;

        case SpriteID.MONEY:

            break;
    }
}

function updatePlayer(sprite){

    readKeyboardAndAssignState(sprite);

    switch(sprite.state){

        case State.UP:

            sprite.physics.vx = 0;
            sprite.physics.vy = -sprite.physics.vLimit;
            break;
        
        case State.DOWN:
            
            sprite.physics.vx = 0;
            sprite.physics.vy = sprite.physics.vLimit;
            break;
        
        case State.RIGHT:

            sprite.physics.vx = sprite.physics.vLimit;
            sprite.physics.vy = 0;
            break;

        case State.LEFT:

            sprite.physics.vx = -sprite.physics.vLimit;
            sprite.physics.vy = 0;
            break;        
        
        default:
            sprite.physics.vx = 0;
            sprite.physics.vy = 0;
    }

    //calculate distance moved
    sprite.xPos += sprite.physics.vx * globals.deltaTime;
    sprite.yPos += sprite.physics.vy * globals.deltaTime;

}

function updateSpider(sprite){

    switch(sprite.state){

        case State.RIGHT_2:
            sprite.physics.vx = sprite.physics.vLimit;
            break;
        case State.LEFT_2:
            sprite.physics.vx = -sprite.physics.vLimit;
            break;
        default:
            console.error("ERROR: state invalid");
    }

    //calculate distance moved
    sprite.xPos += sprite.physics.vx * globals.deltaTime;

    //update animation frame
    updateAnimationFrame(sprite);

    //update direction randomly
    updateDirectionRandom(sprite);

    const isCollision = calculateCollisionWithBorders(sprite);

    if(isCollision){

        swapDirection(sprite);
    }
}

function swapDirection(sprite){

    sprite.state = sprite.state === State.RIGHT_2 ? State.LEFT_2 : State.RIGHT_2;
}

function updateDirectionRandom(sprite){

    //update counter
    sprite.directionChangeCounter += globals.deltaTime;

    //check if it's time to change direction
    if(sprite.directionChangeCounter > sprite.maxTimeToChangeDirection){

        //reset counter
        sprite.directionChangeCounter = 0;

        //set new random time to change direction between 1 and 8 seconds
        sprite.maxTimeToChangeDirection = Math.floor(Math.random() * 8) + 1;
        
        //swap direction
        swapDirection(sprite);
    }
}

function calculateCollisionWithBorders(sprite){

    let isCollision = false;

    //right border collision
    if(sprite.xPos + sprite.imageSet.xSize > globals.canvas.width){

        isCollision = true;
    }

    //left border collision
    else if(sprite.xPos < 0){

        isCollision = true;
    }

    return isCollision;
}

function readKeyboardAndAssignState(sprite){

    sprite.state = globals.action.moveLeft ? State.LEFT :               //Left key pressed
                   globals.action.moveRight ? State.RIGHT :             //Right key pressed
                   globals.action.moveUp ? State.UP :                   //Up key pressed
                   globals.action.moveDown ? State.DOWN :               //Down key pressed
                   sprite.state === State.LEFT ? State.STILL_LEFT :     //No key pressed, previous state left
                   sprite.state === State.RIGHT ? State.STILL_RIGHT :   //No key pressed, previous state right
                   sprite.state === State.UP ? State.STILL_UP :         //No key pressed, previous state up
                   sprite.state === State.DOWN ? State.STILL_DOWN :     //No key pressed, previous state down
                   sprite.state;
}

function isGameOver(){

}

function gameOver(){


}