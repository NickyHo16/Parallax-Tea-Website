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
  './img/thym.jpg',
  './img/thym.jpg',
  './img/thym.jpg',
  './img/thym.jpg',
];

function render(){
  renderContent();
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






