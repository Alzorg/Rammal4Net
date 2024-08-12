const products = [
  {
    img: "img/rawter1.jpg",
    name: "AX5400",
    price: 299,
    id: "1",
  },
  {
    img: "img/ratwer2.jpg",
    name: "AX2400",
    price: 179,
    id: "2",
  },
  {
    img: "img/rawter3.jpg",
    name: "AC1200",
    price: 34,
    id: "3",
  },
  {
    img: "img/rawter4.jpg",
    name: "AC13124",
    price: 90,
    id: "4",
  },
  {
    img: "img/rawter5.jpg",
    name: "As1099",
    price: 110,
    id: "5",
  },
  {
    img: "img/rawter6.jpg",
    name: "Ax75550",
    price: 40,
    id: "6",
  },
  {
    img: "img/rawter7.jpg",
    name: "At0002",
    price: 15,
    id: "7",
  },
  {
    img: "img/rawter8.jpg",
    name: "Af14900",
    price: 420,
    id: "8",
  },
  {
    img: "img/rawter9.jpg",
    name: "Ae89910",
    price: 300,
    id: "9",
  },
  {
    img: "img/rawter10.jpg",
    name: "AU99001",
    price: 99,
    id: "10",
  },
  {
    img: "img/sw1.jpg",
    name: "HEYGEAR",
    price: 179,
    id: "11",
  },
  {
    img: "img/sw2.jpg",
    name: "NETGEAR",
    price: 100,
    id: "12",
  },
  {
    img: "img/sw3.jpg",
    name: "TP-Link",
    price: 490,
    id: "13",
  },
  {
    img: "img/sw4.jpg",
    name: "CBS110-16T-NA",
    price: 1000,
    id: "14",
  },
  {
    img: "img/sw5.jpg",
    name: "GS316EP",
    price: 69.95,
    id: "15",
  },
  {
    img: "img/sw6.jpg",
    name: "BAG",
    price: 36.5,
    id: "16",
  },
  {
    img: "img/sw7.jpg",
    name: "Cisco",
    price: 30,
    id: "17",
  },
  {
    img: "img/33-320-448-V01.jpg",
    name: "AUMOX PRO",
    price: 129.99,
    id: "18",
  },
  {
    img: "img/33-389-035-05.jpg",
    name: "QGOO AC1300Mbps",
    price: 22,
    id: "19",
  },
  {
    img: "img/B6BJS2308240TKJ42F1.jpg",
    name: "BrosTrend 1200Mbps",
    price: 27,
    id: "20",
  },
  {
    img: "img/usbNIS.jpg",
    name: "CAT6 Network",
    price: 50,
    id: "21",
  },
  {
    img: "img/wifiUSB.jpg",
    name: "USB-N",
    price: 11.5,
    id: "22",
  },
  {
    img: "img/wifiUSB.jpg",
    name: "U-W-600",
    price: 17,
    id: "23",
  },
];


const cartArray = [];
const cartItem = document.querySelectorAll(".cart");
function addCart(element) {
    element.addEventListener("click", function () {
      const productId = element.dataset.productId;
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
  
      cartArray.push(selectedProduct);
  
      console.log("Added to cart:", selectedProduct);
      populateProductsCart(cartArray); 
      showAddedToCartMessage(selectedProduct.name);
    });
  }
  
  cartItem.forEach(addCart);

const openCheckout = document.querySelector(".cartmenu");
const showCartTrigger = document.querySelector(".checkout");

function showCart() {
  openCheckout.classList.remove("hidden");
}

showCartTrigger.addEventListener("click", showCart);

const closeCheckout = document.querySelector(".cartmenu .closeCart");

function hideCart() {
  openCheckout.classList.add("hidden");
}

closeCheckout.addEventListener("click", hideCart);

function createHTMLProductCart(cartItem) {
  let cardHTML = `
      <div class="card w-52 shadow-md">
        <div class="img-wrapper border h-52 w-52 overflow-hidden">
          <img class="h-full max-w-none" src="${cartItem.img}" alt="" />
        </div>
        <div class="card-details p-2">
          <div class="flex justify-between items-center">
            <h3 class="product-name" style="color: black;">${cartItem.name}</h3>
  
  
            <i onclick="removeProductFromCart('${cartItem.id}')" class="far fa-times-circle cursor-pointer"></i>
  
            
          </div>
          <div class="flex justify-between">
            <div class="price">$${cartItem.price}</div>
            
          </div>
        </div>
      </div>
    `;
  return cardHTML;
}

let cartsGrid = document.querySelector(".cartObjects");
function populateProductsCart(cartArray) {
  cartsGrid.innerHTML = "";
  cartArray.forEach(function (cartItem) {
    let cardHTML = createHTMLProductCart(cartItem);
    cartsGrid.innerHTML += cardHTML;
  });

  const cartTotalElement = document.getElementById("cartTotal");
  const total = calculateCartTotal(cartArray);
  cartTotalElement.textContent = total.toFixed(2);
}

populateProductsCart(cartArray);
let targetIndex = products.findIndex((product) => product.id === product);
function removeProductFromCart(productId) {
  const selectedIndex = cartArray.findIndex(
    (product) => product.id === productId
  );

  if (selectedIndex !== -1) {
    const removedProduct = cartArray.splice(selectedIndex, 1)[0];
    console.log("Product removed from cart:", removedProduct);
    populateProductsCart(cartArray); 
  } else {
    console.log("Product not found in cart");
  }
}

function calculateCartTotal(cartArray) {
  return cartArray.reduce((total, product) => total + product.price, 0);
}

function showAddedToCartMessage(productName) {
  const addedToCartMessage = document.getElementById("addedToCartMessage");
  addedToCartMessage.textContent = `${productName} added to cart`;
  addedToCartMessage.classList.add("show");

  setTimeout(() => {
    addedToCartMessage.textContent = "";
    addedToCartMessage.classList.remove("show");
  }, 2000);
}

function removeAllProducts() {
  cartArray.length = 0;
  populateProductsCart(cartArray);
}
