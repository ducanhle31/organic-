// === HELP FUNCTIONS ===
// Random id
function randomId() {
  return Math.floor(Math.random() * 100000);
}

function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

let topproducts = [
 
  {
    star: 5,
    count: "hat",
    del: 430000,
    type: "sale",
    title: "Hạt điều trắng",

    id: randomId(),
    price: 330000,
    image: "./assets/images/products/cacloaihat/hat-dieu.webp",
  },
  {
    
    del: 60000,
   
    title: "Đào đỏ mỹ ",
    star: 5,
    id: randomId(),
    price: 55000,
    image: "./assets/images/products/hoaqua/dao.webp",
  },
  {
    star: 5,
    title: "Dâu tây đà lạt",
    
    id: randomId(),
    price: 200000,

    del: 300000,
    image: "./assets/images/products/hoaqua/dau-tay.webp",
  },



  {
    star: 5,
    count: "hoaqua",
    id: randomId(),
    type: "new",
    del: 330000,

    title: "Lê xanh Mỹ",
    price: 230000,
    image: "./assets/images/products/hoaqua/le-xanh.webp",
  },
 
  {
    star: 5,
    count: "hoaqua",
    del: 290000,
    type: "noibat",
    title: "Nho Mỹ nhập khẩu",

    id: randomId(),
    price: 235000,

    image: "./assets/images/products/hoaqua/nho.webp",
  },
 
  {
    price: 35000,
    star: 4.5,
    del: 40000,
    type: "new",
    count: "raucu",
    id: randomId(),
    title: "Gừng",
    image: "./assets/images/products/raucu/ginger_PNG16800.png",
  },
  
  {
    star: 5,
    count: "hat",
    del: 400000,
    type: "new",
    title: "Hạt hạnh nhân",

    id: randomId(),
    price: 320000,
    image: "./assets/images/products/cacloaihat/hanh-nhan.webp",
  },
  {
    star: 5,
    count: "hat",
    del: 300000,

    title: "Hạt điều khô",

    id: randomId(),
    price: 280000,
    image: "./assets/images/products/cacloaihat/hat-dieu-kho.webp",
  },

 
 

  {
    count: "haisan",
    del: 300000,
    star: 5,
    title: "Cua bể",
    type: "new",
    id: randomId(),
    price: 290000,
    image: "./assets/images/products/haisan/cua-be.webp",
  },
 
];

// === TRUY CẬP VÀO CÁC THÀNH PHẦN ===
let productsEle = document.querySelector(".topproducts ");

let countStar = (star) => {
  let resultStart = "";
  let full;
  let half;
  let nostar;
  if (star % 1 == 0) {
    full = star;
    nostar = 5 - star;
    half = 0;
  } else {
    full = star - 0.5;
    nostar = 5 - star - 0.5;
    half = 1;
  }
  for (let i = 0; i < full; i++) {
    resultStart += `<ion-icon name="star-sharp"></ion-icon>`;
  }
  resultStart += half ? `<ion-icon name="star-half-sharp"></ion-icon>` : "";
  for (let i = 0; i < nostar; i++) {
    resultStart += `<ion-icon name="star-outline"></ion-icon>`;
  }
  return resultStart;
};

// === MAIN FUNCTION ===
// Render và hiển thị dữ liệu top product
function renderUI(arr) {
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    productsEle.innerHTML += `
        <li class="top-product-item">
                <div class="product-card top-product-card">
                  <figure class="card-banner">
                    <img class='images'   width="189"
                    height="189"
                    loading="lazy" src=${p.image}></img>

                    <div class="btn-wrapper">
                      <button class="product-btn" aria-label="Add to Whishlist">
                        <a href="./../../cart.html">
                          <ion-icon name="basket-outline"></ion-icon>
                        </a>

                        <div class="tooltip">Mua ngay</div>
                      </button>

                      <button class="product-btn" aria-label="Quick View">
                        <a href="./product-details.html">
                          <ion-icon name="eye-outline"></ion-icon
                        ></a>
                        <div class="tooltip">Xem thêm</div>
                      </button>
                    </div>
                  </figure>

                  <div class="card-content">
                    <div class="rating-wrapper">
                     ${countStar(p.star)}
                    </div>

                    <h3 class="h4 card-title">
                      <a href="./product-details.html" >${p.title}</a>
                    </h3>

                    <div class="price-wrapper">
                      <del class="del">${convertMoney(p.del)}</del>

                  <data class="price">${convertMoney(p.price)}</data>
                    </div>
                  </div>
                </div>
              </li>






        `;
  }
}

window.onload = renderUI(topproducts);





/* produce */
// item filter

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".grid-list").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}
