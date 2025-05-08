import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Tree } from './data/tree.interface';

@Component({
  selector: 'app-tree-node',
  imports: [],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  @Input() nodes: Tree[] = [];
  @Input() expanded: Record<number, boolean> = {};
  @Output() onToggleNode = new EventEmitter<Tree>();

  onToggle(node: Tree): void {
    this.onToggleNode.emit(node);
  }
}

