//bài1
function tinhGiaiThua(n) {
    if (n < 0) {
        return "Không thể tính giai thừa của số âm";
    }
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * tinhGiaiThua(n - 1);
    }
}
let soNguyenDuong = 6;
let ketQua = tinhGiaiThua(soNguyenDuong);
console.log(`Giai thừa của ${soNguyenDuong} là: ${ketQua}`);
//bài2
function daoNguocChuoi(chuoi) {
    var mangKyTu = chuoi.split('');
    var mangDaoNguoc = mangKyTu.reverse();
    var chuoiDaoNguoc = mangDaoNguoc.join('');
    console.log("Chuỗi đảo ngược là: " + chuoiDaoNguoc);
}
let chuoiGoc = "Hello, World!";
let chuoiDaoNguoc = daoNguocChuoi(chuoiGoc);
//bài3
function welcome(country) {
    switch (country.toLowerCase()) {
      case "vn":
        return "Xin chào!";
      case "us":
        return "Hello!";
      case "fr":
        return "Bonjour!";
      case "ita":
        return "Ciao";
        
      default:
        return "Xin chào!";
    }
}
let country = 'fr';
let message = welcome(country);
console.log(`Lời chào của ${country} là :   `+message);
//bài4
function catChuoi(chuoi) {
    if (chuoi.length > 15) {
      var chuoiCat = chuoi.slice(0, 10) + "…";
      return chuoiCat;
    } else {
      return chuoi;
    }
}
let chuoi = "Xin chào tôi tên là Nguyễn Hoàng Duy";
let chuoiCat = catChuoi(chuoi);
console.log(chuoiCat);