/**
 * Create an obj with the index of the operation order
 * create the operations
 * create the pemdasAlgorithm 
 * return the algorithm  
 * export the calculate method
 */
//Operations
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const remainder = (a, b) => a % b;

const OPERATIONS = {
    "×": { precedence: 1, process: multiplication },
    "÷": { precedence: 1, process: division },
    "%": { precedence: 1, process: remainder },
    "+": { precedence: 0, process: sum },
    "-": { precedence: 0, process: subtract },
}
const getPrecedence = operator => OPERATIONS[operator].precedence;
/**
 * Do the operation based on the operator  
 * @param {*} a numberA
 * @param {*} b numberB 
 * @param {*} operator char operator
 * @returns 
 */
function operation(a, b, operator) {
    return OPERATIONS[operator].process(a, b);
}
/**
 * Order the operators based precedence 
 * @returns 
 */
function orderOperators(operators) {
    const result = operators.toSorted((operatorA, operatorB) => {
        let precedenceA = getPrecedence(operatorA);
        let precedenceB = getPrecedence(operatorB);
        if (precedenceA < precedenceB) return 1;
        else if (precedenceA === precedenceB) return 0;
        return -1;
    });
    return result;
}
// [12, "+", 4, /, 2]
const dummyData = { numbers: [12, 4, 2], operators: ["+", "÷"] };
function calculate(enteredValue) {
    const ONE = 1;
    const numbers = enteredValue.numbers;
    const operators = enteredValue.operators;
    const orderedOperators = orderOperators(operators);
    let operationsCount = 0;
    orderedOperators.forEach(el => {
        const index = (operationsCount > 0 && operators.indexOf(el) != 0) ? operators.indexOf(el) - 1 : operators.indexOf(el);
        const result = operation(numbers[index], numbers[index + ONE], el);
        numbers.splice(index, 2, result);
        operationsCount++;
    });
    return numbers;
}
console.log(calculate(dummyData));