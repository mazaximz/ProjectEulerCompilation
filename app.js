'use strict';
const { multiplesOf3Or5 } = require('./multiplesOf3Or5.js');
const { fiboEvenSum } = require('./fiboEvenSum.js');
const { largestPrimeFactor } = require('./largestPrimeFactor.js');
const { largestPalindromeProduct } = require('./largestPalindromeProduct.js');
const { smallestMult } = require('./smallestMult.js');
const { sumSquareDifference } = require('./sumSquareDifference.js');
const { nthPrime } = require('./nthPrime.js');
const { largestProductinaSeries } = require('./largestProductinaSeries.js');
const { specialPythagoreanTriplet } = require('./specialPythagoreanTriplet.js');
const { primeSummation } = require('./primeSummation.js');

const result1 = multiplesOf3Or5(1000);
console.log('Result:', result1);

const result2 = fiboEvenSum(4000000);
console.log('Result:', result2);

const result3 = largestPrimeFactor(600851475143);
console.log('Result:', result3);

const result4 = largestPalindromeProduct(3);
console.log('Result:', result4);

const result5 = smallestMult(20);
console.log('Result:', result5);

const result6 = sumSquareDifference(100);
console.log('Result:', result6);

const result7 = nthPrime(10001);
console.log('Result:', result7);

const result8 = largestProductinaSeries(13);
console.log('Result:', result8);

const result9 = specialPythagoreanTriplet(1000);
console.log('Result:', result9);

const result10 = primeSummation(2000000);
console.log('Result:', result10);