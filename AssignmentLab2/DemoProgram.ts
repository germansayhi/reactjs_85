import { Department, showInfoDepartment } from "./Department";
import { Position, showInfoPosition } from "./Position";
import { Account, showInfoAccount } from "./Account";

let department01 = new Department(1, "Giám Đốc");
let department02 = new Department(2, "Bảo vệ");
let department03 = new Department(3, "Kế toán");
let department04 = new Department(4, " Sale");

console.log("Thông tin phòng ban:")
showInfoDepartment(department01);
showInfoDepartment(department02);
showInfoDepartment(department03);
showInfoDepartment(department04);

let position01 = new Position(1, "Dev");
let position02 = new Position(2, "Tester");
let position03 = new Position(3, "Scrum Master");
let position04 = new Position(4, "PM");

console.log("Thông tin chức vụ:")
showInfoPosition(position01);
showInfoPosition(position02);
showInfoPosition(position03);
showInfoPosition(position04);

let account01 = new Account(1, "duc.nguyen@gmail.com", "ducnguyen", "Duc Nguyen", department01, position02, new Date("2022-01-01"));
let account02 = new Account(2, "duc.quang@gmail.com", "ducquang", "Duc Quang", department04, position01, new Date("2024-01-12"));
let account03 = new Account(3, "trang.thu@gmail.com", "thutrang", "Trang Thu", department03, position03, new Date("2022-11-31"));
let account04 = new Account(4, "nam.hai@gmail.com", "hainam", "Hải Nam", department02, position02, new Date("2023-09-20"));
let account05 = new Account(5, "hai.pahm@gmail.com", "namhai", "Phạm Nam", department01, position04, new Date("2023-09-20"));

console.log("Thông tin tài khoản:")
showInfoAccount(account01);
showInfoAccount(account02);
showInfoAccount(account03);
showInfoAccount(account04);
showInfoAccount(account05);