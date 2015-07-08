/**
 * Created by Patrick Carlton & Lars Hollingsed on 7/8/15.
 */


function show_info1() {
    document.getElementById("tab1_info").style.visibility="visible";
    document.getElementById("tab2_info").style.visibility="hidden";
    document.getElementById("tab3_info").style.visibility="hidden";

}

function show_info2() {
    document.getElementById("tab2_info").style.visibility="visible";
    document.getElementById("tab3_info").style.visibility="hidden";
    document.getElementById("tab1_info").style.visibility="hidden";

}

function show_info3() {
    document.getElementById("tab3_info").style.visibility="visible";
    document.getElementById("tab2_info").style.visibility="hidden";
    document.getElementById("tab1_info").style.visibility="hidden";
}

show_info1();

document.getElementById("tab2_button").onclick = show_info2;

document.getElementById("tab3_button").onclick = show_info3;

document.getElementById("tab1_button").onclick = show_info1;