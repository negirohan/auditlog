import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataviewComponent } from './pages/dataview/dataview.component';
import { LoginComponent } from './pages/login/login.component';
import { TenantaliasComponent } from './pages/tenantalias/tenantalias.component';

const routes: Routes = [
  { path: '', 'redirectTo': '/tenantAlias', pathMatch: 'full' },
  { path: 'tenantAlias', component: TenantaliasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DataviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
