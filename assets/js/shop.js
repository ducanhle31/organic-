
/* filter */
const btns = [
  {
    id: 1,
    name: "Hoa quả",
  },
  {
    id: 2,
    name: "Rau củ",
  },
  { id: 3, name: "Các loại hạt" },
  { id: 4, name: "Hải sản" },
  { id: 5, name: "Thực phẩm tươi sống" },
];
const filters = [
  ...new Set(
    btns.map((btn) => {
      return btn;
    })
  ),
];

document.getElementById("btns").innerHTML = filters
  .map((btn) => {
    var { name, id } = btn;
    return (
      "<button class='fil-p' onclick='filterItems(" + id + `)'>${name}</button>`
    );
  })
  .join("");

const product = [
  {
    price: 25000,
    count: 6,
    del: 30000,

    id: 1,
    title: "Cam Navel ruột vàng",
    image: "./assets/images/products/hoaqua/cam.webp",
  },
  {
    id: 1,
    title: "Chanh tươi",
    price: 15000,
    count: 6,
    del: 25000,
    image: "./assets/images/products/raucu/chanh.webp",
  },
  {
    count: 6,
    del: 60000,

    title: "Đào đỏ mỹ ",
    id: 1,
    price: 55000,
    image: "./assets/images/products/hoaqua/dao.webp",
  },
  {
    title: "Dâu tây đà lạt",
    id: 1,
    price: 200000,
    count: 6,
    del: 300000,
    image: "./assets/images/products/hoaqua/dau-tay.webp",
  },
  {
    id: 1,
    count: 7,
    del: 280000,

    title: "Dưa lưới nhập khẩu",
    price: 220000,
    image: "./assets/images/products/hoaqua/dua-luoi.webp",
  },
  {
    id: 1,
    count: 7,
    del: 330000,

    title: "Lê xanh Mỹ",
    price: 230000,
    image: "./assets/images/products/hoaqua/le-xanh.webp",
  },
  {
    count: 7,
    del: 290000,

    title: "Nho Mỹ nhập khẩu",
    id: 1,
    price: 235000,

    image: "./assets/images/products/hoaqua/nho.webp",
  },
  {
    count: 7,
    del: 320000,

    title: "Táo xanh Mỹ",
    id: 1,
    price: 240000,

    image: "./assets/images/products/hoaqua/tao.webp",
  },
  {
    count: 7,
    del: 200000,

    title: "Vải thiều",
    id: 1,
    price: 90000,

    image: "./assets/images/products/hoaqua/vai-thieu.webp",
  },
  {
    count: 6,
    del: 400000,

    title: "Hạt hạnh nhân",
    id: 3,
    price: 320000,
    image: "./assets/images/products/cacloaihat/hanh-nhan.webp",
  },
  {
    count: 6,
    del: 300000,

    title: "Hạt điều khô",
    id: 3,
    price: 280000,
    image: "./assets/images/products/cacloaihat/hat-dieu-kho.webp",
  },
  {
    count: 6,
    del: 430000,

    title: "Hạt điều trắng",
    id: 3,
    price: 330000,
    image: "./assets/images/products/cacloaihat/hat-dieu.webp",
  },
  {
    count: 7,
    del: 490000,

    title: "Quả óc chó",
    id: 3,
    price: 430000,
    image: "./assets/images/products/cacloaihat/oc-cho.webp",
  },
  {
    count: 6,
    del: 900000,

    title: "Cá hồi",
    id: 4,
    price: 720000,
    image: "./assets/images/products/haisan/ca-hoi-ta.webp",
  },
  {
    count: 7,
    del: 300000,

    title: "Cua bể",
    id: 4,
    price: 290000,
    image: "./assets/images/products/haisan/cua-be.webp",
  },
  {
    count: 6,
    del: 230000,

    title: "Mực Thanh Hóa",
    id: 4,
    price: 130000,
    image: "./assets/images/products/haisan/muc-thanh-hoa.webp",
  },
  {
    count: 6,
    del: 530000,

    title: "Tôm biển",
    id: 4,
    price: 330000,
    image: "./assets/images/products/haisan/tom-bien.webp",
  },
  {
    count: 7,
    del: 90000,

    title: "Hành tây",
    id: 2,
    price: 55000,
    image: "./assets/images/products/raucu/hanh-tay.webp",
  },
  {
    count: 6,
    del: 30000,

    title: "Rau cải bẹ",
    id: 2,
    price: 23000,
    image: "./assets/images/products/raucu/rau-cai.webp",
  },
  {
    count: 7,
    del: 50000,

    title: "Súp lơ trắng",
    id: 2,
    price: 30000,
    image: "./assets/images/products/raucu/sup-lo.webp",
  },
  {
    count: 6,
    del: 720000,

    title: "Ba chỉ bò mỹ",
    id: 5,
    price: 570000,
    image: "./assets/images/products/tuoisong/ba-chi-bo-my.webp",
  },
  {
    count: 7,
    del: 310000,

    title: "Sườn lợn Brazil",
    id: 5,
    price: 230000,
    image: "./assets/images/products/tuoisong/suon-lon-brazil.webp",
  },
  {
    count: 6,
    del: 630000,

    title: "Thịt bò Canada",
    id: 5,
    price: 510000,
    image: "./assets/images/products/tuoisong/thit-bo-canada.webp",
  },
  {
    count: 7,
    del: 550000,

    title: "Thịt bò mỹ",
    id: 5,
    price: 470000,
    image: "./assets/images/products/tuoisong/thit-bo-my.webp",
  },
  {
    count: 6,
    del: 600000,

    title: "Thịt bò thăn",
    id: 5,
    price: 570000,
    image: "./assets/images/products/tuoisong/thit-bo-than.webp",
  },
  {
    count: 7,
    del: 230000,

    title: "Thịt lợn nạc vai",
    id: 5,
    price: 170000,
    image: "./assets/images/products/tuoisong/thit-lon-lac-vai.webp",
  },
  {
    count: 6,
    del: 530000,

    title: "Thịt bò Kobe",
    id: 5,
    price: 520000,
    image: "./assets/images/products/tuoisong/9288725449286883500.webp",
  },
  {
    count: 7,
    del: 1300000,

    title: "Nấm linh chi",
    id: 2,
    price: 990000,
    image: "./assets/images/products/raucu/babaucothesudungnamlinhchimotc.webp",
  },
  {
    count: 6,
    del: 90000,

    title: "Chôm chôm",
    id: 1,
    price: 70000,
    image: "./assets/images/products/hoaqua/chomchom.webp",
  },
  {
    count: 7,
    del: 70000,

    title: "Dứa vàng",
    id: 1,
    price: 50000,
    image: "./assets/images/products/hoaqua/imagepineapple5.webp",
  },
  {
    count: 6,
    del: 300000,

    title: "Chery nhập khẩu",
    id: 1,
    price: 270000,
    image: "./assets/images/products/hoaqua/congdungcuaquacherry3jpeg.webp",
  },
  {
    count: 7,
    del: 450000,

    title: "Chuối Laba nhập Thái lan",
    id: 1,
    price: 370000,
    image: "./assets/images/products/hoaqua/227331.webp",
  },
  {
    count: 7,
    del: 300000,

    title: "Lựu đỏ Nam Phi",
    id: 1,
    price: 170000,
    image: "./assets/images/products/hoaqua/product7600x600.webp",
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

const filterItems = (a) => {
  const flterCategories = categories.filter(item);
  function item(value) {
    if (value.id == a) {
      return value.id;
    }
  }
  displayItem(flterCategories);
};

const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      var { image, title, price, del, id } = item;
      return `
                 <li class="product-card"  data-category="" data-price="" >
                <figure class="card-banner">
                 <img class='images'   width="189"
                    height="189"
                    loading="lazy" src=${image}></img>
                 

                  <div class="btn-wrapper">
                    <button class="product-btn" aria-label="Quick View" >
                     
                      <a href="./product-details.html" > <ion-icon name="eye-outline"></ion-icon></a>

                    </button>
                  </div>
                </figure>

                <h3 id
                  ="${id}" class="h4 card-title">
                  <a href="./product-details.html" >${title}</a>
                </h3>

                <div class="price-wrapper">
                  <del class="del"> ${del}đ</del>

                  <data class="price"> ${price}đ</data>
                </div>

                <button class="btn btn-primary">Thêm vào giỏ</button>
              </li>   `;
    })
    .join("");
};
displayItem(categories);



