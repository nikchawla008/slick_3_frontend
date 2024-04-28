import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
   path: '',
   pathMatch: 'full',
   redirectTo: 'survey'
  },
  {
    path: 'survey',
    loadChildren: () => import('./lucknow-airport/lucknow-airport.module').then(m => m.LucknowAirportModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
