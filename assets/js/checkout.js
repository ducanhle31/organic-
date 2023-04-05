const city = document.querySelector("#city");
console.log(city);
const districts = document.querySelector("#districts");
console.log(document.body);
const wards = document.querySelector("#wards");

async function getData() {
  const data = await fetch("https://provinces.open-api.vn/api/?depth=3")
    .then((response) => response.json())
    .catch((rejected) => {
      console.log(rejected);
    });
  return data;
}

getData().then((data) =>
  data.map((data) => {
    city.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
  })
);
let a;
let changeCity = () => {
  districts.value = "default";
  districts.style.display = "block";
  districts.innerHTML = `<option value="default">Chọn huyện</option></select
            >`;
  wards.value = "default";
  wards.innerHTML = `<option value="default">Chọn xã</option>`;
  let citydata = city.value;
  if (citydata == "default") return;
  getData().then((data) => {
    a = data.findIndex((x) => x.codename === citydata);

    data[a].districts.map((data) => {
      districts.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
    });
  });
};

let changedistricts = () => {
  wards.value = "default";
  wards.style.display = "block";
  wards.innerHTML = `<option value="default">Chọn xã</option>`;

  let districtsdata = districts.value;
  if (districtsdata == "default") return;
  getData().then((data) => {
    b = data[a].districts.findIndex((x) => x.codename === districtsdata);
    data[a].districts[b].wards.map((data) => {
      wards.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
    });
  });
};

city.addEventListener("change", changeCity);
districts.addEventListener("change", changedistricts);

const nameForm = document.getElementById("name");
const phoneForm = document.getElementById("phone");
const emailForm = document.getElementById("email");
const sendForm = document.querySelector(".container.form button");
console.log(sendForm);
// name
let inputName = () => {
  nameForm.value = nameForm.value.toUpperCase();
  if (!nameForm.value) {
    document.querySelector(
      ".form-message.name"
    ).innerHTML = `<div class="text-danger">Vui lòng nhập tên</div>`;
  } else document.querySelector(".form-message.name").innerHTML = "";
};

nameForm.addEventListener("focusout", inputName);
// phone

let inputPhone = () => {
  if (!phoneForm.value) {
    document.querySelector(
      ".form-message.phone"
    ).innerHTML = `<div class="text-danger">Vui lòng nhập số điện thoại</div>`;
  } else document.querySelector(".form-message.phone").innerHTML = "";
};

phoneForm.addEventListener("focusout", inputPhone);

//email

let inputEmail = () => {
  let emailText = document.querySelector(".form-message.email");
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let result = regex.test(emailForm.value);
  if (!emailForm.value) {
    emailText.innerHTML = `<div class="text-danger">Vui lòng nhập email</div>`;
  } else if (!result) {
    emailText.innerHTML = `<div class="text-danger">Xin hãy nhập lại email</div>`;
  } else if (result) {
    emailText.innerHTML = "";
  }
};

emailForm.addEventListener("focusout", inputEmail);



