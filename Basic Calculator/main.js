function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 == 0) {
                return "Can't divide by 0!";
            }
            return num1 / num2;
    }
}


console.log(calculator(2, '/', 2));
console.log(calculator(10, '-', 7))
console.log(calculator(2, '*', 16))
console.log(calculator(2, '-', 2))
console.log(calculator(15, '+', 26))
console.log(calculator(2, '+', 2))
console.log(calculator(2, "/", 0))