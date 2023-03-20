let operator = prompt('What do you want to calculate? (+, -, *, /)');

let num1 = prompt('Enter the first number');
num1 = Number(num1);

let num2 = prompt('Enter the second number');
num2 = Number(num2);

let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

switch (operator) {
    case "+":
        alert(`${num1} + ${num2} = ${sum}`);
        break;
    case "-":
        alert(`${num1} - ${num2} = ${sub}`);
        break;
    case "*":
        alert(`${num1} * ${num2} = ${mult}`);
        break;
    case "/":
        alert(`${num1} / ${num2} = ${div}`);
        break;
    default:
        alert("Sorry that you don`t want to calculate");
}
