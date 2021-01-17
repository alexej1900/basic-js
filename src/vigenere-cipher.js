const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }
    encrypt(str, keys) {
        if (str === undefined || keys === undefined) throw new Error();
        let message = str.toUpperCase();
        let key = keys.toUpperCase();
        let reg = /[A-Z]/;
        let mesArr = [];
        let keyArr = [];
        let mesEncrypt = [];
        for (let i of message) {
            if (reg.test(i) === true) mesArr.push(i.charCodeAt() - 65);
        }
        while (keyArr.length <= mesArr.length) {
            for (let i of key) keyArr.push(i.charCodeAt() - 65);
        }
        if (keyArr.length > mesArr.length) keyArr = keyArr.slice(0, mesArr.length);
        for (let i = 0; i < mesArr.length; i += 1) {
            mesArr[i] = String.fromCharCode((mesArr[i] + keyArr[i]) % 26 + 65);
        }
        let a = 0;
        for (let i of message) {
            if (reg.test(i) === true) {
                i = mesArr[a];
                a += 1;
            }
            mesEncrypt.push(i);
        }
        if (this.mode === true) return mesEncrypt.join("");
        return mesEncrypt.reverse().join("");
    }
    decrypt(str, keys) {
        if (str === undefined || keys === undefined) throw new Error();
        let message = str.toUpperCase();
        let key = keys.toUpperCase();
        let reg = /[A-Z]/;
        let mesArr = [];
        let keyArr = [];
        let mesDecrypt = [];
        for (let i of message) {
            if (reg.test(i) === true) mesArr.push(i.charCodeAt() - 65);
        }
        while (keyArr.length <= mesArr.length) {
            for (let i of key) keyArr.push(i.charCodeAt() - 65);
        }
        if (keyArr.length > mesArr.length) keyArr = keyArr.slice(0, mesArr.length);
        for (let i = 0; i < mesArr.length; i += 1) {
            mesArr[i] = mesArr[i] + 65 - keyArr[i];
            if (mesArr[i] < 65) {
                while (mesArr[i] < 65) mesArr[i] = mesArr[i] + 26;
            }
            mesArr[i] = String.fromCharCode((mesArr[i]));
        }
        let a = 0;
        for (let i of message) {
            if (reg.test(i) === true) {
                i = mesArr[a];
                a += 1;
            }
            mesDecrypt.push(i);
        }
        if (this.mode === true) return mesDecrypt.join("");
        return mesDecrypt.reverse().join("");
    }
}
module.exports = VigenereCipheringMachine;