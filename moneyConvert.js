/**
 * Created by natalie on 10/27/15.
 */
var ranNum = require('./ranNumGen');

var money = function() {
    var convertNum = ranNum(100, 1000000);
    convertNum = convertNum.toFixed(2);
    convertNum = convertNum.toString();
    return "Account balance: \n$ " + convertNum;
};

module.exports = money;