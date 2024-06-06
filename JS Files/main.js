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
document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("dark");
  document.querySelector("nav:hover").classList.toggle("dark");
  document.querySelector("nav").classList.toggle("dark");
  document.querySelector("ul").classList.toggle("dark");
  document.querySelector("select").classList.toggle("dark");
  document.querySelector("option").classList.toggle("dark");
  document.querySelector(".header").classList.toggle("dark");
  document.querySelector(".landing").classList.toggle("dark");
  document.querySelector(".btn").classList.toggle("darkbtn");
  // console.log("hello");
});
