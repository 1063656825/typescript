let num:string | undefined;

if(typeof(num) === "string"){
    // 这里可以使用字符串的方法
}

function printMenu():void{
    console.log("1.登录");
    console.log("2.注册");  
}
// 这里及时不声明也会推导出来

function throwError(msg:string):never{
    throw new Error(msg);
}

let a:"A";//字面量类型   这里常用的就是性别
let gender:"男"|"女";

let arr:[];//这也是一个字面量类型，就是只能约束为一个空数组；

let user:{
    name:string
    age:number
}//这也是字面量赋值，这里主要是用来固定一个对象

let people:[string,number];//这就是一个元祖，规定数组只能是两项，第一项为字符串，第二项为数字

let data:any;  //any类型可以复制任意类型
data=1;
data="2";
data=[1,2]
