document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.classList.add("fade-in");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    // Create task text node
    const taskNode = document.createTextNode(taskText);

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(taskNode);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = ""; // Clear the input field
});

// Add task on pressing 'Enter' key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("addTaskBtn").click();
    }
});