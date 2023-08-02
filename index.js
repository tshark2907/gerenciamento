const button = document.getElementById('send');
const data = {
    name: document.getElementById('product_name'),
    url: document.getElementById('image_url'),
    price: document.getElementById('price'),
    discount: document.getElementById('discount_%')
};
class product{
    constructor(name, url, price, discount){
        this.name = name;
        this.url = url;
        this.price = price;
        this.discount = discount;
    }
}

const products = [];

let controle = 1;

products.forEach(product){
const holder = document.createElement('div');
holder.classList.add('product_frame');
const image = document.createElement('img');
image.classList.add('product_image')
if(product.)
}

button.addEventListener("click", () =>{
    if(data.name.value !== '' && data.url.value !== '' && data.price.value !== ''){
        let produto = new product
        (data.name.value,data.url.value,data.price,data.discount);
        products.push(produto);
        console.log(produto)
    }
})