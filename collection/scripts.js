let imgResults = document.getElementsByClassName("result");
let colorsList = document.getElementById("colorList");
let docList = document.getElementById("documentList");
let senseList = document.getElementById("senseList");
let selected = document.getElementsByClassName("selected");
let container = document.getElementById("container");
let height = window.innerHeight
let width = window.innerWidth;


let randomPosX = Math.random() * 10;
// container.style.backgroundColor = "blue";

function submit() {
    let colorSelect = colorList.options[colorList.selectedIndex].value;  
    let docSelect = documentList.options[documentList.selectedIndex].value;  
    let senseSelect = senseList.options[senseList.selectedIndex].value;  
    console.log(colorSelect,docSelect,senseSelect);
    document.getElementById("container").className = "container";

for (let i = 0; i < imgResults.length; i++) {
    let colorType = imgResults[i].getAttribute("data-color");
    // for (imgResult of imgResults) {
      if (colorType == colorSelect) {
      imgResults[i].style.display = "block";
      imgResults[i].style.position = "absolute";
      if (i%3 == 0) {
        imgResults[i].style.top = 0 + "px";
        imgResults[i].style.left = i * Math.random() * 10 + "px";
      } else if (i%3 == 1) {
        imgResults[i].style.top = 250 + "px";
        imgResults[i].style.left = i * Math.random() * (45 - 20) + "px";
      } else {
        imgResults[i].style.top = 500 + "px";
        imgResults[i].style.left = i * Math.random() * (90-50) + "px";
      }
    } else {
      imgResults[i].style.display = "none";
    }
  }
    
  for (let j = 0; j < imgResults.length; j++) {
    let docType = imgResults[j].getAttribute("data-doc");
    // for (imgResult of imgResults) {
      if (docType == docSelect) {
      imgResults[j].style.display = "block";
      imgResults[j].style.position = "absolute";
      if (j%3 == 0) {
        imgResults[j].style.top = 0 + "px";
        imgResults[j].style.left = j * Math.random() * 10 + "px";
      } else if (j%3 == 1) {
        imgResults[j].style.top = 250 + "px";
        imgResults[j].style.left = j * Math.random() * (45 - 20) + "px";
      } else {
        imgResults[j].style.top = 500 + "px";
        imgResults[j].style.left = j * Math.random() * (90-50) + "px";
      }
    } else {
      imgResults[j].style.display = "none";
    }
  }

  for (let k = 0; k < imgResults.length; k++) {
    let senseType = imgResults[k].getAttribute("data-sense"); 
    // for (imgResult of imgResults) {
      if (senseType == senseSelect) {
      imgResults[k].style.display = "block";
      imgResults[k].style.position = "absolute";
      if (k%3 == 0) {
        imgResults[k].style.top = 0 + "px";
        imgResults[k].style.left = k * Math.random() * 10 + "px";
      } else if (k%3 == 1) {
        imgResults[k].style.top = 250 + "px";
        imgResults[k].style.left = k * Math.random() * (45 - 20) + "px";
      } else {
        imgResults[k].style.top = 500 + "px";
        imgResults[k].style.left = k * Math.random() * (90-50) + "px";
      }
    } else {
      imgResults[k].style.display = "none";
    }
  }
}