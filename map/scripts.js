let features = document.getElementsByClassName('feature');
let vid = document.getElementById("myVideo");


for (let feature of features) {
  let animationRandomSec = Math.random() * (8 - 4) + 4 + "s";
  feature.style.animationDuration = animationRandomSec;
  feature.style.display = "block";
  console.log(feature);
}

vid.onended = function() {
  vid.remove()
  };