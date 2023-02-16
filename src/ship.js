import { SHIP_LENGTHS } from "./types";

const Ship = (type) => {
    const length = SHIP_LENGTHS[type];
    let hits = 0;
    let sunk = false;
    const hit = () => {
        hits++;
        if (hits >= length) {
            sunk = true;
        }
        console.log({hits, sunk});
        return true;
    }
    const isSunk = () => {
        return sunk;
    }
    return {length, isSunk, hit};
}

export default Ship;