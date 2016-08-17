import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { AppLoginComponent }   from './login/app.login.component';
import { AppLawyerListComponent }   from './lawyerlist/app.lawyerlist.component';
import { AppLawyerProfileComponent }   from './lawyerprofile/app.lawyerprofile.component';



import { routing }        from './app.routing';
import { HttpModule }     from '@angular/http';



import { HeroService }  from './heroservice';
import { Httptest }  from './httpservice';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppLawyerListComponent,
    AppLawyerProfileComponent
    

  ],
  providers: [
    HeroService,
    Httptest
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/