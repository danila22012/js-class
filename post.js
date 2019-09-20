var url='http://blog.api.axenov-it.com/posts';
function format(response){
    return response.json();

}


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


//колбек это ссылка на другую функцию











