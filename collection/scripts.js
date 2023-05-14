let imgResults = document.getElementsByClassName("result");
let colorsList = document.getElementById("colorList");
let docList = document.getElementById("documentList");
let senseList = document.getElementById("senseList");
let selected = document.getElementsByClassName("selected");
let container = document.getElementById("container");
let height = window.innerHeight;
let width = window.innerWidth;

function submit() {
  let colorSelect = colorList.options[colorList.selectedIndex].value;  
  let docSelect = documentList.options[documentList.selectedIndex].value;  
  let senseSelect = senseList.options[senseList.selectedIndex].value;  
  console.log(colorSelect,docSelect,senseSelect);
  document.getElementById("container").className = "container";

  let count = 0;
  for (let i = 0; i < imgResults.length; i++) {
    let colorType = imgResults[i].getAttribute("data-color");
    let docType = imgResults[i].getAttribute("data-doc");
    let senseType = imgResults[i].getAttribute("data-sense"); 

    let sameFilters = (colorType == colorSelect && docType == docSelect) ||
    (docType == docSelect && senseType == senseSelect) ||
    (colorType == colorSelect && senseType == senseSelect);

    // Check if any filter is selected
    // let filterApplied = (colorSelect !== "none") || (docSelect !== "none") || (senseSelect !== "none");
    // if (colorType == colorSelect) {
    // if (!filterApplied || (colorType == colorSelect && docType == docSelect && senseType == senseSelect)) {
      if (colorType == colorSelect && docSelect=="document" && senseSelect=="sense") {
      imgResults[i].style.display = "block";
      imgResults[i].style.position = "absolute";
      if (imgResults[i].style.height > "200px") {
        imgResults[i].style.height = "200px";
        imgResults[i].style.width = "auto";
      } else {
        imgResults[i].style.width = "200px";
        imgResults[i].style.height = "auto";
      }
      console.log(imgResults[i]);
    
      imgResults[i].style.top = count % 3 * 200 + "px";
      imgResults[i].style.left = Math.floor(count / 3) * width / 6 + "px";
      count++;
    } else if (docType == docSelect && colorSelect=="colors" && senseSelect=="sense") {
    imgResults[i].style.display = "block";
    imgResults[i].style.position = "absolute";
    if (imgResults[i].style.height > "200px") {
      imgResults[i].style.height = "200px";
      imgResults[i].style.width = "auto";
    } else {
      imgResults[i].style.width = "200px";
      imgResults[i].style.height = "auto";
    }
    console.log(imgResults[i]);
  
    imgResults[i].style.top = count % 3 * 200 + "px";
    imgResults[i].style.left = Math.floor(count / 3) * width / 6 + "px";
    count++;
    } else if (senseType == senseSelect && colorSelect=="colors" && docSelect=="document") {
      imgResults[i].style.display = "block";
      imgResults[i].style.position = "absolute";
      if (imgResults[i].style.height > "200px") {
        imgResults[i].style.height = "200px";
        imgResults[i].style.width = "auto";
      } else {
        imgResults[i].style.width = "200px";
        imgResults[i].style.height = "auto";
      }
      console.log(imgResults[i]);
    
      imgResults[i].style.top = count % 3 * 200 + "px";
      imgResults[i].style.left = Math.floor(count / 3) * width / 6 + "px";
      count++; 

    } else if (sameFilters) {
      imgResults[i].style.display = "block";
      imgResults[i].style.position = "absolute";
      if (imgResults[i].style.height > "200px") {
        imgResults[i].style.height = "200px";
        imgResults[i].style.width = "auto";
      } else {
        imgResults[i].style.width = "200px";
        imgResults[i].style.height = "auto";
      }
      console.log(imgResults[i]);
    
      imgResults[i].style.top = count % 3 * 200 + "px";
      imgResults[i].style.left = Math.floor(count / 3) * width / 6 + "px";
      count++;
    } else {
      imgResults[i].style.display = "none";
    }
  }
}



// let imgResults = document.getElementsByClassName("result");
// let colorsList = document.getElementById("colorList");
// let docList = document.getElementById("documentList");
// let senseList = document.getElementById("senseList");
// let selected = document.getElementsByClassName("selected");
// let container = document.getElementById("container");
// let height = window.innerHeight
// let width = window.innerWidth;

// function submit() {
//   let colorSelect = colorList.options[colorList.selectedIndex].value;  
//   let docSelect = documentList.options[documentList.selectedIndex].value;  
//   let senseSelect = senseList.options[senseList.selectedIndex].value;  
//   console.log(colorSelect, docSelect, senseSelect);
//   document.getElementById("container").className = "container";

//   for (let i = 0; i < imgResults.length; i++) {
//     let colorType = imgResults[i].getAttribute("data-color");
//     let docType = imgResults[i].getAttribute("data-doc");
//     let senseType = imgResults[i].getAttribute("data-sense"); 

//     // Check if any filter is selected
//     let filterApplied = (colorSelect !== "none") || (docSelect !== "none") || (senseSelect !== "none");

//     if (!filterApplied || (colorSelect !== "none" && colorType == colorSelect) ||
//         (docSelect !== "none" && docType == docSelect) || (senseSelect !== "none" && senseType == senseSelect)) {
//       imgResults[i].style.display = "block";
//       imgResults[i].style.position = "absolute";
//       if (i%3 == 0) {
//         imgResults[i].style.top = 0 + "px";
//         imgResults[i].style.left = i * Math.random() * 10 + "px";
//       } else if (i%3 == 1) {
//         imgResults[i].style.top = 250 + "px";
//         imgResults[i].style.left = i * Math.random() * (45 - 20) + "px";
//       } else {
//         imgResults[i].style.top = 500 + "px";
//         imgResults[i].style.left = i * Math.random() * (90-50) + "px";
//       }
//     } else {
//       imgResults[i].style.display = "none";
//     }
//   }
// }