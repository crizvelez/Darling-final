document.addEventListener("DOMContentLoaded", function() {
    const cartImage = document.getElementById("img-carrito");
    const modal = document.querySelector(".modalCart-hidden");
    const closeButton = document.getElementById("closeModal");
  
    cartImage.addEventListener("click", openCart);
    closeButton.addEventListener("click", closeCart);
  
    function openCart() {
      modal.style.display = "block";
    }
  
    function closeCart() {
      modal.style.display = "none";
    }
  });