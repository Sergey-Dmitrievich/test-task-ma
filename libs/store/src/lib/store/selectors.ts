import { createSelector } from '@ngrx/store';
import { treeFeature, TreeState } from './reducer';


//Этот селектор для получения данных дерева из фичи 
export const selectAllTreeNodes = createSelector(
  treeFeature.selectTreeFeatureState,
  (state: TreeState) => state.treeNodes
);
