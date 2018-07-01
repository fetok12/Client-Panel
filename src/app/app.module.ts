import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// ANGULAR FIRE
import{ AngularFireModule } from 'angularfire2';
import{AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//Service Imports
import { ClientService } from './services/client.service';
import{AuthService} from './services/auth.service';
import{AuthGuard} from './guards/auth.guard';
import{RegisterGuard} from './guards/register.guard';
import{SettingsService} from './services/settings.service';

const appRoutes: Routes = [
  {path: '', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent, canActivate:[RegisterGuard]},
  {path:'login', component:LoginComponent},
  {path: 'add-client', component:AddClientComponent, canActivate:[AuthGuard]},
  {path: 'client/:id', component:ClientDetailsComponent, canActivate:[AuthGuard]},
  {path: 'edit-client/:id', component:EditClientComponent, canActivate:[AuthGuard]},
  {path: 'settings', component:SettingsComponent, canActivate:[AuthGuard]},
  {path:'*', component:PageNotFoundComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyDj7lHozrYB1G_pIHnT0RcOla0IYOkVOLM",
  authDomain: "clientpanel-e06dd.firebaseapp.com",
  databaseURL: "https://clientpanel-e06dd.firebaseio.com",
  storageBucket: "clientpanel-e06dd.appspot.com",
  messagingSenderId: "365629391560"

}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule.forRoot()
  ],
  providers: [
  AngularFireAuth,
  AngularFireDatabase,
  ClientService,
  AuthService,
  AuthGuard,
  RegisterGuard,
  SettingsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }