/**
 * 装饰器
 * 概念：装饰器是一种新的声明，它能够作用于**类声明、方法、访问符、属性和参数上
 * 符号: @xxx(自定义的函数名称)
 * 注意点: 要注意装饰器要紧挨着要修饰的内容的前面
 * 
*/
/**
 * 装饰器直接把装饰的方法实例化类中，不需要手动继承或者实例
 * @param target 
 * @param propertyKey 
 * @param descriptor 
 * @returns 
 */
// function smile(target: Greeter,propertyKey:string,descriptor:PropertyDescriptor){
//     return {
//         ...descriptor,
//         value: function(name: string){
//             console.log('smile');
//             //  调用被装饰的方法
//             return descriptor.value(name);
//         }
//     };
// }

// class Greeter{
//     greeting:string;
//     constructor(message:string){
//         this.greeting=message;
//     }
//     @smile
//     greet(name:string):string{
//         console.log(`welcome,${name}!`);
//         return 'hello';
        
//     }
// }
// const g=new Greeter('msg');
// g.greet('tom');
// g.greet('tom');
// g.greet('tom');
// console.log(g);

// smile
// welcome,tom!
// smile
// welcome,tom!
// smile
// welcome,tom!
// Greeter { greeting: 'msg' }


/**
 * 装饰器工厂
 * 闭包的概念是: 内部函数可以返回外部的函数,内部可以调用外部的函数
 * 装饰器工厂:  也是一个函数，它的返回值是一个函数，返回的函数作为装饰器的调用函数。
 *            如果使用装饰器工厂，那么在使用的时候，就要加上函数调用
*/
// function setProp () {
//     return function (target) {
//         // ...
//     }
// }

// @setProp()


/**
 * 装饰器组合：也就是对于同一个目标，引用多个装饰器
*/
//工厂装饰器
function setName () {
    console.log('get setName')
    return function (target:any) {
        console.log(target);
        console.log('setName')
    }
}
function setAge () {
    console.log('get setAge')
    return function (target:any) {
        console.log(target);
        console.log('setAge')
    }
}
@setName()
@setAge()
class Test {}
// 打印出来的内容如下：
/**
 'get setName'
 'get setAge'
 'setAge'
 'setName'
*/


/**
 * 类装饰器
*/
interface Bar{
    work:()=>void
}
type WithStatic<T,U>={
    new():T;
} & U;
type BarWithStatic=WithStatic<Bar, {life:number}>;
//通过装饰器重写了构造函数的类型
function staticImplements<T>(){
    return <U extends T>(constructor: U) => {};
}
@staticImplements<BarWithStatic>()
class Foo{
    static life:number;
    work(){
        //do something
    }
}



let sign = null;
function setName(name: string) {
  return function(target: Function) {
    sign = target;
    console.log(target.name);
  };
}
@setName("lison") // Info
class Info {
  constructor() {}
}
console.log(sign === Info); // true
console.log(sign === Info.prototype.constructor); // true