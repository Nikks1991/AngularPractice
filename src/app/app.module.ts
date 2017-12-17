import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AddListComponent} from './components/app-add-list/app-add-list.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppWishListComponent} from './components/app-wish-list/app-wish-list.component';

@NgModule({
  declarations: [ AppComponent, AppHeaderComponent, AppWishListComponent, AddListComponent ],
  imports: [ BrowserModule],
  providers: [],
  exports: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
