// クラス
// public, protected, private


class User {
  /*
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  */

  constructor(public name: string) {
    this.name = name;
  }
  public sayHi(): void {
    console.log("hi! i am " + this.name);
  }
}

let tom = new User("Tom");

console.log(tom.name);
tom.sayHi();
