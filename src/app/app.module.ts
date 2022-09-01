import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserformComponent } from './components/userform/userform.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { EllipsisPipe } from './ellipsis.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserformComponent,
    AboutComponent,
    PipedemoComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
