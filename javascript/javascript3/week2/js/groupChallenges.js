document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const startQuizButton = document.getElementById("startQuiz");
    const quizContainer = document.getElementById("quizContainer");
    const questionContainer = document.getElementById("questionContainer");
    const submitQuizButton = document.getElementById("submitQuiz");
    let convertedData = [];

    startQuizButton.addEventListener("click", clicked);
    submitQuiz.addEventListener("click", handleAnswers);

    async function clicked() {
        try {
            const data = await fetch(
                "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
            );
            convertedData = await data.json();
            console.log(convertedData);

            quizContainer.classList.remove("hidden");
            submitQuizButton.classList.remove("hidden");

            convertedData.results.forEach((question) => {
                const h3 = document.createElement("h3");
                h3.innerText = question.question;

                questionContainer.appendChild(h3);

                const options = [
                    question.correct_answer,
                    ...question.incorrect_answers,
                ];
                console.log("Options: ", options);

                for (let option of options) {
                    const label = document.createElement("label");
                    label.textContent = option;
                    const input = document.createElement("input");
                    input.type = "radio";
                    input.name = "option";
                    questionContainer.appendChild(input);
                    questionContainer.appendChild(label);
                }

                // const input = document.createElement("input");
                // input.type = "radio";
                // input.textContent = option;
                // questionContainer.appendChild(input);
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function handleAnswers() {
        try {
            const scoreContainer = document.getElementById(scoreContainer);
            scoreContainer.classList.remove("hidden");
        } catch (error) {
            console.log(error);
        }
    }
}
