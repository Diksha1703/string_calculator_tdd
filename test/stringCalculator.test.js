const add = require('../src/stringCalculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return number itself for a single number string', () => {
    expect(add("1")).toBe(1);
});

test('should return sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});