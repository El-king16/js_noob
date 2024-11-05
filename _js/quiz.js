let questions = ["Сколько дней в неделе?", "Самая большая планета в Сол. сист?", "Самый популярный тип клавиатуры", "Сколько пальцев на одной руке?", "очки или линзы?", "2+2*2?", "Три топора?", "Популярный разъем для телефонов на 2024?", "Москва или Питер?", "Где я?"];
let answer = ["7", "Юпитер", "qwerty", "5", "хз", "6", "777", "type c", "Питер", "Ижорский колледж"];
let answer2 = ["семь", "юпитер", "йцукен", "пять", "не знаю", "шесть", "казино", "тайп с", "спб", "кто"];

function startQuiz() {
  let correctAnswers = 0;
  
  for (let index = 0; index < questions.length; index++) {
    const element = questions[index];
      const userAnswer = prompt(questions[index]).toLowerCase();
    if (userAnswer === answer[index] || userAnswer === answer2[index]) {
      correctAnswers++;
    } 
  }
  alert(correctAnswers);
  
}  
startQuiz();