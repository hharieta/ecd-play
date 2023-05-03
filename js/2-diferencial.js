//obteniendo todos los elementos requeridos
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const restart_btn = document.querySelector(".buttons .restart");
const quit_btn = document.querySelector(".buttons .quit");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = document.querySelector(".timer .timer_min");

//si hace click en el boton de inicio
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo"); //mostrar el info box
}

quit_btn.onclick = ()  =>{
    window.location.href = "../pages/index.html";
}

//si hace click en el boton de continuar
restart_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); //ocultar el info box
    quiz_box.classList.add("activeQuiz"); //mostrar el desafío
    showQuestions(0);
    QueCounter(1);
    startTime(3600);
}

let que_cont = 0;
let que_numb = 1;
let counter;
let userScore = 0;

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
    0,1,2,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49
    ];
let questions_to_show = 20;
shuffle(numbers);

console.log(numbers);

next_btn.onclick = () =>{
    if(que_cont < questions_to_show - 1){
        que_cont++;
        que_numb++;
        var index = numbers[que_cont];
        console.log(index);
        showQuestions(index);
        QueCounter(que_numb);
        next_btn.style.display = "none";
    } else{
        console.log("Questions completed!");
        showResultBox();
    }
}

//obteniendo preguntas y opciones del array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+questions[index].numb+'. '+ questions[index].question +'</span>';
    let option_tag = '<div class = "option">'+questions[index].options[0]+'<span></span></div>'
                    +'<div class = "option">'+questions[index].options[1]+'<span></span></div>'
                    +'<div class = "option">'+questions[index].options[2]+'<span></span></div>'
                    +'<div class = "option">'+questions[index].options[3]+'<span></span></div>';
    que_text.innerHTML = que_tag;
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
    let userAns = answer.textContent;
    let correctAns = questions[que_cont].answer;
    let AllOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore+=1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Correct Answer");
        answer.insertAdjacentHTML("beforeend", TickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("Incorrect Answer");
        answer.insertAdjacentHTML("beforeend", CrossIcon);


        //si la respuesta es incorrecta automaticamente selecciona la correcta
        for(let i = 0; i < AllOptions; i++){
            if(option_list.children[i].textContent == correctAns){
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

function showResultBox(){
    info_box.classList.remove("activeInfo"); //ocultar el info box
    quiz_box.classList.remove("activeQuiz"); //ocultar el desafío
    result_box.classList.add("activeResult"); //mostrar la ventana de resultados
    const ScoreText = result_box.querySelector(".score_text");
    
    if(userScore >= 0 && userScore <= 34){
        let scoreTag = "<span><p>\n Lo sentimos, solo tuviste <b>"+userScore+"</b> de <b>"+questions_to_show+"</b> \nTu calificación <b>NO</b> es aprobatoria. Debes reintentar.</p></span>";
        ScoreText.innerHTML = scoreTag;
    }

    if(userScore >= 35 && userScore <= 50){
        
        
        let scoreTag = "<span><p>\n Obtuviste <b>"+userScore+"</b> de <b>"+questions_to_show+"</b> \nTu calificación <b>SI</b> es aprobatoria. Puedes continuar con el siguiente nivel.</p></span>";
        ScoreText.innerHTML = scoreTag;
    }
}

function startTime(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 999){
            let addZeros = timeCount.textContent;
            timeCount.textContent = "0" + addZeros;
        }
        if(time < 99){
            let addZeros = timeCount.textContent;
            timeCount.textContent = "0" + addZeros;
        }
        if(time < 9){
            let addZeros = timeCount.textContent;
            timeCount.textContent = "0" + addZeros;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "000";
            info_box.classList.remove("activeInfo"); //ocultar el info box
            quiz_box.classList.remove("activeQuiz"); //ocultar el desafío
            result_box.classList.add("activeResult"); //mostrar la ventana de resultados
            showResultBox();
        }
    }
}

//cuenta de las preguntas
function QueCounter(index){
    const total_questions = questions.length - 30;
    const bottom_ques_conter = quiz_box.querySelector(".total_que");
    let totalQueCountTag = '<span><p>'+ index +'</p>de<p>'+ total_questions +'</p>Preguntas</span>';
    bottom_ques_conter.innerHTML = totalQueCountTag;
}