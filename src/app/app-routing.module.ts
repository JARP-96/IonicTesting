import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./pages/gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'device-info',
    loadChildren: () => import('./pages/device-info/device-info.module').then( m => m.DeviceInfoPageModule)
  },
  {
    path: 'phone-call',
    loadChildren: () => import('./pages/phone-call/phone-call.module').then( m => m.PhoneCallPageModule)
  },
  {
    path: 'mysql',
    loadChildren: () => import('./pages/mysql/mysql.module').then( m => m.MysqlPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
