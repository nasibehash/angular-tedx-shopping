import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { LayoutComponent } from './layout.component';
import { TedxModule } from './tedx/tedx.module';

const routes: Routes = [
  { path: '',
   component: LayoutComponent,
   children:[
    { path: '', loadChildren: () => import('./home/home.module').then(m => HomeModule) },
    { path: 'tedx', loadChildren: () => import('./tedx/tedx.module').then(m => TedxModule) },
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
