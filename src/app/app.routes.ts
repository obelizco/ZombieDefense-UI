import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadChildren: () =>
      import('./features/optimal-strategy/optimal-strategy.module').then(
        (m) => m.OptimalStrategyModule
      ),
    },
];
