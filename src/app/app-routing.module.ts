import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AcerComponent } from './pages/acer/acer.component';
import { AsusComponent } from './pages/asus/asus.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { Category1Component } from './pages/category1/category1.component';
import { Category2Component } from './pages/category2/category2.component';
import { Category3Component } from './pages/category3/category3.component';
import { Category4Component } from './pages/category4/category4.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DellComponent } from './pages/dell/dell.component';
import { HomeComponent } from './pages/home/home.component';
import { HpComponent } from './pages/hp/hp.component';
import { LenovoComponent } from './pages/lenovo/lenovo.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  {
  path:'',component: HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'category',component:CategoryComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'acer',component:AcerComponent
  },
  {
    path:'asus',component:AsusComponent
  },
  {
    path:'dell',component:DellComponent
  },
  {
    path:'hp',component:HpComponent
  },
  {
    path:'lenovo',component:LenovoComponent
  },
  {
    path:'category1',component:Category1Component
  },
  {
    path:'category2',component:Category2Component
  },
  {
    path:'category3',component:Category3Component
  },
  {
    path:'category4',component:Category4Component
  }
  ,
  {
    path:'cart',component:CartComponent
  } ,
  {
    path:'payment',component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
