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