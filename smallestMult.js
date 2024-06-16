'use strict';
function smallestMult(n) {

    const number_array = [2];
    for (let i = 3; i <= n; i++) {
        let i_f = i;
        for (const element of number_array) {
            if (i_f % element == 0) {
                i_f = i_f / element;
            }
        }
        number_array.push(i_f);
    }

    let mult = 1;
    for (const element of number_array) {
        mult *= element;
    }
    return mult;
}
exports.smallestMult = smallestMult;