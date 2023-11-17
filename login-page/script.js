const modeButton = document.getElementById("mode-checkbox");

function checkClick() {
  if (modeButton.checked === true) {
    document.body.classList.add("dark-mode");
    document.getElementById("p-light").innerHTML = "Dark";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("p-light").innerHTML = "Light";
  }
}
