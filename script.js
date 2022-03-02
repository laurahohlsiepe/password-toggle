let btn = document.body.querySelector("button");

let input = document.body.querySelector("input");

btn.addEventListener("click", function () {
  if (input.type === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
