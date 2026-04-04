document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburg");
  const navLinks = document.querySelector(".burgerMenue");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", function () {
    this.classList.toggle("checked");
    navLinks.classList.toggle("hidden");
  });
});

let plants = ['Salvia','Rosemary','Thymian','Lavendula'];
let plantDescript = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque quidem. Quod, adipisci unde vel necessitatibus nulla asperiores? Similique, porro?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque quidem. Quod, adipisci unde vel necessitatibus nulla asperiores? Similique, porro?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque quidem. Quod, adipisci unde vel necessitatibus nulla asperiores? Similique, porro?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, neque quidem. Quod, adipisci unde vel necessitatibus nulla asperiores? Similique, porro?',
];
let plantPic = [
  'src="./img/thym.jpg"',
  'src="./img/thym.jpg"',
  'src="./img/thym.jpg"',
  'src="./img/thym.jpg"',
];




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






