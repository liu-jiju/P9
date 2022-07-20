//interface  基本用法
//我们需要定义这样一个函数，参数是一个对象，里面包含两个字段：
//fistName和lastName也就是英文的名和姓，然后返回一个拼接后的完整名字

// interface Persion{
//     fistName:string,
//     lastName:string,
//     age:string,
//     sex:string,
//     color:string
// }

// function getFullName1({fistName,lastName}:{fistName:string,lastName:string}){
//     return `${lastName}${fistName}`
// }


// interface Persion{
//     fistName:string,
//     lastName:string,
//     age:string,
//     sex:string,
//     color:string
// }

// function getFullName1({fistName,lastName}:{fistName:string,lastName:string}){
//     return `${lastName}${fistName}`
// }


interface Persion{
    fistName:string,
    lastName:string,
    age:string,
    sex:string,
    color:string
}

function getFullName1({fistName,lastName}:{fistName:string,lastName:string}){
    return `${lastName}${fistName}`
}

//第一种：什么参数都不传----应有1个参数，但获得0个
//第二种：我们传递参数-----对象文字可以只指定已知属性，
//并且‘age’不在{fistName,lastName}:{fistName:string,lastName:string}
//第三种：
// let result= getFullName({fistName:'world',lastName:'hello'})
// console.log(result);


//可选属性
// interface Persion{
//     fistName:string,
//     lastName:string,
//     age:string,
//     sex:string,
//     colors?:string|undefined,
//     [prop:string]:any
// }
// let result1=getFullName({fistName:'world',lastName:'hello',age:18,sex:false,height:180})


// interface Persion{
//     fistName:string,
//     lastName:string,
//     age:string,
//     sex:string,
//     colors?:string|undefined,
//     [prop:string]:any
// }
// let result1=getFullName({fistName:'world',lastName:'hello',age:18,sex:false,height:180})

interface Persion{
    fistName:string,
    lastName:string,
    age:string,
    sex:string,
    colors?:string|undefined,
    [prop:string]:any
}
let result1=getFullName({fistName:'world',lastName:'hello',age:18,sex:false,height:180})

//绕开多余属性的检查，类型断言
//1.类型断言   as<>

// interface Vegetables{
//     color?:string,
//     type:string
// }

// const getVegetables=({color,type}:Vegetables):string=>{
//     return `A${color?color+'':''}${type}`
// }

// getVegetables({
//     type:'tomato',
//     size:12,
//     price:1.2
// } as Vegetables);


// interface Vegetables{
//     color?:string,
//     type:string
// }

// const getVegetables=({color,type}:Vegetables):string=>{
//     return `A${color?color+'':''}${type}`
// }

// getVegetables({
//     type:'tomato',
//     size:12,
//     price:1.2
// } as Vegetables);


// interface Vegetables{
//     color?:string,
//     type:string
// }

// const getVegetables=({color,type}:Vegetables):string=>{
//     return `A${color?color+'':''}${type}`
// }

// getVegetables({
//     type:'tomato',
//     size:12,
//     price:1.2
// } as Vegetables);

//2.[prop:string]:any
// interface Vegetables{
//     color?:string,
//     type:string,
//     [prop:string]:any
// }

// const getVegetables=({color,type}:Vegetables):string=>{
//     return `A${color?color+'':''}${type}`
// }

// getVegetables({
//     type:'tomato',
//     size:12,
//     price:1.2
// });


// interface Vegetables{
//     color?:string,
//     type:string,
//     [prop:string]:any
// }

// const getVegetables=({color,type}:Vegetables):string=>{
//     return `A${color?color+'':''}${type}`
// }

// getVegetables({
//     type:'tomato',
//     size:12,
//     price:1.2
// });


interface Vegetables{
    color?:string,
    type:string,
    [prop:string]:any
}

const getVegetables=({color,type}:Vegetables):string=>{
    return `A${color?color+'':''}${type}`
}

getVegetables({
    type:'tomato',
    size:12,
    price:1.2
});

/**
  * 利用类型兼容性
  */

 interface Vegetables {
    type: string;
  }
  const getVegetables1 = ({ type }: Vegetables) => {
    return `A ${type}`;
  };
  
  const option = { type: "tomato", size: 12 };
  getVegetables1(option);
//  interface Vegetables {
//     type: string;
//   }
//   const getVegetables1 = ({ type }: Vegetables) => {
//     return `A ${type}`;
//   };
  
//   const option = { type: "tomato", size: 12 };
//   getVegetables1(option);


//  interface Vegetables {
//     type: string;
//   }
//   const getVegetables1 = ({ type }: Vegetables) => {
//     return `A ${type}`;
//   };
  
//   const option = { type: "tomato", size: 12 };
//   getVegetables1(option);

//只读属性  readonly  
interface Role{
    readonly 0:string;
    readonly 1:string;
}

const role:Role={
    0:'super_admin',
    1:'admin'
}
// role[1]='我是快乐的';//无法分配到 "1" ，因为它是只读属性。

//const 和 readonly  对比
const NAME:string='帅字辈';
// NAME='抬头'  //无法分配到 "NAME" ，因为它是常数。

const obj={
    name:'帅字辈'
}
obj.name='包胜利'

interface Info{
    readonly name:string
}
const info:Info={
    name:'帅字辈'
}
info['name']='包胜利'  //无法分配到 "name" ，因为它是只读属性。

//函数类型
interface AddFunc{
    (num1:number,num2:number):number
}

const add:AddFunc=(n1,n2)=>n1+n2;
const join:AddFunc=(n1,n2)=>`${n1} ${n2};`  //不能将类型“string”分配给类型“number”。
add('a',2);  //类型“string”的参数不能赋给类型“number”的参数。