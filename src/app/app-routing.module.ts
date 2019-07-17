import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routingPaths as loginRoutingPaths } from './features/login/login-routing.module';

const routes: Routes = [
  {
    path : loginRoutingPaths.login,
    loadChildren: () => import('./features/login/login.module').then(mod => mod.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
