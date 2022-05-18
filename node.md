# 课程内容及流程

## 1. TypeeScript:

简单类型   复杂类型   接口-interface   类-class   泛型-Generics   声明文件

## 2. React

useState   useEffect   自定义Hook   useRef   useContext

## 3.CSS样式 

sass   variable,mixin,function   大型项目样式文件组织

## 4. 组件测试

jest   react-testing-Library   基础断言   行为模式   mock模块   mock实现

## 5. 第三库使用

react-transition   fontaweasome   axios

## 6. 开发和文档

storybook安装使用   编写stories   添加react-doc-gen   添加和使用addon   生成静态文件

## 7.更多内容

js模块类型   bundler的概念和使用   npm发布和配置   husky提交前验证   Travis CI/CD集成

设计图需求分析 ----> 初步确定组件属性和简单需求 ----> 初步编码实现 ----> 使用storybook 添加story 
----> 组件添加样式代码 -- 手动验证通过 --> 添加测试用例 -- 测试通过 --> 需求复杂升级 ----> 再次编码实现 
-- 手动验证通过 --> 升级测试用例 -- 测试通过 --> build生成 es6 modules -- build成功 --> npm pubulish 
-- 发布成功 --> 触发 travis ci/cd流程 -- travis测试通过 --> 发布文档 静态站点成功

## 编程语言的类型

  动态类型语言 (Dynamically Typed Language)
  静态类型语言 (Statically Typed Language)

## 2-1 Typescript是什么

javaacript that scales

静态类型风格的类型系统

从es6到es10甚至是esnext的语法支持

兼容各种浏览器,各种系统,各种服务器,完全开源

## 2-2 为什么要使用ts

### 2-2-1 程序更容易理解

​	问题:函数或方输入输出的参数类型,外部条件等

​	动态语言的约束:需要手动调试等过程

​	有个ts:代码本身就可以回答

### 2-2-2 效率更高

​	在不同的代码块和定义中进行跳转

​	代码自动补全

​	丰富的接口提示

### 2-2-3 更少错误

​	编译期间能够发现大部分的错误

​	杜绝一些比较常见错误

### 2-2-4 非常好的包容性

​	完全兼容js

​	第三方库可以单独编写类型文件

​	流行项目都支持Typescript-React、Vue、Ant design等

### 2-2-5 一点缺点

​	增加了一些学习成本

​	短期内增加一些开发成本

## 2-3 安装与初试

```tsx
//安装
npm install -g typescript
// 编译
tsc 文件名.ts
```

## 2-4 基础类型

​	原始数据类型 : Boolean Null Undefined Number BigInt String Symbol

​	Object数据类型  : Object

## 2-5 any类型和联合类型

## 2-6 Array与Tuple

## 2-7 interface 接口

- 对对象的形状（shape）进行描述
- 对类（class）进行抽象
- Duck Typing (鸭子类型)

## 2-8 函数和类型推断

## 2-9 类（Class）

- 类(Class):定义了一切事物的抽象特点
- 对象(Object):类的实例  -- 通过new来生成
- 面向对象(OOP)三大特性:

> ​		封装 -- 将数据的操作细节隐藏起来,只暴露对外的接口,外界通过访问这个接口获得访问的这个对象 
>
> ​		继承 -- 子类继承父类,子类除了拥有父类的特性外,还拥有更加具体的特性 
>
> ​		多态 -- 是由继承而产生的相关的不同的类,同一个方法可以有不同的响应

```tsx
//ts-node 
//安装
npm i -g ts-node
//编译ts文件
ts-node 文件名.ts
```
