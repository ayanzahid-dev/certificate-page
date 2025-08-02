// Open modal on button click
function openModal(button) {
  const img = button.parentElement.querySelector("img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = img.src;
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside the image
window.addEventListener('click', function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) closeModal();
});

// Dark mode toggle
const toggleBtn = document.getElementById("toggleMode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
  AOS.init();
}