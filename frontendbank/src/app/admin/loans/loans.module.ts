import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoansComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    FormsModule
  ]
})
export class LoansModule { }
