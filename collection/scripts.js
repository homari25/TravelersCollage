let how = document.getElementById("how");
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
how.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let imgResult = document.getElementsByClassName("result");
let colorsList = document.getElementById("colorList");
let docList = document.getElementById("documentList");
let senseList = document.getElementById("senseList");


function submit() {
    let colorSelect = colorList.options[colorList.selectedIndex].text;  
    let docSelect = documentList.options[documentList.selectedIndex].text;  
    console.log(colorSelect);
    console.log(docSelect);

for (let i = 0; i < imgResult.length; i++) {
    let colorType = imgResult[i].getAttribute("data-color");
    // console.log(colorType);
    let docType = imgResult[i].getAttribute("data-doc");

    if (colorType == colorSelect) {
      imgResult[i].style.display = "block";
      imgResult[i].style.left = 10 * i + "px";
        } else {
      imgResult[i].style.display = "none";
        }

    if (docType == docSelect) {
      imgResult[i].style.display = "block";
      imgResult[i].style.left = 10 * i + "px";
        } else {
      imgResult[i].style.display = "none";
        }

    }
}

