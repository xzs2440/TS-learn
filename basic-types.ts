let isDone: boolean = false;

let age: number = 20;
let binaryNumber: number = 0b111;

let fistName: string = "daxin";
let message: string = `hello,${fistName},age is ${age}`;

let u: undefined = undefined;
let n: null = null;
/**
 * undefined和null 是所有类型的子类型,
 * 即undefined类型的变量可以赋值给number类型的变量
 * */

let num: number = undefined;

// any 允许赋值任意类型
let notSure: any = 4;
notSure = "daxin";
notSure = false;
notSure.myName;
notSure.getName();

// 联合类型
let numberOrString: number | string = 234;
numberOrString = "daxin";
// numberOrString=true //不能将类型“boolean”分配给类型“string | number”。

// Array
let arrOfNumber: number[] = [1, 2, 3];
arrOfNumber.push(5);
// arrOfNumber.push("str"); //类型“string”的参数不能赋给类型“number”的参数。

// 类数组
function test() {
  console.log(arguments);
  // arguments.length;
  // arguments[1];
  // let arr: any[] = arguments; //类型“IArguments”缺少类型“any[]”的以下属性: pop, push, concat, join 及其他 26 项
}

// Tuple-元组-合并不同类型的数组
let user: [string, number] = ["daxin", 20];
// user = ["daxin"]; //不能将类型“[string]”分配给类型“[string, number]”。源具有 1 个元素，但目标需要 2 个。
// user = ["daxin",20,true] //不能将类型“[string, number, boolean]”分配给类型“[string, number]”。源具有 3 个元素，但目标仅允许 2 个。

// interface 接口

