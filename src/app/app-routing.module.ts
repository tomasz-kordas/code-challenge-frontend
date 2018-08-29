import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {CanActivateRouterService} from "./_services/can-activate-router.service";


const routes

  : Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [CanActivateRouterService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActivateRouterService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'details',
    component: DetailsComponent,
    canActivate: [CanActivateRouterService]
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [CanActivateRouterService]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
