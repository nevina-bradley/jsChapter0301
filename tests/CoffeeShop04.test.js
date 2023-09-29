const {camelCaseSpelling} = require('../src/CoffeeShop');

test('CamelCase spelling', () => {
    expect(camelCaseSpelling()).toBe(false);
});