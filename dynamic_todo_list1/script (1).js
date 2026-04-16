const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

let completedTasks = 0;

/* Add Task Function */
function addTask() {

    let taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create List Item
    let li = document.createElement("li");

    // Checkbox for completion
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onclick = function () {
        li.classList.toggle("completed");

        if (checkbox.checked) completedTasks++;
        else completedTasks--;

        updateCounter();
    };

    // Task Text
    let span = document.createElement("span");
    span.textContent = taskText;

    // Buttons Container
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    /* Edit Button */
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";

    editBtn.onclick = function () {
        let newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    };

    /* Delete Button */
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        if (checkbox.checked) completedTasks--;
        li.remove();
        updateCounter();
    };

    // Append Elements
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCounter();
}

/* Update Counter */
function updateCounter() {
    let totalTasks = taskList.children.length;
    let pendingTasks = totalTasks - completedTasks;

    taskCounter.textContent =
        `Pending: ${pendingTasks} | Completed: ${completedTasks}`;
}
