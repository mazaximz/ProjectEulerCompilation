'use strict';
function multiplesOf3Or5(number) {

    let sum_of_multiples = 0;
    for (let i = 2; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum_of_multiples += i;
        }
    }
    return sum_of_multiples;
}
exports.multiplesOf3Or5 = multiplesOf3Or5;