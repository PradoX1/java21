const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

function createQuizHTML(quiz) {
    const quizItem = document.createElement('div');
    quizItem.classList.add('quiz-item');

    const questionHeader = document.createElement('h3');
    questionHeader.textContent = `Câu ${quiz.id} : ${quiz.question}`;

    const quizAnswer = document.createElement('div');
    quizAnswer.classList.add('quiz-answer');

    quiz.answers.forEach((answer, index) => {
        const answerItem = document.createElement('div');
        answerItem.classList.add('quiz-answer-item');

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = quiz.id;
        radioInput.value = answer;

        const label = document.createElement('label');
        label.textContent = answer;

        answerItem.appendChild(radioInput);
        answerItem.appendChild(label);
        quizAnswer.appendChild(answerItem);
    });

    quizItem.appendChild(questionHeader);
    quizItem.appendChild(quizAnswer);

    return quizItem;
}

function appendQuizToContainer(quiz) {
    const quizContainer = document.querySelector('.quiz-container');
    const quizItem = createQuizHTML(quiz);
    quizContainer.appendChild(quizItem);
}

appendQuizToContainer(quizes[2]);

document.addEventListener("DOMContentLoaded", function () {
    // Chọn nút "Random Answer" bằng ID
    var randomAnswerButton = document.getElementById("btn");

    // Thêm sự kiện click cho nút "Random Answer"
    randomAnswerButton.addEventListener("click", function () {
        // Chọn tất cả các ô input có thuộc tính name
        var allInputs = document.querySelectorAll('input[name]:checked');

        // Duyệt qua từng ô input và bỏ chọn
        allInputs.forEach(function (input) {
            input.checked = false;
        });

        // Chọn tất cả các câu hỏi
        var quizItems = document.querySelectorAll('.quiz-item');

        // Duyệt qua từng câu hỏi
        quizItems.forEach(function (quizItem) {
            // Chọn tất cả các ô input trong câu hỏi đó
            var answerInputs = quizItem.querySelectorAll('input[type="radio"]');

            // Chọn ngẫu nhiên một số từ 0 đến số lượng câu trả lời - 1
            var randomIndex = Math.floor(Math.random() * answerInputs.length);

            // Đặt trạng thái checked cho ô input được chọn ngẫu nhiên
            answerInputs[randomIndex].checked = true;
        });
    });
});