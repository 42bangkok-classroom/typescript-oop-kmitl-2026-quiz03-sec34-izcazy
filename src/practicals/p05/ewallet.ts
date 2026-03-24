export class EWallet {
    private walletId: string;

    constructor(accountName: string, wallerId: string){
        super(accountName);
        this.walletId = wallerId;
    }
    public processPayment(amount: number): boolean {
        console.log(`Cutting e-wallet balance: ${amount} Baht`)
        return true;
    }
    public getPaymentFee(amount: number): number {
        return amount * 0.01
    }
}
