import { Component } from '@angular/core';
import { ViewService } from 'src/app/view.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email1:string='';
  password1:string='';
  name:string='';
email: string='';
password: string='';
cpassword: string='';
constructor(private view: ViewService){}
submit(){
  console.log(this.name)
  console.log(this.email)
  console.log(this.password)
  console.log(this.cpassword)
  this.view.signUp(this.email,this.password)
  this.name=''
  this.email=''
  this.password=''
this.cpassword=''
}

login(){
  console.log(this.email1)
  console.log(this.password1)
  this.view.login(this.email1,this.password1)
  this.email1=''
  this.password1=''
}
}
