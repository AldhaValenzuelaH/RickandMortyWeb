import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,MatCardModule
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-pruebita',
  imports: [
    MatCardActions,
    MatCardContent,
    MatCardSubtitle,
    MatCardHeader,
    MatCard,
    MatCardImage,
    MatButton,MatCardModule
  ],
  templateUrl: './pruebita.component.html',
  styleUrl: './pruebita.component.css'
})
export class PruebitaComponent {

}
