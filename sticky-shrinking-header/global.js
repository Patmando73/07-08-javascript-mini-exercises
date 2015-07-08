function small_header() {
  document.getElementById("header").style.height = "100px";
  document.getElementById("cool2").style.visibility = "visible";
    document.getElementById("cool").style.visibility = "hidden";
}

function large_header() {
  document.getElementById("header").style.height = "150px";
  document.getElementById("cool").style.visibility = "visible";
    document.getElementById("cool2").style.visibility = "hidden";
}

window.onscroll = change_header;

function change_header() {
  if (window.scrollY > 350) {
    small_header();
  } else {
    large_header();
  }
}