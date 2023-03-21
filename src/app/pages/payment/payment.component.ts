import { Component } from '@angular/core';
import { ViewService } from 'src/app/view.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  name:string=''
  num:string=''
  date:string=''
  cvv:string=''



  details:any

  constructor(private view:ViewService){}

  ngOnInit(){
    this.view.getcontact().subscribe(data =>{
      this.details=data
    })
  }

  check(){
    if(this.num == ''){
      alert('please enter valid Card Number')
      return;
    }
    if(this.date == ''){
      alert('please enter Expire Date')
      return;
    }
     if(this.cvv == ''){
      alert('please enter valid CVV')
      return;
    }
    if(this.name == ''){
      alert('please enter Name')
      return;
    }
    let info={
      name:this.name,
      num:this.num,
      date:this.date,
      cvv:this.cvv

    }
    this.view.check(info)
    console.log(this.name)
    console.log(this.num)
    console.log(this.date)
    console.log(this.cvv)

    this.name=''
    this.num=''
    this.date=''
    this.cvv=''
  }

}
