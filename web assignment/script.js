// ======================
//  Part 1: Variables & Conditionals
// ======================
function greetUser() {
  let name = document.getElementById("username").value;

  if (name) {
    document.getElementById("greeting").textContent = `Hello, ${name}! Welcome 🎉`;
  } else {
    document.getElementById("greeting").textContent = "Please enter your name!";
  }
}

// ======================
//  Part 2: Functions
// ======================
// Function to calculate totals
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(250, 3); // Example: 250 x 3
  document.getElementById("totalResult").textContent = `Total cost: $${total}`;
}

// Another reusable function
function formatString(str) {
  return str.toUpperCase();
}

// ======================
// 🔁 Part 3: Loops
// ======================
function listFruits() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // Clear before adding

  // Example with for loop
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }

  // Example with while loop (countdown)
  let countdown = 5;
  while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
  }
}

// ======================
// 🌐 Part 4: DOM Manipulation
// ======================
document.getElementById("toggleBtn").addEventListener("click", function () {
  let text = document.getElementById("toggleText");
  text.classList.toggle("highlight");
});

// Another DOM example: create new element
let newPara = document.createElement("p");
newPara.textContent = " This paragraph was added dynamically with JavaScript.";
document.body.appendChild(newPara);

// Third DOM example: change page title
document.title = "JS Practice Project";