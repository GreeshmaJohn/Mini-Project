import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-dell',
  templateUrl: './dell.component.html',
  styleUrls: ['./dell.component.css']
})
export class DellComponent {
  constructor(private router:Router,private hero:HeroService){}
  lap=this.hero.giveData();
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/category2']);
  }
}
