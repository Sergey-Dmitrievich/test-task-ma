import { createFeature, createReducer, on } from '@ngrx/store';
import { loadTreeNodes, loadTreeNodesSuccess, loadTreeNodesFailure } from './actions';
import { ITree } from '@ma/shared';

export interface TreeState {
  treeNodes: ITree[];
  loading: boolean;
  error: string | null;
}

export const initialState: TreeState = {
  treeNodes: [],
  loading: false,
  error: null
};

export const treeReducer = createReducer(
  initialState,
  //При экшен-провокаторе мы просто ставим locading true, типа загрузка данных началась
  on(loadTreeNodes, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  //При экшене для зарузки данных в стор, мы их получаем и загружаем в стор соответственно
  on(loadTreeNodesSuccess, (state, { treeNodes }) => ({
    ...state,
    loading: false,
    treeNodes: treeNodes
  })),
  //Это просто грубо говоря обработка ошибок, хотя в нашем случае их быть не может
  on(loadTreeNodesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  }))
);

//Тут создаём фичу, чтобы стор был структурирован нормально, а не всё в одном куче
export const treeFeature = createFeature({
  name: 'treeFeature',
  reducer: treeReducer
})