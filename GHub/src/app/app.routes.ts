import { Routes } from '@angular/router';
import { LoginPageModule } from './apps/login-page/login-page.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./apps/login-page/login-page.module').then(
        (module) => module.LoginPageModule,
      ),
  }
]
