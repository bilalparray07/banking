import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoantypesRoutingModule } from './loantypes-routing.module';
import { LoantypesComponent } from './loantypes.component';


@NgModule({
  declarations: [
    LoantypesComponent
  ],
  imports: [
    CommonModule,
    LoantypesRoutingModule
  ]
})
export class LoantypesModule { }
