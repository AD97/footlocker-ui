import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-admin',
  templateUrl: './warehouse-admin.component.html',
  styleUrls: ['./warehouse-admin.component.css']
})
export class WarehouseAdminComponent implements OnInit {

  items: any;
  itemDetails: any = [];
  itemTypes: any;

  constructor(private http: HttpClient, private router: Router) { }

  url = "http://ec2-52-15-164-117.us-east-2.compute.amazonaws.com:8080/";
  localurl = "http://localhost:8080/";
  ngOnInit(): void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    this.http.get(`${this.localurl}api/items`).subscribe(
      data => {
        this.items = data;
        console.log(this.items);
      }
    )
    this.http.get(`${this.localurl}api/itemtypes`).subscribe(
      data => {
        this.itemTypes = data;
        console.log(this.itemTypes);
        for(let i =0; i< this.items.length; i++){
          for(let j =0; j< this.itemTypes.length; j++){
            if(this.items[i].modelno === this.itemTypes[j].modelno){
              this.itemDetails.push({
                "itemID": this.items[i].itemID,
                "modelno": this.itemTypes[j].modelno,
                "modelName": this.itemTypes[j].modelName,
                "apparelType": this.itemTypes[j].appareltype,
                "itemSize": this.itemTypes[j].itemSize,
                "color": this.itemTypes[j].color,
                "price": this.itemTypes[j].price,
                "supplierID": this.items[i].supplierID
              });
            }
          }
        }
      }
    )
 

    
  }

  edit(item:any){
    console.log(typeof(item.modelno));
    console.log(item.modelno);
    this.router.navigate(['/item-form', {'itemID': item.itemID, 'modelNo': item.modelno, 'supplierID': item.supplierID}]);
  }
  delete(id:String){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    this.http.delete(`${this.localurl}api/items/delete/${id}`, options).subscribe(
      (data) =>{console.log(data);}
    )
    location.reload();
  }

  create(){
    this.router.navigate(['/item-form']);
  }

}
