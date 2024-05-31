console.log("=========================================== MESSAGE ============================================================")
console.log("Please don't cheat before doing a first attempt. I'm still trying to make this app more 'secure'. Thanks! -Felix")
console.log("================================================================================================================")
// Define the endpoint URL
const endpoint = 'https://us-central1-weconnect-quiz.cloudfunctions.net/get-questions';
var names;
// This array contains the mapping of question-answer-name for all
// non-empty answers. No cheating, please!
var answers;
var quizLength;
var MAX_QUIZ_LENGTH = 20;

// Function to get random items from an array
function getRandomItems(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Taken from https://stackoverflow.com/a/2450976/5565172
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

// Fetch data from the endpoint
fetch(endpoint)
  .then(response => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then(data => {
    // The data is now available in the 'data' variable as a JavaScript object

    // Create question bank from JSON
    name_q = "What is your full name?"
    names = data[name_q]
    answers = []

    // We want to create a question bank for use with the quiz.
    Object.keys(data).forEach(key => {
      if (key == name_q || key == "Timestamp") {
        // We want to loop over all questions to know which ones are not
        // left empty. We also want to map the non-empty questions to the
        // person who gave that answer. However, we don't want to consider
        // "What is your full name?" as a quiz question, this is just a
        // question we use to map a user to their answer
        return
      }

      // For each non-empty answer to a question, store it in our
      // question-answer bank.
      const question = data[key]
      Object.keys(question).forEach(id => {
        if (question[id] !== null) {
          answer = {
            user_answer: data[key][id],
            question: key,
            correct: names[id],
            // The multiple choices answer will be:
            // - the correct answer (names[id])
            // - two other names from `names`, after filtering  for
            //   unique values.
            choices: [names[id]].concat(getRandomItems(Array.from(new Set(Object.values(names))).filter(name => name !== names[id]), 2)).sort()
          }
          answers.push(answer)
        }
      })
    })
    shuffle(answers)
    quizLength = Math.min(answers.length, MAX_QUIZ_LENGTH);
    document.getElementById("loading").style.display = "none";
    quizContainer.style.display = "block";
    // Load the first question
    loadQuestion();
  })


  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });

let currentQuestionIndex = 0;
let correctAnswers = 0;
let selectedAnswer = null;

const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const progressContainer = document.getElementById('progress');
const questionContainer = document.getElementById('question-container');
const answerContainer = document.getElementById('answer-container');
const choicesContainer = document.getElementById('choices-container');
const nextButton = document.getElementById('next-button');
const continueButton = document.getElementById('continue-button');
const feedbackContainer = document.getElementById('feedback');

function loadQuestion() {
  feedbackContainer.classList = "";
  const currentQuestion = answers[currentQuestionIndex];
  feedbackContainer.textContent = "";
  progressContainer.textContent = "Question " + (currentQuestionIndex + 1).toString() + " / " + quizLength.toString();
  questionContainer.textContent = currentQuestion.question;
  answerContainer.textContent = currentQuestion.user_answer;
  nextButton.style.display = "block";
  continueButton.style.display = "none";
  nextButton.style.align = "center";
  choicesContainer.innerHTML = '';

  currentQuestion.choices.forEach(choice => {
    const choiceElement = document.createElement('div');
    choiceElement.textContent = choice;
    choiceElement.classList.add('choice');
    choiceElement.addEventListener('click', () => selectChoice(choiceElement, choice));
    choicesContainer.appendChild(choiceElement);
  });
}

function selectChoice(choiceElement, choice) {
  const choices = document.querySelectorAll('.choice');
  choices.forEach(c => c.classList.remove('selected'));
  choiceElement.classList.add('selected');
  selectedAnswer = choice;
}

function showNextQuestion() {
  if (!selectedAnswer) {
    alert('Please select an answer');
    return;
  }

  const currentQuestion = answers[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correct) {
    // Correct answer
    nextButton.style.display="none";
    correctAnswers++;
    feedbackContainer.textContent = 'Correct!';
    feedbackContainer.classList.add('correct');
    setTimeout(() => {
      currentQuestionIndex++;
      selectedAnswer = null;
      if (currentQuestionIndex < quizLength) {
        loadQuestion();
      } else {
        showResults();
      }
    }, 1000); // Move to next question after 1 second
  } else {
    // Incorrect answer
    feedbackContainer.textContent = 'Incorrect';
    feedbackContainer.classList.add('incorrect');

    // Highlight correct and incorrect choices
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choiceElement => {
      const choiceText = choiceElement.textContent;
      if (choiceText === currentQuestion.correct) {
        choiceElement.classList.add('correct');
      }
      if (choiceText === selectedAnswer) {
        choiceElement.classList.add('incorrect');
      }
    });

    continueButton.style.display = 'block';
    nextButton.style.display= 'none';
  }
}

function showResults() {
  quizContainer.style.display = 'none';
  resultsContainer.style.display = 'block';
  document.getElementById("score").textContent = correctAnswers + " / " + quizLength;
  document.getElementById("score_p").textContent = (correctAnswers / quizLength * 100).toFixed(0) + "%"
}

nextButton.addEventListener('click', showNextQuestion);
continueButton.addEventListener('click', () => {
  currentQuestionIndex++;
  selectedAnswer = null;
  if (currentQuestionIndex < quizLength) {
    loadQuestion();
    questionContainer.classList.remove('incorrect');
  } else {
    showResults();
  }
});

