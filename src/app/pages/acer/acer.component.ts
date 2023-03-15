import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acer',
  templateUrl: './acer.component.html',
  styleUrls: ['./acer.component.css']
})
export class AcerComponent {
  constructor(private router:Router,private hero:HeroService){}
  lap=this.hero.giveData();
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/category']);
  }
}
