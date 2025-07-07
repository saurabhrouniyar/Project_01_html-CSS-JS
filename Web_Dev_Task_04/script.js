function addTask() {
  let input = document.getElementById('taskInput');
  let task = input.value.trim();
  if (task) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    displayTasks();
  }
}

function displayTasks() {
  let list = document.getElementById('taskList');
  list.innerHTML = '';
  let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks.forEach((task, i) => {
    let li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => removeTask(i);
    list.appendChild(li);
  });
}

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

window.onload = displayTasks;


const allProducts = [
  { name: "Laptop", price: 60000, category: "tech" },
  { name: "Smartphone", price: 20000, category: "tech" },
  { name: "T-Shirt", price: 999, category: "clothes" },
  { name: "Jeans", price: 1499, category: "clothes" },
];

function renderProducts(products) {
  let container = document.getElementById('productList');
  container.innerHTML = '';
  products.forEach(prod => {
    let div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `<h4>${prod.name}</h4><p>Price: ₹${prod.price}</p>`;
    container.appendChild(div);
  });
}

function filterProducts() {
  let category = document.getElementById('filterCategory').value;
  let filtered = category === 'all' ? allProducts : allProducts.filter(p => p.category === category);
  renderProducts(filtered);
}

function sortProducts() {
  let order = document.getElementById('sortPrice').value;
  let current = [...allProducts];
  if (order === 'low') current.sort((a, b) => a.price - b.price);
  else current.sort((a, b) => b.price - a.price);
  renderProducts(current);
}

renderProducts(allProducts);