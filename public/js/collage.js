/*  This file handles the collage menu.
    Saskó Máté
*/

/* Default settings */
document.getElementById("collage-photo-1").style.opacity = "1";
document.getElementsByClassName("showform-button")[0].children[1].style.display ="none";
document.getElementsByClassName("showform-button")[0].children[2].style.display ="none";

/* Function that handles the background change of the collage
   Gets the  ordinal number of element, and the element itself as parameters */

   function changeBackground(n,el) {
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName("collage-third")[i].children[0].classList.remove('selected');
    }
    el.children[0].classList.add("selected");
    const imgs = document.getElementById('collage').children;
   if(n === 1)
   {
    imgs[0].style.opacity = "1";
    imgs[1].style.opacity = "0";
    imgs[2].style.opacity = "0";
   }
   else if(n === 2){
    imgs[0].style.opacity = "0";
    imgs[1].style.opacity = "1";
    imgs[2].style.opacity = "0";
   } else if(n === 3){
    imgs[0].style.opacity = "0";
    imgs[1].style.opacity = "0";
    imgs[2].style.opacity = "1";
   }
 }

 /* Function for hover effect, when mouse leave collage */
 function out(el){
    el.children[0].classList.remove('selected');
 }