const buttons = document.querySelectorAll(".btn");
const textarea = document.querySelector(".textarea");
const deleteBtn = document.querySelector(".delete");
const shiftBtn = document.querySelector(".shift");
const spaceBtn = document.querySelector(".space");
const keyboard = document.querySelectorAll(".change-color");

const container = document.querySelector(".container");

const soundBtn = document.querySelector(".audio");

let chars = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;

    chars = textarea.value.split("");

    console.log(chars);
  });
});

deleteBtn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

spaceBtn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});

shiftBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});

document.addEventListener("keydown", function (event) {
  let pressSymb = event.key;

  keyboard.forEach(function (key) {
    key.classList.remove("active");
  });
  keyboard.forEach((key) => {
    if (key.getAttribute("data") === pressSymb) {
      key.classList.add("active");
      sound();
    }
  });
});

document.addEventListener("keyup", function () {
  keyboard.forEach(function (key) {
    key.classList.remove("active");
  });
});

function sound() {
  keyboard.forEach((key) => {
    if (key.classList.contains("active")) {
      soundBtn.currentTime = 0.1;
      soundBtn.play();
    }
  });
}

document.addEventListener("mousedown", function (MouseEvent) {
  let pressB = MouseEvent.toElement.classList[1];
  if (pressB === "change-color") {
    soundBtn.currentTime = 0.1;
    soundBtn.play();
  }
});
