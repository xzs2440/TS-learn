/**
 * 枚举 - enum
 * 当枚举项存在赋值且值为number的时候,后边的枚举项会自行递增
 * 在 enum前面添加const 即变为常量枚举
 * */

const enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
// console.log(Direction.Up);
// console.log(Direction[3]);
const value = "UP";
if (value === Direction.Up) {
  console.log("go up!");
}
