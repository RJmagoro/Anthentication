import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {



    name;
    surname;
    email;
    password;
    human={
      name:"",
      surname:"",
      email:"",
      password:"",
    }
    login: FormGroup;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.login = this.fb.group({
      name:['',[Validators.required]],
      surname:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  submit(){
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
      this.navCtrl.push("HomePage")
    })
    
  }

}
