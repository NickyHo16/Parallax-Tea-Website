document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburg");
  const navLinks = document.querySelector(".burgerMenue");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", function () {
    this.classList.toggle("checked");
    navLinks.classList.toggle("hidden");
  });

});



// Arrays Shop Artikle
let plants = ['Salvia','Rosemary','Thymian','Lavendula'];
let plantDescript = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque quidem. Quod, adipisci unde vel necessitatibus nulla asperiores? Similique, porro?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque quidem. Quod, adipisci unde vel necessitatibus nulla asperiores? Similique, porro?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque quidem. Quod, adipisci unde vel necessitatibus nulla asperiores? Similique, porro?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque quidem. Quod, adipisci unde vel necessitatibus nulla asperiores? Similique, porro?',
];
let plantPic = [
  './img/sage.jpg',
  './img/rosemary.jpg',
  './img/thym.jpg',
  './img/lavendula.jpg',
];

function render(){
  renderContent();
  renderShop();
}

function renderContent() {
  let content = document.getElementById('plantContent');
  content.innerHTML = '';

  console.log(content);

  for (let i = 0; i < plants.length; i++) {
    const plantsName = plants[i];
    const plantDescription = plantDescript[i];
    const plantPicture = plantPic[i];

    content.innerHTML += generateContentHTML(plantsName, plantDescription, plantPicture);

  }
 
}

function generateContentHTML(plantsName, plantDescription, plantPicture){
  return `  
            <div class="sortDescription">
                <div class="sortParts">
                <a href="sorts.html" target="_blank"><h3>${plantsName}</h3></a>
                <p>${plantDescription}</p>
                </div>
                <img src="${plantPicture}">
            </div>
  
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});



let shopArticle = ['Salvia','Rosemary','Thymian','Lavendula'];
let shopPlant = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam.',
                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam.',
                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam.',
                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam.'];
let shopPic = [
  'img/lavendula.jpg',
  'img/lavendula.jpg',
  'img/lavendula.jpg',
  'img/lavendula.jpg'
];

let shop2Pic = [
  'img/lavendula.jpg',
  'img/lavendula.jpg',
  'img/lavendula.jpg',
  'img/lavendula.jpg'
];

function renderShop() {
  let contentShop = document.getElementById('shopContent');
    contentShop.innerHTML = '';

  console.log(contentShop);

for (let i = 0; i < shopArticle.length; i++) {
    const plantsArticle = shopArticle[i];
    const plantsshop = shopPlant[i];
    const picturesShop = shopPic[i];

    contentShop.innerHTML += generateShopContentHTML(plantsArticle, plantsshop, picturesShop);

  }

  }
  
  function generateShopContentHTML(plantsArticle, plantsshop, picturesShop){
  return `  
            <img src="${picturesShop}" alt="shop-image-lavendula">
            <div>
            <h5 class="titleShopItem">${plantsArticle}</h5>
            <p class="itemDescription">${plantsshop}
            </p>
            <button class="css-button-sliding-to-bottom--green">
                buy now
            </button>
            </div>
  
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});




let products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    price: 24.99,
    currency: "EUR",
    stock: 15,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with blue switches",
    price: 79.99,
    currency: "EUR",
    stock: 8,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Notebook",
    description: "Minimalistic A5 notebook for daily notes",
    price: 6.49,
    currency: "EUR",
    stock: 42,
    category: "Stationery"
  }
];






