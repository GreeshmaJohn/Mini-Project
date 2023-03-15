import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-category3',
  templateUrl: './category3.component.html',
  styleUrls: ['./category3.component.css']
})
export class Category3Component {
  constructor(private router:Router, private hero:HeroService){}
  data=this.hero.giveData();

  category3:any 
  ngOnInit(){
let id=Number(localStorage.getItem('id'))
this.category3=data.filter(e=>e.id==id)
console.log("name",this.category3)
}

lap=this.hero.giveData();
gotohere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/category4']);
}
}
