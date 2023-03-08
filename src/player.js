import Gameboard from "./gameboard";

const Player = (playerName) => {
    let self = {
        active: false,
        name: playerName,
        board: null,
        opponent: null,
        oppBoard: null
    }
    // OPP INIT FUNCTIONS
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
    // BOARD INIT FUNCTIONS
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
    // SHOT FUNCTIONS
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
    //TURN FUNCTIONS
    const getActive = () => {
        return self.active;
    }
    const setActive = (bool = true) => {
        self.active = bool;
    }
    
    //AI FUNCTIONS

    return {
        getName, setOpponent, getOpponent,
        getBoard, getEnemyBoard, setBoard, setEnemyBoard, 
        checkShot, shoot,
        getActive, setActive
    };
};

export default Player;