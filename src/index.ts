
// 在这种情况下函数返回值就会出现混乱，还是不便于以后的使用
// function combine(a:number|string,b:string|number):number|string{
// if(typeof(a)==="number" && typeof(b)==="number"){
//     return a * b;
// } else if (typeof a === "string" && typeof b === "string"){
//     return a + b;
// }
// throw new Error("a和b必须是相同的类型")
// }
// const result = combine(1,2)

// 这里就是通过函数重载的方式来实现的
/**
 *得到a*b的结果
 * @param {number} a
 * @param {number} b
 * @return {*}  {number}
 */
function combine(a:number,b:number):number;
/**
 *得到a,b两个字符串的拼接结果
 * @param {string} a
 * @param {string} b
 * @return {*}  {string}
 */
function combine(a:string,b:string):string;
function combine(a: number | string, b: string | number): number | string {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a * b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("a和b必须是相同的类型")
}
const result = combine("1", "1")



/**
 *这里参数后加？就表示可选参数可以传也可以不传 当后面添加等于号就是添加了默认值  默认参数就是可选参数
 * @param {number} a
 * @param {number} b
 * @param {number} [c]
 * @return {*} 
 */
function sum(a:number,b:number = 10,c?:number){
    if(c){
        return a + b + c
    }else{
        return a + b
    }
}
sum(1,2,3);
sum(1,2);
sum(1)