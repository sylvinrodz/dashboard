import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {
tweets;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://www.skilliza.com/php/twitter.php?search=9665292723").subscribe((res:any)=>{
      console.log(res);
      this.tweets = res.data;
    })
  }

}
