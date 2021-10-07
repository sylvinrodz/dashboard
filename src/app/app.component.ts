import { Router } from '@angular/router';
import { SidebarService } from './services/sidebar.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
 
  constructor(public ss:SidebarService,private router:Router){
    
  }
  ngOnInit(): void {
    // this.ss.toggleSidebar();
 
      this.ss.toggleSidebar();
      //  console.log(this.ss.Sidebar);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var user = JSON.parse(localStorage.getItem("Dashboarduser"));
        if(user == null)
        this.router.navigate(['/login']);
  }
}
