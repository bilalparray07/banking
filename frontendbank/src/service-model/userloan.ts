export class UserLoans {
    _id: string|any;
    loanNumber!:string
    amount!: number
    interestRate!: number
    term!: number
    startDate: string=''
    endDate: string=''
    loanType!: LoanType
    status: string=''
    collateral!: ColaterallsType
}

export  enum ColaterallsType{
    RealEstate=0,
    Vehicles=1,
    FinancialAssets=2,
    BusinessAssets=3,
    PersonalProperty=4
}
export enum LoanType{
    PersonalLoan=0,
    HomeLoan=1,
    AutoLoan=2,
    Business=3,
    EducationLoan=4,
    Other=5
}