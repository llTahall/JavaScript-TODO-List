const addButton = document.getElementById('addButton');
const userInput = document.getElementById('userInput');
const Table = document.getElementById('tasksTable');
const removeButton = document.getElementById('removeButton');
let tasks = [];



function getTasks(tasks) {

    Table.innerHTML = "";

    for (let index = 0; index < tasks.length; index++) {
        const row = document.createElement('tr');
        const tableTask = document.createElement('td');
        const tableStatus = document.createElement('td');
        const statusButton = document.createElement('button');
        statusButton.innerHTML = 'TEST';

        tableStatus.append(statusButton);

        tableTask.append(tasks[index]);

        row.append(tableTask, tableStatus);

        Table.append(row);
    }

}

function removeTasks() {

    //
}

document.addEventListener("DOMContentLoaded", () => {
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));
    getTasks(storedTasks);
})




addButton.addEventListener('click', () => {

    const value = userInput.value;


    if (value != '') {

        const storedTasks = JSON.parse(localStorage.getItem('tasks'));

        storedTasks.push(value);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        getTasks(storedTasks);

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

