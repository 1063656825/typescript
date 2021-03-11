interface Duck {
    sound : "嘎嘎嘎",
    swin():void
}

let person = {
    name : "鸭人",
    age : 1,
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    swin(){
        console.log(this.name + "游泳" + this.sound);
        
    }
}

let yy:Duck = person;
// 这样就能说名 person满足Duck .