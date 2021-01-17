const CustomError = require("../extensions/custom-error");
let val = [];
const chainMaker = {

    getLength() {
        return val.length;
    },
    addLink(value) {
        val.push('( ' + value + ' )');
        return this;
    },
    removeLink(position) {
        if (typeof(position) !== "number" || Number.isInteger(position) === false || position < 0 || position >= val.length) { val.length = 0; throw new Error() }
        val.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        val.reverse();
        return this;
    },
    finishChain() {
        let a = val.join('~~');
        val.length = 0;
        return a;
    }
};

module.exports = chainMaker;