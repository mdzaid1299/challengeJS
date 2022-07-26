## Challenge

This sprint has 3 Challenges

### Problem Statements

--- 
#### Challenge 1 - Validators

Validation is a process whereby incorrectly formed data can be prevented from entering the system.

Write JavaScript program that performs validations on the given data as per the stated requirements.

The solution for this challenge should be written in `c1-submission.js` file.

The file is located inside the folder `c1-validators`.

##### Tasks

- Declare and initialize variables with values given below:

    | First Name| Last Name | Age | Is Married | City | State | Postal Code | 
    |-|-|-|-|-|-|-
    | James| Smith | 34 | true | San Jose | California | CA |

- Perform validations on the values as stated in table below:

    |    Field                          | Validation Criteria                      | Output for Invalid Values                   
    |---------------------------------- | ---------------------------------------- | --------------------------------------------
    | First Name                        | Value must be defined                    | First Name value must not be undefined 
    |                                   | Type should be a String                    | First Name value must be of type String 
    | Last Name                         | Type should be a String                    | Last Name value must be of type String value
    | Age                               | Value must be defined                    | Age value must not be undefined             
    |                                   | Type should be a Number                    | Age value must be of type Number        
    |                                   | Value should be between 18 and 60        | Age value should be between 18 and 60   
    | IsMarried                         | Type should be Boolean                   | IsMarried value must be of type Boolean     
    | City                              | Type should be a String                    | City value must be of type String           
    | State                             | Type should be a String                | State value must be of type String          
    | Postal Code                       | Value must be defined                    | Postal Code value must not be undefined     
    |                                   | Type should be a String                    | Postal Code value must be of type String

#### Challenge 2 - Know Your Lucky Number

### Problem Statement

As per a numerology logic, a person's lucky number is the single digit sum calculated from his birthdate.

For example, if the birthdate is 31052022

Lucky Number is 
- 31052022 --> 3 + 1 + 0 + 5 + 2 + 0 + 2 + 2 = 15 
   - 15 has 2 digits, hence continue next iteration to calculate sum of digits of 15.
- 15 --> 1 + 5 = 6
   - 6 is a single digit value, hence, the lucky number is **6**.

Write a JavaScript program that calculates single digit sum for the given date value.

```
Output: Your Lucky Number is 6
```

The solution for this challenge should be written in `c2-submission.js` file.

The file is located inside the folder `c2-lucky-number`.

##### Tasks

- Declare and initialize variables to store date `31052022`.
- Set up `do...while` loop that iterates till the sum is greater than 10
- Inside `do...while` loop, set up `while` loop that calculates sum of digits of the date value stored.
   - if the sum is greater than 10, `do...while` loop repeats with the sum of digits value as the new value for the `while loop`.
- Display the sum (which is the lucky number), after `do...while` loop terminates

#### Challenge 3 - Wat-a-Pizza​

### Problem Statement

Wat-a-pizza is a pizza delivery joint that became popular for its custom-made vegetarian pizzas. 

A customer can call the joint and order pizzas and other accompaniments. The joint is currently giving  discount of 10% on the total bill as a seasonal promotional offer.

Write a JavaScript program to store the details of a customer, the order details, and calculate the total bill amount and the discounted bill amount. Create various JavaScript functions to ​perform these operations.

#### Task - 1

- Create a JavaScript program with various global variables as listed in the table.​
- Initialize with the sample values for the given variables as shown in the table.
- Assign data based on the datatype specified

|Variables|Values|DataType|
|-|-|-|
|customerName| 	Gary|	String
|customerEmail| 	gary@123.com|	String
|phoneNo| 	14123123435|	String
|address| 	20, Marble Drive, Eville|	String
|noOfPizzasOrdered| 	10|	Number
|pizzaPrice| 	12.5| 	Number
|pizzaSize| 	M|	String
|noOfGarlicBreadOrdered| 	5|	Number
|garlicBreadPrice| 	5.99| 	Number
|noOfBeveragesOrdered |	10|	Number
|beveragePrice |	1.99| 	Number

#### Task - 2

- Write the below methods to display personal details of a customer and the menu details.​
    - `displayCustomerDetails(name, email, phoneNo, address)` –  To display the customer details.​
    - `displayMenu()` –  To display the menu as shown.
    ```
        Select the items to order
        -------------------------
        1) Pizza
           Price of one regular pizza: $9.99
           Price of one medium pizza: $11.99 
           Price of one large pizza: $9.99
        2) Garlic Bread
           Price of one Garlic Bread: $5.99
        3) Beverages
           Price of one Beverage: $1.99
    ```

#### Task - 3

- Write the below method to get the price of each of the items.​
    - `getPriceOfPizzaBasedOnSize(size)`: To accept the sizes of the pizza and return the price based on the given size as shown in the code.​
``` 
priceOfPizza=0;​
switch(size){​
    case 1: ​
        priceOfPizza = 9.99;​
        break;​
    case 2:​
        priceOfPizza = 11.99;​
        break;​
    case 3: ​
        priceOfPizza = 13.99;​
        break;​
    default:    ​
        alert('Invalid size, Enter 1,2 or 3');​
        priceOfPizza = 0;​
        break;​
   }
```
- Write the below methods that will return the price of garlic bread and beverage.​
    - `getPriceOfGarlicBread()`
    - `getPriceOfBeverage()`

#### Task - 4

- Write the below method to calculate the price of each item ordered and return the value.​
    - `calculatePrice(noOfItems, price)`– To calculate the price of the total number of items ordered and return the value.​
    
- Write the below methods to calculate the total bill amount and the final discounted bill amount.​
    - `calculateTotalBill(totalPizzaPrice, totalGarlicBreadPrice, totalBeveragePrice)` – To calculate the total bill amount of all the three items (pizza, garlic bread and beverages) combined and return the value.​
    - `calculateDiscountAndReturnBillAmount(totalBillAmount)` – To calculate discount on the total bill amount and return a value.​
        - If the total bill is greater than $50, calculate the discount and return the discounted bill amount.​
        - Else return the actual bill amount.​

#### Task - 5
- Write the below method to display the order details​.
    - `displayOrderDetails(noOfPizza, noOfGarlicBread, noOfBeverages, size,totalPrice, totalBillAmountAfterDiscount)` – To display the order details of a customer.​
```
Order Details 
-----------------
The number of pizzas ordered       : 10
The number of garlic bread ordered : 5
The number of beverages ordered    : 10
-----------------------------------------
The total bill amount is      : $149.75
The discounted bill amount is : $134.775
```

#### Task - 6
- Globally, perform the following functions. ​
    - Display the details of the customer​
    - Display the menu details for the customer to place order by calling the method `displayMenu()​​`
    - Call `calculatePrice()` thrice to calculate the totalPizzaPrice, totalGarlicBreadPrice and totalBeveragesPrice​

#### Task - 7
- Globally, perform the following functions.​
    - Call the appropriate methods to calculate the total bill amount, discounted bill amount, and  display customer order details. ​
- The final output to be shown below.​
```
Customer Details 
----------------
Name of the cutomer is       : Gary
Email of the customer is     : gary@123.com
Contact No of the customer is: 412312345
Address of the customer is   : 20, Marble Drive, Eville 
-------------------------------------------------------
Order Details 
-----------------
The number of pizzas ordered       : 10
The number of garlic bread ordered : 5
The number of beverages ordered    : 10
-----------------------------------------
The total bill amount is     : $149.74998
The discounted bill amount is: $134.775
```
**NOTE: The solution for this exercise should be provided in `c3-submission.js` file located inside the folder `c3-wat-a-pizza`.**
    

