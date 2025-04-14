import { MainFeatureComponent } from '@ma/tree';
import { Route, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'tree', pathMatch: 'full'},
  { path: 'tree', component: MainFeatureComponent},
];
