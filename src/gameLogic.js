import { Game } from "./constants.js";
import globals from "./globals.js";

export default function update(){

    switch(globals.gameState){

        case Game.PLAYING:

            updateGame();
            
        break;

    }
}

function updateGame(){

}