import { Component } from '@angular/core';
import { WishService } from './../../services/wish.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    private wishList  = [];
    constructor(wishService: WishService) {
        this.wishList = wishService.get();
    }

    addWish(value) {
      this.wishList.push(value);
    }

    deleteWish(index) {
      console.log('value', index);
      this.wishList.splice(index, 1);
    }
}
