/**
 * Write your challenge solution here
 */

const red = document.getElementById('redButton');
const green = document.getElementById('greenButton');
const blue = document.getElementById('blueButton');
const purple = document.getElementById('purpleButton');
const reset = document.getElementById('resetButton');

const heading = document.getElementById("mainHeading");

red.addEventListener("click", function (){
    heading.style.color = "red";
});

green.addEventListener("click", function (){
    heading.style.color = "green";
})

blue.addEventListener("click", function (){
    heading.style.color = "blue";
})

purple.addEventListener("click", function (){
    heading.style.color = "purple";
})

reset.addEventListener("click", function (){
    heading.style.color = "black";
})