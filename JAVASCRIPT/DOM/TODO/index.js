const taskname = document.getElementById('taskname');
const add = document.getElementById("add");
const tasklist = document.getElementById("tasklist");

add.addEventListener("click",function(){
    if (taskname.value.trim() === "") return;
    const li = document.createElement("li");
    li.innerText = taskname.value;

    const cancel = document.createElement("button");
    cancel.innerText = "Remove";
    cancel.classList.add = "remove";
    li.appendChild(cancel);
    
    tasklist.appendChild(li);
    taskname.value = "";
    cancel.addEventListener("click",function(){
        tasklist.removeChild(li);
    })
})

