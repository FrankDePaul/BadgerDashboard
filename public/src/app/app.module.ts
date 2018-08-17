import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpService} from './http.service'
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddBadgerComponent } from './add-badger/add-badger.component';
import { ShowBadgerComponent } from './show-badger/show-badger.component';
import { ShowOneComponent } from './show-badger/show-one/show-one.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBadgerComponent,
    ShowBadgerComponent,
    ShowOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
