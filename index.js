const button = document.getElementById('send');
const data = {
    name: document.getElementById('product_name'),
    url: document.getElementById('image_url'),
    price: document.getElementById('price'),
    discount: document.getElementById('discount_%')
};
const container = document.querySelector('.products_holder');

class Product {
    constructor(name, url, price, discount) {
        this.name = name;
        this.url = url;
        this.price = price;
        this.discount = discount;
    }
}

const products = [];

// Função para criar e adicionar os elementos do produto ao DOM
function createProductElement(product) {
    const holder = document.createElement('div');
    holder.classList.add('product_frame');

    const image = document.createElement('img');
    image.classList.add('product_image');
    image.src = product.url;

    const product_name = document.createElement('span');
    product_name.classList.add('product_title');
    product_name.textContent = product.name;

    const product_discount = document.createElement('span');
    product_discount.classList.add('product_discount');
    product_discount.textContent = product.discount;

    holder.appendChild(image);
    holder.appendChild(product_name);
    holder.appendChild(product_discount);

    container.appendChild(holder);
}

button.addEventListener("click", () => {
    if (data.name.value !== '' && data.url.value !== '' && data.price.value !== '') {
        let produto = new Product(data.name.value, data.url.value, data.price.value, data.discount.value);
        products.push(produto);
        console.log(produto);

        createProductElement(produto); // Chama a função para criar e adicionar os elementos do produto ao DOM
    }
});
