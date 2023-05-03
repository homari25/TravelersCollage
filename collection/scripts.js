let imgResult = document.getElementsByClassName("result");
let colorsList = document.getElementById("colorList");
let docList = document.getElementById("documentList");
let senseList = document.getElementById("senseList");
let selected = document.getElementsByClassName("selected");



let randomPosX = Math.random() * 10;
let randomPosY = Math.random() * 10;
console.log(randomPosX);

function submit() {
    let colorSelect = colorList.options[colorList.selectedIndex].text;  
    let docSelect = documentList.options[documentList.selectedIndex].text;  
    let senseSelect = senseList.options[senseList.selectedIndex].text;  
    console.log(colorSelect,docSelect,senseSelect);

for (let i = 0; i < imgResult.length; i++) {
    let colorType = imgResult[i].getAttribute("data-color");
    // console.log(colorType);
    let docType = imgResult[i].getAttribute("data-doc");
    let senseType = imgResult[i].getAttribute("data-sense");

    if (colorType == colorSelect) {
      imgResult[i].style.display = "block";
      imgResult[i].style.top = randomPosY * i+ "px";
      imgResult[i].style.left = randomPosX * i + "px";
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

