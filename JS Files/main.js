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
  document.querySelector(".form").reset();
});

//all right reserved
document.querySelector("#reserved").innerHTML = new Date().getFullYear();
