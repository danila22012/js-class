// function hi(message){
//     return `hello ${message}`
// }


// var hi2=message=>`hello ${message}`;        
// console.log(hi2("User"));


function User(name){
    this.name=name,
    this.age=25;
    this.showName=()=>{
        //используем стрелочную функцию чтобы контекст функции нельзя 
        //было мменять чтобы она всегда выдаала имя из того обьекта в которой она была создана
        //this она берёт из скоупа(замыкание на обьект  котором находится)
        alert(this.name);
        
        
    }
}

var car={
    name:"Car",

}
var user1=new User("User-1")
// var user2=new User("User-2")

// user1.showName();
// user2.showName();

car.show=user1.showName;






