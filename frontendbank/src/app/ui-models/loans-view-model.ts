import { UserLoans } from 'src/service-model/userloan';

export class LoansViewModel {
  loanDataObj: UserLoans = new UserLoans(); // Initialize with empty object
  loansDataList: UserLoans[] = [];
  loantype: string = '';
  userLoans: any[] = [];
  listOfColateralls = new Array<string>();
  listOfLoantypes = new Array<string>();
  isLoanNumberGenerated: boolean = false;
  isInterestGenerated: boolean = false;
  displayStyle = 'none';
  editMode: boolean = false;
  isInputValid: boolean = true;
  formSubmitted: boolean = false;
  validations = {
    amount: [
      { type: 'required', message: 'Amount is Required' },
      { type: 'maxlength', value: 15, message: 'Maximum Length is 15 digits' },
      { type: 'pattern', message: 'Not Valid Format !' },
    ],
    startDate: [{ type: 'required', message: 'Start Date is Required' }],
    endDate: [{ type: 'required', message: 'End Date is Required' }],
    collateral: [{ type: 'required', message: 'Select Collateral ' }],
    term: [{ type: 'required', message: 'Select is Term' }],
    loanType: [{ type: 'required', message: 'Select LoanType ' }],
    interestRate: [
      { type: 'required', message: 'Interest Rate is Required' },
      {
        type: 'minlength',
        value: 1,
        message: 'Minimum Length is 1 Characters',
      },
      {
        type: 'maxlength',
        value: 3,
        message: 'Maximum Length is 13 Characters',
      },
    ],
  };
}
