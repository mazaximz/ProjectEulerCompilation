'use strict';
function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let a = 2; let b = 3;
    while (true) {
        let c = Math.sqrt(a ** 2 + b ** 2);
        if (a + b + c == n) {
            return a * b * c;
        } else if (a + b + c < n) {
            b++;
        } else {
            a++;
            b = a + 1;
        }
    }
}
exports.specialPythagoreanTriplet = specialPythagoreanTriplet;
