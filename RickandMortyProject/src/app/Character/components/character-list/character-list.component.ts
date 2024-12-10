import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {CharacterServiceService} from '../../services/character-service.service';
import {ApiResponse, Character} from '../../model/character';

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
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  constructor(private characterServiceService: CharacterServiceService) { }

  ngOnInit(): void {
    this.characterServiceService.getCharacters().subscribe(
      (response: ApiResponse) => {
        this.characters = response.results || [];
      },
      (error) => {
        console.error('Error al obtener personajes:', error);
      }
    );
  }

}
