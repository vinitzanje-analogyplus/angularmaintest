import { Component } from '@angular/core';

@Component({
  selector:    'my-app',
  templateUrl: 'app/html/app_component.html'

})
export class AppComponent {
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