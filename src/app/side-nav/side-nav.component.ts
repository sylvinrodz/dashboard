import { SidebarService } from './../services/sidebar.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  pages = [
    {
      name:"Dashboard",
      link:"/main"
    },
    {
      name:"Users",
      link:"/users"
    },
    // {
    //   name:"Uploaded Users",
    //   link:"/uploadedUser"
    // },
    {
      name:"Questions",
      link:"/questions"
    },
    // {
    //   name:"Photobooth",
    //   link:"/photos"
    // }
  ]
  constructor(private router:Router,private ss:SidebarService) { }

  ngOnInit(): void {
    var user =  localStorage.getItem("Dashboarduser");
    if(user == null){
     this.router.navigate(['/login']);
    }else{
      this.ss.toggleSidebar();
    }
  }
  goToPage(page){
    this.router.navigate([page]);
  }
  logout(){
    localStorage.clear();
    location.reload();
    this.ss.toggleSidebar();
  }
}
