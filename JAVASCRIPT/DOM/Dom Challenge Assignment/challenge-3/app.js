/**
 * Write your challenge solution here
 */
const namee = document.getElementById("nameInput");
const age = document.getElementById("ageInput");
const job = document.getElementById("jobInput");
const bio = document.getElementById("bioInput");

const nameDisplay = document.getElementById("nameDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");
const jobDisplay = document.getElementById("jobDisplay");

namee.addEventListener("input", () => (nameDisplay.innerText = namee.value));
age.addEventListener("input", () => (ageDisplay.innerText = age.value));
job.addEventListener("input", () => (jobDisplay.innerText = job.value));
bio.addEventListener("input", () => (bioDisplay.innerText = bio.value));
