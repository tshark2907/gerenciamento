const buttons = {
    create_section: document.querySelector('#create_section'),
    create_product: document.querySelector('#create_product'),
    send_category: document.querySelector('#send_category'),
    send_product: document.querySelector('#send_product'),
    add_product: document.querySelector('#add_product'),
    add_category: document.querySelector('.add_category')
}//usado pra organizar os botões de ação na pagina
const data = {
    name: document.querySelector('#product_name'),
    url: document.querySelector('#image_url'),
    price: document.querySelector('#price'),
    discount: document.querySelector('#discount_product')
}//usado pra modelar as informações obtidas no form de produtos
const form = {
    general: document.querySelector('.form_area'),
    category: document.querySelector('.new_category'),
    product: document.querySelector('.new_product')
}//necessário pra exibir o form quando um dos botoes for clicado
const categoryData = {
    category_name: document.getElementById('category_name'),
    category_background: document.getElementById('category_background')
}//usado pra modelar as informações obtidas no form de categoria
const preview = {
    container: document.querySelector('.preview_container'),
    banner: document.querySelector('.banner_container'),
    product: document.querySelector('.product')
}//usado pra mudar as propriedades css da categoria preview, e usar no codigo
const inventario = {
    container:document.querySelector('.inventario'),
    categoria: document.querySelector('.preview_categories')
}
class Category {
    constructor(category_name,category_background,products){
        this.name = category_name;
        this.background = category_background;
        this.products = products;
    }
}//usado pra modelar o objeto Category, a ser inserido num json
class Product {
    constructor(name, url, price, discount) {
        this.name = name.value;
        this.url = url.value;
        this.price = price.value;
        this.discount = discount.value;
    }
}//usado pra modelar as informações de produto

const products = []; //variavel de armazenamento de produtos

let productCounter = 0; //variavel de controle

const toBeSent = [];//json final a ser enviado

let categoryCounter = 0;//variavel de controle

//Função para criar a categoria e adcionar ela ao array de itens a serem enviados.
function createCategory(categoryData){
    if(categoryData.category_name.value !== ''){
        let categoria = new Category(categoryData.category_name.value,categoryData.category_background.value)
        toBeSent.push(categoria);
/*ate aqui, ele cria um objeto com a categoria desejada e adciona 
ao objeto que irá se tornar um json*/
        console.log(categoria)
        preview.container.style.display = 'inline';

        const banner_container = document.createElement('div');
        banner_container.classList.add('banner_container');
        banner_container.style.background = `url: ${category_background}`

        const banner_title = document.createElement('span');
        banner_title.classList.add('banner_title');
        banner_title.textContent = category_name;

        const stand_container = document.createElement('div');
        stand_container.classList.add('stand_container');

        const chevronLeft = document.createElement('span');
        chevronLeft.classList.add('material-symbols-outlined left_button button');
        
        const chevronRight = document.createElement('span');
        chevronRight.classList.add('material-symbols-outlined right_button button');

        const stand = document.createElement('div');
        stand.classList.add(`stand stand_${categoryCounter}`);
/* com isso, pelo menos o stand criado possui um identificador unico com o 
número mutavel, dependendo de cada instancia*/

        categoryCounter ++;

        preview.container.appendChild(banner_container);
        banner_container.appendChild(banner_title);
        preview.container.appendChild(stand_container);
        stand_container.appendChild(chevronLeft,chevronRight);
        stand_container.appendChild(stand);
/*Após isso, a categoria é criada corretamente, agora preciso entender como acrescentar
 o produto nessa categoria mesmo quando o cliente não criar ele de uma vez*/
    } 
}
function createProduct(data) {
/*if (data.name.value !== '' && data.url.value !== '' && data.price.value !== '') {*/
    let produto = new Product(data.name, data.url, data.price, data.discount);
    products.push(produto);
    console.log(produto);

    console.log(produto.name)
    console.log(produto.price)

    const product = document.createElement('div');
    product.classList.add("product");
    product.classList.add(`product_${productCounter}`);
    productCounter++;

    const image = document.createElement('img');
    image.classList.add('product_image');
    image.src = produto.url;

    const product_discount_container = document.createElement('div');
    product_discount_container.classList.add('product_discount_container');

    const product_discount = document.createElement('span');
    product_discount.classList.add('product_discount')
    product_discount.textContent = `${produto.discount}!`;

    const product_title_container = document.createElement('div');
    product_title_container.classList.add('product_title_container');

    const product_title = document.createElement('span');
    product_title.classList.add('product_title')
    product_title.textContent = `${produto.name} `

    const product_price = document.createElement('span');
    product_price.classList.add('product_price');

    let final_price = produto.price - (produto.price * produto.discount / 100);
    product_price.textContent = `${ final_price.toFixed(2)} R$`

    inventario.container.appendChild(product);
    product.appendChild(image);
    product.appendChild(product_discount_container);
    product_discount_container.appendChild(product_discount);
    product.appendChild(product_title_container);
    product_title_container.appendChild(product_title);
    product_title_container.appendChild(product_price);

/*O produto é criado de acordo com os parâmetros do formulário, e seu elemento
é criado e estilizado corretamente, já calculando o desconto de acordo com a
porcentagem, porém, ele não é atrelado a nada ainda. */
   }
/*Esta é a parte do código que não está dando certo, eu não consegui pensar
em uma forma de atrelar  o produto a uma categoria, também é necessário criar
uma condicional para, se não houver categoria, o produto ser armazenado em
um "inventário."*/

/*Pensei em criar um outro formulário na página que exiba as categorias para
o usuário no momento de criação do produto, pra atrelar no momento de criação*/


buttons.send_category.addEventListener("click", () => {
    createCategory();
    form.general.classList.toggle('hidden')
});

buttons.send_product.addEventListener('click', () => {
    createProduct(data);
});

buttons.create_product.addEventListener('click', () =>{
inventario.container.classList.toggle('hidden');
} )

buttons.add_product.addEventListener('click', () => {
    form.general.classList.toggle('hidden');
    form.product.classList.toggle('hidden');
})
buttons.create_section.addEventListener('click', () => {
    inventario.categoria.classList.toggle('hidden');

    if(!inventario.container.classList.contains('hidden')){
    inventario.container.classList.add('hidden');
    }
})

buttons.add_category.addEventListener('click', () => {
    form.category.classList.toggle('hidden');

    if(!form.product.classList.contains('hidden')){
        form.product.classList.add('hidden');
    }
})

