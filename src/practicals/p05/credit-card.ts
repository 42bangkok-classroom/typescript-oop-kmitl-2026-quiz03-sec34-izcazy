export class CreditCard {
    private cardNumber: string;

    constructor(accountName: string, cardNumber: string){
        super(accountName);
        this.cardNumber = cardNumber;
    }
    public processPayment(amount: number): boolean {
        console.log(`Cutting credit card balance: ${amount} Baht`)
        return true;
    }
    public getPaymentFee(amount: number): number {
        return amount * 0.02; // ค่าธรรมเนียม 2%
    }
}
