// 関数

// 関数の引数の後ろのnumberは返り値型
function add(a: number, b: number): number {
  return a + b;
}

function addd(a: number, b?: number): number {
  if (b) {
    return a + b;
  } else {
    return a + a;
  }
}

function adddd(a: number, b: number = 10): number {
  return a + b;
}

console.log(add(5, 3));
console.log(addd(5, 3));
console.log(addd(5));
console.log(adddd(5,3));
console.log(adddd(5));

