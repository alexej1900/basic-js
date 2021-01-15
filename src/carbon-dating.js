const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (!sampleActivity || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || !isFinite(+sampleActivity) || sampleActivity == " " || typeof(parseInt(sampleActivity)) !== 'number') return false;

    let num = parseInt(sampleActivity);
    if (num <= 0 || num > 8999 || isNaN(parseInt(sampleActivity))) return false;



    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.ceil(Math.log2(MODERN_ACTIVITY / num) / k);
    return t;
};