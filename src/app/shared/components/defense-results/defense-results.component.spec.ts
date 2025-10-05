import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefenseResultsComponent } from './defense-results.component';
import { DefenseResult } from '../../../core/interfaces/defense-result.model';
import { TableModule } from 'primeng/table';

describe('DefenseResultsComponent', () => {
  let component: DefenseResultsComponent;
  let fixture: ComponentFixture<DefenseResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TableModule],
      declarations: [DefenseResultsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DefenseResultsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should render result properties correctly', () => {
    component.result = {
      totalScore: 120,
      bulletsUsed: 8,
      timeUsed: 12,
      zombiesEliminated: [{ zombieType: 'Runner', score: 40, threatLevel: 2 } as any]
    };
    fixture.detectChanges();

    expect(component.result.totalScore).toBe(120);
    expect(component.result.zombiesEliminated.length).toBe(1);
  });

  it('should display zombies sorted by threat level', () => {
    const zombies = [
      { zombieType: 'Walker', threatLevel: 1 },
      { zombieType: 'Tank', threatLevel: 3 },
      { zombieType: 'Runner', threatLevel: 2 }
    ] as any;

    component.result = {
      totalScore: 100,
      bulletsUsed: 6,
      timeUsed: 8,
      zombiesEliminated: zombies
    };
    fixture.detectChanges();

    const sorted = component.result.zombiesEliminated.sort((a, b) => b.threatLevel - a.threatLevel);
    expect(sorted[0].zombieType).toBe('Tank');
  });

  it('should compute total zombies eliminated', () => {
    component.result = {
      totalScore: 200,
      bulletsUsed: 10,
      timeUsed: 20,
      zombiesEliminated: [{}, {}, {}] as any
    };
    expect(component.result.zombiesEliminated.length).toBe(3);
  });
});
