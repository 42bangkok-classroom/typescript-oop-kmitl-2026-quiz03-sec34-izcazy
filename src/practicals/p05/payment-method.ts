export class PaymentMethod {
    protected accountName: string;

    constructor(accountName: string){
        this.accountName = accountName;
    }
    public getAccountName(): string {
        return this.accountName;
    }
    public processPayment(_amount: number): boolean { // _ คือเป็นการบอกว่าตัวแปรนี้ไม่ถูกใช้แต่จำเป็นต้องมี
        return true;
    }
    public getPaymentFee(_amount: number): number {
        return 0;
    }
}
