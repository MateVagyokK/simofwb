const { type } = require("express/lib/response");

/*  Function that handles the click on "show all" button under builds. 
    Gets the data from database(JSON) and prints the container of builds.*/
function loadAll(data){
    data = JSON.parse(data);
    let el = document.getElementById('allBuilds');
    let rowCount = Math.floor(data.length / 4);
    let text = "";
    for (let i = 0; i < rowCount; i++) {
text+=`<div class="builds">`+createCards(data,i)+`</div>`;
    }
    el.innerHTML=text;
}

/*  Function that creates the HTML div of a card.
    Gets data(object, data from database), rowNum(number of rows to display) as parameters */
function createCards(data, rowNum) {
    let text="";
    for (let i = 0; i < 4; i++) {
        text+=`<div class="col-md-3 col-sm-6 cardHolder">
        <div class="buildCard" onclick="showCard(this)">
          <div class="cardHeader">
            <h2>`+data[rowNum*4+i].name+`</h2>
            </div>
  
            <div class="cardImage">
              <img src="`+data[rowNum*4+i].pics[0]+`" alt="" />
              </div>
              <p class="cardDesc">`+data[rowNum*4+i].description+`</p>
              </div>
            </div>`;
        
    }
    return text;
}

/*  Function that edits the "show more" button's look under builds */
function buildButtonHandler()
{  
    if (document.getElementsByClassName("builds")[1].classList.contains('activateBuild')) 
    {
        for (let index = 1; index < document.getElementsByClassName("builds").length; index++) {
            document.getElementsByClassName("builds")[index].classList.remove("activateBuild");
        }
        document.getElementById("loadmoreButton").innerHTML=`<span>zeige mehr</span>`;
    }
    else{
        for (let index = 1; index < document.getElementsByClassName("builds").length; index++) {
            document.getElementsByClassName("builds")[index].classList.add("activateBuild");
        }
        document.getElementById("loadmoreButton").innerHTML=`<span>zeige weniger</span>`;
    }
}


