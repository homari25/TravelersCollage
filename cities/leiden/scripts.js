let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecesld = document.getElementsByClassName("piecesld");
let ld1 = document.getElementById("ld1");
let ld2 = document.getElementById("ld2");
let ld3 = document.getElementById("ld3");
let ld4 = document.getElementById("ld4");
let ld5 = document.getElementById("ld5");
let ld6 = document.getElementById("ld6");
let ld7 = document.getElementById("ld7");
let ld8 = document.getElementById("ld8");
let ld9 = document.getElementById("ld9");
let ld10 = document.getElementById("ld10");
let ld11 = document.getElementById("ld11");
let modalld1 = document.getElementById("modalLd1");
let modalld2 = document.getElementById("modalLd2");
let modalld3 = document.getElementById("modalLd3");
let modalld4 = document.getElementById("modalLd4");
let modalld5 = document.getElementById("modalLd5");
let modalld6 = document.getElementById("modalLd6");
let modalld7 = document.getElementById("modalLd7");
let modalld8 = document.getElementById("modalLd8");
let modalld9 = document.getElementById("modalLd9");
let modalld10 = document.getElementById("modalLd10");
let modalld11 = document.getElementById("modalLd11");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 
how.onclick = function() {
  modal.style.display = "block";
}

ld1.onclick = function() {
  modalld1.style.display = "block";
}

ld2.onclick = function() {
  modalld2.style.display = "block";
}

ld3.onclick = function() {
  modalld3.style.display = "block";
}

ld4.onclick = function() {
  modalld4.style.display = "block";
}

ld5.onclick = function() {
  modalld5.style.display = "block";
}

ld6.onclick = function() {
  modalld6.style.display = "block";
}

ld7.onclick = function() {
  modalld7.style.display = "block";
}

ld8.onclick = function() {
  modalld8.style.display = "block";
}

ld9.onclick = function() {
  modalld9.style.display = "block";
}

ld10.onclick = function() {
  modalld10.style.display = "block";
}

ld11.onclick = function() {
  modalld11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modalld1){
//   modalld1.style.display = "none";
//   }
// }

// When the user clicks aldwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modalld1) {
      modalld1.style.display = "none";
    } else if (event.target == modalld2) {
      modalld2.style.display = "none";
    } else if (event.target == modalld3) {
      modalld3.style.display = "none";
    } else if (event.target == modalld4) {
      modalld4.style.display = "none";
    } else if (event.target == modalld5) {
      modalld5.style.display = "none";
    } else if (event.target == modalld6) {
      modalld6.style.display = "none";
    } else if (event.target == modalld7) {
      modalld7.style.display = "none";
    } else if (event.target == modalld8) {
      modalld8.style.display = "none";
    } else if (event.target == modalld9) {
      modalld9.style.display = "none";
    } else if (event.target == modalld10) {
      modalld10.style.display = "none";
    } else if (event.target == modalld11) {
      modalld11.style.display = "none";
    }
}


