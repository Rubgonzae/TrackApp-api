import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'mapdevice', 
    loadChildren: () => import('./mapdevice/mapdevice.module').then(m => m.MapdevicePageModule)
  },
  { 
    path: 'list-devices', 
    loadChildren: () => import('./list-devices/list-devices.module').then(m => m.ListDevicesPageModule)
  },
  { 
    path: 'add-device', 
    loadChildren: () => import('./add-device/add-device.module').then(m => m.AddDevicePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
