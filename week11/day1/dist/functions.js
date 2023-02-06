"use strict";
const sayHi = () => {
    console.log("Hello");
};
const conv2Upper = (word) => {
    return word.toUpperCase();
};
const upper = conv2Upper("Jello is not a suitable salad substrate");
console.log(upper);
const Rando = (num) => {
    if (num)
        return num;
    const randomnum = Math.random();
    const stringnum = randomnum.toString();
    return stringnum;
};
