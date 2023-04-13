let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let pieceshcmc = document.getElementsByClassName("pieceshcmc");
let hcmc1 = document.getElementById("hcmc1");
let hcmc2 = document.getElementById("hcmc2");
let hcmc3 = document.getElementById("hcmc3");
let hcmc4 = document.getElementById("hcmc4");
let hcmc5 = document.getElementById("hcmc5");
let hcmc6 = document.getElementById("hcmc6");
let hcmc7 = document.getElementById("hcmc7");
let modalhcmc1 = document.getElementById("modalHCMC1");
let modalhcmc2 = document.getElementById("modalHCMC2");
let modalhcmc3 = document.getElementById("modalHCMC3");
let modalhcmc4 = document.getElementById("modalHCMC4");
let modalhcmc5 = document.getElementById("modalHCMC5");
let modalhcmc6 = document.getElementById("modalHCMC6");
let modalhcmc7 = document.getElementById("modalHCMC7");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 
// how.onclick = function() {
//   modal.style.display = "block";
// }

hcmc1.onclick = function() {
  modalhcmc1.style.display = "block";
}

hcmc2.onclick = function() {
  modalhcmc2.style.display = "block";
}

hcmc3.onclick = function() {
  modalhcmc3.style.display = "block";
}

hcmc4.onclick = function() {
  modalhcmc4.style.display = "block";
}

hcmc5.onclick = function() {
  modalhcmc5.style.display = "block";
}

hcmc6.onclick = function() {
  modalhcmc6.style.display = "block";
}

hcmc7.onclick = function() {
  modalhcmc7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modalhcmc1){
//   modalhcmc1.style.display = "none";
//   }
// }

// When the user clicks ahcmcwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modalhcmc1) {
      modalhcmc1.style.display = "none";
    } else if (event.target == modalhcmc2) {
      modalhcmc2.style.display = "none";
    } else if (event.target == modalhcmc3) {
      modalhcmc3.style.display = "none";
    } else if (event.target == modalhcmc4) {
      modalhcmc4.style.display = "none";
    } else if (event.target == modalhcmc5) {
      modalhcmc5.style.display = "none";
    } else if (event.target == modalhcmc6) {
      modalhcmc6.style.display = "none";
    } else if (event.target == modalhcmc7) {
      modalhcmc7.style.display = "none";
    }
}


