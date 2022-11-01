// bài 1 :

function tinh() {
  var tong = 0;
  var count = 0;
  var n = 0;
  var result = "";

  while (tong <= 10000) {
    tong = tong + n;
    n++;
    count++;

    console.log("tổng: " + tong);
    console.log("vong lặp: " + count);
  }

  result = "<p> Số dương nhỏ nhất" + count + "</p>";

  document.getElementById("infonb1").innerHTML = result;
}

// bài 2
function tinhSn() {
  var x = document.getElementById("SoX").value * 1;
  var n = document.getElementById("SoN").value * 1;
  var s = 0;
  for (var i = 0; i <= n; i++) {
    s += Math.pow(x, i);
  }

  var result = "<p> Đáp án :" + s + "</p>";
  document.getElementById("infonb2").innerHTML = result;
}

// bài 3. tính giai thừa

function tinhGiaiThua() {
  var n = document.getElementById("Sonb3").value * 1;
  var tinh = 1;
  var start = 1;
  while (start <= n) {
    tinh = tinh * start;
    start++;
  }
  console.log(tinh);
}
//bài 4 : tạo DIV

function taoDiv() {
  for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      document.createElement("div");
    }
  }
}
