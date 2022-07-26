
/**
 * ts中的类
*/
// class People{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     sayHi():string{
//         return this.name
//     }
// }

// let p1=new People('张三',12)
// console.log(p1);


// class People{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     sayHi():string{
//         return this.name
//     }
// }

// let p1=new People('张三',12)
// console.log(p1);


// class People{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     sayHi():string{
//         return this.name
//     }
// }

// let p1=new People('张三',12)
// console.log(p1);

/**
 * ts的继承
*/

// class People{
//     name:string;
//     age:number;
//     sex:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     sayHi():number{
//         return this.age
//     }
// }
// class Rabbit extends People{
//     constructor(name:string,age:number){
//         super(name,age)
//     }
// }
// let d1=new Rabbit('兔子',13)
// console.log(d1.name);
// console.log(d1.age);
// console.log(d1.sayHi());


// class People{
//     name:string;
//     age:number;
//     sex:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     sayHi():number{
//         return this.age
//     }
// }
// class Rabbit extends People{
//     constructor(name:string,age:number){
//         super(name,age)
//     }
// }
// let d1=new Rabbit('兔子',13)
// console.log(d1.name);
// console.log(d1.age);
// console.log(d1.sayHi());


// class People{
//     name:string;
//     age:number;
//     sex:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     sayHi():number{
//         return this.age
//     }
// }
// class Rabbit extends People{
//     constructor(name:string,age:number){
//         super(name,age)
//     }
// }
// let d1=new Rabbit('兔子',13)
// console.log(d1.name);
// console.log(d1.age);
// console.log(d1.sayHi());



/**
 * 类的修饰符
*/
//使用 public 修饰符，公有，类里面、子类、类外面都可以访问
// class Animal {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a = new Animal('动物')
// // 父类外获取name属性
// console.log(a.name);


//使用 public 修饰符，公有，类里面、子类、类外面都可以访问
// class Animal {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a = new Animal('动物')
// // 父类外获取name属性
// console.log(a.name);


//使用 public 修饰符，公有，类里面、子类、类外面都可以访问
// class Animal {
//     name: string
//     constructor(name){
//         this.name = name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a = new Animal('动物')
// // 父类外获取name属性
// console.log(a.name);

// // 声明 狗类 继承 动物类
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         // 子类内部获取name属性
//         return this.name + '会运动'
//     }
// }
// // 声明 狗类 继承 动物类
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         // 子类内部获取name属性
//         return this.name + '会运动'
//     }
// }
// // 声明 狗类 继承 动物类
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         // 子类内部获取name属性
//         return this.name + '会运动'
//     }
// }

// // 实例化子类
// let d = new Dog('哈士奇')
// // 子类 类外
// console.log(d.name);
// console.log(d.getName());

// // 实例化子类
// let d = new Dog('哈士奇')
// // 子类 类外
// console.log(d.name);
// console.log(d.getName());

// // 实例化子类
// let d = new Dog('哈士奇')
// // 子类 类外
// console.log(d.name);
// console.log(d.getName());



//使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问
// class Animal {
//     protected name: string
//     constructor(name){
//         this.name = name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a = new Animal('动物')
// // 父类外获取name属性
// console.log(a.name); // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。

// // 声明 狗类 继承 动物类
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         // 子类内部获取name属性
//         return this.name + '会运动'
//     }
// }

// // 实例化子类
// let d = new Dog('哈士奇')
// // 子类 类外
// console.log(d.name);  // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。
// console.log(d.getName());


//使用 private 修饰符，类里面可以访问，其他不行
// class Animal {
//     private name: string
//     constructor(name){
//         this.name = name
//     }
//     getName():string{
//         // 父类内部获取name属性
//         return this.name
//     }
// }
// // 实例化父类
// let a = new Animal('动物')
// // 父类外获取name属性
// console.log(a.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问

// // 声明 狗类 继承 动物类
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     run():string{
//         // 子类内部获取name属性
//         return this.name + '会运动' // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
//     }
// }

// // 实例化子类
// let d = new Dog('哈士奇')
// // 子类 类外
// console.log(d.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
// console.log(d.getName());


/**
 * 静态属性
 * 使用static修饰静态属性
*/
// class Animal {
//     name:string
//     static prop: string = '1'
//     constructor(name:string){
//         this.name = name
//     }
//     getName():string{
//         return this.name
//     }
// }

// console.log(Animal.prop); // 1

// let a = new Animal('小狗')
// let a = new Animal('ddd')

// console.log(a.prop); // 属性“prop”在类型“Animal”上不存在




/**
 * 多态    
 * 声明一个父类
*/
// class Animal {
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
//     // 父类定义了一个方法，不去实现
//     eat(){}
// }

//声明一个类继承父类，并且实现 eat 方法
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat():void{
//         console.log(`${this.name}吃骨头`);
        
//     }
// }

//再声明一个类继承父类，并且实现 eat 方法
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat():void{
//         console.log(`${this.name}吃鱼`);
        
//     }
// }