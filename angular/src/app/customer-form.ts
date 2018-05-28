export class CustomerForm {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    dateOfBirth: string;

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
