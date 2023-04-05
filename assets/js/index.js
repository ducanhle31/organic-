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
    price: 25000,
    star: 3.5,
    del: 30000,
    type: "new",
    count: "hoaqua",
    id: randomId(),
    title: "Cam Navel ruột vàng",
    image: "./assets/images/products/hoaqua/cam.webp",
  },
  {
    price: 35000,
    star: 4.5,
    del: 40000,
    type: "new",
    count: "raucu",
    id: randomId(),
    title: "Khoai tây",
    image: "./assets/images/products/raucu/6.png",
  },
  {
    star: 4.5,
    count: "hoaqua",
    id: randomId(),
    title: "Chanh tươi",
    price: 15000,
    type: "new",
    del: 25000,
    image: "./assets/images/products/raucu/chanh.webp",
  },
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
    star: 4,
    title: "Dâu tây đà lạt",
    count: "hoaqua",
    id: randomId(),
    price: 200000,

    del: 300000,
    image: "./assets/images/products/hoaqua/dau-tay.webp",
  },
  {
    star: 4,
    title: "Súp lơ xanh",
    count: "raucu",
    id: randomId(),
    price: 200000,

    del: 300000,
    image: "./assets/images/products/raucu/5.png",
  },
  {
    star: 4,
    count: "hoaqua",
    id: randomId(),
    type: "noibat",
    del: 280000,

    title: "Dưa lưới nhập khẩu",
    price: 220000,
    image: "./assets/images/products/hoaqua/dua-luoi.webp",
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
    price: 25000,
    star: 4.5,
    del: 40000,
    type: "new",
    count: "raucu",
    id: randomId(),
    title: "Tỏi ta",
    image: "./assets/images/products/raucu/garlic_PNG12786.png",
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
    star: 4,
    count: "hoaqua",
    del: 320000,
    type: "sale",
    title: "Táo xanh Mỹ",

    id: randomId(),
    price: 240000,

    image: "./assets/images/products/hoaqua/tao.webp",
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
    price: 25000,
    star: 4.5,
    del: 30000,

    count: "raucu",
    id: randomId(),
    title: "Cà chua",
    image: "./assets/images/products/raucu/tomato.png",
  },
  {
    count: "hat",
    del: 490000,
    type: "noibat",
    title: "Quả óc chó",
    star: 5,
    id: randomId(),
    price: 430000,
    image: "./assets/images/products/cacloaihat/oc-cho.webp",
  },
  {
    star: 3,
    del: 900000,
    count: "haisan",
    title: "Cá hồi",
    type: "sale",
    id: randomId(),
    price: 720000,
    image: "./assets/images/products/haisan/ca-hoi-ta.webp",
  },
  {
    star: 5,
    count: "hat",
    del: 400000,
    type: "new",
    title: "Ngũ cốc",

    id: randomId(),
    price: 350000,
    image: "./assets/images/products/cacloaihat/wheat_PNG108.png",
  },
  {
    count: "haisan",
    del: 300000,
    star: 4.5,
    title: "Cua bể",
    type: "new",
    id: randomId(),
    price: 290000,
    image: "./assets/images/products/haisan/cua-be.webp",
  },
  {
    count: "haisan",
    del: 230000,
    type: "sale",
    title: "Mực Thanh Hóa",
    star: 3.5,
    id: randomId(),
    price: 130000,
    image: "./assets/images/products/haisan/muc-thanh-hoa.webp",
  },
  {
    star: 5,
    count: "hat",
    del: 200000,
    type: "new",
    title: "Đỗ xanh",

    id: randomId(),
    price: 150000,
    image: "./assets/images/products/cacloaihat/OIP.jpg",
  },
  {
    count: "haisan",
    del: 530000,
    type: "noibat",
    title: "Tôm biển",
    star: 5,
    id: randomId(),
    price: 330000,
    image: "./assets/images/products/haisan/tom-bien.webp",
  },
  {
    count: "haisan",
    del: 430000,
    type: "noibat",
    title: "Tôm biển",
    star: 5,
    id: randomId(),
    price: 330000,
    image:
      "./assets/images/products/haisan/thumb_350_b-ch-tu-c-t-i-9520524853278.jpg",
  },
  {
    count: "raucu",
    del: 90000,
    type: "new",
    title: "Hành tây",
    star: 4.5,
    id: randomId(),
    price: 55000,
    image: "./assets/images/products/raucu/hanh-tay.webp",
  },
  {
    count: "raucu",
    del: 30000,

    title: "Rau cải bẹ",
    star: 5,
    id: randomId(),
    price: 23000,
    image: "./assets/images/products/raucu/rau-cai.webp",
  },
  {
    star: 5,
    count: "raucu",
    del: 50000,
    type: "new",
    title: "Súp lơ trắng",

    id: randomId(),
    price: 30000,
    image: "./assets/images/products/raucu/sup-lo.webp",
  },
  {
    star: 4.5,
    count: "thit",
    del: 720000,
    type: "sale",
    title: "Ba chỉ bò mỹ",

    id: randomId(),
    price: 570000,
    image: "./assets/images/products/tuoisong/ba-chi-bo-my.webp",
  },
  {
    star: 4,
    count: "thit",
    del: 310000,
    type: "sale",
    title: "Sườn lợn Brazil",

    id: randomId(),
    price: 230000,
    image: "./assets/images/products/tuoisong/suon-lon-brazil.webp",
  },
  {
    star: 5,
    count: "thit",
    del: 630000,
    type: "sale",
    title: "Thịt bò Canada",

    id: randomId(),
    price: 510000,
    image: "./assets/images/products/tuoisong/thit-bo-canada.webp",
  },
  {
    star: 4,
    count: "thit",
    del: 310000,
    type: "sale",
    title: "Gà organic",

    id: randomId(),
    price: 230000,
    image: "./assets/images/products/tuoisong/chicken.png",
  },
  {
    star: 4.5,
    count: "thit",
    del: 550000,
    type: "new",
    title: "Thịt bò mỹ",

    id: randomId(),
    price: 470000,
    image: "./assets/images/products/tuoisong/thit-bo-my.webp",
  },
  {
    star: 3.5,
    count: "thit",
    del: 600000,
    type: "noibat",
    title: "Thịt bò thăn",

    id: randomId(),
    price: 570000,
    image: "./assets/images/products/tuoisong/thit-bo-than.webp",
  },
  {
    star: 4,
    count: "thit",
    del: 230000,
    type: "new",
    title: "Thịt lợn nạc vai",

    id: randomId(),
    price: 170000,
    image: "./assets/images/products/tuoisong/thit-lon-lac-vai.webp",
  },
  {
    star: 4,
    count: "thit",
    del: 530000,

    title: "Thịt bò Kobe",
    type: "noibat",
    id: randomId(),
    price: 520000,
    image: "./assets/images/products/tuoisong/9288725449286883500.webp",
  },
  {
    star: 5,
    count: "raucu",
    del: 1300000,
    type: "noibat",
    title: "Nấm linh chi",

    id: randomId(),
    price: 990000,
    image: "./assets/images/products/raucu/babaucothesudungnamlinhchimotc.webp",
  },
  {
    star: 5,
    count: "hoaqua",
    del: 90000,
    type: "noibat",
    title: "Chôm chôm",

    id: randomId(),
    price: 70000,
    image: "./assets/images/products/hoaqua/chomchom.webp",
  },
  {
    count: "hoaqua",
    del: 70000,
    star: 5,
    title: "Dứa vàng",
    type: "sale",
    id: randomId(),
    price: 50000,
    image: "./assets/images/products/hoaqua/imagepineapple5.webp",
  },
  {
    count: "hoaqua",
    del: 300000,
    type: "noibat",
    title: "Chery nhập khẩu",
    star: 5,
    id: randomId(),
    price: 270000,
    image: "./assets/images/products/hoaqua/congdungcuaquacherry3jpeg.webp",
  },
  {
    count: "hoaqua",
    del: 450000,
    star: 5,
    title: "Chuối Laba nhập Thái lan",
    type: "sale",
    id: randomId(),
    price: 370000,
    image: "./assets/images/products/hoaqua/227331.webp",
  },
  {
    count: "hoaqua",
    del: 300000,
    star: 3.5,
    title: "Lựu đỏ Nam Phi",
    type: "noibat",
    id: randomId(),
    price: 170000,
    image: "./assets/images/products/hoaqua/product7600x600.webp",
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
  for (let i = 0; i < 9; i++) {
    const p = arr[i];
    productsEle.innerHTML += `
 <li class="top-product-item">
              <div class="product-card top-product-card">

                <figure class="card-banner">
                    <img    width="100"
                    height="100"
                    loading="lazy" src=${p.image}></img>

                  <div class="btn-wrapper">
                   

                    <a class="product-btn"  href="./product-details.html" aria-label="Quick View">
                      <ion-icon name="eye-outline"></ion-icon>

                      <div class="tooltip">Xem thêm</div>
                    </a>
                  </div>
                </figure>

                <div class="card-content">

                  <div class="rating-wrapper">
                   ${countStar(p.star)}
                  </div>

                  <h3 class="h4 card-title">
                    <a href="./product-details.html">${p.title}</a>
                  </h3>

                  <div class="price-wrapper">
                   <del class="del">${convertMoney(p.del)}</del>

                  <data class="price">${convertMoney(p.price)}</data>
                  
                  </div>

                  <button class="btn btn-primary">Thêm vào giỏ</button>

                </div>

              </div>
            </li>

       
        `;
  }
}

