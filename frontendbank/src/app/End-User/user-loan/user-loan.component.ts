import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/Common/common-service.service';
import { UserLoanService } from 'src/app/services/General/user-loan.service';
import { LoansViewModel } from 'src/app/ui-models/loans-view-model';
import { ColaterallsType, LoanType, UserLoans } from 'src/service-model/userloan';

@Component({
  selector: 'app-user-loan',
  templateUrl: './user-loan.component.html',
  styleUrls: ['./user-loan.component.css']
})
export class UserLoanComponent implements OnInit {

  loansVMObj:LoansViewModel=new LoansViewModel()


  constructor(private userLoanService: UserLoanService,private commonService:CommonServiceService,private router:Router) {}

  ngOnInit(): void {
    this.loansVMObj.listOfColateralls =this.commonService.EnumToStringArray(ColaterallsType);
    this.loansVMObj.listOfLoantypes =this.commonService.EnumToStringArray(LoanType);

  }

  generateLoanNumber() {
    this.loansVMObj.loanDataObj.loanNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    this.loansVMObj.isLoanNumberGenerated = true;
  }
  convertStringToEnum(enumString: string): LoanType {
    return LoanType[enumString as keyof typeof LoanType];
  }
  calculateInterest(){
    let loanType=this.loansVMObj.loanDataObj.loanType.toString()
    // Check the selected loan type and set the interest rate
    switch (loanType) {
     case "PersonalLoan":
       this.loansVMObj.loanDataObj.interestRate = (this.loansVMObj.loanDataObj.amount * 10 * this.loansVMObj.loanDataObj.term) / 100;
       break;
     case "HomeLoan":
       this.loansVMObj.loanDataObj.interestRate = (this.loansVMObj.loanDataObj.amount * 9 * this.loansVMObj.loanDataObj.term) / 100;
       break;
     case "Business":
       this.loansVMObj.loanDataObj.interestRate = (this.loansVMObj.loanDataObj.amount * 8 * this.loansVMObj.loanDataObj.term) / 100;
       break;
     case "AutoLoan":
       this.loansVMObj.loanDataObj.interestRate = (this.loansVMObj.loanDataObj.amount * 11 * this.loansVMObj.loanDataObj.term) / 100;
       break;
       case "EducationLoan":
        this.loansVMObj.loanDataObj.interestRate = (this.loansVMObj.loanDataObj.amount * 6 * this.loansVMObj.loanDataObj.term) / 100;
        break;
     case "Other":
       this.loansVMObj.loanDataObj.interestRate = (this.loansVMObj.loanDataObj.amount * 13 * this.loansVMObj.loanDataObj.term) / 100;
       break;
     default:
       // Handle the case when no valid loan type is selected
       // You can show an error message or take appropriate action.
       break;}
    this.loansVMObj.isInterestGenerated=true;
  }
  createLoanRequest(userLoanRequestForm: NgForm) {
    this.loansVMObj.formSubmitted = true;
    try {
      if (userLoanRequestForm.invalid) {
        alert("Fill All Required Fields")
        return;
      }
        this.loansVMObj.loanDataObj.status='pending'

        this.userLoanService.createLoanRequest(this.loansVMObj.loanDataObj).subscribe(
          (response) => {
            // Handle success, e.g., show a success message
            alert('Loan Request Sent SuccessFully')
            this.loansVMObj.loanDataObj;
             // Clear the form
             this.router.navigate(['/home'])
          },
          (error) => {
            // Handle error, e.g., show an error message
            console.error('Error creating loan request:', error);
          }
        );

      } catch (error) {
        console.error('Error creating loan request:', error);
      }

}}
