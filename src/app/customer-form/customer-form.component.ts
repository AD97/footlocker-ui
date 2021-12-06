import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  url = "http://ec2-52-15-164-117.us-east-2.compute.amazonaws.com:8080/";
  
  localurl = "http://localhost:8080/";
  custID: any;
  customerDetails: any 
  form: FormGroup = new FormGroup({
    dob: new FormControl(),
    email: new FormControl(''),
    phoneno: new FormControl(''),
    gender: new FormControl(''),
    fName: new FormControl(''),
    mInitial: new FormControl(''),
    lName: new FormControl(''),
  });
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.custID = this.route.snapshot.paramMap.get('custID');
    console.log(this.custID);
    this.form.patchValue({
      dob: this.route.snapshot.paramMap.get('dob'),
      email: this.route.snapshot.paramMap.get('email'),
      phoneno: this.route.snapshot.paramMap.get('phoneNo'),
      gender: this.route.snapshot.paramMap.get('gender'),
      fName: this.route.snapshot.paramMap.get('fName'),
      mInitial: this.route.snapshot.paramMap.get('mInitial'),
      lName: this.route.snapshot.paramMap.get('lName')
    })
  }

  submit(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    let date = new Date(this.form.value.dob);
    console.log(this.custID);
    console.log(this.form.value.phoneno);
    this.customerDetails = {
      "dob": date,
      "email": this.form.value.email,
      "phoneNo": this.form.value.phoneno,
      "gender": this.form.value.gender,
      "fName": this.form.value.fName,
      "mInitial": this.form.value.mInitial,
      "lName": this.form.value.lName
    }

    this.http.put(`${this.localurl}api/customers/update/${this.custID}`, this.customerDetails, options).subscribe(
      data => {
        console.log(data);
        console.log(this.customerDetails);
      }
    )
      if(this.custID ===null){
        this.customerDetails = {
          "custID": "",
          "dob": date,
          "email": this.form.value.email,
          "phoneNo": this.form.value.phoneno,
          "gender": this.form.value.gender,
          "fName": this.form.value.fName,
          "mInitial": this.form.value.mInitial,
          "lName": this.form.value.lName
        }
        this.http.post(`${this.localurl}api/customers/create/`, this.customerDetails, options).subscribe(
          data => {
            console.log(data);
            console.log(this.customerDetails);
          }
        )
      }
    this.router.navigate(['market-admin']);
  }

}
