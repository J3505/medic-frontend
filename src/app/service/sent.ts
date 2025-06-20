import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sent {

  private apiUrl = '/api';  // URL del backend

  constructor(private http: HttpClient) { }

  detectFace(image: File): Observable<any> {
  const formData = new FormData();
  formData.append('image', image, image.name);
  return this.http.post(`${this.apiUrl}/detect_face`, formData);
}


  classifySentiment(text: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/classify_sentiment`, { text });
  }
}
