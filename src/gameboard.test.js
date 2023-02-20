import Gameboard from "./gameboard";

describe('Board Positions', () => {
    test('getPositions method returns', () => {
        const board = Gameboard();
        expect(board.getPositions()).not.toBeNull();
    });
    test('Arrays are 10 by 10', () => {
        const board = Gameboard();
        expect(board.getPositions()).toEqual(
            {
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
        );
    });
    test('Places ship in array', () => {
        const board = Gameboard();
        expect(board.place('skiff', 'a', 2, 3)).toEqual(
            {
                a: [
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
        );
    });
    test('Places ship in array horizontally', () => {
        const board = Gameboard();
        expect(board.place('skiff', 'a', 2, 3, 'horizontal')).toEqual(
            {
                a: [
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
        );
    });
    test('Doesn\'t allow invalid ship names', () => {
        const board = Gameboard();
        expect(board.place('charizard', 'a', 2, 3)).toEqual(false);
    });
    test('Doesn\'t allow too low of ship positions', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 'a', 7, 4)).toEqual(false);
    });
    test('Doesn\'t allow too high of ship positions', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 'a', -1, 4)).toEqual(false);
    });
    test('Doesn\'t allow too left of ship positions', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 'a', 3, -2)).toEqual(false);
    });
    test('Doesn\'t allow too right of ship positions', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 'a', 5, 10)).toEqual(false);
    });
    test('Doesn\'t allow too low of ship positions horizontally', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 'a', 11, 4, 'horizontal')).toEqual(false);
    });
    test('Doesn\'t allow too high of ship positions horizontally', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 'a', -1, 4, 'horizontal')).toEqual(false);
    });
    test('Doesn\'t allow too left of ship positions horizontally', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 'a', 3, -2, 'horizontal')).toEqual(false);
    });
    test('Doesn\'t allow too right of ship positions horizontally', () => {
        const board = Gameboard();
        expect(board.place('destroyer', 'a', 5, 8, 'horizontal')).toEqual(false);
    });
    test('Doesn\'t allow overlapping ships on the same board', () => {
        const board = Gameboard();
        board.place('destroyer', 'a', 3, 2, 'horizontal');
        expect(board.place('cruiser', 'a', 1, 2)).toEqual('false');
    });
    test('Allows overlapping ships on separate boards', () => {
        const board = Gameboard();
        board.place('destroyer', 'b', 3, 2, 'horizontal');
        expect(board.place('cruiser', 'a', 1, 2)).not.toEqual('false');
    });
    test('Doesn\'t allow a ship to be placed twice', () => {
        const board = Gameboard();
        board.place('destroyer', 'b', 3, 2, 'horizontal');
        expect(board.place('destroyer', 'b', 4, 2, 'horizontal')).toEqual('false');
    });
    test('Allows different players to place the same ship', () => {
        const board = Gameboard();
        board.place('destroyer', 'b', 3, 2, 'horizontal');
        expect(board.place('destroyer', 'a', 4, 2, 'horizontal')).not.toEqual('false');
    });
});

describe('playerShips works', () => {
    test('Playerships by default returns both players', () => {
        const board = Gameboard();
        expect(board.getPlayerShips()).toEqual(
            {
                a: [],
                b: []
            }
        )
    });
    test('Playerships can return a single player\'s ships', () => {
        const board = Gameboard();
        expect(board.getPlayerShips('a')).toEqual([])
    });
    test('Playerships adds a new ship when placed', () => {
        const board = Gameboard();
        board.place('skiff', 'b', 3, 4);
        expect(board.getPlayerShips('b')[0].name).toBe('skiff');
    });
    test('Player ships are updated for both players', () => {
        const board = Gameboard();
        board.place('skiff', 'b', 3, 4);
        board.place('destroyer', 'a', 2, 4);
        expect(board.getPlayerShips('a')[0].name).toBe('destroyer');
        expect(board.getPlayerShips('b')[0].name).toBe('skiff');
    });
});

describe('Attacks', () => {
    test('', () => {

    });
    test('', () => {

    });
    test('', () => {

    });
});