// 不用别名的情况
// let u: {
//     name: string
//     age: number
//     gender: "男" | "女"
// }

// function getUser(): {
//     name: string
//     age: number
//     gender: "男" | "女"
// }[] {
//     return []
// }


// 使用了别名的情况 这样就会避免代码冗余 这里还可以多个别名一起混用
type Gender = "男" | "女";
type User = {
    name: string
    age: number
    gender: Gender
}

let u: User

function getUser(g:Gender): User[] {
    return []
}



