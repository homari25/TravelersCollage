let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let piecesmkjs = document.getElementsByClassName("piecesmkj");
let mkj1 = document.getElementById("mkj1");
let mkj2 = document.getElementById("mkj2");
let mkj3 = document.getElementById("mkj3");
let mkj4 = document.getElementById("mkj4");
let mkj5 = document.getElementById("mkj5");
let mkj6 = document.getElementById("mkj6");
let mkj7 = document.getElementById("mkj7");
let mkj8 = document.getElementById("mkj8");
let mkj9 = document.getElementById("mkj9");
let mkj10 = document.getElementById("mkj10");
let mkj11 = document.getElementById("mkj11");
let mkj12 = document.getElementById("mkj12");
let mkj13 = document.getElementById("mkj13");
let mkj14 = document.getElementById("mkj14");
let mkj15 = document.getElementById("mkj15");
let mkj16 = document.getElementById("mkj16");
let mkj17 = document.getElementById("mkj17");
let mkj18 = document.getElementById("mkj18");
let mkj19 = document.getElementById("mkj19");

let modalmkj1 = document.getElementById("modalMkj1");
let modalmkj2 = document.getElementById("modalMkj2");
let modalmkj3 = document.getElementById("modalMkj3");
let modalmkj4 = document.getElementById("modalMkj4");
let modalmkj5 = document.getElementById("modalMkj5");
let modalmkj6 = document.getElementById("modalMkj6");
let modalmkj7 = document.getElementById("modalMkj7");
let modalmkj8 = document.getElementById("modalMkj8");
let modalmkj9 = document.getElementById("modalMkj9");
let modalmkj10 = document.getElementById("modalMkj10");
let modalmkj11 = document.getElementById("modalMkj11");
let modalmkj12 = document.getElementById("modalMkj12");
let modalmkj13 = document.getElementById("modalMkj13");
let modalmkj14 = document.getElementById("modalMkj14");
let modalmkj15 = document.getElementById("modalMkj15");
let modalmkj16 = document.getElementById("modalMkj16");
let modalmkj17 = document.getElementById("modalMkj17");
let modalmkj18 = document.getElementById("modalMkj18");
let modalmkj19 = document.getElementById("modalMkj19");

let modals = document.querySelectorAll("modal");

for (let piecesmkj of piecesmkjs) {
  let animationRandomSec = Math.random() * (10 - 3) + 3 + "s";
  piecesmkj.style.animationDuration = animationRandomSec;
  piecesmkj.style.display = "block";
  console.log(piecesmkj);
}

// When the user clicks the button, open the modal 

mkj1.onclick = function() {
  modalmkj1.style.display = "block";
}

mkj2.onclick = function() {
  modalmkj2.style.display = "block";
}

mkj3.onclick = function() {
  modalmkj3.style.display = "block";
}

mkj4.onclick = function() {
  modalmkj4.style.display = "block";
}

mkj5.onclick = function() {
  modalmkj5.style.display = "block";
}

mkj6.onclick = function() {
  modalmkj6.style.display = "block";
}

mkj7.onclick = function() {
  modalmkj7.style.display = "block";
}

mkj8.onclick = function() {
  modalmkj8.style.display = "block";
}

mkj9.onclick = function() {
  modalmkj9.style.display = "block";
}

mkj10.onclick = function() {
  modalmkj10.style.display = "block";
}

mkj11.onclick = function() {
  modalmkj11.style.display = "block";
}

mkj12.onclick = function() {
  modalmkj12.style.display = "block";
}

mkj13.onclick = function() {
  modalmkj13.style.display = "block";
}

mkj14.onclick = function() {
  modalmkj14.style.display = "block";
}

mkj15.onclick = function() {
  modalmkj15.style.display = "block";
}

mkj16.onclick = function() {
  modalmkj16.style.display = "block";
}

mkj17.onclick = function() {
  modalmkj17.style.display = "block";
}

mkj18.onclick = function() {
  modalmkj18.style.display = "block";
}

mkj19.onclick = function() {
  modalmkj19.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   } else if (event.target == modalmkj1){
//   modalmkj1.style.display = "none";
//   }
// }

// When the user clicks amkjwhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modalmkj1) {
      modalmkj1.style.display = "none";
    } else if (event.target == modalmkj2) {
      modalmkj2.style.display = "none";
    } else if (event.target == modalmkj3) {
      modalmkj3.style.display = "none";
    } else if (event.target == modalmkj4) {
      modalmkj4.style.display = "none";
    } else if (event.target == modalmkj5) {
      modalmkj5.style.display = "none";
    } else if (event.target == modalmkj6) {
      modalmkj6.style.display = "none";
    } else if (event.target == modalmkj7) {
      modalmkj7.style.display = "none";
    } else if (event.target == modalmkj8) {
      modalmkj8.style.display = "none";
    } else if (event.target == modalmkj9) {
      modalmkj9.style.display = "none";
    } else if (event.target == modalmkj10) {
      modalmkj10.style.display = "none";
    } else if (event.target == modalmkj11) {
      modalmkj11.style.display = "none";
    } else if (event.target == modalmkj12) {
      modalmkj12.style.display = "none";
    } else if (event.target == modalmkj13) {
      modalmkj13.style.display = "none";
    } else if (event.target == modalmkj14) {
      modalmkj14.style.display = "none";
    } else if (event.target == modalmkj15) {
      modalmkj15.style.display = "none";
    } else if (event.target == modalmkj16) {
      modalmkj16.style.display = "none";
    } else if (event.target == modalmkj17) {
      modalmkj17.style.display = "none";
    } else if (event.target == modalmkj18) {
      modalmkj18.style.display = "none";
    } else if (event.target == modalmkj19) {
      modalmkj19.style.display = "none";
    }
}


