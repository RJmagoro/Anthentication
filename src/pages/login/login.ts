import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: FormGroup;
  email;
  password;
  human={
   
    email:"",
    password:"",
  }
  
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.login = this.fb.group({
      
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
    
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  navg(){

      

    
      this.navCtrl.push("SignupPage");
    
  }
  dologin(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user => {
      this.navCtrl.push("HomePage")
    })
  }
  
 

}
