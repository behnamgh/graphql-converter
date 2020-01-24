import { queryBuilder } from "../";

test('should return empty object when the input is empty', () => {
    expect(queryBuilder([])).toBe('{}');
});
test('should return correct value', () => {
    expect(queryBuilder(["behnam"])).toBe(JSON.stringify({ behnam: {} }, null, '\t').replace(/\: \{\}|\:|\"|\:/g, ""));
});
