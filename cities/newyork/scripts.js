let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecesny = document.getElementsByClassName("piecesny");
let ny1 = document.getElementById("ny1");
let modalny1 = document.getElementById("modalNy1");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 
how.onclick = function() {
  modal.style.display = "block";
}

ny1.onclick = function() {
  modalny1.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
// span.onclick = function(e) {
//   if (e.target == modal) {
//   modal.style.display = "none";
//   } else if (e.target == modalny1){
//   modalny1.style.display = "none";
//   console.log("It worked!");
//   }
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modalny1) {
      modalny1.style.display = "none";
    }
}


