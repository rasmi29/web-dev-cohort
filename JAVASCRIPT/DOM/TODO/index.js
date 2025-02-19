const taskname = document.getElementById("taskname");
const add = document.getElementById("add");
const tasklist = document.getElementById("tasklist");
const removeall = document.getElementById("removeall");

// Hide "Remove All" button initially
removeall.style.display = "none";

add.addEventListener("click", function () {
  if (taskname.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerText = taskname.value;

  const cancel = document.createElement("button");
  cancel.innerText = "❌";
  cancel.classList.add("remove");
  li.appendChild(cancel);

  tasklist.appendChild(li);
  taskname.value = "";

  removeall.style.display = "block"; // Show "Remove All" button when a task is added

  cancel.addEventListener("click", function () {
    tasklist.removeChild(li);
    if (tasklist.children.length === 0) {
      removeall.style.display = "none"; // Hide button when no tasks remain
    }
  });
});

removeall.addEventListener("click", function () {
  tasklist.innerHTML = "";
  removeall.style.display = "none"; // Hide button when all tasks are removed
});
