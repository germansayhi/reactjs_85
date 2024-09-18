"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
exports.showInfoDepartment = showInfoDepartment;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.getName = function () {
        return this.name;
    };
    Department.prototype.setDepartment = function (id, name) {
        this.id = id;
        this.name = name;
    };
    Department.prototype.toString = function () {
        return "\n        ID: ".concat(this.id, ", \n        Name: ").concat(this.name);
    };
    return Department;
}());
exports.Department = Department;
function showInfoDepartment(departments) {
    console.log("Th\u00F4ng tin ph\u00F2ng ban: ".concat(departments.toString()));
}
