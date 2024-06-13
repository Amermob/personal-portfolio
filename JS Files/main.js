// // Codeware username

let req = new XMLHttpRequest();

req.open("GET", "https://www.codewars.com/api/v1/users/Amermob");
req.send();
req.onreadystatechange = function () {
  if (req.readyState === 4 && req.status === 200) {
    const reqToJSON = JSON.parse(req.responseText);
    document.querySelector(
      ".first"
    ).innerHTML = `Completed Challenges: ${reqToJSON.codeChallenges.totalCompleted}`;
    document.querySelector(".second").innerHTML = `Honor: ${reqToJSON.honor}`;
    // console.log(reqToJSON);
    // console.log(reqToJSON.ranks.languages);
    document.querySelector(".fith").innerHTML = reqToJSON.ranks.languages;
    document.querySelector(
      ".third"
    ).innerHTML = ` Rank: ${reqToJSON.ranks.overall.name}`;
    document.querySelector(
      ".forth"
    ).innerHTML = `Score: ${reqToJSON.ranks.overall.score}`;
    document.querySelector(".fith").innerHTML = `Name: ${reqToJSON.name}`;
    document.querySelector(".six").innerHTML = `Skills: ${reqToJSON.skills}`;
  }
};

// // // Challenges Completed

let reqFinish = new XMLHttpRequest();
reqFinish.open(
  "GET",
  "https://www.codewars.com/api/v1/users/Amermob/code-challenges/completed?page"
);
reqFinish.send();
reqFinish.onreadystatechange = function () {
  if (reqFinish.readyState === 4 && reqFinish.status === 200) {
    const reqToJSN = JSON.parse(reqFinish.responseText);

    console.log(reqToJSN);
    console.log(reqToJSN);
  }
};

function toggleText(event) {
  let text = event.textContent;
  if (text == "dark") {
    event.innerHTML = "light";
  } else {
    event.innerHTML = "dark";
  }
}

// get all element from set attribute
// document.querySelector(".btn").addEventListener("click", () => {
//   document.querySelector(".container").classList.toggle("dark");
//   document.querySelector("nav:hover").classList.toggle("dark");
//   document.querySelector("nav").classList.toggle("dark");
//   document.querySelector("ul").classList.toggle("dark");
//   document.querySelector("select").classList.toggle("dark");
//   document.querySelector("option").classList.toggle("dark");
//   document.querySelector(".header").classList.toggle("dark");
//   document.querySelector(".landing").classList.toggle("dark");
//   document.querySelector(".btn").classList.toggle("darkbtn");
//   // console.log("hello");
// });

//Dark Mode
document.querySelector(".btn").addEventListener("click", function () {
  let dataTest = Array.from(document.querySelectorAll(`[data-set="dark"]`));
  let notTest = Array.from(document.querySelectorAll(`[data-set="notdark"]`));
  dataTest.forEach((el) => el.classList.toggle("dark"));
  notTest.forEach((el) => el.classList.toggle("notdark"));
});

// let arLang = new XMLHttpRequest();
// arLang.open("GET", "./JS Files/Ar.json");
// arLang.send();
// arLang.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let text = JSON.parse(arLang.responseText);
//     document.querySelector("#dots+h2").innerHTML = text.home;
//     console.log(text);
//   }
// };

let enLang = new XMLHttpRequest();
enLang.open("GET", "./JS Files/En.json");
enLang.send();
enLang.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let text = JSON.parse(enLang.responseText);
    document.querySelector("#dots+h2").innerHTML = text.home;
    console.log(text);
  }
};

// let burgermenu = document.querySelector("ul");
// let firstSpan = document.querySelector("#dots span:first-child");
// let SecondSpan = document.querySelector("#dots span:nth-child(2)");
// let lastSpan = document.querySelector("#dots span:last-child");
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
