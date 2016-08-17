import { Component } from '@angular/core';





@Component({
  selector: 'app-login',
  templateUrl: 'app/login/login_component.html',
 

})
export class AppLoginComponent   {

//getData: Object[] ;

public getData;
public LoggedinUserInfo:string;
public key:string;




  
  constructor (  private router: Router,private httpService: Httptest){

              console.log(localStorage.getItem('auth_token'));

  }


   ngOnInit()    {

          console.log("login.ts");



this.key =    localStorage.getItem('auth_token');  

     

     if(this.key!=null)
         {
            this.router.navigate(['/myprofile']);
         }
         else
         {
            this.router.navigate(['/login']);

         }


         

   }



 doLogin(username: string,pass: string) {
   console.log(username+" "+pass); 
     this.httpService.doLogin(username,pass)
         .subscribe(
        	data => { 
            
            this.getData = data
            
          if (this.getData.key!=null) {
          localStorage.setItem('auth_token',this.getData.key);
          console.log(localStorage.getItem('auth_token'));
         localStorage.setItem('loggedinuser',username);  
                   this.router.navigate(['/myprofile']);

        }
        
      
    
           }, 
         	error => alert(error),
         () => console.log("finished")
         );

          
          
         
        }

        goToRegistrationPage()
        {
                             this.router.navigate(['/registration']);

        }

}






