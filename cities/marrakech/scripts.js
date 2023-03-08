let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecesmk = document.getElementsByClassName("piecesmk");
let mk1 = document.getElementById("mk1");
let mk2 = document.getElementById("mk2");
let mk3 = document.getElementById("mk3");
let mk4 = document.getElementById("mk4");
let mk5 = document.getElementById("mk5");
let mk6 = document.getElementById("mk6");
let mk7 = document.getElementById("mk7");
let mk8 = document.getElementById("mk8");
let mk9 = document.getElementById("mk9");
let mk10 = document.getElementById("mk10");
let modalmk1 = document.getElementById("modalMk1");
let modalmk2 = document.getElementById("modalMk2");
let modalmk3 = document.getElementById("modalMk3");
let modalmk4 = document.getElementById("modalMk4");
let modalmk5 = document.getElementById("modalMk5");
let modalmk6 = document.getElementById("modalMk6");
let modalmk7 = document.getElementById("modalMk7");
let modalmk8 = document.getElementById("modalMk8");
let modalmk9 = document.getElementById("modalMk9");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 
how.onclick = function() {
  modal.style.display = "block";
}

mk1.onclick = function() {
  modalmk1.style.display = "block";
}

mk2.onclick = function() {
  modalmk2.style.display = "block";
}

mk3.onclick = function() {
  modalmk3.style.display = "block";
}

mk4.onclick = function() {
  modalmk4.style.display = "block";
}

mk5.onclick = function() {
  modalmk5.style.display = "block";
}

mk6.onclick = function() {
  modalmk6.style.display = "block";
}

mk7.onclick = function() {
  modalmk7.style.display = "block";
}

mk8.onclick = function() {
  modalmk8.style.display = "block";
}

mk9.onclick = function() {
  modalmk9.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modalmk1){
//   modalmk1.style.display = "none";
//   }
// }

// When the user clicks amkwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modalmk1) {
      modalmk1.style.display = "none";
    } else if (event.target == modalmk2) {
      modalmk2.style.display = "none";
    } else if (event.target == modalmk3) {
      modalmk3.style.display = "none";
    } else if (event.target == modalmk4) {
      modalmk4.style.display = "none";
    } else if (event.target == modalmk5) {
      modalmk5.style.display = "none";
    } else if (event.target == modalmk6) {
      modalmk6.style.display = "none";
    } else if (event.target == modalmk7) {
      modalmk7.style.display = "none";
    } else if (event.target == modalmk8) {
      modalmk8.style.display = "none";
    } else if (event.target == modalmk9) {
      modalmk9.style.display = "none";
    }
}


