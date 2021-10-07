import { AngularFirestore  } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
  getUser(LinkName:string,orderBy?:string,order?:firebase.default.firestore.OrderByDirection,limit?:number){
    return this.firestore.collection(LinkName, ref=> {
      let query : firebase.default.firestore.CollectionReference | firebase.default.firestore.Query = ref;
          if (orderBy && order) { query = query.orderBy(orderBy, order) };
          if (orderBy && !order) { query = query.orderBy(orderBy) };
          if(limit) { query = query.limit(limit)}
          return query;
    }).valueChanges();
  }
  getUploadedUser(orderBy:string,pageSize:number){
    return this.firestore.collection('signup', ref => ref.orderBy(orderBy).limit(pageSize)).valueChanges();
  }
  getUploadedUserNextPage(last,orderBy:string,pageSize:number){
    return this.firestore.collection('signup', ref => ref.orderBy(orderBy).startAfter(last[orderBy]).limit(pageSize)).valueChanges();
  }
  getUploadedUserPrevPage(first,orderBy:string,pageSize:number){
    return this.firestore.collection('signup', ref => ref.orderBy(orderBy).endBefore(first[orderBy]).limitToLast(pageSize)).valueChanges();
  }
  getActiveUser(databssname:string){
    return this.firestore.collection(databssname).doc('count').valueChanges();
  }
  logout(databssname,userID){
    return this.firestore.collection(databssname).doc(userID).update({
      isLogin:false,
      logoutAt:new Date()
    })
  }

  screenToggle(bool:boolean){
    return this.firestore.collection('showCountDown').doc('showCountDown').update({
      value:bool
    });
  }
  getScreenValue(){
    return this.firestore.collection('showCountDown').doc('showCountDown').valueChanges();
  }
}
