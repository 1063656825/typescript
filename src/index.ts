// // 接口约束对象
// interface User{
//     name:string,
//     age:number,
//     // sayHello:void,
//     sayHello:()=>void

// }



// // type User = {
// //     name:string,
// //     age:number
// // }

// let u:User = {
//     name:"kaka",
//     age:12,
//     sayHello(){
//         console.log("hello");
        
//     }
// }

// type Condition = (n) => boolean;
interface Condition {
    (n:number) : boolean
}

function sum(n:number[],callback:Condition){
    let s = 0;
    n.forEach(item=>{
        if(callback(item)){
            s += item
        }
    })
    return s;
}

const result = sum([3,4,5,7,11],n => n%2 !==0);
console.log(result);


// 接口继承
// interface A {
//     T1 : number
// }

// interface B {
//     T2 : string
// }

// interface C extends A ,B {
//     T3 : boolean
// }

// let t:C = {
//     T1 : 12,
//     T3 : true,
//     T2 : "asd"
// }

// type A= {
//     T1: number
// }

// type B= {
//     T2: string
// }

// type C=  {
//     T3: boolean
// } & A & B

// let t: C = {
//     T1: 12,
//     T3: true,
//     T2: "asd"
// }

interface User {
    readonly id:string,
    name: string,
    age:number,
    readonly arr: readonly string[]
}

let u:User = {
    id:"111",
    name:"aaa",
    age:12,
    arr: ["a","b","c"]
}
 
// u.id = "1122"

