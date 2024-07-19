//Task 1
// let start = +prompt("Enter the start of the range:");
// let end = +prompt("Enter the end of the range:");
// let sum = 0;

// for (let i = start; i < end; i++) {
//   sum += i;
// }
// alert("The sum of the range is: " + sum);

//Task 2
// let num1 = +prompt("Input the first number:");
// let num2 = +prompt("Input the second number:");

// while (num2 !== 0) {
//   let temp = num2;
//   num2 = num1 % num2;
//   num1 = temp;
// }

// alert("The greatest common divisor (GCD) is: " + num1);

//Task 3
// let number = +prompt("Input a number:");
// let divisors = "";

// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     divisors += i + " ";
//   }
// }
// alert("Divisors the number are:" + divisors);

//Task 4
// let number = +prompt("Input a number:");

// if(number > 0){
//     let digitCount = 0;
//     while(number !== 0)
//     {
//         number = Math.floor(number / 10);
//         digitCount++;
//     }
//     alert("Number of digits in the entered number:" + digitCount);
// }else{
//     alert("Please enter a valid number.")
// }

//Task 5
// let userInput;
// let positives = 0,
//   negatives = 0,
//   zeros = 0;
// let evenCount = 0,
//   oddCount = 0;

// for (let i = 1; i <= 10; i++) {
//   userInput = prompt("Input a number:");

//   if (userInput >= 0 || userInput <= 0) {
//     if (userInput > 0) {
//       positives++;
//     } else if (userInput < 0) {
//       negatives++;
//     } else {
//       zeros++;
//     }

//     if (userInput % 2 === 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }
//   } else {
//     alert("Please enter a number.");
//     i--;
// }
// }
// alert("Positives: " + positives + "\nNegatives: " + negatives +  "\nZeros: " + zeros + "\nEven counts: " + evenCount + "\nOdd Counts: " + oddCount);

//Task 6
// do {
//     let number1 = +prompt("Enter the first number:");
//     let number2 = +prompt("Enter the second number:");
//     let operator = prompt("Enter the operator (+, -, *, /):");

//     let result;
//     switch (operator) {
//         case "+":
//             result = number1 + number2;
//             break;
//         case "-":
//             result = number1 - number2;
//             break;
//         case "*":
//             result = number1 * number2;
//             break;
//         case "/":
//             result = number1 / number2;
//             break;
//         default:
//             alert("Invalid operator!");
//             continue;
//     }

//     alert("Result: ${number1} ${operator} ${number2} = ${result}");

//     let answer = prompt("Do you want to solve another expression? (yes/no)");
//     if (answer !== "yes") {
//         break;
//     }
// } while (true);

// alert("Thank you for using the calculator!");

//Task 7
// let number = +prompt("Input a number:");
// let shiftAmount = parseInt(prompt("Input the shift amount:"));

// let num = Math.abs(number);
// let length = 0;
// while (num >= 1) {
//     num = Math.floor(num / 10);
//     length++;
// }
// let effectiveShift = shiftAmount % length;
// if (effectiveShift < 0) {
//     effectiveShift += length;
// }

// let divisor = Math.pow(10, length - effectiveShift);
// let frontPart = Math.floor(number / divisor);
// let backPart = number % divisor;

// let shiftedNumber = backPart * Math.pow(10, effectiveShift) + frontPart;

// alert(`Исходное число: ${number}\nСдвинутое число: ${shiftedNumber}`);

//Task 8
// let currentDayIndex = 0;

// do {
//     let day;
//     switch (currentDayIndex) {
//         case 0:
//             day = "Monday";
//             break;
//         case 1:
//             day = "Tuesday";
//             break;
//         case 2:
//             day = "Wednesday";
//             break;
//         case 3:
//             day = "Thursday";
//             break;
//         case 4:
//             day = "Friday";
//             break;
//         case 5:
//             day = "Saturday";
//             break;
//         case 6:
//             day = "Sunday";
//             break;
//     }

//     alert(day);
//     currentDayIndex = (currentDayIndex + 1) % 7;
// } while (confirm("Do you want to see the next day?"));

//Task 9 Почему не выводится??
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log('${i} * ${j} = ${i * j}');
//   }
// }

//Task 10

let lowerBound = 0;  
let upperBound = 100; 
let userResponse; 
let guess; 

alert("Загадайте число от 0 до 100 и нажмите ОК.");

while (lowerBound <= upperBound) {

    guess = Math.floor((lowerBound + upperBound) / 2);
    userResponse = prompt(`Ваше число больше ( > ), меньше ( < ) или равно ( == ) ${guess}?`);

    if (userResponse === "==") {
        alert(`Я угадал ваше число: ${guess}!`);
        break; 
    } else if (userResponse === ">") {
        lowerBound = guess + 1; 
    } else if (userResponse === "<") {
        upperBound = guess - 1; 
    } else {
        alert("Пожалуйста, ответьте только '>', '<' или '=='.");
    }
}

if (lowerBound > upperBound) {
    alert("ы Убедитесь, что вы правильно ответили.");
}

