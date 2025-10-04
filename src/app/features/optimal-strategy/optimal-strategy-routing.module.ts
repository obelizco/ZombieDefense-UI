import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefenseFormComponent } from './pages/defense-form/defense-form.component';

const routes: Routes = [
  {
   path: 'strategy',
   component: DefenseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptimalStrategyRoutingModule { }
