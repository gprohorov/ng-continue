import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>

<h1> My routes  </h1>
    <nav>
      <a routerLink="/second"> Second</a>
    </nav>
    <router-outlet></router-outlet>

  </div>`
})
export class AppComponent {
  title = 'app';
}
