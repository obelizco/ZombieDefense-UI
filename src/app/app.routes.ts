import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: 'strategy',
    loadChildren: () =>
      import('./features/optimal-strategy/optimal-strategy.module').then(
        (m) => m.OptimalStrategyModule
      ),
    },
      { path: '**', redirectTo: 'strategy', pathMatch: 'full' },
];
