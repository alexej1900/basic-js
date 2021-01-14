const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw 'Error';
    let resArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == '--double-prev') resArr.push(arr[i - 1]);
        else if (arr[i] == '--double-next') {
            resArr.push(arr[i + 1]);
        } else if (arr[i] == '--discard-prev') {
            resArr.pop();
        } else if (arr[i] == '--discard-next') {
            i += 2;
        } else resArr.push(arr[i]);

        /*       if (typeof(arr[i]) == 'number') resArr.push(arr[i]);
                else if (arr[i] == '--double-prev') {
                    if (typeof(arr[i - 1]) == 'number') resArr.push(arr[i - 1]);
                } else if (arr[i] == '--double-next') {
                    if (typeof(arr[i + 1]) == 'number') resArr.push(arr[i + 1]);
                } else if (arr[i] == '--discard-prev') {
                    if (typeof(arr[i - 1]) == 'number') resArr.pop();
                } else if (arr[i] == '--discard-next') {
                    if (typeof(arr[i + 1]) == 'number') i += 2;
                }*/
    }
    return resArr
};