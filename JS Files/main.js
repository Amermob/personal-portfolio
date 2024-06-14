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

//Dark Mode
document.querySelector(".btn").addEventListener("click", function () {
  let dataTest = document.querySelectorAll(`[data-set="dark"]`);
  let notTest = document.querySelectorAll(`[data-set="notdark"]`);
  dataTest.forEach((el) => el.classList.toggle("dark"));
  notTest.forEach((el) => el.classList.toggle("notdark"));
});

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

window.onscroll = function () {
  if (this.scrollY >= 200) {
    document.querySelector(".header").style.backgroundColor = "#00A8E8";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
};
