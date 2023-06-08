const start_button = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const restart_button = document.querySelector(".buttons .restart");
const comeback_button = document.querySelector(".buttons .quit");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = document.querySelector(".timer .timer_min");



start_button.onclick = () =>{
    info_box.classList.add("activeInfo"); 
}

comeback_button.onclick = ()  =>{
    window.location.href = "../pages/index.html";
}



restart_button.onclick = () =>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuestions(0);
    QuestionCounter(1);
    startTime(3600);
}

let selected_questions = 0;
let questions_counter = 0;
let question_number = 1;
let counter;
let user_score = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

quit_quiz.onclick = () =>{
    window.location.href = "../pages/index.html";
}

restart_quiz.onclick = () =>{
    window.location.reload();
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  let numbers = [
    2,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49
    ];
let questions_to_show = 20;
shuffle(numbers);

console.log(numbers);

next_btn.onclick = () =>{
    if(questions_counter < questions_to_show - 1){
        questions_counter++;
        question_number++;
        selected_questions = numbers[questions_counter];
        console.log(selected_questions);
        showQuestions(selected_questions);
        QuestionCounter(question_number);
        next_btn.style.display = "none";
    } else{
        console.log("Questions completed!");
        showTotalBox();
    }
}


function showQuestions(index){
    const question_text = document.querySelector(".que_text");
    let question_tag = '<span>'+questions[index].numb+'. '+ questions[index].question +'</span>';
    let option_tag = '<div class = "option">'+questions[index].options[0]+'<span></span></div>'
                    +'<div class = "option">'+questions[index].options[1]+'<span></span></div>'
                    +'<div class = "option">'+questions[index].options[2]+'<span></span></div>'
                    +'<div class = "option">'+questions[index].options[3]+'<span></span></div>';
    question_text.innerHTML = question_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let TickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let CrossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>';


//seleccion de pregunta
function optionSelected(answer){
    let user_answer = answer.textContent;
    let correct_answer = questions[selected_questions].answer;
    let AllOptions = option_list.children.length;
    if(user_answer == correct_answer){
        user_score+=1;
        console.log(user_score);
        answer.classList.add("correct");
        console.log("Correct Answer");
        answer.insertAdjacentHTML("beforeend", TickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("Incorrect Answer");
        answer.insertAdjacentHTML("beforeend", CrossIcon);


        //si la respuesta es incorrecta automaticamente selecciona la correcta
        for(let i = 0; i < AllOptions; i++){
            if(option_list.children[i].textContent == correct_answer){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", TickIcon);
            }
        }
    }

    //desahabilitar opciones cuando el usuario haya ingresado una
    for(let i = 0; i < AllOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

function showTotalBox(){
    info_box.classList.remove("activeInfo"); //ocultar el info box
    quiz_box.classList.remove("activeQuiz"); //ocultar el desafío
    result_box.classList.add("activeResult"); //mostrar la ventana de resultados
    const ScoreText = result_box.querySelector(".score_text");



    if(user_score >= 0 && user_score <= 14){
        let scoreTag = "<span><p>\n Lo sentimos, solo tuviste <b>"+user_score+"</b> de <b>"+questions_to_show+"</b> \nTu calificación <b>NO</b> es aprobatoria. Debes reintentar.</p></span>";
        ScoreText.innerHTML = scoreTag;
    }

    if(user_score >= 15 && user_score <= 20){
        
        
        let scoreTag = "<span><p>\n Obtuviste <b>"+user_score+"</b> de <b>"+questions_to_show+"</b> \nTu calificación <b>SI</b> es aprobatoria. Puedes continuar con el siguiente nivel.</p></span>";
        ScoreText.innerHTML = scoreTag;
    }

}

function startTime(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 999){
            let addZeros = timeCount.textContent; timeCount.textContent = "0" + addZeros;
        }
        if(time < 99){
            let addZeros = timeCount.textContent; timeCount.textContent = "0" + addZeros;
        }
        if(time < 9){
            let addZeros = timeCount.textContent; timeCount.textContent = "0" + addZeros;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "0000"; info_box.classList.remove("activeInfo");  quiz_box.classList.remove("activeQuiz"); result_box.classList.add("activeResult"); 
            showTotalBox();
        }
    }
}

//cuenta de las preguntas
function QuestionCounter(index){
    const total_questions = questions.length - 30;
    const bottom_questions_counter = quiz_box.querySelector(".total_que");
    let total_questions_counter_tag = '<span><p>'+ index +'</p>de<p>'+ total_questions +'</p>Preguntas</span>';
    bottom_questions_counter.innerHTML = total_questions_counter_tag;
}