import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceXRoutingModule } from './spacex-routing.module';
import { SpaceXComponent } from './spacex.component';
import { FilterComponent } from './filter-component/filter.component';
import { TilesComponent } from './tiles-component/tiles.component';

@NgModule({
  declarations: [
    SpaceXComponent,
    FilterComponent,
    TilesComponent
  ],
  imports: [
    CommonModule,
    SpaceXRoutingModule
  ],
  providers: []
})
export class SpaceXModule { }
