import Ship from "./ship";

describe('Ship Factory', () => {
    describe('properties', () => {
        const ship = Ship('test');
        test('length', () => {
            expect(ship.length).toBe(7);
        });
        test('not sunk', () => {
            expect(ship.isSunk()).toBe(false);
        });
    });
    describe('functions', () => {
        const ship = Ship('test');
        test('hit function returns', () => {
            expect(ship.hit()).toBeTruthy();
        });
        test('ship sinks when hit times equal to its length', () => {
            const testShip = Ship('test');
            for (let i = 0; i <= testShip.length; i++) {
                testShip.hit();
            }
            expect(testShip.isSunk()).toEqual(true);
        })
    });
});