import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoantypesComponent } from './loantypes.component';

const routes: Routes = [{ path: '', component: LoantypesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoantypesRoutingModule { }
