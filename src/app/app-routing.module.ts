import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'view-qrcode',
    loadChildren: () => import('./view-qrcode/view-qrcode.module').then( m => m.ViewQrcodePageModule),
    canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
