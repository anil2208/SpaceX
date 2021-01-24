import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXComponent } from './spacex.component';

const routes: Routes = [
  { path: '', component: SpaceXComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceXRoutingModule { }
