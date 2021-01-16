const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, count, res) {
        let num = (count == undefined) ? 1 : count;
        let resArr = (res !== undefined) ? res : [];
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                num++;
                resArr.push(num);
                this.calculateDepth(arr[i], num, resArr);
                num = 1;
            }
        }
        return resArr.length == 0 ? 1 : Math.max.apply(0, resArr);
    }
};