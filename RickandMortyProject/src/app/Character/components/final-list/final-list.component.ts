import {Component, OnInit} from '@angular/core';
import {ApiResponse, Character} from '../../model/character';
import {CharacterServiceService} from '../../services/character-service.service';
import {CharacterListComponent} from '../character-list/character-list.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-final-list',
  imports: [
    CharacterListComponent,
    NgForOf
  ],
  templateUrl: './final-list.component.html',
  styleUrl: './final-list.component.css'
})
export class FinalListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterServiceService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      (response: ApiResponse) => {
        this.characters = response.results || [];
      },
      (error) => {
        console.error('Error al obtener personajes:', error);
      }
    );
  }
}
