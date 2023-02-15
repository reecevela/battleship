import Ship from "./ship";

describe('Ship Factory', () => {
    describe('properties', () => {
        const ship = Ship('skiff');
        test('length', () => {
            expect(ship.length).toBe(2);
        });
        test('not sunk', () => {
            expect(ship.sunk).toBe(false);
        });
    });
    describe('functions', () => {
        const ship = Ship('skiff');
        test('hit function returns', () => {
            expect(ship.hit()).toBeTruthy();
        });
        test('ship sinks when hit times equal to its length', () => {
            const sinkTestShip = Ship('skiff');
            for (let i = 0; i < sinkTestShip.length; i++) {
                sinkTestShip.hit();
            }
            expect(ship.sunk).toEqual(true);
        })
    });
});