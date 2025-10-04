import { Component } from '@angular/core';
import { DefenseResult } from '../../../../core/interfaces/defense-result.model';
import { DefenseService } from '../../services/defense.service';

@Component({
  selector: 'app-defense-form',
  templateUrl: './defense-form.component.html',
  styleUrls: ['./defense-form.component.scss']
})
export class DefenseFormComponent {
  bullets: number = 0;
  secondsAvailable: number = 0;
  result?: DefenseResult;
  history: DefenseResult[] = [];

  constructor(private defenseService: DefenseService) {}

  simulate() {
    this.defenseService.getOptimalStrategy(this.bullets, this.secondsAvailable).subscribe(res => {
      this.result = res;
      this.history.push(res);
      this.history.sort((a, b) => b.totalScore - a.totalScore);
    });
  }
}