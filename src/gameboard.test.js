import Gameboard from "./gameboard";

describe('Board Positions', () => {
    test('getPositions method returns', () => {
        const board = Gameboard();
        expect(board.getPositions()).toEqual(expect().anything());
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
        board.place('skiff', 'a', 2, 3)
        expect(board.getPositions()).toEqual(
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
        board.place('skiff', 'a', 2, 3, 'horizontal');
        expect(board.getPositions()).toEqual(
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
});

describe('Attacks', () => {
    test('', () => {

    });
    test('', () => {

    });
    test('', () => {

    });
});