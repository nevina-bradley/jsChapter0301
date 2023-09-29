const {caseSensitivity} = require('../src/CoffeeShop');

test('Case sensitivity', () => {
    expect(caseSensitivity()).toEqual({ CustomerName: "John", customerName: "Doe" });
});