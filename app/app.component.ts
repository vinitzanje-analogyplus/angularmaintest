import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <md-sidenav-layout>
    <md-sidenav #start (open)="mybutton.focus()">
      Start Sidenav.
      <br>
      <a  #mybutton (click)="start.close()">Close</a>
    </md-sidenav>
    <md-sidenav #end align="end">
      End Sidenav.
      <a (click)="end.close()">Close</a>
    </md-sidenav>
 
    My regular content. This will be moved into the proper DOM at runtime.
  </md-sidenav-layout>
  `

})
export class AppComponent {
  title = '';
}