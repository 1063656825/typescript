interface hasNameProperty {
    name: string
}

/**
 *该方法是将对象中name属性的每个单词首字母大写
 *
 * @template T
 * @param {T} obj
 * @return {*}  {T}
 */
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    obj.name = obj.name
        .split(" ")
        .map(item => {
            item = item[0].toLocaleUpperCase() + item.substr(1);
            return item;
        })
        .join(" ")
    return obj
}


let peo = {
    name: "yu tai qi",
    age: 22,
    gender: "男"
}


console.log(nameToUpperCase(peo));

/**
 *将两个数组混合 
 * @template T
 * @template K
 * @param {T[]} arr1
 * @param {K[]} arr2
 * @return {*}  {((T | K)[])}
 */
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    let newArr: (T | K)[] = [];
    let num = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < num; i++) {
        if (arr1.length > i) {
            newArr.push(arr1[i])
        }
        if (arr2.length > i) {
            newArr.push(arr2[i])
        }
    }
    return newArr
}

let result = mixinArray([1,2,3,4,5,6,7],["a","b","c","d","e"])
console.log(result);

