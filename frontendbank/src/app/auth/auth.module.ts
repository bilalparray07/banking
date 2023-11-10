import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot/forgot.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ForgotComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AuthModule { }
