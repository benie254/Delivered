import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';
import * as Notiflix from 'notiflix';
import { ReqInterceptor } from './helpers/interceptor/req.interceptor';
import { ChangePassComponent } from './auth/components/change-pass/change-pass.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetConfirmedComponent } from './auth/components/reset-confirmed/reset-confirmed.component';
import { ResetPassComponent } from './auth/components/reset-pass/reset-pass.component';
import { ChangePassFormComponent } from './auth/forms/change-pass-form/change-pass-form.component';
import { LoginFormComponent } from './auth/forms/login-form/login-form.component';
import { RegFormComponent } from './auth/forms/reg-form/reg-form.component';
import { ResetConfirmedFormComponent } from './auth/forms/reset-confirmed-form/reset-confirmed-form.component';
import { ResetRequestFormComponent } from './auth/forms/reset-request-form/reset-request-form.component';
import { DeliveryFormComponent } from './forms/delivery-form/delivery-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DailyCumulativeComponent } from './components/print/daily-cumulative/daily-cumulative.component';
import { MonthlyCumulativeComponent } from './components/print/monthly-cumulative/monthly-cumulative.component';
import { TodayReportsComponent } from './components/print/today-reports/today-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangePassComponent,
    LoginComponent,
    RegisterComponent,
    ResetConfirmedComponent,
    ResetPassComponent,
    ChangePassFormComponent,
    LoginFormComponent,
    RegFormComponent,
    ResetConfirmedFormComponent,
    ResetRequestFormComponent,
    DeliveryFormComponent,
    NavbarComponent,
    HomeComponent,
    ReportsComponent,
    DailyCumulativeComponent,
    MonthlyCumulativeComponent,
    TodayReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgxPaginationModule,
    MatExpansionModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
