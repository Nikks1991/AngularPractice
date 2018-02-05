import {Injectable} from '@angular/core';

@Injectable()
export class WishService {
  private wishList  = [
    'Scuba Diving 123',
    'Play TT',
    'World Tour',
    'Jungle Safari',
    'Wildlife Photography',
    'Sky Diving',
    'Bike trip'
  ];  // contains whish list (hard coded temporarily)


  get() {
    return this.wishList;
  }
  }
