import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: "Iniciar sesión" },
  { path: '', component: StartComponent, title: "Bienvenido"},
  { path: 'register', component: RegisterComponent, title: "Registrate" },
  { path: 'home', component: HomeComponent, title: "Home" }
];
