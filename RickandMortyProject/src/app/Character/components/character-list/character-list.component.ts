import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCard,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {Character} from '../../model/character';

@Component({
  selector: 'app-character-list',
    imports: [
      CommonModule,
        MatCard,
        MatCardAvatar,
        MatCardContent,
        MatCardHeader,
        MatCardImage,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  @Input() character!: Character;
}
