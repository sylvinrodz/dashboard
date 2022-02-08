import { environment } from './../../environments/environment.prod';
import { FirebaseService } from './../services/firebase.service';
import { SidebarService } from './../services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
activeUsers;
URLName;
tabName;
showEnable:boolean;
counts:any = [];
  constructor(private router:Router,public ss:SidebarService,private firebase:FirebaseService,private http:HttpClient) { }

  ngOnInit(): void {
    // this.firebase.getActiveUser1().subscribe((res:any)=>{
    //   console.log(res.length);
      
    //   });
    var user =  localStorage.getItem("Dashboarduser");
   if(user == null){
    this.router.navigate(['/login']);
   }else{
     this.ss.toggleSidebar();
   }
   
    
     this.counts = environment.counts;
     if(this.counts.length > 0){
      this.counts.forEach(element => {
        this.firebase.getActiveUser(element.urlName).subscribe((res:any)=>{
           element.count = res.total;
          console.log(res);
          });
      });
    }
    // this.firebase.getScreenValue().subscribe((res)=>{
    //   this.showEnable = res['value'];
    // })

  }
  toogle(value){
    var r = confirm("Are you sure, you want to show video screen for all user?");
    if (r == true) {
      console.log(value);
      this.firebase.screenToggle(value);
    }
  }
  
}
