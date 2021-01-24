// 関数
// 関数の引数の後ろのnumberは返り値型
function add(a, b) {
    return a + b;
}
function addd(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a + a;
    }
}
function adddd(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
console.log(add(5, 3));
console.log(addd(5, 3));
console.log(addd(5));
console.log(adddd(5, 3));
console.log(adddd(5));
