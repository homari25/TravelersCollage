let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecespt = document.getElementsByClassName("piecespt");
let pt1 = document.getElementById("pt1");
let pt2 = document.getElementById("pt2");
let pt3 = document.getElementById("pt3");
let pt4 = document.getElementById("pt4");
let pt5 = document.getElementById("pt5");
let pt6 = document.getElementById("pt6");
let pt7 = document.getElementById("pt7");

let modalpt1 = document.getElementById("modalPt1");
let modalpt2 = document.getElementById("modalPt2");
let modalpt3 = document.getElementById("modalPt3");
let modalpt4 = document.getElementById("modalPt4");
let modalpt5 = document.getElementById("modalPt5");
let modalpt6 = document.getElementById("modalPt6");
let modalpt7 = document.getElementById("modalPt7");

let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 

pt1.onclick = function() {
  modalpt1.style.display = "block";
}

pt2.onclick = function() {
  modalpt2.style.display = "block";
}

pt3.onclick = function() {
  modalpt3.style.display = "block";
}

pt4.onclick = function() {
  modalpt4.style.display = "block";
}

pt5.onclick = function() {
  modalpt5.style.display = "block";
}

pt6.onclick = function() {
  modalpt6.style.display = "block";
}

pt7.onclick = function() {
  modalpt7.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modalpt1){
//   modalpt1.style.display = "none";
//   }
// }

// When the user clicks aptwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modalpt1) {
      modalpt1.style.display = "none";
    } else if (event.target == modalpt2) {
      modalpt2.style.display = "none";
    } else if (event.target == modalpt3) {
      modalpt3.style.display = "none";
    } else if (event.target == modalpt4) {
      modalpt4.style.display = "none";
    } else if (event.target == modalpt5) {
      modalpt5.style.display = "none";
    } else if (event.target == modalpt6) {
      modalpt6.style.display = "none";
    } else if (event.target == modalpt7) {
      modalpt7.style.display = "none";
    }
}


