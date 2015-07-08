/**
 * Created by Patrick Carlton & Lars Hollingsed on 7/8/15.
 */


function show_popup() {
    document.getElementById("popup_container").style.visibility = "visible";

}

function hide_popup() {
    document.getElementById("popup_container").style.visibility = "hidden";
}


document.getElementById("sign_in_button").onclick = show_popup;
document.getElementById("close_x").onclick = hide_popup;