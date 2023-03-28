// === HELP FUNCTIONS ===
// Random id
function randomId() {
  return Math.floor(Math.random() * 100000);
}

// Convert number to money VND
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

let products = [
  {
    price: 25000,

    del: 30000,

    count: "hoaqua",
    id: randomId(),
    title: "Cam Navel ruột vàng",
    image: "./assets/images/products/hoaqua/cam.webp",
  },
  {
    count: "hoaqua",
    id: randomId(),
    title: "Chanh tươi",
    price: 15000,

    del: 25000,
    image: "./assets/images/products/raucu/chanh.webp",
  },
  {
    count: "hoaqua",
    del: 60000,

    title: "Đào đỏ mỹ ",

    id: randomId(),
    price: 55000,
    image: "./assets/images/products/hoaqua/dao.webp",
  },
  {
    title: "Dâu tây đà lạt",
    count: "hoaqua",
    id: randomId(),
    price: 200000,

    del: 300000,
    image: "./assets/images/products/hoaqua/dau-tay.webp",
  },
  {
    count: "hoaqua",
    id: randomId(),

    del: 280000,

    title: "Dưa lưới nhập khẩu",
    price: 220000,
    image: "./assets/images/products/hoaqua/dua-luoi.webp",
  },
  {
    count: "hoaqua",
    id: randomId(),

    del: 330000,

    title: "Lê xanh Mỹ",
    price: 230000,
    image: "./assets/images/products/hoaqua/le-xanh.webp",
  },
  {
    count: "hoaqua",
    del: 290000,

    title: "Nho Mỹ nhập khẩu",

    id: randomId(),
    price: 235000,

    image: "./assets/images/products/hoaqua/nho.webp",
  },
  {
    count: "hoaqua",
    del: 320000,

    title: "Táo xanh Mỹ",

    id: randomId(),
    price: 240000,

    image: "./assets/images/products/hoaqua/tao.webp",
  },
  {
    count: "hoaqua",
    del: 200000,

    title: "Vải thiều",

    id: randomId(),
    price: 90000,

    image: "./assets/images/products/hoaqua/vai-thieu.webp",
  },
  {
    count: "hat",
    del: 400000,

    title: "Hạt hạnh nhân",

    id: randomId(),
    price: 320000,
    image: "./assets/images/products/cacloaihat/hanh-nhan.webp",
  },
  {
    count: "hat",
    del: 300000,

    title: "Hạt điều khô",

    id: randomId(),
    price: 280000,
    image: "./assets/images/products/cacloaihat/hat-dieu-kho.webp",
  },
  {
    count: "hat",
    del: 430000,

    title: "Hạt điều trắng",

    id: randomId(),
    price: 330000,
    image: "./assets/images/products/cacloaihat/hat-dieu.webp",
  },
  {
    count: "hat",
    del: 490000,

    title: "Quả óc chó",

    id: randomId(),
    price: 430000,
    image: "./assets/images/products/cacloaihat/oc-cho.webp",
  },
  {
    del: 900000,
    count: "haisan",
    title: "Cá hồi",

    id: randomId(),
    price: 720000,
    image: "./assets/images/products/haisan/ca-hoi-ta.webp",
  },
  {
    count: "haisan",
    del: 300000,

    title: "Cua bể",

    id: randomId(),
    price: 290000,
    image: "./assets/images/products/haisan/cua-be.webp",
  },
  {
    count: "haisan",
    del: 230000,

    title: "Mực Thanh Hóa",

    id: randomId(),
    price: 130000,
    image: "./assets/images/products/haisan/muc-thanh-hoa.webp",
  },
  {
    count: "haisan",
    del: 530000,

    title: "Tôm biển",

    id: randomId(),
    price: 330000,
    image: "./assets/images/products/haisan/tom-bien.webp",
  },
  {
    count: "raucu",
    del: 90000,

    title: "Hành tây",

    id: randomId(),
    price: 55000,
    image: "./assets/images/products/raucu/hanh-tay.webp",
  },
  {
    count: "raucu",
    del: 30000,

    title: "Rau cải bẹ",

    id: randomId(),
    price: 23000,
    image: "./assets/images/products/raucu/rau-cai.webp",
  },
  {
    count: "raucu",
    del: 50000,

    title: "Súp lơ trắng",

    id: randomId(),
    price: 30000,
    image: "./assets/images/products/raucu/sup-lo.webp",
  },
  {
    count: "thit",
    del: 720000,

    title: "Ba chỉ bò mỹ",

    id: randomId(),
    price: 570000,
    image: "./assets/images/products/tuoisong/ba-chi-bo-my.webp",
  },
  {
    count: "thit",
    del: 310000,

    title: "Sườn lợn Brazil",

    id: randomId(),
    price: 230000,
    image: "./assets/images/products/tuoisong/suon-lon-brazil.webp",
  },
  {
    count: "thit",
    del: 630000,

    title: "Thịt bò Canada",

    id: randomId(),
    price: 510000,
    image: "./assets/images/products/tuoisong/thit-bo-canada.webp",
  },
  {
    count: "thit",
    del: 550000,

    title: "Thịt bò mỹ",

    id: randomId(),
    price: 470000,
    image: "./assets/images/products/tuoisong/thit-bo-my.webp",
  },
  {
    count: "thit",
    del: 600000,

    title: "Thịt bò thăn",

    id: randomId(),
    price: 570000,
    image: "./assets/images/products/tuoisong/thit-bo-than.webp",
  },
  {
    count: "thit",
    del: 230000,

    title: "Thịt lợn nạc vai",

    id: randomId(),
    price: 170000,
    image: "./assets/images/products/tuoisong/thit-lon-lac-vai.webp",
  },
  {
    count: "thit",
    del: 530000,

    title: "Thịt bò Kobe",

    id: randomId(),
    price: 520000,
    image: "./assets/images/products/tuoisong/9288725449286883500.webp",
  },
  {
    count: "raucu",
    del: 1300000,

    title: "Nấm linh chi",

    id: randomId(),
    price: 990000,
    image: "./assets/images/products/raucu/babaucothesudungnamlinhchimotc.webp",
  },
  {
    count: "hoaqua",
    del: 90000,

    title: "Chôm chôm",

    id: randomId(),
    price: 70000,
    image: "./assets/images/products/hoaqua/chomchom.webp",
  },
  {
    count: ["hoaqua", ],
    del: 70000,

    title: "Dứa vàng",

    id: randomId(),
    price: 50000,
    image: "./assets/images/products/hoaqua/imagepineapple5.webp",
  },
  {
    count: "hoaqua",
    del: 300000,

    title: "Chery nhập khẩu",

    id: randomId(),
    price: 270000,
    image: "./assets/images/products/hoaqua/congdungcuaquacherry3jpeg.webp",
  },
  {
    count: "hoaqua",
    del: 450000,

    title: "Chuối Laba nhập Thái lan",

    id: randomId(),
    price: 370000,
    image: "./assets/images/products/hoaqua/227331.webp",
  },
  {
    count: "hoaqua",
    del: 300000,

    title: "Lựu đỏ Nam Phi",

    id: randomId(),
    price: 170000,
    image: "./assets/images/products/hoaqua/product7600x600.webp",
  },
];

