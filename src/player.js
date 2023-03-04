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
    const setOpponent = (opp, player = false) => {
        self.opponent = opp;
        if (player && !opp.getOpponent()) {
            opp.setOpponent(player);
        }
        return opp.getName();
    }
    const getOpponent = () => {
        return self.opponent;
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
        return self.oppBoard ?? setEnemyBoard(self.opponent.getBoard());
    }
    const checkShot = (x, y) => {
        const board = getEnemyBoard();
        const pastShots = board.getShotsReceived();
        if (
            y < 0 || //too far up
            x < 0 || //too far left
            y > 9 || //too low also
            x > 9 // too far to the right
        ) {
            return false;
        }
        if (pastShots.indexOf(`${x} ${y}`) == -1) {
            return true;
        }
        return false;
    }
    const shoot = (x, y) => {
        const board = getEnemyBoard();
        let result;
        if (checkShot(x, y)) {
            result = board.receiveAttack(x, y)
        } else {
            return false;
        }
        if (result == true) {
            return 'hit';
        }
        return 'miss';
    }
    return {getName, getBoard, getEnemyBoard, setBoard, setEnemyBoard, setOpponent, getOpponent, checkShot, shoot};
};

export default Player;