// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    isRightTriangle() {
        return (this.a ** 2 + this.b ** 2 === this.c ** 2) ||
            (this.a ** 2 + this.c ** 2 === this.b ** 2) ||
            (this.b ** 2 + this.c ** 2 === this.a ** 2);
    }
}

let triangle = new Triangle(3, 4, 5);
console.log("Perimeter:", triangle.getPerimeter());
console.log("Area:", triangle.getArea());
console.log("Is Right Triangle:", triangle.isRightTriangle());


// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().
class Smartphone {
    constructor(brand, model, releaseYear) {
        this.brand = brand;
        this.model = model;
        this.releaseYear = releaseYear;
    }
}
class GamingPhone extends Smartphone {
    constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
        super(brand, model, releaseYear);
        this.gpuScore = gpuScore;
        this.batteryCapacity = batteryCapacity;
    }
    performanceIndex() {
        return (this.gpuScore / this.batteryCapacity) * 100;
    }
}

let gamingPhone = new GamingPhone("Asus", "ROG Phone 5", 2021, 9500, 6000);
console.log("Performance Index:", gamingPhone.performanceIndex());



// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
class CryptoWallet {
    constructor() {
        this.balance = 0;
        this.history = [];
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`Deposited: ${amount}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Withdrew: ${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    }
    transfer(amount, recipientWallet) {
        if (amount <= this.balance) {
            this.balance -= amount;
            recipientWallet.deposit(amount);
            this.history.push(`Transferred: ${amount} to recipient`);
        } else {
            console.log("Insufficient balance");
        }
    }
    getHistory() {
        return this.history;
    }
}

let myWallet = new CryptoWallet();
let friendWallet = new CryptoWallet();
myWallet.deposit(100);
myWallet.withdraw(30);
myWallet.transfer(50, friendWallet);
console.log("My Wallet Balance:", myWallet.balance);
console.log("Friend Wallet Balance:", friendWallet.balance);
console.log("My Wallet History:", myWallet.getHistory());


// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()
class Wishlist {
    constructor() {
        this.items = [];
        this.nextId = 1;
    }
    addItem(name, price) {
        const item = { id: this.nextId++, name, price };
        this.items.push(item);
        return item;
    }
    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    updateItem(id, newName, newPrice) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.name = newName;
            item.price = newPrice;
        }
        return item;
    }
    getItems() {
        return this.items;
    }
}

let wishlist = new Wishlist();
wishlist.addItem("Laptop", 1200);
wishlist.addItem("Smartphone", 800);
console.log("Wishlist Items:", wishlist.getItems());
wishlist.updateItem(1, "Gaming Laptop", 1500);
console.log("Updated Wishlist Items:", wishlist.getItems());
wishlist.deleteItem(2);
console.log("Final Wishlist Items:", wishlist.getItems());


// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
class Freelancer {
    constructor(hourlyRate) {
        this.hourlyRate = hourlyRate;
    }
    calculateEarnings(hoursWorked, bonusPerExtraHour = 0) {
        const standardHours = Math.min(hoursWorked, 160);
        const extraHours = Math.max(0, hoursWorked - 160);
        return (standardHours * this.hourlyRate) + (extraHours * (this.hourlyRate + bonusPerExtraHour));
    }
}

let freelancer = new Freelancer(50);
console.log("Earnings for 150 hours:", freelancer.calculateEarnings(150));
console.log("Earnings for 170 hours with bonus:", freelancer.calculateEarnings(170, 20));
console.log("Earnings for 200 hours with bonus:", freelancer.calculateEarnings(200, 30));
