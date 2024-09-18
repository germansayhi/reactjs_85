"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myAge = exports.myName = exports.Person = void 0;
// Khai báo class person
var Person = /** @class */ (function () {
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    // Khai báo phương thức goVTI()
    Person.prototype.goVTI = function () {
        console.log("Student goes to VTI to learn");
    };
    // viết hàm toString()
    Person.prototype.toString = function () {
        return "\n        Id: ".concat(this.id, ", \n        Name: ").concat(this.name, ", \n        Address: ").concat(this.address);
    };
    return Person;
}());
exports.Person = Person;
exports.myName = 'John';
exports.myAge = 18;
var logoVTI = "VTI ACADEMY";
exports.default = logoVTI;
