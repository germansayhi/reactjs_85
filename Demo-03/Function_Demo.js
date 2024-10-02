// Viết hàm để tính tổng 2 số
function sum(a, b) {
    return a + b;
}
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(sum(10, 20)));
//Cách 2
var v_sum = function (a, b) {
    return a + b;
};
// cách 3: Arrow
var v_sum_arrow = function (a, b) { return a + b; };
console.log("T\u1ED5ng 2 s\u1ED1 v\u1EDBi Arrow Function l\u00E0: ".concat(v_sum_arrow(10, 20)));
