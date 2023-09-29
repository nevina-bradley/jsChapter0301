const { orderSummary } = require('../src/CoffeeShop');

test('Order summary', () => {
    expect(orderSummary()).toEqual({
        coffeeType: "Latte", 
        numberOfCoffees: 1,
        CustomerName: "John",
        customerName: "Doe",
        specialRequest: "extra cream",
        isOrderComplete: false,
        salesTaxRate: 0.07
    });
});
