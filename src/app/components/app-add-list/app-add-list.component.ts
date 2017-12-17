import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './app-add-list.component.html'
})

export class AddListComponent {

  @Output() private addWish = new EventEmitter();

  emitWish(inputRef) {
    this.addWish.emit(inputRef.value);
  }

}
