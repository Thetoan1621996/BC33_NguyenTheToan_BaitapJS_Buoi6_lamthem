function findSNT() {
  var input = +document.getElementById("input").value;
  if (input < 2) {
    document.getElementById("result").innerHTML =
      "không tồn tại số nguyên tố bé hơn 2";
    return;
  } else{
    var ketQua = "";
    for (i = 2; i <= input; i++) {
      var checkSNT = true;
      for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          checkSNT = false;
          break;
        }
      }
      if (checkSNT) {
        ketQua += i + " ";
      }
    }
  }
  document.getElementById("result").innerHTML =
    "Danh sách số nguyên tố từ 2 đến " + input + " là: " + ketQua;
}
