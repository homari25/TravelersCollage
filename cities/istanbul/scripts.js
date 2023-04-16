let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecestk = document.getElementsByClassName("piecestk");
let tk1 = document.getElementById("tk1");
let tk2 = document.getElementById("tk2");
let tk3 = document.getElementById("tk3");
let tk4 = document.getElementById("tk4");
let tk5 = document.getElementById("tk5");
let tk6 = document.getElementById("tk6");
let tk7 = document.getElementById("tk7");
let tk8 = document.getElementById("tk8");
let tk9 = document.getElementById("tk9");
let tk10 = document.getElementById("tk10");
let tk11 = document.getElementById("tk11");
let modaltk1 = document.getElementById("modalTk1");
let modaltk2 = document.getElementById("modalTk2");
let modaltk3 = document.getElementById("modalTk3");
let modaltk4 = document.getElementById("modalTk4");
let modaltk5 = document.getElementById("modalTk5");
let modaltk6 = document.getElementById("modalTk6");
let modaltk7 = document.getElementById("modalTk7");
let modaltk8 = document.getElementById("modalTk8");
let modaltk9 = document.getElementById("modalTk9");
let modaltk10 = document.getElementById("modalTk10");
let modaltk11 = document.getElementById("modalTk11");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 
// how.onclick = function() {
//   modal.style.display = "block";
// }

tk1.onclick = function() {
  modaltk1.style.display = "block";
}

tk2.onclick = function() {
  modaltk2.style.display = "block";
}

tk3.onclick = function() {
  modaltk3.style.display = "block";
}

tk4.onclick = function() {
  modaltk4.style.display = "block";
}

tk5.onclick = function() {
  modaltk5.style.display = "block";
}

tk6.onclick = function() {
  modaltk6.style.display = "block";
}

tk7.onclick = function() {
  modaltk7.style.display = "block";
}

tk8.onclick = function() {
  modaltk8.style.display = "block";
}

tk9.onclick = function() {
  modaltk9.style.display = "block";
}

tk10.onclick = function() {
  modaltk10.style.display = "block";
}

tk11.onclick = function() {
  modaltk11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modaltk1){
//   modaltk1.style.display = "none";
//   }
// }

// When the user clicks atkwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modaltk1) {
      modaltk1.style.display = "none";
    } else if (event.target == modaltk2) {
      modaltk2.style.display = "none";
    } else if (event.target == modaltk3) {
      modaltk3.style.display = "none";
    } else if (event.target == modaltk4) {
      modaltk4.style.display = "none";
    } else if (event.target == modaltk5) {
      modaltk5.style.display = "none";
    } else if (event.target == modaltk6) {
      modaltk6.style.display = "none";
    } else if (event.target == modaltk7) {
      modaltk7.style.display = "none";
    } else if (event.target == modaltk8) {
      modaltk8.style.display = "none";
    } else if (event.target == modaltk9) {
      modaltk9.style.display = "none";
    } else if (event.target == modaltk10) {
      modaltk10.style.display = "none";
    } else if (event.target == modaltk11) {
      modaltk11.style.display = "none";
    }
}


