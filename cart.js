'use strict'

const products = [
    { id: 1, name: 'product-1' },
    { id: 2, name: 'product-2' },
    { id: 3, name: 'product-3' },
    { id: 4, name: 'product-4' },
    { id: 5, name: 'product-5' },
    { id: 6, name: 'product-6' },
]






const productManager = {
    products: [],
    cart: {},
    container: {},



    createCartProduct:function (event) {
        console.log(this.products)

        const id = +event.currentTarget.dataset.productId;
    
        const product = this.products.find(p => p.id === id);
        
        const wrap = document.createElement('div');
        wrap.className = 'cart-product';
        
        const h2 = document.createElement('h2');
        h2.innerHTML = product.name;
    
        wrap.appendChild(h2);   
    
        cart.appendChild(wrap);
    },


    render: function(){

        const create = this.createCartProduct.bind(this)

        for (let product of this.products) {

            const wrap = document.createElement('div');
            wrap.className = 'product';
        
            wrap.onclick = create;
        
            wrap.dataset.productId = product.id;
        
            const h2 = document.createElement('h2');
        
            h2.innerHTML = product.name;
        
            wrap.appendChild(h2);
        
            this.container.appendChild(wrap);
        }
    },

}

productManager.container = document.querySelector('#products');
productManager.cart = document.querySelector('#cart');
productManager.products=products;

productManager.render();


