import { gqlBuilder } from "../";

test('should return empty object when the input is empty', () => {
    expect(gqlBuilder([])).toBe('{}');
});
test('should return correct value', () => {
    expect(gqlBuilder(["behnam"])).toBe(JSON.stringify({ behnam: {} }, null, "  ").replace(/\: \{\}|\:|\"|\:|\,/g, ""));
    expect(gqlBuilder([
        'customer.phoneNumber',
        'customer.name.firstName',
        'customer.name.lastName',
        'customer.email.mail',
        'fraudCase.caseNumber',
        'fraudCase.investigator',
        'score.algorithms.type',
        'score.algorithms.confidence'
    ])).toBe(JSON.stringify({
        customer: {
            phoneNumber: {},
            name: {
                firstName: {},
                lastName: {}
            },
            email: {
                mail: {}
            },
        },
        fraudCase: {
            caseNumber: {},
            investigator: {}
        },
        score: {
            algorithms: {
                type: {},
                confidence: {}
            }
        }
    }, null, '  ').replace(/\: \{\}|\:|\"|\:|\,/g, ""));
});
