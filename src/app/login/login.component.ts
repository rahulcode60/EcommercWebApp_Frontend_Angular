import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegisterServiceService } from '../service/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userLogin:any;
  msg:any;

  ngOnInit(): void {
    
  }

  constructor(private Userlogin : RegisterServiceService, private router : Router, private toast:NgToastService){

  }

  loginUser(form:NgForm){
    let userName = form.value.username;
    let userPassword = form.value.password;

    this.Userlogin.loginUser({userName,userPassword})
                      .subscribe(
                        data=>{
                          console.log("response recieved(Login)");
                          this.toast.success({detail:"Successful", summary:"Login successful", duration:5000});
                          this.router.navigate(['/header1']);
                        } ,
                        error=>{
                          console.log("Exception");
                          this.toast.error({detail:"Error Occurred", summary:"Invalid Username or password", duration:5000});
                          this.msg="Invalid username or password"
                        }
                
                      );
  } 
  gotoRegistration(){
    this.router.navigate(['/register']);
  }

}
