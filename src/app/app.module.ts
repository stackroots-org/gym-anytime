import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from'@angular/common/http';




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
    BookSloatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
