import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { MaintainProductsComponent } from './admin/maintain-products/maintain-products.component';
import { CategoryComponent } from './admin/category/category.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { PageSettingsComponent } from './admin/page-settings/page-settings.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AddProductComponent,
    EditProductComponent,
    MaintainProductsComponent,
    CategoryComponent,
    SingleProductComponent,
    AboutUsComponent,
    AdminHomeComponent,
    PageSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularToastifyModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
