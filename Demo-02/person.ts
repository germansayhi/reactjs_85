// Khai báo class person
export class Person {
    private id: number;
    private name: string;
    private address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public setId(id: number) {
        this.id = id;
    }
    public setName(name: string) {
        this.name = name;
    }
    public setAddress(address: string) {
        this.address = address;
    }
    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getAddress(): string {
        return this.address;
    }

    // Khai báo phương thức goVTI()
    public goVTI(): void {
        console.log("Student goes to VTI to learn");
    }

    // viết hàm toString()
    public toString(): string {
        return `
        Id: ${this.id}, 
        Name: ${this.name}, 
        Address: ${this.address}`;
    }
}

export var myName = 'John';
export var myAge = 18;
var logoVTI = "VTI ACADEMY";

export default logoVTI;

