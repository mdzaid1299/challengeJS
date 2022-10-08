let n = 31052022;
// Write solution code here to find the lucky number

let sum = 0;
let sum2 = 0;
while (n != 0) {
  let remender = n%10
sum = sum +remender
  n = parseInt(n / 10);
}
console.log(`After extracting sum of numbers =  ${sum}`);
while (sum != 0) {
  sum2 = sum2 + (sum % 10);
  sum = parseInt(sum / 10);
}
console.log(`Your Lucky Number is ${sum2}`);
