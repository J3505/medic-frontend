import { Component } from '@angular/core';
import { Sent } from './service/sent';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imageFile: File | null = null;
  faces: any[] = [];

  constructor(private sentService: Sent) {}

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  detectFace() {
    if (this.imageFile) {
      this.sentService.detectFace(this.imageFile).subscribe(response => {
        this.faces = response.faces;
        console.log(this.faces);
      });
    }
  }
}
