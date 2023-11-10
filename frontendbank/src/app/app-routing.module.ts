import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { DasboardComponent } from './End-User/dasboard/dasboard.component';
import { SignupComponent } from './End-User/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },

  {path:'register',component:SignupComponent},
  {path:'forgot-password',component:ForgotComponent},
  {path:'logout',component:LogoutComponent},
  // { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {path:'dashboard',component:DasboardComponent},
  {
    path: 'customers',
    loadChildren: () =>
      import('./admin/customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./admin/payments/payments.module').then((m) => m.PaymentsModule),
  },

  {
    path: 'loans',
    loadChildren: () =>
      import('./admin/loans/loans.module').then((m) => m.LoansModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./admin/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./End-User/create-account/create-account.module').then((m) => m.CreateAccountModule),
  },
  {
    path: 'userloan',
    loadChildren: () =>
      import('./End-User/user-loan/user-loan.module').then((m) => m.UserLoanModule),
  },
  { path: 'activity', loadChildren: () => import('./auth/audit-log/audit-log.module').then(m => m.AuditLogModule) },
  { path: 'loantype', loadChildren: () => import('./admin/loantypes/loantypes.module').then(m => m.LoantypesModule) },
  { path: 'account', loadChildren: () => import('./End-User/create-account/create-account.module').then(m => m.CreateAccountModule) },
  { path: 'accounts', loadChildren: () => import('./admin/accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'signup', loadChildren: () => import('./End-User/signup/signup.module').then(m => m.SignupModule) },
  { path: 'userLoan', loadChildren: () => import('./End-User/user-loan/user-loan.module').then(m => m.UserLoanModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path:'**',pathMatch: "full",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
