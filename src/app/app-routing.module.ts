import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/routings/guards/auth.guard';
import { routingPaths as loginRoutingPaths } from './features/login/login-routing.module';
import { routingPaths as mainRoutingPaths } from './features/main/main-routing.module';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: mainRoutingPaths.main,
  //   pathMatch: 'full'
  // },
  {
    path : loginRoutingPaths.login,
    loadChildren: () => import('./features/login/login.module').then(mod => mod.LoginModule),
  },
  {
    path : mainRoutingPaths.main,
    loadChildren: () => import('./features/main/main.module').then(mod => mod.MainModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
