import { Component, Input } from '@angular/core';
import { DefenseResult } from '../../../core/interfaces/defense-result.model';

@Component({
  selector: 'app-defense-results',
  templateUrl: './defense-results.component.html',
  styleUrls: ['./defense-results.component.scss']
})
export class DefenseResultsComponent {
  @Input() result!: DefenseResult;
}