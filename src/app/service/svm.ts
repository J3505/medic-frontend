import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface PredictionResponse {
  prediction: number;
}

@Injectable({
  providedIn: 'root'
})
export class Svm {
  private apiUrl = 'http://127.0.0.1:8000/predict/';

  constructor(private http: HttpClient) { }

  getPrediction(features: number[]): Observable<PredictionResponse> {
    return this.http.post<PredictionResponse>(this.apiUrl, { features });
  }
}
