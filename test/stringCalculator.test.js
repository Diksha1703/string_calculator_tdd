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

test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('should throw exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
});