import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TedxComponent } from './tedx.component';

const routes: Routes = [{ path: '', component: TedxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TedxRoutingModule { }
