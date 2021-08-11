import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',component: LoginComponent
    
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path:'home', component: MainPageComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
