'use strict';
function sumSquareDifference(n) {

    let sum1 = 0; let sm2 = 0;
    for (let i = 1; i <= n; i++) {
        sum1 += i ** 2;
        sm2 += i;
    }
    let sum2 = sm2 ** 2;
    return sum2 - sum1;
}
exports.sumSquareDifference = sumSquareDifference;