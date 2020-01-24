import converter from "../";

test('should return empty object when the input is empty', () => {
    expect(converter([])).toBe('{}');
});
test('should return correct value', () => {
    expect(converter(["behnam"])).toBe('{behnam}');
    expect(converter(["behnam"])).toBe('{behnam}');
    expect(converter(["behnam"])).toBe('{behnam}');
});
