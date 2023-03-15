import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html',
  styleUrls: ['./category4.component.css']
})
export class Category4Component {
  constructor(private router:Router, private hero:HeroService){}
  data=this.hero.giveData();

  category4:any 
  ngOnInit(){
let id=Number(localStorage.getItem('id'))
this.category4=data.filter(e=>e.id==id)
console.log("name",this.category4)
}

lap=this.hero.giveData();
gotohere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/category']);
}
}
