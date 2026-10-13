const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const total = document.getElementById("total");

function updateTotal() {
    total.textContent = taskList.children.length;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function(event) {
        event.stopPropagation();
        li.remove();
        updateTotal();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    updateTotal();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});