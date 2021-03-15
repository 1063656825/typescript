import { Dictionary } from "./dictionary";


let dec = new Dictionary<string,number>();

dec.set("a",1)

dec.set("a", 2)

dec.set("b", 2)
dec.set("a", 4)
console.log(dec.has("a"));
console.log(dec.size);
dec.delete("a")
dec.delete("a")
dec.forEach((k,v)=>{
    console.log(`${k}:${v}`);
    
})


