import { Component } from '@angular/core';
import { ViewService } from 'src/app/view.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string=''
  email:string=''
  mobile:string=''
  opt:string=''
  msg:string=''

  details:any

  constructor(private view:ViewService){}

  ngOnInit(){
    this.view.getcontact().subscribe(data =>{
      this.details=data
    })
  }

  contact(){
    let info={
      name:this.name,
      email:this.email,
      mobile:this.mobile,
      msg:this.msg,
      opt:this.opt

    }
    this.view.contact(info)
    console.log(this.name)
    console.log(this.email)
    
    this.name=''
    this.email=''
    this.mobile=''
    this.msg=''
    this.opt=''
  }
}
