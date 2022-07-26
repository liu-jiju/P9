/**
 * 抽象类：提供其他类继承的基类，不能直接被实例化
*/
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     getName():string{
//         return this.name
//     }
// }


// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     getName():string{
//         return this.name
//     }
// }


// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     getName():string{
//         return this.name
//     }
// }


// //狗类继承   动物类
// class Dog extends Rabbit{
//     constructor (name:string){
//         super(name)
//     }
// }

// //狗类继承   动物类
// class Dog extends Rabbit{
//     constructor (name:string){
//         super(name)
//     }
// }

// //狗类继承   动物类
// class Dog extends Rabbit{
//     constructor (name:string){
//         super(name)
//     }
// }


// //无法创建抽象类的实例
// let Pq=new Dog('小白兔')
// console.log(Pq.name);

// //无法创建抽象类的实例
// let Pq=new Dog('小白兔')
// console.log(Pq.name);

// //无法创建抽象类的实例
// let Pq=new Dog('小白兔')
// console.log(Pq.name);


//抽象方法不能脱离抽象类使用ts
// class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string // 报错：抽象方法只能出现在抽象类中。
// }

//抽象方法不能脱离抽象类使用ts
// class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string // 报错：抽象方法只能出现在抽象类中。
// }

//抽象方法不能脱离抽象类使用ts
// class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string // 报错：抽象方法只能出现在抽象类中。
// }

//也就是说，抽象方法只能出现在抽象类中
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string
// }

//也就是说，抽象方法只能出现在抽象类中
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string
// }

//也就是说，抽象方法只能出现在抽象类中
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string
// }

//抽象方法不能有具体体现
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string{ // 报错：方法“eat”不能具有实现，因为它标记为抽象
//         return ''
//     }
// }

//抽象方法不能有具体体现
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string{ // 报错：方法“eat”不能具有实现，因为它标记为抽象
//         return ''
//     }
// }

//抽象方法不能有具体体现
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string{ // 报错：方法“eat”不能具有实现，因为它标记为抽象
//         return ''
//     }
// }

//定义标准
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string
// }

// // let a = new Animal('小明')


// class Dog extends Animal {
//     constructor(name:string){
//         super(name)
//     }
//     // 派生类中具体实现抽象方法
//     eat(): string {
//         return this.name
//     }
// }
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string
// }

// // let a = new Animal('小明')


// class Dog extends Animal {
//     constructor(name:string){
//         super(name)
//     }
//     // 派生类中具体实现抽象方法
//     eat(): string {
//         return this.name
//     }
// }
// abstract class Animal {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():string
// }

// // let a = new Animal('小明')


// class Dog extends Animal {
//     constructor(name:string){
//         super(name)
//     }
//     // 派生类中具体实现抽象方法
//     eat(): string {
//         return this.name
//     }
// }


/**
 * 类类型接口
*/
//接口约束类
// interface IAnimal {
//     name: string
//     eat():string
// }

// class Animal implements IAnimal {
//     name: string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(): string {
//         return ''
//     }
// }


//接口约束类
// interface IAnimal {
//     name: string
//     eat():string
// }

// class Animal implements IAnimal {
//     name: string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(): string {
//         return ''
//     }
// }


//接口约束类
// interface IAnimal {
//     name: string
//     eat():string
// }

// class Animal implements IAnimal {
//     name: string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(): string {
//         return ''
//     }
// }


//接口继承的实现
// interface Ianimal {
//     name: string
// }
// interface IPeople extends Ianimal {
//     work():void
// }
// class Coder implements IPeople {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     work(): void {
//     }
// }


//接口继承的实现
// interface Ianimal {
//     name: string
// }
// interface IPeople extends Ianimal {
//     work():void
// }
// class Coder implements IPeople {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     work(): void {
//     }
// }


//接口继承的实现
// interface Ianimal {
//     name: string
// }
// interface IPeople extends Ianimal {
//     work():void
// }
// class Coder implements IPeople {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     work(): void {
//     }
// }