// /**
//  * 原型和继承
//  * 面向对象的特点：继承，多态，封装
// */

// function Anmation(name){
//     this.name=name,
//     this.Sayhi=function(){
//         console.log('我是一个继承函数');
//     }
// }
// Anmation.prototype.age='13'
// Anmation.prototype.Task=function(){
//     console.log('我在吼叫');
// }
// let cat=new Anmation('Cat')
// console.log(cat.name);
// console.log(cat.Sayhi);
// console.log(cat.age);
// console.log(cat.Task);

// function Anmation(name){
//     this.name=name,
//     this.Sayhi=function(){
//         console.log('我是一个继承函数');
//     }
// }
// Anmation.prototype.age='13'
// Anmation.prototype.Task=function(){
//     console.log('我在吼叫');
// }
// let cat=new Anmation('Cat')
// console.log(cat.name);
// console.log(cat.Sayhi);
// console.log(cat.age);
// console.log(cat.Task);

// function Anmation(name){
//     this.name=name,
//     this.Sayhi=function(){
//         console.log('我是一个继承函数');
//     }
// }
// Anmation.prototype.age='13'
// Anmation.prototype.Task=function(){
//     console.log('我在吼叫');
// }
// let cat=new Anmation('Cat')
// console.log(cat.name);
// console.log(cat.Sayhi);
// console.log(cat.age);
// console.log(cat.Task);



/**
 * ES6的类的声明
*/
// class Persion{
//     /**
//      * 定义属性
//     */
//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }
//     //定义方法
//     SauHi(){
//         return this.name
//     }
// }

// let p=new Persion('小红',12)
// console.log(p.age);
// console.log(p.name);
// console.log(p.SauHi());

// class Persion{
//     /**
//      * 定义属性
//     */
//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }
//     //定义方法
//     SauHi(){
//         return this.name
//     }
// }

// let p=new Persion('小红',12)
// console.log(p.age);
// console.log(p.name);
// console.log(p.SauHi());

// class Persion{
//     /**
//      * 定义属性
//     */
//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }
//     //定义方法
//     SauHi(){
//         return this.name
//     }
// }

// let p=new Persion('小红',12)
// console.log(p.age);
// console.log(p.name);
// console.log(p.SauHi());



/**
 * ES6的继承
*/
class Anmial{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    run(){
        console.log('我在运动');
    }
}
class Dog extends Anmial{
    constructor(props){
        super(props)
    }
}
let d=new Dog('哈士奇')
console.log(d.name);  //哈士奇
d.run();  //哈士奇会跑步

// class Anmial{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     run(){
//         console.log('我在运动');
//     }
// }
// class Dog extends Anmial{
//     constructor(props){
//         super(props)
//     }
// }
// let d=new Dog('哈士奇')
// console.log(d.name);  //哈士奇
// d.run();  //哈士奇会跑步

// class Anmial{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     run(){
//         console.log('我在运动');
//     }
// }
// class Dog extends Anmial{
//     constructor(props){
//         super(props)
//     }
// }
// let d=new Dog('哈士奇')
// console.log(d.name);  //哈士奇
// d.run();  //哈士奇会跑步