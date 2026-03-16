export const Game = {

    INVALID: -1,
    LOADING: 0,
    PLAYING: 1,
    GAME_OVER:2
};

export const FPS = 30;

export const Block = {

    WALL: 0,
    ROOM: 1
}

export const SpriteID = {
    
    PLAYER:   0,
    SPIDER:   1,
    MONEY:    2,
}

export const State = {
    
    DOWN:        0,
    UP:          1,
    LEFT:        2,
    RIGHT:       3,
}

export const Tile = {

    SIZE_16: 1,
}

export const Collision = {

    NO_COLISSION: -1,
    BORDER_UP: 0,
    BORDER_DOWN: 1,
    BORDER_LEFT: 2,
    BORDER_RIGHT: 3,
    STILL_UP:    6,
    STILL_LEFT:  7,
    STILL_DOWN:  5,
    STILL_RIGHT: 8,
}

export const Key = {

    UP:     38,       
    LEFT:   37,      
    DOWN:   40,       
    RIGHT:  39,       
}