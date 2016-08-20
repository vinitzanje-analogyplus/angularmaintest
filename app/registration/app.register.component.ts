import { Component } from '@angular/core';


import { Router, ActivatedRoute }       from '@angular/router';

import { Httptest } from './../httpservice';
import { Regmodel }    from './regmodel';


import { Http, Headers } from '@angular/http';
@Component({

  selector: 'app-register',
  templateUrl: 'app/registration/register.html',
})
export class AppRegisterComponent {


  ngOnInit() {

    console.log("register.ts");
  }

  public getData;

  error: string;
    name: string;
active=true;

  dataj: JSON;
  genders = ['Male','Female'];

//  public model:any;


    model = new Regmodel(0,"","","","");

  constructor(private router: Router, private httpService: Httptest) { }

  doTest(heroForm:any)
{

console.log(heroForm);
//this.Register(this.model);  

}

changelistner(data:any)
{
  console.log(data.value.username);
}

  Register(m:Regmodel) {
    console.log("register.ts");


    this.httpService.doReg(m.username, m.emailid, m.password, m.password)
      .subscribe(
      data => {

        this.getData = data

        if (this.getData.key != null) {
          localStorage.setItem('auth_token', this.getData.key);
          console.log(localStorage.getItem('auth_token'));
          localStorage.setItem('loggedinuser', m.username);
          this.router.navigate(['/myprofile']);

        }



      },
      error => alert(error),
      () => console.log(this.getData)
      );


  }





}
