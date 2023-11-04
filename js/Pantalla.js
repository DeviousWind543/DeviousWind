// Abre la ventana emergente cuando se hace clic en el enlace "Ingresar"
document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});
// Obtén elementos HTML
var openModal = document.getElementById("openModal");
var closeModal = document.getElementById("closeModal");
var modal = document.getElementById("myModal");

// Muestra el modal
openModal.addEventListener("click", function () {
  modal.style.display = "block";
});

// Cierra el modal
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera de él
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


  const closeMenu = document.querySelector('.modal__close');

  openButton.addEventListener('click', ()=>{
      menu.classList.add('modal__link--show');
  });
