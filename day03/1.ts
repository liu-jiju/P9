/**
 * 1.数字类型
 * 1.语法使用的是es6的语法，Uploading：Uploading
 * 2.自动添加指定索引符合
 * 3.我们可以像访问对象一样使用','和'[]'两种方式访问里面的值
*/
enum Status{
    Uploading,
    Success,
    Failed
}
//像访问对象一样使用','
console.log(Status.Failed);
console.log(Status['Failed']);
console.log(Status.Success);


// enum Status{
//     Uploading,
//     Success,
//     Failed
// }
// //像访问对象一样使用','
// console.log(Status.Failed);
// console.log(Status['Failed']);
// console.log(Status.Success);


// enum Status{
//     Uploading,
//     Success,
//     Failed
// }
// //像访问对象一样使用','
// console.log(Status.Failed);
// console.log(Status['Failed']);
// console.log(Status.Success);


/**
 * 2.指定索引值
 * 总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来
*/
enum Anmimal{
    //猪
    Pig=200,
    //狗
    Dog,
    //猫
    Cat=300,
    //蛇
    Snake
}
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);


// enum Anmimal{
//     //猪
//     Pig=200,
//     //狗
//     Dog,
//     //猫
//     Cat=300,
//     //蛇
//     Snake
// }
// console.log(Anmimal.Cat);
// console.log(Anmimal['Dog']);
// console.log(Anmimal.Snake);


// enum Anmimal{
//     //猪
//     Pig=200,
//     //狗
//     Dog,
//     //猫
//     Cat=300,
//     //蛇
//     Snake
// }
// console.log(Anmimal.Cat);
// console.log(Anmimal['Dog']);
// console.log(Anmimal.Snake);

/**
 * 3.计算值和常量
*/
const getvalue=()=>{
    return 1
}
enum Constant{
    a=getvalue(),
    b, //枚举成员必须具有初始化表达式。
    c,
}


// const getvalue=()=>{
//     return 1
// }
// enum Constant{
//     a=getvalue(),
//     b, //枚举成员必须具有初始化表达式。
//     c,
// }


// const getvalue=()=>{
//     return 1
// }
// enum Constant{
//     a=getvalue(),
//     b, //枚举成员必须具有初始化表达式。
//     c,
// }

/**
 * 4.反向映射
*/
enum Statuss{
    Success=200,
    NotFound=404,
    Error=500
}
console.log(Statuss.Error);
console.log(Statuss[404]);
console.log(Statuss.NotFound);


// enum Statuss{
//     Success=200,
//     NotFound=404,
//     Error=500
// }
// console.log(Statuss.Error);
// console.log(Statuss[404]);
// console.log(Statuss.NotFound);


// enum Statuss{
//     Success=200,
//     NotFound=404,
//     Error=500
// }
// console.log(Statuss.Error);
// console.log(Statuss[404]);
// console.log(Statuss.NotFound);


/**
 * 5.字符串枚举
*/
const getvalue1=()=>{
    return 0
}

const names='小明'
enum Message{
    //错误信息
    Error='error message',
    /**
     * 成功的错误信息
     * 枚举成员必须具有初始化表达式
    */
    SuccessError=200,//枚举成员必须具有初始化表达式
    //含字符串值成员的枚举中不允许使用计算值。
    ClientError=names
}
console.log(Message.SuccessError,'SuccessError');
console.log(Message.Error);
console.log(Message['ClientError']);


// const getvalue1=()=>{
//     return 0
// }

// const names='小明'
// enum Message{
//     //错误信息
//     Error='error message',
//     /**
//      * 成功的错误信息
//      * 枚举成员必须具有初始化表达式
//     */
//     SuccessError=200,//枚举成员必须具有初始化表达式
//     //含字符串值成员的枚举中不允许使用计算值。
//     ClientError=names
// }
// console.log(Message.SuccessError,'SuccessError');
// console.log(Message.Error);
// console.log(Message['ClientError']);


// const getvalue1=()=>{
//     return 0
// }

// const names='小明'
// enum Message{
//     //错误信息
//     Error='error message',
//     /**
//      * 成功的错误信息
//      * 枚举成员必须具有初始化表达式
//     */
//     SuccessError=200,//枚举成员必须具有初始化表达式
//     //含字符串值成员的枚举中不允许使用计算值。
//     ClientError=names
// }
// console.log(Message.SuccessError,'SuccessError');
// console.log(Message.Error);
// console.log(Message['ClientError']);

/**
 * 6.异构枚举
*/
enum Result{
    Faild=0,
    Success='Success'
}


// enum Result{
//     Faild=0,
//     Success='Success'
// }


// enum Result{
//     Faild=0,
//     Success='Success'
// }

/**
 * 7.枚举成员类型
*/
enum Anmimal{
    Dog1=1,
    Cat1=2,
}
//狗
interface Dog1{
    type:Anmimal.Dog1
}
//猫
interface Cat1{
    type:Anmimal.Cat1
}


// enum Anmimal{
//     Dog1=1,
//     Cat1=2,
// }
// //狗
// interface Dog1{
//     type:Anmimal.Dog1
// }
// //猫
// interface Cat1{
//     type:Anmimal.Cat1
// }


// enum Anmimal{
//     Dog1=1,
//     Cat1=2,
// }
// //狗
// interface Dog1{
//     type:Anmimal.Dog1
// }
// //猫
// interface Cat1{
//     type:Anmimal.Cat1
// }


//错误类型
// interface Cat1{
//     type:Anmimal.Dog1
// };
// interface Dog1{
//     type:Anmimal.Cat1
// }


/**
 * 联合类型
*/
enum Keys{
    //关
    Off,
    //开
    On
}
interface Light{
    status:Keys
}
let Light:Light={
    status:Keys.Off
}


// enum Keys{
//     //关
//     Off,
//     //开
//     On
// }
// interface Light{
//     status:Keys
// }
// let Light:Light={
//     status:Keys.Off
// }


// enum Keys{
//     //关
//     Off,
//     //开
//     On
// }
// interface Light{
//     status:Keys
// }
// let Light:Light={
//     status:Keys.Off
// }


/**
 * 运行时对象
*/
enum E{
    A,
    B
}
const getIndex=(enumObj:{C:number}):number=>{
    return enumObj.C;
}
console.log(getIndex(E));

/**
 * const enum
*/
enum Animal{
    Rabbit,
    Pig
}
const enum Light90{
    Off,
    On
}

const status45=Animal.Pig
const status57=Light90.Off
console.log(status45,status57);


// enum E{
//     A,
//     B
// }
// const getIndex=(enumObj:{C:number}):number=>{
//     return enumObj.C;
// }
// console.log(getIndex(E));

// /**
//  * const enum
// */
// enum Animal{
//     Rabbit,
//     Pig
// }
// const enum Light90{
//     Off,
//     On
// }

// const status45=Animal.Pig
// const status57=Light90.Off
// console.log(status45,status57);


// enum E{
//     A,
//     B
// }
// const getIndex=(enumObj:{C:number}):number=>{
//     return enumObj.C;
// }
// console.log(getIndex(E));

// /**
//  * const enum
// */
// enum Animal{
//     Rabbit,
//     Pig
// }
// const enum Light90{
//     Off,
//     On
// }

// const status45=Animal.Pig
// const status57=Light90.Off
// console.log(status45,status57);

