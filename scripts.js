let vid = document.getElementById("myVideo");

vid.onended = function() {
  vid.style.animationName = "disappear"
};