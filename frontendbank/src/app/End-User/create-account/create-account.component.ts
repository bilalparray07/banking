import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/Common/common-service.service';
import { AccountService } from 'src/app/services/General/account.service';
import { AccoutsVm } from 'src/app/ui-models/account-view-model';
import { AccountType, EducationLevel, ProofOfIdentification } from 'src/service-model/accounts';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private accountService: AccountService,private router:Router,private commonService:CommonServiceService) {
    this.AccountVM.listOfIdProofType =this.commonService.EnumToStringArray(ProofOfIdentification);
    this.AccountVM.listOfEducationLevelType =this.commonService.EnumToStringArray(EducationLevel);
    this.AccountVM.listOfAccountType =this.commonService.EnumToStringArray(AccountType);
  }
  AccountVM =new AccoutsVm()
  ngOnInit(): void {
  }
  createAccount(accountInfoForm: NgForm) {
    this.AccountVM.formSubmitted = true;
    try {
      if (accountInfoForm.invalid) {
        alert("Fill All Required Fields")
        return;
      }
      this.accountService.createAccount(this.AccountVM.accountsObj).subscribe(
        (response) => {
          console.log('Account created:', response);
          alert('Form Submitted Successfully');
          this.router.navigate(['/home'])
        },
        (error) => {
          console.error('Error creating account:', error);
        }
      );
    } catch (error) {
      alert('Error')
    }

  }


}
