import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {

  constructor(private router : Router){}

  logout(){
    this.router.navigate(['/login']);
  }
}
