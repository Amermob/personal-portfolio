//Dark Mode
let dataDark = document.querySelectorAll(`[data-set="dark"]`);
let notTest = document.querySelectorAll(`[data-set="notdark"]`);
let darkPurple = document.querySelectorAll(`[data-set="darkpurple"]`);

const enableDarkMode = () => {
  dataDark.forEach((el) => el.classList.add("dark"));
  notTest.forEach((el) => el.classList.add("notdark"));
  darkPurple.forEach((el) => el.classList.add("darkpurple"));
  sessionStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  dataDark.forEach((el) => el.classList.remove("dark"));
  notTest.forEach((el) => el.classList.remove("notdark"));
  darkPurple.forEach((el) => el.classList.remove("darkpurple"));
  sessionStorage.setItem("darkMode", "disabled");
};
if (sessionStorage.getItem("darkMode")) {
  enableDarkMode();
} else {
  disableDarkMode();
}

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".ball").classList.toggle("ball-dark");
  if (sessionStorage.getItem("darkMode") !== "enabled") {
    document.querySelector(".background").style.backgroundColor = "#6e44ff";
    enableDarkMode();
  } else {
    document.querySelector(".background").style.backgroundColor = "#00A8E8";
    disableDarkMode();
  }
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

// changing the language
let translations = {
  en: {
    // header
    me: "me",
    projects: "projects",
    contacts: "contacts",
    // landing
    myName: "Amer Mohamed",
    selfTaught: "self-taught",
    frontEnd: "front end developer",
    // about me
    aboutMe: "about me",
    infoAboutMe:
      "A young man residing in Riyadh is driven by a passion for web development. While working as a barista, I devote my spare moments to honing my web development skills.",
    // projects
    sombrero: "Sombrero Coffee Shop",
    sombreroInfo: "sombrero is a Colombian Saudi-owned coffee shop",
    webLink: "Live Demo",
    source: "Source Code",
    sabahat: "Sabahat al eid",
    sabahatInfo: "a construction based website made for a business focus",
    psStore: "Arab PS Store",
    psStoreInfo: "An e-commerce website to buy PlayStation consoles and games",
    porgress: "in Progress...",
    contributed: "contributed projects",
    inProgress: "work in progress...",
    // Contacts
    contacts: "contacts",
    hitMeUp: "hit me up:",
    location: "Location: Riyadh, al Olaya",
    cv: "View Resume",
    yourName: "Your Name:",
    phone: "Phone Number:",
    mail: "E-mail:",
    subject: "Reason For Your Message:",
    message: "Your Message:",
    send: "submit",
  },
  ar: {
    // header
    me: "أنا",
    projects: "مشاريعي",
    contacts: "للتواصل",
    // landing
    myName: "عامر محمد",
    selfTaught: "متعلم بذاته",
    frontEnd: "مطور صفحة الويب",
    // about me
    aboutMe: "معلومات عني:",
    infoAboutMe:"شاب شغوف يسعى لتحقيق حلمه في مجال تطوير صفحات الويب Front-end. أعمل حاليًا كباريستا. أستثمر وقت الفراغ في تطوير مهاراتي كمطور ويب، وأسعى جاهدًا لتحقيق هدفي المهني كمطوِّر ويب." ,   // projects
    sombrero: "سومبريرو",
    sombreroInfo: "سومبريرو محل قهوة عربي بطابع كولومبي ",
    webLink: "رابط الموقع",
    source: "رابط الكود",
    sabahat: "صباحات العيد لهدم المباني",
    sabahatInfo: "موقع لي عرض معلومات عن المؤسسة ",
    psStore: "سوني العرب",
    psStoreInfo: "موقع لشراء أجهزة البلايستيشن وملحقاته من العاب و أجهزة تحكم",
    porgress: "جاري العمل على المشروع",
    contributed: "المشاريع المساهمة",
    inProgress: "جاري العمل",
    // Contacts
    hitMeUp: "حياك الله على:",
    location: "الموقع: الرياض حي العليا",
    cv: "السيرة الذاتية",
    yourName: "الاسم:",
    phone: "رقم الجوال:",
    mail: "البريد الاكتروني:",
    subject: "سبب التواصل:",
    message: "تفاصيل الرسالة:",
    send: "أرسل",
  },
};

let languageSelector = document.querySelector("#language");

languageSelector.addEventListener("change", (event) => {
  // location.reload();

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
  if (langauge === "ar") {
    document.dir = "rtl";
    `${window.location.href}/ar`;
  } else {
    document.dir = "ltr";
    `${window.location.href}/en`;
  }
};