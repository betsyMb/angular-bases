import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'She Hulk',
  ];
  public deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
