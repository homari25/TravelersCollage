let imgResult = document.getElementsByClassName("result");
let colorsList = document.getElementById("colorList");


function submit() {
    let colorSelect = colorList.options[colorList.selectedIndex].text;  
    console.log(colorSelect);

for (let i = 0; i < imgResult.length; i++) {
    let colorType = imgResult[i].getAttribute("data-color");
    // console.log(colorType);

    if (colorType == colorSelect) {
    imgResult[i].style.display = "block";
        } else {
    imgResult[i].style.display = "none";
        }
    }
}

