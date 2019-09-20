//11.08

var names = ["vasa", "pitya", "olya", "anya"];
var cities = ["Dnepr", "Kyiv", "Odessa", "Lviv"];


///////////////////////
function show(arr){
   for(var v of arr){
     alert(v)
     }
}



show(cities);
show(names);
///////////////////////
function sum()
{
    var arr=[];
    for(var value of arguments)
    {
        for(var v of value){
            arr.push(v)
        }
    }
    return(arr)
}

var array=sum(names,cities);
console.log(array);
//11.08

///////////////////////
var a=null;
var b=5;
 if(b===5){
     a=b+1;
 }else{
     a=10;
 }
var a=(b===50)?b+1:10;

///////////////////////

var names = ["vasa", "pitya", "anotonio", "ol"]
var list = document.getElementById("list-names");
var main = document.querySelector("h1");
var html="";
for(var name of names){
    html += "<li>"+name+"</li>";
    
}
list.innerHTML=html;

///////////////////////

function sum(a, b) {
    alert("asdasd");
}


var btn = document.querySelector("button");

btn.onclick = sum;



//16.08


'use strict'
var a=5

function Parent (a){
    var a=8;
    function child(){
        a = 10;
    }
}


Parent();
console.log(a)

//20.08


var user={
    name:'vasa'
}

var user2=User;
//в user хранится ссылка на обьект,а не сам обьект/ с массивами также 
user2.name="pitya";

console.log(user);

////////////Функции в обьекте для группировки

var cart = {};
cart.send=function() {
    alert("send products");
}
cart.valid=function() {
    alert("send products");
}
cart.send();



//30.08
function add(){
    console.log(this.name)

}


var Cart={
    name:'cart'
}
add.apply(Cart, [1,2])
add.call(Cart, 1,2)

var User={
    name:'user'
}
add.apply(User,[1,2])





//01.09


//{a:0}
function Parent(){
    var a=0;
    //{} scope:Parent{a:0}
    function child(){
        a++;
        return a;
    }

    return child;
}

var a = Parent();
console.log(a())
console.log(a())
console.log(a())

// /////

//{a:0}
function Parent(){
    var a=0;
     //{} scope:Parent{a:0}
     function child(){
         a++;
         return a;
     }
 
     return child;
 }
 
 var a = Parent();
 console.dir(Parent)
// незамкнутая функция = чистая

/////////Nasledovanie


var Pay={
    send: function(){
        var a='dsadas';
        console.log("send");
    },
}

var privat={
    
    buy:function(){
        console.log("privat buy");
    }
    
}


var pumb={
   
    buy:function(){
        console.log("pumb buy");
    }

}


pumb.__proto__=Pay;// невидимый ключ обьекта в который мы сохраняем ссылку на pay
privat.__proto__=Pay;
pumb.send();//pumb.__proto__.send()прото непишем
privat.send();

/////////Construct


function buildCar(nameCar){//this сам создаёт обьект, и сам пишет ретёрн.
    this.name=nameCar;
    this.doors=4;

    
}

var a6=new buildCar('audi-6')// new перед функцией вызывает конструктор
 var a8=new buildCar('audi-8')

console.dir(a6);
console.log(a8);



////////////////// 6.09/////////
 

'use strict'

let btn=document.querySelector("#mybtn")
btn.onclick=magic;
btn.className="unclicked"

function magic(){
    if(this.className==="clicked"){
        this.className="unclicked"
    }
    else{
        this.className="clicked"
    }
}
///////////////8.09///////////////


var url='http://blog.api.axenov-it.com/posts';



fetch(url)
.then(function (response){
    return response.json();
})
.then(function (data){//во второй зен попадает ритёрн из первого и газначается на переменную в парметре
    let container = document.querySelector("#list-posts");
    
    

    data.forEach(function(post){//к каждому елементу применяем функцию где елемент массива это пост
        var template = document.createElement('div');
        template.className='post';
        
        var likes = document.createElement('i');
        likes.innerHTML=post.likes;

        var h2 = document.createElement('h2');
        h2.innerHTML=post.title;


        var p = document.createElement('p');
        p.innerHTML=post.description;


        template.append(h2,p,likes);
        container.appendChild(template)
       

        

    })
    

})
//////////20.09/////////////////
(function (){//АНОНИМНАЯ ФУНКЦИЯ
    function show(){
        console.log("yolo")
        
    }
    function send(){
        console.log("yolo2")
        
    }
    var user={name:"vasa",age:25};
    user.pay=function(){
        show();
        send();
    }
    window.myUser=user;//вывели в глобальную область
})();

myUser.pay();




//////////////////////////СТРЕЛОЧНАЯ ФУНКЦИЯ


function hi(message){
    return `hello ${message}`
}


var hi2=message=>`hello ${message}`;        
console.log(hi2("User"));


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
var user2=new User("User-2")

user1.showName();
user2.showName();

car.show=user1.showName;

