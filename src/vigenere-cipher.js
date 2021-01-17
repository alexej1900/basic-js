const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }
    encrypt(str, key) {
        //if (this.mode) {
        let arr = 'abcdefghijklmnopqrstuvwxyz';
        let criptArr = [];
        while (str.length > 0) {
            for (let i = 0; i < key.length; i++) {
                if (typeof str[i] !== 'undefined' && arr.includes(str[i])) {
                    criptArr.push(arr[(arr.indexOf(str[i]) + arr.indexOf(key[i])) % 26]);
                } else if (!arr.includes(str[i])) {
                    criptArr.push(str[i]);
                }
            }
            str = (str.length > key.length) ? str.slice(key.length) : 0;
        }
        return criptArr.join('').toUpperCase();
        //}
    }
    decrypt() {
        if (!this.mode) {
            let arr = 'abcdefghijklmnopqrstuvwxyz';
            let cripotArr = [];
            while (str.length > 0) {
                for (let i = 0; i < key.length; i++) {
                    if ((typeof str[i] !== 'undefined') && arr.includes(str[i])) {
                        cripotArr.push(arr[((arr.indexOf(str[i]) + 26) - arr.indexOf(key[i])) % 26]);

                    } else if (!arr.includes(str[i])) {
                        cripotArr.push(str[i]);
                    }
                }
                str = (str.length > key.length) ? str.slice(key.length) : 0;
            }
            return cripotArr.join('').toUpperCase();
        }

    }
}

module.exports = VigenereCipheringMachine;