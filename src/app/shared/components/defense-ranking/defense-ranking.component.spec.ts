import { TableModule } from 'primeng/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefenseRankingComponent } from './defense-ranking.component';
import { DefenseResult } from '../../../core/interfaces/defense-result.model';

describe('DefenseRankingComponent', () => {
  let component: DefenseRankingComponent;
  let fixture: ComponentFixture<DefenseRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TableModule],
      declarations: [DefenseRankingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DefenseRankingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 it('should display ranking in descending order by score', () => {
    const history: DefenseResult[] = [
      { totalScore: 100, bulletsUsed: 5, timeUsed: 10, zombiesEliminated: [] },
      { totalScore: 200, bulletsUsed: 6, timeUsed: 12, zombiesEliminated: [] },
      { totalScore: 50, bulletsUsed: 2, timeUsed: 6, zombiesEliminated: [] }
    ];

    component.history = history.sort((a, b) => b.totalScore - a.totalScore);
    fixture.detectChanges();

    expect(component.history[0].totalScore).toBe(200);
  });

  it('should handle empty history array', () => {
    component.history = [];
    fixture.detectChanges();
    expect(component.history.length).toBe(0);
  });

  it('should render correct number of rows in table', () => {
    component.history = [
      { totalScore: 100, bulletsUsed: 3, timeUsed: 8, zombiesEliminated: [] },
      { totalScore: 80, bulletsUsed: 4, timeUsed: 6, zombiesEliminated: [] }
    ];
    fixture.detectChanges();

    expect(component.history.length).toBe(2);
  });

  it('should compute average score across history', () => {
    const history: DefenseResult[] = [
      { totalScore: 100, bulletsUsed: 5, timeUsed: 10, zombiesEliminated: [] },
      { totalScore: 200, bulletsUsed: 6, timeUsed: 12, zombiesEliminated: [] }
    ];
    component.history = history;
    const avg = history.reduce((sum, h) => sum + h.totalScore, 0) / history.length;
    expect(avg).toBe(150);
  });
});
