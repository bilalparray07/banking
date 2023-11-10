import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/General/account.service';
import { AccoutsVm } from 'src/app/ui-models/account-view-model';
import { accountServiceModel } from 'src/service-model/accounts';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private accountService:AccountService) { }
viewModel:AccoutsVm=new AccoutsVm()
ngOnInit(): void {
  this.loadAccounts();
}
closePopup() {
  this.viewModel.displayStyle = "none";
}
openAddEditModal( id: string|null) {
  if (id==null) {
    this.viewModel.editMode = false;
    this.viewModel.accountsObj= new accountServiceModel()
  } else {
    this.viewModel.editMode = true;
    this.selectAccount(id);
  }
  this.viewModel.displayStyle = "block";
}
loadAccounts(): void {
  this.accountService.getAccounts().subscribe(data => {
    this.viewModel.accountsListL = data;
  });
}

selectAccount(AccountId: any): void {

  this.accountService.getAccountById(AccountId).subscribe(data => {
    console.log('Account details data:', data);
    this.viewModel.accountsObj = data;
  });
}
saveAccount(): void {
  let id=this.viewModel.accountsObj._id
  if (id) {
    this.accountService.updateAccount(this.viewModel.accountsObj._id, this.viewModel.accountsObj).subscribe(
      () => {
        alert("Account Updated SuccessFully!")
        this.viewModel.displayStyle = "none";
        this.loadAccounts();
      },
      (error) => {
        console.error("Error updating Account:", error);
        // You can add additional error handling here, such as showing an error message to the user.
      }
    );
  } else {

    this.accountService.createAccount(this.viewModel.accountsObj).subscribe(
      (data) => {
        alert("Account Added successfully!");
        this.loadAccounts();
        this.viewModel.displayStyle = "none";
      },
      (error) => {
        console.error("Error creating Account:", error);
        // You can add additional error handling here, such as showing an error message to the user.
      }
    );
  }
}


deleteAccount(AccountId: any): void {
  this.accountService.deleteAccount(AccountId).subscribe(() => {
    this.loadAccounts();
    this.viewModel.accountsObj;
  });
}

}
