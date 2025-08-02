function openModal(button) {
  const img = button.parentElement.querySelector("img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
