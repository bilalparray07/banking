import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoanComponent } from './user-loan.component';

const routes: Routes = [{ path: '', component: UserLoanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoanRoutingModule { }
