const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let name = [];
    if (members == undefined || members == null || members == false)
        return false;
    for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) == 'string') {
            name.push(members[i].trim().substring(0, 1).toUpperCase());
        }
    }
    return (name.length > 0) ? String(name.sort().join('')) : false;
};