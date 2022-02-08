import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  LoginAlert:boolean = false;
  LoginAlertMsg:string = '';
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  
   var user =  JSON.parse(localStorage.getItem("Dashboarduser"));
   if(user.role == 'admin'  ){
    this.router.navigate(['/main']);
   }
    
  //  else{
  //   this.router.navigate(['/questions']);
  //  }
   
  // this.router.navigate(['/questions']);
  }
  login(form:NgForm, role){
    this.loginService.login(form.value).then((res)=>{
      form.value.role = "admin";
      localStorage.setItem("Dashboarduser",JSON.stringify(form.value));
      this.router.navigate(['/main']);
    }).catch((err)=>{
      this.LoginAlert = true;
      this.LoginAlertMsg =err.msg;
      setTimeout(() => {
        this.LoginAlert = false;
        this.LoginAlertMsg ='';
      }, 1500);
    })
  }
}
