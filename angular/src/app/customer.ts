export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    address: string;

    getFullName(): string {
        return `${this.firstName} + ${this.lastName}`;
    }
}
