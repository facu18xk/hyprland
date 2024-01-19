const testing = require('./reduce.js');
describe('Sum', function () {
    test('Print the sum of the array"', function () {
        expect(testing(1, 2, 3)).toEqual(6);
    });
});
