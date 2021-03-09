let name:string = 'hello';//这个是字符串类型 应该是小写

function sum(a:number,b:number):number{//括号内的是参数 类型写到参数后，在括号外的为函数的返回值
    return a + b;
}
let num = sum(1,2);//在ts中及时不填写类型也会自动推导类型
let phone = "15841111111"
let aaa;//这样就是推导不出来的