const sortPeople = require("./sort-the-people")


test('should sort people by height in descending order', () => {
    const names = ["Mary", "John", "Emma"];
    const heights = [180, 165, 170];
    const result = sortPeople(names, heights);
    expect(result).toEqual(["Mary", "Emma", "John"]);
});

test('should handle multiple people with the same height', () => {
    const names = ["Alice", "Bob", "Charlie", "Dave"];
    const heights = [160, 180, 170, 165];
    const result = sortPeople(names, heights);
    expect(result).toEqual(["Bob", "Charlie", "Dave", "Alice"]);
});

test('should handle a single person', () => {
    const names = ["Eve"];
    const heights = [150];
    const result = sortPeople(names, heights);
    expect(result).toEqual(["Eve"]);
});

test('should handle an empty array', () => {
    const names = [];
    const heights = [];
    const result = sortPeople(names, heights);
    expect(result).toEqual([]);
});

test('should handle large numbers of people', () => {
    const names = Array.from({length: 1000}, (_, i) => `Person${i}`);
    const heights = Array.from({length: 1000}, (_, i) => 1000 - i);
    const result = sortPeople(names, heights);
    expect(result).toEqual(names); // Since heights are in descending order
});

test('should handle large heights but limited names', () => {
    const names = ["Zoe", "Anna", "Liam"];
    const heights = [100000, 1000000, 500000];
    const result = sortPeople(names, heights);
    expect(result).toEqual(["Anna", "Liam", "Zoe"]);
});