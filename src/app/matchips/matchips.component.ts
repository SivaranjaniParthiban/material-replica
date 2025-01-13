import { Component, signal } from '@angular/core';
import { anime, animes } from '../check-box/animes';

@Component({
  selector: 'app-matchips',
  templateUrl: './matchips.component.html',
  styleUrls: ['./matchips.component.scss'],
})
export class MatchipsComponent {
  chips = animes;
}