window.onload = renderUI(topproducts);
/*
 */
/* product */
let list = document.querySelector(".lista");

function initApp() {
  topproducts.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("product-card", "card");
    newDiv.setAttribute("data-id", value.count);
    newDiv.innerHTML = `


 <li>
             

                <figure class="card-banner">
                  <img class='images'   width="189"
                    height="189"
                    loading="lazy" src=${value.image}></img>

                  <div class="btn-wrapper">
                 

                    <a class="product-btn"  href="./product-details.html" aria-label="Quick View">
                      <ion-icon name="eye-outline"></ion-icon>

                      <div class="tooltip">Xem thêm</div>
                    </a>
                  </div>
                </figure>

                <div class="rating-wrapper">
                 ${countStar(value.star)}
                </div>

                <h3 class="h4 card-title">
                  <a href="./product-details.html">${value.title}</a>
                </h3>

                <div class="price-wrapper">
                   <del class="del">${convertMoney(value.del)}</del>
                   <data class="price">${convertMoney(value.price)}</
                </div>

                <button class="btn btn-primary">Thêm vào giỏ</button>

             
            </li>




       `;
    list.appendChild(newDiv);
  });
}
initApp();

/* produce */
// item filter

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".lista").children;

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

/* slider TESTIMONIALS */

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
