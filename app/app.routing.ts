import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from 'app/login/app.login.component';



const appRoutes: Routes = [


  {
    path: 'login',
    component: AppLoginComponent,
 
  }

];

export const routing = RouterModule.forRoot(appRoutes);