import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDirectives';
  //ngIf & ngFor
  show: boolean = false;
  listItems = [
    {
      name: 'Alex',
      age: 23,
    },
    {
      name: 'Jack',
      age: 25,
    },
    {
      name: 'Ryan',
      age: 27,
    },
    {
      name: 'Shawn',
      age: 24,
    },
    {
      name: 'Bella',
      age: 29,
    },
    {
      name: 'Peter',
      age: 32,
    },
  ];


  //ngFor
 
  // fullStackDev = [{
  //   id : 1,
  //   name : 'Angular'
  //  },
  //  {
  //   id : 2,
  //   name : 'React'
  //  },
  //  {
  //   id : 3,
  //   name : 'Node.js'
  //  },
  //  {
  //   id : 4,
  //   name : 'MongoDB'
  //  }];
}
