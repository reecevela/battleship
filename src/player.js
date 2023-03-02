import Gameboard from "./gameboard";

const Player = (playerName) => {
    let self = {
        active: false,
        name: playerName,
        board: null,
        opponent: null,
        oppBoard: null
    }
    const getName = () => {
        return self.name;
    }
    const setOpponent = (opp) => {
        self.opponent = opp;
        return opp.getName();
    }
    const setBoard = (board) => {
        self.board = board;
        return board;
    }
    const getBoard = () => {
        return self.board;
    }
    const setEnemyBoard = (board) => {
        self.oppBoard = board;
        return self.oppBoard;
    }
    const getEnemyBoard = () => {
        if (!self.oppBoard) {
            return setEnemyBoard(self.opponent.getBoard());
        }
        return self.oppBoard; 
    }
    const checkShot = (x, y) => {
        const board = getEnemyBoard(self.opponent);
        const pastShots = board.getShotsReceived();
        if (pastShots.indexOf(`${x} ${y}`) == -1) {
            return true;
        }
        return false;
    }
    const shoot = (x, y) => {
        const board = getEnemyBoard(self.opponent);
        //const positions = board.getPositions();
    }
    return {getName, getBoard, getEnemyBoard, setBoard, setEnemyBoard, setOpponent, checkShot, shoot}
};

export default Player;