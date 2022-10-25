import { Component, Input, OnInit } from '@angular/core';
import { INGREDIENTS_LISTS } from '../mock-pastries';
import { List, Pastrie } from '../pastrie';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss'],
})
export class PastrieDetailsComponent implements OnInit {
  @Input() pastrie: Pastrie | null = null; // propriété [pastrie] liée
  ingredients: List['list'] = [];
  ingredientLists: List[] = INGREDIENTS_LISTS;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.pastrie) {
      this.ingredients =
        this.ingredientLists.find(
          (ingredient) => ingredient.id === this.pastrie?.id
        )?.list || [];
    }
  }
}
