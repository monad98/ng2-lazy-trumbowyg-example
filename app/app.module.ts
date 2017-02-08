import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrumbowygModule} from 'ng2-lazy-trumbowyg';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, TrumbowygModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
