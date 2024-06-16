'use strict';
function largestPrimeFactor(number) {

    const prime_factors = [];
    let num_temp = number;
    let k = 2;
    while (true) {
        if (num_temp % k == 0) {
            prime_factors.push(k);
            if (num_temp == k) {
                break;
            }
            else {
                num_temp = num_temp / k;
            }
        }
        else {
            k += 1;
        }
    }
    return prime_factors[prime_factors.length - 1];
}
exports.largestPrimeFactor = largestPrimeFactor;