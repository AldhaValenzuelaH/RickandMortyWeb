import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(this.baseUrl + 'character');
  }
}
