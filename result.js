
window.addEventListener("DOMContentLoaded",()=>{

  let showscore = document.querySelector(".showscore");

/* Get scores from the local storage and put in variable*/
  let finalscore = localStorage.getItem("finalscore");
  console.log(finalscore);

/* Putting scores in the HTML container*/
  showscore.innerHTML=finalscore;

  let homebtn= document.querySelector("#btn2");
  let play_again = document.getElementById("btn1");

/* Events for "Play Again" and "Home" buttons*/
  homebtn.addEventListener("click",()=>{
    location = "page_1.html";
  });

  play_again.addEventListener("click",()=>{
    location = "subject.html";
  });

})












    


