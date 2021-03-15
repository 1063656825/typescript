function shuffle<T>(arr: T[]): T[] {
    arr.forEach((item, index) => {
        let tempIndex = random(0, arr.length)
        let temp = arr[tempIndex];
        arr[tempIndex] = item;
        arr[index] = temp;
    })
    return arr
}

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

let arr = ["1","2","3","4"];
console.log(shuffle<string>(arr));
