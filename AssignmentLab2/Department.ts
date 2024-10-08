export class Department {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public setDepartment(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    public toString(): string {
        return `
        ID: ${this.id}, 
        Name: ${this.name}`;
    }
}
export function showInfoDepartment(departments: Department): void {
    console.log(`Thông tin phòng ban: ${departments.toString()}`);
}
