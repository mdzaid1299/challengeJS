//Declaring variables
let customerName = "Gary";

let customerEmail = "gary@123.com";

let phoneNo = "14123123435";

let address = "20, Marble Drive, Eville";

let noOfPizzasOrdered = 10;

let pizzaPrice = 12.5;

let pizzaSize = "M";

let noOfGarlicBreadOrdered = 5;

let garlicBreadPrice = 5.99;

let noOfBeveragesOrdered = 10;

let beveragePrice = 1.99;

// define function displayCustomerDetails() to display the details of customer passed as parameters.
function displayCustomerDetails(name, email, phoneNo, address) {
  console.log("Name of the cutomer is       : " + name);
  console.log("Email of the customer is     :" + email);
  console.log("Contact No of the customer is: " + phoneNo);
  console.log("Address of the customer is   :" + address);
}
// define funciton displayMenu() to raise an alert that displays the menu with
// category, item names and price
function displayMenu() {
  console.log("Select the items to order");
  console.log("-------------------------");
  console.log("1) Pizza");
  console.log(
    "\tPrice of one regular pizza: $9.99\n\tPrice of one medium pizza: $11.99\n\tPrice of one large pizza: $13.5"
  );
  console.log("2) Garlic Bread");
  console.log("\tPrice of one Garlic Bread: $5.99");
  console.log("3) Beverages");
  console.log("\tPrice of one Beverage: $1.99");
}
// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the
// size passed as parameter.
function getPriceOfPizzaBasedOnSize(pizzaSize) {
  priceOfPiza = 0;
  switch (pizzaSize) {
    case 1:
      priceOfPiza = 9.9;
      break;
    case 2:
      priceOfPiza = 11.99;
      break;
    case 3:
      priceOfPiza = 13.5;
      break;
    default:
      console.log("Invalid input");
  }
  return priceOfPiza;
}
// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
function getPriceOfGarlicBread() {
  return 5.99;
}
// define function getPriceOfBeverage() to return price of beverage as 1.99.
function getPriceOfBeverage() {
  return 1.99;
}
// define function calculatePrice() to return cost of items ordered for the
// no of items and price passed as parameters.
function calculatePizzaPrice(noOfItem, price) {
  return noOfItem * price;
}
function calculateGarlicPrice(noOfItems, price) {
  return noOfItems * price;
}
function calculateBeveragesPrice(noOfItems, price) {
  return noOfItems * price;
}

// define function calculateTotalBill() to return total bill amount from the
// total price of pizza, garlic bread and beverages ordered
function calculateTotalBill( totalPizzaPrice,totalGarlicBreadPrice,totalBeveragePrice) {
  return totalPizzaPrice + totalBeveragePrice + totalGarlicBreadPrice;
}
// define function calculateDiscountAndReturnBillAmount() to return discounted amount
// which will be calculated only if total bill is more than 50
function calculateDiscountAndReturnBillAmount(totalBillAmount) {
  let discount = 0;
  if (totalBillAmount > 50) {
    discount = totalBillAmount - (totalBillAmount * 5) / 100;
  } else {
    discount = totalBillAmount;
  }
  return discount;
}
// define function displayOrderDetails() to print the order details
function displayOrderDetails(
  noOfPizza,
  noOfGarlicBread,
  noOfBeverages,
  totalPrice,
  totalBillAmountAfterDiscount
) {
  console.log("Order Details ");
  console.log("-----------------");
  console.log("The number of pizzas ordered       : " + noOfPizza);
  console.log("The number of garlic bread ordered :" + noOfGarlicBread);
  console.log("The number of beverages ordered    :" + noOfBeverages);
  console.log("-----------------------------------------");
  console.log("The total bill amount is      :" + totalPrice);
  console.log(
    "The discounted bill amount is : " + totalBillAmountAfterDiscount
  );
}
//Main Program

// call the functions to compute order amount and display order details
displayCustomerDetails(customerName,customerEmail,phoneNo,address);

displayMenu();
let pizzaPrice1 = getPriceOfPizzaBasedOnSize(3);
let totalPizzaPrice = calculatePizzaPrice(noOfPizzasOrdered,pizzaPrice1);
let totalBeveragePrice = calculateBeveragesPrice(noOfBeveragesOrdered,getPriceOfBeverage());
let totalGarlicPrice = calculateGarlicPrice(noOfGarlicBreadOrdered,getPriceOfGarlicBread());
let totalPrice1 = totalPizzaPrice + totalBeveragePrice + totalGarlicPrice;
let totalBillAmountAfterDiscount1 = calculateDiscountAndReturnBillAmount(totalPrice1);
displayOrderDetails(noOfPizzasOrdered,noOfGarlicBreadOrdered,noOfBeveragesOrdered,totalPrice1,totalBillAmountAfterDiscount1);
