"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
exports.showInfoPosition = showInfoPosition;
var Position = /** @class */ (function () {
    function Position(id, name) {
        this.id = id;
        this.name = name;
    }
    /**
     * Getter id
     * @return {number}
     */
    Position.prototype.getId = function () {
        return this.id;
    };
    /**
     * Getter name
     * @return {string}
     */
    Position.prototype.getName = function () {
        return this.name;
    };
    /**
     * Setter id
     * @param {number} value
     */
    Position.prototype.setId = function (value) {
        this.id = value;
    };
    /**
     * Setter name
     * @param {string} value
     */
    Position.prototype.setName = function (value) {
        this.name = value;
    };
    Position.prototype.toString = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Position;
}());
exports.Position = Position;
function showInfoPosition(position) {
    console.log("Th\u00F4ng tin ch\u1EE9c v\u1EE5: ".concat(position.toString()));
}
