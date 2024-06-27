const { GroceryItems } = require("..");
const { groceryData } = require("../data");


test('GroceryItems class test cases', () => {
    const groceryItems = new GroceryItems(groceryData);

    expect(groceryItems.getItem("Apple")).toEqual({
        name: "Apple",
        price: 1.2,
        stock: 100
    });

    expect(groceryItems.getPrice("Banana")).toBe(0.5);

    expect(groceryItems.getStock("Carrot")).toBe(200);

    groceryItems.addItem("Fig", 2.5, 60);
    expect(groceryItems.getItem("Fig")).toEqual({
        name: "Fig",
        price: 2.5,
        stock: 60
    });

    expect(groceryItems.getTotalItems()).toBe(6);

    expect(groceryItems.getItem("NonExistentItem")).toBeUndefined();

    expect(groceryItems.getPrice("NonExistentItem")).toBeNull();

    expect(groceryItems.getStock("NonExistentItem")).toBeNull();
});
