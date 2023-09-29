const { createVariables} = require('../src/CoffeeShop');

test("Variable creation", () => {
    expect(createVariables()).toEqual({ coffeeType: "Latte", numberOfCoffees: 1 });
});