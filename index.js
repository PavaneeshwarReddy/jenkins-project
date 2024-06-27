
class Users {
    constructor(userData) {
        this.users = userData;
    }

    getUser(username) {
        return this.users.find((user) => user.username === username);
    }

    getLocation(username) {
        const details = this.getUser(username);
        return details ? details.locationPincode : details;
    }

    getPassword(username) {
        const details = this.getUser(username);
        return details ? details.password : details;
    }

    getTotalUsers() {
        return this.users.length;
    }

}

class GroceryItems {
    constructor(items) {
        this.items = items;
    }

    getItem(name) {
        return this.items.find(item => item.name === name);
    }

    getPrice(name) {
        const item = this.getItem(name);
        return item ? item.price : null;
    }

    getStock(name) {
        const item = this.getItem(name);
        return item ? item.stock : null;
    }

    addItem(name, price, stock) {
        this.items.push({ name, price, stock });
    }

    getTotalItems() {
        return this.items.length;
    }
}


module.exports = {Users,GroceryItems}