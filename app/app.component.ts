import { Component } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';


@Component({
  selector:    'my-app',
  templateUrl: 'app/html/app_component.html'

})
export class AppComponent {

  title = 'app works!';
show: boolean = false;

username:string;


  constructor (private router: Router){}


   ngDoCheck() {
     if(localStorage.getItem('auth_token')!=null)
         {
           this.show = false;
           this.username = localStorage.getItem('loggedinuser');
         }
         else 
          {            
            this.show = true;
          }
  }


 
Logout()
{
  localStorage.removeItem('auth_token');
  localStorage.removeItem('loggedinuser');
  this.show = true;

  this.router.navigate(['/login']);

}










 




 mySize:any=0;
open()
  {
    if(this.mySize==0)
    {
    this.mySize=250;
    }
    else
    {
      this.mySize=0;
    }
    console.log(this.mySize);
  }


}