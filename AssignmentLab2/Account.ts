import { Department } from "./Department";
import { Position } from "./Position";

export class Account {
    private id: number;
    private email: string;
    private username: string;
    private fullname: string;
    private departmnt: Department;
    private position: Position;
    private createdDate: Date;

    constructor(id: number, email: string, username: string, fullname: string, department: Department, position: Position, createdDate: Date) {
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
    public getId(): number {
        return this.id;
    }

    /**
     * Getter email
     * @return {string}
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Getter username
     * @return {string}
     */
    public getUsername(): string {
        return this.username;
    }

    /**
     * Getter fullname
     * @return {string}
     */
    public getFullname(): string {
        return this.fullname;
    }

    /**
     * Getter departmnt
     * @return {Department}
     */
    public getDepartmnt(): Department {
        return this.departmnt;
    }

    /**
     * Getter position
     * @return {Position}
     */
    public getPosition(): Position {
        return this.position;
    }

    /**
     * Getter createdDate
     * @return {Date}
     */
    public getCreatedDate(): Date {
        return this.createdDate;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public setId(value: number) {
        this.id = value;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public setEmail(value: string) {
        this.email = value;
    }

    /**
     * Setter username
     * @param {string} value
     */
    public setUsername(value: string) {
        this.username = value;
    }

    /**
     * Setter fullname
     * @param {string} value
     */
    public setFullname(value: string) {
        this.fullname = value;
    }

    /**
     * Setter departmnt
     * @param {Department} value
     */
    public setDepartmnt(value: Department) {
        this.departmnt = value;
    }

    /**
     * Setter position
     * @param {Position} value
     */
    public setPosition(value: Position) {
        this.position = value;
    }

    /**
     * Setter createdDate
     * @param {Date} value
     */
    public setCreatedDate(value: Date) {
        this.createdDate = value;
    }

}
export function showInfoAccount(account: Account): void {
    console.log(`Thông tin tài khoản:
ID: ${account.getId()}
Email: ${account.getEmail()}
Username: ${account.getUsername()}
Fullname: ${account.getFullname()}
Phòng ban: ${account.getDepartmnt().getName()}
Vị trí: ${account.getPosition().getName()}
Ngày tạo: ${account.getCreatedDate().toLocaleDateString()}`);
}




