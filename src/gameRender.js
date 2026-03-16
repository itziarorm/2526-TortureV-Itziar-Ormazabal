import globals from "./globals.js";
import { Game, Tile } from "./constants.js";

export default function render(){

    switch(globals.gameState){

        case Game.PLAYING:

            drawGame();

        break;

    }
}

function drawGame() {

    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);

    globals.ctx.font = "16px emulogic";
    globals.ctx.fillStyle = "white";
    globals.ctx.fillText("SCORE     " + globals.score, 10, 20);

    
    renderLevel();

}

function renderLevel(){

    const brickSize = 16;
    const levelData = globals.level.data;

    const num_fil = levelData.length;
    const num_col = levelData[0].length;

    globals.ctx.font = "14px emulogic";
    globals.ctx.fillStyle = "white";

    for(let i = 0; i < num_fil; ++i){

        for(let j = 0; j < num_col; ++j){

            if(levelData[i][j] === 0 ){
        
                const xPos = j * brickSize;
                const yPos = i * brickSize;

                const offsetX = 1;
                const offsetY = 1;

                globals.ctx.fillText(
                    
                    "\u2B1C",
                    30 + xPos + offsetX, 35 + yPos + brickSize - offsetY,
                );
        }   }
    }
}