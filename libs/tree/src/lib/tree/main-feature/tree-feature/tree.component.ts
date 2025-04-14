import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tree } from '@ma/shared';

@Component({
  selector: 'lib-tree-feature-tree',
  standalone: true,
  imports: [],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  @Input() nodes: Tree[] = [];

  // Хранение состояния раскрытых узлов по id
  expanded: { [key: number]: boolean } = {};

  toggle(node: Tree): void {
    // Раскрываем узел, если у него есть вложенности
    if (node.children && node.children.length > 0) {
      this.expanded[node.id] = !this.expanded[node.id];
    }
  }
}
