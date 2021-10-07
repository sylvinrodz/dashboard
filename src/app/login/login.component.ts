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
   var user =  localStorage.getItem("Dashboarduser");
   if(user)
    this.router.navigate(['/users']);
   
  // this.router.navigate(['/questions']);
  }
  login(form:NgForm){
    this.loginService.login(form.value).then((res)=>{
      localStorage.setItem("Dashboarduser",JSON.stringify(form.value));
      this.router.navigate(['/users']);
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
