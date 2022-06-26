import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-basics';
  number = 45
  arr = [1, 2, 3]
  obj = {a: 1, b: {c: 2}}

  inputValue = ''

  //constructor() {
    //setTimeout(() => {
    //  console.log('Timeout is over')
    //  this.img = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    //}, 3000);

  //}

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log('Click!')
  }
}

