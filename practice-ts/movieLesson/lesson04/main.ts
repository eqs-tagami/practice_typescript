// 列挙型
// Signal

/*
enum Signal {
  Red = 0,
  Blue = 1,
  Yello = 2
}
*/

enum Signal {
  Red, //0
  Blue = 3,
  Yello, //4
}

var result: Signal;

// if (result === Signal.Yello) { ... }
// if (result === Signal['Yello']) { ... }

// console.log(Signal[2]); // Yello
console.log(Signal[0]);
console.log(Signal[3]);
console.log(Signal[4]);
