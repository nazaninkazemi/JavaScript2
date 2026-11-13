
let customerName = "Bahar";
let customerAge = 22;
let availableBalance = 100;

console.log("Customer Name:", customerName);
console.log("Customer Age:", customerAge);
console.log("Available Balance: $" + availableBalance);


console.log("Restaurant Menu");
console.log("1. Burger - $10");
console.log("2. Pizza - $15");
console.log("3. Sandwich - $8");
console.log("4. Pasta - $12");
console.log("5. Exit - $0");


let choice = 2;
let foodPrice = 0;
let foodName = "";

switch (choice) {
    case 1:
        foodName = "Burger";
        foodPrice = 10;
        console.log("You selected Burger. Price: $10");
        break;

    case 2:
        foodName = "Pizza";
        foodPrice = 15;
        console.log("You selected Pizza. Price: $15");
        break;

    case 3:
        foodName = "Sandwich";
        foodPrice = 8;
        console.log("You selected Sandwich. Price: $8");
        break;

    case 4:
        foodName = "Pasta";
        foodPrice = 12;
        console.log("You selected Pasta. Price: $12");
        break;

    case 5:
        console.log("Thank you for visiting!");
        break;

    default:
        console.log("Invalid selection!");
}


let quantity = 2;

let totalPrice = foodPrice * quantity;
let remainingBalance = availableBalance - totalPrice;
let additionalItemsCost = foodPrice * 3;

console.log("Food Price: $" + foodPrice);
console.log("Total Price: $" + totalPrice);
console.log("Remaining Balance: $" + remainingBalance);
console.log("Cost of 3 Additional Items: $" + additionalItemsCost);


console.log("Age >= 18:", customerAge >= 18);

console.log("Balance > Total Price:", availableBalance > totalPrice);

console.log("Quantity > 1:", quantity > 1);

console.log("Total Price == 0:", totalPrice == 0);

console.log("Remaining Balance >= 0:", remainingBalance >= 0);


if (customerAge < 18) {
    console.log("You are underage.");
} 
else if (availableBalance < totalPrice) {
    console.log("Insufficient balance.");
} 
else {
    console.log("Your order has been placed successfully!");
}


let paymentMethod = 2;

switch (paymentMethod) {
    case 1:
        console.log("Payment Method: Cash");
        break;

    case 2:
        console.log("Payment Method: Credit Card");
        break;

    case 3:
        console.log("Payment Method: Bank Transfer");
        break;

    default:
        console.log("Invalid payment method!");
}