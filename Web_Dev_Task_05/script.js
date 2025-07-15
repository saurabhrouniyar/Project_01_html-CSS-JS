let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

/* ===== CART & BUY ===== */
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
const cartIcon = document.querySelector('.fa-shopping-cart');
const badge = document.createElement('span');
badge.className = 'cart-count';
cartIcon.appendChild(badge);
updateBadge();

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateBadge();
  alert(`${name} added to cart`);
}
function updateBadge(){ badge.textContent = cart.length; }

document.querySelectorAll('.add-cart').forEach(btn=>{
  btn.addEventListener('click', e=>{
     const card = e.target.closest('.box');
     const name = card.querySelector('h3').innerText;
     const price = card.querySelector('.price').childNodes[0].textContent.trim();
     addToCart(name, price);
  });
});

document.querySelectorAll('.buy-now').forEach(btn=>{
  btn.addEventListener('click', e=>{
     const card = e.target.closest('.box');
     const name = card.querySelector('h3').innerText;
     const price = card.querySelector('.price').childNodes[0].textContent.trim();
     alert(`Thanks for buying ${name} for ${price}!`);
  });
});

cartIcon.addEventListener('click', ()=>{
  if(!cart.length) return alert('Cart is empty');
  const list = cart.map((it,i)=>`${i+1}. ${it.name} — ${it.price}`).join('\n');
  if(confirm(`Items in cart:\n${list}\n\nPlace order?`)){
     alert('Order placed successfully 🎉');
     cart = [];
     localStorage.removeItem('cart');
     updateBadge();
  }
});
