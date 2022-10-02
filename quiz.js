var question=document.querySelector("#question");
var opt1=document.querySelector("#op1");
var opt2=document.querySelector("#op2");
var opt3=document.querySelector("#op3");
var opt4=document.querySelector("#op4");
var score=document.querySelector("#score");
var next=document.querySelector("#next");
var submit=document.querySelector("#submit");
var container=document.querySelector(".container");
var subcont=document.querySelector(".subcont");
var namee=document.querySelector("#name");
var username=document.querySelector("#user");
//quiz data
const aptquiz=[{
    questiondata:"It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
    a:"Sunday",
    b:"Saturday",
    c:"Friday",
    d:"Wednesday",
    correct:"c",
},
{
    questiondata:"What is the average of first five multiples of 12?",
    a:"36",
    b:"38",
    c:"40",
    d:"42",
    correct:"a",
},
{
    questiondata:"Today it is Thursday.After 132 days,it will be?",
    a:"Monday",
    b:"Sunday",
    c:"Wednesday",
    d:"Thursday",
    correct:"c",
},
{
    questiondata:"What is the average of first five multiples of 12?",
    a:"36",
    b:"38",
    c:"40",
    d:"42",
    correct:"a",
},
{
    questiondata:"It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
    a:"Sunday",
    b:"Saturday",
    c:"Friday",
    d:"Wednesday",
    correct:"c",
},]
let quesno=0;
//-------------------------------------------------------------
var namebox=document.querySelector(".nam");
var enter=document.querySelector("#enter");
enter.addEventListener("click",()=>{
    namebox.style.display="none";
    container.style.display="block";

});
//--------------------------------------------------------------
function progress(){
    document.querySelector(".pr1").style.width = ((quesno+1)*20)+"%";
}

//----------------------------------------------------------------------------------------------------------


let correct=0;
let incorrect=0;
let allInputs = document.querySelectorAll("input[type='radio']")
function load(){

    
question.innerHTML=aptquiz[quesno].questiondata;
    allInputs[0].nextElementSibling.innerText = aptquiz[quesno].a
    allInputs[1].nextElementSibling.innerText = aptquiz[quesno].b
    allInputs[2].nextElementSibling.innerText = aptquiz[quesno].c
    allInputs[3].nextElementSibling.innerText = aptquiz[quesno].d
    
    

}

//-----------------------------------------------------------------------------------------------------

next.addEventListener("click",() => {
    
    const data = aptquiz[quesno];
    console.log(data.correct);
     const ans = getAnswer()
     if (data.correct === ans) {
           
           
         correct++;
     } else {
           
         incorrect++;
     }
      quesno++;
      if(quesno === aptquiz.length){
        subcont.style.display="block";
        container.style.display='none';
        submit.style.display='block';
      }
       else{
        reset();
        load();
        progress();
       }
    
})
//---------------------------------------------------------------------------------------------------------

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    console.log(ans)
    return ans;

    }
//------------------------------------------------------------------------------------------------

submit.addEventListener("click",() => {
    
    score.style.display="block";
    username.innerHTML=`${namee.value}, you got `
    score.innerHTML=` Correct: ${correct}<br/> Incorrect: ${incorrect}`
    submit.style.display='none';
});

//reset---------------------------------------------------------------------------
    const reset = () => {
        allInputs.forEach(
            (inputEl) => {
                inputEl.checked = false;
            }
        )
        }

load(quesno);
