"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department_1 = require("./Department");
var Position_1 = require("./Position");
var Account_1 = require("./Account");
var department01 = new Department_1.Department(1, "Giám Đốc");
var department02 = new Department_1.Department(2, "Bảo vệ");
var department03 = new Department_1.Department(3, "Kế toán");
var department04 = new Department_1.Department(4, " Sale");
console.log("-----------------Thông tin phòng ban:----------------");
(0, Department_1.showInfoDepartment)(department01);
(0, Department_1.showInfoDepartment)(department02);
(0, Department_1.showInfoDepartment)(department03);
(0, Department_1.showInfoDepartment)(department04);
var position01 = new Position_1.Position(1, "Dev");
var position02 = new Position_1.Position(2, "Tester");
var position03 = new Position_1.Position(3, "Scrum Master");
var position04 = new Position_1.Position(4, "PM");
console.log("---------------Thông tin chức vụ:--------------------");
(0, Position_1.showInfoPosition)(position01);
(0, Position_1.showInfoPosition)(position02);
(0, Position_1.showInfoPosition)(position03);
(0, Position_1.showInfoPosition)(position04);
var account01 = new Account_1.Account(1, "duc.nguyen@gmail.com", "ducnguyen", "Duc Nguyen", department01, position02, new Date("2022-01-01"));
var account02 = new Account_1.Account(2, "duc.quang@gmail.com", "ducquang", "Duc Quang", department04, position01, new Date("2024-01-12"));
var account03 = new Account_1.Account(3, "trang.thu@gmail.com", "thutrang", "Trang Thu", department03, position03, new Date("2022-11-31"));
var account04 = new Account_1.Account(4, "nam.hai@gmail.com", "hainam", "Hải Nam", department02, position02, new Date("2023-09-20"));
var account05 = new Account_1.Account(5, "hai.pahm@gmail.com", "namhai", "Phạm Nam", department01, position04, new Date("2023-09-20"));
console.log("------------------Thông tin tài khoản:-------------------");
(0, Account_1.showInfoAccount)(account01);
(0, Account_1.showInfoAccount)(account02);
(0, Account_1.showInfoAccount)(account03);
(0, Account_1.showInfoAccount)(account04);
(0, Account_1.showInfoAccount)(account05);
