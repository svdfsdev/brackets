module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let stack = [];
    let openBrackets = bracketsConfig.map((el) => el[0]);
    let closeBrackets = bracketsConfig.map((el) => el[1]);

    for (let i = 0; i < str.length; i++) {
        let posClose = closeBrackets.indexOf(str[i]);
        let posOpen = openBrackets.indexOf(stack[stack.length - 1]);

        if (openBrackets.includes(str[i]) && closeBrackets.includes(str[i])) {
            if (str[i] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        } else {
            if (openBrackets.includes(str[i])) {
                stack.push(str[i]);
            } else if (posClose === posOpen) {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};
