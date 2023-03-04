import { SHIP_TYPES, SHIP_LENGTHS } from "./types";
import Ship from "./ship"

const Gameboard = () => {
    let shotsReceived = [];
    const getShotsReceived = () => {
        return shotsReceived;
    }
    const playerShips = {
        test: null,
        skiff: null,
        destroyer: null,
        cruiser: null,
        submarine: null,
        carrier: null
    };
    const getPlayerShips = () => {
        return playerShips;
    };
    const positions = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
    ];
    const getPositions = () => {
        return positions;
    }
    const allSunk = () => {
        for (const ship in playerShips) {
            if(playerShips[ship] !== null && playerShips[ship].isSunk() == false) {
                return false;
            }
        }
        return true;
    }
    const place = (ship, y, x, rotation = 'vertical') => {
        if (SHIP_TYPES.indexOf(ship) != -1 ) { // check ship name exists
            const length = SHIP_LENGTHS[ship];
            // check ship hasn't been placed already
            if (playerShips[ship] !== null) {
                return false;
            }
            // check locations are actually on the game board
            if (
                y < 0 || //too far up
                x < 0 || //too far left
                rotation == 'vertical' && y + length > 9 || //too low
                y > 9 || //too low also
                x > 9 || // too far to the right
                rotation == 'horizontal' && x + length > 9 //too far right
            ) {
                return false;
            }
            // make sure ships wouldn't be overlapping
            // by iterating through each empty space the ship would be taking
            for (let i = 0; i < length; i++) {
                if (rotation === 'vertical') {
                    if (positions[y + i][x] != null) { 
                        //might need a different check later for when hits and misses are implmented
                        return false;
                    }
                } else {
                    if (positions[y][x + i] != null) { 
                        return false;
                    }
                }
            }
            // place ships (checked earlier so it doesn't have to be undone partway through)
            for (let i = 0; i < length; i++) {
                if (rotation === 'vertical') {
                    positions[y + i][x] = ship;
                } else {
                    positions[y][x + i] = ship;
                }
            }
            // add ship
            playerShips[ship] = new Ship(ship);
            return getPositions();
        } 
        return false;        
    } // end place() function
    const receiveAttack = (x, y) => {
        if (shotsReceived.includes(`${x} ${y}`)) {
            return false;
        }
        // check locations are actually on the game board
        if (
            y < 0 || //too far up
            x < 0 || //too far left
            y > 9 || //too low also
            x > 9 // too far to the right
        ) {
            return false;
        }
        shotsReceived.push(`${x} ${y}`);
        const mark = positions[y][x];
        if (mark === null) {
            return {miss: [x, y]};
        }
        return playerShips[mark].hit()
    }
    return {place, getPositions, getPlayerShips, receiveAttack, getShotsReceived, allSunk};
}

export default Gameboard;