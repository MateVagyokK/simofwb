/*  This file handles the cards on the middle of the screen.
    Saskó Máté
*/

/* Gets an element as a parameter and shows it on the middle of the screen as a big card. */
function showCard(el){
  let card = document.getElementById("bigCard");
  if (card.classList.contains("disappear")) {
      document.getElementById("bigCard").classList.remove("disappear");
  }
  card.getElementsByClassName("bigBuildHeader")[0].innerHTML=el.getElementsByClassName("cardHeader")[0].children[0].innerHTML;
  card.getElementsByClassName("bigBuildDesc")[0].innerHTML=el.getElementsByClassName("cardDesc")[0].innerHTML;
  const original = el.getElementsByClassName("cardImage")[0].children[0];
  console.log(original.getAttribute('src'));
  let imgSrc =original.getAttribute('src');
  card.getElementsByClassName("bigBuildImageCont")[0].style.backgroundImage = `url(`+imgSrc+`)`; 
}

/* Makes the big main card disappear. */
function exitHandler(){
  if (!document.getElementById("bigCard").classList.contains("disappear")) {
      document.getElementById("bigCard").classList.add("disappear");
  }
}