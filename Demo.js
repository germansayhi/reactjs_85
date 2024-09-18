"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./Demo-02/person");
// Demo
// var person1 = new Person();
// person1.setId(1);
// person1.setName("Duc");
// person1.setAddress("HaNoi");
// Khai báo contructor
var person1 = new person_1.Person(1, "Duc", "HaNoi");
// In ra thông tin person1
console.log("Thông tin person1 là:");
console.log("ID: " + person1.getId());
console.log("Name: " + person1.getName());
console.log("Address: " + person1.getAddress());
console.log("MyName" + person_1.myName);
console.log("MyAge" + person_1.myAge);
// var person2 = new Person();
// person2.setId(2);
// person2.setName("Quang");
// person2.setAddress("HaNoi");
// In ra thông tin person1
// console.log("Thông tin person2 là:");
// console.log("ID: " + person2.id);
// console.log("Name: " + person2.name);
// console.log("Address: " + person2.address);
var person2 = new person_1.Person(2, "Quang", "Hn2");
console.log("Th\u00F4ng tin person2 l\u00E0:\n    ID: ".concat(person2.getId(), "\n    Name: ").concat(person2.getName(), "\n    Address: ").concat(person2.getAddress()));
person1.goVTI;
person2.goVTI;
// Sử dụng hàm toString
console.log("Th\u00F4ng tin person 1 l\u00E0: ".concat(person1.toString()));
console.log("Th\u00F4ng tin person 2 l\u00E0: ".concat(person2.toString()));
