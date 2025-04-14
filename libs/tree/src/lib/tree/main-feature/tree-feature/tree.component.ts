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

  
  expanded: { [key: number]: boolean } = {};

  toggle(node: Tree): void {
    if (node.children && node.children.length > 0) {
      this.expanded[node.id] = !this.expanded[node.id];
    }
  }
}