// === TRUY CẬP VÀO CÁC THÀNH PHẦN ===
let productsEle = document.querySelector('.products');
// === MAIN FUNCTION ===
// Render và hiển thị dữ liệu
function renderUI(arr) {
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    productsEle.innerHTML += `
            <li class="product-card ${p.count}"   >
                <figure class="card-banner">
                 <img class='images'   width="189"
                    height="189"
                    loading="lazy" src=${p.image}></img>
                 

                  <div class="btn-wrapper">
                    <button class="product-btn" aria-label="Quick View" >
                     
                      <a href="./product-details.html" > <ion-icon name="eye-outline"></ion-icon></a>

                    </button>
                  </div>
                </figure>

                <h3 id
                  ="${p.id}" class="h4 card-title">
                  <a href="./product-details.html" >${p.title}</a>
                </h3>

                <div class="price-wrapper">
                  <del class="del"> ${p.del}đ</del>

                  <data class="price"> ${p.price}đ</data>
                </div>

                <button class="btn btn-primary">Thêm vào giỏ</button>
              </li>  
        `;
  }
}

window.onload = renderUI(products);




/*  */





const allCheckboxes = document.querySelectorAll(".filter-checkbox");
const allArticles = Array.from(document.querySelectorAll(".product-card"));
const itemsPerPage = 9; //Customizable
const paginationDotStep = 2; //Customizable
let currentPage = 1;
let checked = {};
getChecked("categoryFilter");

// Add event listeners for all checkboxes
allCheckboxes.forEach((el) => {
  el.addEventListener("change", toggleCheckbox);
});

