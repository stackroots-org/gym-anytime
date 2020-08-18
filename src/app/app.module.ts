import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from'@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SloatCreationComponent } from './sloat-creation/sloat-creation.component';
import { ListSloatsComponent } from './list-sloats/list-sloats.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookSloatComponent } from './book-sloat/book-sloat.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ErrorComponent } from './error/error.component';
import { AlreadyBookedComponent } from './already-booked/already-booked.component';
import { GymNameComponent } from './gym-name/gym-name.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent,
    RegisterUserComponent,
    ListUserComponent,
    SloatCreationComponent,
    ListSloatsComponent,
    BookingsComponent,
    BookSloatComponent,
    LogOutComponent,
    ErrorComponent,
    AlreadyBookedComponent,
    GymNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
