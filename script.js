const addButton = document.getElementById('addButton');
const userInput = document.getElementById('userInput');
const removeButton = document.getElementById('removeButton');
const removeAllButton = document.getElementById('removeAllButton');
class Task {
    constructor(task, state = false) {
        this.task = task;
        this.state = state;
    }
}

removeButton.addEventListener('click', removeTasks);
removeAllButton.addEventListener('click', removeAllTasks);


function toggleTask(index) {
    let data = JSON.parse(localStorage.getItem('tasks')) || [];
    data[index].state = !data[index].state;
    localStorage.setItem('tasks', JSON.stringify(data));
    getTasks();
}

function getTasks() {
    let data = JSON.parse(localStorage.getItem('tasks')) || [];
    const tasks = document.getElementById('tasksTable');
    tasks.innerHTML = '';

    for (let index = 0; index < data.length; index++) {

        let stateText;

        if (data[index].state == true) {
            stateText = "Done ✅";
        } else {
            stateText = "Not Done ❌";
        }

        tasks.innerHTML += `<tr>
                                <td>${data[index].task}</td>
                                <td>
                                    <button onclick="toggleTask(${index})">${stateText}</button>
                                </td>
                             </tr>`;
    }
}


function removeTasks() {

    let data = JSON.parse(localStorage.getItem('tasks')) || [];

    let filtered = data.filter((task) => { return task.state == false; });

    localStorage.setItem('tasks', JSON.stringify(filtered));

    getTasks();
}

function removeAllTasks() {
    localStorage.setItem('tasks', JSON.stringify([]));
    getTasks();
}


document.addEventListener("DOMContentLoaded", () => {

    getTasks();
})




addButton.addEventListener('click', () => {

    let value = userInput.value;



    if (value != '') {
        let newTask = new Task(value);
        let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        storedTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));

        getTasks();

    }
    else {
        return;
    }
})

userInput.addEventListener('keydown', (event) => {

    const value = userInput.value;
    if (event.key === 'Enter' && value != '') {
        addButton.click();
    }
})

