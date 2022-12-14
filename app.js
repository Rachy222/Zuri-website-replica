const faqs = document.querySelectorAll("accordionContainer");

faqs.forEach((accordionContainer) => {
  accordionContainer.addEventListener("click", () => {
    accordionContainer.classList.toggle("active");
  });
});

// Get the modal
var modal = document.getElementById("modal-wrapper");



// Get the button that opens the modal
var btn1 = document.getElementById("modal9-1");
var btn2 = document.getElementById("modal9-2");
var btn3 = document.getElementById("modal9-3");
var btn4 = document.getElementById("modal9-4");

// Get the <span> element that closes the modal
var span = document.getElementById("modal-close");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}

btn3.onclick = function() {
  modal.style.display = "block";
}

btn4.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}