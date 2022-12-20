/*  This file handles the hamburger menu on mobile view.
    Saskó Máté
*/

function menuHandler(){
    let el = document.getElementById("navResp");
    if (el.classList.contains("activateMenu")) {
        el.classList.remove("activateMenu");
    }
    else{
        el.classList.add("activateMenu");
    }
}