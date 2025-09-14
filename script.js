/* Part 2: JavaScript Functions — Scope, Parameters & Return Values */

// Global prefix for all messages
const prefix = "Flavian says:";


function factorial(n) {
  if (n <= 1) {
    return 1; // base case
  }
  return n * factorial(n - 1);
}

function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return false; // early return
  el.textContent = text;
  return true;
}

// Wire up factorial computation
document.getElementById("compute-btn").addEventListener("click", () => {
  const input = Number(document.getElementById("factorial-input").value);
  const result = factorial(input); // local var inside handler
  updateText("#factorial-result", `${prefix} ${input}! = ${result}`);
});

/* Part 3: Combining CSS Animations with JavaScript */

function toggleClass(selector, className) {
  const el = document.querySelector(selector);
  if (!el) return false;
  el.classList.toggle(className);
  return true;
}

// Card flip trigger
document.getElementById("flip-btn").addEventListener("click", () => {
  toggleClass("#flip-card", "flipped");
});

// Modal open/close triggers
document.getElementById("open-modal-btn").addEventListener("click", () => {
  toggleClass("#my-modal", "show");
});
document.getElementById("close-modal-btn").addEventListener("click", () => {
  toggleClass("#my-modal", "show");
});