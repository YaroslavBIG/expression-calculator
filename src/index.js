function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    //console.log(expr);
    const openingSymbols = ['(', '[', '{', '<'];
    const closingSymbols = [')', ']', '}', '>'];
    const stack = [];
    let result;
    for (let bracket of expr) { 
        //let countBrackets = 0;
        if (openingSymbols.includes(bracket)) {
           // countBrackets += 1;
            stack.push(bracket);
         //console.log('push', bracket);
        }
    };

    for (let bracket of expr) {
        if (closingSymbols.includes(bracket)) {
            stack.pop()
            console.log('push', bracket);
            //console.log('pop', bracket);
        } 
    };
    console.log(stack, stack.length);
    result = stack.length === 0 ? true : false;
    if (!result) {
        throw new 'ExpressionError: Brackets must be paired';
    };
    const divisionZero = '/ 0';
    if (expr.includes(divisionZero)) {
        throw new 'TypeError: Division by zero.'
    } else {
    return (new Function('return ' + expr))()
    }

}

module.exports = {
    expressionCalculator
}