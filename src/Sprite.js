import { Collision } from "./constants.js";

export default class Sprite{

    constructor(id, state, xPos, yPos, physics, hitBox){
        
        this.id = id;
        this.state = state;
        this.xPos = xPos;
        this.yPos = yPos;
        this.physics = physics; // Physics object
        this.hitBox = hitBox;
        this.isCollidingWithPlayer = false; // collision with player
        this.isCollidingWithObstacleOnTheTop = false;
        this.isCollidingWithObstacleOnTheLeft = false;
        this.isCollidingWithObstacleOnTheBottom = false;
        this.isCollidingWithObstacleOnTheRight = false;
    }
}