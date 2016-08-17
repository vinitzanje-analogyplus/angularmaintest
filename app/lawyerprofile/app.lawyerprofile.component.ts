import { Component,Input } from '@angular/core';

import { Httptest } from './../httpservice';
import { Router, ActivatedRoute }       from '@angular/router';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-lawyerprofile',
  templateUrl: 'app/lawyerprofile/profile.html',
   styleUrls: ['app/lawyerprofile/app.component.css']
})
export class AppLawyerProfileComponent {



 
   constructor (private router: Router,private httpService: Httptest){

    //   console.log("profile.ts");
   }

//loggedin:string ;
   profileimage:any ;
   public getData;
   loggedin:string;
   firstname:any;
   lastname:any;
   emailid:any;
   contactno:any;
   dob:any;
   address:any;
   description:any;
   aboutme:any;
   profileid:string;
   filetest:any;

  ngOnInit()    {
     if(localStorage.getItem('auth_token')==null)
         {
            this.router.navigate(['/login']);
         }
         else{
       this.loggedin = localStorage.getItem('loggedinuser');

       this.httpService.getUserDetail()
        .subscribe(
         data =>{ 
                        this.getData = data 
                        console.log(this.getData)
                        if(this.getData[0].user_profile)
              {
                  this.firstname = this.getData[0].user_profile.firstname;
                   this.lastname = this.getData[0].user_profile.lastname;
                    this.emailid = this.getData[0].user_profile.emailid;
                     this.contactno = this.getData[0].user_profile.contactno;
                      this.dob = this.getData[0].user_profile.dob;
                       this.address = this.getData[0].user_profile.address;
                        this.description = this.getData[0].user_profile.descireption;
                         this.aboutme = this.getData[0].user_profile.aboutme;
                          this.profileid = this.getData[0].user_profile.id;
            } 
                          
                },
         error => alert(error),
         () => console.log()
         );
         }
   }

doTest()
{
console.log(this.filetest);
}


 changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();

    myReader.onloadend = function(e){
      // you can perform an action with readed data here
      this.profileimage=myReader.result;
      console.log(this.profileimage);

       this.router.navigate(['/myprofile']);
    }

    myReader.readAsDataURL(file);
  }


doClick()
{

    let body = JSON.stringify({ 
      "firstname": this.firstname,
        "lastname": this.lastname,
        "emailid": this.emailid,
        "contactno": this.contactno,
        "address": this.address,
        "descireption": this.description,
        "aboutme": this.aboutme,
        "dob": this.dob,
        "title": "NoValueherefornow",
  });

  console.log(body);
 
    this.httpService.doProfilePost(body,this.profileid)
        .subscribe(
         data =>{ 
                        this.getData = data    
                },
         error => alert(error),
         () => console.log(this.getData)
         );

}



}
