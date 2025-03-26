import { createAction, props } from '@ngrx/store';
import { ITree } from '@ma/shared';

export const loadTreeNodes = createAction('Просто для провокации эффекта');

export const loadTreeNodesSuccess = createAction(
  'Для залива данных в стор',
  props<{ treeNodes: ITree[] }>()
);

export const loadTreeNodesFailure = createAction(
  'Для ошибки',
  props<{ error: string }>()
);
