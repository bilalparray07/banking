import { Component, OnInit } from '@angular/core';
import { AdminLoanService } from 'src/app/services/General/admin-loan.service';
import { UserLoanService } from 'src/app/services/General/user-loan.service';
import { LoansViewModel } from 'src/app/ui-models/loans-view-model';
import { UserLoans } from 'src/service-model/userloan';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {


loansVMObj:LoansViewModel=new LoansViewModel()
  constructor(private adminLoanService: AdminLoanService) {}

  ngOnInit() {
    this.loadLoans()
  }
  // createLoanRequest() {
  //   this.adminLoanService.createLoanRequest(this.loansVMObj.loanDataObj).subscribe(
  //     (response) => {
  //       // Handle success, e.g., show a success message
  //       console.log('Loan request created:', response);
  //       alert('success')
  //       this.loansVMObj.loanDataObj; // Clear the form
  //     },
  //     (error) => {
  //       // Handle error, e.g., show an error message
  //       console.error('Error creating loan request:', error);
  //     }
  //   );
  // }
  loadLoans(): void {
    this.adminLoanService.getAllLoans().subscribe(data => {
      this.loansVMObj.loansDataList = data;
    });
  }

  closePopup() {
    this.loansVMObj.displayStyle = "none";
  }
  openAddEditModal( id: string|null) {
    if (id==null) {
      this.loansVMObj.editMode = false;
      this.loansVMObj.loanDataObj= new UserLoans()
    } else {
      this.loansVMObj.editMode = true;
      this.selectedLoan(id);
    }
    this.loansVMObj.displayStyle = "block";
  }
  selectedLoan(customerId: any): void {
    this.adminLoanService.getLoanStatusById(customerId).subscribe(data => {
      console.log('Customer details data:', data);
      this.loansVMObj.loanDataObj = data;
    });
  }
  updateloanStatus(){
    this.adminLoanService.updateLoanStatus(this.loansVMObj.loanDataObj._id, this.loansVMObj.loanDataObj).subscribe(
      () => {
        alert("Customer Updated SuccessFully!")
        this.loansVMObj.displayStyle = "none";
        this.loadLoans();
      })

      let id=this.loansVMObj.loanDataObj._id
      if (id) {
        this.adminLoanService.updateLoanStatus(this.loansVMObj.loanDataObj._id, this.loansVMObj.loanDataObj).subscribe(
          () => {
            alert("Status  Updated SuccessFully!")
            this.loansVMObj.displayStyle = "none";
            this.loadLoans();
          },
          (error) => {
            console.error("Error updating Status:", error);
            // You can add additional error handling here, such as showing an error message to the user.
          }
        );
      }
      else{

          alert("Unknown Error Occured:");
          // You can add additional error handling here, such as showing an error message to the user.

      }

  }
  deleteLoan(loannId: any): void {
    this.adminLoanService.deleteLoanRequest(loannId).subscribe(() => {
      this.loadLoans();
      this.loansVMObj.loanDataObj;
      alert('Loan Request deleted Successfully')

    });
  }
}
