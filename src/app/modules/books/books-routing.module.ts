import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent,BookDetailsComponent } from './pages';


const routes: Routes = [
  { path: '', 
  component: BooksListComponent 
},
{
  path:':id',
  component:BookDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
