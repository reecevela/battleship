import Gameboard from "./gameboard";

const Player = (playerName) => {
    let self = {
        active: false,
        name: playerName,
        board: null,
        opponent: null,
        oppBoard: null,
        pastShots: [],
        availableShots: []
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
    const recordShot = (x, y) => {
        self.pastShots.push(`${x} ${y}`);
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
        recordShot(x, y);
        if (result == true) {
            return 'hit';
        }
        return 'miss';
    }
    const getPastShots = () => {
        return self.pastShots;
    }
    //TURN FUNCTIONS
    const getActive = () => {
        return self.active;
    }
    const setActive = (bool = true) => {
        self.active = bool;
    }
    const passTurn = () => {
        const opp = self.opponent;
        if (getActive()) {
            setActive(false);
            opp.setActive();
            opp.receiveTurn();
        }
    }
    let receiveTurn = () => {
        return;
    }
    //AI FUNCTIONS
    if (self.name == 'AI') {
        const getAvailableShot = () => {
            const takenShots = self.pastShots;
            let availShots = [];
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (!takenShots.includes(`${i} ${j}`)) {
                        availShots.push({x: i, y: j});
                    }
                }
            }
            const randomAvailableShotIndex = Math.floor(Math.random() * availShots.length);
            const shotToTake = availShots[randomAvailableShotIndex];
            return shotToTake;
        }
        receiveTurn = () => {
            const shot = getAvailableShot();
            shoot(shot.x, shot.y);
            passTurn();
        }
        return {
            getName, setOpponent, getOpponent,
            getBoard, getEnemyBoard, setBoard, setEnemyBoard, 
            recordShot, checkShot, shoot, getPastShots, getAvailableShot,
            getActive, setActive, passTurn, receiveTurn
        };
    }
    return {
        getName, setOpponent, getOpponent,
        getBoard, getEnemyBoard, setBoard, setEnemyBoard, 
        recordShot, checkShot, shoot, getPastShots,
        getActive, setActive, passTurn, receiveTurn
    };
};

export default Player;