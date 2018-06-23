import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ROUTING} from "./app.routing";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './register/register.component';


import { AuthGuard} from './shared/auth.guard';
import {UserService} from './shared/user.service';
import { AdminpannelComponent } from './admin/adminpannel/adminpannel.component';
import { AllreservationComponent } from './admin/allreservation/allreservation.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminpannelComponent,
    AllreservationComponent,


  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
