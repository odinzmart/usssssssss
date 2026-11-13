const pages = [...document.querySelectorAll(".page")];

function showPage(id) {
  pages.forEach(page => page.classList.toggle("active", page.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("page1Yes").addEventListener("click", () => showPage("page2"));
document.getElementById("page1No").addEventListener("click", () => {
  document.getElementById("page1Response").textContent =
    "That's okay. Take your time — this little story will be here.";
});

document.getElementById("page2Yes").addEventListener("click", () => showPage("page3"));
document.getElementById("page2No").addEventListener("click", () => {
  document.getElementById("page2Response").textContent =
    "Thank you for being honest. The memories can remain, without any pressure.";
});

document.getElementById("restart").addEventListener("click", () => {
  document.getElementById("page1Response").textContent = "";
  document.getElementById("page2Response").textContent = "";
  showPage("page1");
});

// Small floating heart particles in the background.
const particleLayer = document.getElementById("particles");
const symbols = ["♡", "♥", "✧", "·"];
for (let i = 0; i < 28; i++) {
  const particle = document.createElement("span");
  particle.className = "particle";
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${9 + Math.random() * 13}s`;
  particle.style.animationDelay = `${Math.random() * 12}s`;
  particle.style.fontSize = `${10 + Math.random() * 17}px`;
  particle.style.opacity = `${0.25 + Math.random() * 0.55}`;
  particleLayer.appendChild(particle);
}
