'use strict';
function fiboEvenSum(n) {

    let fib_even_sum = 0;
    let prev_num = 1;
    let curr_num = 2;

    while (true) {
        if (curr_num > n) {
            break;
        }
        else {
            if (curr_num % 2 == 0) {
                fib_even_sum += curr_num;
            }
            let temp = curr_num;
            curr_num = curr_num + prev_num;
            prev_num = temp;
        }
    }
    return fib_even_sum;
}
exports.fiboEvenSum = fiboEvenSum;