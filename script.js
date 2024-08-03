
const imgsContainer = document.getElementById("img");
const imgs = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;
 
      if (idx > imgs.length - 1) {
        idx = 0;
    }
    
    imgsContainer.style.transform = `translateX(${-idx * 1000}px)`;
}

setInterval(carrossel, 1800);

const carrinho = document.querySelector('.icone');
const cartElement = document.querySelector('.pesquisa');
const cartPedidos = document.querySelector('.pedidos')
const total = document.querySelector('.total_compra');
const cartCount = document.getElementById('item-count');
const cardItem = document.querySelectorAll('.item');
const cartButton = document.querySelectorAll('.botao_compra');

let cart = [];

carrinho.addEventListener('click', function(){
    cartElement.classList.toggle('fecha');

    updateCartModal()
})

cardItem.forEach((item) => {
  item.addEventListener('click', function(event){
    //console.log(event.target)
    let parentButton = event.target.closest(".botao_compra");
      
    if(parentButton){
      const name = parentButton.getAttribute("data-name");
      const price = parseFloat(parentButton.getAttribute("data-price"));
      const image = parentButton.getAttribute("data-image")
   
       addToCart(name, price, image)
    }
  })
})

function addToCart(name, price, image){
  const existItem = cart.find(item => item.name === name);
  
  if(existItem){
    existItem.quantity++;
     return
   } else{

    cart.push({
      image,
      name, 
      price,
      quantity: 1,
     })
  }
    updateCartModal()
}

function updateCartModal(){

  cartPedidos.innerHTML = '';
  let totalCart = 0;

  cart.forEach((elemento) => {
    const novoItem = document.createElement('div');
   
    novoItem.innerHTML = `<div>
                          <div class="pedidoCart">
                          <img src="${elemento.image}" />
                          <span class="item-name"> ${elemento.name}</span>
                          <span class="item-price">${elemento.price.toFixed(2)}</span>
                          <span class="item-quantity">Qtd: (${elemento.quantity})</span>                       
                          <button class="removerItem" data-name="${elemento.name}">Remover</button>
                          <button class="comprarItem">Comprar</button>
                          </div>
                          </div>       
                           </div>`

    totalCart += elemento.price * elemento.quantity;
    cartPedidos.appendChild(novoItem)
  })
   
  total.textContent = totalCart.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  cartCount.innerHTML = `(${cart.length})`;

  const comprar = document.querySelectorAll('.comprarItem')
 comprar.forEach((el) => {
    el.addEventListener('click', function(){
      window.location.href = 'compra.html';
    })   
  })
}
//função remover o item do carrinho
cartPedidos.addEventListener('click', function(event){
  if(event.target.classList.contains("removerItem")){
    const name = event.target.getAttribute("data-name");
    console.log(name)
    removeItemCart(name)
  }
})
function removeItemCart(name){
  const index = cart.findIndex(item => item.name === name);
  if(index !== -1){
    const item = cart[index];

    if(item.quantity > 1){
      item.quantity -= 1;
      console.log(item)
      return
    }
    cart.splice(index, 1)
    updateCartModal()
  }
}