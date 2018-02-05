import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AddListComponent} from './components/app-add-list/app-add-list.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppWishListComponent} from './components/app-wish-list/app-wish-list.component';
import {FileReaderComponent} from './components/file-reader/file-reader.component';

import {WishService} from './services/wish.service';

const routes: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'read-file',
        component: FileReaderComponent
    }
];

@NgModule({
  declarations: [ AppComponent, WelcomeComponent, AppHeaderComponent, AppWishListComponent, AddListComponent, FileReaderComponent ],
  imports: [
      BrowserModule
      RouterModule.forRoot(routes)
  ],
  providers: [WishService],
  exports: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
