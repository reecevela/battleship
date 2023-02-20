import { SHIP_TYPES, SHIP_LENGTHS } from "./types";
import Ship from "./ship"

const Gameboard = () => {
    const playerShips = {
        a: [],
        b: []
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
            playerShips[player].forEach(element => {
                if (element['name'] == ship) {
                    return false;
                }
            });
            // check locations
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
            // place ships 
            for (let i = 0; i < length; i++) {
                if (rotation === 'vertical') {
                    positions[player][y + i][x] = ship;
                } else {
                    positions[player][y][x + i] = ship;
                }
            }
            playerShips[player].push(new Ship(ship));
            return getPositions();
        } 
        return false;        
    } // end place() function
    return {place, getPositions, getPlayerShips};
}

export default Gameboard;