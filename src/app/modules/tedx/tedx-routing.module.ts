import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TedxDetailsComponent, TedxListComponent } from './pages';

const routes: Routes = [
  { path: '', 
  component: TedxListComponent 
},
{
  path:':id',
  component:TedxDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TedxRoutingModule { }
