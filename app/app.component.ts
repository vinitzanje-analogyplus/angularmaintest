import { Component } from '@angular/core';

@Component({
  selector:    'my-app',
  templateUrl: 'app/html/app_component.html'

})
export class AppComponent {
 mySize:any=0;

 open()
 {
   this.mySize=250
   console.log(this.mySize);

 }


}