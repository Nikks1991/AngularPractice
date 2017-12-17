import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-wish-list',
  templateUrl: './app-wish-list.component.html'
})
export class AppWishListComponent {
  @Input() private list = [];

  @Output() private delete = new EventEmitter();

  constructor() {
    this.delete.subscribe(function() {
      console.log('delete called 2');
    });
    this.delete.subscribe(function() {
      console.log('delete called 1');
    });

  }

  deleteWish(index, item) {
    //this.wishList.splice(index, 1);
    this.delete.emit(index);
  }

}
