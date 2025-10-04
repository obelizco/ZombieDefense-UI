import { Component, Input } from '@angular/core';
import { DefenseResult } from '../../../core/interfaces/defense-result.model';

@Component({
  selector: 'app-defense-ranking',
  templateUrl: './defense-ranking.component.html',
  styleUrls: ['./defense-ranking.component.scss']
})
export class DefenseRankingComponent {
  @Input() history: DefenseResult[] = [];
}