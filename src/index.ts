
class User{
    readonly id: number
    // name : string
    // age : number
    gender: "男" | "女" = "男" //这是给它添加一个默认值
    phone?:number

    private _allText: number = 3;//限制的最大文章数
    private _nowText: number = 0;//当前的文章数

    // 访问器一般使用的是私有属性，私有属性一般还都是 _名 这样就避免的重名
    constructor(public name:string,private _age:number){//直接使用public 进行修饰就可以进行简写
        this.id = Math.random()
        // this.age = age;
        // this.name = name;
    }

    // 访问器
    set age(value: number){
        if(value < 0){
            this._age = 0;
        }else if(value > 200){
            this._age == 200;
        }else{
            this._age = value;
        }
    }

    get age(){
        return this._age;
    }
    

    publish(title:string){
        if(this._nowText < this._allText){
            console.log("发布一篇文章" + title);
            this._nowText += 1;
        }else{
            console.log("今天已达发布上限");
            
        }
    }
}

const u = new User("aa",2)
u.age = 12;
console.log(u.age);
u.publish("文章")
u.publish("文章")
u.publish("文章")
u.publish("文章")
u.publish("文章")
