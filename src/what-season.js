const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (date == null || date == undefined || date == false) {
        return 'Unable to determine the time of year!';
    } else if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw Error;
    }
    let season = date.getMonth();
    return (season == 11 || season < 2) ? 'winter' : (season < 5) ? 'spring' : (season < 8) ? 'summer' : 'autumn';


};