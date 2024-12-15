import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButton,
    MatSlideToggle
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  currentLanguage: string = 'en';

  toggleLanguage(event: any): void {
    this.currentLanguage = event.checked ? 'es' : 'en';
    console.log(`Language switched to: ${this.currentLanguage}`);
    // Aquí puedes agregar lógica adicional para cambiar dinámicamente el idioma
  }
}


