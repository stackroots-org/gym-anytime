import { NgModule,Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppHeaderComponent} from './app-header/app-header.component'
import{BookSloatComponent} from './book-sloat/book-sloat.component'
import{BookingsComponent} from './bookings/bookings.component'
import{ListSloatsComponent} from './list-sloats/list-sloats.component'
import{ListUserComponent} from './list-user/list-user.component'
import{LoginComponent} from './login/login.component'
import{RegisterUserComponent} from './register-user/register-user.component'
import {SloatCreationComponent} from './sloat-creation/sloat-creation.component'

//new-addmission
const routes: Routes = [{path:"",component:LoginComponent},{path:"bookings",component:BookingsComponent},{path:"customers",component:ListUserComponent},
{path:"new-addmission",component:RegisterUserComponent},{path:"sloats",component:ListSloatsComponent},{path:"create-sloats",component:SloatCreationComponent}
,{path:"book-sloat",component:BookSloatComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
