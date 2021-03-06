import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  Sidebar:boolean = false;
  public sidbarSubject = new BehaviorSubject<boolean>(false);
  constructor() { }

  ngOnInit(): void {
    // var user =  localStorage.getItem("Dashboarduser");
    // if(user == null){
    //  // this.router.navigate(['/login']);
    //  this.Sidebar = false;
    // }else{
    //   this.Sidebar = true;
    // }
    //  console.log(this.sidbarSubject.asObservable());
    this.toggleSidebar()
  }
  toggleSidebar(){

       var user =  JSON.parse(localStorage.getItem("Dashboarduser"));
    if(user == null){
     // this.router.navigate(['/login']);
     this.sidbarSubject.next(false);
    }else{
      if(user.role == 'admin')
      this.sidbarSubject.next(true);
      else
      this.sidbarSubject.next(false);
    }
  }

  readSidebar():Observable<boolean>{
    return this.sidbarSubject.asObservable();
    
  }

}
