'use strict';
function primeSummation(n) {

    const primes = sieveOfAtkin(n);
    let sum_of_primes = 0; let i = 0;
    while (primes[i] < n) {
        sum_of_primes += primes[i]
        i++;
    }
    return sum_of_primes;
}

function sieveOfAtkin(n) {

    let sieve = new Array(n);
    for (let i = 0; i < n; i++) {
        sieve[i] = false;
    }
    const S = [1, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49, 53, 59];
    const s1 = [1, 13, 17, 29, 37, 41, 49, 53]; const s2 = [7, 19, 31, 43]; const s3 = [11, 23, 47, 59];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        for (let j = 1; j <= Math.sqrt(n); j += 2) {
            let k = 4 * i ** 2 + j ** 2;
            if (mod_check(k,s1) && k <= n) {
                sieve[k] = !sieve[k];
            }
        }
    }
    for (let i = 1; i <= Math.sqrt(n); i += 2) {
        for (let j = 2; j <= Math.sqrt(n); j += 2) {
            let k = 3 * i ** 2 + j ** 2;
            if (mod_check(k, s2) && k <= n) {
                sieve[k] = !sieve[k];
            }
        }
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i - 1; j >= 0; j -= 2) {
            let k = 3 * i ** 2 - j ** 2;
            if (mod_check(k, s3) && k <= n) {
                sieve[k] = !sieve[k];
            }
        }
    }

    let W = [];
    for (let i = 0; i <= n / 60; i++) {
        W.push(Number(i));
    }
    let K = [];
    for (const element_w of W) {
        for (const element_s of S) {
            let k_addition = 60 * element_w + element_s;
            K.push(k_addition);
        }
    }
    for (const p of K) {
        if (p ** 2 > n) {
            break
        } else {
            let pp = p ** 2;
            if (sieve[p]) {
                for (const p2 of K) {
                    let c = pp * p2;
                    if (c > n) {
                        break
                    } else {
                        sieve[c] = false;
                    }
                }
            }
        }
    }

    
    let result_array = [2, 3, 5];
    for (let i = 7; i <= n; i++) {
        if (sieve[i]) {
            result_array.push(i);
        }
    }
    return result_array;
}

function mod_check(m, arr) {

    for (const x of arr) {
        if (m % 60 == x) {
            return true;
        }
    }
    return false;
}
exports.primeSummation = primeSummation;