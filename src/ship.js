import { SHIP_LENGTHS } from "./types";

const Ship = (type) => {
    const length = SHIP_LENGTHS[type];
    let hits = 0;
    let sunk = false;
    const hit = () => {
        hits++;
        return true;
    }
    return {length, sunk, hit};
}

export default Ship;