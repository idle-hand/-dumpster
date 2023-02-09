const provinces = [
  { name: "Alberta", capital: "Edmonton" },
  { name: "British Columbia", capital: "Victoria" },
  { name: "Manitoba", capital: "Winnipeg" },
  { name: "New Brunswick", capital: "Fredericton" },
  { name: "Newfoundland and Labrador", capital: "St. John's" }
];

let score = 0;
const scoreDisplay = document.getElementById("score");
scoreDisplay.innerHTML = `Score: ${score} / ${provinces.length}`;

const quizContainer = document.getElementById("quiz");
const nextQuestionBtn = document.getElementById("next-question-btn");
let currentQuestion = 0;

const renderQuestion = () => {
  let container = document.createElement("div");
  container.classList.add("question-container");
  let label = document.createElement("label");
  label.innerHTML = `What is the capital of ${provinces[currentQuestion].name}?`;
  container.appendChild(label);
  container.appendChild(document.createElement("br"));

  let capital = provinces[currentQuestion].capital;
  let otherCapitals = provinces
    .filter(province => province.capital !== capital)
    .map(province => province.capital)
    .slice(0, 2);
  let options = [capital, ...otherCapitals];

  let inputs = options.map((value, i) => {
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", value);
    let text = document.createTextNode(value);
    container.appendChild(input);
    container.appendChild(text);
    container.appendChild(document.createElement("br"));
    return input;
