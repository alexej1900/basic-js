const CustomError = require("../extensions/custom-error");

const chainMaker = {
    val: [],
    getLength() {
        return this.val.length;
    },
    addLink(value) {
        this.val.push('( ' + value + ' )');
        return this;
    },
    removeLink(position) {
        if (this.val[position - 1] === undefined || typeof position !== "number") {
            throw new Error();
            this.val = '';
        } else
            this.val.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.val.reverse();
        return this;
    },
    finishChain() {
        let a = String(this.val.join('~~'));
        this.val = '';
        return a;
    }
};

module.exports = chainMaker;