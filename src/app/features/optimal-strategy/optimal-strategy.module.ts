import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimalStrategyRoutingModule } from './optimal-strategy-routing.module';
import { PrimeModule } from '../../shared/prime-ng/prime.module';
import { SharedModule } from '../../shared/shared.module';
import { DefenseFormComponent } from './pages/defense-form/defense-form.component';


@NgModule({
  declarations: [
    DefenseFormComponent
  ],
  imports: [
    CommonModule,
    OptimalStrategyRoutingModule,
    PrimeModule,
    SharedModule
  ]
})
export class OptimalStrategyModule { }
