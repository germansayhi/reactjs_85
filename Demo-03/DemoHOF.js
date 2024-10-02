// Hàm tính tổng
var sum = function (a, b) { return a + b; };
//hàm tính hiệu
var minus = function (a, b) { return a - b; };
//hàm tính phép nhân 
var plus = function (a, b) { return a * b; };
//hàm tính phép chia
var chia = function (a, b) { return a / b; };
var sum_a_b = sum(10, 20);
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(sum_a_b));
var minus_a_b = minus(10, 20);
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(minus_a_b));
var plus_a_b = plus(10, 20);
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(plus_a_b));
var chia_a_b = chia(10, 20);
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(chia_a_b));
var calculate = function (a, b, f) {
    var result = f(a, b);
    console.log("K\u1EBFt qu\u1EA3 c\u1EE7a ph\u00E9p t\u00EDnh l\u00E0: ".concat(result));
};
console.log("Sử dụng hàm Calculate");
calculate(10, 20, sum);
calculate(10, 20, minus);
calculate(10, 20, plus);
