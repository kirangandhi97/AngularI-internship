export class EmployeeDetails {
    public empId: number;
    public empName: string;
    public empSalary: number;
    public isGreaterSalary:boolean;
    constructor(
        empId:number,
        empName:string,
        empSalary:number,
        isGreaterSalary:boolean
    ) {
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
        this.isGreaterSalary = isGreaterSalary;
    }
}