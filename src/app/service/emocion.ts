import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Emocion {
  private baseUrl = 'http://localhost:8000/emocion';

  constructor(private http: HttpClient) {}

  detectar(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ emociones: string[] }>(this.baseUrl, formData);
  }
}
