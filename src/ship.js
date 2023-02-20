import { SHIP_LENGTHS } from "./types";

const Ship = (type) => {
    const length = SHIP_LENGTHS[type];
    let name = type;
    let hits = 0;
    let sunk = false;
    const hit = () => {
        hits++;
        if (hits >= length) {
            sunk = true;
        }
        return true;
    }
    const isSunk = () => {
        return sunk;
    }
    return {name, length, isSunk, hit};
}

export default Ship;