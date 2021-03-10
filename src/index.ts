enum Permission{
    Read = 1,    //0001
    Write = 2,   //0010
    Create = 4,  //0100
    Delete = 8,  //1000
}

// 如何组合权限
// 这里使用的是 或 运算
let p = Permission.Read | Permission.Write;
p = p | Permission.Delete;

// 2. 如何判断是否拥有某个权限
// 这里使用的是 且 运算
function hasPermission(target:Permission,per:Permission){
    return (target & per) === per;
}

let result = hasPermission(p, Permission.Delete)
console.log(result);

// 3. 删除某个权限
// 这里使用的是 异或 运算   相同取 0 不同取 1
p = p ^ Permission.Delete;

result = hasPermission(p, Permission.Delete)
console.log(result);