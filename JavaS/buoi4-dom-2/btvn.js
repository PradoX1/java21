document.addEventListener("DOMContentLoaded", function () {
  const colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

  const boxContainer = document.querySelector(".boxes");
  const scoreElement = document.querySelector(".points");
  const btnMoreBox = document.getElementById("btn");

  let totalBoxes = 0;

  // Tạo một box với màu được chọn và thêm sự kiện click để xóa box
  function createBox(color) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;

    box.addEventListener("click", function () {
      removeBox(box);
    });

    return box;
  }

  // Xóa box khỏi container và cập nhật số lượng total box
  function removeBox(box) {
    boxContainer.removeChild(box);
    totalBoxes--;
    updateScore();
  }

  // Cập nhật số lượng total box trên giao diện
  function updateScore() {
    scoreElement.textContent = totalBoxes;
  }
  // Lấy ra màu khác nhau
  function getRandomColors(numColors) {
    const shuffledColors = [...colors];
    for (let i = shuffledColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledColors[i], shuffledColors[j]] = [
        shuffledColors[j],
        shuffledColors[i],
      ];
    }
    return shuffledColors.slice(0, numColors);
  }
  // Thêm n boxes vào container với màu ngẫu nhiên từ mảng colors
  function addBoxes(numBoxes) {
    const selectedColors = getRandomColors(numBoxes);
    for (let i = 0; i < numBoxes; i++) {
      const box = createBox(selectedColors[i]);
      boxContainer.appendChild(box);
      totalBoxes++;
    }
    updateScore();
  }

  // Thêm sự kiện click cho nút "More boxes"
  btnMoreBox.addEventListener("click", function () {
    addBoxes(5);
  });

  // Thêm 5 boxes ban đầu khi trang được load
  addBoxes(5);
});
