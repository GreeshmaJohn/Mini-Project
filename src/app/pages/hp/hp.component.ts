import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrls: ['./hp.component.css']
})
export class HpComponent {
  constructor(private router:Router,private hero:HeroService){}
  lap=this.hero.giveData();
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/category3']);
  }
}
