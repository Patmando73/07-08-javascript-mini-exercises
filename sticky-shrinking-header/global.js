function small_header() {
  document.getElementById("header").style.height = "100px";
  document.getElementById("cool").id = "cool2";
  document.getElementById("cool2").src ="http://bestinspired.com/wp-content/uploads/2015/05/cool-wallpapers-hd-.jpg";
}

function large_header() {
  document.getElementById("header").style.height = "150px";
  document.getElementById("cool2").id = "cool";
  document.getElementById("cool").src ="http://www.iwantcovers.com/wp-content/uploads/2012/03/Cool.jpg";
}

window.onscroll = change_header;

function change_header() {
  if (window.scrollY > 350) {
    small_header();
  } else {
    large_header();
  }
}