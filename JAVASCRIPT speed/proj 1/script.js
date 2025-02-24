function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12;

  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  dateElement.textContent = `${now.toDateString()}`

  // const minutes = now.getMinutes();
  // minutes < 10 ? `0${minutes}`:`${minutes}`
}

updateClock();
setInterval(updateClock, 1000);

