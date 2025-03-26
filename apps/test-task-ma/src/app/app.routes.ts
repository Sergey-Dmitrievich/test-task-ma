import { MainFeatureComponent } from '@ma/tree';
import { Route, Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { TreeEffects, treeFeature } from '@ma/store';
import { provideEffects } from '@ngrx/effects';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'tree', pathMatch: 'full', providers: [provideState(treeFeature), provideEffects(TreeEffects)],},
  { path: 'tree', component: MainFeatureComponent, providers: [provideState(treeFeature), provideEffects(TreeEffects)],},
];
