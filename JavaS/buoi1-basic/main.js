console.log("Hello World");
document.write("Hello World");
let mark;
function kiemTraDiem(mark) {
    if (mark >= 85) {
        console.log("A");
    } else if (mark >= 70 && mark < 85) {
        console.log("B");
    } else if (mark >= 40 && mark < 70) {
        console.log("C");
    } else {
        console.log("D");
    }
};
let day;
switch (day) {
        case 0:
        console.log("Hôm nay là Chủ Nhật");
        break;
    
        case 1:
            console.log("Hôm nay là thứ 2");
        break;
        case 2:
            console.log("Hôm nay là thứ 3");
            break;
        case 3:
            console.log("Hôm nay là thứ 4");
        break;
        case 4:
            console.log("Hôm nay là thứ 5");
        break;
        case 5:
            console.log("Hôm nay là thứ 6");
        break;
        case 6:
            console.log("Hôm nay là thứ 7");
            break;
}