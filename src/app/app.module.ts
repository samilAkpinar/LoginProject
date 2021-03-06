import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';
import { LoginFormComponent } from './partial/login-form/login-form.component';
import { PasswordForgottenComponent } from './partial/password-forgotten/password-forgotten.component';
import { LoginButtonComponent } from './partial/login-button/login-button.component';
import { ResetPasswordButtonComponent } from './partial/reset-password-button/reset-password-button.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddContactButtonComponent } from './partial/add-contact-button/add-contact-button.component';
import { SearchInputComponent } from './partial/search-input/search-input.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    ImageComponent,
    InputComponent,
    LoginFormComponent,
    PasswordForgottenComponent,
    LoginButtonComponent,
    ResetPasswordButtonComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ContactsComponent,
    SettingsComponent,
    MainPageComponent,
    AddContactButtonComponent,
    SearchInputComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
