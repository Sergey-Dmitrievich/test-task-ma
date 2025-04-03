import { ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ITree, TreeDataService } from '@ma/shared';
import { Store } from '@ngrx/store';
import { selectAllTreeNodes, loadTreeNodes } from '@ma/store';
import { AsyncPipe } from '@angular/common';
import { TreeComponent } from "./tree-feature/tree.component";

@Component({
  selector: 'lib-tree-feature-main',
  standalone: true,
  imports: [AsyncPipe, TreeComponent],
  templateUrl: './main-feature.component.html',
  styleUrls: ['./main-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainFeatureComponent implements OnInit  {
toggle(_t3: any) {
  throw new Error('Method not implemented.');
}
  //Тут особо пояснять нечего я думаю
  treeNodes$: Observable<ITree[]> | undefined;

  all = inject(TreeDataService).all

  store = inject(Store)

  ngOnInit(): void {
    //Тут провоцируем эффеет экшеном loadTreeNodes, он заливает данные имитированные как с вервера в фичу, и потом мы достаём через селектор их
    this.store.dispatch(loadTreeNodes());

    this.treeNodes$ = this.store.select(selectAllTreeNodes);

  }


}
