import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users'

//Pages
import { UserDetailsPage } from '../user-details/user-details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userList=[]

  constructor(public navCtrl: NavController, public users:UsersProvider) {
    this.users.loadData().then(data=>{
      //console.log(data)
      if (data) {
        console.log(data)
        this.userList = data["results"]
        
      } else {
        this.userList=[]
      }
      //console.log(this.userList)
      })
    }

    moreDetails(user){
      this.navCtrl.push(UserDetailsPage, {user:user})
      //console.log(user)
    }

    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
      this.users.loadData().then(data=>{
        //console.log(data)
        if (data) {
          console.log(data)
          this.userList = data["results"]
          
        } else {
          this.userList=[]
        }
      })
    
    setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 1000);
    }
  
  }

 
  
  