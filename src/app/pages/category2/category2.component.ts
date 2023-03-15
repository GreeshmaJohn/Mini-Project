import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component {
  constructor(private router:Router, private hero:HeroService){}
  data=this.hero.giveData();

  category2:any 
  ngOnInit(){
let id=Number(localStorage.getItem('id'))
this.category2=data.filter(e=>e.id==id)
console.log("name",this.category2)
}

lap=this.hero.giveData();
gotohere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/category3']);
}
}
