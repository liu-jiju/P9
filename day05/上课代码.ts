//new 新的请求http
let ajax=new XMLHttpRequest()
//method,url
ajax.open('get','https://baidu.com')
//发送数据
ajax.send()
//接受返回值，判断是否返回成功
ajax.onreadystatechange=function(){
    if(ajax.status===200&&ajax.readyState===4){
        console.log('我是返回成功的值');
    }
}
//用ts来进行封装
/**
 * 思路：1.有三个参数，用interface
 *      2.有两个枚举值，所以用enum
 *      3.放在一个函数里面，进行接口和参数的校验
 *          3.1函数需要传参，并且参数是对象
*/
// interface Iparams{
//     methods:string,
//     url:string,
//     data?:any
// }
// enum Status{
//     Success=200,
//     ReadyState=4
// }

// function getAjax(params:Iparams){
//     let ajax=new XMLHttpRequest()
//     ajax.open(params.methods,params.url)
//     ajax.send(params.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
//             console.log('我们可以用了');
            
//         }
//     }
// }


/**
 * 为函数和函数参数定义类型
 * type
 * 1.类型别名
 * 
 * 
 * 
 * 不一样的点：
 * 1.type是赋值，进行别名的修改
 * 2.interface  声明一个类型
 * 3.type  可以声明基础类型数据，interface只能声明对象
 * 4.interface可以使用extends进行继承，但是type不可以，因为是类型别名，属于复制的一种
 * 5.interface可以重复声明，自动合并到一起
 * 6.type不可以重复声明
 * 
 * 相同点：
 * 1.typeh和interface都可以声明对象和类型
*/

//-------和interface的相同点
interface Iparams{
    methods:string,
    url:string,
    data?:any
}
enum Status{
    Success=200,
    ReadyState=4
}

function getAjax(params:Iparams){
    let ajax=new XMLHttpRequest()
    ajax.open(params.methods,params.url)
    ajax.send(params.data)
    ajax.onreadystatechange=function(){
        if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
            console.log('我们可以用了');
        }
    }
}

// //-------和interface的相同点
// interface Iparams{
//     methods:string,
//     url:string,
//     data?:any
// }
// enum Status{
//     Success=200,
//     ReadyState=4
// }

// function getAjax(params:Iparams){
//     let ajax=new XMLHttpRequest()
//     ajax.open(params.methods,params.url)
//     ajax.send(params.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
//             console.log('我们可以用了');
//         }
//     }
// }


// //-------和interface的相同点
// interface Iparams{
//     methods:string,
//     url:string,
//     data?:any
// }
// enum Status{
//     Success=200,
//     ReadyState=4
// }

// function getAjax(params:Iparams){
//     let ajax=new XMLHttpRequest()
//     ajax.open(params.methods,params.url)
//     ajax.send(params.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
//             console.log('我们可以用了');
//         }
//     }
// }

//------不同点 ,错误写法
// interface users:string  //应为“{”。ts(1005)

//type用来声明基础类型
type user = string
//接收一个字符串类型的数据，返回一个user类型(字符串类型)的数据
function Input(str:string):user{
    return str.slice(0,2)
}
//把返回结果赋值给userInput
let userInput=Input('hello')
//重新给其赋值一个字符串类型的值,没有报错,说明用type声明的字符串类型生效
userInput='new'


// //type用来声明基础类型
// type user = string
// //接收一个字符串类型的数据，返回一个user类型(字符串类型)的数据
// function Input(str:string):user{
//     return str.slice(0,2)
// }
// //把返回结果赋值给userInput
// let userInput=Input('hello')
// //重新给其赋值一个字符串类型的值,没有报错,说明用type声明的字符串类型生效
// userInput='new'


// //type用来声明基础类型
// type user = string
// //接收一个字符串类型的数据，返回一个user类型(字符串类型)的数据
// function Input(str:string):user{
//     return str.slice(0,2)
// }
// //把返回结果赋值给userInput
// let userInput=Input('hello')
// //重新给其赋值一个字符串类型的值,没有报错,说明用type声明的字符串类型生效
// userInput='new'

/**
 * 第一点：type声明值类型，做类型判断的
 *   let names：string  赋值
 * 所以，不能在函数参数上面直接限制
 * 
 * 第二点：interface  只能声明对象，不能声明基础类型，所以校验的函数参数只能是对象
 *  //接收一个字符串类型的数据，返回一个user类型(字符串类型)的数据
 * function Input(str:string):user{
 *  return str.slice(0,2)
 * }
*/

/**
 * interface继承  extends
*/

//扩展接口
// interface Animal{
//     name:string
// }
// interface Bear extends Animal{
//     honey:boolean
// }
// //声明一个类型为Bear类型的对象，要求既要有name，也要有honey。说明用extends扩展接口成功
// const bear:Bear={
//     name:'winie',
//     honey:true
// }
// console.log(bear.name);
// console.log(bear.honey);

