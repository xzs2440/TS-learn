/**
 * 封装
 * */
/**
 * public -- 公用的,其他属性都可以访问到 ts 默认是public
 * private -- 私有的 ,在属性前面 添加private
 * protected
 * readonly
 * */
class Animal {
  name: string;
  // public name: string;
  // private name: string; // 属性“name”为私有属性，只能在类“Animal”中访问
  // protected name: string;  // 属性“name”受保护，只能在类“Animal”及其子类中访问。
  // readonly name:string; //无法分配到 "name" ，因为它是只读属性。
  static categoies: string[] = ["mammal", "bird"]; //静态属性
  static isAnimal(a: any) {
    //静态方法
    return a instanceof Animal;
  }
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}
console.log(Animal.categoies);
const snake = new Animal("lily");
console.log(Animal.isAnimal(snake));

// console.log(snake.name);
// snake.name = "luck";
// console.log(snake.name);
// console.log(snake.run());

/**
 * 继承
 * */
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}
const xiaogou = new Dog("xiaobao");
// console.log(xiaogou.run());
// console.log(xiaogou.bark());

/**
 * 多态
 * */

class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
  run() {
    return "Meow, " + super.run();
  }
}

const maomao = new Cat("maomao");
// console.log(maomao.run());

/**
 * interface -- 特性的抽取
 * implements
 * extends
 * */
interface Rdaio {
  switchRadio(): void;
}
interface Battery {
  checkBatterySattus();
}
interface RdaioWithBttery extends Rdaio {
  checkBatterySattus();
}
class Car implements Rdaio {
  switchRadio() {}
}
// class Cellphone implements Rdaio, Battery {
class Cellphone implements RdaioWithBttery {
  switchRadio() {}
  checkBatterySattus() {}
}
