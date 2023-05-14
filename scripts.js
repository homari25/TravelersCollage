let vid = document.getElementById("myVideo");

vid.onended = function() {
  vid.remove()
  };