//----type-----不能使用extends进行继承
// type Animal={
//     name:string
// }
// type Bear ={
//     honey:boolean
// }
// //声明一个类型为Bear类型的对象，要求既要有name，也要有honey。说明用extends扩展接口成功
// const bear:Bear={
//     name:'winie',
//     honey:true
// }
// console.log(bear.name);
// console.log(bear.honey);


/**
 * interface继承type类型
*/
interface Animal{
    name:string
}
type Bear ={
    honey:boolean
}

interface Animal extends Bear{
    color:string
}
//声明一个类型为Bear类型的对象，要求既要有name，也要有honey。说明用extends扩展接口成功
const bear:Animal={
    name:'winie',
    color:'red',
    honey:true
}

/**
 * 完成的定义一个函数类型
*/
// let add:(x:number,y:number)=>number;
// add=(arg1:number,arg2:number):number=>arg1+arg2
//错误例子
// add=(arg1:string,arg2:string):string=>arg1+arg2


// let add:(x:number,y:number)=>number;
// add=(arg1:number,arg2:number):number=>arg1+arg2
//错误例子
// add=(arg1:string,arg2:string):string=>arg1+arg2


// let add:(x:number,y:number)=>number;
// add=(arg1:number,arg2:number):number=>arg1+arg2
//错误例子
// add=(arg1:string,arg2:string):string=>arg1+arg2


/**
 * 使用接口定义函数类型
*/
// interface Add{
//     (x:number,y:number):number;
// }
// 错误  不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2;


// interface Add{
//     (x:number,y:number):number;
// }
// 错误  不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2;


// interface Add{
//     (x:number,y:number):number;
// }
// 错误  不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2;


/**
 * 类型别名
*/
// type Add=(x:number,y:number)=>number;
//不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2


// type Add=(x:number,y:number)=>number;
//不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2


// type Add=(x:number,y:number)=>number;
//不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2

/**
 * 可选参数？是在对象中使用的，接口声明 （interface）和  类型别名 (type)
*/
// type Add=(x:number,y:number)=>number
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2
// add(1,2)  //right
// add(1,2,3) //error  应有2个参数，但获得3个
// add(1)//error  应有2个参数，但获得1个


// type Add=(x:number,y:number)=>number
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2
// add(1,2)  //right
// add(1,2,3) //error  应有2个参数，但获得3个
// add(1)//error  应有2个参数，但获得1个


// type Add=(x:number,y:number)=>number
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2
// add(1,2)  //right
// add(1,2,3) //error  应有2个参数，但获得3个
// add(1)//error  应有2个参数，但获得1个

// type Add=(x?:number,y:number)=>number  //error  必选参数不能位于可选参数后。
/**
 * 默认参数
*/
var count=0;
function countUp(step){
    step = step || 1;
    count += step;
}


// var count=0;
// function countUp(step){
//     step = step || 1;
//     count += step;
// }


// var count=0;
// function countUp(step){
//     step = step || 1;
//     count += step;
// }

/**
 * 剩余参数
*/
// function handleData(arguments) {
//     if(arguments.length===1) return arguments[0]*2;
//     else if(arguments.length===2) return arguments[0]*arguments[1];
//     else return Array.prototype.slice.apply(arguments).join('_');
// }
// handleData(2);//4
// handleData(2,3);//6
// handleData(1,2,3,4,5);//'1_2_3_4_5'
// //这段代码如果在TypeJscript环境中，三个对handleData函数的调用都会报错，因为handleData函数定义的时候没有参数。
// const handleData = (arg1, ...args) => {
// // 这里省略逻辑
// console.log(args);
// };
// handleData(1, 2, 3, 4, 5); // [ 2, 3, 4, 5 ]


// function handleData(arguments) {
//     if(arguments.length===1) return arguments[0]*2;
//     else if(arguments.length===2) return arguments[0]*arguments[1];
//     else return Array.prototype.slice.apply(arguments).join('_');
// }
// handleData(2);//4
// handleData(2,3);//6
// handleData(1,2,3,4,5);//'1_2_3_4_5'
// //这段代码如果在TypeJscript环境中，三个对handleData函数的调用都会报错，因为handleData函数定义的时候没有参数。
// const handleData = (arg1, ...args) => {
// // 这里省略逻辑
// console.log(args);
// };
// handleData(1, 2, 3, 4, 5); // [ 2, 3, 4, 5 ]


// function handleData(arguments) {
//     if(arguments.length===1) return arguments[0]*2;
//     else if(arguments.length===2) return arguments[0]*arguments[1];
//     else return Array.prototype.slice.apply(arguments).join('_');
// }
// handleData(2);//4
// handleData(2,3);//6
// handleData(1,2,3,4,5);//'1_2_3_4_5'
// //这段代码如果在TypeJscript环境中，三个对handleData函数的调用都会报错，因为handleData函数定义的时候没有参数。
// const handleData = (arg1, ...args) => {
// // 这里省略逻辑
// console.log(args);
// };
// handleData(1, 2, 3, 4, 5); // [ 2, 3, 4, 5 ]