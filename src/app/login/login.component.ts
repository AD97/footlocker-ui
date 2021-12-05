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

  constructor(private router: Router) { }

  ngOnInit(): void {

  }



  submit() {
    if (this.form.value.username === "aadhi@marketing" && this.form.value.password === "password"){
      this.router.navigate(['/market-admin'])
    } 
    if (this.form.value.username === "aadhi@warehouse" && this.form.value.password === "password"){
      this.router.navigate(['/warehouse-admin'])
    } 
    if (this.form.value.username === "aadhi@supplier" && this.form.value.password === "password"){
      this.router.navigate(['/supplier-admin'])
    } 
    console.log(this.form.value.username);
  }
}
