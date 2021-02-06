"use strict";
let a = {
    b: 'x'
};
a.b;
let b = {
    c: {
        d: 'f'
    }
};
let c = {
    firstName: 'john',
    lastName: 'barrowman'
};
class Person1 {
    constructor(firstName, // public => this.firstName = firstNameの略
    lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
c = new Person1('matt', 'smith');
let age = 55;
let driver = {
    name: 'James May',
    age: age
};
// Cat
let x = {
    name: 'Bonkers',
    purrs: true
};
// Dog
x = {
    name: 'Domino',
    barks: true,
    wags: true
};
// 両方
x = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
};
let y = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
};
// 配列
let s = [1, 2, 3]; // number[]
var t = ['a', 'b']; // string[]
let u = ['a']; // string[]
let v = [1, 'a']; // (string | number)[]
const w = [2, 'b']; // (string | number)[]
//# sourceMappingURL=index.js.map