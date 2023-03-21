
class Logic{
    
/* This object put questions and choices in the associated HTML containers */
    getquestion(index,questions_arr){

        /*This function take an array as an input argument and return shuffled array*/
        function doShuffle(array) {
            for (var i = array.length - 1; i > 0; i--) {
               var j = Math.floor(Math.random() * (i + 1));
               var temp = array[i];
               array[i] = array[j];
               array[j] = temp;
            }
            return array;
         }
        
        
        let quizquestion = document.getElementById("question");
        let ch1 = document.getElementById("ch1");
        let ch2 = document.getElementById("ch2");
        let ch3 = document.getElementById("ch3");
        let ch4 = document.getElementById("ch4");
        let type = questions_arr[index].type;
        let ch3div = document.getElementById("ch3div");
        let ch4div = document.getElementById("ch4div");

        
        quizquestion.innerText= questions_arr[index].question;
        if(type=="boolean"){
            
            ch3div.style.display= "none";
            ch4div.style.display= "none";
            let arr2=[ch1,ch2];
            doShuffle(arr2);
            arr2[0].innerText= questions_arr[index].correct_answer;
            arr2[1].innerText= questions_arr[index].incorrect_answers[0];
            

        }else{
            ch3div.style.display= "flex";
            ch4div.style.display= "flex";    
        let arr=[ch1,ch2,ch3,ch4];
        doShuffle(arr);
        

        arr[0].innerText= questions_arr[index].correct_answer;
        arr[1].innerText= questions_arr[index].incorrect_answers[0];
        arr[2].innerText= questions_arr[index].incorrect_answers[1];
        arr[3].innerText= questions_arr[index].incorrect_answers[2];
        }
        
    };
/* This object to two arguments choosen(selected answer) and answer(correct ans string) and check whether both of them 
are equal or not , if equal retun "true(boolean) else return "false(boolean)"*/
    checkans(choosen,answer){
        console.log("in check ans");
        let res;
        if(choosen.innerText===answer){
            console.log(choosen.innerText);
            res=true;
            
        }else{
            res=false;
            
        };
        console.log(res);
        return res;
        
          
    };
/*This onject updates question index and score in the navigator div */
    navigation(ques_counter,score_text,score,index,max_count){
        let counter=index+1;
        
        
        ques_counter.innerText =`Question ${counter}/${max_count}`;
        score_text.innerText = `Score ${score}`;
        console.log(ques_counter.innerText)
    }


}
let count=0;
let max_count=10;
let logic = new Logic;
let index= 0;
let ch1 = document.getElementById("ch1");
let ch2 = document.getElementById("ch2");
let ch3 = document.getElementById("ch3");
let ch4 = document.getElementById("ch4");
let correct_answer;
let score=0;
let correct= false;
let questions_arr=[];
let ques_counter = document.getElementById("ques_counter");
let score_text = document.getElementById("score_text");
const selectedURL = sessionStorage.getItem("url");


fetch(selectedURL)
        .then((response)=>response.json())
        .then(data =>{
            questions_arr= data.results;
            console.log(questions_arr);
            logic.navigation(ques_counter,score_text,score,index,max_count); 
            logic.getquestion(index,questions_arr);
            
             
        })



  
    console.log(questions_arr);
    /* Events*/
        
        ch1.addEventListener("click",()=>{
            let answer= questions_arr[index].correct_answer;
            console.log(answer);

            correct=logic.checkans(ch1,answer);
            if(correct===true){
                score++;
                console.log("in if statement");
            }else{
                console.log("inelse");
            }
            index++;
            
            console.log(score);
            
            
            
                if(index<max_count){
                    logic.navigation(ques_counter,score_text,score,index,max_count);
                    logic.getquestion(index,questions_arr);
                    }else{
                        localStorage.setItem("finalscore",score);
                        location="result.html"
                    }
            
            
        });

        ch2.addEventListener("click",()=>{
            let answer= questions_arr[index].correct_answer;
            console.log(answer);
            correct=logic.checkans(ch2,answer);
            if(correct===true){
                score++;
                console.log("in if statement");
            }else{
                console.log("inelse");
            }
            index++;
            
            console.log(score);
            
            
                if(index<max_count){
                    logic.navigation(ques_counter,score_text,score,index,max_count);
                    logic.getquestion(index,questions_arr);
                    }else{
                        localStorage.setItem("finalscore",score);
                        
                        location="result.html"
                    }
            
        });

        ch3.addEventListener("click",()=>{
            let answer=questions_arr[index].correct_answer;
            console.log(answer);
            correct=logic.checkans(ch3,answer);
            if(correct===true){
                score++;
                console.log("in if statement");
            }else{
                console.log("inelse");
            }
            index++;
            
            console.log(score);
            
            
                if(index<max_count){
                    logic.navigation(ques_counter,score_text,score,index,max_count);
                    logic.getquestion(index,questions_arr);
                    }else{
                        localStorage.setItem("finalscore",score);
                        
                        location="result.html"
                    }
           

        });

        ch4.addEventListener("click",()=>{
            let answer=questions_arr[index].correct_answer;
            console.log(answer);
            correct=logic.checkans(ch4,correct_answer);
            if(correct===true){
                score++;
                console.log("in if statement");
            }else{
                console.log("inelse");
            }
            index++;
            
            console.log(score);
            
            
                if(index<max_count){
                    logic.navigation(ques_counter,score_text,score,index,max_count);
                    logic.getquestion(index,questions_arr);
                    
                    }else{
                        localStorage.setItem("finalscore",score);
                        location="result.html"
                    }
            
        });
    
    
        
        
        
    
        


    
    

