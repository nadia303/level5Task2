//example for test
var obj = {
    hello: { cvalue: 1 },
    world: { cvalue: { yay: { cvalue: "2" } }
    }
};
/**
 * The function transforms (if it's possible) the values of the input object
 * or replaces it by 2021 and then adds it together
 * @param myObj is the object which the following function works with
 */
function add(myObj) {
    var x = Object.keys(myObj).map(function (key) {
        var _a;
        var elem = (_a = myObj[key]) === null || _a === void 0 ? void 0 : _a.cvalue;
        if (elem) {
            if (typeof elem === 'string') {
                var number = Number(elem);
                return Number.isNaN(number) ? 2021 : number;
            }
        }
        else {
            return 2021;
        }
    });
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log("The sum is " + add(obj));
