// Hàm tính tổng
let sum = (a: number, b: number) => a + b;
//hàm tính hiệu
let minus = (a: number, b: number) => a - b;
//hàm tính phép nhân 
let plus = (a: number, b: number) => a * b;
//hàm tính phép chia
let chia = (a: number, b: number) => a / b;

let sum_a_b = sum(10, 20);
console.log(`Tổng 2 số là: ${sum_a_b}`);

let minus_a_b = minus(10, 20);
console.log(`Tổng 2 số là: ${minus_a_b}`);

let plus_a_b = plus(10, 20);
console.log(`Tổng 2 số là: ${plus_a_b}`);

let chia_a_b = chia(10, 20);
console.log(`Tổng 2 số là: ${chia_a_b}`);

let calculate = (a: number, b: number, f) => {
    let result = f(a, b);
    console.log(`Kết quả của phép tính là: ${result}`);
}

console.log("Sử dụng hàm Calculate");

calculate(10, 20, sum);

calculate(10, 20, minus);

calculate(10, 20, plus);
