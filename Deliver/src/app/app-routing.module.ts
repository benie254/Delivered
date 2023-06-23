import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DailyCumulativeComponent } from './components/print/daily-cumulative/daily-cumulative.component';
import { MonthlyCumulativeComponent } from './components/print/monthly-cumulative/monthly-cumulative.component';
import { TodayReportsComponent } from './components/print/today-reports/today-reports.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'print/cumulative/daily', component: DailyCumulativeComponent},
  {path: 'print/cumulative/monthly', component: MonthlyCumulativeComponent},
  {path: 'print/reports/today', component: TodayReportsComponent},
  {path: 'auth', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
