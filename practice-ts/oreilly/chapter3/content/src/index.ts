let a = {
  b: 'x'
}
a.b

let b = {
  c: {
    d: 'f'
  }
}


let c: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowman'
}

class Person1 {
  constructor (
    public firstName: string,  // public => this.firstName = firstNameの略

    public lastName: string
  ) {}
}
c = new Person1('matt', 'smith')


// 型エイリアス
type Age = number;
type Person2 = {
  name: string
  age: Age
}

let age: Age = 55
let driver: Person2 = {
  name: 'James May',
  age: age
}


// 合併型と交差型
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let x: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true
}

// Dog
x = {
  name: 'Domino',
  barks: true,
  wags: true
}

// 両方
x = {
  name: 'Donkers',
  barks: true,
  purrs: true,
  wags: true
}

let y: CatAndDog = {
  name: 'Domino',
  barks: true,
  purrs: true,
  wags: true
}

// 配列
let s = [1, 2, 3]         // number[]
var t = ['a', 'b']        // string[]
let u: string[] = ['a']   // string[]
let v = [1, 'a']          // (string | number)[]
const w = [2, 'b']        // (string | number)[]