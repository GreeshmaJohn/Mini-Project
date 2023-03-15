import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
 import { Router } from '@angular/router';
 import { data } from 'src/assets/data';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
 
  constructor( private router:Router,private hero:HeroService){}
  data=this.hero.giveData();

  category:any 
  ngOnInit(){
let id = Number(localStorage.getItem('id'))
this.category= data.filter(e => e.id === id)
console.log("name",this.category)
}

lap=this.hero.giveData();
gotohere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/category1']);
}
}
