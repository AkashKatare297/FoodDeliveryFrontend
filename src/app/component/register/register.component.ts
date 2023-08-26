import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cartId:number;
  cart1 = { };

  // cust:Customer=new Customer(this.customername,0,'','');
  customername:string="";
  customermobilenumber:string='';
  //customeremail:string="ijk@gmail.com";
  customeremail:string="";
  password:string="";
  successmessage:string="";
  //cust:Customer;
  cust:Customer=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);

  constructor(public dialog: MatDialogRef<RegisterComponent>,private loginservice:LoginService,private route:ActivatedRoute, private router:Router,private cart:CartService){}
  ngOnInit(): void {
    this.customername=this.route.snapshot.params['customername']; //to take url id 
    
    this.cust=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);
    //console.log(this.customeremail=this.customeremail);
  }

  saveCustomer(){
    console.log("Inside register"+this.customername);
    this.loginservice.addCustomer(this.cust).subscribe(
      (customer:Customer)=>{
        if(customer){
          this.cust=customer;
          console.log(customer);
          this.successmessage="Registration Successful! Please Login";
          alert("Registration Successful!")
          this.dialog.close();
  
          console.log(this.cust);
          this.cart.saveCart(this.cart1).subscribe(data=>{
            console.log(data);
            this.cartId=data.id;  
      
            this.cart.addCustomerToCart(this.cartId,customer).subscribe(cartwithcu=>{
              console.log(cartwithcu);
        
            })
      
           })
        }
        else{
          console.log("Email address already exists!");
          alert("Email address already exists!");
        }
       
        
      },
      (    error: any) => {
   
        console.error("Registration error:", error);
        alert("Email address already exists!");
       
        // Handle login error, show error message, etc.
       
        }
  
    );

    // if(!this.loginservice.addCustomer(this.cust)){
    //   alert("Registration Failed..Please try again later..");
    // }
     

   


  }

}





export class Customer{
  // [x: string]: any;
  // role : string = '';
  constructor(public customername:string, public customermobilenumber:string, public customeremail:string, public password:string){}
}