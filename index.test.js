const sum = require('./index');

test('adds 1, 3 to be 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 4, 4 to be 8', () => {
    expect(sum(4, 4)).toBe(8);
});
