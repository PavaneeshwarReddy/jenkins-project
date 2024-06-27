const { Users } = require("..");
const { userData } = require("../data");


test('User class test cases', () => {
    const users = new Users(userData);

    expect(users.getUser("janeDoe")).toEqual({
        username: "janeDoe",
        password: "password123",
        phone: "234-567-8901",
        locationPincode: "20002"
    });

    expect(users.getLocation("johnSmith")).toBe("30003");

    expect(users.getPassword("aliceW")).toBe("alicePass");

    expect(users.getTotalUsers()).toBe(5);

    expect(users.getUser("nonExistentUser")).toBeUndefined();

    expect(users.getLocation("nonExistentUser")).toBeUndefined();

    expect(users.getPassword("nonExistentUser")).toBeUndefined();
});
