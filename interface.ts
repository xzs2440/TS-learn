/**
 * interface 定义的属性，不可多亦不可少
 * 可选属性 在属性后添加 ?
 * 只读属性 在属性前添加 readonly
 * */
interface Person {
  readonly id: number;
  name: string;
  age?: number;
}
let daxin: Person = { id: 1, name: "daxin", age: 20 };
let daxin2: Person = { id: 2, name: "daxin" };
// daxin2.id=1111 //无法分配到 "id" ，因为它是只读属性。
// readonly是用在属性上的 , const是用在变量上的
