import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({ 
  declarations: [      //component ıcın
    AppComponent,
    NavbarComponent,
  ],
  imports: [           //module icin
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],        //services
  bootstrap: [AppComponent],  //starter component
  
})
export class AppModule { }
