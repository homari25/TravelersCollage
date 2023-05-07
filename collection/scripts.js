let imgResult = document.getElementsByClassName("result");
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

for (let i = 0; i < imgResult.length; i++) {
    let colorType = imgResult[i].getAttribute("data-color");
    // console.log(colorType);
    let docType = imgResult[i].getAttribute("data-doc");
    let senseType = imgResult[i].getAttribute("data-sense");

    if (colorType == colorSelect) {
      // container.style.display = "grid";
      // container.style.padding = 10 + "px";
      // container.gridTemplateColumn = "auto auto auto";
      for (j = 0; j < i; j++) {
      imgResult[i].style.display = "block";
      // imgResult[i].style.left = 5 * i + "px";
      imgResult[i].style.top = Math.random() *  (200 - 20) + 20 + "px";
      imgResult[i].style.left = Math.random() * (1000 - 50) + 50 + "px";
      // imgResult[i].style.padding = 10 + "px";
      imgResult[i].style.position = "absolute";
      // imgResult[i].style.marginTop = 5 * i + "px";
      // container.style.overflow = "hidden";
      imgResult[i].style.paddingLeft = Math.random() * (300 - 20) + 20 + "px";
      }
        } else {
          imgResult[i].style.display = "none";
        }
    // if (docType == docSelect) {
    //   imgResult[i].style.display = "block";
    //   imgResult[i].style.left = 10 * i + "px";
    //     } else {
    //       imgResult[i].style.display = "none";
    // }
    // if (senseType == senseSelect) {
    //   imgResult[i].style.display = "block";
    //   imgResult[i].style.left = i + "px";
    //   imgResult[i].style.top = i + "px";
    // } else {
    //   imgResult[i].style.display = "none";
    //     }
      }
}

