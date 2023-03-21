import { Component } from '@angular/core';
import { ViewService } from 'src/app/view.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  name:string=''
  name1:string=''
  phone:string=''
  email:string=''
  address:string=''
  city:string=''
  country:string=''
  pin:string=''
  land:string=''

  details:any

  constructor(private view:ViewService){}

  ngOnInit(){
    this.view.getcontact().subscribe(data =>{
      this.details=data
    })
  }

  add(){
    if(this.name == ''){
      alert('please enter First Name')
      return;
    }
    if(this.name1 == ''){
      alert('please enter Last Name')
      return;
    }
     if(this.phone == ''){
      alert('please enter Mobile No')
      return;
    }
    if(this.email == ''){
      alert('please enter Email')
      return;
    }
    if(this.address == ''){
      alert('please enter Address')
      return;
    }
    if(this.city == ''){
      alert('please enter City')
      return;
    }
    if(this.country == ''){
      alert('please enter Country')
      return;
    }
    if(this.pin == ''){
      alert('please enter PinCode')
      return;
    }
    let info={
      name:this.name,
      name1:this.name1,
      phone:this.phone,
      email:this.email,
      address:this.address,
      city:this.city,
      country:this.country,
      pin:this.pin,
      land:this.land

    }
    this.view.add(info)
    console.log(this.name)
    console.log(this.name1)
    console.log(this.email)
    console.log(this.phone)
    console.log(this.address)
    console.log(this.city)
    console.log(this.country)
    console.log(this.pin)
    console.log(this.land)
    
    this.name=''
    this.name1=''
    this.email=''
    this.phone=''
    this.address=''
    this.city=''
    this.country=''
    this.pin=''
    this.land=''
  }
}
