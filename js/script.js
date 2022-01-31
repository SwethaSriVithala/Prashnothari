const start_btn = document.querySelector(".start_btn button");
const rules_btn = document.querySelector(".rules_btn button");

const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const level_box = document.querySelector(".level_box");

const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const level_btn01 = level_box.querySelector(".buttons .level01");
const level_btn02 = level_box.querySelector(".buttons .level02");
const level_btn03 = level_box.querySelector(".buttons .level03");
const level_btn04 = level_box.querySelector(".buttons .level04");
const level_btn05 = level_box.querySelector(".buttons .level05");
const level_btn06 = level_box.querySelector(".buttons .level06");
const level_btn07 = level_box.querySelector(".buttons .level07");
const level_btn08 = level_box.querySelector(".buttons .level08");
const level_btn09 = level_box.querySelector(".buttons .level09");
const level_btn10 = level_box.querySelector(".buttons .level10");
const level_btn11 = level_box.querySelector(".buttons .level11");
const level_btn12 = level_box.querySelector(".buttons .level12");
const level_btn13 = level_box.querySelector(".buttons .level13");
const level_btn14 = level_box.querySelector(".buttons .level14");
const level_btn15 = level_box.querySelector(".buttons .level15");
const level_btn16 = level_box.querySelector(".buttons .level16");
const level_btn17 = level_box.querySelector(".buttons .level17");
const level_btn18 = level_box.querySelector(".buttons .level18");
const level_btn19 = level_box.querySelector(".buttons .level19");
const level_btn20 = level_box.querySelector(".buttons .level20");

const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

rules_btn.onclick = () => {
	info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); 
}

start_btn.onclick = () => {
   level_box.classList.add("activeLevelbox");
}

 /* for(i=0; i < level_btn.length; i++){
     level_btn[i].setAttribute("onclick", function());
 } */

level_btn01.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn01.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn02.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn03.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn04.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn05.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn06.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn07.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn08.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn09.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn10.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn11.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn12.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn13.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn14.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn15.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn16.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn17.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn18.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn19.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}
level_btn20.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    level_box.classList.remove("activeLevelbox");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuestions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}

function newFunction() {
    return ".level_box";
}

function showQuestions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
   
	if(userScore == 5){
		let scoreTag = '<span>Congratulations!! Level complete</span>';
		scoreText.innerHTML = scoreTag;
	}
	else if(userScore >= 2){
		let scoreTag = '<span>Nice, But you got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
		scoreText.innerHTML = scoreTag;
	}
	else{
		let scoreTag = '<span>Sorry, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
		scoreText.innerHTML = scoreTag;
	}
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show"); 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}
