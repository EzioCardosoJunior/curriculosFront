import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/auth/guards/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/main/home/home.component';
import { RotaInvalidaComponent } from './components/rota-invalida/rota-invalida.component';
import { LocaisComponent } from './components/main/locais/locais.component';
import { CadastrosComponent } from './components/main/cadastros/cadastros.component'; 

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'locais', component: LocaisComponent, canActivate:[AuthGuard]},
  {path:'cadastros', component: CadastrosComponent, canActivate:[AuthGuard]},
  {path:'**', component: RotaInvalidaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
