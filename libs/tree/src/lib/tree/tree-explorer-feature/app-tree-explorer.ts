import { ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TreeComponent } from "../tree-feature/tree.component";

interface Tree {
  id: number
  title: string
  is_deleted?: boolean
  deleted_at?: string | null
  children: Tree[] | []
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-tree-explorer',
  standalone: true,
  imports: [AsyncPipe, TreeComponent],
  templateUrl: './app-tree-explorer.html',
  styleUrls: ['./app-tree-explorer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeExplorerComponent {



  all: Tree[] = [
    {
      "id": 1,
      "title": "Значение 1",
      "is_deleted": false,
      "children": [
        {
          "id": 2,
          "title": "Значение 1.1",
          "is_deleted": false,
          "children": [
            {
              "id": 3,
              "title": "Значение 1.1.1",
              "is_deleted": true,
              "children": []
            }
          ]
        },
        {
          "id": 4,
          "title": "Значение 1.2",
          "is_deleted": false,
          "children": [
            {
              "id": 5,
              "title": "Значение 1.2.1",
              "is_deleted": false,
              "children": []
            },
            {
              "id": 6,
              "title": "Значение 1.2.2",
              "is_deleted": false,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 7,
      "title": "Значение 2",
      "is_deleted": false,
      "children": [
        {
          "id": 8,
          "title": "Значение 2.1",
          "is_deleted": true,
          "children": [
            {
              "id": 9,
              "title": "Значение 2.1.1",
              "is_deleted": true,
              "children": [
                {
                  "id": 10,
                  "title": "Значение 2.1.1.1",
                  "is_deleted": true,
                  "children": [
                    {
                      "id": 11,
                      "title": "Значение 2.1.1.1.1",
                      "is_deleted": true,
                      "children": [
                        {
                          "id": 12,
                          "title": "Значение 2.1.1.1.1.1",
                          "is_deleted": false,
                          "deleted_at": null,
                          "children": [
                            {
                              "id": 13,
                              "title": "Значение 2.1.1.1.1.1.1",
                              "is_deleted": false,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": 13,
                          "title": "Значение 2.1.1.1.1.2",
                          "is_deleted": false,
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    }
  ]

  expanded: Record<number, boolean> = {};


  onToggle(node: Tree) {
    this.expanded[node.id] = !this.expanded[node.id];
  }


}
