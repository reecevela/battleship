import Player from "./player";
import Gameboard from "./gameboard";
import { describe } from "node:test";

describe('Player factory', () => {
    describe('Initial setup', () => {
        test('Player function exists', () => {
            const p = Player('reece');
            expect(p).not.toBe(undefined);
        });
        test('Set opponent works', () => {
            const p = Player('reece');
            const p2 = Player('john');
            expect(p.setOpponent(p2)).toEqual('john');
        });
        test('Set board works', () => {
            const p = Player('reece');
            const board = Gameboard();
            expect(p.setBoard(board)).toBe(board);
        });
    });
    describe('Game loop functions', () => {
        test('', () => {
            const p = Player('reece');
            expect(p)
        });
        test('', () => {
            const p = Player('reece');
            expect(p)
        });
        test('', () => {
            const p = Player('reece');
            expect(p)
        });
    });
});