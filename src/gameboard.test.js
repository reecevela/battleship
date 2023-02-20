import Gameboard from "./gameboard";

describe('Board Positions', () => {
    test('getPositions method returns', () => {
        const board = Gameboard();
        expect(board.getPositions()).not.toBeNull();
    });
    test('Arrays are 10 by 10', () => {
        const board = Gameboard();
        expect(board.getPositions()).toEqual(
            [
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
        );
    });
    test('Places ship in array', () => {
        const board = Gameboard();
        expect(board.place('skiff', 2, 3)).toEqual(
            [
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, 'skiff', null, null, null, null, null, null],
                [null, null, null, 'skiff', null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null]
            ]
        );
    });
    test('Places ship in array horizontally', () => {
        const board = Gameboard();
        expect(board.place('skiff', 2, 3, 'horizontal')).toEqual(
            [
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, 'skiff', 'skiff', null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],               
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null]    
            ]    
        );
    });
    test('Doesn\'t allow invalid ship names', () => {
        const board = Gameboard();
        expect(board.place('charizard', 2, 3)).toEqual(false);
    });
    test('Doesn\'t allow too low of ship positions', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 7, 4)).toEqual(false);
    });
    test('Doesn\'t allow too high of ship positions', () => {
        const board = Gameboard();
        expect(board.place('destroyer', -1, 4)).toEqual(false);
    });
    test('Doesn\'t allow too left of ship positions', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 3, -2)).toEqual(false);
    });
    test('Doesn\'t allow too right of ship positions', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 5, 10)).toEqual(false);
    });
    test('Doesn\'t allow too low of ship positions horizontally', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 11, 4, 'horizontal')).toEqual(false);
    });
    test('Doesn\'t allow too high of ship positions horizontally', () => {
        const board = Gameboard();
        expect(board.place('destroyer', -1, 4, 'horizontal')).toEqual(false);
    });
    test('Doesn\'t allow too left of ship positions horizontally', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 3, -2, 'horizontal')).toEqual(false);
    });
    test('Doesn\'t allow too right of ship positions horizontally', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 5, 8, 'horizontal')).toEqual(false);
    });
    test('Doesn\'t allow overlapping ships on the same board', () => {
        const board = Gameboard();
        board.place('destroyer', 3, 2, 'horizontal');
        expect(board.place('cruiser', 1, 2)).toEqual(false);
    });
    test('Doesn\'t allow a ship to be placed twice', () => {
        const board = Gameboard();
        board.place('destroyer', 3, 2, 'horizontal');
        expect(board.place('destroyer', 4, 2, 'horizontal')).toEqual(false);
    });
});

describe('playerShips works', () => {
    test('Playerships adds a new ship when placed', () => {
        const board = Gameboard();
        board.place('skiff', 3, 4);
        expect(board.getPlayerShips()['skiff'].name).toBe('skiff');
    });
    test('Player ships are updated for both players', () => {
        const board = Gameboard();
        board.place('skiff', 3, 2);
        board.place('destroyer', 2, 4);
        expect(board.getPlayerShips()['destroyer']).not.toBe(null);
        expect(board.getPlayerShips()['skiff']).not.toBe(null);
    });
});

describe('Attacks', () => {
    test('Returns "miss" when it hits a null spot', () => {
        const board = Gameboard();
        board.place('destroyer', 3, 3);
        expect(board.receiveAttack(2, 4)).toEqual({miss: [2, 4]});
    });
    test('Doesn\'t shots to be off the board check 1', () => {
        const board = Gameboard();
        expect(board.receiveAttack(-1, 3)).toEqual(false);
    });
    test('Doesn\'t shots to be off the board check 2', () => {
        const board = Gameboard();
        expect(board.receiveAttack(1, -3)).toEqual(false);
    });
    test('Doesn\'t shots to be off the board check 3', () => {
        const board = Gameboard();
        expect(board.receiveAttack(11, 3)).toEqual(false);
    });
    test('Doesn\'t shots to be off the board check 3', () => {
        const board = Gameboard();
        expect(board.receiveAttack(1, 33)).toEqual(false);
    });
    test('Doesn\'t allow same spot to be hit multiple times', () => {
        const board = Gameboard();
        board.receiveAttack(3, 3);
        expect(board.receiveAttack(3, 3)).toEqual(false);
    });
    test('Doesn\'t allow same spot on ship to be hit multiple times', () => {
        const board = Gameboard();
        board.place('skiff', 3, 3);
        board.receiveAttack(3, 3);
        expect(board.receiveAttack(3, 3)).toEqual(false);
    });
    test('Sinks a ship', () => {
        const board = Gameboard();
        board.place('skiff', 3, 3);
        board.receiveAttack(3, 3)
        board.receiveAttack(3, 4)
        expect(board.getPlayerShips()['skiff'].isSunk()).toEqual(true);
    });
    test('Can tell when all ships are sunk', () => {
        const board = Gameboard();
        board.place('skiff', 3, 3);
        board.receiveAttack(3, 3);
        board.receiveAttack(3, 4);
        board.place('submarine', 2, 1, 'horizontal');
        board.receiveAttack(1, 2);
        board.receiveAttack(2, 2);
        board.receiveAttack(3, 2);
        expect(board.allSunk()).toBe(true);
    });
    test('Doesn\'t think all ships are sunk by default', () => {
        const board = Gameboard();
        board.place('cruiser', 3, 3);
        expect(board.allSunk()).toBe(false);
    });
});