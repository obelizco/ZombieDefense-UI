import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefenseRankingComponent } from './components/defense-ranking/defense-ranking.component';
import { DefenseResultsComponent } from './components/defense-results/defense-results.component';
import { PrimeModule } from './prime-ng/prime.module';

@NgModule({
    declarations: [
        DefenseRankingComponent,
        DefenseResultsComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        PrimeModule
    ],
    exports: [
        DefenseRankingComponent,
        DefenseResultsComponent
    ],
})
export class SharedModule {}
