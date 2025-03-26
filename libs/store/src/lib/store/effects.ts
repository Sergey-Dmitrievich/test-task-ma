import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TreeDataService } from '@ma/shared';
import { loadTreeNodes, loadTreeNodesSuccess, loadTreeNodesFailure } from './actions';
import { ITree } from '@ma/shared';

@Injectable()
export class TreeEffects {
  actions$ = inject(Actions)
  treeDataService = inject(TreeDataService)

  //Здесь мы прослушиваем на событие-провокатор loadTreeNodes
  //Когда оно происходит мы получаем данные типо с сервера и кидаем их в редюсер, а он в стор

  loadTreeNodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTreeNodes),
      switchMap(() =>{
        return this.treeDataService.getTreeNodes().pipe(
          map((treeNodes: ITree[]) => loadTreeNodesSuccess({ treeNodes })),
          catchError((error) => of(loadTreeNodesFailure({ error })))
        )}
      )
    )
  );
}
