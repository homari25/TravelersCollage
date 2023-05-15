let pictures = document.getElementsByClassName("picture");

for (let picture of pictures) {
  let animationRandomSec = Math.random() * (9 - 5) + 5 + "s";
  picture.style.animationDuration = animationRandomSec;
  picture.style.display = "block";
}
