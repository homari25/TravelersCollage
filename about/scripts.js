let pictures = document.getElementsByClassName("picture");

for (let picture of pictures) {
  let animationRandomSec = Math.random() * (9 - 5) + 5 + "s";
  piecesdb.style.animationDuration = animationRandomSec;
  piecesdb.style.display = "block";
  console.log(piecesdb);
}
