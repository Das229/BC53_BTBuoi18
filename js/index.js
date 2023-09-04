var inputNum = [];
var arrayNumber = document.querySelector("#arrayNumber");
var result = document.querySelector(".result");

function btnThemSo() {
  var arrayNumber = +document.querySelector("#arrayNumber").value;
  inputNum.push(arrayNumber);
  arrayNumber.value = "";
  result.innerHTML = "";
  result.innerHTML += "Số đã nhập: " + inputNum.join(", ");
}
function check(arr, input) {
  var checkNum = Number.isInteger(input);
  if (checkNum === true) {
    arr.push(input);
  }
}
// B1: tổng các số dương trong mảng
function btnSum() {
  var sum = 0;
  for (var i = 0; i < inputNum.length; i++) {
    if (inputNum[i] > 0) {
      sum += inputNum[i];
    }
  }
  document.querySelector(".resultSum").innerHTML = `
        Tổng các số dương : ${sum}
    `;
}

// ----------------------------------------------------------
// B2 : Đếm có bao nhiêu số dương trong mảng
function btnCount() {
  var count = 0;
  for (var i = 0; i < inputNum.length; i++) {
    if (inputNum[i] > 0) {
      count++;
    }
  }
  document.querySelector(".resultCount").innerHTML = `
    Số dương trong mảng có : ${count} số
`;
}

// --------------------------------------------------
// B3: tìm số nhỏ nhất trong mảng
function btnFindSmallNum() {
  var smallNum = inputNum[0];
  for (var i = 0; i < inputNum.length; i++) {
    if (inputNum[i] < smallNum) {
      smallNum = inputNum[i];
    }
  }
  document.querySelector(".resultFindSmallNum").innerHTML = `
    Số nhỏ nhất trong mảng là : ${smallNum} 
`;
}

// --------------------------------------------------
// B4 : tìm số dương nhỏ nhất trong mảng
function btnFindSmallPlusNum() {
  var smallPlusNum = inputNum[0];
  for (var i = 0; i < inputNum.length; i++) {
    if (inputNum[i] > 0 && inputNum[i] < smallPlusNum) {
      smallPlusNum = inputNum[i];
    }
  }
  document.querySelector(".resultFindSmallPlusNum").innerHTML = `
    Số dương nhỏ nhất trong mảng là : ${smallPlusNum} 
`;
}
// -----------------------------------------------
// B5: Tìm số chẵn cuối cũng trong mảng . Nếu k có giá trị chẵn thì trả về -1
function btnFindLastPlusNum() {
  var lastPlusNum;
  for (i = 0; i < inputNum.length; i++) {
    lastPlusNum = inputNum.filter(function (n) {
      return n % 2 == 0 && n >= 0;
    });
    if (lastPlusNum.length == "") {
      document.querySelector(".resultLastFindPlusNum").innerHTML =
        "-1 (vì không có số chẵn trong mảng này )";
    } else {
      var lastNum = lastPlusNum.pop();
      document.querySelector(".resultLastFindPlusNum").innerHTML = `
            Số chẵn cuối cùng trong mảng là : ${lastNum} 
        `;
    }
  }
}

// ----------------------------------------------------------------
// B6: ĐỔi chỗ 2 giá trị trong mảng theo vị trí ( nhập 2 vị trí  muốn đổi chỗ giá trị)
document.querySelector(".btnChange").onclick = function () {
  var a = +document.querySelector("#local1").value;
  var b = +document.querySelector("#local2").value;

  if (a < inputNum.length && b < inputNum.length) {
    [inputNum[a], inputNum[b]] = [inputNum[b], inputNum[a]];
    document.querySelector(".changeLocal").innerHTML = `
            Vị trí sau thay đổi : ${inputNum}
        `;
  } else {
    document.querySelector(
      ".changeLocal"
    ).innerHTML = `Vui lòng nhập đúng vị trí giá trị cần thay đổi ( Đếm từ 0 )`;
  }

  clear();
};
function clear() {
  document.querySelector("#local1").value = "";
  document.querySelector("#local2").value = "";
}
// ---------------------------------------
// B7 : Sắp xếp mảng theo thứ tự tăng dần
function btnArrange() {
  inputNum = inputNum.sort(function (a, b) {
    return a - b;
  });
  document.querySelector(
    ".arrange"
  ).innerHTML = ` Thứ tự tăng dần : ${inputNum} `;
}
// -------------------------------------------------
// B8 : Tìm số nguyên đầu tiên trong mảng , Nếu mảng k có số nguyên thì trả về -1
function btnFind() {
  var firstNumber;
  firstNumber = inputNum.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  });

  for (var c = 0; c <= firstNumber.length; c++) {
    var index = firstNumber.indexOf(firstNumber[c], -1);
    if (index == -1) {
      document.querySelector(".Find").innerHTML =
        "-1 (vì không có số nguyên trong mảng này )";
    } else {
      var firstNum = firstNumber.shift();
      document.querySelector(".Find").innerHTML = `
                Số nguyên đầu tiên trong mảng là : ${firstNum} 
            `;
    }
  }
}

// ---------------------------------------------------
// B9 : Nhập thêm 1 mảng số thực , tìm xem trong mảng có bao nhiêu số nguyên
var inputNum1 = [];
var arrayNumber1 = document.querySelector("#arrayNumber1");
var result1 = document.querySelector(".result1");

function btnThemSo1() {
  var arrayNumber1 = +document.querySelector("#arrayNumber1").value;
  inputNum1.push(arrayNumber1);
  arrayNumber1.value = "";
  result1.innerHTML = "";
  result1.innerHTML += "Số đã nhập: " + inputNum1.join(", ");
}

function btnFind1() {
  
  for(var c = 0; c < inputNum1.length; c++){
    var arrResult = inputNum1.filter(function(n) {
      return Number.isInteger(n) === true
    })
  }

  var find = arrResult.length;
  if (find === 0) {
    document.querySelector(".Find1").innerHTML = ` Mảng không chứa số nguyên.`;
  } else {
    document.querySelector(".Find1").innerHTML = ` Mảng gồm ${find} số nguyên.`;
  }
}
// ---------------------------------------------
// B10 : so sánh số lượng số âm và dương xem số nào nhiều hơn
function btnSoSanh() {
  var positiveNum = [];
  var negativeNum = [];
  for (var i = 0; i < inputNum.length; i++) {
    if (inputNum[i] !== 0) {
      if (inputNum[i] > 0) {
        positiveNum.push(inputNum[i]);
      } else {
        negativeNum.push(inputNum[i]);
      }
    }

    if (positiveNum.length > negativeNum.length) {
      document.querySelector(".SoSanh").innerHTML = "Số dương nhiều hơn số âm";
    } else if ((positiveNum.length = negativeNum.length)) {
      document.querySelector(".SoSanh").innerHTML = "Số dương bằng số âm";
    } else {
      document.querySelector(".SoSanh").innerHTML = "Số âm nhiều hơn số dương";
    }
  }
}
