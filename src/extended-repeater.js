const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let addArr = [];
    let addStr = [];
    if (typeof options.additionRepeatTimes !== 'NULL') {
        for (let i = 0; i < (options.additionRepeatTimes ? options.additionRepeatTimes : 1); i++) {
            if (options.addition !== undefined) addArr.push(String(options.addition));
        };
    }
    for (let j = 0; j < (options.repeatTimes ? options.repeatTimes : 1); j++) {
        addStr.push(String(str) + addArr.join(options.additionSeparator ? options.additionSeparator : '|'));
    };
    return addStr.join(options.separator ? options.separator : '+');
};