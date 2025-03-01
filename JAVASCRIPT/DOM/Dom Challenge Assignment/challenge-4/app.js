const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let total_task = 0;
let completed_task = 0;

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  //check if task is empty
  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }
  // remove no task yet message
  removeEmptyListMessage();

  //create list
  const li = document.createElement("li");

  // create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete-checkbox");

  //create delete-button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  //create task
  const task = document.createElement("span");
  task.textContent = taskText;
  task.classList.add("task-text");

  //assemble list
  li.appendChild(task);
  li.appendChild(checkbox);
  li.appendChild(deleteButton);
  li.classList.add("task-item");

  //add list in main tasklist
  taskList.appendChild(li);
  taskInput.value = "";

  //increase task no
  total_task++;

  //checkbox event
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("completed");
      completed_task++;
      updateCompletedTasks();
    } else {
      li.classList.remove("completed");
      completed_task--;
      updateCompletedTasks();
    }
  });
  //delete button event
  deleteButton.addEventListener("click", function () {
    if (li.classList.contains("completed")) {
      completed_task--;
      updateCompletedTasks();
    }
    taskList.removeChild(li);
    total_task--;
    updateTotalTasks();
    checkEmptyList();
  });
  //update total task
  function updateTotalTasks() {
    totalTasks.textContent = `Total tasks : ${total_task}`;
  }
  updateTotalTasks();

  //update completed task
  function updateCompletedTasks() {
    completedTasks.textContent = `Completed: ${completed_task}`;
  }

  // function to remove "no tasks yet" message
  function removeEmptyListMessage() {
    const emptyMessage = document.querySelector(".empty-list");
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }

  // check if the list is empty 
  function checkEmptyList() {
    if (taskList.children.length === 0) {
      const emptyMessage = document.createElement("li");
      emptyMessage.classList.add("empty-list");
      emptyMessage.innerText = "No tasks yet. Add one above!";
      taskList.appendChild(emptyMessage);
    }
  }
});
