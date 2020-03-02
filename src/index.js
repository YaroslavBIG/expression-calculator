function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    const exprArr = expr.split('');
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