import { Routes } from '@angular/router';
import {PruebitaComponent} from './Character/components/pruebita/pruebita.component';
import {CharacterListComponent} from './Character/components/character-list/character-list.component';

export const routes: Routes = [
  {path: 'pruebita', component: PruebitaComponent},
  {path:'listita', component: CharacterListComponent},
  {path: '', redirectTo: 'listita', pathMatch: 'full'},
];
