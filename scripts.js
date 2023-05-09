let features = document.getElementsByClassName('feature');

for (let feature of features) {
  let animationRandomSec = Math.random() * (8 - 4) + 4 + "s";
  feature.style.animationDuration = animationRandomSec;
  feature.style.display = "block";
  console.log(feature);
}