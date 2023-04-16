let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecesny = document.getElementsByClassName("piecesny");
let ny1 = document.getElementById("ny1");
let ny2 = document.getElementById("ny2");
let ny3 = document.getElementById("ny3");
let ny4 = document.getElementById("ny4");
let ny5 = document.getElementById("ny5");
let ny6 = document.getElementById("ny6");
let ny7 = document.getElementById("ny7");
let ny8 = document.getElementById("ny8");
let ny9 = document.getElementById("ny9");
let ny10 = document.getElementById("ny10");
let ny11 = document.getElementById("ny11");
let modalny1 = document.getElementById("modalNy1");
let modalny2 = document.getElementById("modalNy2");
let modalny3 = document.getElementById("modalNy3");
let modalny4 = document.getElementById("modalNy4");
let modalny5 = document.getElementById("modalNy5");
let modalny6 = document.getElementById("modalNy6");
let modalny7 = document.getElementById("modalNy7");
let modalny8 = document.getElementById("modalNy8");
let modalny9 = document.getElementById("modalNy9");
let modalny10 = document.getElementById("modalNy10");
let modalny11 = document.getElementById("modalNy11");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 
ny1.onclick = function() {
  modalny1.style.display = "block";
}

ny2.onclick = function() {
  modalny2.style.display = "block";
}

ny3.onclick = function() {
  modalny3.style.display = "block";
}

ny4.onclick = function() {
  modalny4.style.display = "block";
}

ny5.onclick = function() {
  modalny5.style.display = "block";
}

ny6.onclick = function() {
  modalny6.style.display = "block";
}

ny7.onclick = function() {
  modalny7.style.display = "block";
}

ny8.onclick = function() {
  modalny8.style.display = "block";
}

ny9.onclick = function() {
  modalny9.style.display = "block";
}

ny10.onclick = function() {
  modalny10.style.display = "block";
}

ny11.onclick = function() {
  modalny11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modalny1){
//   modalny1.style.display = "none";
//   }
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modalny1) {
      modalny1.style.display = "none";
    } else if (event.target == modalny2) {
      modalny2.style.display = "none";
    } else if (event.target == modalny3) {
      modalny3.style.display = "none";
    } else if (event.target == modalny4) {
      modalny4.style.display = "none";
    } else if (event.target == modalny5) {
      modalny5.style.display = "none";
    } else if (event.target == modalny6) {
      modalny6.style.display = "none";
    } else if (event.target == modalny7) {
      modalny7.style.display = "none";
    } else if (event.target == modalny8) {
      modalny8.style.display = "none";
    } else if (event.target == modalny9) {
      modalny9.style.display = "none";
    } else if (event.target == modalny10) {
      modalny10.style.display = "none";
    } else if (event.target == modalny11) {
      modalny11.style.display = "none";
    }
}


