import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastListComponent,PodcastDetailsComponent } from './pages';

const routes: Routes = [
  { path: '', 
  component: PodcastListComponent 
},
{
  path:'podcastDetail/:id',
  component:PodcastDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule { }
