/* In this page user select one subject, when user click on the subject button an event fires and call seturl function.*/
let computer=document.getElementById("subject1");
let math=document.getElementById("subject2");
let gk=document.getElementById("subject3");
let url;
/*1- This function take value associated to each button as an input argument
  2- Then put api url in session storage with key "url" for selected subject.
  3- Then go to quiz page*/
function seturl(x){
    if(x==1){
        sessionStorage.setItem("url","https://opentdb.com/api.php?amount=10&category=18&difficulty=easy");
    };
    if(x==2){
        sessionStorage.setItem("url","https://opentdb.com/api.php?amount=10&category=19&difficulty=easy");
    };
    if(x==3){
        sessionStorage.setItem("url","https://opentdb.com/api.php?amount=10&category=9&difficulty=easy");
    };

    location="quiz.html";
}
/*Events*/
computer.addEventListener("click",()=>{
    seturl(computer.value);
});

math.addEventListener("click",()=>{
   seturl(math.value);
});

gk.addEventListener("click",()=>{
   seturl(gk.value);
});
