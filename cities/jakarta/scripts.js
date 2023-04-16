let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecesjkt = document.getElementsByClassName("piecesjkt");
let jkt1 = document.getElementById("jkt1");
let jkt2 = document.getElementById("jkt2");
let jkt3 = document.getElementById("jkt3");
let jkt4 = document.getElementById("jkt4");
let jkt5 = document.getElementById("jkt5");
let jkt6 = document.getElementById("jkt6");
let jkt7 = document.getElementById("jkt7");
let jkt8 = document.getElementById("jkt8");
let jkt9 = document.getElementById("jkt9");
let jkt10 = document.getElementById("jkt10");
let modaljkt1 = document.getElementById("modalJkt1");
let modaljkt2 = document.getElementById("modalJkt2");
let modaljkt3 = document.getElementById("modalJkt3");
let modaljkt4 = document.getElementById("modalJkt4");
let modaljkt5 = document.getElementById("modalJkt5");
let modaljkt6 = document.getElementById("modalJkt6");
let modaljkt7 = document.getElementById("modalJkt7");
let modaljkt8 = document.getElementById("modalJkt8");
let modaljkt9 = document.getElementById("modalJkt9");
let modaljkt10 = document.getElementById("modalJkt10");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 

jkt1.onclick = function() {
  modaljkt1.style.display = "block";
}

jkt2.onclick = function() {
  modaljkt2.style.display = "block";
}

jkt3.onclick = function() {
  modaljkt3.style.display = "block";
}

jkt4.onclick = function() {
  modaljkt4.style.display = "block";
}

jkt5.onclick = function() {
  modaljkt5.style.display = "block";
}

jkt6.onclick = function() {
  modaljkt6.style.display = "block";
}

jkt7.onclick = function() {
  modaljkt7.style.display = "block";
}

jkt8.onclick = function() {
  modaljkt8.style.display = "block";
}

jkt9.onclick = function() {
  modaljkt9.style.display = "block";
}

jkt10.onclick = function() {
  modaljkt10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modaljkt1){
//   modaljkt1.style.display = "none";
//   }
// }

// When the user clicks ajktwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modaljkt1) {
      modaljkt1.style.display = "none";
    } else if (event.target == modaljkt2) {
      modaljkt2.style.display = "none";
    } else if (event.target == modaljkt3) {
      modaljkt3.style.display = "none";
    } else if (event.target == modaljkt4) {
      modaljkt4.style.display = "none";
    } else if (event.target == modaljkt5) {
      modaljkt5.style.display = "none";
    } else if (event.target == modaljkt6) {
      modaljkt6.style.display = "none";
    } else if (event.target == modaljkt7) {
      modaljkt7.style.display = "none";
    } else if (event.target == modaljkt8) {
      modaljkt8.style.display = "none";
    } else if (event.target == modaljkt9) {
      modaljkt9.style.display = "none";
    } else if (event.target == modaljkt10) {
      modaljkt10.style.display = "none";
    } 
}


