const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Syntax", "Computer Style Sheet"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is used to add interactivity to a website?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<style>", "<script>", "<js>"],
    answer: "<script>"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById('question').innerText = q.question;
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.onclick = () => {
      if (option === q.answer) {
        btn.style.backgroundColor = '#2ecc71';
        alert('✅ Correct!');
      } else {
        btn.style.backgroundColor = '#e74c3c';
        alert('❌ Wrong!');
      }
    };
    optionsContainer.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuestion();
}

function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById('joke').innerText = 'Failed to fetch joke.';
    });
}

window.onload = loadQuestion;
