import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { DropdownDirective } from './navbar/dropdown.directive';
import { CollapseDirective } from './navbar/collapse.directive';
import { AuthService } from './authentication/auth.service';
import { ToastrModule } from 'ngx-toastr'
import { JwtInterceptorService } from './jwt-interceptor.service';
import { CreatePrescriptionComponent } from './prescription/create-prescription/create-prescription.component';
import { PrescriptionUserComponent } from './prescription/prescription-user/prescription-user.component';
import { PrescriptionDetailsComponent } from './prescription/prescription-details/prescription-details.component';
import { UploadPrescriptionComponent } from './prescription/upload-prescription/upload-prescription.component';
import { PrescriptionService } from './prescription/prescription.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    DropdownDirective,
    CollapseDirective,
    CreatePrescriptionComponent,
    PrescriptionUserComponent,
    PrescriptionDetailsComponent,
    UploadPrescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    PrescriptionService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
