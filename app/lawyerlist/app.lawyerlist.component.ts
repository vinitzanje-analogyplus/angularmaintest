import { Component } from '@angular/core';



import { Httptest } from './../httpservice';


import { Http, Headers } from '@angular/http';
@Component({


  selector: 'app-lawyerlist',
  templateUrl: 'app/lawyerlist/list.html',
   styleUrls: ['app/lawyerlist/app.component.css'],
 

})
export class AppLawyerListComponent {


  
 public lawyerlist;


   mockdata ;
 
  
  constructor (public httpService: Httptest){

      this.mockdata = this.httpService.mockdata;
      console.log(this.mockdata);

  }

 

  ngOnInit()    {
       this.mockdata = this.httpService.mockdata;
      console.log(this.mockdata);


                }

       



}