// Add event listener for the reset checkboxes button
const resetCheckboxesButton = document.querySelector(
  "#reset-checkboxes-button"
);
if (resetCheckboxesButton) {
  resetCheckboxesButton.addEventListener("click", resetCheckboxes);
}

// Toggle checkbox event handler
function toggleCheckbox(e) {
  getChecked(e.target.name);
  currentPage = 1;
  updateVisibility();
}

// Get the checked checkboxes
function getChecked(name) {
  checked[name] = Array.from(
    document.querySelectorAll(`input[name=${name}]:checked`)
  ).map((el) => el.value);
}

// Filter and display the articles based on the checked checkboxes
function updateVisibility() {
  const filteredArticles = filterArticles();
  const pageArticles = getPageArticles(filteredArticles);

  hideAllArticles();
  showPageArticles(pageArticles);

  updatePagination(filteredArticles);
}

// Filter the articles based on the checked checkboxes
function filterArticles() {
  return allArticles.filter((el) => {
    const categoryFilter = checked.categoryFilter.length
      ? intersection(Array.from(el.classList), checked.categoryFilter).length
      : true;
    return categoryFilter;
  });
}

// Get the articles to be displayed on the current page
function getPageArticles(filteredArticles) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredArticles.slice(startIndex, endIndex);
}

// Hide all articles
function hideAllArticles() {
  allArticles.forEach((el) => {
    el.style.display = "none";
  });
}

// Show the articles of the current page
function showPageArticles(pageArticles) {
  pageArticles.forEach((el) => {
    el.style.display = "block";
  });
}

// Reset the checked checkboxes and update the visibility
function resetCheckboxes() {
  allCheckboxes.forEach((el) => {
    el.checked = false;
  });
  checked = { categoryFilter: [] }; // Initialize categoryFilter as an empty array
  currentPage = 1;
  updateVisibility();
}

// Update the pagination based on the filtered articles
function updatePagination(filteredArticles) {
  const pageCount = Math.ceil(filteredArticles.length / itemsPerPage);
  const pagination = document.querySelector(".pagination");

  pagination.innerHTML = "";

  if (pageCount <= 1) {
    return;
  }

  createAndAppendPaginationButtons(pagination, pageCount);
}

// Create and append pagination buttons
function createAndAppendPaginationButtons(pagination, pageCount) {
  const previousButton = createPreviousButton();
  const nextButton = createNextButton();

  previousButton.style.visibility = currentPage > 1 ? "visible" : "hidden"; // or "block" : "none"
  nextButton.style.visibility = currentPage < pageCount ? "visible" : "hidden"; // or "block" : "none"

  pagination.appendChild(previousButton);

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(pageCount, currentPage + 2);

  if (startPage > 1) {
    const prevDots = document.createElement("button");
    prevDots.innerText = "...";
    prevDots.addEventListener("click", () => {
      currentPage = Math.max(1, currentPage - paginationDotStep);
      updateVisibility();
    });
    pagination.appendChild(prevDots);
  }

  for (let i = startPage; i <= endPage; i++) {
    const button = createPageButton(i);
    pagination.appendChild(button);
  }

  if (endPage < pageCount) {
    const nextDots = document.createElement("button");
    nextDots.innerText = "...";
    nextDots.addEventListener("click", () => {
      currentPage = Math.min(pageCount, currentPage + paginationDotStep);
      updateVisibility();
    });
    pagination.appendChild(nextDots);
  }
  pagination.appendChild(nextButton);
}

// Create the previous button
function createPreviousButton() {
  const previousButton = document.createElement("button");
  previousButton.innerHTML = "<<";
  previousButton.addEventListener("click", () => {
    currentPage--;
    updateVisibility();
  });
  return previousButton;
}
// Create the next button
function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.innerText = ">>";
  nextButton.addEventListener("click", () => {
    currentPage++;
    updateVisibility();
  });
  return nextButton;
}

// Create a page button
function createPageButton(i) {
  const button = document.createElement("button");
  button.innerText = i;
  button.addEventListener("click", () => {
    currentPage = i;
    updateVisibility();
  });
  if (i === currentPage) {
    button.classList.add("active-page");
  }
  return button;
}

// Helper function to find the intersection of two arrays
function intersection(array1, array2) {
  return array1.filter((value) => array2.includes(value));
}

// Initial call to update visibility and render pagination
updateVisibility();