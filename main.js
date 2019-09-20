'use strict'
function click(){
    console.log(this)
}



let data=[
    {name:'home',link:'/'},
    {name:'About us',link:'page/about-us'},
    {name:'Contacts',link:'page/contacts'},
    {name:'Gallery',link:'page/gallery'},
    {

        name:'Catalog',
        link:'page/catalolg',
        child:[
            {name:'Category-1',link:'catgory/1'},
            {name:'Category-2',link:'catgory/2'},
            {name:'Category-3',link:'catgory/3'},
        ]

},              
    {name:'Support',link:'page/support'},
]           

function hover(e){
   console.log(e)
}



let ul=document.querySelector('#menu')
 let html='';

data.forEach(function (item){//переменная для обьектов внутри массива
    var childhtml=""
    if(item.child){//проверка на дочерний елемент
        childhtml='<ul >'
        item.child.forEach(function(item){   
            childhtml+=`<li><a  href=${item.link}>${item.name}</a></li>`;
        });
        childhtml+="</ul>"

    }
    var event = item.child? 'onmouseenter="hover(this)"': '';
   html+=`<li class="drop"${event}><a  href=${item.link}>${item.name}</a>${childhtml}</li>`;
   
})
ul.innerHTML=html;




let a=1;
let b=a++;
console.log(a)
console.log(b)



