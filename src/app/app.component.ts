import {Component} from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './app.component.html'
})

export class AppComponent {
  private wishList  = [
    'Scuba Diving 123',
    'Play TT',
    'World Tour',
    'Jungle Safari',
    'Wildlife Photography',
    'Sky Diving'
  ];  // contains whish list (hard coded temporarily)


  addWish(value) {
    this.wishList.push(value);
  }

  deleteWish(index) {
    console.log('value', index);
    this.wishList.splice(index, 1);
  }
}
