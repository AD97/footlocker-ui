import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MarketAdminComponent } from './market-admin/market-admin.component';
import { WarehouseAdminComponent } from './warehouse-admin/warehouse-admin.component';
import { SupplierAdminComponent } from './supplier-admin/supplier-admin.component';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarketAdminComponent,
    WarehouseAdminComponent,
    SupplierAdminComponent,
    CustomerFormComponent,
    ItemFormComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
