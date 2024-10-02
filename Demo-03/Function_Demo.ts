// Viết hàm để tính tổng 2 số
function sum(a: number, b: number) {
    return a + b;
}
console.log(`Tổng 2 số là: ${sum(10, 20)}`);

//Cách 2
let v_sum = function (a: number, b: number) {
    return a + b;
}
// cách 3: Arrow
let v_sum_arrow = (a: number, b: number) => a + b;
console.log(`Tổng 2 số với là: ${v_sum_arrow(10, 20)}`);
