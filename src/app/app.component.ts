import { Component } from '@angular/core';

import { Creature } from './models/creature.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  creatures = [
    new Creature('Dragon', 1),
    new Creature('Beholder', 2),
    new Creature('Goblin', 3),
    new Creature ('Kobold', 4)
  ];

}
