// =============================
// Part 1: Event Handling
// =============================
const helloBtn = document.getElementById("helloBtn");
const message = document.getElementById("message");

helloBtn.addEventListener("click", () => {
  message.textContent = "👋 Hello, Elias! You just clicked the button!";
});

// =============================
// Part 2: Interactive Elements
// =============================

// Light/Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// FAQ (Collapsible)
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

question.addEventListener("click", () => {
  answer.style.display = answer.style.display === "block" ? "none" : "block";
});

// =============================
// Part 3: Form Validation
// =============================
const form = document.getElementById("signupForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation logic
  if (name === "" || email === "" || password === "") {
    formMsg.textContent = "⚠️ All fields are required.";
    formMsg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMsg.textContent = "❌ Please enter a valid email.";
    formMsg.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMsg.textContent = "🔒 Password must be at least 6 characters.";
    formMsg.style.color = "red";
    return;
  }

  // Success
  formMsg.textContent = "✅ Success! Form submitted.";
  formMsg.style.color = "green";
});