/**
 * 1.泛型的概念：指在定义函数、接口或类的时候，不预定指定具体的类型，而在使用的时候再指定类型的一种特性**，使用标识符号<T>
 * 2.标识符号<T>,
 * 3.一定要考虑当前传的参数是否有这个属性
 * 4.泛型的约束：
 * 
*/
/**
 * new Array(),创建数组的长度
 * .fill,填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充
*/
// const getArray = (value: any,times:number=5):any[]=>{
//     return new Array(times).fill(value);
// };

// let result=getArray([1],2)
// console.log(result,'result');
// result.forEach(item=>{
//     console.log(item);
//     console.log(item.length);
// });
// // /**
// //  * 每个item都是一个数组
// // */

// let result1=getArray(1,2)
// console.log(result1,'result1');
// result1.forEach(item=>{
//     //  item  是一个数字
//     console.log(item.length); //  Error,item不存在length这个数据
// })


// const getArray = (value: any,times:number=5):any[]=>{
//     return new Array(times).fill(value);
// };

// let result=getArray([1],2)
// console.log(result,'result');
// result.forEach(item=>{
//     console.log(item);
//     console.log(item.length);
// });
// // /**
// //  * 每个item都是一个数组
// // */

// let result1=getArray(1,2)
// console.log(result1,'result1');
// result1.forEach(item=>{
//     //  item  是一个数字
//     console.log(item.length); //  Error,item不存在length这个数据
// })


// const getArray = (value: any,times:number=5):any[]=>{
//     return new Array(times).fill(value);
// };

// let result=getArray([1],2)
// console.log(result,'result');
// result.forEach(item=>{
//     console.log(item);
//     console.log(item.length);
// });
// // /**
// //  * 每个item都是一个数组
// // */

// let result1=getArray(1,2)
// console.log(result1,'result1');
// result1.forEach(item=>{
//     //  item  是一个数字
//     console.log(item.length); //  Error,item不存在length这个数据
// })


/**
 * 泛型的使用
*/
// const getArray = <T>(value: T,times:number=5):T[]=>{
//     return new Array(times).fill(value);
// };
// getArray<number[]>([1,2],3).forEach(item=>{
//     console.log(item.length);
// })
// getArray<number>(2,3).forEach(item=>{
//     console.log(item.length);  //类型“number”上不存在属性“length”。
// })


// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2]);
//   };
//   getArray(1, "a", 3).forEach(item => {
//     console.log(item[0].length); // error 类型“number”上不存在属性“length”
//     console.log(item[1].toFixed(2)); // error 属性“toFixed”在类型“string”上不存在
//   });


// const getArray = <T>(value: T,times:number=5):T[]=>{
//     return new Array(times).fill(value);
// };
// getArray<number[]>([1,2],3).forEach(item=>{
//     console.log(item.length);
// })
// getArray<number>(2,3).forEach(item=>{
//     console.log(item.length);  //类型“number”上不存在属性“length”。
// })


// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2]);
//   };
//   getArray(1, "a", 3).forEach(item => {
//     console.log(item[0].length); // error 类型“number”上不存在属性“length”
//     console.log(item[1].toFixed(2)); // error 属性“toFixed”在类型“string”上不存在
//   });


// const getArray = <T>(value: T,times:number=5):T[]=>{
//     return new Array(times).fill(value);
// };
// getArray<number[]>([1,2],3).forEach(item=>{
//     console.log(item.length);
// })
// getArray<number>(2,3).forEach(item=>{
//     console.log(item.length);  //类型“number”上不存在属性“length”。
// })


// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2]);
//   };
//   getArray(1, "a", 3).forEach(item => {
//     console.log(item[0].length); // error 类型“number”上不存在属性“length”
//     console.log(item[1].toFixed(2)); // error 属性“toFixed”在类型“string”上不存在
//   });



