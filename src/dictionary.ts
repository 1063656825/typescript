export type callback<T, V> = (key: T, val: V) => void;

export class Dictionary<K, V>{
    private key: K[] = [];
    private value: V[] = [];
    get size() {
        return this.key.length
    }
    set(key: K, value: V) {

        if (this.has(key)) {
            // let index = this.key.findIndex((value, i) => {
            //     console.log(typeof value, typeof key, value === key);
            //     return value === key
            // })
            let index = this.key.indexOf(key)
            this.value[index] = value
            console.log(this.key, this.value);


        } else {
            this.key.push(key);
            this.value.push(value)
            console.log(this.key, this.value);
        }
    }

    has(key: K) {
        return this.key.includes(key);
    }

    forEach(callback: callback<K, V>) {
        this.key.forEach((k, i) => {
            const v = this.value[i];
            callback(k, v)
        })
    }
    delete(key: K) {
        if (this.has(key)) {
            let index = this.key.indexOf(key)
            this.key.splice(index, 1);
            this.value.splice(index, 1)
        } else {
            return
        }
    }
}