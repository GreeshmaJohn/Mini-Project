import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Firestore, collectionData,collection,addDoc} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  constructor(private auth:Auth,private router:Router,private view:Firestore){}
 
  //signup method()
  signUp(email: string, password: string) {
    //  throw new Error('Method not implemented.');
     createUserWithEmailAndPassword(this.auth,email,password).then(res =>{
      alert("SignUp Successfully")
      this.router.navigate(['/'])
     }).catch(err =>{
      alert("Please enter a valid input")
     })
  }

  //login method()
  login(email: string, password: string) {
    //  throw new Error('Method not implemented.');
     signInWithEmailAndPassword(this.auth,email,password).then(res =>{
      // alert("Login Successfully")
      this.router.navigate(['/'])
     }).catch(err =>{
      alert("Please enter a valid input")
     })
  }
   //contact method()
   
   contact(data:any){
    const contactcollection=collection(this.view,'contactDetails')
    addDoc(contactcollection,data).then(res=>{
      alert("Data added succesfully")
    }).catch(err=>{
      alert(err)
    })
   }

   //getcontact mthod()

   getcontact(){
    const contactcollection=collection(this.view,'contactDetails')
    return collectionData(contactcollection)
   }

   //check method()
   check(data:any){
    const paymentcollection=collection(this.view,'paymentdetails')
    addDoc(paymentcollection,data).then(res=>{
      // alert("Order placed Successfully")
      this.router.navigate(['/checkout'])
    }).catch(err=>{
      alert(err)
    })
   }

   //address method()
   add(data:any){
    const addresscollection=collection(this.view,'addressdetails')
    addDoc(addresscollection,data).then(res=>{
      alert("Data added succesfully")
      this.router.navigate(['/payment'])
    }).catch(err=>{
      alert(err)
    })
   }

}
