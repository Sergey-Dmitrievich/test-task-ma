import { ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Tree, TreeDataService } from '@ma/shared';
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
export class MainFeatureComponent {


  all: Tree[] = inject(TreeDataService).treeNodes



}
