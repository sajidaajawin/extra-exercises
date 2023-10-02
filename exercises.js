for (let i = 0; i <= 5; i++) {
    alert(i);
}

let numbers = "";
for (let i = 0; i <= 5; i++) {
    numbers += i + " ";
}

alert(numbers);

let multiplesOfThree = "";
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        multiplesOfThree += i + " ";
    }
}

alert("Multiples of 3 in the range 0 to 20: " + multiplesOfThree);

let userNumber;

do {
    userNumber = parseInt(prompt("Please enter a number between 0 and 100:"));

    if (userNumber >= 0 && userNumber <= 100) {
        alert("You entered a valid number: " + userNumber);
    } else {
        alert("Error: Number out of range. Please enter a valid number between 0 and 100.");
    }
} while (userNumber < 0 || userNumber > 100);

let userNumber;

do {
    userNumber = prompt("Please enter a number between 0 and 100:");

    if (!isNaN(userNumber) && userNumber >= 0 && userNumber <= 100) {
        alert("You entered a valid number: " + userNumber);
        break;
    } else {
        alert("Error: Invalid input or number out of range. Please enter a valid number between 0 and 100.");
    }
} while (true);


let numbers = [];
for (let i = 0; i <= userNumber; i++) {
    if (i >= 0 && i <= 100) {
        numbers.push(i);
    }
}

numbers.sort((a, b) => b - a); 

alert("Numbers from 0 to " + userNumber + " in reverse order: " + numbers.join(", "));

let userInput;
let sum = 0;

do {
    userInput = parseInt(prompt("Please enter a positive integer:"));

    if (!isNaN(userInput) && userInput >= 0) {
       
        for (let i = 0; i <= userInput; i++) {
            sum += i;
        }
        alert("The sum of integers from 0 to " + userInput + " is: " + sum);
        break; 
    } else {
        alert("Error: Invalid input. Please enter a positive integer.");
    }
} while (true);


let userInput;
let sum = 0;

do {
    userInput = parseInt(prompt("Please enter a positive integer:"));

    if (!isNaN(userInput) && userInput >= 0) {
       
        for (let i = 0; i <= userInput; i++) {
            sum += i;
        }

       
        let average = sum / (userInput + 1);

        alert("The average of integers from 0 to " + userInput + " is: " + average);
        break; 
    } else {
        alert("Error: Invalid input. Please enter a positive integer.");
    }
} while (true);