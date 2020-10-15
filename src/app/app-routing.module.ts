import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'frame',
    loadChildren: () => import('./pages/shared/frame/frame.module').then(m => m.FramePageModule)
  },
  {
    path: 'frameless',
    loadChildren: () => import('./pages/shared/frameless/frameless.module').then(m => m.FramelessPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
