import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(data){
    let promise = new Promise((resolve, reject) => {
      if(data.username === "admin" && data.password === "admin@123"){
        resolve({code:1,msg:"Login Successful."});
      }else{
        reject({code:0,msg:"Login failed. Please enter valid credentials."});
      }
    });
    return promise;
    
  }
}
