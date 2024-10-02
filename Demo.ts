import { Person, myName, myAge } from "./Demo-02/person";
import logo from "./Demo-02/person";
// Demo
// var person1 = new Person();
// person1.setId(1);
// person1.setName("Duc");
// person1.setAddress("HaNoi");

// Khai báo contructor
var person1 = new Person(1, "Duc", "HaNoi");

// In ra thông tin person1
console.log("Thông tin person1 là:");
console.log("ID: " + person1.getId());
console.log("Name: " + person1.getName());
console.log("Address: " + person1.getAddress());

console.log("MyName" + myName);
console.log("MyAge" + myAge);

// var person2 = new Person();
// person2.setId(2);1
// person2.setName("Quang");
// person2.setAddress("HaNoi");

// In ra thông tin person1
// console.log("Thông tin person2 là:");
// console.log("ID: " + person2.id);
// console.log("Name: " + person2.name);
// console.log("Address: " + person2.address);

var person2 = new Person(2, "Quang", "Hn2");
console.log(
    `Thông tin person2 là:
    ID: ${person2.getId()}
    Name: ${person2.getName()}
    Address: ${person2.getAddress()}`
);

person1.goVTI;
person2.goVTI;

// Sử dụng hàm toString
console.log(`Thông tin person 1 là: ${person1.toString()}`);
console.log(`Thông tin person 2 là: ${person2.toString()}`);
