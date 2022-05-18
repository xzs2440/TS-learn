/**
 * 泛型 -- generics
 * */

// function echo(agr: number): number {
//   return agr + 1;
// }
// const res = echo(123);

/**
 * 使用<T> -->相当于添加一个占位符/变量  <任意字符>
 * 将定义好的类型进行参数传入,原封不动的进行输出
 */
function echo<T>(agr: T): T {
  return agr;
}
const dstr: string = "dstr";
const res1 = echo(dstr);
const res2 = echo(123);
const res3 = echo(true);
// const res4:string = echo(true); //不能将类型“boolean”分配给类型“string”

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const swapres = swap(["string", 123]);
// console.log(swapres);

/**
 * 约束泛型
 * 在泛型中使用extends关键字,就可以让传入值满足一定的约束条件
 * */
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arrs = echoWithArr([1, 2, 3]);
// const arrs2 = echoWithArr("str"); //类型“string”的参数不能赋给类型“unknown[]”的参数。
interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const echoStr = echoWithLength("str");
const echoObj = echoWithLength({ length: 10, width: 10 });
const echoArr = echoWithLength([1, 2, 3]);
// const echoNum = echoWithLength(123); //类型“number”的参数不能赋给类型“IWithLength”的参数。
// console.log(echoStr, echoObj, echoArr);

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop().toFixed());

const queue2 = new Queue<string>();
queue2.push("str");
console.log(queue2.pop().length);

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: "str" };
let kp2: KeyPair<string, number> = { key: "test", value: 123 };

let arr: number[] = [1, 2, 3];
let arrTwo: Array<number> = [1, 2, 3];

interface IPlus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b;
}
const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
