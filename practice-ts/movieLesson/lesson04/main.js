// 列挙型
// Signal
/*
enum Signal {
  Red = 0,
  Blue = 1,
  Yello = 2
}
*/
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 3] = "Blue";
    Signal[Signal["Yello"] = 4] = "Yello";
})(Signal || (Signal = {}));
var result;
// if (result === Signal.Yello) { ... }
// if (result === Signal['Yello']) { ... }
// console.log(Signal[2]); // Yello
console.log(Signal[0]);
console.log(Signal[3]);
console.log(Signal[4]);
