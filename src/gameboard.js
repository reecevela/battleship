import { SHIP_TYPES, SHIP_LENGTHS } from "./types";
import Ship from "./ship"

const Gameboard = () => {
    const playerShips = {
        a: {
            test: null,
            skiff: null,
            destroyer: null,
            cruiser: null,
            submarine: null,
            carrier: null
        },
        b: {
            test: null,
            skiff: null,
            destroyer: null,
            cruiser: null,
            submarine: null,
            carrier: null
        }
    };
    const getPlayerShips = (player = 'both') => {
        switch (player) {
            case 'both':
                return playerShips;
            case 'a':
                return playerShips['a'];
            case 'b':
                return playerShips['b'];
        }
    };
    const positions = {
        a: [
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
        ],
        b: [
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
        ]
    }
    const getPositions = () => {
        return positions;
    }
    const place = (ship, player, y, x, rotation = 'vertical') => {
        if (SHIP_TYPES.indexOf(ship) != -1 ) { // check ship name exists
            const length = SHIP_LENGTHS[ship];
            // check ship hasn't been placed already
            if (playerShips[player][ship] !== null) {
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
                    if (positions[player][y + i][x] != null) { 
                        //might need a different check later for when hits and misses are implmented
                        return false;
                    }
                } else {
                    if (positions[player][y][x + i] != null) { 
                        return false;
                    }
                }
            }
            // place ships (checked earlier so it doesn't have to be undone partway through)
            for (let i = 0; i < length; i++) {
                if (rotation === 'vertical') {
                    positions[player][y + i][x] = ship;
                } else {
                    positions[player][y][x + i] = ship;
                }
            }
            // add ship
            playerShips[player][ship] = new Ship(ship);
            return getPositions();
        } 
        return false;        
    } // end place() function
    const receiveAttack = (targetPlayer, x, y) => {
        const mark = positions[targetPlayer][y][x]
        if (mark == null) {
            return {miss: [targetPlayer, x, y]};
        }
        return playerShips[targetPlayer][mark].hit()
    }
    return {place, getPositions, getPlayerShips, receiveAttack};
}

export default Gameboard;