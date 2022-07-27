/**
 * 1.任何类型的值都可以赋值给 unknown 类型
 * 2.如果没有类型断言或基于控制流的类型细化时 unknown 不可以赋值给其它类型，此时它只能赋值给 unknown 和 any 类型
 * 3.如果没有类型断言或基于控制流的类型细化，则不能在它上面进行任何操作
 * 4.unknown 与任何其它类型组成的交叉类型，最后都等于其它类型
 * 5.unknown 与任何其它类型组成的联合类型，都等于 unknown 类型，但只有any例外，unknown与any组成的联合类型等于any)
*/
// let value1: unknown;
// value1 = 'a';
// value1 = 123;

// let anyValue: any;
// anyValue = 1;
// anyValue = 'add'

// let value2: unknown;
// let value3: string =value2;  //error  不能将类型“unknown”分配给类型“string”。
// value1=value2;
// // --------
// let anyValue1: any;
// let anyValue23: string=anyValue1


// let value1: unknown;
// value1 = 'a';
// value1 = 123;

// let anyValue: any;
// anyValue = 1;
// anyValue = 'add'

// let value2: unknown;
// let value3: string =value2;  //error  不能将类型“unknown”分配给类型“string”。
// value1=value2;
// // --------
// let anyValue1: any;
// let anyValue23: string=anyValue1


// let value1: unknown;
// value1 = 'a';
// value1 = 123;

// let anyValue: any;
// anyValue = 1;
// anyValue = 'add'

// let value2: unknown;
// let value3: string =value2;  //error  不能将类型“unknown”分配给类型“string”。
// value1=value2;
// // --------
// let anyValue1: any;
// let anyValue23: string=anyValue1

/**
 * 3
*/
// let value4: unknown;
// value4 += 1; // error 对象的类型为 "unknown"

// let anyValue4: any
// anyValue4 +=1


// let value4: unknown;
// value4 += 1; // error 对象的类型为 "unknown"

// let anyValue4: any
// anyValue4 +=1


// let value4: unknown;
// value4 += 1; // error 对象的类型为 "unknown"

// let anyValue4: any
// anyValue4 +=1

/**
 * 4.交叉类型
*/
// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]

// type type11 = any & string; // type1 => string
// type type22 = number & any; // type2 => number
// type type33 = any & any; // type3 => unknown
// type type44 = any & string[]; // type4 => string[]


// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]

// type type11 = any & string; // type1 => string
// type type22 = number & any; // type2 => number
// type type33 = any & any; // type3 => unknown
// type type44 = any & string[]; // type4 => string[]


// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]

// type type11 = any & string; // type1 => string
// type type22 = number & any; // type2 => number
// type type33 = any & any; // type3 => unknown
// type type44 = any & string[]; // type4 => string[]

/**
 * 5.   |
*/
// type type5 = string | unknown; // type5 => unknown
// type type6 = any | unknown; // type6 => any
// type type7 = number[] | unknown; // type7 => unknown


// type type5 = string | unknown; // type5 => unknown
// type type6 = any | unknown; // type6 => any
// type type7 = number[] | unknown; // type7 => unknown


// type type5 = string | unknown; // type5 => unknown
// type type6 = any | unknown; // type6 => any
// type type7 = number[] | unknown; // type7 => unknown

/**
 * 6.never 类型是 unknown 的子类型
*/
// type type8 = never extends unknown ? true : false; // type8 => true

// type type8 = never extends unknown ? true : false; // type8 => true

// type type8 = never extends unknown ? true : false; // type8 => true

/**
 * 7.keyof unknown 等于类型 never
*/
// type type9 = keyof unknown; // type9 => never

// type type9 = keyof unknown; // type9 => never

// type type9 = keyof unknown; // type9 => never

/**
 * 8.只能对 unknown 进行等或不等操作，不能进行其它操作
*/
// value1 === value2;
// value1 !== value2;
// value1 += value2; // error


// value1 === value2;
// value1 !== value2;
// value1 += value2; // error


// value1 === value2;
// value1 !== value2;
// value1 += value2; // error

/**
 * 9. unknown 类型的值不能访问其属性、作为函数调用和作为类创建实例
*/
// let value5: unknown;
// value5.age; // error
// value5(); // error
// new value5(); // error


// let value5: unknown;
// value5.age; // error
// value5(); // error
// new value5(); // error


// let value5: unknown;
// value5.age; // error
// value5(); // error
// new value5(); // error

/**
 * 10.使用映射类型时如果遍历的是 unknown 类型，则不会映射任何属性
*/
// type Types<T> = { [P in keyof T]: number };
// type type10 = Types<any>; // type10 => { [x: string]: number }
// type type11 = Types<unknown>; // type10 => {}


// type Types<T> = { [P in keyof T]: number };
// type type10 = Types<any>; // type10 => { [x: string]: number }
// type type11 = Types<unknown>; // type10 => {}


// type Types<T> = { [P in keyof T]: number };
// type type10 = Types<any>; // type10 => { [x: string]: number }
// type type11 = Types<unknown>; // type10 => {}