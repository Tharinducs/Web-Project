import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./admin/login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./shared/auth.guard";
import {AdminpannelComponent} from "./admin/adminpannel/adminpannel.component";
import {AllreservationComponent} from "./admin/allreservation/allreservation.component";


export const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admin', component: AdminpannelComponent, canActivate: [AuthGuard] },
  { path: 'allReservations', component: AllreservationComponent, canActivate: [AuthGuard]}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
