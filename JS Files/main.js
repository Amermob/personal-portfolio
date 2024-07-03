// change the text of the button for the darkmode
function toggleText(event) {
  let text = event.textContent;
  if (text == "dark") {
    event.innerHTML = "light";
  } else {
    event.innerHTML = "dark";
  }
}

//Dark Mode
document.querySelector(".btn").addEventListener("click", function () {
  let dataTest = document.querySelectorAll(`[data-set="dark"]`);
  let notTest = document.querySelectorAll(`[data-set="notdark"]`);
  let darkPurple = document.querySelectorAll(`[data-set="darkpurple"]`);
  dataTest.forEach((el) => el.classList.toggle("dark"));
  notTest.forEach((el) => el.classList.toggle("notdark"));
  darkPurple.forEach((el) => el.classList.toggle("darkpurple"));
});

// burger menu starts
document.querySelector("#dots").onclick = function () {
  document.querySelector("ul").classList.toggle("burgermenu");
  document
    .querySelector("#dots span:first-child")
    .classList.toggle("fristspan");
  document
    .querySelector("#dots span:nth-child(2)")
    .classList.toggle("secondspan");
  document.querySelector("#dots span:last-child").classList.toggle("lastspan");
};

// add background color on nav after scroll
window.onscroll = function () {
  if (this.scrollY >= 200) {
    document.querySelector(".header").style.backgroundColor = "#00A8E8";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
};

// contact section
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#number");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  let ebody = `
  <h1>my Name is: ${username.value}</h1> <br>
  <h1>my email is: ${email.value}</h1> <br>
  <h1>my phone number is: ${phone.value}</h1> <br>
  <h1>reason for meesage is: ${subject.value}</h1> <br>
  <h1>message is: ${message.value}</h1> <br>
  `;

  Email.send({
    SecureToken: "54ff1629-30a2-4e21-b9b2-9e5e38878f30",
    To: "amermob5@gmail.com",
    From: "amermob5@gmail.com",
    Subject: document.querySelector("#subject").value,
    Body: ebody,
  }).then((message) => {
    if (message == "OK") {
      swal({
        title: "Thank you!",
        text: "Message Sent Successfully 😁!",
        icon: "success",
      });
    }
  });
  // after sending the info the input filed will be clear
  document.querySelector(".form").reset();
});

//all right reserved date
document.querySelector("#reserved").innerHTML = new Date().getFullYear();

let translations = {
  en: {
    me: "me",
    projects: "projects",
  },
  ar: {
    me: "انا",
    projects: "مشاريع",
  },
};

let languageSelector = document.querySelector("#language");

languageSelector.addEventListener("change", (event) => {
  setLangauge(event.target.value);
  sessionStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  setLangauge(sessionStorage.getItem("lang"));
});

const setLangauge = (langauge) => {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const languageKey = element.getAttribute("data-lang");
    element.textContent = translations[langauge][languageKey];
  });
  // document.dir = langauge === "ar" ? "rtl" : "ltr";
  if (langauge === "ar") {
    document.dir = "rtl";
    window.location.href + "/ar";
  } else {
    document.dir = "ltr";
    window.location.href + "/en";
  }
};
