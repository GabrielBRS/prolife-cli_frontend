import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginPageComponent } from './view/pages/authentication/auth-login-page/auth-login-page.component';
import { ClientHomePageComponent } from './view/pages/client/primary/client-home-page/client-home-page.component';
import { CommercialPageComponent } from './view/pages/commercial/commercial-page/commercial-page.component';
import { PageNotFoundComponent } from './view/pages/errors/page-not-found/page-not-found.component';
import { GraphicsClientComponent } from './view/pages/client/primary/graphics-client/graphics-client.component';
import { AuthGuardDoctor } from './engine/services/authentication/doctor/authentication-guard.service';
import { CollaboratorHomePageComponent } from './view/pages/collaborator/primary/collaborator-home-page/collaborator-home-page.component';
import { AuthGuardPatient } from './engine/services/authentication/patient/authentication-guard.service';
import { HomeComponent } from './view/pages/home/home.component';
import { AuthGuard } from './engine/services/authentication/authentication-guard.service';

const clientHomeRoutes: Routes = [
  { path: '',
    component: CommercialPageComponent
  },
  { path: 'login',
    component: AuthLoginPageComponent
  },
  { path: 'home',
  component: HomeComponent,
  loadChildren: () => import('./view/pages/home/home.module').then(m => m.HomeModule),
  canActivate:[AuthGuard],
},
  { path: 'patient',
    component: ClientHomePageComponent,
    loadChildren: () => import('./view/pages/client/primary/client-home-page/client-home-page.module').then(m => m.ClientHomePageModule),
    canActivate:[AuthGuardPatient],
  },
  // { path: 'patient/{id}',
  // component: ClientHomePageComponent,
  // loadChildren: () => import('./view/pages/client/primary/client-home-page/client-home-page.module').then(m => m.ClientHomePageModule),
  // },
  { path: 'patient/data',
    component: GraphicsClientComponent,
    loadChildren: () => import('./view/pages/client/primary/graphics-client/graphics-client.module').then(m => m.GraphicsClientModule),
  },
  { path: 'doctor',
    component: CollaboratorHomePageComponent,
    loadChildren: () => import('./view/pages/collaborator/primary/collaborator-home-page/collaborator-home-page.module').then(m => m.CollaboratorHomePageModule),
    canActivate:[AuthGuardDoctor],
 },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(clientHomeRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
