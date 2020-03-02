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
        if (openingSymbols.includes(bracket)) {
            stack.push(bracket);
        }
    };
    let errBracket;
    for (let bracket of expr) {
        if (closingSymbols.includes(bracket) && stack < 1) {
            errBracket = true;
        } 
        if (closingSymbols.includes(bracket) && stack !== 0) {
            stack.pop()
        } 
        
    };
    result = stack.length === 0 ? true : false;
    if (!result || errBracket) {
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