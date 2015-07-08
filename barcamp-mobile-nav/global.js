/**
 * Created by Patrick Carlton & Lars Hollingsed on 7/8/15.
 */

function showHiddenMenu() {
  document.getElementById("hidden_menu").style.top = "0px";
  document.getElementById("show_menu_button").style.visibility = "hidden";
  document.getElementById("hide_menu_button").style.visibility = "visible";
}

function hideHiddenMenu() {
  document.getElementById("hidden_menu").style.top = "-300px";
  document.getElementById("hide_menu_button").style.visibility = "hidden";
  document.getElementById("show_menu_button").style.visibility = "visible";
}


document.getElementById("show_menu_button").onclick = showHiddenMenu;
document.getElementById("hide_menu_button").onclick = hideHiddenMenu;