/**
 * 定义多个泛型类型
*/
// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2]);
//   };
//   getArray(1, "a", 3).forEach(item => {
//     console.log(item[0].length); // error 类型“number”上不存在属性“length”
//     console.log(item[1].toFixed(2)); // error 属性“toFixed”在类型“string”上不存在
//   });


// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2]);
//   };
//   getArray(1, "a", 3).forEach(item => {
//     console.log(item[0].length); // error 类型“number”上不存在属性“length”
//     console.log(item[1].toFixed(2)); // error 属性“toFixed”在类型“string”上不存在
//   });


// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2]);
//   };
//   getArray(1, "a", 3).forEach(item => {
//     console.log(item[0].length); // error 类型“number”上不存在属性“length”
//     console.log(item[1].toFixed(2)); // error 属性“toFixed”在类型“string”上不存在
//   });


/**
 * 泛型函数类型
 * arguments   ----arg
*/
// ex1: 简单定义
// const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
//     return new Array(times).fill(arg);
// };

// ex2: 使用类型别名
// type GetArray = <T>(arg: T, times: number) => T[];

// const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// };


// ex1: 简单定义
// const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
//     return new Array(times).fill(arg);
// };

// ex2: 使用类型别名
// type GetArray = <T>(arg: T, times: number) => T[];

// const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// };


// ex1: 简单定义
// const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
//     return new Array(times).fill(arg);
// };

// ex2: 使用类型别名
// type GetArray = <T>(arg: T, times: number) => T[];

// const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// };


/**
 * interface
*/
// interface GetArray {
//     <T>(arg: T, times: number): T[];
// }
// const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// };

// interface GetArray {
//     <T>(arg: T, times: number): T[];
// }
// const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// };

// interface GetArray {
//     <T>(arg: T, times: number): T[];
// }
// const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// };



/**
 * 泛型约束
*/
// interface ValueWithLength {
//     length: number;
// }
// const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'

// interface ValueWithLength {
//     length: number;
// }
// const getLength = <T extends ValueWithLength>(param: T): number => {
//     return param.length;
// };
// getLength("abc"); // 3
// getLength([1, 2, 3]); // 3
// getLength({ length: 3 }); // 3
// getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数


// interface ValueWithLength {
//     length: number;
// }
// const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'

// interface ValueWithLength {
//     length: number;
// }
// const getLength = <T extends ValueWithLength>(param: T): number => {
//     return param.length;
// };
// getLength("abc"); // 3
// getLength([1, 2, 3]); // 3
// getLength({ length: 3 }); // 3
// getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数


// interface ValueWithLength {
//     length: number;
// }
// const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'

// interface ValueWithLength {
//     length: number;
// }
// const getLength = <T extends ValueWithLength>(param: T): number => {
//     return param.length;
// };
// getLength("abc"); // 3
// getLength([1, 2, 3]); // 3
// getLength({ length: 3 }); // 3
// getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数


/**
 * 在泛型约束中使用类型参数
*/
// const getProps = (object, propName) => {
//     return object[propName];
// };
// const obj = { a: "aa", b: "bb" };
// getProps(obj, "c"); // undefined


// const getProp = <T, K extends keyof T>(object: T, propName: K) => {
//     return object[propName];
// };
// const obj = { a: "aa", b: "bb" };
// getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数


// const getProps = (object, propName) => {
//     return object[propName];
// };
// const obj = { a: "aa", b: "bb" };
// getProps(obj, "c"); // undefined


// const getProp = <T, K extends keyof T>(object: T, propName: K) => {
//     return object[propName];
// };
// const obj = { a: "aa", b: "bb" };
// getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数


// const getProps = (object, propName) => {
//     return object[propName];
// };
// const obj = { a: "aa", b: "bb" };
// getProps(obj, "c"); // undefined


// const getProp = <T, K extends keyof T>(object: T, propName: K) => {
//     return object[propName];
// };
// const obj = { a: "aa", b: "bb" };
// getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数
