import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DefenseResult } from '../../../core/interfaces/defense-result.model';


@Injectable({ providedIn: 'root' })
export class DefenseService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getOptimalStrategy(bullets: number, secondsAvailable: number): Observable<DefenseResult> {
    return this.http.get<DefenseResult>(
      `${this.apiUrl}/optimal-strategy?bullets=${bullets}&secondsAvailable=${secondsAvailable}`
    );
  }
}