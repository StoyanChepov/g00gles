import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CreatePrescriptionComponent } from './prescription/create-prescription/create-prescription.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { PrescriptionAllComponent } from './prescription/prescription-all/prescription-all.component';
import { PrescriptionDetailsComponent } from './prescription/prescription-details/prescription-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LandingComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'prescription/create', component: CreatePrescriptionComponent },
  { path: 'prescription/all', component: PrescriptionAllComponent },
  { path: 'prescription/details/:id', component: PrescriptionDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }