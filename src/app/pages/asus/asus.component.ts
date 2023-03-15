import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-asus',
  templateUrl: './asus.component.html',
  styleUrls: ['./asus.component.css']
})
export class AsusComponent {
  constructor(private router:Router,private hero:HeroService){}
  lap=this.hero.giveData();
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/category1']);
  }
}
