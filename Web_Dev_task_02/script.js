document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('All fields are required');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email');
        return;
    }
    
    alert('Form submitted successfully!');
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (!taskInput.value) {
        alert('Please enter a task');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskInput.value}
        <button class="delete-btn">Delete</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
    
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });
});