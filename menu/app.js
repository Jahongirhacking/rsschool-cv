const BASE_IMG_PATH = "../assets";
const ProductsContainer = document.getElementById("products");
const coffeeBtn = document.getElementById("coffee-btn");
const teaBtn = document.getElementById("tea-btn");
const dessertBtn = document.getElementById("dessert-btn");

const menu = {
  coffee: [
    {
      img: `${BASE_IMG_PATH}/coffee/coffee-1.jpg`,
      name: "Irish coffee",
      info: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      cost: "$7.00",
    },
    {
      img: `${BASE_IMG_PATH}/coffee/coffee-2.jpg`,
      name: "Kahlua coffee",
      info: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      cost: "$7.00",
    },
    {
      img: `${BASE_IMG_PATH}/coffee/coffee-3.jpg`,
      name: "Honey raf",
      info: "Espresso with frothed milk, cream and aromatic honey",
      cost: "$5.50",
    },
    {
      img: `${BASE_IMG_PATH}/coffee/coffee-4.jpg`,
      name: "Ice cappuccino",
      info: "Cappuccino with soft thick foam in summer version with ice",
      cost: "$5.00",
    },
    {
      img: `${BASE_IMG_PATH}/coffee/coffee-5.jpg`,
      name: "Espresso",
      info: "Classic black coffee",
      cost: "$4.50",
    },
    {
      img: `${BASE_IMG_PATH}/coffee/coffee-6.jpg`,
      name: "Latte",
      info: "Espresso coffee with the addition of steamed milk and dense milk foam",
      cost: "$5.50",
    },
    {
      img: `${BASE_IMG_PATH}/coffee/coffee-7.jpg`,
      name: "Latte macchiato",
      info: "Espresso with frothed milk and chocolate",
      cost: "$5.50",
    },
    {
      img: `${BASE_IMG_PATH}/coffee/coffee-8.jpg`,
      name: "Coffee with cognac",
      info: "Fragrant black coffee with cognac and whipped cream",
      cost: "$6.50",
    },
  ],
  tea: [
    {
      img: `${BASE_IMG_PATH}/tea/tea-1.jpg`,
      name: "Maroccan",
      info: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      cost: "$4.50",
    },
    {
      img: `${BASE_IMG_PATH}/tea/tea-2.jpg`,
      name: "Ginger",
      info: "Original black tea with fresh ginger, lemon and honey",
      cost: "$5.00",
    },
    {
      img: `${BASE_IMG_PATH}/tea/tea-3.jpg`,
      name: "Cranberry",
      info: "Invigorating black tea with cranberry and honey",
      cost: "$5.00",
    },
    {
      img: `${BASE_IMG_PATH}/tea/tea-4.jpg`,
      name: "Sea buckthorn",
      info: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      cost: "$5.50",
    },
  ],
  dessert: [
    {
      img: `${BASE_IMG_PATH}/dessert/dessert-1.jpg`,
      name: "Marble cheesecake",
      info: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      cost: "$3.50",
    },
    {
      img: `${BASE_IMG_PATH}/dessert/dessert-4.jpg`,
      name: "Creme brulee",
      info: "Delicate creamy dessert in a caramel basket with wild berries",
      cost: "$4.00",
    },
    {
      img: `${BASE_IMG_PATH}/dessert/dessert-5.jpg`,
      name: "Pancakes",
      info: "Tender pancakes with strawberry jam and fresh strawberries",
      cost: "$4.50",
    },
    {
      img: `${BASE_IMG_PATH}/dessert/dessert-8.jpg`,
      name: "Black forest",
      info: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      cost: "$6.50",
    },
  ],
};

const displayProducts = (type, target = coffeeBtn) => {
  // Active
  [coffeeBtn, teaBtn, dessertBtn].forEach((btn) => {
    if (btn === target) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  const products = new Array(...menu[type]);
  ProductsContainer.innerHTML = "";
  products.map((prod) => {
    // Card
    const card = document.createElement("article");
    card.setAttribute("class", "product-card");
    // Image
    const imageBox = document.createElement("div");
    imageBox.setAttribute("class", "card__image");
    const image = document.createElement("img");
    image.setAttribute("src", prod.img);
    // Content
    const contentBox = document.createElement("div");
    contentBox.setAttribute("class", "card__content");
    // Name
    const name = document.createElement("h2");
    name.textContent = `${prod.name}`;
    // Info
    const info = document.createElement("p");
    info.textContent = `${prod.info}`;
    // Cost
    const cost = document.createElement("b");
    cost.textContent = `${prod.cost}`;
    // Body
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card__body");
    // Appending
    imageBox.appendChild(image);
    contentBox.appendChild(name);
    contentBox.appendChild(info);
    cardBody.appendChild(contentBox);
    cardBody.appendChild(cost);
    card.appendChild(imageBox);
    card.appendChild(cardBody);
    ProductsContainer.appendChild(card);
  });
};

const handleResize = () => {
  if (window.innerWidth < 760) {
    document.querySelector(".nav__panel").classList.add("hidden");
    document.querySelector(".nav > i.fa-bars").classList.remove("hidden");
  } else {
    document.querySelector(".nav__panel").classList.remove("hidden");
    document.querySelector(".nav > i.fa-bars").classList.add("hidden");
  }
};

window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", () => {
  handleResize();
});

document.addEventListener("DOMContentLoaded", () =>
  displayProducts(localStorage.getItem("type") || "coffee")
);

coffeeBtn.addEventListener("click", (e) =>
  displayProducts("coffee", coffeeBtn)
);

teaBtn.addEventListener("click", (e) => displayProducts("tea", teaBtn));

dessertBtn.addEventListener("click", () =>
  displayProducts("dessert", dessertBtn)
);
