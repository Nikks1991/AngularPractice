import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './app.component.html'
})

export class AppComponent {
    private date: string = new Date().toISOString();
    private object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
