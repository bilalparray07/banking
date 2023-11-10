import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoanRoutingModule } from './user-loan-routing.module';
import { UserLoanComponent } from './user-loan.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserLoanComponent
  ],
  imports: [
    CommonModule,
    UserLoanRoutingModule,
    FormsModule
  ]
})
export class UserLoanModule { }
