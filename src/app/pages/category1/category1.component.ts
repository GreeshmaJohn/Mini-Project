import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component {
  constructor(private router:Router, private hero:HeroService){}
  data=this.hero.giveData();

  category1:any 
  ngOnInit(){
let id=Number(localStorage.getItem('id'))
this.category1=data.filter(e=>e.id==id)
console.log("name",this.category1)
}

lap=this.hero.giveData();
gotohere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/category2']);
}
}
