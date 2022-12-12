import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { UserComponent } from './user/user.component';
import { AboutUserComponent } from './user/about-user/about-user.component';
import { StatComponent } from './user/stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutUserComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
