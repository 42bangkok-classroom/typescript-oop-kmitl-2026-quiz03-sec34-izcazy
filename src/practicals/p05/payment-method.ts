export class PaymentMethod {
    protected accountName: string;

    constructor(accountName: string){
        this.accountName = accountName;
    }
    public getAccountName(): string {
        return this.accountName;
    }
    public processPayment(amount: number): boolean {
        return false;
    }
    public getPaymentFee(amount: number): number {
        return 0;
    }
}
