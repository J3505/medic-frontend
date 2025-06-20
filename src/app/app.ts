import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Emocion } from './service/emocion';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  imagenUrl: string | null = null;
  imagenBlob: Blob | null = null;
  resultado: string[] = [];

  constructor(private servicioEmocion: Emocion) {}

  ngAfterViewInit() {
    const video = document.querySelector('video')!;

    const checkOpenCV = setInterval(() => {
      if ((window as any).cv?.imread) {
        clearInterval(checkOpenCV);
        this.iniciarCamara(video);
      }
    }, 100);
  }

  iniciarCamara(video: HTMLVideoElement) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((err) => console.error('Error accediendo a la cámara', err));
  }

  /** Maneja archivo seleccionado */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.imagenBlob = file;
      this.imagenUrl = URL.createObjectURL(file);
    }
  }

  /** Captura desde cámara */
  capturarImagen() {
    const video = document.querySelector('video')!;
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d')!;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) {
        this.imagenBlob = blob;
        this.imagenUrl = URL.createObjectURL(blob);
      }
    }, 'image/jpeg');
  }

  /** Envía imagen (archivo o cámara) */
  enviarImagen() {
    if (!this.imagenBlob) return;

    const file = new File([this.imagenBlob], 'imagen.jpg', {
      type: 'image/jpeg',
    });
    this.servicioEmocion.detectar(file).subscribe({
      next: (res) => (this.resultado = res.emociones),
      error: (err) => console.error(err),
    });
  }
}
