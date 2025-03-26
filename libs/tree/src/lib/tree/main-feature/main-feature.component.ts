import { ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ITree, TreeDataService } from '@ma/shared';
import { Store } from '@ngrx/store';
import { selectAllTreeNodes, loadTreeNodes } from '@ma/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-tree-feature-main',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './main-feature.component.html',
  styleUrls: ['./main-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainFeatureComponent implements OnInit  {
  //Тут особо пояснять нечего я думаю
  treeNodes$: Observable<ITree[]> | undefined;

  all = inject(TreeDataService).all

  store = inject(Store)

  ngOnInit(): void {
    //Тут провоцируем эффеет экшеном loadTreeNodes, он заливает данные имитированные как с вервера в фичу, и потом мы достаём через селектор их
    this.store.dispatch(loadTreeNodes());

    this.treeNodes$ = this.store.select(selectAllTreeNodes);

  }

  //Это уже для изменения состояния узлов, это отедельный массив объектов
  isChildrenUpdate(id: number){
    const currentValue = this.all[id].isChildren();
    this.all[id].isChildren.set(!currentValue);
  }
  //Это уже для получения состояния узлов
  isChildren(id: number){
    return this.all[id].isChildren();
  }

}
