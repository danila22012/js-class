'use strict'
const colors1=['red','green','blue','gray'];
const colors2=['pink','purple','brown','yellow'];

function SliderMethods () {

    this.next = function () {
        
        this.index ++;

        
        if(this.index>this.dataLength){
            this.index = 0;
        }
        this.wrap.style.backgroundColor = this.data[this.index]
        
    }


    this.prev = function () {                            
        console.log(this)
        this.index --;
       
        if(this.index<0){   
            this.index = this.dataLength;
        }
        this.wrap.style.backgroundColor = this.data[this.index]
    }

    this.render = function () {

        this.btnLeft.onclick = this.prev.bind(this);
        this.btnRight.onclick = this.next.bind(this);

        this.wrap.style.backgroundColor = this.data[this.index]

        this.wrap.append(
            this.btnLeft,
            this.btnRight
        );
        this.container.appendChild(this.wrap);
        

    }
}

Slider.prototype = new SliderMethods();

function Slider (data, containerId, defaultIndex) {
    this.wrap = document.createElement('div')
    this.wrap.className='slider';
    
    this.btnLeft = document.createElement('button')
    this.btnRight = document.createElement('button')
    console.log(this.btnRight);
    this.btnLeft.innerHTML="prev";
    this.btnRight.innerHTML="next";

    this.container = document.querySelector(containerId)
    this.index = defaultIndex;
    this.data = data;
    this.dataLength=data.length-1;
}

const slider1 = new Slider(colors1, '#slider-1', 0);

slider1.render()