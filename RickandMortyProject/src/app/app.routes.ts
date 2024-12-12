import { Routes } from '@angular/router';
import {FinalListComponent} from './Character/components/final-list/final-list.component';

export const routes: Routes = [
  {path:'listita', component: FinalListComponent},
  {path: '', redirectTo: 'listita', pathMatch: 'full'},
];
