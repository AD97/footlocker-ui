import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  url = "http://ec2-52-15-164-117.us-east-2.compute.amazonaws.com:8080/";
  localurl = "http://localhost:8080/";
  admin: any;
  error:string = "";

  constructor(private router: Router, private http: HttpClient) { }
  
 
  ngOnInit(): void {

  }



  submit() {
    let adminType: any;
    this.admin ={
      "username": this.form.value.username,
      "password": this.form.value.password,
      "type": ""
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    this.http.post(`${this.localurl}api/login`, this.admin, options).subscribe(
      data => {
        adminType = data;
        if (!!adminType){
          console.log(adminType.type);
          if(adminType.type === "Marketing"){
    
            this.router.navigate(['/market-admin'])
          } else if(adminType.type === "Warehouse"){
            this.router.navigate(['/warehouse-admin'])
          }
        }
         else {
          this.error = "Invalid Login. Try Again."
        }
      }
      
    )


  }
}
