/**
 * 函数声明
 * function
 * 在形参后边加上 ? 可变成可选参数
 * 在可选参数后边的形参,不能加入一个确定的形参
 * 在ts中,如果形参有默认值,ts会默认为该形参为可选参数
 * */

function add(x: number, y: number, z?: number, d: number = 10): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
}

let result = add(2, 6, 3);
let result1 = add(2, 6);

/**
 * 函数表达时候
 * 类型推论原则 -- ts在没有明确指定类型的时候,推测出类型
 * */
const add1 = function (x: number, y: number, z: number = 10): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
};
// const add2:string=add1 //不能将类型“(x: number, y: number, z?: number, d?: number) => number”分配给类型“string”
const add2: (x: number, y: number, z?: number) => number = add1;

let str = "str";
// str=123  //不能将类型“number”分配给类型“string”。
