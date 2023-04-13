let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecesdb = document.getElementsByClassName("piecesdb");
let db1 = document.getElementById("db1");
let db2 = document.getElementById("db2");
let db3 = document.getElementById("db3");
let db4 = document.getElementById("db4");
let db5 = document.getElementById("db5");
let db6 = document.getElementById("db6");
let db7 = document.getElementById("db7");
let db8 = document.getElementById("db8");
let db9 = document.getElementById("db9");
let db10 = document.getElementById("db10");
let db11 = document.getElementById("db11");
let modaldb1 = document.getElementById("modalDb1");
let modaldb2 = document.getElementById("modalDb2");
let modaldb3 = document.getElementById("modalDb3");
let modaldb4 = document.getElementById("modalDb4");
let modaldb5 = document.getElementById("modalDb5");
let modaldb6 = document.getElementById("modalDb6");
let modaldb7 = document.getElementById("modalDb7");
let modaldb8 = document.getElementById("modalDb8");
let modaldb9 = document.getElementById("modalDb9");
let modaldb10 = document.getElementById("modalDb10");
let modaldb11 = document.getElementById("modalDb11");
let modals = document.querySelectorAll("modal");


// When the user clicks the button, open the modal 
// how.onclick = function() {
//   modal.style.display = "block";
// }

db1.onclick = function() {
  modaldb1.style.display = "block";
}

db2.onclick = function() {
  modaldb2.style.display = "block";
}

db3.onclick = function() {
  modaldb3.style.display = "block";
}

db4.onclick = function() {
  modaldb4.style.display = "block";
}

db5.onclick = function() {
  modaldb5.style.display = "block";
}

db6.onclick = function() {
  modaldb6.style.display = "block";
}

db7.onclick = function() {
  modaldb7.style.display = "block";
}

db8.onclick = function() {
  modaldb8.style.display = "block";
}

db9.onclick = function() {
  modaldb9.style.display = "block";
}

db10.onclick = function() {
  modaldb10.style.display = "block";
}

db11.onclick = function() {
  modaldb11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modaldb1){
//   modaldb1.style.display = "none";
//   }
// }

// When the user clicks adbwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modaldb1) {
      modaldb1.style.display = "none";
    } else if (event.target == modaldb2) {
      modaldb2.style.display = "none";
    } else if (event.target == modaldb3) {
      modaldb3.style.display = "none";
    } else if (event.target == modaldb4) {
      modaldb4.style.display = "none";
    } else if (event.target == modaldb5) {
      modaldb5.style.display = "none";
    } else if (event.target == modaldb6) {
      modaldb6.style.display = "none";
    } else if (event.target == modaldb7) {
      modaldb7.style.display = "none";
    } else if (event.target == modaldb8) {
      modaldb8.style.display = "none";
    } else if (event.target == modaldb9) {
      modaldb9.style.display = "none";
    } else if (event.target == modaldb10) {
      modaldb10.style.display = "none";
    } else if (event.target == modaldb11) {
      modaldb11.style.display = "none";
    }
}


