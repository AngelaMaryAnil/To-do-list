// Select the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskValue = taskInput.value.trim();

    // Check if the input is not empty
    if (taskValue !== "") {
        // Create a new list item (li)
        const listItem = document.createElement('li');

        // Add the task text
        const taskText = document.createElement('span');
        taskText.textContent = taskValue;

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // Append the task text and delete button to the list item
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Ensure the addTask function is globally accessible
window.addTask = addTask;
