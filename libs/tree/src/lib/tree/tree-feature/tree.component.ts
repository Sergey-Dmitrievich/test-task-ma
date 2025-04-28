import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

interface Tree {
  id: number
  title: string
  is_deleted?: boolean
  deleted_at?: string | null
  children: Tree[] | []
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-tree-node',
  standalone: true,
  imports: [],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  @Input() nodes: Tree[] = [];
  @Input() expanded: Record<number, boolean> = {};
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() toggle = new EventEmitter<Tree>();


  onToggle(node: Tree): void {
    this.toggle.emit(node);
  }
}

