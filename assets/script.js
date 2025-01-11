// 🛠️ TEMPORARY: Initialization (for learning purposes)
// Runs after the page fully loads (not typical in professional code to label this)
document.addEventListener("DOMContentLoaded", () => {
  const peepholeWindow = document.getElementById("peephole");
  const header = document.getElementById("header"); // Replace with your header's ID
  let firstInteraction = true; // Tracks whether the window has been interacted with

  // Position the peephole where the header is
  const headerRect = header.getBoundingClientRect();
  peepholeWindow.style.left = `${headerRect.left}px`;
  peepholeWindow.style.top = `${headerRect.top}px`;

  // First interaction: bump the window in a random direction
  peepholeWindow.addEventListener("pointerdown", () => {
    if (firstInteraction) {
      firstInteraction = false; // Prevent multiple bumps

      // Generate random x and y offsets
      const randomX = Math.random() * 40 - 20; // Random value between -20px and 20px
      const randomY = Math.random() * 40 - 20; // Random value between -20px and 20px

      // Apply the bump
      peepholeWindow.style.transition = "transform 0.3s ease";
      peepholeWindow.style.transform = `translate(${randomX}px, ${randomY}px)`;

      // Reset the transform after the bump
      setTimeout(() => {
        peepholeWindow.style.transform = "";
      }, 300);
    }
  });
});
