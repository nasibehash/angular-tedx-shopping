import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  //  {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/',
  // },
  {
    path: '',
    loadChildren: () => import('./modules/layout.module').then((mod) => mod.LayoutModule),
  }
  ,
  {
    path: 'auth/login',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  
  { path: 'podcast-card', loadChildren: () => import('./shared/components/podcast-card/podcast-card.module').then(m => m.PodcastCardModule) },
  


 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
