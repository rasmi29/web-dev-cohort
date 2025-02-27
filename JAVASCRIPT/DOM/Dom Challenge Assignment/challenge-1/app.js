/**
 * Write your challenge solution here
 */
let statusButton = document.getElementById("status");
let toggleButton = document.getElementById("toggleButton");
let bulb = document.getElementById("bulb");
let body = document.getElementById("body");
function lighton() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
  toggleButton.innerText = "Turn Off";
  statusButton.innerText = "Status: on";
  bulb.classList.toggle("bulbon");
}
function lightoff(){
  body.style.color = "black";
  body.style.backgroundColor = "white";
  toggleButton.innerText = "Turn On";
  statusButton.innerText = "Status: off";
  bulb.classList.toggle("bulbon");

}

toggleButton.addEventListener("click", function () {
  if (toggleButton.innerText === "Turn On") {
    lighton();
  }else{
    lightoff();
  }
});
