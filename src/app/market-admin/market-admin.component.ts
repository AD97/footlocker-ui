import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-market-admin',
  templateUrl: './market-admin.component.html',
  styleUrls: ['./market-admin.component.css']
})
export class MarketAdminComponent implements OnInit {

  customers: any;
  customerDetails: any;
  url = "http://ec2-52-15-164-117.us-east-2.compute.amazonaws.com:8080/";
  localurl = "http://localhost:8080/";
  form: FormGroup = new FormGroup({
    value: new FormControl('')
    });
    options: string[] =[];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
 
    let date = new Date().toLocaleString();
    console.log(date);
    this.customerDetails = {
      "custID": "",
      "dob": "13-DEC-2000",
      "email": "tharris@gmail.com",
      "phoneNo": "5209107777",
      "gender": "M",
      "fName": "Tom",
      "mInitial": "H",
      "lName": "Harris"
    }

    this.http.get(`${this.localurl}api/customers`).subscribe(
      data => {
        this.customers = data;
        console.log(this.customers);
        for (let customer of this.customers){
          this.options.push(customer.fName);
        }
      }
    )
  
  }

  edit(customer:any){
    console.log(typeof(customer.dob));

    this.router.navigate(['/customer-form', {'custID': customer.custID, 'dob' : customer.dob, 'email': customer.email, 
    'phoneNo': customer.phoneNo, 'gender': customer.gender, 'fName': customer.fName, 'mInitial': customer.mInitial, 'lName': customer.lName }]);
  }
  delete(id:String){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    this.http.delete(`${this.localurl}api/customers/delete/${id}`, options).subscribe(
      (data) =>{console.log(data);}
    )
    location.reload();
  }

  create(){
    this.router.navigate(['/customer-form']);
  }

  search(){
    let tempDetails = this.customers;
    this.customers = [];
    for(let i=0; i< tempDetails.length; i++){
      if(this.form.value.value === tempDetails[i].fName){
           this.customers.push(tempDetails[i]);   }
    }
  }

  reset(){
    this.http.get(`${this.localurl}api/customers`).subscribe(
      data => {
        this.customers = data;
        console.log(this.customers);
        for (let customer of this.customers){
          this.options.push(customer.fName);
        }
      }
    )
  }

}
