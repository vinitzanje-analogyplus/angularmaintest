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

    model = new Regmodel(0,"","","","");

  constructor(private router: Router, private httpService: Httptest) { }

  doTest()
  {
    console.log(this.model);
  }

  Register(username: string, email: string, pass1: string, pass2: string) {
    console.log("register.ts");


    this.httpService.doReg(username, email, pass1, pass2)
      .subscribe(
      data => {

        this.getData = data

        if (this.getData.key != null) {
          localStorage.setItem('auth_token', this.getData.key);
          console.log(localStorage.getItem('auth_token'));
          localStorage.setItem('loggedinuser', username);
          this.router.navigate(['/myprofile']);

        }



      },
      error => alert(error),
      () => console.log(this.getData)
      );


  }





}
