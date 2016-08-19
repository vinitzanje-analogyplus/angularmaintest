import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from 'app/login/app.login.component';
import { AppLawyerListComponent } from 'app/lawyerlist/app.lawyerlist.component';
//import { AppRegisterComponent } from './registration/app.register.component';
import { AppLawyerProfileComponent } from 'app/lawyerprofile/app.lawyerprofile.component';
import { AppRegisterComponent }   from 'app/registration/app.register.component';

//import { AppTestComponent } from './testcomponent/app.login.component';




const appRoutes: Routes = [

 {
    path: 'login',
    component: AppLoginComponent,
 
  },
   {
    path: 'registration',
     component: AppRegisterComponent
   },
  //   {
  //   path: 'test',
  //   component: AppTestComponent
  // },

  {
    path: 'search',
    component: AppLawyerListComponent
  },
  
   {
     path: 'myprofile',
     component: AppLawyerProfileComponent
   },
{
  path: '',
  redirectTo: '/search',
  pathMatch: 'full'
}


];







export const routing = RouterModule.forRoot(appRoutes);