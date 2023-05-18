import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegisterServiceService } from '../service/register-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user: any;
  msg:any;
  constructor(private userServ: RegisterServiceService, private router: Router, private toast:NgToastService){

  }

  ngOnInit(): void {
    
  }
 

  registerUser(form:NgForm){
    let userName = form.value.username;
    let useremail = form.value.email;
    let userMobileNo = form.value.phnnumber;
    let userAddress = form.value.address;
    let userPassword = form.value.password;
    
    this.userServ.regUser({userName,useremail,userMobileNo,userAddress,userPassword})
                              .subscribe(
                                data=>{
                                  console.log("response recieved");
                                  this.toast.success({detail:"Successful", summary:"Registered successfully", duration:5000});
                                  this.router.navigate(['/login']);
                                  
                                } ,
                                error=>{
                                  console.log("Exception");
                                  this.msg="Username already present";
                                  this.toast.error({detail:"Error Occurred", summary:"Username already present", duration:5000 })
                                }
                                );

  }
  gotoLogin(){
    this.router.navigate(['/login']);
  }
  
}
