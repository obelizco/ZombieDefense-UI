import { of, throwError } from 'rxjs';
import { DefenseResult } from '../../../../core/interfaces/defense-result.model';
import { DefenseService } from '../../services/defense.service';
import { DefenseFormComponent } from './defense-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('DefenseFormComponent', () => {
  let component: DefenseFormComponent;
  let fixture: ComponentFixture<DefenseFormComponent>;
  let defenseServiceSpy: jasmine.SpyObj<DefenseService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DefenseService', ['getOptimalStrategy']);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DefenseFormComponent],
      providers: [{ provide: DefenseService, useValue: spy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(DefenseFormComponent);
    component = fixture.componentInstance;
    defenseServiceSpy = TestBed.inject(DefenseService) as jasmine.SpyObj<DefenseService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service and update result on simulate()', () => {
    const mockResult: DefenseResult = {
      totalScore: 100,
      bulletsUsed: 5,
      timeUsed: 10,
      zombiesEliminated: []
    };

    defenseServiceSpy.getOptimalStrategy.and.returnValue(of(mockResult));
    component.bullets = 5;
    component.secondsAvailable = 10;

    component.simulate();

    expect(defenseServiceSpy.getOptimalStrategy).toHaveBeenCalledWith(5, 10);
    expect(component.result).toEqual(mockResult);
    expect(component.history.length).toBe(1);
  });

  it('should not call service if bullets or seconds are zero', () => {
    component.bullets = 0;
    component.secondsAvailable = 10;

    component.simulate();
    expect(defenseServiceSpy.getOptimalStrategy).not.toHaveBeenCalled();
  });


  it('should append results to history when multiple simulations run', () => {
    const mockResult: DefenseResult = { totalScore: 80, bulletsUsed: 4, timeUsed: 7, zombiesEliminated: [] };
    defenseServiceSpy.getOptimalStrategy.and.returnValue(of(mockResult));

    component.bullets = 5;
    component.secondsAvailable = 10;
    component.simulate();
    component.simulate();

    expect(component.history.length).toBe(2);
  });
});