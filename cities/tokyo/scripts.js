let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecestk = document.getElementsByClassName("piecestk");
let tk1 = document.getElementById("tky1");
let tk2 = document.getElementById("tky2");
let tk3 = document.getElementById("tky3");
let tk4 = document.getElementById("tky4");
let tk5 = document.getElementById("tky5");
let tk6 = document.getElementById("tky6");
let tk7 = document.getElementById("tky7");
let tk8 = document.getElementById("tky8");
let tk9 = document.getElementById("tky9");
let tk10 = document.getElementById("tky10");
let tk11 = document.getElementById("tky11");
let modaltky1 = document.getElementById("modalTk1");
let modaltky2 = document.getElementById("modalTk2");
let modaltky3 = document.getElementById("modalTk3");
let modaltky4 = document.getElementById("modalTk4");
let modaltky5 = document.getElementById("modalTk5");
let modaltky6 = document.getElementById("modalTk6");
let modaltky7 = document.getElementById("modalTk7");
let modaltky8 = document.getElementById("modalTk8");
let modaltky9 = document.getElementById("modalTk9");
let modaltky10 = document.getElementById("modalTk10");
let modaltky11 = document.getElementById("modalTk11");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 

tk1.onclick = function() {
  modaltky1.style.display = "block";
}

tk2.onclick = function() {
  modaltky2.style.display = "block";
}

tk3.onclick = function() {
  modaltky3.style.display = "block";
}

tk4.onclick = function() {
  modaltky4.style.display = "block";
}

tk5.onclick = function() {
  modaltky5.style.display = "block";
}

tk6.onclick = function() {
  modaltky6.style.display = "block";
}

tk7.onclick = function() {
  modaltky7.style.display = "block";
}

tk8.onclick = function() {
  modaltky8.style.display = "block";
}

tk9.onclick = function() {
  modaltky9.style.display = "block";
}

tk10.onclick = function() {
  modaltky10.style.display = "block";
}

tk11.onclick = function() {
  modaltky11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modaltky1){
//   modaltky1.style.display = "none";
//   }
// }

// When the user clicks atkwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modaltky1) {
      modaltky1.style.display = "none";
    } else if (event.target == modaltky2) {
      modaltky2.style.display = "none";
    } else if (event.target == modaltky3) {
      modaltky3.style.display = "none";
    } else if (event.target == modaltky4) {
      modaltky4.style.display = "none";
    } else if (event.target == modaltky5) {
      modaltky5.style.display = "none";
    } else if (event.target == modaltky6) {
      modaltky6.style.display = "none";
    } else if (event.target == modaltky7) {
      modaltky7.style.display = "none";
    } else if (event.target == modaltky8) {
      modaltky8.style.display = "none";
    } else if (event.target == modaltky9) {
      modaltky9.style.display = "none";
    } else if (event.target == modaltky10) {
      modaltky10.style.display = "none";
    } else if (event.target == modaltky11) {
      modaltky11.style.display = "none";
    }
}


