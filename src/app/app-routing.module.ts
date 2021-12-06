import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { LoginComponent } from './login/login.component';
import { MarketAdminComponent } from './market-admin/market-admin.component';
import { WarehouseAdminComponent } from './warehouse-admin/warehouse-admin.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'market-admin', component: MarketAdminComponent},
  {path: 'customer-form', component: CustomerFormComponent},
  {path: 'warehouse-admin', component : WarehouseAdminComponent},
  {path: 'item-form', component: ItemFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
