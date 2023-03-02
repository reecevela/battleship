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
        test('Get opponent board works without setEnemyBoard', () => {
            const p = Player('reece');
            const e = Player('AI');
            const eBoard = Gameboard();
            e.setBoard(eBoard);
            p.setOpponent(e);
            expect(p.getEnemyBoard(e)).toBe(eBoard);
        });
        test('Set opponent board works', () => {
            const p = Player('reece');
            const eBoard = Gameboard();
            p.setEnemyBoard(eBoard);
            expect(p.getEnemyBoard()).toBe(eBoard);
        });
    });
    describe('Game loop functions', () => {
        test('Player shots can sink the ships', () => {
            const p = Player('reece');
            const eBoard = Gameboard();
            p.setBoard(eBoard);
            eBoard.place('test', 0, 0);
            p.shoot(0,0);
            expect(eBoard.allSunk()).toBe(true);
        });
        test('Player.checkShot() work on empty spot', () => {

        });
        test('Player can shoot a ship on a board', () => {
            const p = Player('reece');
            expect(p)
        });
        
        test('AI Player makes shots by itself', () => {
            const p = Player('reece');
            expect(p)
        });
        test('AI Player doesn\'t repeat shots on the same spot', () => {
            const p = Player('reece');
            expect(p)
        });
    });
});