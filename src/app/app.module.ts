import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { AcerComponent } from './pages/acer/acer.component';
import { AsusComponent } from './pages/asus/asus.component';
import { DellComponent } from './pages/dell/dell.component';
import { HpComponent } from './pages/hp/hp.component';
import { LenovoComponent } from './pages/lenovo/lenovo.component';
import { Category1Component } from './pages/category1/category1.component';
import { Category2Component } from './pages/category2/category2.component';
import { Category3Component } from './pages/category3/category3.component';
import { Category4Component } from './pages/category4/category4.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    AcerComponent,
    AsusComponent,
    DellComponent,
    HpComponent,
    LenovoComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
