"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
exports.showInfoAccount = showInfoAccount;
var Account = /** @class */ (function () {
    function Account(id, email, username, fullname, department, position, createdDate) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.fullname = fullname;
        this.departmnt = department;
        this.position = position;
        this.createdDate = createdDate;
    }
    /**
     * Getter id
     * @return {number}
     */
    Account.prototype.getId = function () {
        return this.id;
    };
    /**
     * Getter email
     * @return {string}
     */
    Account.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * Getter username
     * @return {string}
     */
    Account.prototype.getUsername = function () {
        return this.username;
    };
    /**
     * Getter fullname
     * @return {string}
     */
    Account.prototype.getFullname = function () {
        return this.fullname;
    };
    /**
     * Getter departmnt
     * @return {Department}
     */
    Account.prototype.getDepartmnt = function () {
        return this.departmnt;
    };
    /**
     * Getter position
     * @return {Position}
     */
    Account.prototype.getPosition = function () {
        return this.position;
    };
    /**
     * Getter createdDate
     * @return {Date}
     */
    Account.prototype.getCreatedDate = function () {
        return this.createdDate;
    };
    /**
     * Setter id
     * @param {number} value
     */
    Account.prototype.setId = function (value) {
        this.id = value;
    };
    /**
     * Setter email
     * @param {string} value
     */
    Account.prototype.setEmail = function (value) {
        this.email = value;
    };
    /**
     * Setter username
     * @param {string} value
     */
    Account.prototype.setUsername = function (value) {
        this.username = value;
    };
    /**
     * Setter fullname
     * @param {string} value
     */
    Account.prototype.setFullname = function (value) {
        this.fullname = value;
    };
    /**
     * Setter departmnt
     * @param {Department} value
     */
    Account.prototype.setDepartmnt = function (value) {
        this.departmnt = value;
    };
    /**
     * Setter position
     * @param {Position} value
     */
    Account.prototype.setPosition = function (value) {
        this.position = value;
    };
    /**
     * Setter createdDate
     * @param {Date} value
     */
    Account.prototype.setCreatedDate = function (value) {
        this.createdDate = value;
    };
    return Account;
}());
exports.Account = Account;
function showInfoAccount(account) {
    console.log("Th\u00F4ng tin t\u00E0i kho\u1EA3n:\nID: ".concat(account.getId(), "\nUsername: ").concat(account.getUsername(), "\nEmail: ").concat(account.getEmail(), "\nFullname: ").concat(account.getFullname(), "\nPh\u00F2ng ban: ").concat(account.getDepartmnt().getName(), "\nV\u1ECB tr\u00ED: ").concat(account.getPosition().getName(), "\nNg\u00E0y t\u1EA1o: ").concat(account.getCreatedDate().toLocaleDateString()));
}
