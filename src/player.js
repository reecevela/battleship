import Gameboard from "./gameboard";

const Player = (playerName) => {
    let self = {
        active: false,
        name: playerName,
        board: null,
        opponent: null
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
    const checkShotLegality = (board = self.opponent.getBoard(), x, y) => {

    }

    return {getName, getBoard, setBoard, setOpponent, checkShotLegality}
};

export default Player;