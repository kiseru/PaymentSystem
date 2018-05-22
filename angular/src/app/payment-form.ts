export class PaymentForm {
    id: number;
    customerId: number;
    billerId: number;
    account: string;
    amount: number;

    constructor() {
        this.customerId = 0;
        this.billerId = 0;
        this.account = "";
    }
}
