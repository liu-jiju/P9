// 元组是合并了不同类型的数组 并且已知长度
let tom: [string, number] = ['wang', 15]
console.log(tom[0]);
// 元组造句
let lin = `我的姓名是${tom[0]} 年龄是${tom[1]}`
document.body.innerHTML = lin

// // 元组是合并了不同类型的数组 并且已知长度
// let tom: [string, number] = ['wang', 15]
// console.log(tom[0]);
// // 元组造句
// let lin = `我的姓名是${tom[0]},年龄是${tom[1]}`
// document.body.innerHTML = lin

// // 元组是合并了不同类型的数组 并且已知长度
// let tom: [string, number] = ['wang', 15]
// console.log(tom[0]);
// // 元组造句
// let lin = `我的姓名是${tom[0]},年龄是${tom[1]}`
// document.body.innerHTML = lin




// 枚举是类似于对象  当作块级作用域来理解
enum Color {
    // 红色
    red = 100,
    // 蓝色
    Blue = 200,
    // 绿色
    Green = 300
}
let a: Color = Color.red
console.log(a);

// 枚举是类似于对象 当作块级作用域来解释
// enum Color {
//     // 红色
//     red = 100,
//     // 蓝色
//     Blue = 200,
//     // 绿色
//     Green = 300

// }
// let a: Color = Color.red
// console.log(a);

// // 枚举是类似于对象 当作块级作用域来解释
// enum Color {
//     // 红色
//     red = 100,
//     // 蓝色
//     Blue = 200,
//     // 绿色
//     Green = 300
// }
// let a: Color = Color.Green
// console.log(a);


// 数据类型 number
let num: number = 123
let num1: number = 234
let sum = num + num1
console.log(sum);

// // 数据类形
// let num: number = 123
// let num1 = number = 234
// let sum = num + num1
// console.log(sum);

// // 数据类型
// let num: number = 123
// let num1: number = 234
// let sum = num + num1
// console.log(sum);



// 字符串
let ming: string = '我是李四'
let age: number = 24
// 造个句子
let persion = `my name is ${ming},age is ${age}`
document.body.innerHTML = persion

// // 字符串
// let ming: string = '我是李四'
// let age: number = 24
// // 造个句子
// let persion = `my name is ${ming},age is ${age}`
// document.body.innerHTML = persion

// // 字符串
// let ming: string = '我是李四'
// let age: number = 24
// // 造个句子
// let persion = `my name is ${ming},age is ${age}`
// document.body.innerHTML = persion

// 布尔值
let boolean: boolean = false

// 数组
// 第一种字面量创建方式
let arry: [] = []
// 第二种
let Arry: Array<[]> = []
let numArry: number[] = [1, 2, 3, 4, 5]
let stringArry: Array<string> = ['1', '2', '4']

// // 数组
// // 第一种字面量创建方式
// let arry: [] = []
// // 第二种
// let Arry: Array<[]> = []
// let numArry: number[] = [1, 2, 3, 4, 5]
// let stringArry: Array<string> = ['1', '2', '4']

// // 数组
// // 第一种字面量创建方式
// let arry: [] = []
// // 第二种
// let Arry: Array<[]> = []
// let numArry: number[] = [1, 2, 3, 4, 5]
// let stringArry: Array<string> = ['1', '2', '4']

// any
let value:any
value=12
value='你好'
value=true

// void用于函数和any是相反的
function noReturn():void{ 
    console.log('我是一个没返回的函数');
    
}
// 其声明类型不为 void 或any 的函数必须返回值
function havReturn():string{ 
    return '你好啊'
}

// 返回never的函数必须存在无法达到的终点
function error(message:string):never{ 
    throw new Error(message)
}
// 推断的返回值类型为never
function fail(){ 
    return error('something failed')
}



// 交叉类型
interface user{ 
    name:string
    age:number
}
interface other{ 
    sex:boolean
}
type persion=user&other
let others:persion={name:'张三',age:18,sex:false}

// 联合类型
let unite:number|string
unite=1
unite='hell worj'
// 不能将类型’boolean‘分配给类型string|number
// unite=false


// 类型断言
let someValue:any;
someValue=123
someValue='aaaa'
let someValuelength=(<string>someValue).length



let someName:any
someName=123
someName='123'
let someNamevaluelength=(someName as string).length



// 数字枚举
// 我们定义了一个数字枚举，up初始化为一 其余成员会从1开始自动增长
enum Status{ 
    up=1,
    Down,
    Left,
    Right
}
// 我们也可以不初始化数值，然后up默认为0 从0开始自动增长
enum sta{ 
    up,
    Down,
    Left,
    Right
}



// 字符串枚举
// 在每一个字符串枚举里，每个成员都必须用字符串字面量
// 或另一个字符串枚举成员进行初始化 字符串枚举没有自增长的行为
enum zi{ 
    Up='1',
    Down='2',
    Left='left'
}



// 异构枚举可以混合字符串和数字成员
// 不建议这样做
enum yi{ 
    Up=0,
No='你好'
}









// 计算值和常量
enum Constant{ 

}











// 枚举成员类型
enum Animal{ 
    Dog=1,
    Cat=2,
}
// 狗
interface Dog{ 
    type:Animal.Dog
}
// 猫
interface Cat{ 
    type:Animal.Cat
}