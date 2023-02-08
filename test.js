let operator = prompt('What do you want to calculate? (+, -, *, /)');

let num1 = prompt('Enter the first number');
num1 = Number(num1);

let num2 = prompt('Enter the second number');
num2 = Number(num2);


switch (operator) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
    case '*':
        alert(num1 * num2);

    default:
        alert("Sorry you don`t want to calculate");
}