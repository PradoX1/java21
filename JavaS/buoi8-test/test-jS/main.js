// Bài1
function longestArr(arr) {
    // Kiểm tra nếu mảng đầu vào là rỗng
    if (arr.length === 0) {
        return [];
    }

    // Tìm độ dài lớn nhất trong mảng
    let maxLength = Math.max(...arr.map(str => str.length));

    // Lọc các chuỗi có độ dài bằng với độ dài lớn nhất
    let result = arr.filter(str => str.length === maxLength);

    return result;
}
let mangChuoi = ["abc", "abcd", "xy", "xyz", "mnopqr"];
let ketQua = longestArr(mangChuoi);

console.log("Chuỗi có độ dài lớn nhất:", ketQua);
// Bài2
const users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
// *1 Trả về mảng các user có age > 25 và isStatus = true
function filterUsersByAgeAndStatus(users) {
    return users.filter(user => user.age > 25 && user.isStatus === true);
}
let filteredUsers = filterUsersByAgeAndStatus(users);
console.log("Users có age > 25 và isStatus = true:", filteredUsers);
// *2 Trả về mảng các user có age tăng dần
function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}
let sortedUsers = sortUsersByAge(users);
console.log("Users có age tăng dần:", sortedUsers);
// Bài3
function getCountElement(arr) {
    let countObject = {};

    // Duyệt qua từng phần tử trong mảng
    arr.forEach(element => {
        // Nếu phần tử đã tồn tại trong đối tượng countObject, tăng giá trị lên 1
        if (countObject[element]) {
            countObject[element]++;
        } else {
            // Nếu chưa tồn tại, tạo một khóa mới và đặt giá trị là 1
            countObject[element] = 1;
        }
    });

    return countObject;
}

// Sử dụng function với mảng đầu vào
let result = getCountElement(["duy", "thuc", "hien", "duy", "duy", "thuc"]);

console.log(result);