import { Component, OnInit } from '@angular/core';

import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss'],
})
export class PastriesComponent implements OnInit {
  titlePage: string = 'Page pricipale: Liste des pâtisseries';
  pastries: Pastrie[] = PASTRIES;
  selectedPastrie: Pastrie | null = null;

  constructor() {}

  ngOnInit(): void {}

  onSelect(pastrie: Pastrie): void {
    this.selectedPastrie = pastrie;
  }
}
