export interface IPackage {
    name: string,
    duration: number,
    price: number,
}

export interface IWoucher {
    name: string,
    code: string,
    minAmount: number,
    amount: number,
    discountType: string,
    startDate: Date,
    endDate: Date,

}

