import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  users=[{
    name:"tester",
    test1:"qwe",
    test2:"123"
  }]

  userList=[]

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  loadData(){
    return new Promise((resolve,reject)=>{
      this.http.get('https://randomuser.me/api/?results=10')
      //.map(res=>res.json())
      .subscribe(data=>{
        resolve(data);
        },(err) => {
      reject(err);
    });
    });
    
  }
}
