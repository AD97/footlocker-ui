import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  url = "http://ec2-52-15-164-117.us-east-2.compute.amazonaws.com:8080/";
  localurl = "http://localhost:8080/";
  itemID: any;
  itemData: any 
  form: FormGroup = new FormGroup({
    itemID: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]),
    modelNo: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]), 
    supplierID: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
  });
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.itemID = this.route.snapshot.paramMap.get('itemID');
    console.log(this.itemID);
    this.form.patchValue({
      itemID: this.route.snapshot.paramMap.get('itemID'),
      modelNo: this.route.snapshot.paramMap.get('modelNo'),
      supplierID: this.route.snapshot.paramMap.get('supplierID')
    })
  }

  submit(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    console.log(this.itemID);
    this.itemData = {
      "itemID": this.itemID,
      "modelno": this.form.value.modelNo,
      "supplierID": this.form.value.supplierID
    }


      if(this.itemID ===null){
        this.itemData = {
          "itemID": this.form.value.itemID,
          "modelno": this.form.value.modelNo,
          "supplierID": this.form.value.supplierID,
        }
        this.http.post(`${this.localurl}api/items/create/`, this.itemData, options).subscribe(
          data => {
            console.log(data);
            console.log(this.itemData);
          }
        )
      } else {
    this.http.put(`${this.localurl}api/items/update/${this.itemID}`, this.itemData, options).subscribe(
      data => {
        console.log(data);
        console.log(this.itemData);
      }
    )
      }
    this.router.navigate(['warehouse-admin']);
  }

}
