let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let task = document.getElementById("taskInput").value;
    let date = document.getElementById("taskDate").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        task: task,
        date: date,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";

    displayTasks();
}

function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((item, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
        <span style="${item.completed ? 'text-decoration:line-through;color:green;' : ''}">
            ${item.task} (${item.date})
        </span>

        <div>
            <button onclick="editTask(${index})">Edit</button>

            <button onclick="completeTask(${index})">Complete</button>

            <button onclick="deleteTask(${index})">Delete</button>
        </div>
        `;

        taskList.appendChild(li);

    });

}

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}

function completeTask(index) {

    tasks[index].completed = true;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}

function editTask(index) {

    let newTask = prompt("Edit Task", tasks[index].task);

    if (newTask !== null && newTask !== "") {

        tasks[index].task = newTask;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();

    }

}