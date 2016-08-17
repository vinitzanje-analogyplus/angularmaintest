import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './login/app.login.component';



const appRoutes: Routes = [


  {
    path: 'login',
    component: AppLoginComponent,
 
  }

];

export const routing = RouterModule.forRoot(appRoutes);