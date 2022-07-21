/**
 * 原生ajax
*/
//创建ajax
let ajax=new XMLHttpRequest()
//指定发送方法和url
ajax.open('get','https://note.youdao.com/ynoteshare1/index.html?id=2cc2c21fe8cfbdc74c51cb77a3cfdfc9&type=note0')
//发送数据
ajax.send()

//判断是不是返回成功的状态码
ajax.onreadystatechange=function(){
    if(ajax.status===200&&ajax.readyState===4){
        console.log(ajax.response);
        
    }
}


// //创建ajax
// let ajax=new XMLHttpRequest()
// //指定发送方法和url
// ajax.open('get','https://note.youdao.com/ynoteshare1/index.html?id=2cc2c21fe8cfbdc74c51cb77a3cfdfc9&type=note0')
// //发送数据
// ajax.send()

// //判断是不是返回成功的状态码
// ajax.onreadystatechange=function(){
//     if(ajax.status===200&&ajax.readyState===4){
//         console.log(ajax.response);
        
//     }
// }


// //创建ajax
// let ajax=new XMLHttpRequest()
// //指定发送方法和url
// ajax.open('get','https://note.youdao.com/ynoteshare1/index.html?id=2cc2c21fe8cfbdc74c51cb77a3cfdfc9&type=note0')
// //发送数据
// ajax.send()

// //判断是不是返回成功的状态码
// ajax.onreadystatechange=function(){
//     if(ajax.status===200&&ajax.readyState===4){
//         console.log(ajax.response);
        
//     }
// }


/**
 * 请求成功的状态  封装
*/
enum Status{
    //成功
    Success=200,
    //连接成功
    ReadyStatus=4
}

//定义params
interface IParams{
    method:string,
    url:string,
    data?:any
}

function getAjaxResponse(params:IParams){
    let ajax =new XMLHttpRequest()
    //method  方法和url请求
    ajax.open(params.method,params.url)
    ajax.send(params.data)
    //判断请求地址
    ajax.onreadystatechange=function(){
        if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyStatus){
            console.log('我是成功的');
        }
    }
}

const params={method:'get',url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}

//类型"{}"的参数不能赋给类型“IParams”的参数
//类型"{}"缺少类型“IParams”中的以下属性：method,url
getAjaxResponse(params)


// /**
//  * 请求成功的状态  封装
// */
// enum Status{
//     //成功
//     Success=200,
//     //连接成功
//     ReadyStatus=4
// }

// //定义params
// interface IParams{
//     method:string,
//     url:string,
//     data?:any
// }

// function getAjaxResponse(params:IParams){
//     let ajax =new XMLHttpRequest()
//     //method  方法和url请求
//     ajax.open(params.method,params.url)
//     ajax.send(params.data)
//     //判断请求地址
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyStatus){
//             console.log('我是成功的');
//         }
//     }
// }

// const params={method:'get',url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}

// //类型"{}"的参数不能赋给类型“IParams”的参数
// //类型"{}"缺少类型“IParams”中的以下属性：method,url
// getAjaxResponse(params)


// /**
//  * 请求成功的状态  封装
// */
// enum Status{
//     //成功
//     Success=200,
//     //连接成功
//     ReadyStatus=4
// }

// //定义params
// interface IParams{
//     method:string,
//     url:string,
//     data?:any
// }

// function getAjaxResponse(params:IParams){
//     let ajax =new XMLHttpRequest()
//     //method  方法和url请求
//     ajax.open(params.method,params.url)
//     ajax.send(params.data)
//     //判断请求地址
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyStatus){
//             console.log('我是成功的');
//         }
//     }
// }

// const params={method:'get',url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}

// //类型"{}"的参数不能赋给类型“IParams”的参数
// //类型"{}"缺少类型“IParams”中的以下属性：method,url
// getAjaxResponse(params)