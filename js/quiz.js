/*Dharmikkumar Khambhadiya - 8884486*/

const questions = [
	{
		question:
			"Question 1: The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
		options: ["A horse", "A lion", "A tiger"],
		answer: "A horse",
	},
	{
		question:
			"Question 2: In The Lion King, Mufasa dies from being trampled by a pack of:",
		options: ["sheep", "Wildebeests", "goats"],
		answer: "Wildebeests",
	},
	{
		question:
			"Question 3: In Inception, how many dream levels does the crew enter?",
		options: ["Five", "Four", "Three"],
		answer: "Five",
	},
	{
		question:
			"Question 4: What movie starred julia roberts as a prostitute named vivian ward?",
		options: [
			"Something to Talk About",
			"Pretty Woman",
			"Sleeping With the Enemy",
		],
		answer: "Pretty Woman",
	},
	{
		question: "Question 5: Where were The Lord of the Rings movies filmed?",
		options: ["Ireland", "Iceland", "New Zealand"],
		answer: "New Zealand",
	},
	{
		question: "Question 6: Who directed the movie Seven Samurai?",
		options: ["Francis Ford Coppola", "Akira Kurosawa", "Tatsuya Nakadai"],
		answer: "Akira Kurosawa",
	},
	{
		question: "Question 7: Who actually drew the sketch of Rose in Titanic?",
		options: [" Leonardo DiCaprio", "Billy Zane", "James Cameron"],
		answer: "James Cameron",
	},
	{
		question: "Question 8:Which famous Pulp Fiction scene was filmed backward?",
		options: [
			" Vincent and Mia’s dance scene",
			"Mia’s overdose scene",
			"The “royale with cheese” scene",
		],
		answer: "Mia’s overdose scene",
	},

	// Add more questions here
];

let currentQuestion = 0;
let Score = 0;

const start = document.getElementById("start");
const quizContainer = document.getElementById("quizContainer");
const QAElement = document.getElementById("question");
const nextBtn = document.getElementById("nextButton");
const currentScoreElement = document.getElementById("currentScore");
const submitScoreBtn = document.getElementById("submitScore");
const scoreTable = document.getElementById("scoreTable");
const Listofscore = document.getElementById("Listofscore");

start.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestionOption);
submitScoreBtn.addEventListener("click", submitScore);

function startQuiz() {
	start.style.display = "none";
	quizContainer.style.display = "block";
	loadQuestion(currentQuestion);
}

function loadQuestion(index) {
	const question = questions[index];
	QAElement.innerHTML = `Question: ${question.question}<br>`;

	const optionsHTML = question.options
		.map(
			(option, i) =>
				`<label><input type="radio" name="answer" value="${option}"> ${option}</label><br>`
		)
		.join("");

	QAElement.innerHTML += optionsHTML;
}

function nextQuestionOption() {
	const selectedAnswer = document.querySelector('input[name="answer"]:checked');
	if (!selectedAnswer) return;

	if (selectedAnswer.value === questions[currentQuestion].answer) {
		Score++;
	}

	currentQuestion++;
	if (currentQuestion < questions.length) {
		loadQuestion(currentQuestion);
	} else {
		quizContainer.style.display = "none";
		ContainerOfscore.style.display = "block";
		currentScoreElement.textContent = Score;
	}
}

function submitScore() {
	const playerName = prompt("Enter your name:");
	if (!playerName) return;

	const highestScore = JSON.parse(sessionStorage.getItem("highestScore")) || [];
	highestScore.push({ name: playerName, score: Score });
	highestScore.sort((a, b) => b.score - a.score);
	if (highestScore.length > 5) {
		highestScore.pop();
	}
	sessionStorage.setItem("highestScore", JSON.stringify(highestScore));

	updateScoreTable();
	ContainerOfscore.style.display = "none";
	start.style.display = "block";
	currentQuestion = 0;
	Score = 0;
}

function updateScoreTable() {
	Listofscore.innerHTML = "";
	const highestScore = JSON.parse(sessionStorage.getItem("highestScore")) || [];
	highestScore.forEach((entry, index) => {
		const row = document.createElement("tr");
		row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${
			entry.score
		}</td>`;
		Listofscore.appendChild(row);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	updateScoreTable();
});
