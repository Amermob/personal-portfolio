// // Codeware username

let req = new XMLHttpRequest();

req.open("GET", "https://www.codewars.com/api/v1/users/Amermob");
req.send();
req.onreadystatechange = function () {
  if (req.readyState === 4 && req.status === 200) {
    const reqToJSON = JSON.parse(req.responseText);
    let reqSkills = reqToJSON.skills;
    let reqRasnks = reqToJSON.ranks;
    let reqLang = reqToJSON.ranks.overall.name;
    // console.log(reqLang);
    console.log(reqToJSON);
    document.querySelector(
      ".first"
    ).innerHTML = `Completed Challenges: ${reqToJSON.codeChallenges.totalCompleted}`;
    document.querySelector(".second").innerHTML = reqToJSON.honor;
    console.log(reqToJSON.ranks);
    console.log(reqToJSON.ranks.overall);
    console.log(reqToJSON.ranks.overall.score);
    console.log(reqToJSON.ranks.overall.name);
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

let btn = document.querySelector(".btn");
let land = document.querySelector(".landing");

function toggleText(event) {
  let text = event.textContent || event.innerText;
  if (text == "dark") {
    event.innerHTML = "light";
    land.classList.add("black");
    btn.style.backgroundColor = "black";
  } else {
    event.innerHTML = "dark";
    land.classList.remove("black");
    btn.style.backgroundColor = "#00A8E8";
  }
}
